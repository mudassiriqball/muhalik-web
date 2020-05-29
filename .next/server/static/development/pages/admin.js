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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_admin_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard */ "./src/pages/components/admin/dashboard/dashboard.js");
/* harmony import */ var _components_admin_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard-side-drawer */ "./src/pages/components/admin/dashboard/dashboard-side-drawer.js");
/* harmony import */ var _components_admin_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/layout/AdminLayout */ "./src/pages/components/admin/layout/AdminLayout.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const BackDrop = props => __jsx("div", {
  className: "jsx-3404600223"
}, __jsx("div", {
  onClick: props.click,
  className: "jsx-3404600223"
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3404600223"
}, ".jsx-3404600223{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxhZG1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjb0IsQUFFNkIsZUFDSixXQUNDLFlBQ04sTUFDQyxPQUN1QiwyQkFDbEIsWUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXE5ldyBmb2xkZXJcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkJztcclxuaW1wb3J0IERhc2hib2FyZFNpZGVEcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQtc2lkZS1kcmF3ZXInO1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL2FkbWluL2xheW91dC9BZG1pbkxheW91dCc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uL3N0eWxlU2hlZXQnO1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCB7IGNoZWN0QXV0aCwgcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSwgZ2V0VG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5cclxuY29uc3QgQmFja0Ryb3AgPSBwcm9wcyA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17cHJvcHMuY2xpY2t9PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxubGV0IHRva2VuID0gJydcclxuY2xhc3MgQWRtaW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoVXNlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2lkZURyYXdlck9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93V3JhcHBlcjogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdDogW10sXHJcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yaWVzX2xpc3Q6IFtdLFxyXG5cclxuICAgICAgICAgICAgZmllbGRzX2xpc3Q6IFtdLFxyXG4gICAgICAgICAgICBmaWVsZF9yZXF1ZXN0c19saXN0OiBbXSxcclxuXHJcbiAgICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgICAgdXNlcl9uYW1lOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvY2F0ZWdvcmllcy9jYXRlZ29yaWVzJztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9rZW46IGF3YWl0IGdldFRva2VuRnJvbVN0b3JhZ2UoKSB9KVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0OiByZXNwb25zZS5kYXRhLmNhdGVnb3J5LmRvY3MsXHJcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiByZXNwb25zZS5kYXRhLnN1Yl9jYXRlZ29yeS5kb2NzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZXJvcmllcyBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCB1cmxfMSA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL2NhdGVnb3JpZXMvZmllbGRzJztcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQodXJsXzEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmllbGRzX2xpc3Q6IHJlc3BvbnNlLmRhdGEuZGF0YS5kb2NzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWVsZHMgRmV0Y2hpbmcgRXJyb3I6XCIsIGVycm9yKVxyXG4gICAgICAgICAgICBhbGVydCgnRmllbGRzIEZldGNoaW5nIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCB1cmxfMiA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL2NhdGVnb3JpZXMvZmllbGQtcmVxdWVzdHMnO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCh1cmxfMikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZF9yZXF1ZXN0c19saXN0OiByZXNwb25zZS5kYXRhLmRhdGEuZG9jcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmllbGQgUmVxdWVzdHMgRmV0Y2hpbmcgRXJyb3I6XCIsIGVycm9yKVxyXG4gICAgICAgICAgICBhbGVydCgnRiBlcnJvcjogJywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGF4aW9zLmdldChNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzX2xpc3QvY2F0ZWdvcmllc19saXN0Jyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGdldEZpZWxkcygpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGF4aW9zLmdldChNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzX2xpc3QvZmllbGRzJyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBheGlvcy5hbGwoW2dldENhdGVnb3JpZXMoKSwgZ2V0RmllbGRzKCldKVxyXG4gICAgICAgIC8vICAgICAudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q6IHJlc3BvbnNlWzBdLmRhdGEuY2F0ZWdvcnkuZG9jcyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiByZXNwb25zZVswXS5kYXRhLnN1Yl9jYXRlZ29yeS5kb2NzLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZpZWxkczogcmVzcG9uc2VbMV0uZGF0YS5zdWJfY2F0ZWdvcnkuZG9jc1xyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSkpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SUjonLCBlcnJvcik7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGF1dGhVc2VyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyX25hbWU6IGF3YWl0IGNoZWN0QXV0aCgnYWRtaW4nKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3ZXJUb2dnbGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzaWRlRHJhd2VyT3BlbjogIXByZXZTdGF0ZS5zaWRlRHJhd2VyT3BlbiB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNob3dXcmFwcGVyQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc2hvd1dyYXBwZXI6ICFwcmV2U3RhdGUuc2hvd1dyYXBwZXIgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpZGVEcmF3ZXJPcGVuOiBmYWxzZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZW1vdmVUb2tlbkZyb21TdG9yYWdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRva2VuOiAnJywgdXNlcl9uYW1lOiAnJywgfSlcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy9pbmRleCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdMb2dvdXQgRmFpbGVkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBiYWNrZHJvcDtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaWRlRHJhd2VyT3Blbikge1xyXG4gICAgICAgICAgICBiYWNrZHJvcCA9IDxCYWNrRHJvcCBjbGljaz17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcn0gLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIHsvKiA8QWRtaW5MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICAgICAgPERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5zdWJfY2F0ZWdvcmllc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc19saXN0PXt0aGlzLnN0YXRlLmZpZWxkc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkX3JlcXVlc3RzX2xpc3Q9e3RoaXMuc3RhdGUuZmllbGRfcmVxdWVzdHNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICB0b2tlbj17dGhpcy5zdGF0ZS50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU9e3RoaXMuc3RhdGUudXNlcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd1dyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd2VyQ2xpY2tIYW5kbGVyPXt0aGlzLmRyYXdlclRvZ2dsZUNsaWNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQnRuQ2xpY2tIYW5kbGVyPXt0aGlzLlNob3dXcmFwcGVyQ2xpY2tIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ291dENsaWNrSGFuZGxlcj17dGhpcy5sb2dvdXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8RGFzaGJvYXJkU2lkZURyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdD17dGhpcy5zdGF0ZS5zdWJfY2F0ZWdvcmllc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc19saXN0PXt0aGlzLnN0YXRlLmZpZWxkc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkX3JlcXVlc3RzX2xpc3Q9e3RoaXMuc3RhdGUuZmllbGRfcmVxdWVzdHNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICB0b2tlbj17dGhpcy5zdGF0ZS50b2tlbn1cclxuICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU9e3RoaXMuc3RhdGUudXNlcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2lkZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0Q2xpY2tIYW5kbGVyPXt0aGlzLmxvZ291dH0gLz5cclxuICAgICAgICAgICAgICAgIHtiYWNrZHJvcH1cclxuICAgICAgICAgICAgICAgIHsvKiA8L0FkbWluTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\admin.js */"));

let token = '';

class Admin extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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

    _defineProperty(this, "logout", () => {
      if (Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_9__["removeTokenFromStorage"])()) {
        this.setState({
          token: '',
          user_name: ''
        });
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/index');
      } else {
        alert('Logout Failed');
      }
    });

    this.authUser();
    this.state = {
      sideDrawerOpen: false,
      showWrapper: true,
      categories_list: [],
      sub_categories_list: [],
      fields_list: [],
      field_requests_list: [],
      token: '',
      user_name: ''
    };
  }

  async componentDidMount() {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__["default"].PATH + '/api/categories/categories';
    this.setState({
      token: await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_9__["getTokenFromStorage"])()
    });
    const currentComponent = this;
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(response => {
      currentComponent.setState({
        categories_list: response.data.category.docs,
        sub_categories_list: response.data.sub_category.docs
      });
    }).catch(error => {
      console.log('Caterories Fetchig Error: ', error);
    });
    const url_1 = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__["default"].PATH + '/api/categories/fields';
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url_1).then(function (response) {
      currentComponent.setState({
        fields_list: response.data.data.docs
      });
    }).catch(function (error) {
      console.log("Fields Fetching Error:", error);
      alert('Fields Fetching Error: ', error);
    });
    const url_2 = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__["default"].PATH + '/api/categories/field-requests';
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url_2).then(function (response) {
      currentComponent.setState({
        field_requests_list: response.data.data.docs
      });
    }).catch(function (error) {
      console.log("Field Requests Fetching Error:", error);
      alert('F error: ', error);
    }); // function getCategories() {
    //     return axios.get(MuhalikConfig.PATH + '/api/categories_list/categories_list');
    // }
    // function getFields() {
    //     return axios.get(MuhalikConfig.PATH + '/api/categories_list/fields');
    // }
    // axios.all([getCategories(), getFields()])
    //     .then(axios.spread(function (response) {
    //         this.setState({
    //             categories_list: response[0].data.category.docs,
    //             sub_categories_list: response[0].data.sub_category.docs,
    //             fields: response[1].data.sub_category.docs
    //         })
    //     })).catch(function (error) {
    //         console.log('ERRORR:', error);
    //     });
  }

  async authUser() {
    this.setState({
      user_name: await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_9__["chectAuth"])('admin')
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
    }, __jsx(_components_admin_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      categories_list: this.state.categories_list,
      sub_categories_list: this.state.sub_categories_list,
      fields_list: this.state.fields_list,
      field_requests_list: this.state.field_requests_list,
      token: this.state.token,
      user_name: this.state.user_name,
      show: this.state.showWrapper,
      drawerClickHandler: this.drawerToggleClickHandler,
      wrapperBtnClickHandler: this.ShowWrapperClickHandler,
      logoutClickHandler: this.logout
    }), __jsx(_components_admin_dashboard_dashboard_side_drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      categories_list: this.state.categories_list,
      sub_categories_list: this.state.sub_categories_list,
      fields_list: this.state.fields_list,
      field_requests_list: this.state.field_requests_list,
      token: this.state.token,
      user_name: this.state.user_name,
      show: this.state.sideDrawerOpen,
      click: this.backdropClickHandler,
      logoutClickHandler: this.logout
    }), backdrop);
  }

}

const styles = {
  body: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].body_color}`,
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    minHeight: '100vh'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/admin-dashboard.js":
/*!************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/admin-dashboard.js ***!
  \************************************************************************************/
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
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../title-row */ "./src/pages/components/title-row.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // american-sign-language-interpreting







class AdminDashboard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3124640742"
    }, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_8__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTachometerAlt"],
      title: ' Admin Dashboard'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
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
    }, "Vendoors"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
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
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXGFkbWluLWRhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSHFCLEFBSXdCLEFBRXFCLGdCQUZwQixBQUlELGVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXE5ldyBmb2xkZXJcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xcYWRtaW4tZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzLCBmYVRhY2hvbWV0ZXJBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuaW1wb3J0IFRpdGxlUm93IGZyb20gJy4uLy4uLy4uL3RpdGxlLXJvdyc7XHJcblxyXG5jbGFzcyBBZG1pbkRhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVSb3cgaWNvbj17ZmFUYWNob21ldGVyQWx0fSB0aXRsZT17JyBBZG1pbiBEYXNoYm9hcmQnfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+VmVuZG9vcnM8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PkN1c3RvbWVyczwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IFByb2R1Y3QgU29sZCA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRodW1ic1VwfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IE9yZWRycyA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1Njc4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17Nn0gbWQ9ezZ9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5WZW5kb3JzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PkN1c3RvbWVyczwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzBweCdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dDoge1xyXG4gICAgICAgIGNvbG9yOiAnIzZBNzA3NCcsXHJcbiAgICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc1MHB4JyxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5EYXNoYm9hcmQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-contents\\\\admin-dashboard.js */"));
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
/* harmony default export */ __webpack_exports__["default"] = (AdminDashboard);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/commision.js":
/*!******************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/commision.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Commision = () => {
  return __jsx("div", null, __jsx("p", null, "This is Commision page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Commision);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/customers.js":
/*!******************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/customers.js ***!
  \******************************************************************************/
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
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXGN1c3RvbWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R3FCLEFBSXdCLEFBRXFCLGdCQUZwQixBQUlELGVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXE5ldyBmb2xkZXJcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xcY3VzdG9tZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBDdXN0b21lcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+Q3VzdG9tZXJzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5OZXcgQ3VzdG9tZXJzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IFRvcCBDdXN0b21lcnMgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNVcH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSAgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gSGVhZGVyIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTVweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzBweCdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dDoge1xyXG4gICAgICAgIGNvbG9yOiAnIzZBNzA3NCcsXHJcbiAgICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc1MHB4JyxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-contents\\\\customers.js */"));
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

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/discount.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/discount.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Discount extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    return __jsx("p", null, "cvbnm");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Discount);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/inventory.js":
/*!******************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/inventory.js ***!
  \******************************************************************************/
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
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXGludmVudG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R3FCLEFBSXdCLEFBRXFCLGdCQUZwQixBQUlELGVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXE5ldyBmb2xkZXJcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xcaW52ZW50b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuLy8gYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcblxyXG5jbGFzcyBJbnZlbnRvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy96ZWl0L25leHQuanMnKVxyXG4gICAgLy8gICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAvLyAgICAgcmV0dXJuIHsgc3RhcnM6IDEwIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlByb2R1Y3QgSW4gU3RvY2s8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlByb2R1Y3QgU29sZDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PiBQcm9kdWN0IENhdGVnb3JpZXMgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNVcH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSAgc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT4gSGVhZGVyIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTVweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzBweCdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfdGV4dDoge1xyXG4gICAgICAgIGNvbG9yOiAnIzZBNzA3NCcsXHJcbiAgICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICc1MHB4JyxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZW50b3J5OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-contents\\\\inventory.js */"));
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

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/all-products.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/product-contents/all-products.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import React, { Component } from 'react';
// import { Row, Table, Button, Nav, Col, Image, Card, Form, InputGroup, Accordion } from 'react-bootstrap'
// import axios from 'axios'
// import { getUncodededTokenFromStorage } from '../../../../../../sdk/core/authentication-service'
// // import ViewProduct from './all-products-contents/view-product'
// import Link from 'next/link'
// import Router from 'next/router'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faArrowLeft, faTimes, faChevronLeft, faChevronRight, faSlidersH } from '@fortawesome/free-solid-svg-icons';
// import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
// import CardAccordion from '../../../../card_accordion';
// import MuhalikConfig from '../../../../../../sdk/muhalik.config'
// import GlobalStyleSheet from '../../../../../../styleSheet'
// import TitleRow from '../../../../title-row';
// import AddNew from '../../../../vendor/dashboard/dashboard-contents/product-contents/add-new'
// class AllProducts extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             productsArray: [],
//             viewProduct: false,
//             data: {},
//         }
//     }
//     // Getting Product Categories from DB
//     // async componentDidMount() {
//     //     const url = MuhalikConfig.PATH + '/api/products/';
//     //     try {
//     //         const response = await axios.get(url);
//     //         console.log('data:', response.data.data.docs)
//     //         this.setState({ productsArray: response.data.data.docs })
//     //     } catch (error) {
//     //         console.log('Data Fetching Eror:', error);
//     //     }    
//     // }
//     async componentDidMount() {
//         const url = MuhalikConfig.PATH + '/api/products/'
//         const currentComponent = this
//         await axios.get(url, {
//             headers: { 'authorization': await getUncodededTokenFromStorage() }
//         }).then((response) => {
//             console.log('data:', response.data.data)
//             currentComponent.setState({ productsArray: response.data.data })
//         }).catch((error) => {
//             alert('Data Fetchig Error: ', error)
//         });
//     }
//     handleEditProduct(index) {
//         console.log('edit called')
//         let element = []
//         if (index == -1) {
//             element = this.state.data
//         } else {
//             element = this.state.productsArray[index]
//         }
//         if (element.product_type != 'simple-product') {
//             let array = [];
//             let variations = element.product_variations
//             variations.forEach((element, i) => {
//                 array.push({
//                     item: element.item, price: element.price, stock: element.stock, image_link: element.image_link,
//                     price_error: '', stock_error: '', image_link_error: '', custom_fields: element.custom_fields
//                 })
//             })
//             element.product_variations = array
//         } else {
//             element.product_variations = []
//         }
//         this.setState({ data: element, viewProduct: 'edit' })
//     }
//     async handleDeleteProduct(index) {
//         // const copyArray = Object.assign([], this.state.productsArray)
//         // const array = Object.assign([], this.state.productsArray)
//         // let _id = ''
//         // if (index == -1) {
//         //     _id = this.state.data._id;
//         // } else {
//         //     _id = copyArray[index]._id;
//         // }
//         // const url = MuhalikConfig.PATH + `/api/products/${_id}`;
//         // copyArray.forEach((element, i) => {
//         //     if (element._id == _id) {
//         //         array.splice(i, 1)
//         //     }
//         // })
//         // this.setState({ productsArray: array })
//         // await axios.delete(url, {
//         //     headers: { 'authorization': await getUncodededTokenFromStorage() }
//         // }).then(function (response) {
//         //     return true;
//         // }).catch(function (error) {
//         //     alert('Error: ', error.response.data.message);
//         //     return false;
//         // });
//     }
//     isVariableProduct(element) {
//         if (element.product_type != "simple-product") {
//             return true
//         } else {
//             return false
//         }
//     }
//     renderSwitch(param) {
//         switch (param) {
//             case 'view':
//                 return <ViewProduct
//                     data={this.state.data}
//                     back={() => this.setState({ viewProduct: false, data: {} })}
//                     isVariableProduct={this.state.data.product_type != "simple-product"}
//                     delete={() => this.handleDeleteProduct(-1)}
//                     edit={() => this.handleEditProduct(-1)}
//                 />
//                 break;
//             case 'edit':
//                 return <AddNew
//                     title={'Vendor Dashboard / All Products / Update'}
//                     isUpdateProduct={true}
//                     _id={this.state.data._id}
//                     isVariableProduct={this.state.data.product_type != 'simple-product'}
//                     back={() => this.setState({ viewProduct: false, data: {} })}
//                     view={() => this.setState({ viewProduct: 'view' })}
//                     delete={() => this.handleDeleteProduct(-1)}
//                     productCategories={this.state.data.product_category}
//                     productSubCategories={this.state.data.product_sub_category}
//                     productTags={this.state.data.product_tags}
//                     warrantyType={this.state.data.warranty_type}
//                     simple_product_image_link={this.state.data.product_image_link}
//                     variationsArray={this.state.data.product_variations}
//                     dangerousGoodsArray={this.state.data.dangerous_goods}
//                     product_name={this.state.data.product_name}
//                     product_description={this.state.data.product_description}
//                     product_type={'variable-product'}
//                     product_type={this.state.data.product_type}
//                     sku={this.state.data.sku}
//                     product_price={this.state.data.product_price}
//                     product_in_stock={this.state.data.product_in_stock}
//                     product_brand_name={this.state.data.product_brand_name}
//                     product_warranty={this.state.data.product_warranty}
//                     warranty_type={this.state.data.warranty_type}
//                     product_discount={this.state.data.product_discount}
//                     purchase_note={this.state.data.purchase_note}
//                     product_weight={this.state.data.product_weight}
//                     dimension_length={this.state.data.dimension_length}
//                     dimension_width={this.state.data.dimension_width}
//                     dimension_height={this.state.data.dimension_height}
//                     shipping_charges={this.state.data.shipping_charges}
//                     handling_fee={this.state.data.handling_fee}
//                 />
//                 break;
//             default:
//                 return <>
//                     <TitleRow icon={faPlus} title={' Vendor Dashboard / All Products'} />
//                     <Row noGutters style={{ margin: '2%', background: 'white' }}>
//                         <Table responsive bordered hover size="sm">
//                             <thead>
//                                 <tr>
//                                     <th style={{ textAlign: 'center' }}>
//                                         <Form.Check type="checkbox" />
//                                     </th>
//                                     <th style={{ textAlign: 'center' }}>Name</th>
//                                     <th style={{ textAlign: 'center' }}>Product Type</th>
//                                     <th style={{ textAlign: 'center' }}>SKU</th>
//                                     <th style={{ textAlign: 'center' }}>Stock</th>
//                                     <th style={{ textAlign: 'center' }}>Price</th>
//                                     <th style={{ textAlign: 'center' }}>Categories</th>
//                                     <th style={{ textAlign: 'center' }}>Tags</th>
//                                     <th style={{ textAlign: 'center' }}>Date</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {this.state.productsArray && this.state.productsArray.map((element, index) =>
//                                     <>
//                                         {this.isVariableProduct(element) ?
//                                             <tr key={index}>
//                                                 <td align="center" style={styles.label}><Form.Check type="checkbox" /></td>
//                                                 <td className="td">
//                                                     {element.product_name}
//                                                     <div className="mr-auto"></div>
//                                                     <Nav.Link style={styles.nav_link} onClick={() => this.setState({ data: element, viewProduct: 'view' })}> View </Nav.Link>
//                                                     <Nav.Link style={styles.nav_link} onClick={() => this.handleEditProduct(index)}>Edit</Nav.Link>
//                                                     <Nav.Link style={styles.nav_link} onClick={() => this.handleDeleteProduct(index)}>Delete</Nav.Link>
//                                                 </td>
//                                                 <td align="center" style={styles.label}>{element.product_type}</td>
//                                                 <td align="center" style={styles.label}>{element.sku ? element.sku : '-'}</td>
//                                                 <td align="center" style={styles.label}>
//                                                     {element.product_variations.map(e =>
//                                                         e.stock + ','
//                                                     )}
//                                                 </td>
//                                                 <td align="center" style={styles.label}>
//                                                     {element.product_variations.map(e =>
//                                                         e.price + ','
//                                                     )}
//                                                 </td>
//                                                 <td align="center" style={styles.label}>
//                                                     {element.product_category.value + ' => ' + element.product_sub_category.value}
//                                                 </td>
//                                                 <td align="center" style={styles.label}>
//                                                     {element.product_tags && element.product_tags.map(e =>
//                                                         e.value + ','
//                                                     )}
//                                                 </td>
//                                                 <td align="center" style={styles.label}>
//                                                     {element.product_entry_date}
//                                                 </td>
//                                             </tr>
//                                             :
//                                             <>
//                                                 <tr>
//                                                     <td align="center" style={styles.label}>
//                                                         <Form.Check type="checkbox" />
//                                                     </td>
//                                                     <td className="td">
//                                                         {element.product_name}
//                                                         <div className="mr-auto"></div>
//                                                         <Nav.Link style={styles.nav_link} onClick={() => this.setState({ data: element, viewProduct: 'view' })}>View</Nav.Link>
//                                                         <Nav.Link style={styles.nav_link} onClick={() => this.handleEditProduct(index)}>Edit</Nav.Link>
//                                                         <Nav.Link style={styles.nav_link} onClick={() => this.handleDeleteProduct(index)}>Delete</Nav.Link>
//                                                     </td>
//                                                     <td align="center" style={styles.label}>{element.product_type}</td>
//                                                     <td align="center" style={styles.label}>{element.sku ? element.sku : '-'}</td>
//                                                     <td align="center" style={styles.label}>
//                                                         {element.product_in_stock}
//                                                     </td>
//                                                     <td align="center" style={styles.label}>
//                                                         {element.product_price}
//                                                     </td>
//                                                     <td align="center" style={styles.label}>
//                                                         {element.product_category.value + ' => ' + element.product_sub_category.value}
//                                                     </td>
//                                                     <td align="center" style={styles.label}>
//                                                         {element.product_tags && element.product_tags.map(e =>
//                                                             e.value + ','
//                                                         )}
//                                                     </td>
//                                                     <td align="center" style={styles.label}>
//                                                         {element.product_entry_date}
//                                                     </td>
//                                                 </tr>
//                                             </>
//                                         }
//                                     </>
//                                 )}
//                             </tbody>
//                         </Table>
//                     </Row >
//                     <style jsx >
//                         {`
//                         .td {
//                             display: flex;
//                             flex-direction: row;
//                             align-items: center;
//                             font-size: ${GlobalStyleSheet.form_label_fontsize};
//                         }
//                     `}
//                     </style>
//                 </>
//         }
//     }
//     render() {
//         return (
//             <>
//                 <div>
//                     {this.renderSwitch(this.state.viewProduct)}
//                 </div>
//             </>
//         );
//     }
// }
// const ViewProduct = props => {
//     const [imgPreview, setImgPreview] = React.useState(false);
//     const [index, setIndex] = React.useState('')
//     const [imgData, setImgData] = React.useState('')
//     const len = props.data.product_image_link.length;
//     function prevImage() {
//         if (index > 0) {
//             setIndex(index - 1)
//         }
//     }
//     function nextImage() {
//         if (index < (len - 1)) {
//             setIndex(index + 1)
//         }
//     }
//     return (
//         <>
//             <TitleRow icon={faPlus} title={` Vendor Dashboard / All Products / ${props.data.product_name}`} />
//             <Form.Row style={{ margin: ' 0% 2%', display: 'flex', alignItems: 'center' }} >
//                 <Nav.Link style={{ fontSize: '14px' }} className="mr-auto" onClick={props.back}>Back</Nav.Link>
//                 <div className="mr-auto" style={{ fontSize: '14px' }}> {props.data.product_name}</div>
//                 <Nav.Link style={{ fontSize: '14px' }} onClick={props.edit}> Edit </Nav.Link>
//                 <Nav.Link style={{ fontSize: '14px' }} onClick={props.delete}> Delete </Nav.Link>
//             </Form.Row>
//             <CardAccordion title={'General Info'}>
//                 <Row>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Product Name:</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Brand Name:</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.product_brand_name} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>SKU:</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.sku} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     {props.isVariableProduct ?
//                         null :
//                         <>
//                             <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                 <Form.Label style={styles.label}>Price:</Form.Label>
//                                 <InputGroup>
//                                     <Form.Control type="text" size="sm" value={props.data.product_price} disabled={true} />
//                                 </InputGroup>
//                             </Form.Group>
//                             <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                 <Form.Label style={styles.label}>Product In Stock:</Form.Label>
//                                 <InputGroup>
//                                     <Form.Control type="text" size="sm" value={props.data.product_in_stock} disabled={true} />
//                                 </InputGroup>
//                             </Form.Group>
//                         </>
//                     }
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Warranty (month):</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.product_warranty} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Warranty Type:</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.warranty_type} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Discount (%):</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.product_discount} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Purchase Note(s):</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.purchase_note} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
//                         <Form.Label style={styles.label}>Description:</Form.Label>
//                         <InputGroup>
//                             <Form.Control as="textarea" row="5" size="sm" value={props.data.product_description} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                 </Row>
//             </CardAccordion>
//             {props.isVariableProduct ?
//                 <CardAccordion title={'Product Variations'}>
//                     {props.data.product_variations && props.data.product_variations.map(element =>
//                         <>
//                             <Row >
//                                 <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
//                                     <Form.Label style={styles.label}>Price</Form.Label>
//                                     <InputGroup>
//                                         <Form.Control type="text" size="sm" value={element.price} disabled={true} />
//                                     </InputGroup>
//                                 </Form.Group>
//                                 <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
//                                     <Form.Label style={styles.label}>Stock</Form.Label>
//                                     <InputGroup>
//                                         <Form.Control type="text" size="sm" value={element.stock} disabled={true} />
//                                     </InputGroup>
//                                 </Form.Group>
//                                 {element.item && element.item.map(e =>
//                                     <>
//                                         <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
//                                             <Form.Label style={styles.label}>{e.name}</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={e.value} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                     </>
//                                 )}
//                                 {element.custom_fields && element.custom_fields.map(e =>
//                                     <>
//                                         <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
//                                             <Form.Label style={styles.label}>{e.name}</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={e.value} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                     </>
//                                 )}
//                                 {/* {element.image_link && element.image_link.map((img, i) =>
//                                     <Row>
//                                         <Image thumbnail fluid style={{ minWidth: '100px', maxWidth: '100px' }} src={`https://drive.google.com/uc?export=view&id= ${img.value}`} alt="Product Image"
//                                             onClick={() => { setImgPreview(true), setIndex(i), setImgData(e.img_link) }} />
//                                     </Row>
//                                 )} */}
//                             </Row>
//                             <hr />
//                         </>
//                     )}
//                 </CardAccordion>
//                 :
//                 <>
//                     <CardAccordion title={'Custom Fields'}>
//                         {props.data.custom_fields && props.data.custom_fields.map(element =>
//                             <Row>
//                                 <Form.Group as={Col} lg={2} md={2} sm={4} xs={12}>
//                                     <Form.Label style={styles.label}>{element.name}</Form.Label>
//                                     <InputGroup>
//                                         <Form.Control type="text" size="sm" value={element.value} disabled={true} />
//                                     </InputGroup>
//                                 </Form.Group>
//                             </Row>
//                         )}
//                     </CardAccordion>
//                     <CardAccordion title={'Product Images'}>
//                         {props.data.product_image_link && props.data.product_image_link.map((element, index) =>
//                             <Image thumbnail fluid style={{ minWidth: '200px', maxWidth: '200px' }} src={`https://drive.google.com/uc?export=view&id=${element.value}`}
//                                 alt="Product Image" onClick={() => { setImgPreview(true), setIndex(index), setImgData(props.data.product_image_link) }} />
//                         )}
//                     </CardAccordion>
//                 </>
//             }
//             <CardAccordion title={'Shipping Details'}>
//                 <Row>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Length (cm):</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.dimension_length} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Width (cm):</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.dimension_width} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Height (cm):</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.dimension_height} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Weight (kg):</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.product_weight} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Shipping Charges:</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.shipping_charges} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                         <Form.Label style={styles.label}>Handlink Fee:</Form.Label>
//                         <InputGroup>
//                             <Form.Control type="text" size="sm" value={props.data.handling_fee} disabled={true} />
//                         </InputGroup>
//                     </Form.Group>
//                 </Row>
//             </CardAccordion>
//             <CardAccordion title={'Product Categories'}>
//                 <Form.Group>
//                     <Form.Label style={{ fontSie: '13px', fontWeight: 'bold' }}>Product Categories:</Form.Label>
//                     <InputGroup>
//                         <Form.Label style={styles.label}>
//                             {props.data.product_category.value + ' => ' + props.data.product_sub_category.value}
//                         </Form.Label>
//                     </InputGroup>
//                 </Form.Group >
//                 <hr />
//                 <Form.Group>
//                     <Form.Label style={{ fontSie: '13px', fontWeight: 'bold' }}>Product Tags:</Form.Label>
//                     <InputGroup>
//                         {props.data.product_tags && props.data.product_tags.map(element =>
//                             <Form.Label style={styles.label}>{element.value}</Form.Label>
//                         )}
//                     </InputGroup>
//                 </ Form.Group >
//                 <hr />
//                 <Form.Group>
//                     <Form.Label style={{ fontSie: '13px', fontWeight: 'bold' }}>Dangerous Goods:</Form.Label>
//                     <InputGroup>
//                         {props.data.dangerous_goods && props.data.dangerous_goods.map(element =>
//                             <Form.Label style={styles.label}>{element.value}</Form.Label>
//                         )}
//                     </InputGroup>
//                 </Form.Group>
//             </CardAccordion >
//             {/* Image Preview */}
//             {
//                 imgPreview ?
//                     <div className="modal-overlay">
//                         <div className="modal-body">
//                             <div className="close-modal">
//                                 <div className="mr-auto"></div>
//                                 <div className="mr-auto"></div>
//                                 <FontAwesomeIcon className="mr-auto" icon={faChevronLeft} style={styles.img_preview_fontawesome}
//                                     onClick={() => prevImage} />
//                                 <FontAwesomeIcon className="mr-auto" icon={faChevronRight} style={styles.img_preview_fontawesome}
//                                     onClick={nextImage} />
//                                 <div className="mr-auto"></div>
//                                 <FontAwesomeIcon icon={faTimes} style={styles.img_preview_fontawesome}
//                                     onClick={() => setImgPreview(false)} />
//                             </div>
//                             <div className="image-container">
//                                 <img
//                                     src={imgData[index].value}
//                                     style={{ maxWidth: '100%', maxHeight: '90vh', margin: 'auto' }}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     : null
//             }
//             <style jsx>
//                 {`
//                    .modal-overlay {
//                         position: fixed;
//                         top: 0;
//                         left: 0;
//                         bottom: 0;
//                         right: 0;
//                         z-index: 10;
//                         width: 100%;
//                         height: 100%;
//                         background: rgba(21, 21, 21, 0.75);
//                     }
//                      .modal-body {
//                         position: relative;
//                         z-index: 11;
//                         margin: 2.5%;
//                         overflow: hidden;
//                         max-width: 100%;
//                         max-height: 100%;
//                     }
//                     .close-modal {
//                         position: fixed;
//                         display: flex;
//                         top: 10px;
//                         left: 0;
//                         right: 0;
//                         width: 100%;
//                     }
//                     .image-container {
//                         display: grid;
//                         height: 100%;
//                         // display: flex;
//                         // justify-content: center;
//                         // align-items: center;
//                     }
//                 `}
//             </style>
//         </>
//     )
// }
// const styles = {
//     label: {
//         fontSize: `${GlobalStyleSheet.form_label_fontsize}`
//     },
//     nav_link: {
//         paddingLeft: '10px',
//         paddingRight: '5px',
//     },
//     label: {
//         fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
//         color: `${GlobalStyleSheet.admin_primry_color}`,
//         marginRight: '2%'
//     },
//     row: {
//         margin: '2%', padding: '0%'
//     },
//     img_preview_fontawesome: {
//         cursor: 'pointer',
//         color: 'white',
//         fontWeight: 'lighter',
//         width: '30px',
//         height: '30px',
//         maxHeight: '30px',
//         maxWidth: '30px',
//     },
//     fontawesome: {
//         color: `${GlobalStyleSheet.admin_primry_color}`,
//         marginRight: '10%',
//         width: '17px',
//         height: '17px',
//         maxHeight: '17px',
//         maxWidth: '17px',
//     },
//     general_info_label: {
//         fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
//         width: '100%',
//         borderBottom: '1px solid gray'
//     },
//     field_label: {
//         border: `1px solid ${GlobalStyleSheet.body_color}`,
//         color: `${GlobalStyleSheet.admin_primry_color}`,
//         margin: '0%',
//         width: '100%',
//         padding: '2px 5px'
//     },
//     card: {
//         width: '100%',
//         border: '1px solid lightgray'
//     },
//     card_header: {
//         alignItems: 'center',
//         fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
//         background: `${GlobalStyleSheet.card_header_background}`,
//     },
// }
// export default AllProducts;
const AllProducts = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);

/* harmony default export */ __webpack_exports__["default"] = (AllProducts); // // import React, { Component } from 'react';
// // import CreatableSelect from 'react-select/creatable';
// // const colourOptions = [{ label: '111', value: '111' }]
// // export default class AllProducts extends Component {
// //     handleChange = (newValue) => {
// //         console.log('Value Changed', newValue);
// //     };
// //     render() {
// //         return (
// //             <CreatableSelect
// //                 isMulti
// //                 onChange={this.handleChange}
// //                 options={colourOptions}
// //             />
// //         );
// //     }
// // }

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-categories.js":
/*!********************************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-categories.js ***!
  \********************************************************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../.././../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../alert-modal */ "./src/pages/components/alert-modal.js");
/* harmony import */ var _confirm_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../confirm-modal */ "./src/pages/components/confirm-modal.js");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














let categoryArray = [];

class ProducCategories extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleCategoryChange", (e, index) => {
      let copyArray = [];
      copyArray = Object.assign([], this.state.categories_list);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      this.setState({
        categories_list: copyArray
      });
    });

    _defineProperty(this, "handleSubCategoryChange", (e, index) => {
      let copyArray = [];
      copyArray = Object.assign([], this.state.sub_categories_list);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      this.setState({
        sub_categories_list: copyArray
      });
    });

    this.state = {
      token: '',
      isLoading: false,
      showToast: false,
      showConfirmDeleteModal: false,
      delete_category_id: '',
      delete_category_name: '',
      index: '',
      categoryValue: '',
      subCategoryValue: '',
      categoryError: '',
      subCategoryError: '',
      categories_list: [],
      sub_categories_list: [],
      editRequestedCategory: '',
      showModalMessage: '',
      showModal: false,
      searchType: 'Category',
      filterStr: ''
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      categories_list: nextProps.categories_list,
      sub_categories_list: nextProps.sub_categories_list,
      token: nextProps.token
    });
    categoryArray = nextProps.categories_list;
  }

  async addCategory(currentComponent) {
    let data = [];
    data = {
      category: {
        value: this.state.categoryValue,
        label: this.state.categoryValue
      },
      sub_category: {
        value: this.state.subCategoryValue,
        label: this.state.subCategoryValue
      }
    };
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_6__["default"].PATH + '/api/categories/category';
    await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, {
      data
    }, {
      headers: {
        'authorization': this.state.token
      }
    }).then(function (response) {
      currentComponent.setState({
        isLoading: false
      });
      currentComponent.setState({
        showModalMessage: 'Product Category Added Successfully'
      });
      currentComponent.setState({
        showModal: true
      });
      return true;
    }).catch(function (error) {
      currentComponent.setState({
        isLoading: false
      });

      try {
        alert('Error: ', error.response.data.message);
      } catch (err) {
        console.log('Request Failed:', error);
      }

      return false;
    });
  }

  async handleSubmit() {
    if (this.state.categoryValue == '' || this.state.subCategoryValue == '') {
      if (this.state.categoryValue == '') {
        this.setState({
          categoryError: 'Enter Value First'
        });
      }

      if (this.state.subCategoryValue == '') {
        this.setState({
          subCategoryError: 'Enter Value First'
        });
      }
    } else {
      this.setState({
        isLoading: true
      });
      this.addCategory(this);
    }
  } // // Category Request 
  // // => Field Value 
  // handleCategoryRequestChange = (e, index) => {
  //     let copyArray = [];
  //     copyArray = Object.assign([], this.state.categoryRequestList);
  //     copyArray[index].value = e.target.value;
  //     if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
  //         copyArray[index].error = ''
  //     } else {
  //         copyArray[index].error = 'Value must be 3-20 characters'
  //     }
  //     this.setState({ categoryRequestList: copyArray })
  // }
  // //  => Edit
  // async handleEditCategoryRequestClick(index) {
  //     let copyArray = [];
  //     copyArray = Object.assign([], this.state.categoryRequestList);
  //     var obj = {};
  //     obj['value'] = copyArray[index].value;
  //     obj['label'] = false;
  //     obj['prevVal'] = copyArray[index].value;
  //     obj['error'] = '';
  //     copyArray[index] = obj
  //     await this.setState({ categoryRequestList: copyArray })
  // }
  // //  => Cancle
  // handleCancelCategoryRequestClick(index) {
  //     let copyArray = [];
  //     copyArray = Object.assign([], this.state.categoryRequestList);
  //     copyArray[index].value = copyArray[index].prevVal;
  //     copyArray[index].label = true;
  //     copyArray[index].error = '';
  //     this.setState({ categoryRequestList: copyArray })
  // }
  // // Update
  // handleUpdateCategoryRequestClick(index) {
  //     let copyArray = [];
  //     copyArray = Object.assign([], this.state.categoryRequestList);
  //     if (copyArray[index].value == copyArray[index].prevVal) {
  //         copyArray[index].error = 'Enter Different Value';
  //         this.setState({ categoryRequestList: copyArray });
  //     } else {
  //         if (copyArray[index].error == '') {
  //             copyArray[index].label = true;
  //             this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Updated Successfully', showModal: true });
  //         }
  //     }
  // }
  // //  => Add
  // handleAddCategoryRequestClick(index) {
  //     let copyArray = [];
  //     copyArray = Object.assign([], this.state.categoryRequestList);
  //     copyArray.splice(index, 1);
  //     this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Added Successfully', showModal: true })
  //     this.addCategory(this)
  // }
  // //  => Delete
  // handleDeleteCategoryRequestClick(index) {
  //     let copyArray = [];
  //     copyArray = Object.assign([], this.state.categoryRequestList);
  //     copyArray.splice(index, 1);
  //     this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Deleted', showModal: true })
  // }
  // All categories


  handleFilterStrChange(e) {
    this.setState({
      filterStr: e.target.value
    });
    let array = [];

    if (e.target.value != '') {
      if (this.state.searchType == 'Category') {
        categoryArray.filter(function (data) {
          const value = data.value.toLowerCase();

          if (value.includes(e.target.value.toLowerCase())) {
            array.push(data);
          }
        });
      } else {
        let currentComponent = this;
        this.state.sub_categories_list.filter(function (element) {
          const value = element.value.toLowerCase();

          if (value.includes(e.target.value.toLowerCase())) {
            categoryArray.filter(function (e) {
              if (element.category_id == e._id) {
                array.push(e);
              }
            });
          }
        });
        let a = [];
        array.map(x => {
          if (!a.includes(x)) {
            a.push(x);
          }
        });
        array = a;
      }

      this.setState({
        categories_list: array
      });
    } else {
      this.setState({
        categories_list: categoryArray
      });
    }
  } //  => Chane


  //  => Edit
  async handleEditCategoryClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.categories_list);
    var obj = {};
    obj['_id'] = copyArray[index]._id;
    obj['value'] = copyArray[index].value;
    obj['label'] = false;
    obj['prevVal'] = copyArray[index].value;
    obj['error'] = '';
    copyArray[index] = obj;
    await this.setState({
      categories_list: copyArray
    });
  } //  => Cancle


  handleCancelCategoryClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.categories_list);
    copyArray[index].value = copyArray[index].prevVal;
    copyArray[index].error = '';
    copyArray[index].label = true;
    this.setState({
      categories_list: copyArray
    });
  } //  => Update


  async handleUpdateCategoryClick() {
    let copyArray = [];
    let index = this.state.index;
    copyArray = Object.assign([], this.state.categories_list);

    if (copyArray[index].value == copyArray[index].prevVal) {
      copyArray[index].error = 'Enter Different Value';
      this.setState({
        categories_list: copyArray
      });
    } else {
      const currentComponent = this;
      let data = [];
      data = {
        category: {
          value: copyArray[index].value,
          label: copyArray[index].value
        }
      };
      const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_6__["default"].PATH + `/api/categories/category/${copyArray[index]._id}`;
      await axios__WEBPACK_IMPORTED_MODULE_8___default.a.put(url, {
        data
      }, {
        headers: {
          'authorization': this.state.token
        }
      }).then(function (response) {
        copyArray[index].label = copyArray[index].value;
        copyArray[index].prevVal = copyArray[index].value;
        currentComponent.setState({
          categories_list: copyArray,
          showModalMessage: 'Product Category Updated Successfully',
          showModal: true
        });
        categoryArray = copyArray;
      }).catch(function (error) {
        try {
          alert('Error: ', error.response.data.message);
        } catch (err) {
          alert('Category Update Failed');
          console.log('Request Failed:', error);
        }
      });
    }
  } // 
  // Sub Category


  //  => Edit
  async handleEditSubCategoryClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.sub_categories_list);
    var obj = {};
    obj['_id'] = copyArray[index]._id;
    obj['category_id'] = copyArray[index].category_id;
    obj['value'] = copyArray[index].value;
    obj['label'] = false;
    obj['prevVal'] = copyArray[index].value;
    obj['error'] = '';
    copyArray[index] = obj;
    await this.setState({
      sub_categories_list: copyArray
    });
  } //  => Cancle


  handleCancelSubCategoryClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.sub_categories_list);
    copyArray[index].value = copyArray[index].prevVal;
    copyArray[index].error = '';
    copyArray[index].label = true;
    this.setState({
      sub_categories_list: copyArray
    });
  } //  => Update


  async handleUpdateSubCategoryClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.sub_categories_list);

    if (copyArray[index].value == copyArray[index].prevVal) {
      copyArray[index].error = 'Enter Different Value';
      this.setState({
        categories_list: copyArray
      });
    } else {
      const currentComponent = this;
      let data = [];
      data = {
        value: copyArray[index].value,
        label: copyArray[index].value,
        category_id: copyArray[index].category_id
      };
      const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_6__["default"].PATH + `/api/categories/sub-category/${copyArray[index]._id}`;
      await axios__WEBPACK_IMPORTED_MODULE_8___default.a.put(url, {
        data
      }, {
        headers: {
          'authorization': this.state.token
        }
      }).then(function (response) {
        copyArray[index].label = copyArray[index].value;
        copyArray[index].prevVal = copyArray[index].value;
        currentComponent.setState({
          sub_categories_list: copyArray,
          showModalMessage: 'Product Sub Category Updated Successfully',
          showModal: true
        });
        categoryArray = copyArray;
      }).catch(function (error) {
        try {
          alert('Error: ', error.response.data.message);
        } catch (err) {
          console.log('Request Failed:', error);
        }
      });
    }
  } //  => Delete


  async handleDeleteSubCategoryClick() {
    this.setState({
      showConfirmDeleteModal: false
    });
    let copyArray = [];
    const index = this.state.index;
    const currentComponent = this;
    copyArray = Object.assign([], this.state.sub_categories_list);
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_6__["default"].PATH + `/api/categories/sub-category/${copyArray[index]._id}`;
    await axios__WEBPACK_IMPORTED_MODULE_8___default.a.delete(url, {
      headers: {
        'authorization': this.state.token
      }
    }).then(function (response) {
      copyArray.splice(index, 1);
      currentComponent.setState({
        sub_categories_list: copyArray,
        showModalMessage: 'Product Category Deleted',
        showModal: true
      });
      categoryArray = copyArray;
    }).catch(function (error) {
      try {
        alert('Error: ', error.response.data.message);
      } catch (err) {
        console.log('Request Failed:', error);
      }
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onHide: e => this.setState({
        showModal: false
      }),
      show: this.state.showModal,
      header: 'Success',
      message: this.state.showModalMessage,
      iconname: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faThumbsUp"],
      color: "#00b300"
    }), __jsx(_confirm_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onHide: () => this.setState({
        showConfirmDeleteModal: false
      }),
      show: this.state.showConfirmDeleteModal,
      title: 'Delete Sub Category',
      _id: this.state.delete_category_id,
      name: this.state.delete_category_name,
      confirm: this.handleDeleteSubCategoryClick.bind(this)
    }), __jsx(_title_row__WEBPACK_IMPORTED_MODULE_11__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faListAlt"],
      title: ' Admin Dashboard / Product Categories'
    }), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_12__["default"], {
      title: 'Add New Category'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      lg: 6,
      md: 6,
      sm: 6,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      style: styles.label
    }, "Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: this.state.categoryValue,
      onChange: e => this.setState({
        categoryValue: e.target.value,
        categoryError: ''
      }),
      isInvalid: this.state.categoryError
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
      type: "invalid"
    }, this.state.categoryError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      lg: 6,
      md: 6,
      sm: 6,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      style: styles.label
    }, "Sub Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: this.state.subCategoryValue,
      onChange: e => this.setState({
        subCategoryValue: e.target.value,
        subCategoryError: ''
      }),
      isInvalid: this.state.subCategoryError
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
      type: "invalid"
    }, this.state.subCategoryError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"]
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      size: "sm",
      onClick: this.handleSubmit.bind(this),
      disabled: this.state.isLoading,
      block: true,
      style: styles.submit_btn
    }, this.state.isLoading ? 'Uploading' : 'Add Category', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
      animation: "grow",
      size: "sm"
    }) : null)))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_12__["default"], {
      title: 'All Categories'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
      style: {
        margin: '0% 5%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"]
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      as: "select",
      variant: "primary",
      size: "sm",
      value: this.state.searchType,
      onChange: e => this.setState({
        searchType: e.target.value
      })
    }, __jsx("option", {
      className: "jsx-2287855846"
    }, "Category"), __jsx("option", {
      className: "jsx-2287855846"
    }, "Sub Category"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Search Here",
      name: "search",
      value: this.state.filterStr,
      onChange: e => this.handleFilterStrChange(e)
    })))), __jsx("hr", {
      className: "jsx-2287855846"
    }), this.state.categories_list && this.state.categories_list.map((element, index) => __jsx("div", {
      key: index,
      className: "jsx-2287855846"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      lg: 6,
      md: 6,
      sm: 8,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      size: "sm",
      name: "sku",
      value: element.value,
      disabled: element.label,
      onChange: e => this.handleCategoryChange(e, index),
      isInvalid: element.error
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
      type: "invalid"
    }, element.error)), __jsx("div", {
      className: "jsx-2287855846" + " " + 'sm_xs_show mr-auto'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      variant: element.label ? "outline-primary" : "outline-success",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: element.label ? () => this.handleEditCategoryClick(index) : () => this.handleUpdateCategoryClick(index),
      disabled: element.label ? false : element.error
    }, __jsx("div", {
      className: "jsx-2287855846"
    }, element.label ? 'Edit' : 'Update'))), __jsx("div", {
      className: "jsx-2287855846" + " " + 'sm_xs_show mr-auto'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      variant: element.label ? "outline-danger" : "outline-primary",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: element.label ? null : () => this.handleCancelCategoryClick(index),
      disabled: element.label ? true : false
    }, __jsx("div", {
      className: "jsx-2287855846"
    }, element.label ? 'Delete' : 'Cancel')))), __jsx("hr", {
      className: "jsx-2287855846" + " " + 'pb-0 pt-0 mt-0'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, this.state.sub_categories_list.map((e, i) => element._id == e.category_id ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: 6,
      md: 6,
      sm: 12,
      xs: 12,
      key: e._id
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      lg: "auto",
      md: "auto",
      sm: 8,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      size: "sm",
      name: "sku",
      value: e.value,
      disabled: e.label,
      onChange: event => this.handleSubCategoryChange(event, i),
      isInvalid: e.error
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
      type: "invalid"
    }, e.error)), __jsx("div", {
      className: "jsx-2287855846" + " " + 'mr-auto'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      variant: e.label ? "outline-primary" : "outline-success",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: e.label ? () => this.handleEditSubCategoryClick(i) : () => this.handleUpdateSubCategoryClick(i),
      disabled: e.label ? false : e.error
    }, __jsx("div", {
      className: "jsx-2287855846"
    }, e.label ? 'Edit' : 'Update'))), __jsx("div", {
      className: "jsx-2287855846" + " " + 'sm_xs_show mr-auto'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      variant: e.label ? "outline-danger" : "outline-primary",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: e.label ? () => this.setState({
        showConfirmDeleteModal: true,
        delete_category_id: e._id,
        delete_category_name: e.value,
        index: index
      }) : () => this.handleCancelSubCategoryClick(i)
    }, __jsx("div", {
      className: "jsx-2287855846"
    }, e.label ? 'Delete' : 'Cancel'))))) : null)), __jsx("hr", {
      className: "jsx-2287855846" + " " + 'mb-0'
    }), __jsx("hr", {
      className: "jsx-2287855846" + " " + 'pb-0 pt-0 mt-0'
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2287855846"
    }, "@media only screen and (min-width:768px){.sm_xs_show.jsx-2287855846{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXHByb2R1Y3QtY2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzb0JxQixBQUs0QixhQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXHByb2R1Y3QtY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIFJvdywgQWNjb3JkaW9uLCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiwgU3Bpbm5lciwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFMaXN0QWx0LCBmYVNsaWRlcnNIIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBBbGVydE1vZGFsIGZyb20gJy4uLy4uLy4uLy4uL2FsZXJ0LW1vZGFsJztcclxuaW1wb3J0IENvbmZpcm1Nb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9jb25maXJtLW1vZGFsJ1xyXG5pbXBvcnQgVGl0bGVSb3cgZnJvbSAnLi4vLi4vLi4vLi4vdGl0bGUtcm93JztcclxuaW1wb3J0IENhcmRBY2NvcmRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY2FyZF9hY2NvcmRpb24nO1xyXG5cclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnXHJcblxyXG5sZXQgY2F0ZWdvcnlBcnJheSA9IFtdO1xyXG5jbGFzcyBQcm9kdWNDYXRlZ29yaWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RvYXN0OiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHNob3dDb25maXJtRGVsZXRlTW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWxldGVfY2F0ZWdvcnlfaWQ6ICcnLFxyXG4gICAgICAgICAgICBkZWxldGVfY2F0ZWdvcnlfbmFtZTogJycsXHJcbiAgICAgICAgICAgIGluZGV4OiAnJyxcclxuXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeVZhbHVlOiAnJyxcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlWYWx1ZTogJycsXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeUVycm9yOiAnJyxcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlFcnJvcjogJycsXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q6IFtdLFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiBbXSxcclxuXHJcbiAgICAgICAgICAgIGVkaXRSZXF1ZXN0ZWRDYXRlZ29yeTogJycsXHJcbiAgICAgICAgICAgIHNob3dNb2RhbE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgc2VhcmNoVHlwZTogJ0NhdGVnb3J5JyxcclxuICAgICAgICAgICAgZmlsdGVyU3RyOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNfbGlzdDogbmV4dFByb3BzLmNhdGVnb3JpZXNfbGlzdCxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogbmV4dFByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QsXHJcbiAgICAgICAgICAgIHRva2VuOiBuZXh0UHJvcHMudG9rZW5cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYXRlZ29yeUFycmF5ID0gbmV4dFByb3BzLmNhdGVnb3JpZXNfbGlzdFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZENhdGVnb3J5KGN1cnJlbnRDb21wb25lbnQpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiB7IHZhbHVlOiB0aGlzLnN0YXRlLmNhdGVnb3J5VmFsdWUsIGxhYmVsOiB0aGlzLnN0YXRlLmNhdGVnb3J5VmFsdWUgfSxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3J5OiB7IHZhbHVlOiB0aGlzLnN0YXRlLnN1YkNhdGVnb3J5VmFsdWUsIGxhYmVsOiB0aGlzLnN0YXRlLnN1YkNhdGVnb3J5VmFsdWUgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL2NhdGVnb3J5JztcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KHVybCwge1xyXG4gICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogdGhpcy5zdGF0ZS50b2tlbiB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dNb2RhbE1lc3NhZ2U6ICdQcm9kdWN0IENhdGVnb3J5IEFkZGVkIFN1Y2Nlc3NmdWxseScgfSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dNb2RhbDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyb3I6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgRmFpbGVkOicsIGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2F0ZWdvcnlWYWx1ZSA9PSAnJyB8fCB0aGlzLnN0YXRlLnN1YkNhdGVnb3J5VmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2F0ZWdvcnlWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RXJyb3I6ICdFbnRlciBWYWx1ZSBGaXJzdCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1YkNhdGVnb3J5RXJyb3I6ICdFbnRlciBWYWx1ZSBGaXJzdCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2F0ZWdvcnkodGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyAvLyBDYXRlZ29yeSBSZXF1ZXN0IFxyXG4gICAgLy8gLy8gPT4gRmllbGQgVmFsdWUgXHJcbiAgICAvLyBoYW5kbGVDYXRlZ29yeVJlcXVlc3RDaGFuZ2UgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAvLyAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yeVJlcXVlc3RMaXN0KTtcclxuICAgIC8vICAgICBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgLy8gICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPSAnJyAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0gMjAgJiYgZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgIC8vICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICcnXHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICdWYWx1ZSBtdXN0IGJlIDMtMjAgY2hhcmFjdGVycydcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5UmVxdWVzdExpc3Q6IGNvcHlBcnJheSB9KVxyXG4gICAgLy8gfVxyXG4gICAgLy8gLy8gID0+IEVkaXRcclxuICAgIC8vIGFzeW5jIGhhbmRsZUVkaXRDYXRlZ29yeVJlcXVlc3RDbGljayhpbmRleCkge1xyXG4gICAgLy8gICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgIC8vICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmNhdGVnb3J5UmVxdWVzdExpc3QpO1xyXG4gICAgLy8gICAgIHZhciBvYmogPSB7fTtcclxuICAgIC8vICAgICBvYmpbJ3ZhbHVlJ10gPSBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlO1xyXG4gICAgLy8gICAgIG9ialsnbGFiZWwnXSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIG9ialsncHJldlZhbCddID0gY29weUFycmF5W2luZGV4XS52YWx1ZTtcclxuICAgIC8vICAgICBvYmpbJ2Vycm9yJ10gPSAnJztcclxuICAgIC8vICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqXHJcbiAgICAvLyAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5UmVxdWVzdExpc3Q6IGNvcHlBcnJheSB9KVxyXG4gICAgLy8gfVxyXG4gICAgLy8gLy8gID0+IENhbmNsZVxyXG4gICAgLy8gaGFuZGxlQ2FuY2VsQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpIHtcclxuICAgIC8vICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAvLyAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yeVJlcXVlc3RMaXN0KTtcclxuICAgIC8vICAgICBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID0gY29weUFycmF5W2luZGV4XS5wcmV2VmFsO1xyXG4gICAgLy8gICAgIGNvcHlBcnJheVtpbmRleF0ubGFiZWwgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNvcHlBcnJheVtpbmRleF0uZXJyb3IgPSAnJztcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlSZXF1ZXN0TGlzdDogY29weUFycmF5IH0pXHJcbiAgICAvLyB9XHJcbiAgICAvLyAvLyBVcGRhdGVcclxuICAgIC8vIGhhbmRsZVVwZGF0ZUNhdGVnb3J5UmVxdWVzdENsaWNrKGluZGV4KSB7XHJcbiAgICAvLyAgICAgbGV0IGNvcHlBcnJheSA9IFtdO1xyXG4gICAgLy8gICAgIGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuY2F0ZWdvcnlSZXF1ZXN0TGlzdCk7XHJcbiAgICAvLyAgICAgaWYgKGNvcHlBcnJheVtpbmRleF0udmFsdWUgPT0gY29weUFycmF5W2luZGV4XS5wcmV2VmFsKSB7XHJcbiAgICAvLyAgICAgICAgIGNvcHlBcnJheVtpbmRleF0uZXJyb3IgPSAnRW50ZXIgRGlmZmVyZW50IFZhbHVlJztcclxuICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5UmVxdWVzdExpc3Q6IGNvcHlBcnJheSB9KTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBpZiAoY29weUFycmF5W2luZGV4XS5lcnJvciA9PSAnJykge1xyXG4gICAgLy8gICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5sYWJlbCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlSZXF1ZXN0TGlzdDogY29weUFycmF5LCBzaG93TW9kYWxNZXNzYWdlOiAnUHJvZHVjdCBDYXRlZ29yeSBVcGRhdGVkIFN1Y2Nlc3NmdWxseScsIHNob3dNb2RhbDogdHJ1ZSB9KTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIC8vICA9PiBBZGRcclxuICAgIC8vIGhhbmRsZUFkZENhdGVnb3J5UmVxdWVzdENsaWNrKGluZGV4KSB7XHJcbiAgICAvLyAgICAgbGV0IGNvcHlBcnJheSA9IFtdO1xyXG4gICAgLy8gICAgIGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuY2F0ZWdvcnlSZXF1ZXN0TGlzdCk7XHJcbiAgICAvLyAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5UmVxdWVzdExpc3Q6IGNvcHlBcnJheSwgc2hvd01vZGFsTWVzc2FnZTogJ1Byb2R1Y3QgQ2F0ZWdvcnkgQWRkZWQgU3VjY2Vzc2Z1bGx5Jywgc2hvd01vZGFsOiB0cnVlIH0pXHJcbiAgICAvLyAgICAgdGhpcy5hZGRDYXRlZ29yeSh0aGlzKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gLy8gID0+IERlbGV0ZVxyXG4gICAgLy8gaGFuZGxlRGVsZXRlQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpIHtcclxuICAgIC8vICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAvLyAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yeVJlcXVlc3RMaXN0KTtcclxuICAgIC8vICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlSZXF1ZXN0TGlzdDogY29weUFycmF5LCBzaG93TW9kYWxNZXNzYWdlOiAnUHJvZHVjdCBDYXRlZ29yeSBEZWxldGVkJywgc2hvd01vZGFsOiB0cnVlIH0pXHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBBbGwgY2F0ZWdvcmllc1xyXG5cclxuICAgIGhhbmRsZUZpbHRlclN0ckNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclN0cjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaFR5cGUgPT0gJ0NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbXBvbmVudCA9IHRoaXNcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdC5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQudmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LmZpbHRlcihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2F0ZWdvcnlfaWQgPT0gZS5faWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGxldCBhID0gW11cclxuICAgICAgICAgICAgICAgIGFycmF5Lm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWEuaW5jbHVkZXMoeCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGFycmF5ID0gYVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzX2xpc3Q6IGFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXNfbGlzdDogY2F0ZWdvcnlBcnJheSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vICA9PiBDaGFuZVxyXG4gICAgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3QpO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0udmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9ICcnICYmIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8PSAyMCAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPj0gMykge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJ1ZhbHVlIG11c3QgYmUgMy0yMCBjaGFyYWN0ZXJzJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllc19saXN0OiBjb3B5QXJyYXkgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyAgPT4gRWRpdFxyXG4gICAgYXN5bmMgaGFuZGxlRWRpdENhdGVnb3J5Q2xpY2soaW5kZXgpIHtcclxuICAgICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3QpO1xyXG4gICAgICAgIHZhciBvYmogPSB7fTtcclxuICAgICAgICBvYmpbJ19pZCddID0gY29weUFycmF5W2luZGV4XS5faWQ7XHJcbiAgICAgICAgb2JqWyd2YWx1ZSddID0gY29weUFycmF5W2luZGV4XS52YWx1ZTtcclxuICAgICAgICBvYmpbJ2xhYmVsJ10gPSBmYWxzZTtcclxuICAgICAgICBvYmpbJ3ByZXZWYWwnXSA9IGNvcHlBcnJheVtpbmRleF0udmFsdWU7XHJcbiAgICAgICAgb2JqWydlcnJvciddID0gJyc7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9ialxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzX2xpc3Q6IGNvcHlBcnJheSB9KVxyXG4gICAgfVxyXG4gICAgLy8gID0+IENhbmNsZVxyXG4gICAgaGFuZGxlQ2FuY2VsQ2F0ZWdvcnlDbGljayhpbmRleCkge1xyXG4gICAgICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmNhdGVnb3JpZXNfbGlzdCk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XS52YWx1ZSA9IGNvcHlBcnJheVtpbmRleF0ucHJldlZhbDtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJyc7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XS5sYWJlbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXNfbGlzdDogY29weUFycmF5IH0pXHJcbiAgICB9XHJcbiAgICAvLyAgPT4gVXBkYXRlXHJcbiAgICBhc3luYyBoYW5kbGVVcGRhdGVDYXRlZ29yeUNsaWNrKCkge1xyXG4gICAgICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4XHJcbiAgICAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3QpO1xyXG4gICAgICAgIGlmIChjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID09IGNvcHlBcnJheVtpbmRleF0ucHJldlZhbCkge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJ0VudGVyIERpZmZlcmVudCBWYWx1ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzX2xpc3Q6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpc1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHsgdmFsdWU6IGNvcHlBcnJheVtpbmRleF0udmFsdWUsIGxhYmVsOiBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgYC9hcGkvY2F0ZWdvcmllcy9jYXRlZ29yeS8ke2NvcHlBcnJheVtpbmRleF0uX2lkfWBcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KHVybCwge1xyXG4gICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogdGhpcy5zdGF0ZS50b2tlbiB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmxhYmVsID0gY29weUFycmF5W2luZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0ucHJldlZhbCA9IGNvcHlBcnJheVtpbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzX2xpc3Q6IGNvcHlBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWxNZXNzYWdlOiAnUHJvZHVjdCBDYXRlZ29yeSBVcGRhdGVkIFN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkgPSBjb3B5QXJyYXlcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvcjogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdDYXRlZ29yeSBVcGRhdGUgRmFpbGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgRmFpbGVkOicsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFxyXG4gICAgLy8gU3ViIENhdGVnb3J5XHJcbiAgICBoYW5kbGVTdWJDYXRlZ29yeUNoYW5nZSA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yaWVzX2xpc3QpO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0udmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9ICcnICYmIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8PSAyMCAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPj0gMykge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJ1ZhbHVlIG11c3QgYmUgMy0yMCBjaGFyYWN0ZXJzJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3ViX2NhdGVnb3JpZXNfbGlzdDogY29weUFycmF5IH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gID0+IEVkaXRcclxuICAgIGFzeW5jIGhhbmRsZUVkaXRTdWJDYXRlZ29yeUNsaWNrKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGNvcHlBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdCk7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIG9ialsnX2lkJ10gPSBjb3B5QXJyYXlbaW5kZXhdLl9pZDtcclxuICAgICAgICBvYmpbJ2NhdGVnb3J5X2lkJ10gPSBjb3B5QXJyYXlbaW5kZXhdLmNhdGVnb3J5X2lkO1xyXG4gICAgICAgIG9ialsndmFsdWUnXSA9IGNvcHlBcnJheVtpbmRleF0udmFsdWU7XHJcbiAgICAgICAgb2JqWydsYWJlbCddID0gZmFsc2U7XHJcbiAgICAgICAgb2JqWydwcmV2VmFsJ10gPSBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIG9ialsnZXJyb3InXSA9ICcnO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmpcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgc3ViX2NhdGVnb3JpZXNfbGlzdDogY29weUFycmF5IH0pXHJcbiAgICB9XHJcbiAgICAvLyAgPT4gQ2FuY2xlXHJcbiAgICBoYW5kbGVDYW5jZWxTdWJDYXRlZ29yeUNsaWNrKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGNvcHlBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdCk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XS52YWx1ZSA9IGNvcHlBcnJheVtpbmRleF0ucHJldlZhbDtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJyc7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XS5sYWJlbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Yl9jYXRlZ29yaWVzX2xpc3Q6IGNvcHlBcnJheSB9KVxyXG4gICAgfVxyXG4gICAgLy8gID0+IFVwZGF0ZVxyXG4gICAgYXN5bmMgaGFuZGxlVXBkYXRlU3ViQ2F0ZWdvcnlDbGljayhpbmRleCkge1xyXG4gICAgICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yaWVzX2xpc3QpO1xyXG4gICAgICAgIGlmIChjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID09IGNvcHlBcnJheVtpbmRleF0ucHJldlZhbCkge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJ0VudGVyIERpZmZlcmVudCBWYWx1ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzX2xpc3Q6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpc1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvcHlBcnJheVtpbmRleF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogY29weUFycmF5W2luZGV4XS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjb3B5QXJyYXlbaW5kZXhdLmNhdGVnb3J5X2lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgYC9hcGkvY2F0ZWdvcmllcy9zdWItY2F0ZWdvcnkvJHtjb3B5QXJyYXlbaW5kZXhdLl9pZH1gXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IHRoaXMuc3RhdGUudG9rZW4gfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5sYWJlbCA9IGNvcHlBcnJheVtpbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLnByZXZWYWwgPSBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogY29weUFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbE1lc3NhZ2U6ICdQcm9kdWN0IFN1YiBDYXRlZ29yeSBVcGRhdGVkIFN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkgPSBjb3B5QXJyYXlcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvcjogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IEZhaWxlZDonLCBlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gID0+IERlbGV0ZVxyXG4gICAgYXN5bmMgaGFuZGxlRGVsZXRlU3ViQ2F0ZWdvcnlDbGljaygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogZmFsc2UgfSlcclxuICAgICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbXBvbmVudCA9IHRoaXNcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yaWVzX2xpc3QpO1xyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyBgL2FwaS9jYXRlZ29yaWVzL3N1Yi1jYXRlZ29yeS8ke2NvcHlBcnJheVtpbmRleF0uX2lkfWBcclxuICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiB0aGlzLnN0YXRlLnRva2VuIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiBjb3B5QXJyYXksXHJcbiAgICAgICAgICAgICAgICBzaG93TW9kYWxNZXNzYWdlOiAnUHJvZHVjdCBDYXRlZ29yeSBEZWxldGVkJyxcclxuICAgICAgICAgICAgICAgIHNob3dNb2RhbDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjYXRlZ29yeUFycmF5ID0gY29weUFycmF5XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyb3I6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgRmFpbGVkOicsIGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdWNjZXNzJ31cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXt0aGlzLnN0YXRlLnNob3dNb2RhbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbm5hbWU9e2ZhVGh1bWJzVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiIzAwYjMwMFwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb25maXJtTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dDb25maXJtRGVsZXRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEZWxldGUgU3ViIENhdGVnb3J5J31cclxuICAgICAgICAgICAgICAgICAgICBfaWQ9e3RoaXMuc3RhdGUuZGVsZXRlX2NhdGVnb3J5X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuZGVsZXRlX2NhdGVnb3J5X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybT17dGhpcy5oYW5kbGVEZWxldGVTdWJDYXRlZ29yeUNsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVJvdyBpY29uPXtmYUxpc3RBbHR9IHRpdGxlPXsnIEFkbWluIERhc2hib2FyZCAvIFByb2R1Y3QgQ2F0ZWdvcmllcyd9IC8+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQWRkIE5ldyBDYXRlZ29yeSAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnQWRkIE5ldyBDYXRlZ29yeSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezZ9IG1kPXs2fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkNhdGVnb3J5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2F0ZWdvcnkgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlWYWx1ZTogZS50YXJnZXQudmFsdWUsIGNhdGVnb3J5RXJyb3I6ICcnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Nn0gbWQ9ezZ9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U3ViIENhdGVnb3J5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2F0ZWdvcnkgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3ViQ2F0ZWdvcnlWYWx1ZTogZS50YXJnZXQudmFsdWUsIHN1YkNhdGVnb3J5RXJyb3I6ICcnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30gYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAnVXBsb2FkaW5nJyA6ICdBZGQgQ2F0ZWdvcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIiBzaXplPVwic21cIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBBZGQgQ2F0ZWdvcnkgUmVxdWVzdHMgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPENhcmRBY2NvcmRpb24gdGl0bGU9eydBZGQgQ2F0ZWdvcnkgUmVxdWVzdHMnfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yeVJlcXVlc3RMaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2F0ZWdvcnkgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENhdGVnb3J5IFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDYXRlZ29yeSBWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNhdGVnb3J5UmVxdWVzdENoYW5nZShlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2VsZW1lbnQuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZWxlbWVudC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9XCJhdXRvXCIgbWQ9XCJhdXRvXCIgc209XCJhdXRvXCIgeHM9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIHNpemU9XCJzbVwiIGJsb2NrIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWxlbWVudC5sYWJlbCA/IHRoaXMuaGFuZGxlRWRpdENhdGVnb3J5UmVxdWVzdENsaWNrKGluZGV4KSA6IHRoaXMuaGFuZGxlVXBkYXRlQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2VsZW1lbnQubGFiZWwgPyAnRWRpdCcgOiAnVXBkYXRlJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzaXplPVwic21cIiBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgZWxlbWVudC5sYWJlbCA/IHRoaXMuaGFuZGxlQWRkQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpIDogdGhpcy5oYW5kbGVDYW5jZWxDYXRlZ29yeVJlcXVlc3RDbGljayhpbmRleCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2VsZW1lbnQubGFiZWwgPyAnQWRkJyA6ICdDYW5jZWwnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT1cImF1dG9cIiB4cz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBzaXplPVwic21cIiBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EaXNjYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBBbGwgQ2F0ZWdvcmllcyAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnQWxsIENhdGVnb3JpZXMnfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3cgc3R5bGU9e3sgbWFyZ2luOiAnMCUgNSUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwic2VsZWN0XCIgdmFyaWFudD1cInByaW1hcnlcIiBzaXplPSdzbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFR5cGV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFR5cGU6IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U3ViIENhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclN0cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUZpbHRlclN0ckNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3QgJiYgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Nn0gbWQ9ezZ9IHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlbGVtZW50LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNhdGVnb3J5Q2hhbmdlKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZWxlbWVudC5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21feHNfc2hvdyBtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT1cImF1dG9cIiB4cz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD17ZWxlbWVudC5sYWJlbCA/IFwib3V0bGluZS1wcmltYXJ5XCIgOiBcIm91dGxpbmUtc3VjY2Vzc1wifSBzaXplPVwic21cIiBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbGVtZW50LmxhYmVsID8gKCkgPT4gdGhpcy5oYW5kbGVFZGl0Q2F0ZWdvcnlDbGljayhpbmRleCkgOiAoKSA9PiB0aGlzLmhhbmRsZVVwZGF0ZUNhdGVnb3J5Q2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VsZW1lbnQubGFiZWwgPyBmYWxzZSA6IGVsZW1lbnQuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2VsZW1lbnQubGFiZWwgPyAnRWRpdCcgOiAnVXBkYXRlJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbV94c19zaG93IG1yLWF1dG8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PXtlbGVtZW50LmxhYmVsID8gXCJvdXRsaW5lLWRhbmdlclwiIDogXCJvdXRsaW5lLXByaW1hcnlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiIGJsb2NrIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VsZW1lbnQubGFiZWwgPyBudWxsIDogKCkgPT4gdGhpcy5oYW5kbGVDYW5jZWxDYXRlZ29yeUNsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlbGVtZW50LmxhYmVsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntlbGVtZW50LmxhYmVsID8gJ0RlbGV0ZScgOiAnQ2FuY2VsJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9J3BiLTAgcHQtMCBtdC0wJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWJfY2F0ZWdvcmllc19saXN0Lm1hcCgoZSwgaSkgPT4gKGVsZW1lbnQuX2lkID09IGUuY2F0ZWdvcnlfaWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17Nn0gbWQ9ezZ9IHNtPXsxMn0geHM9ezEyfSBrZXk9e2UuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT17OH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlU3ViQ2F0ZWdvcnlDaGFuZ2UoZXZlbnQsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT1cImF1dG9cIiB4cz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD17ZS5sYWJlbCA/IFwib3V0bGluZS1wcmltYXJ5XCIgOiBcIm91dGxpbmUtc3VjY2Vzc1wifSBzaXplPVwic21cIiBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlLmxhYmVsID8gKCkgPT4gdGhpcy5oYW5kbGVFZGl0U3ViQ2F0ZWdvcnlDbGljayhpKSA6ICgpID0+IHRoaXMuaGFuZGxlVXBkYXRlU3ViQ2F0ZWdvcnlDbGljayhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlLmxhYmVsID8gZmFsc2UgOiBlLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntlLmxhYmVsID8gJ0VkaXQnIDogJ1VwZGF0ZSd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21feHNfc2hvdyBtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT1cImF1dG9cIiB4cz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD17ZS5sYWJlbCA/IFwib3V0bGluZS1kYW5nZXJcIiA6IFwib3V0bGluZS1wcmltYXJ5XCJ9IHNpemU9XCJzbVwiIGJsb2NrIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubGFiZWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtRGVsZXRlTW9kYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVfY2F0ZWdvcnlfaWQ6IGUuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlX2NhdGVnb3J5X25hbWU6IGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmhhbmRsZUNhbmNlbFN1YkNhdGVnb3J5Q2xpY2soaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2UubGFiZWwgPyAnRGVsZXRlJyA6ICdDYW5jZWwnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdtYi0wJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0ncGItMCBwdC0wIG10LTAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNtX3hzX3Nob3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRpdGxlX3Jvdzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMS41JSA0JSdcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyNnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI2cHgnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5J1xyXG4gICAgfSxcclxuXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgLy8gd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtYXJnaW46ICcyJSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2JvZHk6IHtcclxuICAgICAgICAvLyBwYWRkaW5nOiAnNSUnXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWBcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvcjogJyNEQzM1NDUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICB9LFxyXG4gICAgYWNjb3JkaW5fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWNDYXRlZ29yaWVzXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\product-categories.js */"));
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
    // width: '100%',
    margin: '2%'
  },
  card_body: {// padding: '5%'
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize}`
  },
  error: {
    width: '100%',
    textAlign: 'center',
    color: '#DC3545',
    fontSize: '14px'
  },
  accordin_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProducCategories);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-fields.js":
/*!****************************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-fields.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../.././../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../alert-modal */ "./src/pages/components/alert-modal.js");
/* harmony import */ var _confirm_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../confirm-modal */ "./src/pages/components/confirm-modal.js");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














let fieldsArray = [];

class ProducFields extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleFieldRequestChange", (e, index) => {
      let copyArray = [];
      copyArray = Object.assign([], this.state.field_requests_list);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      this.setState({
        field_requests_list: copyArray
      });
    });

    _defineProperty(this, "handleFieldChange", (e, index) => {
      let copyArray = [];
      copyArray = Object.assign([], this.state.fields_list);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      this.setState({
        fields_list: copyArray
      });
    });

    this.state = {
      token: '',
      isLoading: false,
      showToast: false,
      showConfirmDeleteModal: false,
      isFieldDelete: '',
      delete_field_id: '',
      delete_field_name: '',
      delete_field_index: '',
      fieldValue: '',
      error: '',
      fields_list: [],
      field_requests_list: [],
      editRequestedField: '',
      showModalMessage: '',
      showModal: false,
      filterStr: ''
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      fields_list: nextProps.fields_list,
      field_requests_list: nextProps.field_requests_list,
      token: nextProps.token
    });
  }

  async addField(fieldValue, currentComponent) {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__["default"].PATH + '/api/categories/field';
    let data = [];
    data = {
      label: fieldValue,
      value: fieldValue
    };
    await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(url, {
      data
    }, {
      headers: {
        'authorization': this.state.token
      }
    }).then(function (response) {
      currentComponent.setState({
        isLoading: false
      });
      currentComponent.setState({
        showModalMessage: 'Product Field Added Successfully'
      });
      currentComponent.setState({
        showModal: true
      });
    }).catch(function (error) {
      currentComponent.setState({
        isLoading: false
      });
      alert('Error: ', error.response.data.message);
    });
  }

  handleFilterStrChange(e) {
    this.setState({
      filterStr: e.target.value
    });

    if (e.target.value == '') {
      this.setState({
        fields_list: fieldsArray
      });
    } else {
      let array = [];
      this.state.fields_list.filter(function (data) {
        const value = data.value.toLowerCase();

        if (value.includes(e.target.value.toLowerCase())) {
          array.push(data);
        }
      });
      this.setState({
        fields_list: array
      });
    }
  }

  handleSubmit() {
    if (this.state.fieldValue == '') {
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
      this.addField(this.state.fieldValue, this);
    }
  } // Field Request 
  // => Field Value 


  //  => Edit
  async handleEditFieldRequestClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.field_requests_list);
    var obj = {};
    obj['value'] = copyArray[index].value;
    obj['entry_date'] = copyArray[index].entry_date;
    obj['label'] = false;
    obj['prevVal'] = copyArray[index].value;
    obj['error'] = '';
    copyArray[index] = obj;
    await this.setState({
      field_requests_list: copyArray
    });
  } //  => Cancle


  handleCancelFieldRequestClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.field_requests_list);
    copyArray[index].value = copyArray[index].prevVal;
    copyArray[index].label = true;
    copyArray[index].error = '';
    this.setState({
      field_requests_list: copyArray
    });
  } // Update


  handleUpdateFieldRequestClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.field_requests_list);

    if (copyArray[index].value == copyArray[index].prevVal) {
      copyArray[index].error = 'Enter Different Value';
      this.setState({
        field_requests_list: copyArray
      });
    } else {
      this.setState({
        field_requests_list: copyArray,
        showModalMessage: 'Product Field Updated Successfully',
        showModal: true
      });
      fieldsArray = copyArray;
    }
  } //  => Add


  async handleAddFieldRequestClick(index) {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__["default"].PATH + '/api/categories/field';
    let copyArray = [];
    copyArray = Object.assign([], this.state.field_requests_list);
    const currentComponent = this;
    let data = [];
    data = {
      label: copyArray[index].value,
      value: copyArray[index].value
    };
    console.log('data:', data);
    await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(url, {
      data
    }, {
      headers: {
        '_id': copyArray[index]._id,
        'authorization': this.state.token
      }
    }).then(function (response) {
      copyArray.splice(index, 1);
      currentComponent.setState({
        field_requests_list: copyArray,
        showModalMessage: 'Product Field Added Successfully',
        showModal: true
      });
    }).catch(function (error) {
      try {
        alert('Add Field Failed:', error.response.data.message);
      } catch (err) {
        console.log('Add Field Failed:', error);
        alert('Add Field Failed ');
      }
    });
  } //  => Delete


  async handleDeleteFieldRequestClick() {
    let index = this.state.delete_field_index;
    this.setState({
      showConfirmDeleteModal: false
    });
    let copyArray = [];
    const currentComponent = this;
    copyArray = Object.assign([], this.state.field_requests_list);
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__["default"].PATH + `/api/categories/field-request/${copyArray[index]._id}`;
    await axios__WEBPACK_IMPORTED_MODULE_7___default.a.delete(url, {
      headers: {
        'authorization': this.state.token
      }
    }).then(function (response) {
      copyArray.splice(index, 1);
      currentComponent.setState({
        field_requests_list: copyArray,
        showModalMessage: 'Product Request Field Discarded',
        showModal: true
      });
      fieldsArray = copyArray;
    }).catch(function (error) {
      try {
        alert('Error: ', error.response.data.message);
      } catch (err) {
        alert('Delete Field Failed ');
        console.log('Request Failed:', error);
      }
    });
  } // All fields
  //  => Chane


  //  => Edit
  async handleEditFieldClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.fields_list);
    var obj = {};
    obj['value'] = copyArray[index].value;
    obj['label'] = false;
    obj['prevVal'] = copyArray[index].value;
    obj['error'] = '';
    copyArray[index] = obj;
    await this.setState({
      fields_list: copyArray
    });
  } //  => Cancle


  handleCancelFieldClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.fields_list);
    copyArray[index].value = copyArray[index].prevVal;
    copyArray[index].error = '';
    copyArray[index].label = true;
    this.setState({
      fields_list: copyArray
    });
  } //  => Update


  async handleUpdateFieldClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.fields_list);

    if (copyArray[index].value == copyArray[index].prevVal) {
      copyArray[index].error = 'Enter Different Value';
      this.setState({
        fields_list: copyArray
      });
    } else {
      const currentComponent = this;
      let data = [];
      data = {
        value: copyArray[index].value,
        label: copyArray[index].value
      };
      const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__["default"].PATH + `/api/categories/field/${copyArray[index]._id}`;
      await axios__WEBPACK_IMPORTED_MODULE_7___default.a.put(url, {
        data
      }, {
        headers: {
          'authorization': this.state.token
        }
      }).then(function (response) {
        copyArray[index].label = copyArray[index].value;
        copyArray[index].prevVal = copyArray[index].value;
        currentComponent.setState({
          fields_list: copyArray,
          showModalMessage: 'Product Field Updated Successfully',
          showModal: true
        });
        fieldsArray = copyArray;
      }).catch(function (error) {
        try {
          alert('Error: ', error.response.data.message);
        } catch (err) {
          alert('Update field Failed');
          console.log('Request Failed:', error);
        }
      });
    }
  } //  => Delete


  async handleDeleteFieldClick() {
    let index = this.state.delete_field_index;
    this.setState({
      showConfirmDeleteModal: false
    });
    let copyArray = [];
    const currentComponent = this;
    copyArray = Object.assign([], this.state.fields_list);
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__["default"].PATH + `/api/categories/field/${copyArray[index]._id}`;
    await axios__WEBPACK_IMPORTED_MODULE_7___default.a.delete(url, {
      headers: {
        'authorization': this.state.token
      }
    }).then(function (response) {
      copyArray.splice(index, 1);
      currentComponent.setState({
        fields_list: copyArray,
        showModalMessage: 'Product Field Deleted',
        showModal: true
      });
      fieldsArray = copyArray;
    }).catch(function (error) {
      try {
        alert('Error: ', error.response.data.message);
      } catch (err) {
        console.log('Request Failed:', error);
      }
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onHide: e => this.setState({
        showModal: false
      }),
      show: this.state.showModal,
      header: 'Success',
      message: this.state.showModalMessage,
      iconname: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faThumbsUp"],
      color: "#00b300"
    }), __jsx(_confirm_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onHide: () => this.setState({
        showConfirmDeleteModal: false
      }),
      show: this.state.showConfirmDeleteModal,
      title: 'Delete Add Field Request ?',
      _id: this.state.delete_field_id,
      name: this.state.delete_field_name,
      confirm: this.state.isFieldDelete ? this.handleDeleteFieldClick.bind(this) : this.handleDeleteFieldRequestClick.bind(this)
    }), __jsx(_title_row__WEBPACK_IMPORTED_MODULE_10__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"],
      title: ' Admin Dashboard / Product Fields'
    }), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: 'Add New Field'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Field Value",
      name: "sku",
      value: this.state.fieldValue,
      onChange: e => this.setState({
        fieldValue: e.target.value
      }),
      isInvalid: this.state.error
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
      type: "invalid"
    }, this.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      variant: "outline-primary",
      size: "sm",
      onClick: this.handleSubmit.bind(this),
      disabled: this.state.isLoading,
      block: true,
      style: styles.submit_btn
    }, this.state.isLoading ? 'Uploading' : 'Add Field', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Spinner"], {
      animation: "grow",
      size: "sm"
    }) : null))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: 'Add Field Requests',
      notification: true,
      badge: 99
    }, this.state.field_requests_list && this.state.field_requests_list.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Row, {
      key: index
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 2,
      md: 2,
      sm: 3,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      name: "date",
      value: element.entry_date,
      disabled: true
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 2,
      md: 2,
      sm: 3,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      name: "vendor",
      value: 'Vendor Name',
      disabled: true
    })), __jsx("div", {
      className: "mr-auto"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 4,
      md: 4,
      sm: 6,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Field Value",
      name: "sku",
      value: element.value,
      onChange: e => this.handleFieldRequestChange(e, index),
      isInvalid: element.error,
      disabled: element.label
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
      type: "invalid"
    }, element.error))), __jsx("div", {
      className: "mr-auto"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      variant: "outline-success",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: () => element.label ? this.handleEditFieldRequestClick(index) : this.handleUpdateFieldRequestClick(index),
      disabled: element.label ? false : element.error
    }, __jsx("div", null, element.label ? 'Edit' : 'Update'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      variant: "outline-primary",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: () => {
        element.label ? this.handleAddFieldRequestClick(index) : this.handleCancelFieldRequestClick(index);
      }
    }, __jsx("div", null, element.label ? 'Add' : 'Cancel'))), __jsx("div", {
      className: "mr-auto"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      variant: "outline-danger",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: () => this.setState({
        isFieldDelete: false,
        showConfirmDeleteModal: true,
        delete_field_id: element._id,
        delete_field_name: element.value,
        delete_field_index: index
      })
    }, __jsx("div", null, "Discard")))))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: 'All Fields'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Row, {
      style: {
        margin: '0% 5%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"]
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Field Value",
      name: "sku",
      value: this.state.filterStr,
      onChange: e => this.handleFilterStrChange(e)
    })))), __jsx("hr", null), this.state.fields_list && this.state.fields_list.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Row, {
      key: index
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 2,
      md: 2,
      sm: 6,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      name: "sku",
      value: element.entry_date,
      disabled: true
    })), __jsx("div", {
      className: "mr-auto"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 6,
      md: 6,
      sm: 6,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Field Value",
      name: "sku",
      value: element.value,
      onChange: e => this.handleFieldChange(e, index),
      disabled: element.label,
      isInvalid: element.error
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
      type: "invalid"
    }, element.error))), __jsx("div", {
      className: "mr-auto"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      variant: "outline-success",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: element.label ? () => this.handleEditFieldClick(index) : () => this.handleUpdateFieldClick(index),
      disabled: element.label ? false : element.error
    }, __jsx("div", null, element.label ? 'Edit' : 'Update'))), __jsx("div", {
      className: "mr-auto"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      variant: element.label ? "outline-danger" : "outline-primary",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: element.label ? () => this.setState({
        isFieldDelete: true,
        showConfirmDeleteModal: true,
        delete_field_id: element._id,
        delete_field_name: element.value,
        delete_field_index: index
      }) : () => this.handleCancelFieldClick(index)
    }, __jsx("div", null, element.label ? 'Delete' : 'Cancel')))))));
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
    // width: '100%',
    margin: '2%'
  },
  card_body: {// padding: '5%'
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].form_label_fontsize}`
  },
  error: {
    width: '100%',
    textAlign: 'center',
    color: '#DC3545',
    fontSize: '14px'
  },
  accordin_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProducFields);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-tags.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-tags.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import { Form, Row, Accordion, Col, Card, InputGroup, Button, Spinner } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faListAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons'
// import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
// import React, { Component } from 'react';
// import MuhalikConfig from '../../../../../../sdk/muhalik.config'
// import GlobalStyleSheet from '../../../../.././../styleSheet'
// import axios from 'axios';
// import AlertModal from '../../../../alert-modal';
// import TitleRow from '../../../../title-row';
// import CardAccordion from '../../../../card_accordion';
// let tagArray = [];
// class ProducTags extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             token: '',
//             isLoading: false,
//             showToast: false,
//             tagValue: '',
//             error: '',
//             tagList: [],
//             tagRequestList: [],
//             editRequestedTag: '',
//             showModalMessage: '',
//             showModal: false,
//             filterStr: '',
//         }
//     }
//     UNSAFE_componentWillReceiveProps(nextProps) {
//         this.setState({
//             token: nextProps.token
//         });
//     }
//     async addTag(tagValue, currentComponent) {
//         const url = MuhalikConfig.PATH + '/api/categories/tag';
//         let data = []
//         data = { label: tagValue, value: tagValue }
//         await axios.post(url, {
//             data
//         }, {
//             headers: { 'authorization': this.state.token }
//         }).then(function (response) {
//             currentComponent.setState({ isLoading: false })
//             currentComponent.setState({ showModalMessage: 'Product Tag Added Successfully' })
//             currentComponent.setState({ showModal: true })
//         }).catch(function (error) {
//             currentComponent.setState({ isLoading: false });
//             console.log('Error: ', error.response.data.message);
//         });
//     }
//     handleFilterStrChange(e) {
//         this.setState({ filterStr: e.target.value });
//         if (e.target.value == '') {
//             this.setState({ tagList: tagArray });
//         } else {
//             let array = [];
//             this.state.tagList.filter(function (data) {
//                 // var value = data.value.toLowerCase;
//                 if (data.value.includes(e.target.value)) {
//                     array.push(data);
//                 }
//             })
//             this.setState({ tagList: array });
//         }
//     }
//     async handleSubmit() {
//         if (this.state.tagValue == '') {
//             this.setState({ error: 'Enter Value First' })
//         } else {
//             this.setState({ isLoading: true })
//             this.setState({ error: '' })
//             this.addTag(this.state.tagValue, this)
//         }
//     }
//     // Tag Request 
//     // => Field Value 
//     handleTagRequestChange = (e, index) => {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagRequestList);
//         copyArray[index].value = e.target.value;
//         if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
//             copyArray[index].error = ''
//         } else {
//             copyArray[index].error = 'Value must be 3-20 characters'
//         }
//         this.setState({ tagRequestList: copyArray })
//     }
//     //  => Edit
//     async handleEditTagRequestClick(index) {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagRequestList);
//         var obj = {};
//         obj['value'] = copyArray[index].value;
//         obj['label'] = false;
//         obj['prevVal'] = copyArray[index].value;
//         obj['error'] = '';
//         copyArray[index] = obj
//         await this.setState({ tagRequestList: copyArray })
//     }
//     //  => Cancle
//     handleCancelTagRequestClick(index) {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagRequestList);
//         copyArray[index].value = copyArray[index].prevVal;
//         copyArray[index].label = true;
//         copyArray[index].error = '';
//         this.setState({ tagRequestList: copyArray })
//     }
//     // Update
//     handleUpdateTagRequestClick(index) {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagRequestList);
//         if (copyArray[index].value == copyArray[index].prevVal) {
//             copyArray[index].error = 'Enter Different Value';
//             this.setState({ tagRequestList: copyArray });
//         } else {
//             if (copyArray[index].error == '') {
//                 copyArray[index].label = true;
//                 this.setState({ tagRequestList: copyArray, showModalMessage: 'Product Tag Updated Successfully', showModal: true });
//             }
//         }
//     }
//     //  => Add
//     handleAddTagRequestClick(index) {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagRequestList);
//         copyArray.splice(index, 1);
//         this.setState({ tagRequestList: copyArray, showModalMessage: 'Product Tag Added Successfully', showModal: true })
//         this.addTag(copyArray[index].value, this)
//     }
//     //  => Delete
//     handleDeleteTagRequestClick(index) {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagRequestList);
//         copyArray.splice(index, 1);
//         this.setState({ tagRequestList: copyArray, showModalMessage: 'Product Tag Deleted', showModal: true })
//     }
//     // All tags
//     //  => Chane
//     handleTagChange = (e, index) => {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagList);
//         copyArray[index].value = e.target.value;
//         if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
//             copyArray[index].error = ''
//         } else {
//             copyArray[index].error = 'Value must be 3-20 characters'
//         }
//         this.setState({ tagList: copyArray })
//     }
//     //  => Edit
//     async handleEditTagClick(index) {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagList);
//         var obj = {};
//         obj['value'] = copyArray[index].value;
//         obj['label'] = false;
//         obj['prevVal'] = copyArray[index].value;
//         obj['error'] = '';
//         copyArray[index] = obj
//         await this.setState({ tagList: copyArray })
//     }
//     //  => Cancle
//     handleCancelTagClick(index) {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagList);
//         copyArray[index].value = copyArray[index].prevVal;
//         copyArray[index].error = '';
//         copyArray[index].label = true;
//         this.setState({ tagList: copyArray })
//     }
//     //  => Update
//     handleUpdateTagClick(index) {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagList);
//         if (copyArray[index].value == copyArray[index].prevVal) {
//             copyArray[index].error = 'Enter Different Value';
//             this.setState({ tagRequestList: copyArray });
//         } else {
//             if (copyArray[index].error == '') {
//                 copyArray[index].label = true;
//                 tagArray.forEach((element, i) => {
//                     if (copyArray[index].prevVal == element.value) {
//                         element.value = copyArray[index].value;
//                     }
//                 });
//                 this.setState({ tagList: copyArray, showModalMessage: 'Product Tag Updated Successfully', showModal: true });
//             }
//         }
//     }
//     //  => Delete
//     handleDeleteTagClick = (index) => {
//         let copyArray = [];
//         copyArray = Object.assign([], this.state.tagList);
//         tagArray.forEach((element, i) => {
//             if (copyArray[index].value == element.value) {
//                 tagArray.splice(index, 1);
//             }
//         });
//         copyArray.splice(index, 1);
//         this.setState({ tagList: copyArray, showModalMessage: 'Product Tag Deleted', showModal: true })
//     }
//     render() {
//         return (
//             <>
//                 <AlertModal
//                     onHide={(e) => this.setState({ showModal: false })}
//                     show={this.state.showModal}
//                     header={'Success'}
//                     message={this.state.showModalMessage}
//                     iconname={faThumbsUp}
//                     color={"#00b300"}
//                 />
//                 <TitleRow icon={faListAlt} title={' Admin Dashboard / Product Tags'} />
//                 {/* Add New Tag */}
//                 <CardAccordion title={'Add New Tag'}>
//                     <Form.Group>
//                         <InputGroup>
//                             <Form.Control
//                                 type="text"
//                                 size="sm"
//                                 placeholder="Enter Tag Value"
//                                 name="sku"
//                                 value={this.state.tagValue}
//                                 onChange={(e) => this.setState({ tagValue: e.target.value })}
//                                 isInvalid={this.state.error}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {this.state.error}
//                             </Form.Control.Feedback>
//                         </InputGroup>
//                     </Form.Group>
//                     <Form.Group>
//                         <Button type="submit" size="sm" onClick={this.handleSubmit.bind(this)} disabled={this.state.isLoading} block style={styles.submit_btn}>
//                             {this.state.isLoading ? 'Uploading' : 'Add Tag'}
//                             {this.state.isLoading ? <Spinner animation="grow" size="sm" /> : null}
//                         </Button>
//                     </Form.Group>
//                 </CardAccordion>
//                 {/* Add Tag Requests */}
//                 <CardAccordion title={'Add Tag Requests'}>
//                     {this.state.tagRequestList.map((element, index) =>
//                         <Form.Row>
//                             <Form.Group as={Col} lg={2} md={2} sm={3} xs={12}>
//                                 <Form.Control
//                                     type="text"
//                                     size="sm"
//                                     name="sku"
//                                     value={element.entry_date}
//                                     disabled={true}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col} lg={2} md={2} sm={3} xs={12}>
//                                 <Form.Control
//                                     type="text"
//                                     size="sm"
//                                     name="sku"
//                                     value={element.entry_date}
//                                     disabled={true}
//                                 />
//                             </Form.Group>
//                             <div className="mr-auto"></div>
//                             <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                 <InputGroup>
//                                     <Form.Control
//                                         type="text"
//                                         size="sm"
//                                         placeholder="Enter Tag Value"
//                                         name="sku"
//                                         value={element.value}
//                                         onChange={(e) => this.handleTagRequestChange(e, index)}
//                                         isInvalid={element.error}
//                                         disabled={element.label}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {element.error}
//                                     </Form.Control.Feedback>
//                                 </InputGroup>
//                             </Form.Group>
//                             <div className="mr-auto"></div>
//                             <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
//                                 <Button type="submit" variant="outline-success" size="sm" block style={styles.submit_btn}
//                                     onClick={() => element.label ? this.handleEditTagRequestClick(index) : this.handleUpdateTagRequestClick(index)} >
//                                     <div>{element.label ? 'Edit' : 'Update'}</div>
//                                 </Button>
//                             </Form.Group>
//                             <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
//                                 <Button type="submit" variant="outline-primary" size="sm" block style={styles.submit_btn}
//                                     onClick={() => { element.label ? this.handleAddTagRequestClick(index) : this.handleCancelTagRequestClick(index) }}>
//                                     <div>{element.label ? 'Add' : 'Cancel'}</div>
//                                 </Button>
//                             </Form.Group>
//                             <div className="mr-auto"></div>
//                             <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
//                                 <Button type="submit" variant="outline-danger" size="sm" block style={styles.submit_btn}
//                                     onClick={() => this.handleDeleteTagRequestClick(index)}>
//                                     <div>Discard</div>
//                                 </Button>
//                             </Form.Group>
//                         </Form.Row>
//                     )}
//                 </CardAccordion>
//                 {/* All Tags */}
//                 <CardAccordion title={'All Tags'}>
//                     <Form.Row style={{ margin: '0% 5%' }}>
//                         <Form.Group as={Col}>
//                             <InputGroup>
//                                 <Form.Control
//                                     type="text"
//                                     size="sm"
//                                     placeholder="Enter Tag Value"
//                                     name="sku"
//                                     value={this.state.filterStr}
//                                     onChange={(e) => this.handleFilterStrChange(e)}
//                                 />
//                             </InputGroup>
//                         </Form.Group>
//                     </Form.Row>
//                     <hr />
//                     {this.state.tagList.map((element, index) =>
//                         <Form.Row>
//                             <Form.Group as={Col} lg={2} md={2} sm={6} xs={12}>
//                                 <Form.Control
//                                     type="text"
//                                     size="sm"
//                                     name="sku"
//                                     value={element.entry_date}
//                                     disabled={true}
//                                 />
//                             </Form.Group>
//                             <div className="mr-auto"></div>
//                             <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
//                                 <InputGroup>
//                                     <Form.Control
//                                         type="text"
//                                         size="sm"
//                                         placeholder="Enter Tag Value"
//                                         name="sku"
//                                         value={element.value}
//                                         onChange={(e) => this.handleTagChange(e, index)}
//                                         disabled={element.label}
//                                         isInvalid={element.error}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {element.error}
//                                     </Form.Control.Feedback>
//                                 </InputGroup>
//                             </Form.Group>
//                             <div className="mr-auto"></div>
//                             <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
//                                 <Button type="submit" variant="outline-success" size="sm" block style={styles.submit_btn}
//                                     onClick={element.label ? () => this.handleEditTagClick(index) : () => this.handleUpdateTagClick(index)} >
//                                     <div>{element.label ? 'Edit' : 'Update'}</div>
//                                 </Button>
//                             </Form.Group>
//                             <div className="mr-auto"></div>
//                             <Form.Group as={Col} lg="auto" md="auto" sm="auto" xs="auto">
//                                 <Button type="submit" variant={element.label ? "outline-danger" : "outline-primary"} size="sm" block style={styles.submit_btn}
//                                     onClick={element.label ? () => this.handleDeleteTagClick(index) : () => this.handleCancelTagClick(index)}>
//                                     <div>{element.label ? 'Delete' : 'Cancel'}</div>
//                                 </Button>
//                             </Form.Group>
//                         </Form.Row>
//                     )}
//                 </CardAccordion>
//             </>
//         )
//     }
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
//     card: {
//         // width: '100%',
//         margin: '2%'
//     },
//     card_body: {
//         // padding: '5%'
//     },
//     label: {
//         fontSize: `${GlobalStyleSheet.form_label_fontsize}`
//     },
//     error: {
//         width: '100%',
//         textAlign: 'center',
//         color: '#DC3545',
//         fontSize: '14px',
//     },
//     accordin_fontawesome: {
//         color: `${GlobalStyleSheet.admin_primry_color}`,
//         marginRight: '10%',
//         width: '15px',
//         height: '15px',
//         maxHeight: '15px',
//         maxWidth: '15px',
//     },
// }
// export default ProducTags
const ProducTags = () => {
  return __jsx("div", null, "Comented");
};

/* harmony default export */ __webpack_exports__["default"] = (ProducTags);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/reports.js":
/*!****************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/reports.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
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

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/vendors.js":
/*!****************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/vendors.js ***!
  \****************************************************************************/
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
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../card_accordion */ "./src/pages/components/card_accordion.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










class Vendor extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx("div", {
      className: "jsx-3124640742"
    }, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_8__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      title: ' Admin Dashboard / Vendors'
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
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
      style: {
        background: 'lightgreen'
      }
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
      style: {
        background: 'lightblue'
      }
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
      style: {
        background: 'orange'
      }
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
      style: {
        background: 'pink'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      style: styles.card_header
    }, " Admin Vendors "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, "5678")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      style: styles.card_text
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
      style: styles.fontawesome
    }))))))))), __jsx(VendorTable, {
      header: 'All Vendors',
      rank: true
    }), __jsx(VendorTable, {
      header: 'New Vendors',
      rank: false
    }), __jsx(VendorTable, {
      header: 'Top Vendors',
      rank: true
    }), __jsx(VendorTable, {
      header: 'Admin Vendors',
      rank: true
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3124640742"
    }, ".hover.jsx-3124640742{margin:5px 15px;}.hover.jsx-3124640742:hover{margin:0px 10px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHZlbmRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhxQixBQUl3QixBQUVxQixnQkFGcEIsQUFJRCxlQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHZlbmRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgTmF2LCBUYWJsZSwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzLCBmYVNsaWRlcnNIIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBUaXRsZVJvdyBmcm9tICcuLi8uLi8uLi90aXRsZS1yb3cnO1xyXG5pbXBvcnQgQ2FyZEFjY29yZGlvbiBmcm9tICcuLi8uLi8uLi9jYXJkX2FjY29yZGlvbidcclxuY2xhc3MgVmVuZG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVJvdyBpY29uPXtmYVVzZXJzfSB0aXRsZT17JyBBZG1pbiBEYXNoYm9hcmQgLyBWZW5kb3JzJ30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpZ2h0Z3JlZW4nIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+VmVuZG9yczwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcnN9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbGlnaHRibHVlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9Pk5ldyBWZW5kb3JzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdvcmFuZ2UnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IFRvcCBWZW5kb3JzIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGh1bWJzVXB9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncGluaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PiBBZG1pbiBWZW5kb3JzIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU2NzhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFZlbmRvclRhYmxlIGhlYWRlcj17J0FsbCBWZW5kb3JzJ30gcmFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxWZW5kb3JUYWJsZSBoZWFkZXI9eydOZXcgVmVuZG9ycyd9IHJhbms9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFZlbmRvclRhYmxlIGhlYWRlcj17J1RvcCBWZW5kb3JzJ30gcmFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxWZW5kb3JUYWJsZSBoZWFkZXI9eydBZG1pbiBWZW5kb3JzJ30gcmFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVmVuZG9yVGFibGUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9e3Byb3BzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVjayB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2hvcCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaG9wIExvY2F0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yYW5rID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmFuazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVjayB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gPiBWaWV3IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PkVkaXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5EZWxldGU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID5OYW1lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID5TaG9wIE5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgPlNob3AgTG9jYXRpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJhbmsgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID5SYW5rPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID57JzEwLzA1LzIwMjAnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBwYWRkaW5nVG9wOiAnMHB4JyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMHB4JyxcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXHJcbiAgICB9LFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzIlJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5J1xyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuY2FyZF9oZWFkZXJfZm9udHNpemV9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICB0YWJsZV9jYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgY2FyZF90ZXh0OiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGZsb2F0OiAncmlnaHQnXHJcbiAgICB9LFxyXG4gICAgYWNjb3JkaW5fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVuZG9yOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-contents\\\\vendors.js */"));
  }

}

function VendorTable(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: props.header
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    responsive: true,
    bordered: true,
    hover: true,
    size: "sm"
  }, __jsx("thead", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, __jsx("tr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, __jsx("th", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Check, {
    type: "checkbox"
  })), __jsx("th", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "ID"), __jsx("th", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Name"), __jsx("th", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Shop Name"), __jsx("th", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Shop Location"), props.rank ? __jsx("th", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Rank") : null, __jsx("th", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Date"))), __jsx("tbody", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, __jsx("tr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, __jsx("td", {
    align: "center",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Check, {
    type: "checkbox"
  })), __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]]) + " " + "td"
  }, "ID", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]]) + " " + "mr-auto"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    style: styles.nav_link
  }, " View "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    style: styles.nav_link
  }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    style: styles.nav_link
  }, "Delete")), __jsx("td", {
    align: "center",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Name"), __jsx("td", {
    align: "center",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Shop Name"), __jsx("td", {
    align: "center",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Shop Location"), props.rank ? __jsx("td", {
    align: "center",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, "Rank") : null, __jsx("td", {
    align: "center",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2838257374", [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]]])
  }, '10/05/2020'))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2838257374",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize]
  }, `th.__jsx-style-dynamic-selector{text-align:center;font-size:14px;}.td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize};}td.__jsx-style-dynamic-selector{font-size:${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHZlbmRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEtpQixBQUcyQyxBQUlMLEFBTTBCLGtCQVR4QixlQUNuQixNQVNBLG1DQU51QixxRUFFb0IsdUNBQzNDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHZlbmRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgTmF2LCBUYWJsZSwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVVzZXJzLCBmYVVzZXJQbHVzLCBmYVNsaWRlcnNIIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBUaXRsZVJvdyBmcm9tICcuLi8uLi8uLi90aXRsZS1yb3cnO1xyXG5pbXBvcnQgQ2FyZEFjY29yZGlvbiBmcm9tICcuLi8uLi8uLi9jYXJkX2FjY29yZGlvbidcclxuY2xhc3MgVmVuZG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVJvdyBpY29uPXtmYVVzZXJzfSB0aXRsZT17JyBBZG1pbiBEYXNoYm9hcmQgLyBWZW5kb3JzJ30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuY29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpZ2h0Z3JlZW4nIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+VmVuZG9yczwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcnN9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbGlnaHRibHVlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9Pk5ldyBWZW5kb3JzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdvcmFuZ2UnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+IFRvcCBWZW5kb3JzIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyMzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgc3R5bGU9e3N0eWxlcy5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGh1bWJzVXB9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncGluaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PiBBZG1pbiBWZW5kb3JzIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17c3R5bGVzLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU2NzhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IHN0eWxlPXtzdHlsZXMuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFZlbmRvclRhYmxlIGhlYWRlcj17J0FsbCBWZW5kb3JzJ30gcmFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxWZW5kb3JUYWJsZSBoZWFkZXI9eydOZXcgVmVuZG9ycyd9IHJhbms9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFZlbmRvclRhYmxlIGhlYWRlcj17J1RvcCBWZW5kb3JzJ30gcmFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxWZW5kb3JUYWJsZSBoZWFkZXI9eydBZG1pbiBWZW5kb3JzJ30gcmFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVmVuZG9yVGFibGUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9e3Byb3BzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVjayB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2hvcCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaG9wIExvY2F0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yYW5rID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmFuazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVjayB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gPiBWaWV3IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PkVkaXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5EZWxldGU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID5OYW1lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID5TaG9wIE5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgPlNob3AgTG9jYXRpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJhbmsgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID5SYW5rPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID57JzEwLzA1LzIwMjAnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBwYWRkaW5nVG9wOiAnMHB4JyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMHB4JyxcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXHJcbiAgICB9LFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzIlJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5J1xyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuY2FyZF9oZWFkZXJfZm9udHNpemV9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICB0YWJsZV9jYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgY2FyZF90ZXh0OiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGZsb2F0OiAncmlnaHQnXHJcbiAgICB9LFxyXG4gICAgYWNjb3JkaW5fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVuZG9yOyJdfQ== */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-contents\\vendors.js */`));
}

const styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  nav_link: {
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '10px',
    paddingRight: '5px'
  },
  col: {
    padding: '0px',
    margin: '0px'
  },
  card: {
    width: '100%',
    marginBottom: '2%',
    border: '1px solid lightgray'
  },
  card_header: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].card_header_fontsize}`,
    border: 'none'
  },
  table_card_header: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].card_header_background}`,
    border: 'none'
  },
  card_text: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color}`,
    fontSize: '20px'
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize}`
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color}`,
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px',
    float: 'right'
  },
  accordin_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vendor);

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
/* harmony import */ var _dashboard_contents_admin_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-contents/admin-dashboard */ "./src/pages/components/admin/dashboard/dashboard-contents/admin-dashboard.js");
/* harmony import */ var _dashboard_contents_vendors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-contents/vendors */ "./src/pages/components/admin/dashboard/dashboard-contents/vendors.js");
/* harmony import */ var _dashboard_contents_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-contents/customers */ "./src/pages/components/admin/dashboard/dashboard-contents/customers.js");
/* harmony import */ var _dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-contents/product-contents/all-products */ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/all-products.js");
/* harmony import */ var _vendor_dashboard_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../vendor/dashboard/dashboard-contents/product-contents/add-new */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js");
/* harmony import */ var _dashboard_contents_product_contents_product_categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-contents/product-contents/product-categories */ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-categories.js");
/* harmony import */ var _dashboard_contents_product_contents_product_tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-contents/product-contents/product-tags */ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-tags.js");
/* harmony import */ var _dashboard_contents_product_contents_product_fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-contents/product-contents/product-fields */ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-fields.js");
/* harmony import */ var _dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-contents/inventory */ "./src/pages/components/admin/dashboard/dashboard-contents/inventory.js");
/* harmony import */ var _dashboard_contents_discount__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-contents/discount */ "./src/pages/components/admin/dashboard/dashboard-contents/discount.js");
/* harmony import */ var _dashboard_contents_commision__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-contents/commision */ "./src/pages/components/admin/dashboard/dashboard-contents/commision.js");
/* harmony import */ var _dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard-contents/reports */ "./src/pages/components/admin/dashboard/dashboard-contents/reports.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







 // Products 





 // 







const DashboardSideDrawer = props => {
  let drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  const [show_product, setShow_product] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "Dashboard"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + (drawerClasses || "")
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: styles.image_div
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: styles.image
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik
  }, " ", props.user_name, " "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Dashboard",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, "Dashboard"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Vendors",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPersonBooth"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, "Vendors"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Customers",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, "Customers"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: styles.nav_link,
    onClick: () => setShow_product(!show_product)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, " Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: show_product ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"],
    style: styles.forword_fontawesome
  })))), show_product ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AllProducts",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, " All Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddProduct",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, " Add Product"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "ProducCategories",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, " Product Categories "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "ProductTags",
    onClick: props.click,
    style: styles.product_submenu_link,
    disabled: true
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, " Product Tags "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "ProductFields",
    onClick: props.click,
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, " Product Fields "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Inventory",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, "Inventory"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Discounts",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, "Discounts"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Commission",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPercent"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, "Commission"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Reports",
    onClick: props.click,
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, "Reports"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    onClick: (props.click, props.logoutClickHandler),
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "mr-auto"
  }, "Logout"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3017863662", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]]]) + " " + "tabs_side_drawer_tab_content"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Dashboard"
  }, __jsx(_dashboard_contents_admin_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Vendors"
  }, __jsx(_dashboard_contents_vendors__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Customers"
  }, __jsx(_dashboard_contents_customers__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AllProducts"
  }, __jsx(_dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddProduct"
  }, __jsx(_vendor_dashboard_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    isUpdateProduct: false,
    productCategories: '',
    productSubCategories: '',
    productSubSubCategories: '',
    subCategoryDisabled: true,
    subSubCategoryDisabled: true,
    productTags: [],
    warrantyType: '',
    simple_product_image_link: [],
    variationsArray: [],
    dangerousGoodsArray: []
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "ProducCategories"
  }, __jsx(_dashboard_contents_product_contents_product_categories__WEBPACK_IMPORTED_MODULE_11__["default"], props)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "ProductTags"
  }, __jsx(_dashboard_contents_product_contents_product_tags__WEBPACK_IMPORTED_MODULE_12__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "ProductFields"
  }, __jsx(_dashboard_contents_product_contents_product_fields__WEBPACK_IMPORTED_MODULE_13__["default"], props)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Inventory"
  }, __jsx(_dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_14__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Discounts"
  }, __jsx(_dashboard_contents_discount__WEBPACK_IMPORTED_MODULE_15__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Commision"
  }, __jsx(_dashboard_contents_commision__WEBPACK_IMPORTED_MODULE_16__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Reports"
  }, __jsx(_dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_17__["default"], null)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3017863662",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color]
  }, `.nav_link.__jsx-style-dynamic-selector{color:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;}.nav_link.__jsx-style-dynamic-selector:hover{background:#30313E;}.tabs_side_drawer.__jsx-style-dynamic-selector{height:100%;background:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color};box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:0;bottom:1px;left:0;overflow-y:auto;width:80%;max-width:400px;z-index:200;-webkit-transform:translateX(-150% );-ms-transform:translateX(-150% );transform:translateX(-150% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.tabs_side_drawer.open.__jsx-style-dynamic-selector{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.product_submenu.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:0% 5% 0% 10%;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;padding:0px;}label.__jsx-style-dynamic-selector{margin-top:4%;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color};}@media (min-width:992px){.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer_tab_content.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtc2lkZS1kcmF3ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU9pQixBQUc0RCxBQUtoQixBQUdQLEFBZVksQUFHZ0IsQUFNdEIsQUFLSixBQU1HLEFBR0EsWUFyQ3VCLENBbUN4QyxBQUdBLENBVG1DLElBTHhCLENBM0JmLFVBNEJnQixNQWpDbUIsS0EwQkEsQ0FRbkMsUUFJQSxHQTdCOEMsY0FSUixLQTBCQSxhQUp0QyxPQWJtQixTQVJuQixLQTBCd0IsQ0FqQmQsTUFDSyxXQUNKLEVBZ0JYLEtBZm9CLGdCQUNOLFVBQ00sZ0JBQ0osWUFDaUIsbUdBQ00saUlBQ3ZDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtc2lkZS1kcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXYsIFRhYiwgUm93LCBDb2wsIEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFQZXJzb25Cb290aCwgZmFUYWNob21ldGVyQWx0LCBmYUNoZXZyb25SaWdodCwgZmFVc2VycywgZmFDaGV2cm9uVXAsIGZhQ2hldnJvbkRvd24sXHJcbiAgICBmYUxpc3RBbHQsIGZhV2FyZWhvdXNlLCBmYVRhZ3MsIGZhUGVyY2VudCwgZmFDaGFydEJhciwgZmFQbHVzQ2lyY2xlXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IEFkbWluRGFzaGJvYXJkIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2FkbWluLWRhc2hib2FyZCc7XHJcbmltcG9ydCBWZW5kb3JzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3ZlbmRvcnMnO1xyXG5pbXBvcnQgQ3VzdG9tZXJzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2N1c3RvbWVycyc7XHJcbi8vIFByb2R1Y3RzIFxyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvcHJvZHVjdC1jb250ZW50cy9hbGwtcHJvZHVjdHMnO1xyXG5pbXBvcnQgQWRkTmV3IGZyb20gJy4uLy4uL3ZlbmRvci9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvYWRkLW5ldyc7XHJcbmltcG9ydCBQcm9kdWNDYXRlZ29yaWVzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvcHJvZHVjdC1jYXRlZ29yaWVzJ1xyXG5pbXBvcnQgUHJvZHVjdFRhZ3MgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvcHJvZHVjdC1jb250ZW50cy9wcm9kdWN0LXRhZ3MnXHJcbmltcG9ydCBQcm9kdWN0RmllbGRzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvcHJvZHVjdC1maWVsZHMnXHJcbi8vIFxyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2ludmVudG9yeSc7XHJcbmltcG9ydCBEaXNjb3VudHMgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvZGlzY291bnQnO1xyXG5pbXBvcnQgQ29tbWlzaW9uIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2NvbW1pc2lvbic7XHJcbmltcG9ydCBSZXBvcnRzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3JlcG9ydHMnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZFNpZGVEcmF3ZXIgPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQgZHJhd2VyQ2xhc3NlcyA9IFwidGFic19zaWRlX2RyYXdlclwiO1xyXG4gICAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgICAgICBkcmF3ZXJDbGFzc2VzID0gXCJ0YWJzX3NpZGVfZHJhd2VyIG9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2hvd19wcm9kdWN0LCBzZXRTaG93X3Byb2R1Y3RdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRhYi5Db250YWluZXIgaWQ9XCJkYXNoYm9hcmQtdGFic1wiIGRlZmF1bHRBY3RpdmVLZXk9XCJEYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBTaWRlIERyYXdlciBDb21wb25lbnRzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RyYXdlckNsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW5cIiB2YXJpYW50PVwicGlsbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIExpbmtzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gc3R5bGU9e3N0eWxlcy5pbWFnZV9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9pbmRleFwiIHN0eWxlPXtzdHlsZXMubXVoYWxpa30+IHtwcm9wcy51c2VyX25hbWV9IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJEYXNoYm9hcmRcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUYWNob21ldGVyQWx0fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlZlbmRvcnNcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQZXJzb25Cb290aH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+VmVuZG9yczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQ3VzdG9tZXJzXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcnN9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkN1c3RvbWVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHNldFNob3dfcHJvZHVjdCghc2hvd19wcm9kdWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFByb2R1Y3RzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e3Nob3dfcHJvZHVjdCA/IGZhQ2hldnJvblVwIDogZmFDaGV2cm9uRG93bn0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dfcHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9zdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkFsbFByb2R1Y3RzXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9zdWJtZW51X2xpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBBbGwgUHJvZHVjdHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3N1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWRkUHJvZHVjdFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLnByb2R1Y3Rfc3VibWVudV9saW5rfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUGx1c0NpcmNsZX0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBBZGQgUHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9zdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlByb2R1Y0NhdGVnb3JpZXNcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X3N1Ym1lbnVfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBQcm9kdWN0IENhdGVnb3JpZXMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3N1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiUHJvZHVjdFRhZ3NcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X3N1Ym1lbnVfbGlua30gZGlzYWJsZWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRhZ3N9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gUHJvZHVjdCBUYWdzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9zdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlByb2R1Y3RGaWVsZHNcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X3N1Ym1lbnVfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gUHJvZHVjdCBGaWVsZHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkludmVudG9yeVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdhcmVob3VzZX0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+SW52ZW50b3J5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJEaXNjb3VudHNcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUYWdzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5EaXNjb3VudHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJDb21taXNzaW9uXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVyY2VudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+Q29tbWlzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlJlcG9ydHNcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGFydEJhcn0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+UmVwb3J0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXtwcm9wcy5jbGljaywgcHJvcHMubG9nb3V0Q2xpY2tIYW5kbGVyfSBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoYXJ0QmFyfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic19zaWRlX2RyYXdlcl90YWJfY29udGVudFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXtcImF1dG9cIn0gc3R5bGU9e3sgcGFkZGluZzogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZG1pbkRhc2hib2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIlZlbmRvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVuZG9ycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkN1c3RvbWVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkFsbFByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsbFByb2R1Y3RzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWRkUHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGROZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VwZGF0ZVByb2R1Y3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllcz17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTdWJDYXRlZ29yaWVzPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFN1YlN1YkNhdGVnb3JpZXM9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeURpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJTdWJDYXRlZ29yeURpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGFncz17W119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5VHlwZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNHb29kc0FycmF5PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIlByb2R1Y0NhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjQ2F0ZWdvcmllcyB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiUHJvZHVjdFRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFRhZ3MgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJQcm9kdWN0RmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RGaWVsZHMgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50b3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiRGlzY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2NvdW50cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkNvbW1pc2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21taXNpb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJSZXBvcnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgdGhlIFNpZGUgRHJhd2VyIENvbXBvbmVudHMgKi99XHJcbiAgICAgICAgICAgIDwvVGFiLkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzEzRTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRhYnNfc2lkZV9kcmF3ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Rfc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlIDUlIDAlIDEwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyX3RhYl9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgaW1hZ2VfZGl2OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMC41cHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzIlJ1xyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6ICc4MHB4J1xyXG4gICAgfSxcclxuICAgIG11aGFsaWs6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgICAgICBwYWRkaW5nOiAnMHB4JyxcclxuICAgICAgICBtYXJnaW46ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4J1xyXG4gICAgfSxcclxuICAgIHByb2R1Y3Rfc3VibWVudV9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMXB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDBweCdcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzglJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgZm9yd29yZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICB3aWR0aDogJzhweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnOHB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFNpZGVEcmF3ZXI7Il19 */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-side-drawer.js */`));
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color}`,
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color}`,
    marginRight: '8%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color}`,
    float: 'right',
    width: '8px',
    height: '8px',
    maxHeight: '8px',
    maxWidth: '8px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DashboardSideDrawer);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard.js":
/*!***********************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard.js ***!
  \***********************************************************/
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
/* harmony import */ var _dashboard_contents_admin_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-contents/admin-dashboard */ "./src/pages/components/admin/dashboard/dashboard-contents/admin-dashboard.js");
/* harmony import */ var _dashboard_contents_vendors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-contents/vendors */ "./src/pages/components/admin/dashboard/dashboard-contents/vendors.js");
/* harmony import */ var _dashboard_contents_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-contents/customers */ "./src/pages/components/admin/dashboard/dashboard-contents/customers.js");
/* harmony import */ var _dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-contents/product-contents/all-products */ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/all-products.js");
/* harmony import */ var _vendor_dashboard_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../vendor/dashboard/dashboard-contents/product-contents/add-new */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js");
/* harmony import */ var _dashboard_contents_product_contents_product_categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-contents/product-contents/product-categories */ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-categories.js");
/* harmony import */ var _dashboard_contents_product_contents_product_tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-contents/product-contents/product-tags */ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-tags.js");
/* harmony import */ var _dashboard_contents_product_contents_product_fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-contents/product-contents/product-fields */ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-fields.js");
/* harmony import */ var _dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-contents/inventory */ "./src/pages/components/admin/dashboard/dashboard-contents/inventory.js");
/* harmony import */ var _dashboard_contents_discount__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-contents/discount */ "./src/pages/components/admin/dashboard/dashboard-contents/discount.js");
/* harmony import */ var _dashboard_contents_commision__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-contents/commision */ "./src/pages/components/admin/dashboard/dashboard-contents/commision.js");
/* harmony import */ var _dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard-contents/reports */ "./src/pages/components/admin/dashboard/dashboard-contents/reports.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







 // Products 





 // 







const Dashboard = props => {
  let wprapper_Casses = "wrapper";

  if (props.show) {
    wprapper_Casses = "wrapper open";
  }

  const [show_product, setShow_product] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "Dashboard"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true
  }, __jsx("div", {
    style: styles.wrapper_col,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + (wprapper_Casses || "")
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills",
    style: {
      minWidth: '220px',
      maxWidth: '220px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: styles.image_div
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]])
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: styles.image
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik
  }, " ", props.user_name, " "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Dashboard",
    style: styles.nav_link,
    onClick: () => setShow_product(false)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, " Dashboard "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Vendors",
    style: styles.nav_link,
    onClick: () => setShow_product(false)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPersonBooth"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, "Vendors"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "two",
    style: styles.nav_link,
    onClick: () => setShow_product(false)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, "Customers"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: styles.nav_link,
    onClick: () => setShow_product(!show_product)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, " Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: show_product ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"],
    style: styles.forword_fontawesome
  })))), show_product ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AllProducts",
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, " All Products "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "AddProduct",
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, " Add Product"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "ProductCategories",
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, " Product Categories "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "ProductTags",
    style: styles.product_submenu_link,
    disabled: true
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, " Product Tags "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "product_submenu"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "ProductFields",
    style: styles.product_submenu_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, " Product Fields "), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Inventory",
    style: styles.nav_link,
    onClick: () => setShow_product(false)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, "Inventory"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Discounts",
    style: styles.nav_link,
    onClick: () => setShow_product(false)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, "Discounts"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Commission",
    style: styles.nav_link,
    onClick: () => setShow_product(false)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPercent"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, "Commission"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Reports",
    style: styles.nav_link,
    onClick: () => setShow_product(false)
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "mr-auto"
  }, "Reports"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome
  })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    style: styles.navbar,
    variant: "dark",
    className: "p-1 m-0"
  }, __jsx("div", {
    style: styles.toolbar_btn_div,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "side_tab_toogle_btn mr-auto"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.toolbar_btn,
    onClick: props.drawerClickHandler
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.toolbar_fontawesomer
  }))), __jsx("div", {
    style: styles.toolbar_btn_div,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "wrapper_btn"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.toolbar_btn,
    onClick: props.wrapperBtnClickHandler,
    className: "ml-1"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.toolbar_fontawesomer
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    style: {
      width: '85%'
    },
    className: "mr-auto"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: styles.search_bar,
    type: "text",
    size: "sm",
    placeholder: "Search here",
    "aria-describedby": "side_drawer_searchbar",
    name: "side_drawer_searchbar"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: "side_drawer_searchBtn",
    style: styles.toolbar_btn
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.toolbar_fontawesomer
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "account_settig_dropdown"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
    className: "p-0 m-0",
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: "muhalik.jpg",
      roundedCircle: true,
      fluid: true,
      style: {
        width: '30px',
        maxWidth: '30px'
      }
    }),
    id: "nav-dropdown",
    alignRight: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    href: "#/action-1"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
    style: styles.dropDown_fontawesome
  }), "My Profile"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    href: "#/action-2"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome
  }), "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    href: "#/action-3"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandsHelping"],
    style: styles.dropDown_fontawesome
  }), "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Divider, null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    onClick: props.logoutClickHandler
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPowerOff"],
    style: styles.dropDown_fontawesome
  }), "Logout")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135904876", [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]]]) + " " + "tab_content"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
    style: {
      height: `calc(100vh - 65px)`,
      overflowY: 'auto'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Dashboard"
  }, __jsx(_dashboard_contents_admin_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Vendors"
  }, __jsx(_dashboard_contents_vendors__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Customers"
  }, __jsx(_dashboard_contents_customers__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AllProducts"
  }, __jsx(_dashboard_contents_product_contents_all_products__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "AddProduct"
  }, __jsx(_vendor_dashboard_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    isUpdateProduct: false,
    productCategories: '',
    productSubCategories: '',
    subCategoryDisabled: true,
    productTags: [],
    warrantyType: '',
    simple_product_image_link: [],
    variationsArray: [],
    dangerousGoodsArray: []
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "ProductCategories"
  }, __jsx(_dashboard_contents_product_contents_product_categories__WEBPACK_IMPORTED_MODULE_11__["default"], props)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "ProductTags"
  }, __jsx(_dashboard_contents_product_contents_product_tags__WEBPACK_IMPORTED_MODULE_12__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "ProductFields"
  }, __jsx(_dashboard_contents_product_contents_product_fields__WEBPACK_IMPORTED_MODULE_13__["default"], props)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Inventory"
  }, __jsx(_dashboard_contents_inventory__WEBPACK_IMPORTED_MODULE_14__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Discounts"
  }, __jsx(_dashboard_contents_discount__WEBPACK_IMPORTED_MODULE_15__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Commision"
  }, __jsx(_dashboard_contents_commision__WEBPACK_IMPORTED_MODULE_16__["default"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Reports"
  }, __jsx(_dashboard_contents_reports__WEBPACK_IMPORTED_MODULE_17__["default"], null))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2135904876",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color]
  }, `.show_product.__jsx-style-dynamic-selector{display:none;}.show_product.open.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.wrapper.__jsx-style-dynamic-selector{display:none;}.wrapper.open.__jsx-style-dynamic-selector{backgroung:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color};display:block;height:100vh;overflow-y:auto;}.nav_link.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;}.nav_link.__jsx-style-dynamic-selector:hover{background:#30313E;}.product_submenu.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:0% 5% 0% 10%;}.side_tab_toogle_btn.__jsx-style-dynamic-selector{margin:0%;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}@media (max-width:991px){.wrapper_btn.__jsx-style-dynamic-selector{display:none;}.wrapper.__jsx-style-dynamic-selector{display:none;}.tab_content.__jsx-style-dynamic-selector{display:none;}.account_settig_dropdown.__jsx-style-dynamic-selector{display:none;}.wrapper.open.__jsx-style-dynamic-selector{display:none;height:0vh;}}@media (min-width:992px){.side_tab_toogle_btn.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1JpQixBQUdrQyxBQUdBLEFBR0EsQUFHNEIsQUFNRCxBQU1yQixBQUdxQixBQU83QyxBQUV1QixBQU1uQixBQUVnQixBQUdFLEFBSWxCLEFBRWtCLEFBTUEsVUF6QnJCLEdBOUJBLEFBTUEsQUFnQ0ksQUFHQSxBQUdBLEFBR0EsQUFJRCxBQUtDLEtBdkJXLENBWmYsS0E4QkksS0FqQkosV0F6QmtCLEFBTWlCLEFBU0EsY0FkbEIsYUFDRyxJQUtrQixBQVNBLEdBdEJ0QyxTQVNBLHNCQUtxQixBQVNHLGlCQVJ4QixHQVNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZSwgTmF2LCBOYXZiYXIsIERyb3Bkb3duLCBOYXZEcm9wZG93biwgQnV0dG9uR3JvdXAsIEZvcm0sIEZvcm1Db250cm9sLCBJbnB1dEdyb3VwLCBCdXR0b24sIFNwaW5uZXIsIFRhYiwgUm93LCBDb2wsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2VhcmNoLCBmYUJhcnMsIGZhUG93ZXJPZmYsIGZhQ2hldnJvblJpZ2h0LCBmYVBsdXNDaXJjbGUsIGZhQ2hldnJvbkRvd24sIGZhQ2hldnJvblVwLCBmYVRhY2hvbWV0ZXJBbHQsIGZhUGVyc29uQm9vdGgsIGZhSGFuZHNIZWxwaW5nLCBmYVVzZXIsIGZhVXNlcnMsIGZhTGlzdEFsdCwgZmFXYXJlaG91c2UsIGZhVGFncywgZmFQZXJjZW50LCBmYUNoYXJ0QmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IEFkbWluRGFzaGJvYXJkIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2FkbWluLWRhc2hib2FyZCc7XHJcbmltcG9ydCBWZW5kb3JzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3ZlbmRvcnMnO1xyXG5pbXBvcnQgQ3VzdG9tZXJzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2N1c3RvbWVycyc7XHJcbi8vIFByb2R1Y3RzIFxyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvcHJvZHVjdC1jb250ZW50cy9hbGwtcHJvZHVjdHMnO1xyXG5pbXBvcnQgQWRkTmV3IGZyb20gJy4uLy4uL3ZlbmRvci9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvYWRkLW5ldyc7XHJcbmltcG9ydCBQcm9kdWNDYXRlZ29yaWVzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvcHJvZHVjdC1jYXRlZ29yaWVzJ1xyXG5pbXBvcnQgUHJvZHVjdFRhZ3MgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvcHJvZHVjdC1jb250ZW50cy9wcm9kdWN0LXRhZ3MnXHJcbmltcG9ydCBQcm9kdWN0RmllbGRzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3Byb2R1Y3QtY29udGVudHMvcHJvZHVjdC1maWVsZHMnXHJcbi8vIFxyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2ludmVudG9yeSc7XHJcbmltcG9ydCBEaXNjb3VudHMgZnJvbSAnLi9kYXNoYm9hcmQtY29udGVudHMvZGlzY291bnQnO1xyXG5pbXBvcnQgQ29tbWlzaW9uIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL2NvbW1pc2lvbic7XHJcbmltcG9ydCBSZXBvcnRzIGZyb20gJy4vZGFzaGJvYXJkLWNvbnRlbnRzL3JlcG9ydHMnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9IHByb3BzID0+IHtcclxuICAgIGxldCB3cHJhcHBlcl9DYXNzZXMgPSBcIndyYXBwZXJcIjtcclxuICAgIGlmIChwcm9wcy5zaG93KSB7XHJcbiAgICAgICAgd3ByYXBwZXJfQ2Fzc2VzID0gXCJ3cmFwcGVyIG9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2hvd19wcm9kdWN0LCBzZXRTaG93X3Byb2R1Y3RdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRhYi5Db250YWluZXIgaWQ9XCJkYXNoYm9hcmQtdGFic1wiIGRlZmF1bHRBY3RpdmVLZXk9XCJEYXNoYm9hcmRcIiAgPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNob3cvSGlkZSBUYWJzICYgVGFicy1Db250ZW50IHdoZW4gc2NyZWVuIFN3aXRjaGVzIHRvIExhcmdlL01lZGl1bSxTbWFsbCxFeHRyYS1TbWFsbCBEZXZpY2VzKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dwcmFwcGVyX0Nhc3Nlc30gc3R5bGU9e3N0eWxlcy53cmFwcGVyX2NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW5cIiB2YXJpYW50PVwicGlsbHNcIiBzdHlsZT17eyBtaW5XaWR0aDogJzIyMHB4JywgbWF4V2lkdGg6ICcyMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gc3R5bGU9e3N0eWxlcy5pbWFnZV9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9pbmRleFwiIHN0eWxlPXtzdHlsZXMubXVoYWxpa30+IHtwcm9wcy51c2VyX25hbWV9IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkRhc2hib2FyZFwiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHNldFNob3dfcHJvZHVjdChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRhY2hvbWV0ZXJBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gRGFzaGJvYXJkIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlZlbmRvcnNcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93X3Byb2R1Y3QoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQZXJzb25Cb290aH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlZlbmRvcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJ0d29cIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93X3Byb2R1Y3QoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2Vyc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkN1c3RvbWVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93X3Byb2R1Y3QoIXNob3dfcHJvZHVjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFByb2R1Y3RzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtzaG93X3Byb2R1Y3QgPyBmYUNoZXZyb25VcCA6IGZhQ2hldnJvbkRvd259IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd19wcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Rfc3VibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWxsUHJvZHVjdHNcIiBzdHlsZT17c3R5bGVzLnByb2R1Y3Rfc3VibWVudV9saW5rfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBBbGwgUHJvZHVjdHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9zdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJBZGRQcm9kdWN0XCIgc3R5bGU9e3N0eWxlcy5wcm9kdWN0X3N1Ym1lbnVfbGlua30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQbHVzQ2lyY2xlfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBBZGQgUHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Rfc3VibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiUHJvZHVjdENhdGVnb3JpZXNcIiBzdHlsZT17c3R5bGVzLnByb2R1Y3Rfc3VibWVudV9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gUHJvZHVjdCBDYXRlZ29yaWVzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Rfc3VibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiUHJvZHVjdFRhZ3NcIiBzdHlsZT17c3R5bGVzLnByb2R1Y3Rfc3VibWVudV9saW5rfSBkaXNhYmxlZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRhZ3N9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFByb2R1Y3QgVGFncyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3N1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlByb2R1Y3RGaWVsZHNcIiBzdHlsZT17c3R5bGVzLnByb2R1Y3Rfc3VibWVudV9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFByb2R1Y3QgRmllbGRzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiSW52ZW50b3J5XCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gc2V0U2hvd19wcm9kdWN0KGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2FyZWhvdXNlfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+SW52ZW50b3J5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiRGlzY291bnRzXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gc2V0U2hvd19wcm9kdWN0KGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGFnc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkRpc2NvdW50czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJDb21taXNzaW9uXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gc2V0U2hvd19wcm9kdWN0KGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVyY2VudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPkNvbW1pc3Npb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiUmVwb3J0c1wiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHNldFNob3dfcHJvZHVjdChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoYXJ0QmFyfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+UmVwb3J0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgVGFicyBTaWRlIERyYXdlciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogVG9vbGJhciAmIFRhYnMgQ29udGVudHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRvb2xiYXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIHN0eWxlPXtzdHlsZXMubmF2YmFyfSB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT0ncC0xIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU2hvdy9IaWRlIGJhciBidG4gd2hpbGUgc2NyZWVuIHN3aXRjaGVzIHRvIExhcmdlIHRvIFNtYWxsLE1lZGl1bSxFeHRyYS1TbWFsbCBEZXZpY2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlX3RhYl90b29nbGVfYnRuIG1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRuX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRufSBvbkNsaWNrPXtwcm9wcy5kcmF3ZXJDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gc3R5bGU9e3N0eWxlcy50b29sYmFyX2ZvbnRhd2Vzb21lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJhcnMgQnRuIHRvIFNob3cvSGlkZSBUYWJzIFNkZSBEcmF3ZXIgaW4gTGFyZ2UgRGV2aWNlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9idG5cIiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRuX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17c3R5bGVzLnRvb2xiYXJfYnRufSBvbkNsaWNrPXtwcm9wcy53cmFwcGVyQnRuQ2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9J21sLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gc3R5bGU9e3N0eWxlcy50b29sYmFyX2ZvbnRhd2Vzb21lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlYXJjaCBCYXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3sgd2lkdGg6ICc4NSUnIH19IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuc2VhcmNoX2Jhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpZGVfZHJhd2VyX3NlYXJjaGJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaWRlX2RyYXdlcl9zZWFyY2hiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cInNpZGVfZHJhd2VyX3NlYXJjaEJ0blwiIHN0eWxlPXtzdHlsZXMudG9vbGJhcl9idG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy50b29sYmFyX2ZvbnRhd2Vzb21lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQWNjb3VudCBTZXR0aW5nIERyb3Bkb3duICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X3NldHRpZ19kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBjbGFzc05hbWU9J3AtMCBtLTAnIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBtYXhXaWR0aDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBpZD1cIm5hdi1kcm9wZG93blwiIGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZWRiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIYW5kc0hlbHBpbmd9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWxwP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9e3Byb3BzLmxvZ291dENsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBUb29sYmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGFiIENvbnRlbnQgZm9yIExhcmdlIERldmljZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuQ29udGVudCBzdHlsZT17eyBoZWlnaHQ6IGBjYWxjKDEwMHZoIC0gNjVweClgLCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJEYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkbWluRGFzaGJvYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJWZW5kb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZW5kb3JzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJDdXN0b21lcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWxsUHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsbFByb2R1Y3RzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBZGRQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGROZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVXBkYXRlUHJvZHVjdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllcz17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U3ViQ2F0ZWdvcmllcz17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeURpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRhZ3M9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlUeXBlPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5PXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c0dvb2RzQXJyYXk9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiUHJvZHVjdENhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y0NhdGVnb3JpZXMgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiUHJvZHVjdFRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUYWdzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJQcm9kdWN0RmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RmllbGRzIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiSW52ZW50b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlbnRvcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkRpc2NvdW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzY291bnRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJDb21taXNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1pc2lvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiUmVwb3J0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVwb3J0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBUYWIgQ29udGVudCBmb3IgTGFyZ2UgRGV2aWNlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIHRoZSBUb29sYmFyICYgVGFicyBDb21wb25lbnRzICovfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvVGFiLkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuc2hvd19wcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNob3dfcHJvZHVjdC5vcGVuIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAud3JhcHBlci5vcGVue1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmc6ICAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2X2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZfbGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzEzRTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0X3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlIDUlIDAlIDEwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zaWRlX3RhYl90b29nbGVfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXJfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGFiX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYWNjb3VudF9zZXR0aWdfZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53cmFwcGVyLm9wZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDB2aFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlX3RhYl90b29nbGVfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGltYWdlX2Rpdjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJzAuNXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyJSdcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwcHgnXHJcbiAgICB9LFxyXG4gICAgbXVoYWxpazoge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgd3JhcHBlcl9jb2w6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMC41JSAxJScsXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcl9idG5fZGl2OiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxJScsXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcl9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIHdpZHRoOiAnMzFweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzFweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBwYWRkaW5nOiAnMHB4JyxcclxuICAgIH0sXHJcbiAgICB0b29sYmFyX2ZvbnRhd2Vzb21lcjoge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG5cclxuICAgIHNlYXJjaF9iYXI6IHtcclxuICAgICAgICBmbGV4OiAnMScsXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4J1xyXG4gICAgfSxcclxuICAgIHByb2R1Y3Rfc3VibWVudV9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMXB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDBweCdcclxuICAgIH0sXHJcblxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc4JScsXHJcbiAgICAgICAgd2lkdGg6ICcxOHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE4cHgnLFxyXG4gICAgfSxcclxuICAgIGZvcndvcmRfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzEwcHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBkcm9wRG93bl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCAyMHB4IDBweCAwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHB4JyxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdfQ== */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard.js */`));
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color}`,
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    background: 'none'
  },
  wrapper_col: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color}`
  },
  navbar: {
    borderBottom: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color}`,
    background: 'white',
    padding: '0.5% 1%'
  },
  toolbar_btn_div: {
    marginRight: '1%'
  },
  toolbar_btn: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color}`,
    border: 'none',
    width: '31px',
    height: '31px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px'
  },
  toolbar_fontawesomer: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color}`,
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
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color}`,
    marginRight: '8%',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  forword_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].body_color}`,
    width: '10px',
    height: '10px',
    maxHeight: '10px',
    maxWidth: '10px'
  },
  dropDown_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_18__["default"].admin_primry_color}`,
    margin: '0px 20px 0px 0px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const AdminFooter = () => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]]])
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]]]) + " " + "footer"
}, __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]]]) + " " + "fooeter_text text-center"
}, "Copyright@ 2020", __jsx("span", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2300049164", [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]]])
}, " Muhalik "), "- Online Shopping Website")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2300049164",
  dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color]
}, `.footer.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color};position:absolute;left:0;bottom:0;right:0;}.fooeter_text.__jsx-style-dynamic-selector{margin:10px;font-size:smaller;color:${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color};}span.__jsx-style-dynamic-selector{font-weight:bold;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZm9vdGVyXFxhZG1pbi1mb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV29CLEFBR3lELEFBTzVCLEFBS0ssWUFKQyxLQUt0QixhQUp1QyxVQVJqQixrQkFDWCxPQUNFLEFBT2IsU0FOWSxRQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZm9vdGVyXFxhZG1pbi1mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuXHJcbmNvbnN0IEFkbWluRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb29ldGVyX3RleHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIENvcHlyaWdodEAgMjAyMFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiBNdWhhbGlrIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC0gT25saW5lIFNob3BwaW5nIFdlYnNpdGVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vZXRlcl90ZXh0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluRm9vdGVyOyJdfQ== */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\admin\\footer\\admin-footer.js */`));

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AdminLayout = props => __jsx("div", null, __jsx(_toolbar_admin_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, __jsx(_footer_admin_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function AlertModal(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], _extends({}, props, {
    size: "md",
    "aria-labelledby": "alert-modal",
    centered: true
  }), __jsx("div", {
    style: {
      border: `1px solid ${props.color}`,
      borderRadius: '5px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    style: {
      color: `${props.color}`,
      borderBottom: `1px solid ${props.color}`
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: props.iconname,
    style: {
      color: `${props.color}`,
      marginRight: '10px',
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    id: "alert-modal"
  }, props.header)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: {
      fontSize: '14px',
      padding: '0%',
      margin: '0%'
    }
  }, props.message)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    onClick: props.onHide
  }, "Close"))));
}

/* harmony default export */ __webpack_exports__["default"] = (AlertModal);

/***/ }),

/***/ "./src/pages/components/card_accordion.js":
/*!************************************************!*\
  !*** ./src/pages/components/card_accordion.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CardAccordion = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
  as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"],
  defaultActiveKey: "0",
  style: {
    margin: '2%'
  },
  noGutters: true
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  style: styles.card
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
  style: styles.card_header
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
  className: "p-0 ml-0 mt-0 mb-0 mr-2"
}, props.title), props.notification ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  size: "sm",
  variant: "primary",
  style: {
    fontSize: '12px'
  }
}, "New ", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
  variant: "light",
  style: {
    fontSize: '12px'
  }
}, props.badge)) : null, __jsx("div", {
  className: "mr-auto"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Toggle, {
  eventKey: "0",
  style: {
    background: 'none'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  size: "xs",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
  style: styles.slider_fontawesome
}))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Collapse, {
  eventKey: "0"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, props.children)))));

const styles = {
  card: {
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].card_header_background}`
  },
  slider_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].admin_primry_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CardAccordion);

/***/ }),

/***/ "./src/pages/components/confirm-modal.js":
/*!***********************************************!*\
  !*** ./src/pages/components/confirm-modal.js ***!
  \***********************************************/
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ConfirmModal(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.show,
    onHide: props.onHide,
    size: "md",
    "aria-labelledby": "alert-modal",
    centered: true
  }, __jsx("div", {
    style: {
      border: '1px solid #ff3333',
      borderRadius: '5px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    style: {
      color: '#ff3333',
      borderBottom: '1px solid #ff3333'
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"],
    style: {
      color: '#ff3333',
      marginRight: '10px',
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    id: "alert-modal"
  }, props.title)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: {
      fontSize: '14px',
      padding: '0%',
      margin: '0%'
    }
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    }
  }, " Name: "), props.name), __jsx("br", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: {
      fontSize: '14px',
      padding: '0%',
      margin: '0%'
    }
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    }
  }, " ID: "), props._id)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    variant: "outline-danger",
    className: "mr-auto",
    onClick: props.confirm
  }, "Confirm"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    variant: "outline-primary",
    onClick: props.onHide
  }, "Cancel"))));
}

/* harmony default export */ __webpack_exports__["default"] = (ConfirmModal);

/***/ }),

/***/ "./src/pages/components/title-row.js":
/*!*******************************************!*\
  !*** ./src/pages/components/title-row.js ***!
  \*******************************************/
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TitleRow = props => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  style: styles.title_row,
  noGutters: true
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: props.icon,
  style: styles.title_fontawesome
}), __jsx("div", {
  className: "mr-auto",
  style: styles.title
}, " Muhalik / ", props.title, " "));

const styles = {
  title_row: {
    borderBottom: '1px solid lightgray',
    padding: '1% 2.5%',
    display: 'flex',
    alignItems: 'center'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '22px',
    height: '22px',
    maxHeight: '22px',
    maxWidth: '22px'
  },
  title: {
    color: 'gray',
    fontSize: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TitleRow);

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new-contents\\add-new-field-name-model.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function AddNewFieldNameModal(props) {
  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");

  async function handleAdd() {
    if (value.length > 2 && value.length < 21) {
      setIsLoading(true);
      const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_3__["default"].PATH + '/api/categories/field-request';
      let data = [];
      data = {
        value: value,
        label: value
      };
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, {
        data
      }, {
        headers: {
          'authorization': props.token
        }
      }).then(response => {
        setIsLoading(false);
        setMessage('Your Request Sended Successfully, You will be informed soon');
      }).catch(error => {
        setIsLoading(false);
        setMessage('Request Failed');
      });
    } else {
      setError('Must be 2-20 characters');
    }
  }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"], _extends({}, props, {
    size: "md",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Header, {
    closeButton: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Title, {
    id: "contained-modal-title-vcenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Add New Field")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, message ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, message) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Your Request for Adding New Field Name will be send to Admin, Admin will Approve/Discard it."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Field Name",
    name: "sku",
    value: value,
    onChange: e => {
      setValue(e.target.value);

      if (e.target.value.length > 2 && e.target.value.length < 21) {
        setError("");
      }
    },
    isInvalid: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
    type: "invalid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, error))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, message ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "sm",
    className: "mr-auto",
    onClick: () => {
      setMessage("");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Add More?") : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "sm",
    className: "mr-auto",
    onClick: handleAdd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, isLoading ? 'Adding' : 'Add Field', isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Spinner"], {
    animation: "grow",
    size: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 38
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 79
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    size: "sm",
    onClick: props.onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _add_new_field_name_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-new-field-name-model */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/add-new-field-name-model.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const groupStyles = {
  border: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color}`,
  borderRadius: '5px',
  background: 'white',
  color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color}`
};

const Group = props => __jsx("div", {
  style: groupStyles
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_6__["components"].Group, props));

const CustomFields = props => {
  const [modalShow, setModalShow] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [fieldName, setFieldName] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [fieldValue, setFieldValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');

  function handleAddCustomFieldBtnClick() {
    if (fieldName != '' && fieldValue != '') {
      const copyArray = Object.assign([], props.customFieldsArray);
      copyArray.push({
        name: fieldName.value,
        value: fieldValue
      });
      props.setFieldsArrayHandler(copyArray);
      setError('');
      setFieldName('');
      setFieldValue('');
    } else {
      setError('Enter Field Name and Value');
    }
  }

  function deleteCustomFieldsClick(index) {
    const copyArray = Object.assign([], props.customFieldsArray);
    copyArray.splice(index, 1);
    props.setFieldsArrayHandler(copyArray);
  }

  function saveCustomFieldsHandler() {
    if (props.customFieldsArray != '') {
      setError('');
      props.saveCustomFieldsHandler();
    } else {
      setError('Add Fields First');
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.hideCustomFields ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, " Please First Create Variations ") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    style: {
      margin: '0%',
      padding: '1.5%',
      background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].body_color}`
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Field Name"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: '1',
    instanceId: '1',
    inputId: '1',
    styles: _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].react_select_styles,
    options: props.fields_list,
    components: {
      Group
    },
    value: fieldName,
    onChange: e => setFieldName(e)
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: {
      padding: '0%',
      margin: '0%',
      fontSize: '14px'
    },
    onClick: () => setModalShow(true)
  }, "Add New"), __jsx(_add_new_field_name_model__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
    show: modalShow,
    onHide: () => setModalShow(false)
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Field Value "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: {
      fontSize: '14px'
    },
    type: "text",
    placeholder: "Enter Value",
    name: "sku",
    value: fieldValue,
    onChange: e => setFieldValue(e.target.value)
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: handleAddCustomFieldBtnClick
  }, "Add"))), __jsx("span", {
    className: "jsx-1112730667" + " " + "mr-auto"
  }, " ", error, " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    noGutters: true
  }, props.isVariableProduct ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label,
    className: "mr-auto"
  }, "For Variable Products each Custom Field will be added to all variations") : null, __jsx("div", {
    className: "jsx-1112730667" + " " + 'mr-auto'
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    onClick: saveCustomFieldsHandler
  }, "Save Fields")))), __jsx("div", {
    style: {
      background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].body_color}`,
      marginTop: '1%'
    },
    className: "jsx-1112730667"
  }, props.customFieldsArray && props.customFieldsArray.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    style: {
      padding: '1% 2%'
    },
    key: index
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    size: "sm",
    value: element.name,
    onChange: () => element.name
  }, __jsx("option", {
    className: "jsx-1112730667"
  }, element.name))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: element.value,
    onChange: () => element.value
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => deleteCustomFieldsClick(index)
  }, " delete")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1112730667"
  }, "span.jsx-1112730667{color:red;font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LWNvbnRlbnRzXFxjdXN0b20tZmllbGRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Kd0IsQUFHK0IsVUFFZixlQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LWNvbnRlbnRzXFxjdXN0b20tZmllbGRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBGb3JtLCBJbnB1dEdyb3VwLCBDb2wsIEJ1dHRvbiwgUm93LCBDYXJkLCBNb2RhbCwgTmF2IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2xpZGVyc0ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IFNlbGVjdCwgeyBjb21wb25lbnRzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IEFkZE5ld0ZpZWxkTmFtZU1vZGFsIGZyb20gJy4vYWRkLW5ldy1maWVsZC1uYW1lLW1vZGVsJztcclxuY29uc3QgZ3JvdXBTdHlsZXMgPSB7XHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxufTtcclxuXHJcbmNvbnN0IEdyb3VwID0gcHJvcHMgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17Z3JvdXBTdHlsZXN9PlxyXG4gICAgICAgIDxjb21wb25lbnRzLkdyb3VwIHsuLi5wcm9wc30gLz5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuXHJcbmNvbnN0IEN1c3RvbUZpZWxkcyA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZmllbGROYW1lLCBzZXRGaWVsZE5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZpZWxkVmFsdWUsIHNldEZpZWxkVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkQ3VzdG9tRmllbGRCdG5DbGljaygpIHtcclxuICAgICAgICBpZiAoZmllbGROYW1lICE9ICcnICYmIGZpZWxkVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMuY3VzdG9tRmllbGRzQXJyYXkpXHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkTmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZFZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRGaWVsZHNBcnJheUhhbmRsZXIoY29weUFycmF5KVxyXG4gICAgICAgICAgICBzZXRFcnJvcignJyk7XHJcbiAgICAgICAgICAgIHNldEZpZWxkTmFtZSgnJyk7XHJcbiAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVDdXN0b21GaWVsZHNDbGljayhpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLmN1c3RvbUZpZWxkc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBwcm9wcy5zZXRGaWVsZHNBcnJheUhhbmRsZXIoY29weUFycmF5KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlQ3VzdG9tRmllbGRzSGFuZGxlcigpIHtcclxuICAgICAgICBpZiAocHJvcHMuY3VzdG9tRmllbGRzQXJyYXkgIT0gJycpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJycpO1xyXG4gICAgICAgICAgICBwcm9wcy5zYXZlQ3VzdG9tRmllbGRzSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0FkZCBGaWVsZHMgRmlyc3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvcHMuaGlkZUN1c3RvbUZpZWxkcyA/XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gUGxlYXNlIEZpcnN0IENyZWF0ZSBWYXJpYXRpb25zIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXt7IG1hcmdpbjogJzAlJywgcGFkZGluZzogJzEuNSUnLCBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZCBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e0dsb2JhbFN0eWxlU2hlZXQucmVhY3Rfc2VsZWN0X3N0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5maWVsZHNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IEdyb3VwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpZWxkTmFtZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgcGFkZGluZzogJzAlJywgbWFyZ2luOiAnMCUnLCBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9eygpID0+IHNldE1vZGFsU2hvdyh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE5ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZE5ld0ZpZWxkTmFtZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldE1vZGFsU2hvdyhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs3fSBtZD17N30gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RmllbGQgVmFsdWUgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaWVsZFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX0gb25DbGljaz17aGFuZGxlQWRkQ3VzdG9tRmllbGRCdG5DbGlja30+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItYXV0b1wiPiB7ZXJyb3J9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0gY2xhc3NOYW1lPVwibXItYXV0b1wiPkZvciBWYXJpYWJsZSBQcm9kdWN0cyBlYWNoIEN1c3RvbSBGaWVsZCB3aWxsIGJlIGFkZGVkIHRvIGFsbCB2YXJpYXRpb25zPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgc2l6ZT1cInNtXCIgb25DbGljaz17c2F2ZUN1c3RvbUZpZWxkc0hhbmRsZXJ9PlNhdmUgRmllbGRzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogTWFwICovfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLCBtYXJnaW5Ub3A6ICcxJScgfX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY3VzdG9tRmllbGRzQXJyYXkgJiYgcHJvcHMuY3VzdG9tRmllbGRzQXJyYXkubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3cgc3R5bGU9e3sgcGFkZGluZzogJzElIDIlJyB9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17NX0gbWQ9ezV9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbWVudC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBlbGVtZW50Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj57ZWxlbWVudC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs3fSBtZD17N30gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBzaXplPVwic21cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMSUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUN1c3RvbUZpZWxkc0NsaWNrKGluZGV4KX0+IGRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwJSdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAvLyBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgfSxcclxuICAgIGFjY29yZGluX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRmllbGRzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new-contents\\\\custom-fields.js */"));
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
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].card_header_background}`
  },
  label: {
    fontSize: '13px'
  },
  accordin_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color}`,
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select/creatable */ "react-select/creatable");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_select_creatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select-material-ui */ "react-select-material-ui");
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select_material_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _add_new_field_name_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-new-field-name-model */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/add-new-field-name-model.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const groupStyles = {
  border: `1px solid ${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color}`,
  borderRadius: '5px',
  background: 'white',
  color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color}`
};

const Group = props => __jsx("div", {
  style: groupStyles
}, __jsx(react_select__WEBPACK_IMPORTED_MODULE_9__["components"].Group, props));

const ProductData = props => {
  const [imgError, setImgError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
    style: {
      margin: '2%'
    },
    defaultActiveKey: "0"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: styles.card
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    style: styles.card_header
  }, "Product Data", __jsx("div", {
    className: "jsx-3282219053" + " " + 'mr-auto'
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: {
      width: '50%'
    },
    as: "select",
    name: "product_type",
    size: "sm",
    value: props.product_type_values,
    onChange: e => {
      props.onChange(e), props.productTypeHandler(e);
    } // disabled={props.isUpdateProduct}

  }, __jsx("option", {
    value: "simple-product",
    className: "jsx-3282219053"
  }, " Simple Product "), __jsx("option", {
    value: "variable-prouct",
    className: "jsx-3282219053"
  }, " Variable Product ")), __jsx("div", {
    className: "jsx-3282219053" + " " + 'mr-auto'
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    eventKey: "0",
    style: {
      background: 'none'
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
    style: styles.slider_fontawesome
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
    eventKey: "0"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    style: {
      padding: '0.5%',
      margin: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "left-tabs-example",
    defaultActiveKey: "Inventory"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      margin: '0px',
      minHeight: '300px'
    },
    noGutters: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "auto",
    md: "auto",
    sm: "auto",
    xs: "auto",
    style: {
      background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color}`
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    variant: "pills",
    className: "flex-column",
    style: {
      margin: '0px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Inventory",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStoreAlt"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Inventory ")))), props.isVariableProduct ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Attributes",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Attributes ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Variations",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faListAlt"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Variations "))))) : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "General",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " General ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Shipping",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTruck"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Shipping ")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, __jsx("div", {
    className: "jsx-3282219053" + " " + "nav_link"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "Advanced",
    style: styles.nav_link
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTools"],
    style: styles.product_fontawesome
  }), __jsx("div", {
    className: "jsx-3282219053" + " " + "linkName"
  }, " Advanced ")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      padding: '2%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "General"
  }, props.isVariableProduct ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Price ", __jsx("span", {
    className: "jsx-3282219053"
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Price",
    name: "product_price",
    value: props.product_price_values,
    onChange: props.onChange,
    isInvalid: props.product_price_touched && props.product_price_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_price_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product in Stock", __jsx("span", {
    className: "jsx-3282219053"
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    name: "product_in_stock",
    placeholder: "Enter Product In Stock",
    value: props.product_in_stock_values,
    onChange: props.onChange,
    isInvalid: props.product_in_stock_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_in_stock_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Brand Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Brand Name",
    name: "product_brand_name",
    value: props.product_brand_name_values,
    onChange: props.onChange,
    isInvalid: props.product_brand_name_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_brand_name_errors)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    style: {
      marginBottom: '5px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Images ", __jsx("span", {
    className: "jsx-3282219053"
  }, " * ")), __jsx("input", {
    type: "file",
    style: {
      margin: '0% 2%',
      fontSize: '13px'
    },
    multiple: true,
    onChange: props.fileSelectedHandler,
    name: "image",
    accept: "image/*",
    className: "jsx-3282219053"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, __jsx("span", {
    className: "jsx-3282219053"
  }, imgError)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, (props.imagePreviewArray || []).map((url, index) => __jsx("div", {
    key: index,
    className: "jsx-3282219053" + " " + "show-image"
  }, __jsx("img", {
    style: {
      height: '100px',
      width: '100px',
      margin: '1%'
    },
    src: url,
    alt: "...",
    className: "jsx-3282219053"
  }), __jsx("input", {
    type: "button",
    onClick: () => props.deleteImage(index),
    value: "Delete",
    className: "jsx-3282219053" + " " + "deleteImage"
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Warranty (months) "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Warranty",
    name: "product_warranty",
    value: props.product_warranty_values,
    onChange: props.onChange,
    isInvalid: props.product_warranty_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_warranty_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, " Warranty Type "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    name: "warranty_type",
    size: "sm",
    value: props.warranty_type_values,
    onChange: props.onChange,
    isInvalid: props.warranty_type_errors
  }, __jsx("option", {
    className: "jsx-3282219053"
  }, "Waranty Type"), __jsx("option", {
    className: "jsx-3282219053"
  }, " No Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Brand Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Local Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Local Seller Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Non-Local Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Internationsl Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " Internationsl Seller Warranty "), __jsx("option", {
    className: "jsx-3282219053"
  }, " International Manufacturer Warranty "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_warranty_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Discount"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Discount on on Product(%)",
    name: "product_discount",
    value: props.product_discount_values,
    onChange: props.onChange,
    isInvalid: props.product_discount_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    size: "sm"
  }, "%")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_discount_errors)))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Inventory"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product SKU"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter SKU (Stock Keeping Unit)",
    name: "sku",
    value: props.sku_values,
    onChange: props.onChange,
    isInvalid: props.sku_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.sku_errors))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Shipping"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
    noGutters: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Weight (kg)"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    name: "product_weight",
    size: "sm",
    value: props.product_weight_values,
    onChange: props.onChange,
    isInvalid: props.product_weight_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.product_weight_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
    noGutters: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Dimensions (cm)"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    name: "dimension_length",
    size: "sm",
    value: props.dimension_length_values,
    onChange: props.onChange,
    placeholder: "Length",
    isInvalid: props.dimension_length_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.dimension_length_errors)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    name: "dimension_width",
    size: "sm",
    value: props.dimension_width_values,
    placeholder: "Width",
    onChange: props.onChange,
    isInvalid: props.dimension_width_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.dimension_width_errors), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    name: "dimension_height",
    size: "sm",
    value: props.dimension_height_values,
    placeholder: "Height",
    onChange: props.onChange,
    isInvalid: props.dimension_height_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.dimension_height_errors)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Shipping Charges"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Product Shipping Charges",
    name: "shipping_charges",
    value: props.shipping_charges_values,
    onChange: props.onChange,
    isInvalid: props.shipping_charges_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    size: "sm"
  }, "Riyal")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.shipping_charges_errors))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Handling Fee"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Product Handling Fee",
    name: "handling_fee",
    value: props.handling_fee_values,
    onChange: props.onChange,
    isInvalid: props.handling_fee_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    size: "sm"
  }, "Riyal")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.handling_fee_errors))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Attributes"
  }, __jsx(ProductAttributes, _extends({}, props, {
    setVariationsArray: props.setVariationsArray,
    variationsArray: props.variationsArray,
    fields_list: props.fields_list
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Variations"
  }, __jsx(ProductVariations, {
    variationsArray: props.variationsArray,
    setVariationsArray: props.setVariationsArray,
    setVariationsSaved: props.setVariationsSaved,
    isVariationsArrayEmpty: props.variationsArray == ''
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "Advanced"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Purchase Note"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Purchase Notes",
    name: "purchase_note",
    value: props.purchase_note_values,
    onChange: props.onChange,
    isInvalid: props.purchase_note_errors
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.purchase_note_errors))))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3282219053"
  }, "span.jsx-3282219053{color:red;}@media (max-width:991px){.linkName.jsx-3282219053{display:none;}}div.show-image.jsx-3282219053{position:relative;float:left;margin:5px;}div.show-image.jsx-3282219053:hover img.jsx-3282219053{opacity:0.5;}div.show-image.jsx-3282219053:hover input.jsx-3282219053{display:block;}div.show-image.jsx-3282219053 input.jsx-3282219053{position:absolute;display:none;}div.show-image.jsx-3282219053 input.deleteImage.jsx-3282219053{top:0;left:0;color:red;font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LWNvbnRlbnRzXFxwcm9kdWN0LWRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeWJpQixBQUlvQixBQUlJLEFBR21CLEFBS1AsQUFHRyxBQUdHLEFBSVosTUFDQyxJQXZCVixFQWFBLENBVEksQUFvQlUsQ0FSZCxJQVJjLEFBV0UsS0FPakIsTUFqQmUsRUFXZCxPQU1BLEVBaEJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LWNvbnRlbnRzXFxwcm9kdWN0LWRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBDb2wsIFJvdywgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uLCBUb2FzdCwgVGFiLCBOYXYsIFRhYnMsIEFjY29yZGlvbiwgU3Bpbm5lciwgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhUGx1cywgZmFLZXksIGZhU2xpZGVyc0gsIGZhU3RvcmVBbHQsIGZhVHJ1Y2ssIGZhVG9vbHMsIGZhRG9sbGFyU2lnbiwgZmFMaXN0QWx0LCBmYUFycm93QWx0Q2lyY2xlRG93bixcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcblxyXG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnXHJcbmltcG9ydCBSZWFjdFNlbGVjdE1hdGVyaWFsVWkgZnJvbSBcInJlYWN0LXNlbGVjdC1tYXRlcmlhbC11aVwiXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuXHJcbmltcG9ydCBTZWxlY3QsIHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcclxuaW1wb3J0IEFkZE5ld0ZpZWxkTmFtZU1vZGFsIGZyb20gJy4vYWRkLW5ldy1maWVsZC1uYW1lLW1vZGVsJ1xyXG5cclxuY29uc3QgZ3JvdXBTdHlsZXMgPSB7XHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxufVxyXG5jb25zdCBHcm91cCA9IHByb3BzID0+IChcclxuICAgIDxkaXYgc3R5bGU9e2dyb3VwU3R5bGVzfT5cclxuICAgICAgICA8Y29tcG9uZW50cy5Hcm91cCB7Li4ucHJvcHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3QgUHJvZHVjdERhdGEgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ltZ0Vycm9yLCBzZXRJbWdFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY2NvcmRpb24gYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luOiAnMiUnIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdCBEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X3R5cGVfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgcHJvcHMub25DaGFuZ2UoZSksIHByb3BzLnByb2R1Y3RUeXBlSGFuZGxlcihlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXtwcm9wcy5pc1VwZGF0ZVByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzaW1wbGUtcHJvZHVjdCc+IFNpbXBsZSBQcm9kdWN0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSd2YXJpYWJsZS1wcm91Y3QnPiBWYXJpYWJsZSBQcm9kdWN0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBldmVudEtleT1cIjBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy5zbGlkZXJfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17eyBwYWRkaW5nOiAnMC41JScsIG1hcmdpbjogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuQ29udGFpbmVyIGlkPVwibGVmdC10YWJzLWV4YW1wbGVcIiBkZWZhdWx0QWN0aXZlS2V5PVwiSW52ZW50b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpbjogJzBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fSBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT1cImF1dG9cIiB4cz1cImF1dG9cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IHZhcmlhbnQ9XCJwaWxsc1wiIGNsYXNzTmFtZT1cImZsZXgtY29sdW1uXCIgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkludmVudG9yeVwiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVN0b3JlQWx0fSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IEludmVudG9yeSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzVmFyaWFibGVQcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQXR0cmlidXRlc1wiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IEF0dHJpYnV0ZXMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiVmFyaWF0aW9uc1wiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IFZhcmlhdGlvbnMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkdlbmVyYWxcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtOYW1lXCI+IEdlbmVyYWwgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlNoaXBwaW5nXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVHJ1Y2t9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gU2hpcHBpbmcgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIkFkdmFuY2VkXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVG9vbHN9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gQWR2YW5jZWQgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6ICcyJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkdlbmVyYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNWYXJpYWJsZVByb2R1Y3QgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBQcmljZSA8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X3ByaWNlX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X3ByaWNlX3RvdWNoZWQgJiYgcHJvcHMucHJvZHVjdF9wcmljZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X3ByaWNlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IGluIFN0b2NrPHNwYW4+ICogPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9pbl9zdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgSW4gU3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfaW5fc3RvY2tfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X2luX3N0b2NrX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfaW5fc3RvY2tfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkJyYW5kIE5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQnJhbmQgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfYnJhbmRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfYnJhbmRfbmFtZV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMucHJvZHVjdF9icmFuZF9uYW1lX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IEltYWdlcyA8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17eyBtYXJnaW46ICcwJSAyJScsIGZvbnRTaXplOiAnMTNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlIG9uQ2hhbmdlPXtwcm9wcy5maWxlU2VsZWN0ZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ltZ0Vycm9yfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9JbnB1dEdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMuaW1hZ2VQcmV2aWV3QXJyYXkgfHwgW10pLm1hcCgodXJsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctaW1hZ2VcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnLCB3aWR0aDogJzEwMHB4JywgbWFyZ2luOiAnMSUnIH19IHNyYz17dXJsfSBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImRlbGV0ZUltYWdlXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZUltYWdlKGluZGV4KX0gdmFsdWU9XCJEZWxldGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgV2FycmFudHkgKG1vbnRocykgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBXYXJyYW50eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3Rfd2FycmFudHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X3dhcnJhbnR5X3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X3dhcnJhbnR5X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBXYXJyYW50eSBUeXBlIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2FycmFudHlfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy53YXJyYW50eV90eXBlX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLndhcnJhbnR5X3R5cGVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XYXJhbnR5IFR5cGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTm8gV2FycmFudHkgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IEJyYW5kIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBMb2NhbCBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gTG9jYWwgU2VsbGVyIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBOb24tTG9jYWwgV2FycmFudHkgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IEludGVybmF0aW9uc2wgV2FycmFudHkgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IEludGVybmF0aW9uc2wgU2VsbGVyIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBJbnRlcm5hdGlvbmFsIE1hbnVmYWN0dXJlciBXYXJyYW50eSA8L29wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdF93YXJyYW50eV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBEaXNjb3VudDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIERpc2NvdW50IG9uIG9uIFByb2R1Y3QoJSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X2Rpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdF9kaXNjb3VudF92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMucHJvZHVjdF9kaXNjb3VudF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9XCJzbVwiPiU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X2Rpc2NvdW50X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJJbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgU0tVPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgU0tVIChTdG9jayBLZWVwaW5nIFVuaXQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5za3VfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuc2t1X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNrdV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJTaGlwcGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+V2VpZ2h0IChrZyk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF93ZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X3dlaWdodF92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3Rfd2VpZ2h0X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3Rfd2VpZ2h0X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RGltZW5zaW9ucyAoY20pPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpbWVuc2lvbl9sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGltZW5zaW9uX2xlbmd0aF92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLmRpbWVuc2lvbl9sZW5ndGhfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGltZW5zaW9uX2xlbmd0aF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGltZW5zaW9uX3dpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kaW1lbnNpb25fd2lkdGhfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLmRpbWVuc2lvbl93aWR0aF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kaW1lbnNpb25fd2lkdGhfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaW1lbnNpb25faGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRpbWVuc2lvbl9oZWlnaHRfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5kaW1lbnNpb25faGVpZ2h0X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpbWVuc2lvbl9oZWlnaHRfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Nn0gbWQ9ezZ9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgU2hpcHBpbmcgQ2hhcmdlczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgU2hpcHBpbmcgQ2hhcmdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19jaGFyZ2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNoaXBwaW5nX2NoYXJnZXNfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuc2hpcHBpbmdfY2hhcmdlc19lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHNpemU9XCJzbVwiPlJpeWFsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hpcHBpbmdfY2hhcmdlc19lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezZ9IG1kPXs2fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IEhhbmRsaW5nIEZlZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgSGFuZGxpbmcgRmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbmRsaW5nX2ZlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5oYW5kbGluZ19mZWVfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuaGFuZGxpbmdfZmVlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT1cInNtXCI+Uml5YWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5oYW5kbGluZ19mZWVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQXR0cmlidXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0QXR0cmlidXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhcmlhdGlvbnNBcnJheT17cHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk9e3Byb3BzLnZhcmlhdGlvbnNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzX2xpc3Q9e3Byb3BzLmZpZWxkc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIlZhcmlhdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFZhcmlhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5PXtwcm9wcy52YXJpYXRpb25zQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhcmlhdGlvbnNBcnJheT17cHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYXJpYXRpb25zU2F2ZWQ9e3Byb3BzLnNldFZhcmlhdGlvbnNTYXZlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYXRpb25zQXJyYXlFbXB0eT17cHJvcHMudmFyaWF0aW9uc0FycmF5ID09ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkFkdmFuY2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHVyY2hhc2UgTm90ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQdXJjaGFzZSBOb3Rlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInB1cmNoYXNlX25vdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wdXJjaGFzZV9ub3RlX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wdXJjaGFzZV9ub3RlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnB1cmNoYXNlX25vdGVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGFiLlBhbmUgZXZlbnRLZXk9XCJDb21taXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1pc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saW5rTmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5zaG93LWltYWdlOmhvdmVyIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5zaG93LWltYWdlOmhvdmVyIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5zaG93LWltYWdlIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2UgaW5wdXQuZGVsZXRlSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uID5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RBdHRyaWJ1dGVzKHByb3BzKSB7XHJcbiAgICBjb25zdCBbYXR0cmlidXRlTmFtZSwgc2V0QXR0cmlidXRlTmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFthdHRyaWJ1dGVWYWx1ZSwgc2V0QXR0cmlidXRlVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2F0dHJpYnV0ZXNBcnJheSwgc2V0QXR0cmlidXRlc0FycmF5XSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZFByb2R1Y3RBdHRyaWJ1dGVDbGljaygpIHtcclxuICAgICAgICBzZXRNZXNzYWdlKCcnKVxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lICE9ICcnICYmIGF0dHJpYnV0ZVZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCcnKVxyXG4gICAgICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBhdHRyaWJ1dGVzQXJyYXkpXHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZU5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogYXR0cmlidXRlVmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZU5hbWUoJycpXHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZVZhbHVlKCcnKVxyXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzQXJyYXkoY29weUFycmF5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVByb2R1Y3RBdHRyaWJ1dGVDbGljayhpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIGF0dHJpYnV0ZXNBcnJheSlcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIHNldEF0dHJpYnV0ZXNBcnJheShjb3B5QXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlVmFyaWF0aW9uc0NsaWNrKCkge1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzQXJyYXkgIT0gJycpIHtcclxuICAgICAgICAgICAgdmFyIGFsbEFycmF5cyA9IFtdXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBbXVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyaWJ1dGVWYWx1ZS5tYXAoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wdXNoKGUudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYWxsQXJyYXlzLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gYWxsUG9zc2libGVDYXNlcyhhbGxBcnJheXMpXHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFtdXHJcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IGVsZW1lbnQuc3BsaXQoJy0nKVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBbXVxyXG4gICAgICAgICAgICAgICAgc3BsaXQuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucHVzaCh7IG5hbWU6IGF0dHJpYnV0ZXNBcnJheVtpXS5hdHRyaWJ1dGVOYW1lLCB2YWx1ZTogZSB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbSwgcHJpY2U6ICcnLCBzdG9jazogJycsIGltYWdlX2xpbms6IFtdLCBpbWFnZVByZXZpZXdBcnJheTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VfZXJyb3I6ICcnLCBzdG9ja19lcnJvcjogJycsIGltYWdlX2xpbmtfZXJyb3I6ICcnLCBjdXN0b21fZmllbGRzOiBbXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSgnVmFyaWF0aW9ucyBDcmVhdGVkIFN1Y2Nlc3NmdWxseScpXHJcbiAgICAgICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShkYXRhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdBZGQgc29tZSBhdHRyaWJ1dGVzIGZpcnN0JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWxsUG9zc2libGVDYXNlcyhhcnIpIHtcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJbMF1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW11cclxuICAgICAgICAgICAgdmFyIGFsbENhc2VzT2ZSZXN0ID0gYWxsUG9zc2libGVDYXNlcyhhcnIuc2xpY2UoMSkpICAvLyByZWN1ciB3aXRoIHRoZSByZXN0IG9mIGFycmF5XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FzZXNPZlJlc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyWzBdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyWzBdW2pdICsgXCItXCIgKyBhbGxDYXNlc09mUmVzdFtpXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZvcm0uUm93ID5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs1fSBtZD17NX0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAlJywgcGFkZGluZ0JvdHRvbTogJzAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZCBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dElkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17R2xvYmFsU3R5bGVTaGVldC5yZWFjdF9zZWxlY3Rfc3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9wcy5maWVsZHNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBHcm91cCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXR0cmlidXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdHRyaWJ1dGVOYW1lKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IHBhZGRpbmc6ICcwJScsIG1hcmdpbjogJzAlJywgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QWRkTmV3RmllbGROYW1lTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezd9IG1kPXs3fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCUnLCBwYWRkaW5nQm90dG9tOiAnMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkZpZWxkIFZhbHVlIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRJZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVWYWx1ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBEcm9wZG93bkluZGljYXRvcjogbnVsbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e0dsb2JhbFN0eWxlU2hlZXQucmVhY3Rfc2VsZWN0X3N0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlVmFsdWUodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZXNzIGVudGVyIHRvIGFkZCBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICA8Um93IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57ZXJyb3J9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9J3NtJyBvbkNsaWNrPXtoYW5kbGVBZGRQcm9kdWN0QXR0cmlidXRlQ2xpY2t9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMiUnIH19PkFkZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCIgc2l6ZT1cInNtXCIgb25DbGljaz17aGFuZGxlQ3JlYXRlVmFyaWF0aW9uc0NsaWNrfT5DcmVhdGUgVmFyaWF0aW9uczwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAge2F0dHJpYnV0ZXNBcnJheSAmJiBhdHRyaWJ1dGVzQXJyYXkubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBzdHlsZT17eyBwYWRkaW5nOiAnMCUnIH19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs1fSBtZD17NX0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW1lbnQuYXR0cmlidXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBlbGVtZW50LmF0dHJpYnV0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPntlbGVtZW50LmF0dHJpYnV0ZU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17N30gbWQ9ezd9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW1lbnQuYXR0cmlidXRlVmFsdWUuZm9yRWFjaChlID0+IChlLnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQcm9kdWN0QXR0cmlidXRlQ2xpY2soaW5kZXgpfT4gZGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0VmFyaWF0aW9ucyhwcm9wcykge1xyXG4gICAgY29uc3QgW3NhbWVQcmljZSwgc2V0U2FtZVByaWNlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3NhbWVQcmljZUVycm9yLCBzZXRTYW1lUHJpY2VFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBbc2FtZVN0b2NrLCBzZXRTYW1lU3RvY2tdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc2FtZVN0b2NrRXJyb3IsIHNldFNhbWVTdG9ja0Vycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICAvLyBTYW1lIFByaWNlIEZvciBBbGwgVmFyaWF0aW9uc1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2FtZVByaWNlQXBwbHlCdG5DbGljaygpIHtcclxuICAgICAgICBpZiAoc2FtZVByaWNlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFNhbWVQcmljZUVycm9yKCcnKVxyXG4gICAgICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy52YXJpYXRpb25zQXJyYXkpXHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcmljZSA9IHNhbWVQcmljZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRWYXJpYXRpb25zQXJyYXkoY29weUFycmF5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNhbWVQcmljZUVycm9yKCdFbnRlciBWYWx1ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU2FtZSBTdG9jayBGb3IgQWxsIFZhcmlhdGlvbnNcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNhbWVTdG9ja0FwcGx5QnRuQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHNhbWVTdG9jayAhPSAnJykge1xyXG4gICAgICAgICAgICBzZXRTYW1lU3RvY2tFcnJvcignJylcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3RvY2sgPSBzYW1lU3RvY2tcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5KGNvcHlBcnJheSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTYW1lU3RvY2tFcnJvcignRW50ZXIgVmFsdWUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVuUHJpY2VDaGFuZ2UoZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy52YXJpYXRpb25zQXJyYXkpXHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF1cclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICBvYmplY3QucHJpY2UgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICBvYmplY3QucHJpY2VfZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqZWN0XHJcbiAgICAgICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShjb3B5QXJyYXkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5TdG9ja0NoYW5nKGUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgIGxldCBvYmplY3QgPSBjb3B5QXJyYXlbaW5kZXhdXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnN0b2NrID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgb2JqZWN0LnN0b2NrX2Vycm9yID0gJydcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9iamVjdFxyXG4gICAgICAgICAgICBwcm9wcy5zZXRWYXJpYXRpb25zQXJyYXkoY29weUFycmF5KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVWYXJpYXRpb25DbGljayhpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLnZhcmlhdGlvbnNBcnJheSlcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShjb3B5QXJyYXkpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVDdXN0b21GaWVsZENsaWNrKGluZGV4LCBpKSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0uY3VzdG9tX2ZpZWxkcy5zcGxpY2UoaSwgMSlcclxuICAgICAgICBwcm9wcy5zZXRWYXJpYXRpb25zQXJyYXkoY29weUFycmF5KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNhdmVWYXJpYXRpb25zQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZVxyXG4gICAgICAgIGNvcHlBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wcmljZSA9PSAnJyB8fCBlbGVtZW50LnN0b2NrID09ICcnIHx8IGVsZW1lbnQuaW1hZ2VfbGluay5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmljZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucHJpY2VfZXJyb3IgPSAnRW50ZXIgcHJpY2UnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdG9jayA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3RvY2tfZXJyb3IgPSAnRW50ZXIgc3RvY2snXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbWFnZV9saW5rLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbWFnZV9saW5rX2Vycm9yID0gJ0VudGVyIGltYWdlIExpbmsnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlX2Vycm9yID0gJydcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3RvY2tfZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbWFnZV9saW5rX2Vycm9yID0gJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRWYXJpYXRpb25zU2F2ZWQodHJ1ZSlcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSgnVmFyaWF0aW9ucyBzYXZlZCBTdWNjZXNzZnVsbHknKVxyXG4gICAgICAgICAgICBzZXRFcnJvcignJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCdQbGVhc2UgZmlsbCBhbGwgcmVxdWlyZWQgZmllbGRzJylcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ3JlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShjb3B5QXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVmFyaWF0aW9uc0Vycm9yQ2hlY2soZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnByaWNlX2Vycm9yICE9ICcnIHx8IGVsZW1lbnQuaW1hZ2VfbGlua19lcnJvciAhPSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJzFweCBzb2xpZCByZWQnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ25vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUl0ZW1WYWx1ZUNoYW5nZShldmVudCwgaW5kZXgsIGkpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy52YXJpYXRpb25zQXJyYXkpXHJcbiAgICAgICAgbGV0IG9iaiA9IGNvcHlBcnJheVtpbmRleF0uaXRlbVxyXG4gICAgICAgIG9ialtpXS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShjb3B5QXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmlsZVNlbGVjdGVkSGFuZGxlcihlLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLnZhcmlhdGlvbnNBcnJheSlcclxuICAgICAgICBsZXQgb2JqZWN0ID0gY29weUFycmF5W2luZGV4XVxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgIT0gJycpIHtcclxuICAgICAgICAgICAgb2JqZWN0LmltYWdlX2xpbmsgPSBbLi4ub2JqZWN0LmltYWdlX2xpbmssIC4uLmUudGFyZ2V0LmZpbGVzXVxyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXVxyXG4gICAgICAgICAgICBvYmplY3QuaW1hZ2VfbGluay5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChVUkwuY3JlYXRlT2JqZWN0VVJMKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBvYmplY3QuaW1hZ2VQcmV2aWV3QXJyYXkgPSBhcnJheVxyXG4gICAgICAgICAgICBvYmplY3QuaW1hZ2VfbGlua19lcnJvciA9ICcnXHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3RcclxuICAgICAgICAgICAgcHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5KGNvcHlBcnJheSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVJbWFnZShpbmRleCwgaSkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLnZhcmlhdGlvbnNBcnJheSlcclxuICAgICAgICBsZXQgb2JqID0gY29weUFycmF5W2luZGV4XVxyXG5cclxuICAgICAgICBvYmouaW1hZ2VfbGluay5zcGxpY2UoaSwgMSlcclxuICAgICAgICBvYmouaW1hZ2VQcmV2aWV3QXJyYXkuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9ialxyXG4gICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShjb3B5QXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvcHMuaXNWYXJpYXRpb25zQXJyYXlFbXB0eSA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzEwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGxlYXNlIEZpcnN0IGFkZCBBdHRyaWJ1dGVzIGZyb20gQXR0cmlidXRlcyBUYWI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU2FtZSBQcmljZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+IFNhbWUgUHJpY2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNhbWVQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzYW1lUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYW1lUHJpY2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FtZVByaWNlRXJyb3IoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17c2FtZVByaWNlRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e2hhbmRsZVNhbWVQcmljZUFwcGx5QnRuQ2xpY2t9IHNpemU9XCJzbVwiPkFwcGx5PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2FtZVByaWNlRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhbWUgU3RvY2sgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBTYW1lIFN0b2NrPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBTdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYW1lU3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2FtZVN0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FtZVN0b2NrKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhbWVTdG9ja0Vycm9yKCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3NhbWVTdG9ja0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzdHlsZT17c3R5bGVzLmxhYmVsfSBvbkNsaWNrPXtoYW5kbGVTYW1lU3RvY2tBcHBseUJ0bkNsaWNrfSBzaXplPVwic21cIj5BcHBseTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNhbWVTdG9ja0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTYW1lIEltYWdlIExpbmsgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBhcz17Q29sfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gU2FtZSBJbWFnZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEltYWdlIExpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtZUltZ0xpbmtJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzYW1lSW1nTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYW1lSW1nTGluayhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYW1lSW1nTGlua0Vycm9yKCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3NhbWVJbWdMaW5rRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e2hhbmRsZVNhbWVJbWdMaW5rQXBwbHlCdG5DbGlja30gc2l6ZT1cInNtXCI+QXBwbHk8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zYW1lSW1nTGlua0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpblRvcDogJzAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy52YXJpYXRpb25zQXJyYXkgJiYgcHJvcHMudmFyaWF0aW9uc0FycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IGJvcmRlcjogaGFuZGxlVmFyaWF0aW9uc0Vycm9yQ2hlY2soZWxlbWVudCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lml0ZW0gJiYgZWxlbWVudC5pdGVtLm1hcCgoZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXszfSBtZD17M30gc209ezZ9IHhzPXs2fSBrZXk9e2l9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlSXRlbVZhbHVlQ2hhbmdlKGV2ZW50LCBpbmRleCwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Rm9ybS5Hcm91cH0gZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzaXplPVwic21cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy5zbGlkZXJfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgc2l6ZT1cInNtXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzElJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVZhcmlhdGlvbkNsaWNrKGluZGV4KX0+IGRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgUHJpY2UgPHNwYW4+ICogPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVtZW50LnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVuUHJpY2VDaGFuZ2UoZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlbGVtZW50LnByaWNlX2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcmljZV9lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBpbiBTdG9jayA8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X2luX3N0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBJbiBTdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbWVudC5zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5TdG9ja0NoYW5nKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZWxlbWVudC5zdG9ja19lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuc3RvY2tfZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBJbWFnZXMgPHNwYW4+ICogPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3sgbWFyZ2luOiAnMCUgMiUnLCBmb250U2l6ZTogJzEzcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZSBvbkNoYW5nZT17KGUpID0+IGZpbGVTZWxlY3RlZEhhbmRsZXIoZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsZW1lbnQuaW1hZ2VfbGlua19lcnJvcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZWxlbWVudC5pbWFnZVByZXZpZXdBcnJheSB8fCBbXSkubWFwKCh1cmwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWltYWdlXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnLCB3aWR0aDogJzEwMHB4JywgbWFyZ2luOiAnMSUnIH19IHNyYz17dXJsfSBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImRlbGV0ZUltYWdlXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUltYWdlKGluZGV4LCBpKX0gdmFsdWU9XCJEZWxldGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuY3VzdG9tX2ZpZWxkcyAmJiBlbGVtZW50LmN1c3RvbV9maWVsZHMubWFwKChlLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17M30gbWQ9ezN9IHNtPXs2fSB4cz17Nn0ga2V5PXtpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZS5uYW1lfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gZS5hdHRyaWJ1dGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgc2l6ZT1cInNtXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzElJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ3VzdG9tRmllbGRDbGljayhpbmRleCwgaSl9PiBkZWxldGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpblRvcDogJzAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCwgd2lkdGg6ICcxMDAlJywgY29sb3I6IGAke2Vycm9yfWAgfX0+e21lc3NhZ2V9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIHNpemU9XCJzbVwiIGJsb2NrIG9uQ2xpY2s9e2hhbmRsZVNhdmVWYXJpYXRpb25zQ2xpY2t9PiBTYXZlIFZhcmlhdGlvbnM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5zaG93LWltYWdlOmhvdmVyIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5zaG93LWltYWdlOmhvdmVyIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5zaG93LWltYWdlIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2UgaW5wdXQuZGVsZXRlSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9mb250c2l6ZX1gLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuY2FyZF9oZWFkZXJfYmFja2dyb3VuZH1gLFxyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHNsaWRlcl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REYXRhIl19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new-contents\\\\product-data.js */"));
};

function ProductAttributes(props) {
  const [attributeName, setAttributeName] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [attributeValue, setAttributeValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [modalShow, setModalShow] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [attributesArray, setAttributesArray] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);

  function handleAddProductAttributeClick() {
    setMessage('');

    if (attributeName != '' && attributeValue != '') {
      setError('');
      const copyArray = Object.assign([], attributesArray);
      copyArray.push({
        attributeName: attributeName.value,
        attributeValue: attributeValue
      });
      setAttributeName('');
      setAttributeValue('');
      setAttributesArray(copyArray);
    } else {
      setError('Enter Field Name and Value');
    }
  }

  function handleDeleteProductAttributeClick(index) {
    const copyArray = Object.assign([], attributesArray);
    copyArray.splice(index, 1);
    setAttributesArray(copyArray);
  }

  function handleCreateVariationsClick() {
    if (attributesArray != '') {
      var allArrays = [];
      attributesArray.forEach(element => {
        var item = [];
        element.attributeValue.map(e => {
          item.push(e.value);
        });
        allArrays.push(item);
      });
      const array = allPossibleCases(allArrays);
      var data = [];
      array.forEach((element, index) => {
        const split = element.split('-');
        let item = [];
        split.forEach((e, i) => {
          item.push({
            name: attributesArray[i].attributeName,
            value: e
          });
        });
        data.push({
          item: item,
          price: '',
          stock: '',
          image_link: [],
          imagePreviewArray: '',
          price_error: '',
          stock_error: '',
          image_link_error: '',
          custom_fields: []
        });
      });
      setMessage('Variations Created Successfully');
      props.setVariationsArray(data);
    } else {
      setError('Add some attributes first');
    }
  }

  function allPossibleCases(arr) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      var result = [];
      var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array

      for (var i = 0; i < allCasesOfRest.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
          result.push(arr[0][j] + "-" + allCasesOfRest[i]);
        }
      }

      return result;
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12,
    style: {
      marginBottom: '0%',
      paddingBottom: '0%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Field Name"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: '1',
    instanceId: '1',
    inputId: '1',
    styles: _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].react_select_styles,
    options: props.fields_list,
    components: {
      Group
    },
    value: attributeName,
    onChange: e => setAttributeName(e)
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    style: {
      padding: '0%',
      margin: '0%',
      fontSize: '14px'
    },
    onClick: () => setModalShow(true)
  }, "Add New"), __jsx(_add_new_field_name_model__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    show: modalShow,
    onHide: () => setModalShow(false)
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12,
    style: {
      marginBottom: '0%',
      paddingBottom: '0%'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Field Value "), __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: '1',
    instanceId: '1',
    inputId: '1',
    isMulti: true,
    value: attributeValue || '',
    components: {
      DropdownIndicator: null
    },
    styles: _styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].react_select_styles,
    onChange: value => setAttributeValue(value),
    placeholder: "Press enter to add more"
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, __jsx("span", {
    style: {
      color: 'red'
    }
  }, error)), __jsx("div", {
    className: "mr-auto"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    onClick: handleAddProductAttributeClick,
    style: {
      marginRight: '2%'
    }
  }, "Add"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-success",
    size: "sm",
    onClick: handleCreateVariationsClick
  }, "Create Variations")), __jsx("hr", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, message), attributesArray && attributesArray.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    style: {
      padding: '0%'
    },
    key: index
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    size: "sm",
    value: element.attributeName,
    onChange: () => element.attributeName,
    disabled: true
  }, __jsx("option", null, element.attributeName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: element.attributeValue.forEach(e => e.value),
    disabled: true
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => handleDeleteProductAttributeClick(index)
  }, " delete"))))));
}

const createOption = label => ({
  value: label,
  label
});

function ProductVariations(props) {
  const [samePrice, setSamePrice] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [samePriceError, setSamePriceError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [sameStock, setSameStock] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [sameStockError, setSameStockError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''); // Same Price For All Variations

  function handleSamePriceApplyBtnClick() {
    if (samePrice != '') {
      setSamePriceError('');
      const copyArray = Object.assign([], props.variationsArray);
      copyArray.forEach(element => {
        element.price = samePrice;
      });
      props.setVariationsArray(copyArray);
    } else {
      setSamePriceError('Enter Value');
    }
  } // Same Stock For All Variations


  function handleSameStockApplyBtnClick() {
    if (sameStock != '') {
      setSameStockError('');
      const copyArray = Object.assign([], props.variationsArray);
      copyArray.forEach(element => {
        element.stock = sameStock;
      });
      props.setVariationsArray(copyArray);
    } else {
      setSameStockError('Enter Value');
    }
  }

  function handlenPriceChange(e, index) {
    const copyArray = Object.assign([], props.variationsArray);
    let object = copyArray[index];

    if (e.target.value >= 0) {
      object.price = e.target.value;
      object.price_error = '';
      copyArray[index] = object;
      props.setVariationsArray(copyArray);
    }
  }

  function handleInStockChang(e, index) {
    const copyArray = Object.assign([], props.variationsArray);
    let object = copyArray[index];

    if (e.target.value >= 0) {
      object.stock = e.target.value;
      object.stock_error = '';
      copyArray[index] = object;
      props.setVariationsArray(copyArray);
    }
  }

  function handleDeleteVariationClick(index) {
    const copyArray = Object.assign([], props.variationsArray);
    copyArray.splice(index, 1);
    props.setVariationsArray(copyArray);
  }

  function handleDeleteCustomFieldClick(index, i) {
    const copyArray = Object.assign([], props.variationsArray);
    copyArray[index].custom_fields.splice(i, 1);
    props.setVariationsArray(copyArray);
  }

  function handleSaveVariationsClick() {
    const copyArray = Object.assign([], props.variationsArray);
    let flag = true;
    copyArray.forEach(element => {
      if (element.price == '' || element.stock == '' || element.image_link.length == 0) {
        flag = false;

        if (element.price == '') {
          element.price_error = 'Enter price';
        }

        if (element.stock == '') {
          element.stock_error = 'Enter stock';
        }

        if (element.image_link.length == 0) {
          element.image_link_error = 'Enter image Link';
        }
      } else {
        element.price_error = '';
        element.stock_error = '';
        element.image_link_error = '';
      }
    });

    if (flag == true) {
      props.setVariationsSaved(true);
      setMessage('Variations saved Successfully');
      setError('');
    } else {
      setMessage('Please fill all required fields');
      setError('red');
    }

    props.setVariationsArray(copyArray);
  }

  function handleVariationsErrorCheck(element) {
    if (element.price_error != '' || element.image_link_error != '') {
      return '1px solid red';
    } else {
      return 'none';
    }
  }

  function handleItemValueChange(event, index, i) {
    const copyArray = Object.assign([], props.variationsArray);
    let obj = copyArray[index].item;
    obj[i].value = event.target.value;
    props.setVariationsArray(copyArray);
  }

  async function fileSelectedHandler(e, index) {
    const copyArray = Object.assign([], props.variationsArray);
    let object = copyArray[index];

    if (e.target.files != '') {
      object.image_link = [...object.image_link, ...e.target.files];
      let array = [];
      object.image_link.forEach(element => {
        array.push(URL.createObjectURL(element));
      });
      object.imagePreviewArray = array;
      object.image_link_error = '';
      copyArray[index] = object;
      props.setVariationsArray(copyArray);
    }
  }

  function deleteImage(index, i) {
    const copyArray = Object.assign([], props.variationsArray);
    let obj = copyArray[index];
    obj.image_link.splice(i, 1);
    obj.imagePreviewArray.splice(i, 1);
    copyArray[index] = obj;
    props.setVariationsArray(copyArray);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.isVariationsArrayEmpty ? __jsx("div", {
    style: {
      width: '100%',
      textAlign: 'center',
      marginTop: '10%'
    },
    className: "jsx-728850913"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Please First add Attributes from Attributes Tab")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"]
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, " Same Price"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Price",
    name: "samePrice",
    value: samePrice,
    onChange: e => {
      if (e.target.value >= 0) {
        setSamePrice(e.target.value);
        setSamePriceError('');
      }
    },
    isInvalid: samePriceError
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    style: styles.label,
    onClick: handleSamePriceApplyBtnClick,
    size: "sm"
  }, "Apply")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.samePriceError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"]
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, " Same Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Stock",
    name: "sameStock",
    value: sameStock,
    onChange: e => {
      if (e.target.value >= 0) {
        setSameStock(e.target.value);
        setSameStockError('');
      }
    },
    isInvalid: sameStockError
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    style: styles.label,
    onClick: handleSameStockApplyBtnClick,
    size: "sm"
  }, "Apply")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, props.sameStockError)))), __jsx("hr", {
    style: {
      marginTop: '0%'
    },
    className: "jsx-728850913"
  }), props.variationsArray && props.variationsArray.map((element, index) => __jsx("div", {
    key: index,
    className: "jsx-728850913"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true,
    style: {
      border: handleVariationsErrorCheck(element)
    }
  }, element.item && element.item.map((e, i) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 3,
    md: 3,
    sm: 6,
    xs: 6,
    key: i
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: e.value,
    onChange: event => handleItemValueChange(event, index, i)
  }))), __jsx("div", {
    className: "jsx-728850913" + " " + "mr-auto"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group,
    eventKey: "0"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    style: {
      marginRight: '10px'
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
    style: styles.slider_fontawesome
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    style: {
      float: 'right'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => handleDeleteVariationClick(index)
  }, " delete"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
    eventKey: "0"
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Price ", __jsx("span", {
    className: "jsx-728850913"
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    placeholder: "Enter Product Price",
    name: "product_price",
    value: element.price,
    onChange: e => handlenPriceChange(e, index),
    isInvalid: element.price_error
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, element.price_error)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product in Stock ", __jsx("span", {
    className: "jsx-728850913"
  }, " * ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "number",
    size: "sm",
    name: "product_in_stock",
    placeholder: "Enter Product In Stock",
    value: element.stock,
    onChange: e => handleInStockChang(e, index),
    isInvalid: element.stock_error
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, element.stock_error)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, "Product Images ", __jsx("span", {
    className: "jsx-728850913"
  }, " * ")), __jsx("input", {
    type: "file",
    style: {
      margin: '0% 2%',
      fontSize: '13px'
    },
    multiple: true,
    onChange: e => fileSelectedHandler(e, index),
    name: "image",
    accept: "image/*",
    className: "jsx-728850913"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, __jsx("span", {
    className: "jsx-728850913"
  }, element.image_link_error)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, (element.imagePreviewArray || []).map((url, i) => __jsx("div", {
    key: i,
    className: "jsx-728850913" + " " + "show-image"
  }, __jsx("img", {
    style: {
      height: '100px',
      width: '100px',
      margin: '1%'
    },
    src: url,
    alt: "...",
    className: "jsx-728850913"
  }), __jsx("input", {
    type: "button",
    onClick: () => deleteImage(index, i),
    value: "Delete",
    className: "jsx-728850913" + " " + "deleteImage"
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, null, element.custom_fields && element.custom_fields.map((e, i) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 3,
    md: 3,
    sm: 6,
    xs: 6,
    key: i
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label
  }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    size: "sm",
    placeholder: "Enter Value",
    name: "sku",
    value: e.value,
    onChange: () => e.attributeValue
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-danger",
    size: "sm",
    style: {
      marginLeft: '1%'
    },
    onClick: () => handleDeleteCustomFieldClick(index, i)
  }, " delete"))))))))), __jsx("hr", {
    style: {
      marginTop: '0%'
    },
    className: "jsx-728850913"
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: {
      fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize}`,
      width: '100%',
      color: `${error}`
    }
  }, message), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-success",
    size: "sm",
    block: true,
    onClick: handleSaveVariationsClick
  }, " Save Variations")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "728850913"
  }, "span.jsx-728850913{color:red;}div.show-image.jsx-728850913{position:relative;float:left;margin:5px;}div.show-image.jsx-728850913:hover img.jsx-728850913{opacity:0.5;}div.show-image.jsx-728850913:hover input.jsx-728850913{display:block;}div.show-image.jsx-728850913 input.jsx-728850913{position:absolute;display:none;}div.show-image.jsx-728850913 input.deleteImage.jsx-728850913{top:0;left:0;color:red;font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LWNvbnRlbnRzXFxwcm9kdWN0LWRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBKzlCaUIsQUFJb0IsQUFFdUIsQUFLUCxBQUdHLEFBR0csQUFJWixNQUNDLElBbEJWLEVBUUEsQ0FXYyxDQVJkLElBUmMsQUFXRSxLQU9qQixNQWpCZSxFQVdkLE9BTUEsRUFoQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXE5ldyBmb2xkZXJcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFkZC1uZXctY29udGVudHNcXHByb2R1Y3QtZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIENvbCwgUm93LCBDYXJkLCBJbnB1dEdyb3VwLCBCdXR0b24sIFRvYXN0LCBUYWIsIE5hdiwgVGFicywgQWNjb3JkaW9uLCBTcGlubmVyLCBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFQbHVzLCBmYUtleSwgZmFTbGlkZXJzSCwgZmFTdG9yZUFsdCwgZmFUcnVjaywgZmFUb29scywgZmFEb2xsYXJTaWduLCBmYUxpc3RBbHQsIGZhQXJyb3dBbHRDaXJjbGVEb3duLFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmltcG9ydCBDcmVhdGFibGVTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2NyZWF0YWJsZSdcclxuaW1wb3J0IFJlYWN0U2VsZWN0TWF0ZXJpYWxVaSBmcm9tIFwicmVhY3Qtc2VsZWN0LW1hdGVyaWFsLXVpXCJcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5cclxuaW1wb3J0IFNlbGVjdCwgeyBjb21wb25lbnRzIH0gZnJvbSAncmVhY3Qtc2VsZWN0J1xyXG5pbXBvcnQgQWRkTmV3RmllbGROYW1lTW9kYWwgZnJvbSAnLi9hZGQtbmV3LWZpZWxkLW5hbWUtbW9kZWwnXHJcblxyXG5jb25zdCBncm91cFN0eWxlcyA9IHtcclxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG59XHJcbmNvbnN0IEdyb3VwID0gcHJvcHMgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17Z3JvdXBTdHlsZXN9PlxyXG4gICAgICAgIDxjb21wb25lbnRzLkdyb3VwIHsuLi5wcm9wc30gLz5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBQcm9kdWN0RGF0YSA9IHByb3BzID0+IHtcclxuXHJcbiAgICBjb25zdCBbaW1nRXJyb3IsIHNldEltZ0Vycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjY29yZGlvbiBhcz17Um93fSBzdHlsZT17eyBtYXJnaW46ICcyJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0IERhdGFcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzUwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfdHlwZV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBwcm9wcy5vbkNoYW5nZShlKSwgcHJvcHMucHJvZHVjdFR5cGVIYW5kbGVyKGUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9e3Byb3BzLmlzVXBkYXRlUHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3NpbXBsZS1wcm9kdWN0Jz4gU2ltcGxlIFByb2R1Y3QgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3ZhcmlhYmxlLXByb3VjdCc+IFZhcmlhYmxlIFByb2R1Y3QgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnNsaWRlcl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IHN0eWxlPXt7IHBhZGRpbmc6ICcwLjUlJywgbWFyZ2luOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5Db250YWluZXIgaWQ9XCJsZWZ0LXRhYnMtZXhhbXBsZVwiIGRlZmF1bHRBY3RpdmVLZXk9XCJJbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgdmFyaWFudD1cInBpbGxzXCIgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW5cIiBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiSW52ZW50b3J5XCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtzdHlsZXMucHJvZHVjdF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gSW52ZW50b3J5IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNWYXJpYWJsZVByb2R1Y3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJBdHRyaWJ1dGVzXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gQXR0cmlidXRlcyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJWYXJpYXRpb25zXCIgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnByb2R1Y3RfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gVmFyaWF0aW9ucyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiR2VuZXJhbFwiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua05hbWVcIj4gR2VuZXJhbCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiU2hpcHBpbmdcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUcnVja30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBTaGlwcGluZyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiQWR2YW5jZWRcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUb29sc30gc3R5bGU9e3N0eWxlcy5wcm9kdWN0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rTmFtZVwiPiBBZHZhbmNlZCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogJzIlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiR2VuZXJhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IFByaWNlIDxzcGFuPiAqIDwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3RfcHJpY2VfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfcHJpY2VfdG91Y2hlZCAmJiBwcm9wcy5wcm9kdWN0X3ByaWNlX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfcHJpY2VfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgaW4gU3RvY2s8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X2luX3N0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBJbiBTdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdF9pbl9zdG9ja192YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3RfaW5fc3RvY2tfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdF9pbl9zdG9ja19lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+QnJhbmQgTmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBCcmFuZCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9icmFuZF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucHJvZHVjdF9icmFuZF9uYW1lX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X2JyYW5kX25hbWVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdF9icmFuZF9uYW1lX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgSW1hZ2VzIDxzcGFuPiAqIDwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IG1hcmdpbjogJzAlIDIlJywgZm9udFNpemU6ICcxM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGUgb25DaGFuZ2U9e3Byb3BzLmZpbGVTZWxlY3RlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIiBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aW1nRXJyb3J9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0lucHV0R3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5pbWFnZVByZXZpZXdBcnJheSB8fCBbXSkubWFwKCh1cmwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1pbWFnZVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcsIHdpZHRoOiAnMTAwcHgnLCBtYXJnaW46ICcxJScgfX0gc3JjPXt1cmx9IGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZGVsZXRlSW1hZ2VcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcHJvcHMuZGVsZXRlSW1hZ2UoaW5kZXgpfSB2YWx1ZT1cIkRlbGV0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBXYXJyYW50eSAobW9udGhzKSA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IFdhcnJhbnR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF93YXJyYW50eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnByb2R1Y3Rfd2FycmFudHlfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdF93YXJyYW50eV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+IFdhcnJhbnR5IFR5cGUgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3YXJyYW50eV90eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLndhcnJhbnR5X3R5cGVfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMud2FycmFudHlfdHlwZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPldhcmFudHkgVHlwZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBObyBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gQnJhbmQgV2FycmFudHkgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IExvY2FsIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBMb2NhbCBTZWxsZXIgV2FycmFudHkgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IE5vbi1Mb2NhbCBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gSW50ZXJuYXRpb25zbCBXYXJyYW50eSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gSW50ZXJuYXRpb25zbCBTZWxsZXIgV2FycmFudHkgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IEludGVybmF0aW9uYWwgTWFudWZhY3R1cmVyIFdhcnJhbnR5IDwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0X3dhcnJhbnR5X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IERpc2NvdW50PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGlzY291bnQgb24gb24gUHJvZHVjdCglKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wcm9kdWN0X2Rpc2NvdW50X3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5wcm9kdWN0X2Rpc2NvdW50X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT1cInNtXCI+JTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RfZGlzY291bnRfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIkludmVudG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezZ9IG1kPXs2fSBzbT17MTJ9IHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBTS1U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBTS1UgKFN0b2NrIEtlZXBpbmcgVW5pdClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNrdV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5za3VfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2t1X2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIlNoaXBwaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XZWlnaHQgKGtnKTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X3dlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnByb2R1Y3Rfd2VpZ2h0X3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMucHJvZHVjdF93ZWlnaHRfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdF93ZWlnaHRfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5EaW1lbnNpb25zIChjbSk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGltZW5zaW9uX2xlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kaW1lbnNpb25fbGVuZ3RoX3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuZGltZW5zaW9uX2xlbmd0aF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kaW1lbnNpb25fbGVuZ3RoX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaW1lbnNpb25fd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRpbWVuc2lvbl93aWR0aF92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuZGltZW5zaW9uX3dpZHRoX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpbWVuc2lvbl93aWR0aF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpbWVuc2lvbl9oZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGltZW5zaW9uX2hlaWdodF92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLmRpbWVuc2lvbl9oZWlnaHRfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGltZW5zaW9uX2hlaWdodF9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBTaGlwcGluZyBDaGFyZ2VzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBTaGlwcGluZyBDaGFyZ2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX2NoYXJnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2hpcHBpbmdfY2hhcmdlc192YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5zaGlwcGluZ19jaGFyZ2VzX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT1cInNtXCI+Uml5YWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaGlwcGluZ19jaGFyZ2VzX2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Nn0gbWQ9ezZ9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgSGFuZGxpbmcgRmVlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBIYW5kbGluZyBGZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGFuZGxpbmdfZmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmhhbmRsaW5nX2ZlZV92YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcy5oYW5kbGluZ19mZWVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBzaXplPVwic21cIj5SaXlhbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhhbmRsaW5nX2ZlZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJBdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RBdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFyaWF0aW9uc0FycmF5PXtwcm9wcy5zZXRWYXJpYXRpb25zQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheT17cHJvcHMudmFyaWF0aW9uc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNfbGlzdD17cHJvcHMuZmllbGRzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiVmFyaWF0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VmFyaWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk9e3Byb3BzLnZhcmlhdGlvbnNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFyaWF0aW9uc0FycmF5PXtwcm9wcy5zZXRWYXJpYXRpb25zQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhcmlhdGlvbnNTYXZlZD17cHJvcHMuc2V0VmFyaWF0aW9uc1NhdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhdGlvbnNBcnJheUVtcHR5PXtwcm9wcy52YXJpYXRpb25zQXJyYXkgPT0gJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiQWR2YW5jZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QdXJjaGFzZSBOb3RlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFB1cmNoYXNlIE5vdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHVyY2hhc2Vfbm90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnB1cmNoYXNlX25vdGVfdmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzLnB1cmNoYXNlX25vdGVfZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHVyY2hhc2Vfbm90ZV9lcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUYWIuUGFuZSBldmVudEtleT1cIkNvbW1pc3Npb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWlzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpbmtOYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2hvdy1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2U6aG92ZXIgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjAuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2U6aG92ZXIgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2UgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2hvdy1pbWFnZSBpbnB1dC5kZWxldGVJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9BY2NvcmRpb24gPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEF0dHJpYnV0ZXMocHJvcHMpIHtcclxuICAgIGNvbnN0IFthdHRyaWJ1dGVOYW1lLCBzZXRBdHRyaWJ1dGVOYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2F0dHJpYnV0ZVZhbHVlLCBzZXRBdHRyaWJ1dGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYXR0cmlidXRlc0FycmF5LCBzZXRBdHRyaWJ1dGVzQXJyYXldID0gUmVhY3QudXNlU3RhdGUoW10pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkUHJvZHVjdEF0dHJpYnV0ZUNsaWNrKCkge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoJycpXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgIT0gJycgJiYgYXR0cmlidXRlVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJycpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIGF0dHJpYnV0ZXNBcnJheSlcclxuICAgICAgICAgICAgY29weUFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogYXR0cmlidXRlTmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlOiBhdHRyaWJ1dGVWYWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlTmFtZSgnJylcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlVmFsdWUoJycpXHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXNBcnJheShjb3B5QXJyYXkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0VudGVyIEZpZWxkIE5hbWUgYW5kIFZhbHVlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrKGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgYXR0cmlidXRlc0FycmF5KVxyXG4gICAgICAgIGNvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgc2V0QXR0cmlidXRlc0FycmF5KGNvcHlBcnJheSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDcmVhdGVWYXJpYXRpb25zQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNBcnJheSAhPSAnJykge1xyXG4gICAgICAgICAgICB2YXIgYWxsQXJyYXlzID0gW11cclxuICAgICAgICAgICAgYXR0cmlidXRlc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IFtdXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHJpYnV0ZVZhbHVlLm1hcChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnB1c2goZS52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBhbGxBcnJheXMucHVzaChpdGVtKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBhbGxQb3NzaWJsZUNhc2VzKGFsbEFycmF5cylcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gW11cclxuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gZWxlbWVudC5zcGxpdCgnLScpXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IFtdXHJcbiAgICAgICAgICAgICAgICBzcGxpdC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wdXNoKHsgbmFtZTogYXR0cmlidXRlc0FycmF5W2ldLmF0dHJpYnV0ZU5hbWUsIHZhbHVlOiBlIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLCBwcmljZTogJycsIHN0b2NrOiAnJywgaW1hZ2VfbGluazogW10sIGltYWdlUHJldmlld0FycmF5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZV9lcnJvcjogJycsIHN0b2NrX2Vycm9yOiAnJywgaW1hZ2VfbGlua19lcnJvcjogJycsIGN1c3RvbV9maWVsZHM6IFtdXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCdWYXJpYXRpb25zIENyZWF0ZWQgU3VjY2Vzc2Z1bGx5JylcclxuICAgICAgICAgICAgcHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5KGRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0FkZCBzb21lIGF0dHJpYnV0ZXMgZmlyc3QnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhbGxQb3NzaWJsZUNhc2VzKGFycikge1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyclswXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXVxyXG4gICAgICAgICAgICB2YXIgYWxsQ2FzZXNPZlJlc3QgPSBhbGxQb3NzaWJsZUNhc2VzKGFyci5zbGljZSgxKSkgIC8vIHJlY3VyIHdpdGggdGhlIHJlc3Qgb2YgYXJyYXlcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDYXNlc09mUmVzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnJbMF0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhcnJbMF1bal0gKyBcIi1cIiArIGFsbENhc2VzT2ZSZXN0W2ldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3cgPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCUnLCBwYWRkaW5nQm90dG9tOiAnMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkZpZWxkIE5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtHbG9iYWxTdHlsZVNoZWV0LnJlYWN0X3NlbGVjdF9zdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3BzLmZpZWxkc19saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IEdyb3VwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF0dHJpYnV0ZU5hbWUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgcGFkZGluZzogJzAlJywgbWFyZ2luOiAnMCUnLCBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9eygpID0+IHNldE1vZGFsU2hvdyh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGROZXdGaWVsZE5hbWVNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17N30gbWQ9ezd9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwJScsIHBhZGRpbmdCb3R0b206ICcwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RmllbGQgVmFsdWUgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dElkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F0dHJpYnV0ZVZhbHVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IERyb3Bkb3duSW5kaWNhdG9yOiBudWxsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17R2xvYmFsU3R5bGVTaGVldC5yZWFjdF9zZWxlY3Rfc3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJlc3MgZW50ZXIgdG8gYWRkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgc2l6ZT0nc20nIG9uQ2xpY2s9e2hhbmRsZUFkZFByb2R1Y3RBdHRyaWJ1dGVDbGlja30gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyJScgfX0+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIiBzaXplPVwic21cIiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVWYXJpYXRpb25zQ2xpY2t9PkNyZWF0ZSBWYXJpYXRpb25zPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICB7YXR0cmlidXRlc0FycmF5ICYmIGF0dHJpYnV0ZXNBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXt7IHBhZGRpbmc6ICcwJScgfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezV9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbWVudC5hdHRyaWJ1dGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGVsZW1lbnQuYXR0cmlidXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+e2VsZW1lbnQuYXR0cmlidXRlTmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs3fSBtZD17N30gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbWVudC5hdHRyaWJ1dGVWYWx1ZS5mb3JFYWNoKGUgPT4gKGUudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgc2l6ZT1cInNtXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzElJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVByb2R1Y3RBdHRyaWJ1dGVDbGljayhpbmRleCl9PiBkZWxldGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZU9wdGlvbiA9IChsYWJlbCkgPT4gKHtcclxuICAgIHZhbHVlOiBsYWJlbCxcclxuICAgIGxhYmVsLFxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RWYXJpYXRpb25zKHByb3BzKSB7XHJcbiAgICBjb25zdCBbc2FtZVByaWNlLCBzZXRTYW1lUHJpY2VdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc2FtZVByaWNlRXJyb3IsIHNldFNhbWVQcmljZUVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFtzYW1lU3RvY2ssIHNldFNhbWVTdG9ja10gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzYW1lU3RvY2tFcnJvciwgc2V0U2FtZVN0b2NrRXJyb3JdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIC8vIFNhbWUgUHJpY2UgRm9yIEFsbCBWYXJpYXRpb25zXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTYW1lUHJpY2VBcHBseUJ0bkNsaWNrKCkge1xyXG4gICAgICAgIGlmIChzYW1lUHJpY2UgIT0gJycpIHtcclxuICAgICAgICAgICAgc2V0U2FtZVByaWNlRXJyb3IoJycpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLnZhcmlhdGlvbnNBcnJheSlcclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlID0gc2FtZVByaWNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShjb3B5QXJyYXkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2FtZVByaWNlRXJyb3IoJ0VudGVyIFZhbHVlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBTYW1lIFN0b2NrIEZvciBBbGwgVmFyaWF0aW9uc1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2FtZVN0b2NrQXBwbHlCdG5DbGljaygpIHtcclxuICAgICAgICBpZiAoc2FtZVN0b2NrICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFNhbWVTdG9ja0Vycm9yKCcnKVxyXG4gICAgICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy52YXJpYXRpb25zQXJyYXkpXHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdG9jayA9IHNhbWVTdG9ja1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRWYXJpYXRpb25zQXJyYXkoY29weUFycmF5KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNhbWVTdG9ja0Vycm9yKCdFbnRlciBWYWx1ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZW5QcmljZUNoYW5nZShlLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLnZhcmlhdGlvbnNBcnJheSlcclxuICAgICAgICBsZXQgb2JqZWN0ID0gY29weUFycmF5W2luZGV4XVxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5wcmljZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIG9iamVjdC5wcmljZV9lcnJvciA9ICcnXHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3RcclxuICAgICAgICAgICAgcHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5KGNvcHlBcnJheSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJblN0b2NrQ2hhbmcoZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy52YXJpYXRpb25zQXJyYXkpXHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF1cclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICBvYmplY3Quc3RvY2sgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICBvYmplY3Quc3RvY2tfZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqZWN0XHJcbiAgICAgICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShjb3B5QXJyYXkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVZhcmlhdGlvbkNsaWNrKGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgIGNvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgcHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5KGNvcHlBcnJheSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUN1c3RvbUZpZWxkQ2xpY2soaW5kZXgsIGkpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy52YXJpYXRpb25zQXJyYXkpXHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XS5jdXN0b21fZmllbGRzLnNwbGljZShpLCAxKVxyXG4gICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNBcnJheShjb3B5QXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2F2ZVZhcmlhdGlvbnNDbGljaygpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy52YXJpYXRpb25zQXJyYXkpXHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlXHJcbiAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnByaWNlID09ICcnIHx8IGVsZW1lbnQuc3RvY2sgPT0gJycgfHwgZWxlbWVudC5pbWFnZV9saW5rLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaWNlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wcmljZV9lcnJvciA9ICdFbnRlciBwcmljZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0b2NrID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdG9ja19lcnJvciA9ICdFbnRlciBzdG9jaydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmltYWdlX2xpbmsubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmltYWdlX2xpbmtfZXJyb3IgPSAnRW50ZXIgaW1hZ2UgTGluaydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJpY2VfZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdG9ja19lcnJvciA9ICcnXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmltYWdlX2xpbmtfZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoZmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldFZhcmlhdGlvbnNTYXZlZCh0cnVlKVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCdWYXJpYXRpb25zIHNhdmVkIFN1Y2Nlc3NmdWxseScpXHJcbiAgICAgICAgICAgIHNldEVycm9yKCcnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1BsZWFzZSBmaWxsIGFsbCByZXF1aXJlZCBmaWVsZHMnKVxyXG4gICAgICAgICAgICBzZXRFcnJvcigncmVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5KGNvcHlBcnJheSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVWYXJpYXRpb25zRXJyb3JDaGVjayhlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucHJpY2VfZXJyb3IgIT0gJycgfHwgZWxlbWVudC5pbWFnZV9saW5rX2Vycm9yICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMXB4IHNvbGlkIHJlZCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSXRlbVZhbHVlQ2hhbmdlKGV2ZW50LCBpbmRleCwgaSkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLnZhcmlhdGlvbnNBcnJheSlcclxuICAgICAgICBsZXQgb2JqID0gY29weUFycmF5W2luZGV4XS5pdGVtXHJcbiAgICAgICAgb2JqW2ldLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgcHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5KGNvcHlBcnJheSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmaWxlU2VsZWN0ZWRIYW5kbGVyKGUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgIGxldCBvYmplY3QgPSBjb3B5QXJyYXlbaW5kZXhdXHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAhPSAnJykge1xyXG4gICAgICAgICAgICBvYmplY3QuaW1hZ2VfbGluayA9IFsuLi5vYmplY3QuaW1hZ2VfbGluaywgLi4uZS50YXJnZXQuZmlsZXNdXHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdXHJcbiAgICAgICAgICAgIG9iamVjdC5pbWFnZV9saW5rLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKFVSTC5jcmVhdGVPYmplY3RVUkwoZWxlbWVudCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG9iamVjdC5pbWFnZVByZXZpZXdBcnJheSA9IGFycmF5XHJcbiAgICAgICAgICAgIG9iamVjdC5pbWFnZV9saW5rX2Vycm9yID0gJydcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9iamVjdFxyXG4gICAgICAgICAgICBwcm9wcy5zZXRWYXJpYXRpb25zQXJyYXkoY29weUFycmF5KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUltYWdlKGluZGV4LCBpKSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgIGxldCBvYmogPSBjb3B5QXJyYXlbaW5kZXhdXHJcblxyXG4gICAgICAgIG9iai5pbWFnZV9saW5rLnNwbGljZShpLCAxKVxyXG4gICAgICAgIG9iai5pbWFnZVByZXZpZXdBcnJheS5zcGxpY2UoaSwgMSlcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqXHJcbiAgICAgICAgcHJvcHMuc2V0VmFyaWF0aW9uc0FycmF5KGNvcHlBcnJheSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhdGlvbnNBcnJheUVtcHR5ID9cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QbGVhc2UgRmlyc3QgYWRkIEF0dHJpYnV0ZXMgZnJvbSBBdHRyaWJ1dGVzIFRhYjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTYW1lIFByaWNlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT4gU2FtZSBQcmljZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2FtZVByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NhbWVQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhbWVQcmljZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYW1lUHJpY2VFcnJvcignJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtzYW1lUHJpY2VFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc3R5bGU9e3N0eWxlcy5sYWJlbH0gb25DbGljaz17aGFuZGxlU2FtZVByaWNlQXBwbHlCdG5DbGlja30gc2l6ZT1cInNtXCI+QXBwbHk8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zYW1lUHJpY2VFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU2FtZSBTdG9jayAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+IFNhbWUgU3RvY2s8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNhbWVTdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzYW1lU3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYW1lU3RvY2soZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FtZVN0b2NrRXJyb3IoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17c2FtZVN0b2NrRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3ByaW1hcnknIHN0eWxlPXtzdHlsZXMubGFiZWx9IG9uQ2xpY2s9e2hhbmRsZVNhbWVTdG9ja0FwcGx5QnRuQ2xpY2t9IHNpemU9XCJzbVwiPkFwcGx5PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2FtZVN0b2NrRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNhbWUgSW1hZ2UgTGluayAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkdyb3VwIGFzPXtDb2x9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PiBTYW1lIEltYWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgSW1hZ2UgTGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYW1lSW1nTGlua0lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NhbWVJbWdMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhbWVJbWdMaW5rKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhbWVJbWdMaW5rRXJyb3IoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17c2FtZUltZ0xpbmtFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc3R5bGU9e3N0eWxlcy5sYWJlbH0gb25DbGljaz17aGFuZGxlU2FtZUltZ0xpbmtBcHBseUJ0bkNsaWNrfSBzaXplPVwic21cIj5BcHBseTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNhbWVJbWdMaW5rRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnZhcmlhdGlvbnNBcnJheSAmJiBwcm9wcy52YXJpYXRpb25zQXJyYXkubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgYm9yZGVyOiBoYW5kbGVWYXJpYXRpb25zRXJyb3JDaGVjayhlbGVtZW50KSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuaXRlbSAmJiBlbGVtZW50Lml0ZW0ubWFwKChlLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezN9IG1kPXszfSBzbT17Nn0geHM9ezZ9IGtleT17aX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVJdGVtVmFsdWVDaGFuZ2UoZXZlbnQsIGluZGV4LCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtGb3JtLkdyb3VwfSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnNsaWRlcl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBzaXplPVwic21cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMSUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVmFyaWF0aW9uQ2xpY2soaW5kZXgpfT4gZGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBQcmljZSA8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW1lbnQucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZW5QcmljZUNoYW5nZShlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2VsZW1lbnQucHJpY2VfZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByaWNlX2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IGluIFN0b2NrIDxzcGFuPiAqIDwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfaW5fc3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IEluIFN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVtZW50LnN0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJblN0b2NrQ2hhbmcoZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlbGVtZW50LnN0b2NrX2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5zdG9ja19lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IEltYWdlcyA8c3Bhbj4gKiA8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17eyBtYXJnaW46ICcwJSAyJScsIGZvbnRTaXplOiAnMTNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlIG9uQ2hhbmdlPXsoZSkgPT4gZmlsZVNlbGVjdGVkSGFuZGxlcihlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIiBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWxlbWVudC5pbWFnZV9saW5rX2Vycm9yfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhlbGVtZW50LmltYWdlUHJldmlld0FycmF5IHx8IFtdKS5tYXAoKHVybCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctaW1hZ2VcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcsIHdpZHRoOiAnMTAwcHgnLCBtYXJnaW46ICcxJScgfX0gc3JjPXt1cmx9IGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZGVsZXRlSW1hZ2VcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZGVsZXRlSW1hZ2UoaW5kZXgsIGkpfSB2YWx1ZT1cIkRlbGV0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5jdXN0b21fZmllbGRzICYmIGVsZW1lbnQuY3VzdG9tX2ZpZWxkcy5tYXAoKGUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXszfSBtZD17M30gc209ezZ9IHhzPXs2fSBrZXk9e2l9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlLm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBlLmF0dHJpYnV0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBzaXplPVwic21cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMSUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDdXN0b21GaWVsZENsaWNrKGluZGV4LCBpKX0+IGRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3sgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLCB3aWR0aDogJzEwMCUnLCBjb2xvcjogYCR7ZXJyb3J9YCB9fT57bWVzc2FnZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCIgc2l6ZT1cInNtXCIgYmxvY2sgb25DbGljaz17aGFuZGxlU2F2ZVZhcmlhdGlvbnNDbGlja30+IFNhdmUgVmFyaWF0aW9uczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2hvdy1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2U6aG92ZXIgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjAuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2U6aG92ZXIgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNob3ctaW1hZ2UgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXYuc2hvdy1pbWFnZSBpbnB1dC5kZWxldGVJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwJSdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5J1xyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgcHJvZHVjdF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMTAlJyxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgc2xpZGVyX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERhdGEiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new-contents\\\\product-data.js */"));
}

const styles = {
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
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].card_header_background}`
  },
  label: {
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].form_label_fontsize}`
  },
  fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primary_text_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  product_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].primary_text_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  slider_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_7__["default"].admin_primry_color}`,
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
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-new-contents/custom-fields */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js");
/* harmony import */ var _add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-new-contents/product-data */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/product-data.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















 // For React-Select

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
  product_in_stock: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000000').max(1000000, "Can't be longer than 1000000"),
  product_brand_name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_image_link: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_warranty: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000').max(1000, 'Enter Between 0-1000'),
  warranty_type: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_discount: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-100').max(100, 'Enter Between 0-100'),
  // => Attributes (Variable Product)
  purchase_note: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  // => Variations (Variable Product)
  product_variations: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  // => Shipping
  product_weight: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_length: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_width: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_height: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  shipping_charges: yup__WEBPACK_IMPORTED_MODULE_4__["number"]("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, 'Enter Between 0-10000'),
  handling_fee: yup__WEBPACK_IMPORTED_MODULE_4__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 1000"),
  // => Advanve
  purchase_note: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  // Custom Fields
  custom_fields: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  category_id: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  sub_category_id: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  dangerous_goods: yup__WEBPACK_IMPORTED_MODULE_4__["string"](),
  product_tags: yup__WEBPACK_IMPORTED_MODULE_4__["string"]()
});

class AddNew extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleProductCategoryChange", value => {
      let array = [];
      let _id = null;

      if (value != null) {
        this.state.categories_list.forEach(element => {
          if (value.label == element.label) {
            _id = element._id;
          }
        });
        this.state.sub_categories_list.forEach(element => {
          if (element.category_id == _id) {
            array.push(element);
          }
        });
        this.setState({
          productCategory: value,
          sub_category_options: array,
          productSubCategory: [],
          subCategoryDisabled: false,
          categoryErrorDiv: 'BorderDiv',
          category_id: _id
        });
      }
    });

    _defineProperty(this, "handleProductSubCategoryChange", value => {
      let _id = null;

      if (value != null) {
        this.state.sub_category_options.forEach(element => {
          if (value.label == element.label) {
            _id = element._id;
          }
        });
        this.setState({
          productSubCategory: value,
          subCategoryErrorDiv: 'BorderDiv',
          sub_category_id: _id
        });
      }
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

    _defineProperty(this, "deleteImage", index => {
      const copyArray = Object.assign([], this.state.files);
      const imgCopyArray = Object.assign([], this.state.imagePreviewArray);
      copyArray.splice(index, 1);
      imgCopyArray.splice(index, 1);
      this.setState({
        files: copyArray,
        imagePreviewArray: imgCopyArray
      });
    });

    this.state = {
      token: '',
      isUpdateProduct: this.props.isUpdateProduct,
      _id: this.props._id,
      isLoading: false,
      showToast: false,
      toastMessage: '',
      showVariationsErrorAlert: false,
      showSimpleProductPriceImgLinkErrorrAlert: false,
      isVariableProduct: this.props.isVariableProduct,
      productCategory: this.props.productCategory,
      productSubCategory: this.props.productSubCategory,
      category_id: '',
      sub_category_id: '',
      categories_list: [],
      sub_categories_list: [],
      sub_category_options: [],
      subCategoryDisabled: true,
      categoryErrorDiv: 'BorderDiv',
      subCategoryErrorDiv: 'BorderDiv',
      productTags: this.props.productTags,
      warrantyType: this.props.warrantyType,
      inputValue: '',
      simple_product_image_link: this.props.simple_product_image_link,
      variationsArray: this.props.variationsArray,
      isVariationsSaved: false,
      // Custom Fields
      customFieldsArray: [],
      files: [],
      imagePreviewArray: [],
      // Dangerous Goods
      dangerousGoodsArray: this.props.dangerousGoodsArray
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      categories_list: nextProps.categories_list,
      sub_categories_list: nextProps.sub_categories_list,
      fields_list: nextProps.fields_list,
      field_requests_list: nextProps.field_requests_list,
      token: nextProps.token
    });
  }

  async uploadProduct(values, currentComponent) {
    console.log('values: ', values);
    const formData = new FormData();
    formData.append('product_name', values.product_name);
    formData.append('product_description', values.product_description);
    formData.append('product_type', values.product_type);
    formData.append('sku', values.sku);
    formData.append('product_price', values.product_price);
    formData.append('product_in_stock', values.product_in_stock);
    formData.append('product_brand_name', values.product_brand_name);
    formData.append('product_image_link', '');
    values.product_image_link && values.product_image_link.forEach(element => {
      formData.append('myImage', element);
    });
    values.product_variations && values.product_variations.forEach((element, index) => {
      let array = [];
      element.image_link && element.image_link.forEach(file => {
        formData.append('myImage', file);
        array.push({
          name: file.name
        });
      });
      element.image_link = array;
    });
    formData.append('product_warranty', values.product_warranty);
    formData.append('warranty_type', values.warranty_type);
    formData.append('product_discount', values.product_discount);
    formData.append('purchase_note', values.purchase_note);
    formData.append('product_variations', JSON.stringify(values.product_variations));
    formData.append('product_weight', values.product_weight);
    formData.append('dimension_length', values.dimension_length);
    formData.append('dimension_width', values.dimension_width);
    formData.append('dimension_height', values.dimension_height);
    formData.append('shipping_charges', values.shipping_charges);
    formData.append('handling_fee', values.handling_fee);
    formData.append('custom_fields', JSON.stringify(values.custom_fields));
    formData.append('category_id', values.category_id);
    formData.append('sub_category_id', values.sub_category_id);
    formData.append('dangerous_goods', JSON.stringify(values.dangerous_goods));
    formData.append('product_tags', JSON.stringify(values.product_tags)); // if (this.state.isUpdateProduct == false) {

    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_15__["default"].PATH + '/api/products/add';
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'authorization': this.state.token
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, formData, config).then(response => {
      currentComponent.setState({
        isLoading: false
      });
      currentComponent.setState({
        showToast: true,
        toastMessage: 'Product Uploaded Successfully'
      });
      return true;
    }).catch(error => {
      console.log('error:', error);
      currentComponent.setState({
        isLoading: false
      });
      alert('Product Upload failed');
      return false;
    }); // } else {
    // const url = MuhalikConfig.PATH + `/api/products/add`
    // await axios.post(url, {
    //     formData
    // }, {
    //     headers: { 'authorization': this.state.token }
    // }).then(function (response) {
    //     currentComponent.setState({ isLoading: false });
    //     currentComponent.setState({ showToast: true, toastMessage: 'Product Updated Successfully' });
    //     return true;
    // }).catch(function (error) {
    //     currentComponent.setState({ isLoading: false });
    //     console.log('error:', error)
    //     try {
    //         console.log('error:', error.response.data.mesage)
    //     } catch (err) {
    //         console.log('error:', error)
    //     }
    //     alert('Product Update failed');
    //     return false;
    // });
    // }
  } // Custom Fields


  handleSaveCustomFieldsBtnClick() {
    if (this.state.isVariableProduct == true) {
      const copyArray = Object.assign([], this.state.variationsArray);
      copyArray.forEach(element => {
        this.state.customFieldsArray.forEach(e => {
          element.custom_fields.push({
            name: e.name,
            value: e.value
          });
        });
      });
      this.setState({
        variationsArray: copyArray,
        customFieldsArray: []
      });
    }
  } // Product Category


  async fileSelectedHandler(e) {
    await this.setState({
      files: [...this.state.files, ...e.target.files]
    });
    let array = [];
    this.state.files.forEach(element => {
      array.push(URL.createObjectURL(element));
    });
    this.setState({
      imagePreviewArray: array
    });
  }

  render() {
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      validationSchema: schema,
      initialValues: this.props.isUpdateProduct ? {
        product_name: this.props.product_name,
        product_description: this.props.product_description,
        product_type: this.props.product_type,
        sku: this.props.sku,
        product_price: this.props.product_price,
        product_in_stock: this.props.product_in_stock,
        product_brand_name: this.props.product_brand_name,
        // product_image_link:this.props.product_image_link}
        product_warranty: this.props.product_warranty,
        warranty_type: this.props.warranty_type,
        product_discount: this.props.product_discount,
        purchase_note: this.props.purchase_note,
        // product_variations:this.props.product_variations}
        product_weight: this.props.product_weight,
        dimension_length: this.props.dimension_length,
        dimension_width: this.props.dimension_width,
        dimension_height: this.props.dimension_height,
        shipping_charges: this.props.shipping_charges,
        handling_fee: this.props.handling_fee
      } : {
        product_type: 'simple-product',
        product_price: '',
        product_in_stock: '',
        product_name: '',
        product_description: '',
        sku: '',
        product_brand_name: '',
        product_image_link: '',
        product_warranty: '',
        warranty_type: '',
        product_discount: '',
        purchase_note: '',
        product_variations: [],
        product_weight: '',
        dimension_length: '',
        dimension_width: '',
        dimension_height: '',
        shipping_charges: '',
        handling_fee: '',
        custom_fields: [],
        category_id: '',
        sub_category_id: '',
        dangerous_goods: [],
        product_tags: []
      },
      onSubmit: (values, {
        setSubmitting,
        resetForm
      }) => {
        if (this.state.productCategory == '' || this.state.productSubCategory == '') {
          if (this.state.productCategory == '') {
            this.setState({
              categoryErrorDiv: 'RedBorderDiv'
            });
          }

          if (this.state.productSubCategory == '') {
            this.setState({
              subCategoryErrorDiv: 'RedBorderDiv'
            });
          }

          setSubmitting(false);
        } else if (values.product_type != 'variable-prouct' && (values.product_price == '' || values.product_in_stock == '' || this.state.files == '')) {
          this.setState({
            showSimpleProductPriceImgLinkErrorrAlert: true
          });
        } else if (this.state.isVariationsSaved == false && values.product_type == 'variable-prouct') {
          this.setState({
            showVariationsErrorAlert: true
          });
        } else {
          setSubmitting(true);
          this.setState({
            isLoading: true
          });
          setTimeout(() => {
            let array = [];
            values.category_id = this.state.category_id;
            values.sub_category_id = this.state.sub_category_id;
            values.product_tags = this.state.productTags;
            values.dangerous_goods = this.state.dangerousGoodsArray;

            if (!this.state.isVariableProduct) {
              values.product_image_link = this.state.files;
              values.custom_fields = this.state.customFieldsArray;
            } else {
              array = [];
              this.state.variationsArray.forEach((element, index) => {
                let item = [];
                element.item.forEach(e => {
                  item.push({
                    name: e.name,
                    value: e.value
                  });
                });
                let item_1 = [];
                element.custom_fields.forEach(e => {
                  item_1.push({
                    name: e.name,
                    value: e.value
                  });
                });
                array.push({
                  item: item,
                  custom_fields: item_1,
                  price: element.price,
                  stock: element.stock,
                  image_link: element.image_link
                });
              });
              values.product_variations = array;
            }

            if (this.uploadProduct(values, this)) {
              resetForm();
              this.setState({
                showVariationsErrorAlert: false,
                showSimpleProductPriceImgLinkErrorrAlert: false,
                isVariableProduct: false,
                productCategory: '',
                productSubCategory: '',
                subCategoryDisabled: true,
                subSubCategoryDisabled: true,
                categoryErrorDiv: 'BorderDiv',
                subCategoryErrorDiv: 'BorderDiv',
                productTags: [],
                warrantyType: '',
                inputValue: '',
                files: [],
                variationsArray: [],
                isVariationsSaved: false,
                // Custom Fields
                customFieldsArray: [],
                // Dangerous Goods
                dangerousGoodsArray: []
              });
            }

            setSubmitting(false);
          }, 500);
        }
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    }, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_13__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"],
      title: this.props.title
    }), this.props.isUpdateProduct ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
      style: {
        margin: ' 0% 2%',
        display: 'flex',
        alignItems: 'center'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: {
        fontSize: '14px'
      },
      className: "mr-auto",
      onClick: this.props.back
    }, "Back"), __jsx("div", {
      style: {
        fontSize: '14px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]) + " " + "mr-auto"
    }, " ", this.props.product_name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: {
        fontSize: '14px'
      },
      onClick: this.props.view
    }, " View "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      style: {
        fontSize: '14px'
      },
      onClick: this.props.delete
    }, " Delete ")) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      noValidate: true,
      onSubmit: handleSubmit
    }, __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onHide: e => this.setState({
        showToast: false
      }),
      show: this.state.showToast,
      header: 'Success',
      message: this.state.toastMessage,
      iconname: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faThumbsUp"],
      color: "#00b300"
    }), __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onHide: e => this.setState({
        showVariationsErrorAlert: false
      }),
      show: this.state.showVariationsErrorAlert,
      header: 'Error',
      message: 'Please Add/Save Variations First',
      iconname: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationTriangle"],
      color: "#ff3333"
    }), __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onHide: e => this.setState({
        showSimpleProductPriceImgLinkErrorrAlert: false
      }),
      show: this.state.showSimpleProductPriceImgLinkErrorrAlert,
      header: 'Error',
      message: 'Enter Price/Stock/Image(s) in General Tab First',
      iconname: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationTriangle"],
      color: "#ff3333"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      noGutters: true,
      style: {
        paddingTop: '1%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 9,
      md: 9,
      sm: 12,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
      style: {
        margin: '0.5% 2% 2% 2%',
        padding: '0%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      style: styles.label
    }, "Product Name", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
      type: "text",
      placeholder: "Enter Product Name",
      name: "product_name",
      value: values.product_name || '',
      onChange: handleChange,
      isInvalid: errors.product_name && touched.product_name
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.product_name))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: 'Product Discruption'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
      as: "textarea",
      placeholder: "Enter Product Description",
      name: "product_description",
      value: values.product_description || '',
      rows: "7",
      onChange: handleChange,
      isInvalid: errors.product_description && touched.product_description
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
      type: "invalid"
    }, errors.product_description))), __jsx(_add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, this.props, {
      isUpdateProduct: this.props.isUpdateProduct,
      fields_list: this.state.fields_list,
      productTypeHandler: e => {
        if (e.target.value === 'variable-prouct') {
          this.setState({
            isVariableProduct: true
          });
        } else {
          this.setState({
            isVariableProduct: false
          });
        }
      },
      isVariableProduct: this.state.isVariableProduct,
      product_type_values: values.product_type,
      product_price_values: values.product_price || '',
      product_price_errors: errors.product_price,
      product_price_touched: touched.product_price,
      product_in_stock_values: values.product_in_stock || '',
      product_in_stock_errors: errors.product_in_stock,
      product_brand_name_values: values.product_brand_name || '',
      product_brand_name_errors: errors.product_brand_name,
      fileSelectedHandler: this.fileSelectedHandler.bind(this),
      imagePreviewArray: this.state.imagePreviewArray,
      deleteImage: this.deleteImage,
      product_warranty_values: values.product_warranty || '',
      product_warranty_errors: errors.product_warranty,
      warranty_type_values: values.warranty_type || '',
      warranty_type_errors: errors.warranty_type,
      product_discount_values: values.product_discount || '',
      product_discount_errors: errors.product_discount,
      sku_values: values.sku || '',
      sku_errors: errors.sku,
      product_weight_values: values.product_weight || '',
      product_weight_errors: errors.product_weight,
      dimension_length_values: values.dimension_length || '',
      dimension_length_errors: errors.dimension_length,
      dimension_width_values: values.dimension_width || '',
      dimension_width_errors: errors.dimension_width,
      dimension_height_values: values.dimension_height || '',
      dimension_height_errors: errors.dimension_height,
      shipping_charges_values: values.shipping_charges || '',
      shipping_charges_errors: errors.shipping_charges,
      handling_fee_values: values.handling_fee || '',
      handling_fee_errors: errors.handling_fee,
      purchase_note_values: values.purchase_note || '',
      purchase_note_errors: errors.purchase_note,
      onChange: handleChange,
      errors: errors,
      productColorChangeHandler: this.handleProductColorChange,
      productSizeChangeHandler: this.handleProductSizeChange,
      variationsArray: this.state.variationsArray,
      setVariationsArray: arr => this.setState({
        variationsArray: arr
      }),
      setVariationsSaved: () => this.setState({
        isVariationsSaved: true
      })
    })), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: 'Custom Fields'
    }, __jsx(_add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, this.props, {
      fields_list: this.state.fields_list,
      customFieldsArray: this.state.customFieldsArray,
      setFieldsArrayHandler: arr => this.setState({
        customFieldsArray: arr
      }),
      isVariableProduct: this.state.isVariableProduct,
      hideCustomFields: this.state.variationsArray == '' && this.state.isVariableProduct == true,
      saveCustomFieldsHandler: this.handleSaveCustomFieldsBtnClick.bind(this)
    })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 3,
      md: 3,
      sm: 12,
      xs: 12
    }, __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: 'Product Categories'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      style: styles.label
    }, "Category"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]) + " " + (this.state.categoryErrorDiv || "")
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
      id: '1',
      instanceId: '1',
      inputId: '1',
      styles: _styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].react_select_styles,
      onChange: this.handleProductCategoryChange,
      options: this.state.categories_list,
      value: this.state.productCategory,
      isSearchable: true,
      placeholder: "Select Category"
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
      style: styles.label
    }, "Sub Category"), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]]) + " " + (this.state.subCategoryErrorDiv || "")
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
      id: '1',
      instanceId: '1',
      inputId: '1',
      styles: _styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].react_select_styles,
      onChange: this.handleProductSubCategoryChange,
      options: this.state.sub_category_options,
      value: this.state.productSubCategory,
      isSearchable: true,
      placeholder: "Select Sub Category",
      isDisabled: this.state.subCategoryDisabled
    })), __jsx("div", {
      style: {
        minHeight: '150px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    }))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: 'Dangerous Goods'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "not_specified",
      label: "Not Specified",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Not-Specified') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Not-Specified')
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "ceramic",
      label: "Ceramic",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Ceramic') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Ceramic')
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "glass",
      label: "Glass",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Glass') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Glass')
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "metal",
      label: "Metal",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Metal') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Metal')
    }), __jsx("br", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
      name: "plastic",
      label: "Plastic",
      style: styles.label,
      checked: this.state.dangerousGoodsArray && this.state.dangerousGoodsArray.forEach(element => {
        if (element.value == 'Plastic') {
          return true;
        }
      }),
      onChange: e => this.handleDangerousGoodsChange(e, 'Plastic')
    })), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: 'Product Tags'
    }, __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_9___default.a, {
      id: '1',
      instanceId: '1',
      inputId: '1',
      isMulti: true,
      value: this.state.productTags,
      components: {
        DropdownIndicator: null
      },
      styles: _styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].react_select_styles,
      onChange: this.handleProductTagChange,
      placeholder: "Type and press enter"
    }), __jsx("div", {
      style: {
        minHeight: '150px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      style: styles.row
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      onSubmit: handleSubmit,
      disabled: this.state.isLoading,
      block: true
    }, this.state.isLoading ? 'Uploading' : 'Upload', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      animation: "grow",
      size: "sm"
    }) : __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]]])
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3499326083",
      dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color]
    }, `.RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:1px;border-radius:2px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].admin_primry_color};border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXF4QmlDLEFBR3dFLEFBTWYsQUFJRixBQUc4QixBQU90QixVQVR0QixFQUplLE1BY0EsS0FiZixJQVBnQixFQXFCaEIsVUFwQnNCLENBWWEsaUJBWHBCLFdBQ2YsR0FXc0Msa0NBQ2pCLGlCQUV0QixrQkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcTmV3IGZvbGRlclxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWRkLW5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIEZvcm0sIENvbCwgUm93LCBDYXJkLCBJbnB1dEdyb3VwLCBCdXR0b24sIFRvYXN0LCBBbGVydCwgTmF2LCBUYWJzLCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcblxyXG5pbXBvcnQgQWxlcnRNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9hbGVydC1tb2RhbCc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IFRpdGxlUm93IGZyb20gJy4uLy4uLy4uLy4uL3RpdGxlLXJvdyc7XHJcbmltcG9ydCBDYXJkQWNjb3JkaW9uIGZyb20gJy4uLy4uLy4uLy4uL2NhcmRfYWNjb3JkaW9uJztcclxuXHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZyc7XHJcbmltcG9ydCBDdXN0b21GaWVsZHMgZnJvbSAnLi9hZGQtbmV3LWNvbnRlbnRzL2N1c3RvbS1maWVsZHMnO1xyXG5pbXBvcnQgUHJvZHVjdERhdGEgZnJvbSAnLi9hZGQtbmV3LWNvbnRlbnRzL3Byb2R1Y3QtZGF0YSc7XHJcblxyXG4vLyBGb3IgUmVhY3QtU2VsZWN0XHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxufTtcclxuLy8gTW9kZWwgRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSk7XHJcblxyXG5cclxuLy8gWXVwIFNjaGVtYSBmb3IgdmFsaWRhdGlvbiBmaWVsZHNcclxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCh7XHJcbiAgICBwcm9kdWN0X25hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVudGVyIFByb2R1Y3QgTmFtZVwiKVxyXG4gICAgICAgIC5taW4oMiwgXCJNdXN0IGhhdmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCg0MCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiA0MCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oNSwgXCJNdXN0IGhhdmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgyMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMjAwIGNoYXJhY3RlcnNcIiksXHJcbiAgICAvLyBQcm9kdWN0IERhdGFcclxuICAgIHByb2R1Y3RfdHlwZTogeXVwLnN0cmluZygpLFxyXG4gICAgLy8gPT4gSW52ZW50b3J5XHJcbiAgICBza3U6IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG4gICAgLy8gPT4gR2VuZXJhbChTaW1wbGUtUHJvZHVjdClcclxuICAgIHByb2R1Y3RfcHJpY2U6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDEtMTAwMDAwMCcpXHJcbiAgICAgICAgLm1heCgxMDAwMDAwLCAnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKSxcclxuICAgIHByb2R1Y3RfaW5fc3RvY2s6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDEtMTAwMDAwMCcpXHJcbiAgICAgICAgLm1heCgxMDAwMDAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMDAwMDBcIiksXHJcbiAgICBwcm9kdWN0X2JyYW5kX25hbWU6IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oMiwgXCJNdXN0IGhhdmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCg0MCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiA0MCBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgcHJvZHVjdF9pbWFnZV9saW5rOiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X3dhcnJhbnR5OiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAwJyksXHJcbiAgICB3YXJyYW50eV90eXBlOiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X2Rpc2NvdW50OiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAwLTEwMCcpXHJcbiAgICAgICAgLm1heCgxMDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJyksXHJcbiAgICAvLyA9PiBBdHRyaWJ1dGVzIChWYXJpYWJsZSBQcm9kdWN0KVxyXG4gICAgcHVyY2hhc2Vfbm90ZTogeXVwLnN0cmluZygpLFxyXG4gICAgLy8gPT4gVmFyaWF0aW9ucyAoVmFyaWFibGUgUHJvZHVjdClcclxuICAgIHByb2R1Y3RfdmFyaWF0aW9uczogeXVwLnN0cmluZygpLFxyXG4gICAgLy8gPT4gU2hpcHBpbmdcclxuICAgIHByb2R1Y3Rfd2VpZ2h0OiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAwLTEwMDAwJylcclxuICAgICAgICAubWF4KDEwMDAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMDAwXCIpLFxyXG4gICAgZGltZW5zaW9uX2xlbmd0aDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMC0xMDAwMCcpXHJcbiAgICAgICAgLm1heCgxMDAwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDAwMFwiKSxcclxuICAgIGRpbWVuc2lvbl93aWR0aDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMC0xMDAwMCcpXHJcbiAgICAgICAgLm1heCgxMDAwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDAwMFwiKSxcclxuICAgIGRpbWVuc2lvbl9oZWlnaHQ6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMDBcIiksXHJcbiAgICBzaGlwcGluZ19jaGFyZ2VzOiB5dXAubnVtYmVyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKSxcclxuICAgIGhhbmRsaW5nX2ZlZTogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMC0xMDAwMCcpXHJcbiAgICAgICAgLm1heCgxMDAwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDAwXCIpLFxyXG4gICAgLy8gPT4gQWR2YW52ZVxyXG4gICAgcHVyY2hhc2Vfbm90ZTogeXVwLnN0cmluZygpLFxyXG4gICAgLy8gQ3VzdG9tIEZpZWxkc1xyXG4gICAgY3VzdG9tX2ZpZWxkczogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIGNhdGVnb3J5X2lkOiB5dXAuc3RyaW5nKCksXHJcbiAgICBzdWJfY2F0ZWdvcnlfaWQ6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBkYW5nZXJvdXNfZ29vZHM6IHl1cC5zdHJpbmcoKSxcclxuICAgIHByb2R1Y3RfdGFnczogeXVwLnN0cmluZygpLFxyXG59KTtcclxuXHJcbmNsYXNzIEFkZE5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgICAgIGlzVXBkYXRlUHJvZHVjdDogdGhpcy5wcm9wcy5pc1VwZGF0ZVByb2R1Y3QsXHJcbiAgICAgICAgICAgIF9pZDogdGhpcy5wcm9wcy5faWQsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb2FzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdDogdGhpcy5wcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCxcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yeTogdGhpcy5wcm9wcy5wcm9kdWN0Q2F0ZWdvcnksXHJcbiAgICAgICAgICAgIHByb2R1Y3RTdWJDYXRlZ29yeTogdGhpcy5wcm9wcy5wcm9kdWN0U3ViQ2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcclxuICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0OiBbXSxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3JpZXNfbGlzdDogW10sXHJcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9vcHRpb25zOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5RGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICBzdWJDYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RUYWdzOiB0aGlzLnByb3BzLnByb2R1Y3RUYWdzLFxyXG5cclxuICAgICAgICAgICAgd2FycmFudHlUeXBlOiB0aGlzLnByb3BzLndhcnJhbnR5VHlwZSxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms6IHRoaXMucHJvcHMuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluayxcclxuXHJcbiAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheTogdGhpcy5wcm9wcy52YXJpYXRpb25zQXJyYXksXHJcbiAgICAgICAgICAgIGlzVmFyaWF0aW9uc1NhdmVkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk6IFtdLFxyXG5cclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZVByZXZpZXdBcnJheTogW10sXHJcbiAgICAgICAgICAgIC8vIERhbmdlcm91cyBHb29kc1xyXG4gICAgICAgICAgICBkYW5nZXJvdXNHb29kc0FycmF5OiB0aGlzLnByb3BzLmRhbmdlcm91c0dvb2RzQXJyYXksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllc19saXN0OiBuZXh0UHJvcHMuY2F0ZWdvcmllc19saXN0LFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcmllc19saXN0OiBuZXh0UHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdCxcclxuXHJcbiAgICAgICAgICAgIGZpZWxkc19saXN0OiBuZXh0UHJvcHMuZmllbGRzX2xpc3QsXHJcbiAgICAgICAgICAgIGZpZWxkX3JlcXVlc3RzX2xpc3Q6IG5leHRQcm9wcy5maWVsZF9yZXF1ZXN0c19saXN0LFxyXG5cclxuICAgICAgICAgICAgdG9rZW46IG5leHRQcm9wcy50b2tlblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwbG9hZFByb2R1Y3QodmFsdWVzLCBjdXJyZW50Q29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlczogJywgdmFsdWVzKVxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X25hbWUnLCB2YWx1ZXMucHJvZHVjdF9uYW1lKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9kZXNjcmlwdGlvbicsIHZhbHVlcy5wcm9kdWN0X2Rlc2NyaXB0aW9uKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF90eXBlJywgdmFsdWVzLnByb2R1Y3RfdHlwZSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NrdScsIHZhbHVlcy5za3UpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X3ByaWNlJywgdmFsdWVzLnByb2R1Y3RfcHJpY2UpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X2luX3N0b2NrJywgdmFsdWVzLnByb2R1Y3RfaW5fc3RvY2spXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X2JyYW5kX25hbWUnLCB2YWx1ZXMucHJvZHVjdF9icmFuZF9uYW1lKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9pbWFnZV9saW5rJywgJycpXHJcbiAgICAgICAgdmFsdWVzLnByb2R1Y3RfaW1hZ2VfbGluayAmJiB2YWx1ZXMucHJvZHVjdF9pbWFnZV9saW5rLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbXlJbWFnZScsIGVsZW1lbnQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB2YWx1ZXMucHJvZHVjdF92YXJpYXRpb25zICYmIHZhbHVlcy5wcm9kdWN0X3ZhcmlhdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2VfbGluayAmJiBlbGVtZW50LmltYWdlX2xpbmsuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbXlJbWFnZScsIGZpbGUpXHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHsgbmFtZTogZmlsZS5uYW1lIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2VfbGluayA9IGFycmF5XHJcbiAgICAgICAgfSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3Rfd2FycmFudHknLCB2YWx1ZXMucHJvZHVjdF93YXJyYW50eSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3dhcnJhbnR5X3R5cGUnLCB2YWx1ZXMud2FycmFudHlfdHlwZSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RfZGlzY291bnQnLCB2YWx1ZXMucHJvZHVjdF9kaXNjb3VudClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3B1cmNoYXNlX25vdGUnLCB2YWx1ZXMucHVyY2hhc2Vfbm90ZSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RfdmFyaWF0aW9ucycsIEpTT04uc3RyaW5naWZ5KHZhbHVlcy5wcm9kdWN0X3ZhcmlhdGlvbnMpKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF93ZWlnaHQnLCB2YWx1ZXMucHJvZHVjdF93ZWlnaHQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaW1lbnNpb25fbGVuZ3RoJywgdmFsdWVzLmRpbWVuc2lvbl9sZW5ndGgpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaW1lbnNpb25fd2lkdGgnLCB2YWx1ZXMuZGltZW5zaW9uX3dpZHRoKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGltZW5zaW9uX2hlaWdodCcsIHZhbHVlcy5kaW1lbnNpb25faGVpZ2h0KVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2hpcHBpbmdfY2hhcmdlcycsIHZhbHVlcy5zaGlwcGluZ19jaGFyZ2VzKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaGFuZGxpbmdfZmVlJywgdmFsdWVzLmhhbmRsaW5nX2ZlZSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2N1c3RvbV9maWVsZHMnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZXMuY3VzdG9tX2ZpZWxkcykpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeV9pZCcsIHZhbHVlcy5jYXRlZ29yeV9pZClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3N1Yl9jYXRlZ29yeV9pZCcsIHZhbHVlcy5zdWJfY2F0ZWdvcnlfaWQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkYW5nZXJvdXNfZ29vZHMnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZXMuZGFuZ2Vyb3VzX2dvb2RzKSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RfdGFncycsIEpTT04uc3RyaW5naWZ5KHZhbHVlcy5wcm9kdWN0X3RhZ3MpKVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5pc1VwZGF0ZVByb2R1Y3QgPT0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy9hZGQnXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiB0aGlzLnN0YXRlLnRva2VuLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBheGlvcy5wb3N0KHVybCwgZm9ybURhdGEsIGNvbmZpZylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBzaG93VG9hc3Q6IHRydWUsIHRvYXN0TWVzc2FnZTogJ1Byb2R1Y3QgVXBsb2FkZWQgU3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjonLCBlcnJvcilcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2R1Y3QgVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyBgL2FwaS9wcm9kdWN0cy9hZGRgXHJcbiAgICAgICAgLy8gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHtcclxuICAgICAgICAvLyAgICAgZm9ybURhdGFcclxuICAgICAgICAvLyB9LCB7XHJcbiAgICAgICAgLy8gICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiB0aGlzLnN0YXRlLnRva2VuIH1cclxuICAgICAgICAvLyB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIC8vICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAvLyAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dUb2FzdDogdHJ1ZSwgdG9hc3RNZXNzYWdlOiAnUHJvZHVjdCBVcGRhdGVkIFN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yKVxyXG4gICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzYWdlKVxyXG4gICAgICAgIC8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjonLCBlcnJvcilcclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgYWxlcnQoJ1Byb2R1Y3QgVXBkYXRlIGZhaWxlZCcpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgIGhhbmRsZVNhdmVDdXN0b21GaWVsZHNCdG5DbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1ZhcmlhYmxlUHJvZHVjdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXkuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmN1c3RvbV9maWVsZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXksIGN1c3RvbUZpZWxkc0FycmF5OiBbXSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUHJvZHVjdCBDYXRlZ29yeVxyXG4gICAgaGFuZGxlUHJvZHVjdENhdGVnb3J5Q2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gW11cclxuICAgICAgICBsZXQgX2lkID0gbnVsbFxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2F0ZWdvcmllc19saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGFiZWwgPT0gZWxlbWVudC5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9pZCA9IGVsZW1lbnQuX2lkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3ViX2NhdGVnb3JpZXNfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2F0ZWdvcnlfaWQgPT0gX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yeTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzdWJfY2F0ZWdvcnlfb3B0aW9uczogYXJyYXksXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0U3ViQ2F0ZWdvcnk6IFtdLFxyXG4gICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcnlEaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBfaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlUHJvZHVjdFN1YkNhdGVnb3J5Q2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IF9pZCA9IG51bGxcclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yeV9vcHRpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGFiZWwgPT0gZWxlbWVudC5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9pZCA9IGVsZW1lbnQuX2lkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFN1YkNhdGVnb3J5OiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHN1YkNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiBfaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERhbmdlcm91cyBHb29kc1xyXG4gICAgaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UgPSAoZSwgbmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY29weUFycmF5LnB1c2goeyB2YWx1ZTogbmFtZSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhbmdlcm91c0dvb2RzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9kdWN0IFRhZ3NcclxuICAgIGhhbmRsZVByb2R1Y3RUYWdDaGFuZ2UgPSAoYXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RUYWdzOiBhcnIgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBhc3luYyBmaWxlU2VsZWN0ZWRIYW5kbGVyKGUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IFsuLi50aGlzLnN0YXRlLmZpbGVzLCAuLi5lLnRhcmdldC5maWxlc10gfSlcclxuXHJcbiAgICAgICAgbGV0IGFycmF5ID0gW11cclxuICAgICAgICB0aGlzLnN0YXRlLmZpbGVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goVVJMLmNyZWF0ZU9iamVjdFVSTChlbGVtZW50KSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VQcmV2aWV3QXJyYXk6IGFycmF5IH0pXHJcbiAgICB9XHJcbiAgICBkZWxldGVJbWFnZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZmlsZXMpXHJcbiAgICAgICAgY29uc3QgaW1nQ29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5pbWFnZVByZXZpZXdBcnJheSlcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGltZ0NvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiBjb3B5QXJyYXksIGltYWdlUHJldmlld0FycmF5OiBpbWdDb3B5QXJyYXkgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc1VwZGF0ZVByb2R1Y3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU6IHRoaXMucHJvcHMucHJvZHVjdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5wcm9kdWN0X2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlOiB0aGlzLnByb3BzLnByb2R1Y3RfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdTogdGhpcy5wcm9wcy5za3UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlOiB0aGlzLnByb3BzLnByb2R1Y3RfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrOiB0aGlzLnByb3BzLnByb2R1Y3RfaW5fc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWU6IHRoaXMucHJvcHMucHJvZHVjdF9icmFuZF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF9pbWFnZV9saW5rOnRoaXMucHJvcHMucHJvZHVjdF9pbWFnZV9saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eTogdGhpcy5wcm9wcy5wcm9kdWN0X3dhcnJhbnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZTogdGhpcy5wcm9wcy53YXJyYW50eV90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudDogdGhpcy5wcm9wcy5wcm9kdWN0X2Rpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZTogdGhpcy5wcm9wcy5wdXJjaGFzZV9ub3RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF92YXJpYXRpb25zOnRoaXMucHJvcHMucHJvZHVjdF92YXJpYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHQ6IHRoaXMucHJvcHMucHJvZHVjdF93ZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoOiB0aGlzLnByb3BzLmRpbWVuc2lvbl9sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGg6IHRoaXMucHJvcHMuZGltZW5zaW9uX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodDogdGhpcy5wcm9wcy5kaW1lbnNpb25faGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlczogdGhpcy5wcm9wcy5zaGlwcGluZ19jaGFyZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlOiB0aGlzLnByb3BzLmhhbmRsaW5nX2ZlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZTogJ3NpbXBsZS1wcm9kdWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9jazogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW1hZ2VfbGluazogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdmFyaWF0aW9uczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXM6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbV9maWVsZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c19nb29kczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3RhZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yeSA9PSAnJyB8fCB0aGlzLnN0YXRlLnByb2R1Y3RTdWJDYXRlZ29yeSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0Q2F0ZWdvcnkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUVycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0U3ViQ2F0ZWdvcnkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJDYXRlZ29yeUVycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZXMucHJvZHVjdF90eXBlICE9ICd2YXJpYWJsZS1wcm91Y3QnICYmICh2YWx1ZXMucHJvZHVjdF9wcmljZSA9PSAnJyB8fCB2YWx1ZXMucHJvZHVjdF9pbl9zdG9jayA9PSAnJyB8fCB0aGlzLnN0YXRlLmZpbGVzID09ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNWYXJpYXRpb25zU2F2ZWQgPT0gZmFsc2UgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuY2F0ZWdvcnlfaWQgPSB0aGlzLnN0YXRlLmNhdGVnb3J5X2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnN1Yl9jYXRlZ29yeV9pZCA9IHRoaXMuc3RhdGUuc3ViX2NhdGVnb3J5X2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfdGFncyA9IHRoaXMuc3RhdGUucHJvZHVjdFRhZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmRhbmdlcm91c19nb29kcyA9IHRoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNWYXJpYWJsZVByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF9pbWFnZV9saW5rID0gdGhpcy5zdGF0ZS5maWxlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuY3VzdG9tX2ZpZWxkcyA9IHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lml0ZW0uZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHVzaCh7IG5hbWU6IGUubmFtZSwgdmFsdWU6IGUudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtXzEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmN1c3RvbV9maWVsZHMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fMS5wdXNoKHsgbmFtZTogZS5uYW1lLCB2YWx1ZTogZS52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh7IGl0ZW06IGl0ZW0sIGN1c3RvbV9maWVsZHM6IGl0ZW1fMSwgcHJpY2U6IGVsZW1lbnQucHJpY2UsIHN0b2NrOiBlbGVtZW50LnN0b2NrLCBpbWFnZV9saW5rOiBlbGVtZW50LmltYWdlX2xpbmsgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3ZhcmlhdGlvbnMgPSBhcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51cGxvYWRQcm9kdWN0KHZhbHVlcywgdGhpcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0OiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yeTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTdWJDYXRlZ29yeTogJycsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeURpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJTdWJDYXRlZ29yeURpc2FibGVkOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YkNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGFnczogW10sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eVR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYXRpb25zU2F2ZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VzdG9tIEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHNBcnJheTogW10sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYW5nZXJvdXMgR29vZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzR29vZHNBcnJheTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIHRvdWNoZWQsIGlzVmFsaWQsIGVycm9ycywgaGFuZGxlQmx1ciwgaXNTdWJtaXR0aW5nXHJcbiAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVSb3cgaWNvbj17ZmFQbHVzfSB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzVXBkYXRlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXt7IG1hcmdpbjogJyAwJSAyJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBjbGFzc05hbWU9XCJtci1hdXRvXCIgb25DbGljaz17dGhpcy5wcm9wcy5iYWNrfT5CYWNrPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT4ge3RoaXMucHJvcHMucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLnZpZXd9PiBWaWV3IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9e3RoaXMucHJvcHMuZGVsZXRlfT4gRGVsZXRlIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93VG9hc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J1N1Y2Nlc3MnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXt0aGlzLnN0YXRlLnRvYXN0TWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbm5hbWU9e2ZhVGh1bWJzVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiMwMGIzMDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQ6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dWYXJpYXRpb25zRXJyb3JBbGVydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXsnUGxlYXNlIEFkZC9TYXZlIFZhcmlhdGlvbnMgRmlyc3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29ubmFtZT17ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCIjZmYzMzMzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXsnRW50ZXIgUHJpY2UvU3RvY2svSW1hZ2UocykgaW4gR2VuZXJhbCBUYWIgRmlyc3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29ubmFtZT17ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCIjZmYzMzMzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMSUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs5fSBtZD17OX0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgTmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXt7IG1hcmdpbjogJzAuNSUgMiUgMiUgMiUnLCBwYWRkaW5nOiAnMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgTmFtZTxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJvZHVjdF9uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZXJyb3JzLnByb2R1Y3RfbmFtZSAmJiB0b3VjaGVkLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBOYW1lICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IERpc2NyaXB0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydQcm9kdWN0IERpc2NydXB0aW9uJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJvZHVjdF9kZXNjcmlwdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2Vycm9ycy5wcm9kdWN0X2Rlc2NyaXB0aW9uICYmIHRvdWNoZWQucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wcm9kdWN0X2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBEYXRhIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVXBkYXRlUHJvZHVjdD17dGhpcy5wcm9wcy5pc1VwZGF0ZVByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzX2xpc3Q9e3RoaXMuc3RhdGUuZmllbGRzX2xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGVIYW5kbGVyPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGVfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF90eXBlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfcHJpY2UgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2VfdG91Y2hlZD17dG91Y2hlZC5wcm9kdWN0X3ByaWNlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfaW5fc3RvY2sgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja19lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X2luX3N0b2NrfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWVfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF9icmFuZF9uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X2JyYW5kX25hbWV9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlU2VsZWN0ZWRIYW5kbGVyPXt0aGlzLmZpbGVTZWxlY3RlZEhhbmRsZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVByZXZpZXdBcnJheT17dGhpcy5zdGF0ZS5pbWFnZVByZXZpZXdBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJbWFnZT17dGhpcy5kZWxldGVJbWFnZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3dhcnJhbnR5IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHlfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF93YXJyYW50eX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZV92YWx1ZXM9e3ZhbHVlcy53YXJyYW50eV90eXBlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGVfZXJyb3JzPXtlcnJvcnMud2FycmFudHlfdHlwZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudF92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2Rpc2NvdW50IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnRfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9kaXNjb3VudH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X3ZhbHVlcz17dmFsdWVzLnNrdSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3VfZXJyb3JzPXtlcnJvcnMuc2t1fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3dlaWdodCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X3dlaWdodH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25fbGVuZ3RoIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9sZW5ndGhfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX2xlbmd0aH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl93aWR0aCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGhfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX3dpZHRofVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl9oZWlnaHQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodF9lcnJvcnM9e2Vycm9ycy5kaW1lbnNpb25faGVpZ2h0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX3ZhbHVlcz17dmFsdWVzLnNoaXBwaW5nX2NoYXJnZXMgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlc19lcnJvcnM9e2Vycm9ycy5zaGlwcGluZ19jaGFyZ2VzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGluZ19mZWVfdmFsdWVzPXt2YWx1ZXMuaGFuZGxpbmdfZmVlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV9lcnJvcnM9e2Vycm9ycy5oYW5kbGluZ19mZWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGVfdmFsdWVzPXt2YWx1ZXMucHVyY2hhc2Vfbm90ZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX2Vycm9ycz17ZXJyb3JzLnB1cmNoYXNlX25vdGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2xvckNoYW5nZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdENvbG9yQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTaXplQ2hhbmdlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0U2l6ZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5PXt0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYXJpYXRpb25zQXJyYXk9eyhhcnIpID0+IHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGFyciB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYXJpYXRpb25zU2F2ZWQ9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhdGlvbnNTYXZlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgRGF0YSBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQ3VzdG9tIEZpZWxkcyBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0N1c3RvbSBGaWVsZHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNfbGlzdD17dGhpcy5zdGF0ZS5maWVsZHNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkc0FycmF5SGFuZGxlcj17KGFycikgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkc0FycmF5OiBhcnIgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlQ3VzdG9tRmllbGRzPXt0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSA9PSAnJyAmJiB0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0ID09IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDdXN0b21GaWVsZHNIYW5kbGVyPXt0aGlzLmhhbmRsZVNhdmVDdXN0b21GaWVsZHNCdG5DbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIEN1c3RvbSBGaWVsZHMgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBDYXRlZ29yeSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBDYXRlZ29yaWVzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkNhdGVnb3J5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jYXRlZ29yeUVycm9yRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dElkPXsnMSd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17R2xvYmFsU3R5bGVTaGVldC5yZWFjdF9zZWxlY3Rfc3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDYXRlZ29yeUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNhdGVnb3JpZXNfbGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0Q2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U3ViIENhdGVnb3J5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdWJDYXRlZ29yeUVycm9yRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dElkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtHbG9iYWxTdHlsZVNoZWV0LnJlYWN0X3NlbGVjdF9zdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdFN1YkNhdGVnb3J5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuc3ViX2NhdGVnb3J5X29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdFN1YkNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdWIgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlEaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzE1MHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgYXRlZ29yeSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRGFuZ2Vyb3VzIEdvb2RzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydEYW5nZXJvdXMgR29vZHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90X3NwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm90IFNwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSAmJiB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICdOb3QtU3BlY2lmaWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ05vdC1TcGVjaWZpZWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjZXJhbWljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDZXJhbWljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5ICYmIHRoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUgPT0gJ0NlcmFtaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnQ2VyYW1pYycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSAmJiB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICdHbGFzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdHbGFzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZXRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSAmJiB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICdNZXRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdNZXRhbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYXN0aWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsYXN0aWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkgJiYgdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSAnUGxhc3RpYycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdQbGFzdGljJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2ZEYW5nZXJvdXMgR29vZHMgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgVGFncyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBUYWdzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0VGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBEcm9wZG93bkluZGljYXRvcjogbnVsbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e0dsb2JhbFN0eWxlU2hlZXQucmVhY3Rfc2VsZWN0X3N0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdFRhZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGFuZCBwcmVzcyBlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzE1MHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBUYWdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZvcm0gU3VibWl0IEJ0biBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30gYmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAnVXBsb2FkaW5nJyA6ICdVcGxvYWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiIHNpemU9XCJzbVwiIC8+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgRm9ybSBTdWJtaXQgQnRuIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWRCb3JkZXJEaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjREMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQm9yZGVyRGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrID5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIHZhcmlhdGlvbnNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXc7Il19 */
/*@ sourceURL=C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new.js */`)));
  }

}

const styles = {
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
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    alignItems: 'center',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].card_header_background}`
  },
  buttons: {
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_12__["default"].primry_color}`,
    border: 'none',
    fontSize: '10px'
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

/***/ "./src/sdk/core/authentication-service.js":
/*!************************************************!*\
  !*** ./src/sdk/core/authentication-service.js ***!
  \************************************************/
/*! exports provided: saveTokenToStorage, getDecodedTokenFromStorage, getTokenFromStorage, removeTokenFromStorage, chectAuth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTokenToStorage", function() { return saveTokenToStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecodedTokenFromStorage", function() { return getDecodedTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenFromStorage", function() { return getTokenFromStorage; });
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
// const path = 'https://muhalikweb.herokuapp.com';
const path = 'http://localhost:5000';
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
  body_color: '#F1F1F1',
  // body_color: '#DDE1E3',
  // body_color: '#F0F0F0',
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

/***/ 6:
/*!**********************************!*\
  !*** multi ./src/pages/admin.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MudassirR\Desktop\Muhalik\New folder\muhalikweb\src\pages\admin.js */"./src/pages/admin.js");


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

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });