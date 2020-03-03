webpackHotUpdate("static\\development\\pages\\vendor.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-tabs.js":
/*!*****************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-tabs.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-tabs-content/dashboard */ "./src/pages/components/vendor/dashboard/dashboard-tabs-content/dashboard.js");
/* harmony import */ var _dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-tabs-content/products */ "./src/pages/components/vendor/dashboard/dashboard-tabs-content/products.js");
/* harmony import */ var _dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-tabs-content/inventory */ "./src/pages/components/vendor/dashboard/dashboard-tabs-content/inventory.js");
/* harmony import */ var _dashboard_tabs_content_discounts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-tabs-content/discounts */ "./src/pages/components/vendor/dashboard/dashboard-tabs-content/discounts.js");
/* harmony import */ var _dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-tabs-content/reports */ "./src/pages/components/vendor/dashboard/dashboard-tabs-content/reports.js");
/* harmony import */ var _dashboard_tabs_content_bulk_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-tabs-content/bulk-upload */ "./src/pages/components/vendor/dashboard/dashboard-tabs-content/bulk-upload.js");
/* harmony import */ var _dashboard_tabs_content_orders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-tabs-content/orders */ "./src/pages/components/vendor/dashboard/dashboard-tabs-content/orders.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-tabs.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var DashboardTabs = function DashboardTabs(props) {
  var drawerClasses = "tabs_side_drawer";

  if (props.show) {
    drawerClasses = "tabs_side_drawer open";
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    id: "dashboard-tabs",
    defaultActiveKey: "dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + (drawerClasses || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    style: styles.body,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "flex-column",
    variant: "pills",
    style: {
      minWidth: '320px',
      maxWidth: '320px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    style: {
      background: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
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
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "dashboard",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), "Dashboard", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "products",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), "Products", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "inventory",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), "Inventory", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "bulkUpload",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), "Bulk Upload", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "discountCoupons",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), "Discount", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "orders",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), "Orders", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "reports",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), "Reports", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    style: styles.navbar,
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    style: styles.drawerBtn,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "side_tab_toogle_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.buttons,
    onClick: props.drawerClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }))), __jsx("div", {
    style: styles.drawerBtn,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "tabs mr-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.buttons,
    onClick: props.ClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: styles.search_bar,
    className: "mr-xs-2",
    type: "text",
    placeholder: "Search here",
    "aria-describedby": "side_drawer_searchbar",
    name: "side_drawer_searchbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: "side_drawer_searchBtn",
    style: styles.buttons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"],
    alignRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
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
      lineNumber: 141
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), "My Profile"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandsHelping"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), "Logout")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3473315015", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "tab_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "inventory",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "bulkUpload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_bulk_upload__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "discountCoupons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_discounts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_orders__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3473315015",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color],
    __self: this
  }, ".drawer_btn.__jsx-style-dynamic-selector{margin:0% 1% 0% 0%;}.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer.open.__jsx-style-dynamic-selector{backgroung:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, ";display:block;}.hover.__jsx-style-dynamic-selector{background:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, ";color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color, ";}.hover.__jsx-style-dynamic-selector:hover{background:#30313E;}.side_tab_toogle_btn.__jsx-style-dynamic-selector{margin:0%;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}@media (max-width:991px){.tabs.__jsx-style-dynamic-selector{display:none;}.tab_content.__jsx-style-dynamic-selector{display:none;}}@media (min-width:992px){.side_tab_toogle_btn.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtdGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtTWlCLEFBR3lDLEFBR1AsQUFHNEIsQUFJRCxBQUlyQixBQUl4QixBQUV1QixBQUtILEFBR0UsQUFLQSxVQWZyQixHQWRBLEFBc0JJLEFBR0EsQUFLQSxLQWJXLENBcEJmLEFBY0EsVUFPQSxXQWZrQixBQUlxQixjQUh2QyxxQkFJQSIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcRllQXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZSwgTmF2LCBOYXZiYXIsIERyb3Bkb3duLCBCdXR0b25Hcm91cCwgRm9ybSwgQ29udGFpbmVyLCBJbnB1dEdyb3VwLCBCdXR0b24sIFNwaW5uZXIsIFRhYiwgUm93LCBDb2wsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2VhcmNoLCBmYUJhcnMsIGZhQ2hldnJvblJpZ2h0LCBmYVRhY2hvbWV0ZXJBbHQsIGZhVXBsb2FkLCBmYUhhbmRzSGVscGluZywgZmFVc2VyLCBmYVVzZXJzLCBmYUxpc3RBbHQsIGZhV2FyZWhvdXNlLCBmYVRhZ3MsIGZhUGVyY2VudCwgZmFDaGFydEJhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L2Rhc2hib2FyZCc7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvcHJvZHVjdHMnO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vZGFzaGJvYXJkLXRhYnMtY29udGVudC9pbnZlbnRvcnknO1xyXG5pbXBvcnQgRGlzY291bnRzIGZyb20gJy4vZGFzaGJvYXJkLXRhYnMtY29udGVudC9kaXNjb3VudHMnO1xyXG5pbXBvcnQgUmVwb3J0cyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvcmVwb3J0cyc7XHJcbmltcG9ydCBCdWxrVXBsb2FkIGZyb20gJy4vZGFzaGJvYXJkLXRhYnMtY29udGVudC9idWxrLXVwbG9hZCc7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L29yZGVycyc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZFRhYnMgPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQgZHJhd2VyQ2xhc3NlcyA9IFwidGFic19zaWRlX2RyYXdlclwiO1xyXG4gICAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgICAgICBkcmF3ZXJDbGFzc2VzID0gXCJ0YWJzX3NpZGVfZHJhd2VyIG9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUYWIuQ29udGFpbmVyIGlkPVwiZGFzaGJvYXJkLXRhYnNcIiBkZWZhdWx0QWN0aXZlS2V5PVwiZGFzaGJvYXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNob3cvSGlkZSBUYWJzICYgVGFicy1Db250ZW50IHdoZW4gc2NyZWVuIFN3aXRjaGVzIHRvIExhcmdlL01lZGl1bSxTbWFsbCxFeHRyYS1TbWFsbCBEZXZpY2VzKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RyYXdlckNsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU2hvdy9IaWRlIFRhYnMgU0lkZSBEcmF3ZXIgaW4gTGctRGV2aWNlcyB3aGVuIGJhciBidG4gQ2xpY2tlZCovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIiBzdHlsZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRhYnMgU2lkZSBEcmF3ZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImZsZXgtY29sdW1uXCIgdmFyaWFudD1cInBpbGxzXCIgc3R5bGU9e3sgbWluV2lkdGg6ICczMjBweCcsIG1heFdpZHRoOiAnMzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBzdHlsZT17e2JhY2tncm91bmQ6ICd3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvaW5kZXhcIiBzdHlsZT17c3R5bGVzLm11aGFsaWt9PiBWZW5kb3IgL05hdi5MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiZGFzaGJvYXJkXCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRhY2hvbWV0ZXJBbHR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJwcm9kdWN0c1wiIHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiaW52ZW50b3J5XCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdhcmVob3VzZX0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52ZW50b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImJ1bGtVcGxvYWRcIiBzdHlsZT17c3R5bGVzLnRhYl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXBsb2FkfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdWxrIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJkaXNjb3VudENvdXBvbnNcIiBzdHlsZT17c3R5bGVzLnRhYl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVGFnc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwib3JkZXJzXCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRhZ3N9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwicmVwb3J0c1wiIHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGFydEJhcn0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwb3J0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgVGFicyBTaWRlIERyYXdlciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFRvb2xiYXIgJiBUYWJzIENvbnRlbnRzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUb29sYmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNvbGxhcHNlT25TZWxlY3QgZXhwYW5kPVwibGdcIiBzdHlsZT17c3R5bGVzLm5hdmJhcn0gdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaG93L0hpZGUgYmFyIGJ0biB3aGlsZSBzY3JlZW4gc3dpdGNoZXMgdG8gTGFyZ2UgdG8gU21hbGwsTWVkaXVtLEV4dHJhLVNtYWxsIERldmljZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVfdGFiX3Rvb2dsZV9idG5cIiBzdHlsZT17c3R5bGVzLmRyYXdlckJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbnN9IG9uQ2xpY2s9e3Byb3BzLmRyYXdlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSBzdHlsZT17c3R5bGVzLnNlYXJjaF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJhcnMgQnRuIHRvIFNob3cvSGlkZSBUYWJzIFNkZSBEcmF3ZXIgaW4gTGFyZ2UgRGV2aWNlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicyBtci1zbS00XCIgc3R5bGU9e3N0eWxlcy5kcmF3ZXJCdG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b25zfSBvbkNsaWNrPXtwcm9wcy5DbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gc3R5bGU9e3N0eWxlcy5zZWFyY2hfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZWFyY2ggQmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaW5saW5lIGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuc2VhcmNoX2Jhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXIteHMtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaWRlX2RyYXdlcl9zZWFyY2hiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2lkZV9kcmF3ZXJfc2VhcmNoYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJzaWRlX2RyYXdlcl9zZWFyY2hCdG5cIiBzdHlsZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy5zZWFyY2hfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFjY291bnQgU2V0dGluZyBEcm9wZG93biAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBhcz17QnV0dG9uR3JvdXB9IGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBzaXplPVwic21cIiBzcGxpdCB2YXJpYW50PVwibGlnaHRcIiBpZD1cImRyb3Bkb3duLXNwbGl0XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGFuZHNIZWxwaW5nfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVscD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBUb29sYmFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGFiIENvbnRlbnQgZm9yIExhcmdlIERldmljZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJpbnZlbnRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludmVudG9yeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiYnVsa1VwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnVsa1VwbG9hZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiZGlzY291bnRDb3Vwb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNjb3VudHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cIm9yZGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJyZXBvcnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFRhYiBDb250ZW50IGZvciBMYXJnZSBEZXZpY2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgdGhlIFRvb2xiYXIgJiBUYWJzIENvbXBvbmVudHMgKi99XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5kcmF3ZXJfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAlIDElIDAlIDAlIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50YWJzX3NpZGVfZHJhd2VyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRhYnNfc2lkZV9kcmF3ZXIub3BlbntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5nOiAgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMxM0U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2lkZV90YWJfdG9vZ2xlX2J0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC50YWJzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50YWJfY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGVfdGFiX3Rvb2dsZV9idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgaW1hZ2VfZGl2OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgLy8gbWFyZ2luUmlnaHQ6ICcxcHgnLFxyXG4gICAgICAgIC8vIHBhZGRpbmc6ICcxMHB4J1xyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDBweCdcclxuICAgIH0sXHJcbiAgICBtdWhhbGlrOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgbmF2YmFyOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxJSAxJScsXHJcbiAgICB9LFxyXG4gICAgZHJhd2VyQnRuOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxJScsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgIH0sXHJcbiAgICBjb2w6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMHB4JyxcclxuICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzhweCcsXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoX2Jhcjoge1xyXG4gICAgICAgIGZsZXg6ICcxJyxcclxuICAgIH0sXHJcbiAgICB0YWJfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogJzglJyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnOCUnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCA4JSAwcHggMTIlJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgZm9yd29yZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICc4cHggNSUgMHB4IDBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTZweCcsXHJcbiAgICB9LFxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFRhYnM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-tabs.js */")));
};

var styles = {
  image_div: {
    background: 'white',
    width: '100%' // marginRight: '1px',
    // padding: '10px'

  },
  image: {
    width: '100px'
  },
  muhalik: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color),
    fontSize: '20px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    background: 'none'
  },
  body: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color)
  },
  navbar: {
    borderBottom: "1px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color),
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
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color),
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
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color),
    margin: '0px 8% 0px 12%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  forword_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color),
    margin: '8px 5% 0px 0px',
    "float": 'right',
    width: '10px',
    height: '10px',
    maxHeight: '10px',
    maxWidth: '10px'
  },
  search_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color),
    width: '16px',
    height: '16px',
    maxHeight: '16px',
    maxWidth: '16px'
  },
  dropDown_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color),
    margin: '0px 20px 0px 0px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DashboardTabs);

/***/ })

})
//# sourceMappingURL=vendor.js.74cbca5c1e9c6badb1ca.hot-update.js.map