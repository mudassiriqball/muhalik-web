webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/customer/toolbar.js":
/*!**************************************************!*\
  !*** ./src/pages/components/customer/toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");




var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\customer\\toolbar.js",
    _s = $RefreshSig$(),
    _this2 = undefined;



var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var categoryArray = [{
  value: 'All'
}, {
  value: 'Machinay'
}, {
  value: 'Clothes'
}];

function Toolbar(props) {
  _s();

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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState('All'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      searchType = _React$useState2[0],
      setSearchType = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      isCategoryOpen = _React$useState4[0],
      setIsCategoryOpen = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, {
    className: "p-0 m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
    className: "w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "align-items-center w-100",
    noGutters: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: 2,
    md: 3,
    sm: 12,
    xs: 12,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Brand, {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    fluid: true,
    style: {
      width: '50px',
      display: 'flex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }), __jsx("h5", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + "text-center pl-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, "Muhalik")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: 6,
    md: 5,
    sm: 12,
    xs: 12,
    className: "align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"].Prepend, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ButtonGroup"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"],
    variant: "outline-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 45
    }
  }, searchType), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Menu, {
    className: "super-colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 45
    }
  }, categoryArray.map(function (element, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
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
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    placeholder: "Search here",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 37
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "outline-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 41
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'categories_lg_md align-items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "d-inline-flex align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "./login",
    className: "mr-auto  align-items-center",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 49
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUserPlus"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 49
    }
  }, "Signin/up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGlobe"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 45
    }
  }, "Eng")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faFileInvoiceDollar"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  }, "Orders")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faLuggageCart"],
    style: styles.nav_cart_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 45
    }
  }, "Cart")), loggedIn ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"], {
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      src: "muhalik.jpg",
      roundedCircle: true,
      fluid: true,
      style: {
        width: '35px',
        maxWidth: '40px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 49
      }
    }),
    id: "nav-dropdown",
    alignRight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: dashboard_href,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 53
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: "./vendor",
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 53
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 53
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 49
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    onClick: function onClick() {
      return Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_13__["removeTokenFromStorage"])();
    },
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 53
    }
  }, "Logout"))) : null))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
    expand: "md",
    className: " m-2 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    className: "p-1 m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'categories_sm_xs',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'd-inline-flex align-items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave,
    show: isCategoryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link,
    className: "p-2",
    style: {
      color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faListAlt"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 41
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Menu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, "Header"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 41
    }
  }, "Action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 41
    }
  }, "Another Action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 41
    }
  }, "Another Action"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "./login",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 41
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUserPlus"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGlobe"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faFileInvoiceDollar"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCartPlus"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }), loggedIn ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"], {
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      src: "muhalik.jpg",
      roundedCircle: true,
      fluid: true,
      style: {
        width: '30px',
        maxWidth: '30px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 41
      }
    }),
    id: "nav-dropdown",
    alignRight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: dashboard_href,
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 45
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 45
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    onClick: function onClick() {
      return Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_13__["removeTokenFromStorage"])();
    },
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 45
    }
  }, "Logout"))) : null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Collapse, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "w-100 d-flex align-items-center",
    style: {
      border: "0.5px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'categories_lg_md',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave,
    show: isCategoryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faListAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 45
    }
  }, "Categories")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Menu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 45
    }
  }, "Header"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 45
    }
  }, "Action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 45
    }
  }, "Another Action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 45
    }
  }, "Another Action")))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'vertical_bar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 33
    }
  }, "|"), isShops ? __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex",
    onClick: function onClick() {
      return setIsShops(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faStoreAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 45
    }
  }, "Shops"), __jsx("div", {
    style: {
      width: '70px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 45
    }
  }))) : __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex",
    onClick: function onClick() {
      return setIsShops(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faProductHunt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 45
    }
  }, "Products"), __jsx("div", {
    style: {
      width: '70px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 45
    }
  }))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faHandsHelping"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 41
    }
  }, "About Us"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faEdit"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 41
    }
  }, "Feedback"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faEdit"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 41
    }
  }, "Help"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 33
    }
  }), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 41
    }
  }, "Sell With Muhalik"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'vertical_bar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 33
    }
  }, "|"), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1432698191", [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 41
    }
  }, "Get Muhalik's App")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1432698191",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color],
    __self: this
  }, ".nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:14px;color:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, ";}.nav_link_text.__jsx-style-dynamic-selector:hover,.second_nav_link_text.__jsx-style-dynamic-selector:hover{color:black;}.second_nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:14px;color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, ";}@media (max-width:992px){.width.__jsx-style-dynamic-selector{max-width:0px;display:none;}}.vertical_bar.__jsx-style-dynamic-selector{color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color, ";}.categories_sm_xs.__jsx-style-dynamic-selector{display:none;}@media (max-width:767px){.vertical_bar.__jsx-style-dynamic-selector{display:none;}.categories_sm_xs.__jsx-style-dynamic-selector{display:block;}.categories_lg_md.__jsx-style-dynamic-selector{display:none;}}@media (max-width:450px){.no_width_sm.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErUmlCLEFBRzRDLEFBTXhCLEFBRXdCLEFBTUQsQUFNdkIsQUFFa0IsQUFJSSxBQUdDLEFBR0QsQUFNbEIsWUFoQ0gsQ0FpQkEsQUFJSSxBQU1BLEFBS0EsQ0F0QkQsQUFjQyxLQTdCZSxBQVFBLFFBT2YsT0FiTCxBQVFBLENBU0Msa0NBakJBLEFBUUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXE5ldyBmb2xkZXJcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGN1c3RvbWVyXFx0b29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIE5hdmJhciwgTmF2LCBGb3JtLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgSW1hZ2UsIEJ1dHRvbixcclxuICAgIE5hdkRyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgQ2FyZCwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwLFxyXG4gICAgUm93LCBDb2wsIE92ZXJsYXlUcmlnZ2VyLCBQb3BvdmVyXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93bixcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJ1xyXG5cclxuY29uc3QgY2F0ZWdvcnlBcnJheSA9IFt7IHZhbHVlOiAnQWxsJyB9LCB7IHZhbHVlOiAnTWFjaGluYXknIH0sIHsgdmFsdWU6ICdDbG90aGVzJyB9XVxyXG5mdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcblxyXG4gICAgbGV0IGxvZ2dlZEluID0gZmFsc2VcclxuICAgIGxldCBkYXNoYm9hcmRfaHJlZiA9ICcnXHJcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gJycpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdjdXN0b21lcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2luZGV4J1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAndmVuZG9yJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vdmVuZG9yJ1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9hZG1pbidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVHlwZSwgc2V0U2VhcmNoVHlwZV0gPSBSZWFjdC51c2VTdGF0ZSgnQWxsJylcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTaG9wcywgc2V0SXNTaG9wc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4oIWlzQ2F0ZWdvcnlPcGVuKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3Blbih0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3BlbihmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdwLTAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsyfSBtZD17M30gc209ezEyfSB4cz17MTJ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGRpc3BsYXk6ICdmbGV4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGwtM1wiPk11aGFsaWs8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17Nn0gbWQ9ezV9IHNtPXsxMn0geHM9ezEyfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGFzPXtCdXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17QnV0dG9ufSB2YXJpYW50PSdvdXRsaW5lLXN1Y2Nlc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJzdXBlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5QXJyYXkubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFR5cGUoZWxlbWVudC52YWx1ZSl9PntlbGVtZW50LnZhbHVlfTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmUtc3VjY2Vzcyc+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX2xnX21kIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0nbXItYXV0byAgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+U2lnbmluL3VwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZX0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkVuZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPk9yZGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMdWdnYWdlQ2FydH0gc3R5bGU9e3N0eWxlcy5uYXZfY2FydF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+Q2FydDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzM1cHgnLCBtYXhXaWR0aDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBpZD1cIm5hdi1kcm9wZG93blwiIGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9e2Rhc2hib2FyZF9ocmVmfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPScuL3ZlbmRvcicgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKX0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBvd2VyT2ZmfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPScgbS0yIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPSdwLTEgbS0wJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcmllc19zbV94cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvbk1vdXNlT3Zlcj17b25Nb3VzZUVudGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0gc2hvdz17aXNDYXRlZ29yeU9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwicC0yXCIgc3R5bGU9e3sgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gPkhlYWRlcjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtID5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtPkFub3RoZXIgQWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0ncC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0ncC0yJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZX0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5Fbmc8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0ncC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbGVJbnZvaWNlRG9sbGFyfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT0ncC0yJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJ0UGx1c30gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5DYXJ0PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIG1heFdpZHRoOiAnMzBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBpZD1cIm5hdi1kcm9wZG93blwiIGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtkYXNoYm9hcmRfaHJlZn0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSgpfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvZ291dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J3ctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInIHN0eWxlPXt7IGJvcmRlcjogYDAuNXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcmllc19sZ19tZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvbk1vdXNlT3Zlcj17b25Nb3VzZUVudGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5DYXRlZ29yaWVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtID5IZWFkZXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gPkFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmVydGljYWxfYmFyJz58PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzU2hvcHMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4XCIgb25DbGljaz17KCkgPT4gc2V0SXNTaG9wcyhmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdG9yZUFsdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+U2hvcHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkdGgnIHN0eWxlPXt7IHdpZHRoOiAnNzBweCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleFwiIG9uQ2xpY2s9eygpID0+IHNldElzU2hvcHModHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQcm9kdWN0SHVudH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+UHJvZHVjdHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkdGgnIHN0eWxlPXt7IHdpZHRoOiAnNzBweCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIYW5kc0hlbHBpbmd9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+QWJvdXQgVXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVkaXR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+RmVlZGJhY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVkaXR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+SGVscDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNlbGwgV2l0aCBNdWhhbGlrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJ0aWNhbF9iYXInPnw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+R2V0IE11aGFsaWsncyBBcHA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZCA+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmtfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfbGlua190ZXh0OmhvdmVyLCAuc2Vjb25kX25hdl9saW5rX3RleHQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2tcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZF9uYXZfbGlua190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aWR0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudmVydGljYWxfYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3JpZXNfc21feHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX3NtX3hzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX2xnX21kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub193aWR0aF9zbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBPdmVybHlQb3BvdmVyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8T3ZlcmxheVRyaWdnZXIgdHJpZ2dlcj17Wydob3ZlcicsICdmb2N1cyddfSBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXtcclxuICAgICAgICA8UG9wb3ZlciBpZD1cInBvcG92ZXItYmFzaWNcIj5cclxuICAgICAgICAgICAgPFBvcG92ZXIuVGl0bGUgYXM9XCJoNFwiPntwcm9wcy50aXRsZX08L1BvcG92ZXIuVGl0bGU+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudH1cclxuICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgfT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4pO1xyXG5cclxuXHJcblRvb2xiYXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL2NhdGVnb3JpZXMvY2F0ZWdvcmllcydcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKVxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUxpc3Q6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KVxyXG4gICAgICAgIHJldHVybiB7IHNlYXJjaENhdGVnb3J5OiByZXNwb25zZS5kYXRhLmRhdGEgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnJylcclxuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICB9LFxyXG5cclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxOHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE4eCcsXHJcbiAgICB9LFxyXG4gICAgbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcyNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI1cHgnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzFweCdcclxuICAgIH0sXHJcbiAgICBuYXZfY2FydF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMjhweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjhweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjhweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyOHB4JyxcclxuICAgIH0sXHJcbiAgICBkcm9wRG93bl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCAyMHB4IDBweCAwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHB4JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRfbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIycHgnLFxyXG4gICAgfSxcclxuICAgIGZhQ2hldnJvbkRvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG4gICAgc21hbGxfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjBweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyXHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\toolbar.js */")));
}

_s(Toolbar, "3Q4mnHzg+8OuMEs7Wrn6feCOW/c=");

_c = Toolbar;

var OverlyPopover = function OverlyPopover(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["OverlayTrigger"], {
    trigger: ['hover', 'focus'],
    placement: "bottom",
    overlay: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Popover"], {
      id: "popover-basic",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Popover"].Title, {
      as: "h4",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 13
      }
    }, props.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Popover"].Content, {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 13
      }
    }, props.content)),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 5
    }
  }, props.children);
};

_c2 = OverlyPopover;

Toolbar.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var url, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_11__["default"].PATH + '/api/categories/categories';
            _context.prev = 1;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(url);

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
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var styles = {
  nav_link: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '13px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color),
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18x'
  },
  nav_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color),
    width: '25px',
    height: '25px',
    maxHeight: '25px',
    maxWidth: '25px',
    marginBottom: '1px'
  },
  nav_cart_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color),
    width: '28px',
    height: '28px',
    maxHeight: '28px',
    maxWidth: '28px'
  },
  dropDown_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color),
    margin: '0px 20px 0px 0px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  second_nav_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color),
    marginRight: '3%',
    width: '22px',
    height: '22px',
    maxHeight: '22px',
    maxWidth: '22px'
  },
  faChevronDown_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color),
    width: '12px',
    height: '12px',
    maxHeight: '12px',
    maxWidth: '12px'
  },
  small_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_6__["default"].primry_color),
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

var _c, _c2;

$RefreshReg$(_c, "Toolbar");
$RefreshReg$(_c2, "OverlyPopover");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci90b29sYmFyLmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5QXJyYXkiLCJ2YWx1ZSIsIlRvb2xiYXIiLCJwcm9wcyIsImxvZ2dlZEluIiwiZGFzaGJvYXJkX2hyZWYiLCJ0b2tlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWFyY2hUeXBlIiwic2V0U2VhcmNoVHlwZSIsImlzQ2F0ZWdvcnlPcGVuIiwic2V0SXNDYXRlZ29yeU9wZW4iLCJpc1Nob3BzIiwic2V0SXNTaG9wcyIsInRvZ2dsZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIkdsb2JhbFN0eWxlU2hlZXQiLCJwcmltcnlfY29sb3IiLCJ3aWR0aCIsImRpc3BsYXkiLCJCdXR0b25Hcm91cCIsIkJ1dHRvbiIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInN0eWxlcyIsIm5hdl9saW5rIiwiZmFVc2VyIiwibmF2X2ZvbnRhd2Vzb21lIiwiZmFVc2VyUGx1cyIsImZhR2xvYmUiLCJmYUZpbGVJbnZvaWNlRG9sbGFyIiwiZmFMdWdnYWdlQ2FydCIsIm5hdl9jYXJ0X2ZvbnRhd2Vzb21lIiwibWF4V2lkdGgiLCJkcm9wRG93bl9mb250YXdlc29tZSIsInJlbW92ZVRva2VuRnJvbVN0b3JhZ2UiLCJmYVBvd2VyT2ZmIiwiTmF2IiwiTGluayIsImNvbG9yIiwiZmFMaXN0QWx0Iiwic21hbGxfZm9udGF3ZXNvbWUiLCJmYUNhcnRQbHVzIiwiYm9yZGVyIiwic2Vjb25kX25hdl9mb250YXdlc29tZSIsImZhU3RvcmVBbHQiLCJmYVByb2R1Y3RIdW50IiwiZmFIYW5kc0hlbHBpbmciLCJmYUVkaXQiLCJPdmVybHlQb3BvdmVyIiwidGl0bGUiLCJjb250ZW50IiwiY2hpbGRyZW4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ1cmwiLCJNdWhhbGlrQ29uZmlnIiwiUEFUSCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJzZWFyY2hDYXRlZ29yeSIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJmb250U2l6ZSIsImZvbnRhd2Vzb21lIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJmYUNoZXZyb25Eb3duX2ZvbnRhd2Vzb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUFDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQUQsRUFBbUI7QUFBRUEsT0FBSyxFQUFFO0FBQVQsQ0FBbkIsRUFBMEM7QUFBRUEsT0FBSyxFQUFFO0FBQVQsQ0FBMUMsQ0FBdEI7O0FBQ0EsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQTs7QUFFcEIsTUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxNQUFJQyxjQUFjLEdBQUcsRUFBckI7O0FBQ0EsTUFBSUYsS0FBSyxDQUFDRyxLQUFOLElBQWUsRUFBbkIsRUFBdUI7QUFDbkJGLFlBQVEsR0FBRyxLQUFYO0FBQ0gsR0FGRCxNQUVPLElBQUlELEtBQUssQ0FBQ0csS0FBTixJQUFlLFVBQW5CLEVBQStCO0FBQ2xDRixZQUFRLEdBQUcsSUFBWDtBQUNBQyxrQkFBYyxHQUFHLFNBQWpCO0FBQ0gsR0FITSxNQUdBLElBQUlGLEtBQUssQ0FBQ0csS0FBTixJQUFlLFFBQW5CLEVBQTZCO0FBQ2hDRixZQUFRLEdBQUcsSUFBWDtBQUNBQyxrQkFBYyxHQUFHLFVBQWpCO0FBQ0gsR0FITSxNQUdBLElBQUlGLEtBQUssQ0FBQ0csS0FBTixJQUFlLE9BQW5CLEVBQTRCO0FBQy9CRixZQUFRLEdBQUcsSUFBWDtBQUNBQyxrQkFBYyxHQUFHLFNBQWpCO0FBQ0g7O0FBZm1CLHdCQWlCZ0JFLDRDQUFL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LGFBQVMsRUFBRSxNQUxTO0FBTXBCdEMsWUFBUSxFQUFFO0FBTlUsR0F0Q2I7QUE4Q1gwQywyQkFBeUIsRUFBRTtBQUN2QnBDLFNBQUssWUFBS3hCLG1EQUFnQixDQUFDQyxZQUF0QixDQURrQjtBQUV2QkMsU0FBSyxFQUFFLE1BRmdCO0FBR3ZCcUQsVUFBTSxFQUFFLE1BSGU7QUFJdkJDLGFBQVMsRUFBRSxNQUpZO0FBS3ZCdEMsWUFBUSxFQUFFO0FBTGEsR0E5Q2hCO0FBcURYUSxtQkFBaUIsRUFBRTtBQUNmRixTQUFLLFlBQUt4QixtREFBZ0IsQ0FBQ0MsWUFBdEIsQ0FEVTtBQUVmQyxTQUFLLEVBQUUsTUFGUTtBQUdmcUQsVUFBTSxFQUFFLE1BSE87QUFJZkMsYUFBUyxFQUFFLE1BSkk7QUFLZnRDLFlBQVEsRUFBRTtBQUxLO0FBckRSLENBQWY7QUE4RGVsQyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWVlNTdiYWU0YWE2MTY1YWNmZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBOYXZiYXIsIE5hdiwgRm9ybSwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEltYWdlLCBCdXR0b24sXHJcbiAgICBOYXZEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIENhcmQsIERyb3Bkb3duLCBCdXR0b25Hcm91cCxcclxuICAgIFJvdywgQ29sLCBPdmVybGF5VHJpZ2dlciwgUG9wb3ZlclxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVNlYXJjaCwgZmFVc2VyUGx1cywgZmFMYW5ndWFnZSwgZmFQb3dlck9mZiwgZmFVc2VyLFxyXG4gICAgZmFDYXJ0UGx1cywgZmFIYW5kc0hlbHBpbmcsIGZhUGVuLCBmYVNpZ25PdXRBbHQsIGZhR2xvYmUsXHJcbiAgICBmYUx1Z2dhZ2VDYXJ0LCBmYUZpbGVJbnZvaWNlRG9sbGFyLCBmYUxpc3RBbHQsIGZhRWRpdCxcclxuICAgIGZhU3RvcmVBbHQsIGZhQ2hldnJvbkRvd24sXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYVByb2R1Y3RIdW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyByZW1vdmVUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSdcclxuXHJcbmNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbeyB2YWx1ZTogJ0FsbCcgfSwgeyB2YWx1ZTogJ01hY2hpbmF5JyB9LCB7IHZhbHVlOiAnQ2xvdGhlcycgfV1cclxuZnVuY3Rpb24gVG9vbGJhcihwcm9wcykge1xyXG5cclxuICAgIGxldCBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICBsZXQgZGFzaGJvYXJkX2hyZWYgPSAnJ1xyXG4gICAgaWYgKHByb3BzLnRva2VuID09ICcnKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSBmYWxzZVxyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnY3VzdG9tZXInKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9pbmRleCdcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ3ZlbmRvcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL3ZlbmRvcidcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ2FkbWluJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vYWRtaW4nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFR5cGUsIHNldFNlYXJjaFR5cGVdID0gUmVhY3QudXNlU3RhdGUoJ0FsbCcpXHJcbiAgICBjb25zdCBbaXNDYXRlZ29yeU9wZW4sIHNldElzQ2F0ZWdvcnlPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzU2hvcHMsIHNldElzU2hvcHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKCFpc0NhdGVnb3J5T3BlbilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZCA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0ncC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9J3ctMTAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCcgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17Mn0gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBkaXNwbGF5OiAnZmxleCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBsLTNcIj5NdWhhbGlrPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezZ9IG1kPXs1fSBzbT17MTJ9IHhzPXsxMn0gY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBhcz17QnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e0J1dHRvbn0gdmFyaWFudD0nb3V0bGluZS1zdWNjZXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwic3VwZXItY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeUFycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hUeXBlKGVsZW1lbnQudmFsdWUpfT57ZWxlbWVudC52YWx1ZX08L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lLXN1Y2Nlc3MnPlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcmllc19sZ19tZCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScuL2xvZ2luJyBjbGFzc05hbWU9J21yLWF1dG8gIGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPlNpZ25pbi91cDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nIycgY2xhc3NOYW1lPSdtci1hdXRvJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmV9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5Fbmc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nIycgY2xhc3NOYW1lPSdtci1hdXRvJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmlsZUludm9pY2VEb2xsYXJ9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5PcmRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTHVnZ2FnZUNhcnR9IHN0eWxlPXtzdHlsZXMubmF2X2NhcnRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkNhcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICczNXB4JywgbWF4V2lkdGg6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gaWQ9XCJuYXYtZHJvcGRvd25cIiBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtkYXNoYm9hcmRfaHJlZn0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj0nLi92ZW5kb3InIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlByb2ZpbGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiByZW1vdmVUb2tlbkZyb21TdG9yYWdlKCl9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT0nIG0tMiBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT0ncC0xIG0tMCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfc21feHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb25Nb3VzZU92ZXI9e29uTW91c2VFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17TmF2Lkxpbmt9IGNsYXNzTmFtZT1cInAtMlwiIHN0eWxlPXt7IGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtID5IZWFkZXI8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSA+QWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScuL2xvZ2luJyBjbGFzc05hbWU9J3AtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J3AtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmV9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+RW5nPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J3AtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9J3AtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FydFBsdXN9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+Q2FydDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBtYXhXaWR0aDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gaWQ9XCJuYXYtZHJvcGRvd25cIiBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17ZGFzaGJvYXJkX2hyZWZ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKX0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17eyBib3JkZXI6IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfbGdfbWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb25Nb3VzZU92ZXI9e29uTW91c2VFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfSBzaG93PXtpc0NhdGVnb3J5T3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+Q2F0ZWdvcmllczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSA+SGVhZGVyPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtID5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlcnRpY2FsX2Jhcic+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Nob3BzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleFwiIG9uQ2xpY2s9eygpID0+IHNldElzU2hvcHMoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNob3BzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoJyBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3BzKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlByb2R1Y3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoJyBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGFuZHNIZWxwaW5nfSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkZlZWRiYWNrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkhlbHA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5TZWxsIFdpdGggTXVoYWxpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmVydGljYWxfYmFyJz58PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkdldCBNdWhhbGlrJ3MgQXBwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQgPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmtfdGV4dDpob3ZlciwgLnNlY29uZF9uYXZfbGlua190ZXh0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRfbmF2X2xpbmtfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2lkdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX3NtX3hzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52ZXJ0aWNhbF9iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcmllc19zbV94cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcmllc19sZ19tZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubm9fd2lkdGhfc217XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgT3Zlcmx5UG9wb3ZlciA9IChwcm9wcykgPT4gKFxyXG4gICAgPE92ZXJsYXlUcmlnZ2VyIHRyaWdnZXI9e1snaG92ZXInLCAnZm9jdXMnXX0gcGxhY2VtZW50PVwiYm90dG9tXCIgb3ZlcmxheT17XHJcbiAgICAgICAgPFBvcG92ZXIgaWQ9XCJwb3BvdmVyLWJhc2ljXCI+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLlRpdGxlIGFzPVwiaDRcIj57cHJvcHMudGl0bGV9PC9Qb3BvdmVyLlRpdGxlPlxyXG4gICAgICAgICAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgIDwvUG9wb3Zlcj5cclxuICAgIH0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuKTtcclxuXHJcblxyXG5Ub29sYmFyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMnXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlMaXN0OiByZXNwb25zZS5kYXRhLmRhdGEgfSlcclxuICAgICAgICByZXR1cm4geyBzZWFyY2hDYXRlZ29yeTogcmVzcG9uc2UuZGF0YS5kYXRhIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJycpXHJcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHgnLFxyXG4gICAgfSxcclxuICAgIG5hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMjVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyNXB4JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxcHgnXHJcbiAgICB9LFxyXG4gICAgbmF2X2NhcnRfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzI4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjhweCcsXHJcbiAgICB9LFxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kX25hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjJweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjJweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjJweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMnB4JyxcclxuICAgIH0sXHJcbiAgICBmYUNoZXZyb25Eb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxMnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxMnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzEycHgnLFxyXG4gICAgfSxcclxuICAgIHNtYWxsX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhclxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==