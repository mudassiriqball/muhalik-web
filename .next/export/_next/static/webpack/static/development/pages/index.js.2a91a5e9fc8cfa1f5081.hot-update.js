webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/customer/toolbar/toolbar.js":
/*!**********************************************************!*\
  !*** ./src/pages/components/customer/toolbar/toolbar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var _overlay_opover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../overlay-opover */ "./src/pages/components/overlay-opover.js");


var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\customer\\toolbar\\toolbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var categoryArray = [{
  value: 'All'
}, {
  value: 'Machinay'
}, {
  value: 'Clothes'
}];

function Toolbar(props) {
  var _this = this;

  var loggedIn = false;
  var dashboard_href = '';

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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('All'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      searchType = _React$useState2[0],
      setSearchType = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      isCategoryOpen = _React$useState4[0],
      setIsCategoryOpen = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      isShops = _React$useState6[0],
      setIsShops = _React$useState6[1];

  function toggle() {
    setIsCategoryOpen(!isCategoryOpen);
  }

  function onMouseEnter() {
    setIsCategoryOpen(true);
  }

  function onMouseLeave() {
    setIsCategoryOpen(false);
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    style: {
      padding: '0%',
      margin: '0%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    style: styles.nav_bar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: styles.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 2,
    md: 4,
    sm: 12,
    xs: 12,
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1%',
      marginBottom: '1%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    fluid: true,
    style: {
      width: '50px',
      display: 'flex',
      marginLeft: '5%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }), __jsx("h5", {
    style: {
      marginLeft: '5%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + "text-center mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, "Muhalik")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 7,
    md: 8,
    sm: 12,
    xs: 12,
    style: styles.col,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    style: styles.search_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link,
    variant: "success",
    style: styles.search_type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 45
    }
  }, searchType), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Menu, {
    className: "super-colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 45
    }
  }, categoryArray.map(function (element, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
      key: index,
      onClick: function onClick() {
        return setSearchType(element.value);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 53
      }
    }, element.value);
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    style: styles.search_box,
    placeholder: "Search here",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 37
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Append, {
    style: styles.search_btn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSearch"],
    style: styles.search_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 41
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 3,
    md: 12,
    sm: 12,
    xs: 12,
    style: styles.col,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    style: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'mr-auto width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "./login",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 45
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserPlus"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 45
    }
  }, "Signin/up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faGlobe"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 41
    }
  }, "Eng")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faFileInvoiceDollar"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 41
    }
  }, "Orders")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faLuggageCart"],
    style: styles.nav_cart_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }, "Cart")), loggedIn ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"], {
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: "muhalik.jpg",
      roundedCircle: true,
      fluid: true,
      style: {
        width: '40px',
        maxWidth: '40px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 45
      }
    }),
    id: "nav-dropdown",
    alignRight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Item, {
    href: dashboard_href,
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 49
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Item, {
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 49
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 45
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Item, {
    onClick: function onClick() {
      return Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_12__["removeTokenFromStorage"])();
    },
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 49
    }
  }, "Logout"))) : null)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    expand: "md",
    style: {
      padding: '0px 0.3% 0.3% 0.3%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Collapse, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    style: styles.nav_bar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: {
      border: "1px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].card_header_background),
      width: '100%'
    },
    noGutters: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: "auto",
    md: "auto",
    sm: "auto",
    xs: "auto",
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    className: "d-inline-block",
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave,
    show: isCategoryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link,
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faListAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 49
    }
  }, "Categories")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Menu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 49
    }
  }, "Header"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 49
    }
  }, "Action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 49
    }
  }, "Another Action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 49
    }
  }, "Another Action"))), __jsx("div", {
    style: {
      color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color)
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 41
    }
  }, "|"), isShops ? // <OverlayPopover title={'Find Shops'} content={'Here you will get shops'}>
  __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    style: styles.flex_row,
    onClick: function onClick() {
      return setIsShops(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faStoreAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 49
    }
  }, "Shops"), __jsx("div", {
    style: {
      width: '70px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 49
    }
  })) //  </OverlayPopover>
  : // <OverlayPopover title={'Find Products'} content={'Here you will get our products'}>
  __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    style: styles.flex_row,
    onClick: function onClick() {
      return setIsShops(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faProductHunt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 49
    }
  }, "Products"), __jsx("div", {
    style: {
      width: '70px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 49
    }
  })) // </OverlayPopover>
  ), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHandsHelping"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 45
    }
  }, "About Us")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEdit"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 45
    }
  }, "Feedback")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEdit"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 45
    }
  }, "Help"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 41
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 45
    }
  }, "Sell With Muhalik")), __jsx("div", {
    style: {
      color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color)
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 41
    }
  }, "|"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    style: styles.flex_row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["297077486", [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 45
    }
  }, "Get Muhalik's App"))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "297077486",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color],
    __self: this
  }, ".nav_link_text.__jsx-style-dynamic-selector{text-align:center;white-space:nowrap;overflow:hidden;font-size:14px;color:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, ";}.nav_link_text.__jsx-style-dynamic-selector:hover,.second_nav_link_text.__jsx-style-dynamic-selector:hover{color:black;}.second_nav_link_text.__jsx-style-dynamic-selector{text-align:center;white-space:nowrap;overflow:hidden;font-size:14px;margin-left:5px;margin-right:8px;color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color, ";}@media (max-width:992px){.width.__jsx-style-dynamic-selector{max-width:0px;display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhclxcdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TmlCLEFBRzJDLEFBUXZCLEFBRXVCLEFBVUEsWUFadEIsRUFjRyxJQXJCb0IsQUFVQSxTQVduQixVQXBCZ0IsQUFVQSxnQkFURCxBQVVBLGVBUnBCLEFBU3FCLGdCQUNDLGlCQUV0QixFQVpDLGlDQVlBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhclxcdG9vbGJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBOYXZiYXIsIE5hdiwgRm9ybSwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEltYWdlLCBCdXR0b24sXHJcbiAgICBOYXZEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIENhcmQsIERyb3Bkb3duLCBCdXR0b25Hcm91cCxcclxuICAgIFJvdywgQ29sLCBPdmVybGF5VHJpZ2dlciwgUG9wb3ZlclxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVNlYXJjaCwgZmFVc2VyUGx1cywgZmFMYW5ndWFnZSwgZmFQb3dlck9mZiwgZmFVc2VyLFxyXG4gICAgZmFDYXJ0UGx1cywgZmFIYW5kc0hlbHBpbmcsIGZhUGVuLCBmYVNpZ25PdXRBbHQsIGZhR2xvYmUsXHJcbiAgICBmYUx1Z2dhZ2VDYXJ0LCBmYUZpbGVJbnZvaWNlRG9sbGFyLCBmYUxpc3RBbHQsIGZhRWRpdCxcclxuICAgIGZhU3RvcmVBbHQsIGZhQ2hldnJvbkRvd24sXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYVByb2R1Y3RIdW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyByZW1vdmVUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSdcclxuaW1wb3J0IE92ZXJsYXlQb3BvdmVyIGZyb20gJy4uLy4uL292ZXJsYXktb3BvdmVyJ1xyXG5cclxuY29uc3QgY2F0ZWdvcnlBcnJheSA9IFt7IHZhbHVlOiAnQWxsJyB9LCB7IHZhbHVlOiAnTWFjaGluYXknIH0sIHsgdmFsdWU6ICdDbG90aGVzJyB9XVxyXG5mdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcblxyXG4gICAgbGV0IGxvZ2dlZEluID0gZmFsc2VcclxuICAgIGxldCBkYXNoYm9hcmRfaHJlZiA9ICcnXHJcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gJycpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdjdXN0b21lcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2luZGV4J1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAndmVuZG9yJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vdmVuZG9yJ1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9hZG1pbidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVHlwZSwgc2V0U2VhcmNoVHlwZV0gPSBSZWFjdC51c2VTdGF0ZSgnQWxsJylcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTaG9wcywgc2V0SXNTaG9wc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4oIWlzQ2F0ZWdvcnlPcGVuKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3Blbih0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3BlbihmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17eyBwYWRkaW5nOiAnMCUnLCBtYXJnaW46ICcwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBzdHlsZT17c3R5bGVzLm5hdl9iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXtzdHlsZXMucm93fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsyfSBtZD17NH0gc209ezEyfSB4cz17MTJ9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMSUnLCBtYXJnaW5Cb3R0b206ICcxJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luTGVmdDogJzUlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNSUnIH19IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1yLWF1dG9cIj5NdWhhbGlrPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17N30gbWQ9ezh9IHNtPXsxMn0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgc3R5bGU9e3N0eWxlcy5zZWFyY2hfZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gYXM9e0J1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gdmFyaWFudD1cInN1Y2Nlc3NcIiBzdHlsZT17c3R5bGVzLnNlYXJjaF90eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwic3VwZXItY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeUFycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hUeXBlKGVsZW1lbnQudmFsdWUpfT57ZWxlbWVudC52YWx1ZX08L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17c3R5bGVzLnNlYXJjaF9ib3h9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQgc3R5bGU9e3N0eWxlcy5zZWFyY2hfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IHN0eWxlPXtzdHlsZXMuc2VhcmNoX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5jb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgc3R5bGU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byB3aWR0aCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nLi9sb2dpbicgY2xhc3NOYW1lPSdtci1hdXRvJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+U2lnbmluL3VwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5Fbmc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0nbXItYXV0bycgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmlsZUludm9pY2VEb2xsYXJ9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPk9yZGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUx1Z2dhZ2VDYXJ0fSBzdHlsZT17c3R5bGVzLm5hdl9jYXJ0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkNhcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBtYXhXaWR0aDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGlkPVwibmF2LWRyb3Bkb3duXCIgYWxpZ25SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtkYXNoYm9hcmRfaHJlZn0gc3R5bGU9e3N0eWxlcy5mbGV4X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBzdHlsZT17c3R5bGVzLmZsZXhfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKX0gc3R5bGU9e3N0eWxlcy5mbGV4X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBleHBhbmQ9XCJtZFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMC4zJSAwLjMlIDAuMyUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBzdHlsZT17c3R5bGVzLm5hdl9iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgYm9yZGVyOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsIHdpZHRoOiAnMTAwJScgfX0gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPSdhdXRvJyBtZD0nYXV0bycgc209J2F1dG8nIHhzPSdhdXRvJyBzdHlsZT17c3R5bGVzLmZsZXhfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9ja1wiIG9uTW91c2VPdmVyPXtvbk1vdXNlRW50ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gc3R5bGU9e3N0eWxlcy5mbGV4X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+Q2F0ZWdvcmllczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSA+SGVhZGVyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSA+QWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzU2hvcHMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxPdmVybGF5UG9wb3ZlciB0aXRsZT17J0ZpbmQgU2hvcHMnfSBjb250ZW50PXsnSGVyZSB5b3Ugd2lsbCBnZXQgc2hvcHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17c3R5bGVzLmZsZXhfcm93fSBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3BzKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdG9yZUFsdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNob3BzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWR0aCcgc3R5bGU9e3sgd2lkdGg6ICc3MHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICA8L092ZXJsYXlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8T3ZlcmxheVBvcG92ZXIgdGl0bGU9eydGaW5kIFByb2R1Y3RzJ30gY29udGVudD17J0hlcmUgeW91IHdpbGwgZ2V0IG91ciBwcm9kdWN0cyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIHN0eWxlPXtzdHlsZXMuZmxleF9yb3d9IG9uQ2xpY2s9eygpID0+IHNldElzU2hvcHModHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5Qcm9kdWN0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkdGgnIHN0eWxlPXt7IHdpZHRoOiAnNzBweCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L092ZXJsYXlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17c3R5bGVzLmZsZXhfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8T3ZlcmxheVBvcG92ZXIgdGl0bGU9eydLbm93IEFib3V0IFVzJ30gY29udGVudD17J1dlIGFyZSBwcm92aWRpbmcgeW91IHRoZSBiZXN0IHNlcnZpY2VzLCBrbm93IGFib3V0IHVzJ30+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgc3R5bGU9e3N0eWxlcy5mbGV4X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhhbmRzSGVscGluZ30gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+QWJvdXQgVXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9PdmVybGF5UG9wb3Zlcj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE92ZXJsYXlQb3BvdmVyIHRpdGxlPXsnRmVlZGJhY2snfSBjb250ZW50PXsnR2l2ZSB5b3VyIGZlZWRiYWNrIGFuZCBoZWxwIHVzIHRvIGltcHJvdmUnfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17c3R5bGVzLmZsZXhfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+RmVlZGJhY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9PdmVybGF5UG9wb3Zlcj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17c3R5bGVzLmZsZXhfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+SGVscDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3N0eWxlcy5mbGV4X3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE92ZXJsYXlQb3BvdmVyIHRpdGxlPXsnU2VsbCBZb3VyIFByb2R1Y3RzIHdpdGggTXVoYWxpayd9IGNvbnRlbnQ9eydSZWdpc3RlciB5b3VyIHNob3AgYW5kIHNlbGwgeW91ciBwcm9kdWN0cyBvbmxpbmUnfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17c3R5bGVzLmZsZXhfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNlbGwgV2l0aCBNdWhhbGlrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvT3ZlcmxheVBvcG92ZXI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT58PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE92ZXJsYXlQb3BvdmVyIHRpdGxlPXsnQXBwIGZvciBBbmRyaW9kICYgSU9TJ30gY29udGVudD17J0luc3RhbGwgdGhlIGFwcCBhbmQgY29udGludWUgeW91ciBzaG9wcGluZyB3aXRoIG1vYmlsZSBhcHAnfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17c3R5bGVzLmZsZXhfcm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkdldCBNdWhhbGlrJ3MgQXBwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvT3ZlcmxheVBvcG92ZXI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfbGlua190ZXh0OmhvdmVyLCAuc2Vjb25kX25hdl9saW5rX3RleHQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2tcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZF9uYXZfbGlua190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aWR0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5Ub29sYmFyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMnXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlMaXN0OiByZXNwb25zZS5kYXRhLmRhdGEgfSlcclxuICAgICAgICByZXR1cm4geyBzZWFyY2hDYXRlZ29yeTogcmVzcG9uc2UuZGF0YS5kYXRhIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJycpXHJcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgcm93OiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtYXJnaW46ICcwJScsXHJcbiAgICAgICAgcGFkZGluZzogJzAlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBjb2w6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcwLjUlJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcwLjUlJyxcclxuICAgIH0sXHJcbiAgICBuYXZfYmFyOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgZmxleF9yb3c6IHtcclxuICAgICAgICAvLyBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICBtYXJnaW46ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoX3R5cGU6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXJSaWdodDogJ25vbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwcHggMTVweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE4cHgnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICcxOHB4JyxcclxuICAgIH0sXHJcbiAgICBzZWFyY2hfYm94OiB7XHJcbiAgICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICAvLyBib3JkZXJMZWZ0OiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICBzZWFyY2hfYnRuOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBwYWRkaW5nOiAnMHB4IDE1cHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzE4cHgnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnMThweCcsXHJcbiAgICB9LFxyXG5cclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgIH0sXHJcblxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTh4JyxcclxuICAgIH0sXHJcbiAgICBzZWFyY2hfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG4gICAgbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcyNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI1cHgnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzFweCdcclxuICAgIH0sXHJcbiAgICBuYXZfY2FydF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMjhweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjhweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjhweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyOHB4JyxcclxuICAgIH0sXHJcbiAgICBkcm9wRG93bl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCAyMHB4IDBweCAwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHB4JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRfbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcyMnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIycHgnLFxyXG4gICAgfSxcclxuICAgIGZhQ2hldnJvbkRvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhclxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\toolbar\\\\toolbar.js */")));
}

Toolbar.getInitialProps = function _callee(ctx) {
  var url, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_10__["default"].PATH + '/api/categories/categories';
          _context.prev = 1;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(url));

        case 4:
          response = _context.sent;
          return _context.abrupt("return", {
            searchCategory: response.data.data
          });

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          return _context.abrupt("return", null);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]], Promise);
};

var styles = {
  row: {
    width: '100%',
    margin: '0%',
    padding: '0%',
    display: 'flex',
    alignItems: 'center'
  },
  col: {
    marginTop: '0.5%',
    marginBottom: '0.5%'
  },
  nav_bar: {
    padding: '0%',
    width: '100%'
  },
  nav: {
    display: 'flex',
    alignItems: 'center'
  },
  flex_row: {
    // fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '0px'
  },
  search_type: {
    background: 'none',
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color),
    borderRight: 'none',
    color: 'black',
    padding: '0px 15px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '18px',
    borderBottomLeftRadius: '18px'
  },
  search_box: {
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color) // borderLeft: 'none'

  },
  search_btn: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color),
    padding: '0px 15px',
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: '18px',
    borderBottomRightRadius: '18px'
  },
  nav_link: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '13px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color),
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18x'
  },
  search_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primary_text_color),
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  nav_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color),
    width: '25px',
    height: '25px',
    maxHeight: '25px',
    maxWidth: '25px',
    marginBottom: '1px'
  },
  nav_cart_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color),
    width: '28px',
    height: '28px',
    maxHeight: '28px',
    maxWidth: '28px'
  },
  dropDown_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color),
    margin: '0px 20px 0px 0px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  second_nav_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color),
    width: '22px',
    height: '22px',
    maxHeight: '22px',
    maxWidth: '22px'
  },
  faChevronDown_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].primry_color),
    width: '12px',
    height: '12px',
    maxHeight: '12px',
    maxWidth: '12px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ })

})
//# sourceMappingURL=index.js.2a91a5e9fc8cfa1f5081.hot-update.js.map