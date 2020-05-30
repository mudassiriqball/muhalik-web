webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/customer/toolbar.js":
/*!**************************************************!*\
  !*** ./src/pages/components/customer/toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");


var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\customer\\toolbar.js",
    _s = $RefreshSig$(),
    _this2 = undefined;



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('All'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      searchType = _React$useState2[0],
      setSearchType = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      isCategoryOpen = _React$useState4[0],
      setIsCategoryOpen = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      isShops = _React$useState6[0],
      setIsShops = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      category_id = _React$useState8[0],
      setCategory_id = _React$useState8[1];

  function toggle() {
    setIsCategoryOpen(!isCategoryOpen);
  }

  function onMouseEnter() {
    setIsCategoryOpen(true);
  }

  function onMouseLeave() {
    setIsCategoryOpen(false);
  }

  function categoryMouseEnter(index) {
    var copyArray = Object.assign([], props.categories_list);
    setCategory_id(copyArray[index]._id);
  }

  function categoryMouseLeave() {
    setCategory_id('');
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    className: "p-0 m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    className: "w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "d-inline-flex align-items-center w-100",
    noGutters: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "auto",
    md: "auto",
    sm: 12,
    xs: 12,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    fluid: true,
    style: {
      width: '50px',
      display: 'flex',
      margin: '0% 3%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + " text_animation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }, "Muhalik", __jsx("span", {
    style: {
      fontSize: '15px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 80
    }
  }, "@2020")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"],
    variant: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 49
    }
  }, searchType), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
    className: "super-colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 49
    }
  }, categoryArray.map(function (element, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
      key: index,
      onClick: function onClick() {
        return setSearchType(element.value);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 57
      }
    }, element.value);
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    placeholder: "Search here",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 45
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "auto",
    md: "auto",
    sm: 12,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_lg_md align-items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "d-inline-flex align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'ml-5',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 45
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "./login",
    className: "ml-3  align-items-center",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 53
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUserPlus"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 53
    }
  }, "Signin/up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "ml-3",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGlobe"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 49
    }
  }, "Eng")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "ml-3",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFileInvoiceDollar"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 49
    }
  }, "Orders")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "ml-3",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLuggageCart"],
    style: styles.nav_cart_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 49
    }
  }, "Cart")), loggedIn ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: "muhalik.jpg",
      roundedCircle: true,
      fluid: true,
      style: {
        width: '35px',
        maxWidth: '35px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 69
      }
    }),
    className: "ml-3",
    id: "nav-dropdown",
    alignRight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: dashboard_href,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 57
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: "./vendor",
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 57
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 57
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 53
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    onClick: props.logout,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 57
    }
  }, "Logout"))) : null)))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    expand: "md",
    className: " ml-2 mr-2 mb-2 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    className: "p-1 m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_sm_xs',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'd-inline-flex align-items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave,
    show: isCategoryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link,
    className: "p-2",
    style: {
      color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faListAlt"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 41
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
    style: {
      width: '60vw',
      left: '-20vw',
      position: 'absolute',
      maxHeight: '50vh',
      overflowY: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    className: "pl-2 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 41
    }
  }, props.categories_list && props.categories_list.map(function (element, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      style: {
        border: '1px solid lightgray'
      },
      className: "p-1 m-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 49
      }
    }, __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 53
      }
    }, element.value, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 57
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronDown"],
      style: styles.categories_fontawesome,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 57
      }
    })), __jsx("hr", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'p-0 m-0',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 53
      }
    }), props.sub_categories_list && props.sub_categories_list.map(function (e, i) {
      return e.category_id == element._id ? __jsx("div", {
        key: i,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 61
        }
      }, e.value) : null;
    }));
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "./login",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 41
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUserPlus"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGlobe"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFileInvoiceDollar"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCartPlus"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  }), loggedIn ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
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
        lineNumber: 216,
        columnNumber: 41
      }
    }),
    id: "nav-dropdown",
    alignRight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: dashboard_href,
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 45
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 45
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 41
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    onClick: function onClick() {
      return Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_11__["removeTokenFromStorage"])();
    },
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 45
    }
  }, "Logout"))) : null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "w-100 d-flex align-items-center",
    style: {
      border: '0.5px solid lightgray'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_lg_md',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave,
    show: isCategoryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link,
    className: "d-inline-flex align-items-center ml-5 mr-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faListAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 45
    }
  }, " Categories ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
    style: {
      minWidth: category_id == '' ? '207px' : '400px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    onMouseLeave: function onMouseLeave() {
      return categoryMouseLeave();
    },
    className: "pl-2 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      border: '1px solid lightgray',
      maxHeight: '50vh',
      overflowY: 'auto'
    },
    className: "p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 49
    }
  }, props.categories_list && props.categories_list.map(function (element, index) {
    return __jsx("div", {
      key: index,
      onMouseOver: function onMouseOver() {
        return categoryMouseEnter(index);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 57
      }
    }, element.value, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 61
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
      style: styles.categories_fontawesome,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 61
      }
    }));
  })), category_id ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      border: '1px solid lightgray',
      maxHeight: '50vh',
      overflowY: 'auto'
    },
    className: "ml-1 p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 53
    }
  }, props.sub_categories_list && props.sub_categories_list.map(function (element, index) {
    return element.category_id == category_id ? __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 65
      }
    }, element.value) : null;
  })) : null)))), isShops ? __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex",
    onClick: function onClick() {
      return setIsShops(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 45
    }
  }, "Shops"))) : __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex",
    onClick: function onClick() {
      return setIsShops(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 45
    }
  }, "Products"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }, "About Us"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 41
    }
  }, "Feedback"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 41
    }
  }, "Help?"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 33
    }
  }), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 41
    }
  }, "Sell With Muhalik"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'vertical_bar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 33
    }
  }, "|"), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3870817166", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 41
    }
  }, "Get Muhalik's App")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3870817166",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color],
    __self: this
  }, ".text_animation.__jsx-style-dynamic-selector{-webkit-animation:mymove-__jsx-style-dynamic-selector 5s infinite;animation:mymove-__jsx-style-dynamic-selector 5s infinite;color:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, ";font-family:Verdana,Geneva,sans-serif;margin:0%;}@-webkit-keyframes mymove-__jsx-style-dynamic-selector{50%{text-shadow:10px 10px 10px green;}}@keyframes mymove-__jsx-style-dynamic-selector{50%{text-shadow:10px 10px 10px green;}}.nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:13px;padding:0px;margin-top:1px;color:gray;}.nav_link_text.__jsx-style-dynamic-selector:hover,.second_nav_link_text.__jsx-style-dynamic-selector:hover{color:green;}.second_nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:14px;color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].admin_primry_color, ";}.category_list_item.__jsx-style-dynamic-selector{cursor:pointer;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;padding:2%;color:gray;}.category_list_item.__jsx-style-dynamic-selector:hover{color:#005ce6;background:#e6f0ff;}@media (max-width:992px){.width.__jsx-style-dynamic-selector{max-width:0px;display:none;}}.vertical_bar.__jsx-style-dynamic-selector{color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, ";}.categories_sm_xs.__jsx-style-dynamic-selector{display:none;}@media (max-width:767px){.vertical_bar.__jsx-style-dynamic-selector{display:none;}.categories_sm_xs.__jsx-style-dynamic-selector{display:block;}.categories_lg_md.__jsx-style-dynamic-selector{display:none;}}@media (max-width:450px){.no_width_sm.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3VWlCLEFBR3NELEFBT1EsQUFJbEIsQUFReEIsQUFFd0IsQUFNSixBQVNELEFBTUksQUFNdkIsQUFFa0IsQUFJSSxBQUdDLEFBR0QsQUFNbEIsWUEvQ0gsQ0FnQ0EsQUFJSSxBQU1BLEFBS0EsQ0E1QkwsQUFNSSxBQWNDLENBOUJXLElBaEJJLEFBVUEsT0FPSyxDQWVwQixNQXJDc0MsQUErQjFDLENBekJnQixBQVdqQixDQXdCQyxXQWxDbUIsZUFFcEIsUUFRQyxHQVJBLG9EQWZ1QyxJQTZCaEIsK0JBNUJxQixzQ0FDOUIsVUFDZCxjQTJCbUIsZUFDSixXQUVoQixXQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBOYXZiYXIsIE5hdiwgRm9ybSwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEltYWdlLCBCdXR0b24sXHJcbiAgICBOYXZEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIENhcmQsIERyb3Bkb3duLCBCdXR0b25Hcm91cCxcclxuICAgIFJvdywgQ29sLCBPdmVybGF5VHJpZ2dlciwgUG9wb3ZlciwgQ29udGFpbmVyXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHRcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJ1xyXG5cclxuY29uc3QgY2F0ZWdvcnlBcnJheSA9IFt7IHZhbHVlOiAnQWxsJyB9LCB7IHZhbHVlOiAnTWFjaGluYXknIH0sIHsgdmFsdWU6ICdDbG90aGVzJyB9XVxyXG5mdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcblxyXG4gICAgbGV0IGxvZ2dlZEluID0gZmFsc2VcclxuICAgIGxldCBkYXNoYm9hcmRfaHJlZiA9ICcnXHJcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gJycpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdjdXN0b21lcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2luZGV4J1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAndmVuZG9yJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vdmVuZG9yJ1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9hZG1pbidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVHlwZSwgc2V0U2VhcmNoVHlwZV0gPSBSZWFjdC51c2VTdGF0ZSgnQWxsJylcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTaG9wcywgc2V0SXNTaG9wc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlfaWQsIHNldENhdGVnb3J5X2lkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3BlbighaXNDYXRlZ29yeU9wZW4pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLmNhdGVnb3JpZXNfbGlzdClcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZChjb3B5QXJyYXlbaW5kZXhdLl9pZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdwLTAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz0nYXV0bycgbWQ9J2F1dG8nIHNtPXsxMn0geHM9ezEyfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW46ICcwJSAzJScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCIgdGV4dF9hbmltYXRpb25cIj5NdWhhbGlrPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JyB9fT5AMjAyMDwvc3Bhbj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gYXM9e0J1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17QnV0dG9ufSB2YXJpYW50PSdzdWNjZXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwic3VwZXItY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFR5cGUoZWxlbWVudC52YWx1ZSl9PntlbGVtZW50LnZhbHVlfTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdzdWNjZXNzJz5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPSdhdXRvJyBtZD0nYXV0bycgc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcmllc19sZ19tZCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtNSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScuL2xvZ2luJyBjbGFzc05hbWU9J21sLTMgIGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPlNpZ25pbi91cDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nIycgY2xhc3NOYW1lPSdtbC0zJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkVuZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0nbWwtMycgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5PcmRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbWwtMycgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMdWdnYWdlQ2FydH0gc3R5bGU9e3N0eWxlcy5uYXZfY2FydF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkNhcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17PEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzM1cHgnLCBtYXhXaWR0aDogJzM1cHgnIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC0zJyBpZD1cIm5hdi1kcm9wZG93blwiIGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtkYXNoYm9hcmRfaHJlZn0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9Jy4vdmVuZG9yJyBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17cHJvcHMubG9nb3V0fSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBvd2VyT2ZmfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgZXhwYW5kPVwibWRcIiBjbGFzc05hbWU9JyBtbC0yIG1yLTIgbWItMiBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT0ncC0xIG0tMCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfc21feHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb25Nb3VzZU92ZXI9e29uTW91c2VFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17TmF2Lkxpbmt9IGNsYXNzTmFtZT1cInAtMlwiIHN0eWxlPXt7IGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBzdHlsZT17eyB3aWR0aDogJzYwdncnLCBsZWZ0OiAnLTIwdncnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgbWF4SGVpZ2h0OiAnNTB2aCcsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgY2xhc3NOYW1lPSdwbC0yIHByLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScgfX0gY2xhc3NOYW1lPSdwLTEgbS0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uRG93bn0gc3R5bGU9e3N0eWxlcy5jYXRlZ29yaWVzX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdwLTAgbS0wJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdC5tYXAoKGUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jYXRlZ29yeV9pZCA9PSBlbGVtZW50Ll9pZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0ncC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0ncC0yJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZX0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5Fbmc8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0ncC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbGVJbnZvaWNlRG9sbGFyfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT0ncC0yJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJ0UGx1c30gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5DYXJ0PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIG1heFdpZHRoOiAnMzBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBpZD1cIm5hdi1kcm9wZG93blwiIGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtkYXNoYm9hcmRfaHJlZn0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSgpfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvZ291dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J3ctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInIHN0eWxlPXt7IGJvcmRlcjogJzAuNXB4IHNvbGlkIGxpZ2h0Z3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfbGdfbWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb25Nb3VzZU92ZXI9e29uTW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWwtNSBtci01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPiBDYXRlZ29yaWVzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBzdHlsZT17eyBtaW5XaWR0aDogY2F0ZWdvcnlfaWQgPT0gJycgPyAnMjA3cHgnIDogJzQwMHB4JywgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIG9uTW91c2VMZWF2ZT17KCkgPT4gY2F0ZWdvcnlNb3VzZUxlYXZlKCl9IGNsYXNzTmFtZT0ncGwtMiBwci0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JywgbWF4SGVpZ2h0OiAnNTB2aCcsIG92ZXJmbG93WTogJ2F1dG8nIH19IGNsYXNzTmFtZT0ncC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiBvbk1vdXNlT3Zlcj17KCkgPT4gY2F0ZWdvcnlNb3VzZUVudGVyKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JywgbWF4SGVpZ2h0OiAnNTB2aCcsIG92ZXJmbG93WTogJ2F1dG8nIH19IGNsYXNzTmFtZT0nbWwtMSBwLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jYXRlZ29yeV9pZCA9PSBjYXRlZ29yeV9pZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzU2hvcHMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4XCIgb25DbGljaz17KCkgPT4gc2V0SXNTaG9wcyhmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5TaG9wczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3BzKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+UHJvZHVjdHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIYW5kc0hlbHBpbmd9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+RmVlZGJhY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5IZWxwPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNlbGwgV2l0aCBNdWhhbGlrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJ0aWNhbF9iYXInPnw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+R2V0IE11aGFsaWsncyBBcHA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZCA+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAudGV4dF9hbmltYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbXltb3ZlIDVzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwJSB7dGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGdyZWVuO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfbGlua190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQ6aG92ZXIsIC5zZWNvbmRfbmF2X2xpbmtfdGV4dDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kX25hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWNlNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZjBmZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aWR0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudmVydGljYWxfYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3JpZXNfc21feHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX3NtX3hzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX2xnX21kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub193aWR0aF9zbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBPdmVybHlQb3BvdmVyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8T3ZlcmxheVRyaWdnZXIgdHJpZ2dlcj17Wydob3ZlcicsICdmb2N1cyddfSBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXtcclxuICAgICAgICA8UG9wb3ZlciBpZD1cInBvcG92ZXItYmFzaWNcIj5cclxuICAgICAgICAgICAgPFBvcG92ZXIuVGl0bGUgYXM9XCJoNFwiPntwcm9wcy50aXRsZX08L1BvcG92ZXIuVGl0bGU+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudH1cclxuICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgfT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgfSxcclxuICAgIG5hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcyNHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI0cHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCdcclxuICAgIH0sXHJcbiAgICBuYXZfY2FydF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcyOHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI4cHgnLFxyXG4gICAgfSxcclxuICAgIGRyb3BEb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kX25hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIycHgnLFxyXG4gICAgfSxcclxuICAgIGNhdGVnb3JpZXNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgIHdpZHRoOiAnMTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBmYUNoZXZyb25Eb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG4gICAgc21hbGxfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJcclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\toolbar.js */")));
}

_s(Toolbar, "Lxbjspp/pxmTu8DpBSEbSp/fkh4=");

_c = Toolbar;

var OverlyPopover = function OverlyPopover(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["OverlayTrigger"], {
    trigger: ['hover', 'focus'],
    placement: "bottom",
    overlay: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      id: "popover-basic",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"].Title, {
      as: "h4",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 13
      }
    }, props.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"].Content, {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 13
      }
    }, props.content)),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 5
    }
  }, props.children);
};

_c2 = OverlyPopover;
var styles = {
  nav_link: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '13px'
  },
  nav_fontawesome: {
    color: 'gray',
    width: '24px',
    height: '24px',
    maxHeight: '24px',
    maxWidth: '24px',
    margin: '0px'
  },
  nav_cart_fontawesome: {
    color: 'gray',
    width: '28px',
    height: '28px',
    maxHeight: '28px',
    maxWidth: '28px'
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
    color: 'gray',
    marginRight: '3%',
    width: '22px',
    height: '22px',
    maxHeight: '22px',
    maxWidth: '22px'
  },
  categories_fontawesome: {
    color: 'gray',
    "float": 'right',
    width: '10px',
    height: '10px',
    maxHeight: '10px',
    maxWidth: '10px'
  },
  faChevronDown_fontawesome: {
    color: 'gray',
    width: '12px',
    height: '12px',
    maxHeight: '12px',
    maxWidth: '12px'
  },
  small_fontawesome: {
    color: 'gray',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci90b29sYmFyLmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5QXJyYXkiLCJ2YWx1ZSIsIlRvb2xiYXIiLCJwcm9wcyIsImxvZ2dlZEluIiwiZGFzaGJvYXJkX2hyZWYiLCJ0b2tlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWFyY2hUeXBlIiwic2V0U2VhcmNoVHlwZSIsImlzQ2F0ZWdvcnlPcGVuIiwic2V0SXNDYXRlZ29yeU9wZW4iLCJpc1Nob3BzIiwic2V0SXNTaG9wcyIsImNhdGVnb3J5X2lkIiwic2V0Q2F0ZWdvcnlfaWQiLCJ0b2dnbGUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJjYXRlZ29yeU1vdXNlRW50ZXIiLCJpbmRleCIsImNvcHlBcnJheSIsIk9iamVjdCIsImFzc2lnbiIsImNhdGVnb3JpZXNfbGlzdCIsIl9pZCIsImNhdGVnb3J5TW91c2VMZWF2ZSIsIkdsb2JhbFN0eWxlU2hlZXQiLCJwcmltcnlfY29sb3IiLCJhZG1pbl9wcmltcnlfY29sb3IiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJmb250U2l6ZSIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwibWFwIiwiZWxlbWVudCIsInN0eWxlcyIsIm5hdl9saW5rIiwiZmFVc2VyIiwibmF2X2ZvbnRhd2Vzb21lIiwiZmFVc2VyUGx1cyIsImZhR2xvYmUiLCJmYUZpbGVJbnZvaWNlRG9sbGFyIiwiZmFMdWdnYWdlQ2FydCIsIm5hdl9jYXJ0X2ZvbnRhd2Vzb21lIiwibWF4V2lkdGgiLCJkcm9wRG93bl9mb250YXdlc29tZSIsImxvZ291dCIsImZhUG93ZXJPZmYiLCJOYXYiLCJMaW5rIiwiY29sb3IiLCJmYUxpc3RBbHQiLCJzbWFsbF9mb250YXdlc29tZSIsImxlZnQiLCJwb3NpdGlvbiIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsImZhQ2hldnJvbkRvd24iLCJjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lIiwic3ViX2NhdGVnb3JpZXNfbGlzdCIsImUiLCJpIiwiZmFDYXJ0UGx1cyIsInJlbW92ZVRva2VuRnJvbVN0b3JhZ2UiLCJzZWNvbmRfbmF2X2ZvbnRhd2Vzb21lIiwibWluV2lkdGgiLCJmYUNoZXZyb25SaWdodCIsIk92ZXJseVBvcG92ZXIiLCJ0aXRsZSIsImNvbnRlbnQiLCJjaGlsZHJlbiIsInRleHRBbGlnbiIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZmFDaGV2cm9uRG93bl9mb250YXdlc29tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQUM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBRCxFQUFtQjtBQUFFQSxPQUFLLEVBQUU7QUFBVCxDQUFuQixFQUEwQztBQUFFQSxPQUFLLEVBQUU7QUFBVCxDQUExQyxDQUF0Qjs7QUFDQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUFBOztBQUVwQixNQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjs7QUFDQSxNQUFJRixLQUFLLENBQUNHLEtBQU4sSUFBZSxFQUFuQixFQUF1QjtBQUNuQkYsWUFBUSxHQUFHLEtBQVg7QUFDSCxHQUZELE1BRU8sSUFBSUQsS0FBSyxDQUFDRyxLQUFOLElBQWUsVUFBbkIsRUFBK0I7QUFDbENGLFlBQVEsR0FBRyxJQUFYO0FBQ0FDLGtCQUFjLEdBQUcsU0FBakI7QUFDSCxHQUhNLE1BR0EsSUFBSUYsS0FBSyxDQUFDRyxLQUFOLElBQWUsUUFBbkIsRUFBNkI7QUFDaENGLFlBQVEsR0FBRyxJQUFYO0FBQ0FDLGtCQUFjLEdBQUcsVUFBakI7QUFDSCxHQUhNLE1BR0EsSUFBSUYsS0FBSyxDQUFDRyxLQUFOLElBQWUsT0FBbkIs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eUIsRUFBRTtBQUN2QjNCLFNBQUssRUFBRSxNQURnQjtBQUV2QnZCLFNBQUssRUFBRSxNQUZnQjtBQUd2QmdELFVBQU0sRUFBRSxNQUhlO0FBSXZCcEIsYUFBUyxFQUFFLE1BSlk7QUFLdkJYLFlBQVEsRUFBRTtBQUxhLEdBOUNoQjtBQXFEWFEsbUJBQWlCLEVBQUU7QUFDZkYsU0FBSyxFQUFFLE1BRFE7QUFFZnZCLFNBQUssRUFBRSxNQUZRO0FBR2ZnRCxVQUFNLEVBQUUsTUFITztBQUlmcEIsYUFBUyxFQUFFLE1BSkk7QUFLZlgsWUFBUSxFQUFFO0FBTEs7QUFyRFIsQ0FBZjtBQThEZTlDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wZWYyYTU5ODEwMDNiYTgyYTY4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIE5hdmJhciwgTmF2LCBGb3JtLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgSW1hZ2UsIEJ1dHRvbixcclxuICAgIE5hdkRyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgQ2FyZCwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwLFxyXG4gICAgUm93LCBDb2wsIE92ZXJsYXlUcmlnZ2VyLCBQb3BvdmVyLCBDb250YWluZXJcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFTZWFyY2gsIGZhVXNlclBsdXMsIGZhTGFuZ3VhZ2UsIGZhUG93ZXJPZmYsIGZhVXNlcixcclxuICAgIGZhQ2FydFBsdXMsIGZhSGFuZHNIZWxwaW5nLCBmYVBlbiwgZmFTaWduT3V0QWx0LCBmYUdsb2JlLFxyXG4gICAgZmFMdWdnYWdlQ2FydCwgZmFGaWxlSW52b2ljZURvbGxhciwgZmFMaXN0QWx0LCBmYUVkaXQsXHJcbiAgICBmYVN0b3JlQWx0LCBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnXHJcblxyXG5jb25zdCBjYXRlZ29yeUFycmF5ID0gW3sgdmFsdWU6ICdBbGwnIH0sIHsgdmFsdWU6ICdNYWNoaW5heScgfSwgeyB2YWx1ZTogJ0Nsb3RoZXMnIH1dXHJcbmZ1bmN0aW9uIFRvb2xiYXIocHJvcHMpIHtcclxuXHJcbiAgICBsZXQgbG9nZ2VkSW4gPSBmYWxzZVxyXG4gICAgbGV0IGRhc2hib2FyZF9ocmVmID0gJydcclxuICAgIGlmIChwcm9wcy50b2tlbiA9PSAnJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gZmFsc2VcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ2N1c3RvbWVyJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vaW5kZXgnXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICd2ZW5kb3InKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi92ZW5kb3InXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdhZG1pbicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2FkbWluJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hUeXBlLCBzZXRTZWFyY2hUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKCdBbGwnKVxyXG4gICAgY29uc3QgW2lzQ2F0ZWdvcnlPcGVuLCBzZXRJc0NhdGVnb3J5T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc1Nob3BzLCBzZXRJc1Nob3BzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yeV9pZCwgc2V0Q2F0ZWdvcnlfaWRdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKCFpc0NhdGVnb3J5T3BlbilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2F0ZWdvcnlNb3VzZUVudGVyKGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMuY2F0ZWdvcmllc19saXN0KVxyXG4gICAgICAgIHNldENhdGVnb3J5X2lkKGNvcHlBcnJheVtpbmRleF0uX2lkKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2F0ZWdvcnlNb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHNldENhdGVnb3J5X2lkKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmQgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9J3AtMCBtLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSd3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAnIG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPSdhdXRvJyBtZD0nYXV0bycgc209ezEyfSB4cz17MTJ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbjogJzAlIDMlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIiB0ZXh0X2FuaW1hdGlvblwiPk11aGFsaWs8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnIH19PkAyMDIwPC9zcGFuPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBhcz17QnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtCdXR0b259IHZhcmlhbnQ9J3N1Y2Nlc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJzdXBlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeUFycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0U2VhcmNoVHlwZShlbGVtZW50LnZhbHVlKX0+e2VsZW1lbnQudmFsdWV9PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3N1Y2Nlc3MnPlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9J2F1dG8nIG1kPSdhdXRvJyBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX2xnX21kIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC01Jz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0nbWwtMyAgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+U2lnbmluL3VwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21sLTMnIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmV9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+RW5nPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nIycgY2xhc3NOYW1lPSdtbC0zJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbGVJbnZvaWNlRG9sbGFyfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPk9yZGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtbC0zJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUx1Z2dhZ2VDYXJ0fSBzdHlsZT17c3R5bGVzLm5hdl9jYXJ0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+Q2FydDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXs8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMzVweCcsIG1heFdpZHRoOiAnMzVweCcgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTMnIGlkPVwibmF2LWRyb3Bkb3duXCIgYWxpZ25SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9e2Rhc2hib2FyZF9ocmVmfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj0nLi92ZW5kb3InIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlByb2ZpbGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBvbkNsaWNrPXtwcm9wcy5sb2dvdXR9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT0nIG1sLTIgbXItMiBtYi0yIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPSdwLTEgbS0wJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcmllc19zbV94cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvbk1vdXNlT3Zlcj17b25Nb3VzZUVudGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0gc2hvdz17aXNDYXRlZ29yeU9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwicC0yXCIgc3R5bGU9e3sgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IHN0eWxlPXt7IHdpZHRoOiAnNjB2dycsIGxlZnQ6ICctMjB2dycsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBtYXhIZWlnaHQ6ICc1MHZoJywgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBjbGFzc05hbWU9J3BsLTIgcHItMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyB9fSBjbGFzc05hbWU9J3AtMSBtLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25Eb3dufSBzdHlsZT17c3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9J3AtMCBtLTAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0Lm1hcCgoZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNhdGVnb3J5X2lkID09IGVsZW1lbnQuX2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nLi9sb2dpbicgY2xhc3NOYW1lPSdwLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nIycgY2xhc3NOYW1lPSdwLTInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkVuZzwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nIycgY2xhc3NOYW1lPSdwLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmlsZUludm9pY2VEb2xsYXJ9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdwLTInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhcnRQbHVzfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkNhcnQ8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgbWF4V2lkdGg6ICczMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGlkPVwibmF2LWRyb3Bkb3duXCIgYWxpZ25SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9e2Rhc2hib2FyZF9ocmVmfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXgnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlByb2ZpbGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiByZW1vdmVUb2tlbkZyb21TdG9yYWdlKCl9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBvd2VyT2ZmfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3sgYm9yZGVyOiAnMC41cHggc29saWQgbGlnaHRncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcmllc19sZ19tZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvbk1vdXNlT3Zlcj17b25Nb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0gc2hvdz17aXNDYXRlZ29yeU9wZW59ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtbC01IG1yLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+IENhdGVnb3JpZXMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IHN0eWxlPXt7IG1pbldpZHRoOiBjYXRlZ29yeV9pZCA9PSAnJyA/ICcyMDdweCcgOiAnNDAwcHgnLCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgb25Nb3VzZUxlYXZlPXsoKSA9PiBjYXRlZ29yeU1vdXNlTGVhdmUoKX0gY2xhc3NOYW1lPSdwbC0yIHByLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknLCBtYXhIZWlnaHQ6ICc1MHZoJywgb3ZlcmZsb3dZOiAnYXV0bycgfX0gY2xhc3NOYW1lPSdwLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiIG9uTW91c2VPdmVyPXsoKSA9PiBjYXRlZ29yeU1vdXNlRW50ZXIoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5jYXRlZ29yaWVzX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeV9pZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknLCBtYXhIZWlnaHQ6ICc1MHZoJywgb3ZlcmZsb3dZOiAnYXV0bycgfX0gY2xhc3NOYW1lPSdtbC0xIHAtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhdGVnb3J5X2lkID09IGNhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTaG9wcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3BzKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdG9yZUFsdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNob3BzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleFwiIG9uQ2xpY2s9eygpID0+IHNldElzU2hvcHModHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5Qcm9kdWN0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhhbmRzSGVscGluZ30gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+QWJvdXQgVXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5GZWVkYmFjazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVkaXR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkhlbHA/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+U2VsbCBXaXRoIE11aGFsaWs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlcnRpY2FsX2Jhcic+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5HZXQgTXVoYWxpaydzIEFwcDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG5cclxuICAgICAgICAgICAgPC9DYXJkID5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0X2FuaW1hdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBteW1vdmUgNXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbXltb3ZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHt0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggZ3JlZW47fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmtfdGV4dDpob3ZlciwgLnNlY29uZF9uYXZfbGlua190ZXh0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRfbmF2X2xpbmtfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1Y2U2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTZmMGZmXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndpZHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC52ZXJ0aWNhbF9iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcmllc19zbV94cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmVydGljYWxfYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3JpZXNfc21feHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3JpZXNfbGdfbWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vX3dpZHRoX3Nte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE92ZXJseVBvcG92ZXIgPSAocHJvcHMpID0+IChcclxuICAgIDxPdmVybGF5VHJpZ2dlciB0cmlnZ2VyPXtbJ2hvdmVyJywgJ2ZvY3VzJ119IHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9e1xyXG4gICAgICAgIDxQb3BvdmVyIGlkPVwicG9wb3Zlci1iYXNpY1wiPlxyXG4gICAgICAgICAgICA8UG9wb3Zlci5UaXRsZSBhcz1cImg0XCI+e3Byb3BzLnRpdGxlfTwvUG9wb3Zlci5UaXRsZT5cclxuICAgICAgICAgICAgPFBvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jb250ZW50fVxyXG4gICAgICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICB9PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbik7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICB9LFxyXG4gICAgbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzI0cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjRweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIG5hdl9jYXJ0X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzI4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjhweCcsXHJcbiAgICB9LFxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCAyMHB4IDBweCAwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHB4JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRfbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzIycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzIycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzIycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjJweCcsXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcmllc19mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZhQ2hldnJvbkRvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIHdpZHRoOiAnMTJweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMnB4JyxcclxuICAgIH0sXHJcbiAgICBzbWFsbF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhclxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==