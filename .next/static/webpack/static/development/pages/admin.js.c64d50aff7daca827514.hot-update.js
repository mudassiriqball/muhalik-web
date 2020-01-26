webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/components/admin/dashboard.js":
/*!*********************************************!*\
  !*** ./pages/components/admin/dashboard.js ***!
  \*********************************************/
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
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\pages\\components\\admin\\dashboard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















var Dashboard = function Dashboard(props) {
  return __jsx("div", {
    className: "jsx-3809458220",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: "jsx-3809458220" + " " + "side_tab_toogle_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].side_drawer_search_bars,
    onClick: props.drawerClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBars"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    type: "text",
    placeholder: "Search",
    className: "mr-sm-6",
    style: {
      flex: '1',
      margin: '0px 5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].side_drawer_search_bars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    style: {
      padding: '0px',
      margin: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3809458220" + " " + "tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: 2,
    style: {
      padding: '0px',
      maxWidth: '280px',
      minWidth: '110px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
    className: "flex-column",
    variant: "tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].search_bar,
    type: "text",
    placeholder: "Search",
    className: "mr-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].search_btn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-3809458220" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "one",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPersonBooth"],
    style: {
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "Vendors"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-3809458220" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "two",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"],
    style: {
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), "Customers"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-3809458220" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "three",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faProductHunt"],
    style: {
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), "Products"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-3809458220" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "four",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faListAlt"],
    style: {
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), "Categories"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-3809458220" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "five",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWarehouse"],
    style: {
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), "Inventory"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-3809458220" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "six",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTags"],
    style: {
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), "Discounts"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-3809458220" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "seven",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPercent"],
    style: {
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), "Commision"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].border,
    className: "jsx-3809458220" + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"].Link, {
    eventKey: "eight",
    style: _adminStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].link_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChartBar"],
    style: {
      marginRight: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), "Reports")))))), __jsx("div", {
    className: "jsx-3809458220" + " " + "tab_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: "auto",
    style: {
      padding: '5px',
      margin: '0px',
      minWidth: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_admin_dashboard_vendors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_admin_dashboard_customers__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_admin_dashboard_products__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "four",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_admin_dashboard_product_categories__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "five",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_admin_dashboard_inventory__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "six",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_admin_dashboard_discount__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "seven",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_admin_dashboard_commision__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
    eventKey: "eight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_admin_dashboard_reports__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3809458220",
    __self: this
  }, ".hover.jsx-3809458220:hover{margin-left:10px;margin-right:-10px;margin-top:-4px;margin-bottom:4px;}@media (max-width:991px){.tabs.jsx-3809458220{display:none;}.tab_content.jsx-3809458220{display:none;}}@media (min-width:992px){.side_tab_toogle_btn.jsx-3809458220{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNKYSxBQUdzQyxBQU9GLEFBR0UsQUFLQSxhQVBqQixBQUdBLEFBS0EsSUFmbUIsbUJBQ0gsZ0JBQ0Usa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICcuL0FkbWluTGF5b3V0JztcclxuaW1wb3J0IEFkbWluU3R5bGVTaGVldCBmcm9tICcuL2FkbWluU3R5bGVTaGVldCc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2VhcmNoLCBmYUJhcnMsIGZhUGVyc29uQm9vdGgsIGZhVXNlcnMsIGZhTGlzdEFsdCwgZmFXYXJlaG91c2UsIGZhVGFncywgZmFQZXJjZW50LCBmYUNoYXJ0QmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IHsgTmF2LCBGb3JtLCBGb3JtQ29udHJvbCwgQnV0dG9uLCBTcGlubmVyLCBUYWIsIFJvdywgQ29sLCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5cclxuaW1wb3J0IFZlbmRvcnMgZnJvbSAnLi9hZG1pbi1kYXNoYm9hcmQvdmVuZG9ycyc7XHJcbmltcG9ydCBDdXN0b21lcnMgZnJvbSAnLi9hZG1pbi1kYXNoYm9hcmQvY3VzdG9tZXJzJztcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vYWRtaW4tZGFzaGJvYXJkL3Byb2R1Y3RzJztcclxuaW1wb3J0IFByb2R1Y3RDYXRlZ29yaWVzIGZyb20gJy4vYWRtaW4tZGFzaGJvYXJkL3Byb2R1Y3QtY2F0ZWdvcmllcyc7XHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9hZG1pbi1kYXNoYm9hcmQvaW52ZW50b3J5JztcclxuaW1wb3J0IERpc2NvdW50cyBmcm9tICcuL2FkbWluLWRhc2hib2FyZC9kaXNjb3VudCc7XHJcbmltcG9ydCBDb21taXNpb24gZnJvbSAnLi9hZG1pbi1kYXNoYm9hcmQvY29tbWlzaW9uJztcclxuaW1wb3J0IFJlcG9ydHMgZnJvbSAnLi9hZG1pbi1kYXNoYm9hcmQvcmVwb3J0cyc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSBwcm9wcyA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBpZD1cImRhc2hib2FyZC10YWJzXCIgZGVmYXVsdEFjdGl2ZUtleT1cIm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFRvb2dsZSBCdXR0b24gQ29tcG9uZW50cyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZV90YWJfdG9vZ2xlX2J0blwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gaW5saW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQuc2lkZV9kcmF3ZXJfc2VhcmNoX2JhcnN9IG9uQ2xpY2s9e3Byb3BzLmRyYXdlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tNlwiIHN0eWxlPXt7IGZsZXg6ICcxJywgbWFyZ2luOiAnMHB4IDVweCcgfX0+PC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LnNpZGVfZHJhd2VyX3NlYXJjaF9iYXJzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEVuZCBvZiB0aGUgVG9vZ2xlIEJ1dHRvbiBDb21wb25lbnRzICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHgnLCBtYXJnaW46ICcwcHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogVGFicyBDb21wb25lbnRzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfSBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JywgbWF4V2lkdGg6ICcyODBweCcsIG1pbldpZHRoOiAnMTEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtblwiIHZhcmlhbnQ9J3RhYnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQuc2VhcmNoX2Jhcn0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTZcIj48L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQuc2VhcmNoX2J0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5ib3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwib25lXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5saW5rX2NvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVyc29uQm9vdGh9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZW5kb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5ib3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidHdvXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5saW5rX2NvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcnN9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5ib3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidGhyZWVcIiBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LmxpbmtfY29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5ib3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiZm91clwiIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgc3R5bGU9e0FkbWluU3R5bGVTaGVldC5ib3JkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiZml2ZVwiIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdhcmVob3VzZX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludmVudG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQuYm9yZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInNpeFwiIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRhZ3N9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3VudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LmJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJzZXZlblwiIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlcmNlbnR9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21taXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiBzdHlsZT17QWRtaW5TdHlsZVNoZWV0LmJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJlaWdodFwiIHN0eWxlPXtBZG1pblN0eWxlU2hlZXQubGlua19jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoYXJ0QmFyfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzIwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwb3J0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17XCJhdXRvXCJ9IHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBtYXJnaW46ICcwcHgnLCBtaW5XaWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVuZG9ycyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwidHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cInRocmVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiZm91clwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhdGVnb3JpZXMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cImZpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludmVudG9yeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwic2l4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNjb3VudHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cInNldmVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21taXNpb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cImVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgdGhlIFRhYnMgQ29tcG9uZW50cyAqL31cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L1RhYi5Db250YWluZXI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC50YWJzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50YWJfY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGVfdGFiX3Rvb2dsZV9idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\pages\\\\components\\\\admin\\\\dashboard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=admin.js.c64d50aff7daca827514.hot-update.js.map