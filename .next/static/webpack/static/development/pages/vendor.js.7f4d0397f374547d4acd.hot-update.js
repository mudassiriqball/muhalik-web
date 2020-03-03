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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]),
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
    style: styles.body,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + (drawerClasses || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "tabs",
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
    style: styles.image_div,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]),
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
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/index",
    style: styles.muhalik,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, " Vendor "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "dashboard",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTachometerAlt"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), "Dashboard", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "products",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faProductHunt"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "Products", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "inventory",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWarehouse"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "Inventory", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "bulkUpload",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUpload"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), "Bulk Upload", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "discountCoupons",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), "Discount", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "orders",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTags"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), "Orders", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "reports",
    style: styles.tab_link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChartBar"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), "Reports", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"],
    style: styles.forword_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    style: styles.navbar,
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    style: styles.drawerBtn,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "side_tab_toogle_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.buttons,
    onClick: props.drawerClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))), __jsx("div", {
    style: styles.drawerBtn,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "tabs mr-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: styles.buttons,
    onClick: props.ClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
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
      lineNumber: 126
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: "side_drawer_searchBtn",
    style: styles.buttons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"],
    alignRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
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
      lineNumber: 142
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), "My Profile"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), "Feedback"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandsHelping"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), "Help?"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
    style: styles.dropDown_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), "Logout")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4034683520", [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color]]]) + " " + "tab_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_products__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "inventory",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_inventory__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "bulkUpload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_bulk_upload__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "discountCoupons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_discounts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_orders__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx(_dashboard_tabs_content_reports__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4034683520",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color],
    __self: this
  }, ".drawer_btn.__jsx-style-dynamic-selector{margin:0% 1% 0% 0%;}.tabs_side_drawer.__jsx-style-dynamic-selector{display:none;}.tabs_side_drawer.open.__jsx-style-dynamic-selector{backgroung:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, ";display:block;}.hover.__jsx-style-dynamic-selector{background:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color, ";color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].body_color, ";border-top:0.5px solid #636583;}.hover.__jsx-style-dynamic-selector:hover{background:#30313E;}.side_tab_toogle_btn.__jsx-style-dynamic-selector{margin:0%;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}@media (max-width:991px){.tabs.__jsx-style-dynamic-selector{display:none;}.tab_content.__jsx-style-dynamic-selector{display:none;}}@media (min-width:992px){.side_tab_toogle_btn.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxGWVBcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtdGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTWlCLEFBR3lDLEFBR1AsQUFHNEIsQUFJRCxBQUtyQixBQUl4QixBQUV1QixBQUtILEFBR0UsQUFLQSxVQWZyQixHQWZBLEFBdUJJLEFBR0EsQUFLQSxLQWJXLENBckJmLEFBZUEsVUFPQSxXQWhCa0IsQUFJcUIsY0FIdkMscUJBSW1DLCtCQUNuQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcRllQXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZSwgTmF2LCBOYXZiYXIsIERyb3Bkb3duLCBCdXR0b25Hcm91cCwgRm9ybSwgQ29udGFpbmVyLCBJbnB1dEdyb3VwLCBCdXR0b24sIFNwaW5uZXIsIFRhYiwgUm93LCBDb2wsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2VhcmNoLCBmYUJhcnMsIGZhQ2hldnJvblJpZ2h0LCBmYVRhY2hvbWV0ZXJBbHQsIGZhVXBsb2FkLCBmYUhhbmRzSGVscGluZywgZmFVc2VyLCBmYVVzZXJzLCBmYUxpc3RBbHQsIGZhV2FyZWhvdXNlLCBmYVRhZ3MsIGZhUGVyY2VudCwgZmFDaGFydEJhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L2Rhc2hib2FyZCc7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvcHJvZHVjdHMnO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vZGFzaGJvYXJkLXRhYnMtY29udGVudC9pbnZlbnRvcnknO1xyXG5pbXBvcnQgRGlzY291bnRzIGZyb20gJy4vZGFzaGJvYXJkLXRhYnMtY29udGVudC9kaXNjb3VudHMnO1xyXG5pbXBvcnQgUmVwb3J0cyBmcm9tICcuL2Rhc2hib2FyZC10YWJzLWNvbnRlbnQvcmVwb3J0cyc7XHJcbmltcG9ydCBCdWxrVXBsb2FkIGZyb20gJy4vZGFzaGJvYXJkLXRhYnMtY29udGVudC9idWxrLXVwbG9hZCc7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9kYXNoYm9hcmQtdGFicy1jb250ZW50L29yZGVycyc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZFRhYnMgPSBwcm9wcyA9PiB7XHJcbiAgICBsZXQgZHJhd2VyQ2xhc3NlcyA9IFwidGFic19zaWRlX2RyYXdlclwiO1xyXG4gICAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgICAgICBkcmF3ZXJDbGFzc2VzID0gXCJ0YWJzX3NpZGVfZHJhd2VyIG9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUYWIuQ29udGFpbmVyIGlkPVwiZGFzaGJvYXJkLXRhYnNcIiBkZWZhdWx0QWN0aXZlS2V5PVwiZGFzaGJvYXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNob3cvSGlkZSBUYWJzICYgVGFicy1Db250ZW50IHdoZW4gc2NyZWVuIFN3aXRjaGVzIHRvIExhcmdlL01lZGl1bSxTbWFsbCxFeHRyYS1TbWFsbCBEZXZpY2VzKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RyYXdlckNsYXNzZXN9IHN0eWxlPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaG93L0hpZGUgVGFicyBTSWRlIERyYXdlciBpbiBMZy1EZXZpY2VzIHdoZW4gYmFyIGJ0biBDbGlja2VkKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUYWJzIFNpZGUgRHJhd2VyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtblwiIHZhcmlhbnQ9XCJwaWxsc1wiIHN0eWxlPXt7IG1pbldpZHRoOiAnMzIwcHgnLCBtYXhXaWR0aDogJzMyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gc3R5bGU9e3N0eWxlcy5pbWFnZV9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvaW5kZXhcIiBzdHlsZT17c3R5bGVzLm11aGFsaWt9PiBWZW5kb3IgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9pbmRleFwiIHN0eWxlPXtzdHlsZXMubXVoYWxpa30+IFZlbmRvciAvTmF2Lkxpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJkYXNoYm9hcmRcIiBzdHlsZT17c3R5bGVzLnRhYl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVGFjaG9tZXRlckFsdH0gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInByb2R1Y3RzXCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJpbnZlbnRvcnlcIiBzdHlsZT17c3R5bGVzLnRhYl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2FyZWhvdXNlfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmZvcndvcmRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiYnVsa1VwbG9hZFwiIHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVcGxvYWR9IHN0eWxlPXtzdHlsZXMuZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1bGsgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImRpc2NvdW50Q291cG9uc1wiIHN0eWxlPXtzdHlsZXMudGFiX2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUYWdzfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuZm9yd29yZF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJvcmRlcnNcIiBzdHlsZT17c3R5bGVzLnRhYl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVGFnc30gc3R5bGU9e3N0eWxlcy5mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJyZXBvcnRzXCIgc3R5bGU9e3N0eWxlcy50YWJfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoYXJ0QmFyfSBzdHlsZT17c3R5bGVzLmZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBvcnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5mb3J3b3JkX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBUYWJzIFNpZGUgRHJhd2VyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogVG9vbGJhciAmIFRhYnMgQ29udGVudHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRvb2xiYXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIHN0eWxlPXtzdHlsZXMubmF2YmFyfSB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNob3cvSGlkZSBiYXIgYnRuIHdoaWxlIHNjcmVlbiBzd2l0Y2hlcyB0byBMYXJnZSB0byBTbWFsbCxNZWRpdW0sRXh0cmEtU21hbGwgRGV2aWNlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZV90YWJfdG9vZ2xlX2J0blwiIHN0eWxlPXtzdHlsZXMuZHJhd2VyQnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9uc30gb25DbGljaz17cHJvcHMuZHJhd2VyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IHN0eWxlPXtzdHlsZXMuc2VhcmNoX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQmFycyBCdG4gdG8gU2hvdy9IaWRlIFRhYnMgU2RlIERyYXdlciBpbiBMYXJnZSBEZXZpY2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzIG1yLXNtLTRcIiBzdHlsZT17c3R5bGVzLmRyYXdlckJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbnN9IG9uQ2xpY2s9e3Byb3BzLkNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSBzdHlsZT17c3R5bGVzLnNlYXJjaF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlYXJjaCBCYXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBpbmxpbmUgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5zZWFyY2hfYmFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci14cy0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpZGVfZHJhd2VyX3NlYXJjaGJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaWRlX2RyYXdlcl9zZWFyY2hiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cInNpZGVfZHJhd2VyX3NlYXJjaEJ0blwiIHN0eWxlPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSBzdHlsZT17c3R5bGVzLnNlYXJjaF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQWNjb3VudCBTZXR0aW5nIERyb3Bkb3duICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGFzPXtCdXR0b25Hcm91cH0gYWxpZ25SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHNpemU9XCJzbVwiIHNwbGl0IHZhcmlhbnQ9XCJsaWdodFwiIGlkPVwiZHJvcGRvd24tc3BsaXRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbm9uZScsIGJvcmRlcjogJ25vbmUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZWRiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIYW5kc0hlbHBpbmd9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWxwP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFRvb2xiYXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUYWIgQ29udGVudCBmb3IgTGFyZ2UgRGV2aWNlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cImludmVudG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50b3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJidWxrVXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdWxrVXBsb2FkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJkaXNjb3VudENvdXBvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2NvdW50cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiLlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwib3JkZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlcnMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT1cInJlcG9ydHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydHMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgVGFiIENvbnRlbnQgZm9yIExhcmdlIERldmljZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiB0aGUgVG9vbGJhciAmIFRhYnMgQ29tcG9uZW50cyAqL31cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L1RhYi5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmRyYXdlcl9idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCUgMSUgMCUgMCUgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRhYnNfc2lkZV9kcmF3ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGFic19zaWRlX2RyYXdlci5vcGVue1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmc6ICAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNjM2NTgzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhvdmVyOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzAzMTNFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNpZGVfdGFiX3Rvb2dsZV9idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAudGFicyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGFiX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlX3RhYl90b29nbGVfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGltYWdlX2Rpdjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJzAuNXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyJSdcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwcHgnXHJcbiAgICB9LFxyXG4gICAgbXVoYWxpazoge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgYm9keToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICB9LFxyXG4gICAgbmF2YmFyOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxJSAxJScsXHJcbiAgICB9LFxyXG4gICAgZHJhd2VyQnRuOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxJScsXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgIH0sXHJcbiAgICBjb2w6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMHB4JyxcclxuICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzhweCcsXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoX2Jhcjoge1xyXG4gICAgICAgIGZsZXg6ICcxJyxcclxuICAgIH0sXHJcbiAgICB0YWJfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogJzglJyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnOCUnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCA4JSAwcHggMTIlJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgZm9yd29yZF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICc4cHggNSUgMHB4IDBweCcsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTZweCcsXHJcbiAgICB9LFxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFRhYnM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\FYP\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-tabs.js */")));
};

var styles = {
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
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_13__["default"].admin_primry_color),
    fontSize: '16px',
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
//# sourceMappingURL=vendor.js.7f4d0397f374547d4acd.hot-update.js.map