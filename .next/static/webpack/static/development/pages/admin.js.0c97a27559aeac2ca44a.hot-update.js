webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/components/admin/dashboard-side-drawer.js":
/*!*********************************************************!*\
  !*** ./pages/components/admin/dashboard-side-drawer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminLayout */ "./pages/components/admin/AdminLayout.js");
/* harmony import */ var _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminStyleSheet */ "./pages/components/admin/adminStyleSheet.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _admin_dashboard_vendors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-dashboard/vendors */ "./pages/components/admin/admin-dashboard/vendors.js");
/* harmony import */ var _admin_dashboard_customers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-dashboard/customers */ "./pages/components/admin/admin-dashboard/customers.js");
/* harmony import */ var _admin_dashboard_products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-dashboard/products */ "./pages/components/admin/admin-dashboard/products.js");
/* harmony import */ var _admin_dashboard_product_categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-dashboard/product-categories */ "./pages/components/admin/admin-dashboard/product-categories.js");
/* harmony import */ var _admin_dashboard_inventory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-dashboard/inventory */ "./pages/components/admin/admin-dashboard/inventory.js");
/* harmony import */ var _admin_dashboard_discount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-dashboard/discount */ "./pages/components/admin/admin-dashboard/discount.js");
/* harmony import */ var _admin_dashboard_commision__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-dashboard/commision */ "./pages/components/admin/admin-dashboard/commision.js");
/* harmony import */ var _admin_dashboard_reports__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-dashboard/reports */ "./pages/components/admin/admin-dashboard/reports.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\components\\admin\\dashboard-side-drawer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















var DashboardSideDrawer = function DashboardSideDrawer(props) {
  var drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  return __jsx("div", {
    className: "jsx-156185451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    style: {
      padding: '0px',
      margin: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-156185451" + " " + (drawerClasses || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-156185451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
    className: "flex-column",
    variant: "tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-156185451" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "one",
    onClick: props.click,
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPersonBooth"],
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].tabs_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), "Vendors"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-156185451" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "two",
    onClick: props.click,
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].tabs_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), "Customers"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-156185451" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "three",
    onClick: props.click,
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faProductHunt"],
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].tabs_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), "Products"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-156185451" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "four",
    onClick: props.click,
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faListAlt"],
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].tabs_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "Categories"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-156185451" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "five",
    onClick: props.click,
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWarehouse"],
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].tabs_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), "Inventory"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-156185451" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "six",
    onClick: props.click,
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTags"],
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].tabs_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), "Discounts"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-156185451" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "seven",
    onClick: props.click,
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPercent"],
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].tabs_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), "Commision"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-156185451" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "eight",
    onClick: props.click,
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChartBar"],
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].tabs_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), "Reports")))))), __jsx("div", {
    className: "jsx-156185451" + " " + "tabs_side_drawer_tab_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: "auto",
    style: {
      padding: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_admin_dashboard_vendors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_admin_dashboard_customers__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_admin_dashboard_products__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "four",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_admin_dashboard_product_categories__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "five",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_admin_dashboard_inventory__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "six",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_admin_dashboard_discount__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "seven",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_admin_dashboard_commision__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "eight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_admin_dashboard_reports__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "156185451",
    __self: this
  }, ".hover.jsx-156185451:hover{margin-left:10px;margin-right:-10px;margin-top:-4px;margin-bottom:4px;}.tabs_side_drawer.jsx-156185451{height:100%;background:white;box-shadow:1px 0px 7px rgba(0,0,0,0.5);position:fixed;top:1px;bottom:1px;left:0;width:60%;max-width:400px;z-index:200;-webkit-transform:translateX(-100% );-ms-transform:translateX(-100% );transform:translateX(-100% );-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.tabs_side_drawer.open.jsx-156185451{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}@media (max-width:991px){.tabs.jsx-156185451{display:none;}.tab_content.jsx-156185451{display:none;}}@media (min-width:992px){.side_tab_toogle_btn.jsx-156185451{display:none;}.tabs_side_drawer.jsx-156185451{display:none;}.tabs_side_drawer_tab_content.jsx-156185451{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkLXNpZGUtZHJhd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJaUIsQUFHMEMsQUFNTCxBQWNZLEFBS1QsQUFHRSxBQUtBLEFBR0EsQUFHQSxZQWhDQSxDQW1CakIsQUFHQSxBQUtBLEFBR0EsQUFHQSxJQXZDbUIsWUFPdUIsT0FOMUIsZ0JBQ0UsZ0JBTUgsRUFMbkIsYUFNWSxDQVdaLE9BVmUsV0FDSixPQUNHLFVBQ00sZ0JBQ0osWUFDaUIsbUdBQ00saUlBQ3ZDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkLXNpZGUtZHJhd2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi9BZG1pbkxheW91dCc7XHJcbmltcG9ydCBBZG1pblN0eWxlU2hlZXQgZnJvbSAnLi9hZG1pblN0eWxlU2hlZXQnO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFCYXJzLCBmYVBlcnNvbkJvb3RoLCBmYVVzZXJzLCBmYUxpc3RBbHQsIGZhV2FyZWhvdXNlLCBmYVRhZ3MsIGZhUGVyY2VudCwgZmFDaGFydEJhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCB7IE5hdiwgRm9ybSwgRm9ybUNvbnRyb2wsIEJ1dHRvbiwgU3Bpbm5lciwgVGFiLCBSb3csIENvbCwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmltcG9ydCBWZW5kb3JzIGZyb20gJy4vYWRtaW4tZGFzaGJvYXJkL3ZlbmRvcnMnO1xyXG5pbXBvcnQgQ3VzdG9tZXJzIGZyb20gJy4vYWRtaW4tZGFzaGJvYXJkL2N1c3RvbWVycyc7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL2FkbWluLWRhc2hib2FyZC9wcm9kdWN0cyc7XHJcbmltcG9ydCBQcm9kdWN0Q2F0ZWdvcmllcyBmcm9tICcuL2FkbWluLWRhc2hib2FyZC9wcm9kdWN0LWNhdGVnb3JpZXMnO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vYWRtaW4tZGFzaGJvYXJkL2ludmVudG9yeSc7XHJcbmltcG9ydCBEaXNjb3VudHMgZnJvbSAnLi9hZG1pbi1kYXNoYm9hcmQvZGlzY291bnQnO1xyXG5pbXBvcnQgQ29tbWlzaW9uIGZyb20gJy4vYWRtaW4tZGFzaGJvYXJkL2NvbW1pc2lvbic7XHJcbmltcG9ydCBSZXBvcnRzIGZyb20gJy4vYWRtaW4tZGFzaGJvYXJkL3JlcG9ydHMnO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkU2lkZURyYXdlciA9IHByb3BzID0+IHtcclxuICAgIGxldCBkcmF3ZXJDbGFzc2VzID0gXCJ0YWJzX3NpZGVfZHJhd2VyXCI7XHJcbiAgICBpZiAocHJvcHMuc2hvdykge1xyXG4gICAgICAgIGRyYXdlckNsYXNzZXMgPSBcInRhYnNfc2lkZV9kcmF3ZXIgb3BlblwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBpZD1cImRhc2hib2FyZC10YWJzXCIgZGVmYXVsdEFjdGl2ZUtleT1cIm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JywgbWFyZ2luOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogU2lkZSBEcmF3ZXIgQ29tcG9uZW50cyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZHJhd2VyQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImZsZXgtY29sdW1uXCIgdmFyaWFudD1cInRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LmJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJvbmVcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gc3R5bGU9e0FkbWluU3R5bGVTaGVldC5saW5rX2NvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVyc29uQm9vdGh9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQudGFic19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZW5kb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5ib3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidHdvXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJzfSBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LnRhYnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LmJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJ0aHJlZVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LmxpbmtfY29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e0FkbWluU3R5bGVTaGVldC50YWJzX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LmJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJmb3VyXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQudGFic19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LmJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJmaXZlXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdhcmVob3VzZX0gc3R5bGU9e0FkbWluU3R5bGVTaGVldC50YWJzX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludmVudG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5ib3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwic2l4XCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRhZ3N9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQudGFic19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3VudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQuYm9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInNldmVuXCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlcmNlbnR9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQudGFic19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21taXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQuYm9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImVpZ2h0XCIgb25DbGljaz17cHJvcHMuY2xpY2t9IHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoYXJ0QmFyfSBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LnRhYnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwb3J0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic19zaWRlX2RyYXdlcl90YWJfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXtcImF1dG9cIn0gc3R5bGU9e3sgcGFkZGluZzogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwib25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZW5kb3JzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJ0d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwidGhyZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJmb3VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2F0ZWdvcmllcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiZml2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50b3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJzaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2NvdW50cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwic2V2ZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1pc2lvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiB0aGUgU2lkZSBEcmF3ZXIgQ29tcG9uZW50cyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggN3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlci5vcGVue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYl9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlX3RhYl90b29nbGVfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYnNfc2lkZV9kcmF3ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlcl90YWJfY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRTaWRlRHJhd2VyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\components\\\\admin\\\\dashboard-side-drawer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardSideDrawer);

/***/ })

})
//# sourceMappingURL=admin.js.0c97a27559aeac2ca44a.hot-update.js.map