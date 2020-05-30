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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
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
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center w-100",
    noGutters: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 2,
    md: 3,
    sm: 12,
    xs: 12,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
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
      lineNumber: 73,
      columnNumber: 37
    }
  }), __jsx("h5", {
    style: {
      color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color)
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "text-center pl-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, "Muhalik")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 7,
    md: 5,
    sm: 12,
    xs: 12,
    className: "align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"],
    variant: "outline-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 45
    }
  }, searchType), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
    className: "super-colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 45
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
        lineNumber: 87,
        columnNumber: 53
      }
    }, element.value);
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    placeholder: "Search here",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Append, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "outline-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, "Search")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 3,
    md: 4,
    sm: 12,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_lg_md align-items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "d-inline-flex align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 41
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "./login",
    className: "mr-auto  align-items-center",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 49
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUserPlus"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 49
    }
  }, "Signin/up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGlobe"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 45
    }
  }, "Eng")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFileInvoiceDollar"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 45
    }
  }, "Orders")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "mr-auto",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLuggageCart"],
    style: styles.nav_cart_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 45
    }
  }, "Cart")), loggedIn ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
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
        lineNumber: 130,
        columnNumber: 49
      }
    }),
    id: "nav-dropdown",
    alignRight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: dashboard_href,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 53
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: "./vendor",
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 53
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 53
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 49
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    onClick: props.logout,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 53
    }
  }, "Logout"))) : null))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    expand: "md",
    className: " m-2 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    className: "p-1 m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_sm_xs',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'd-inline-flex align-items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave,
    show: isCategoryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 166,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faListAlt"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      lineNumber: 169,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    className: "pl-2 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
        lineNumber: 172,
        columnNumber: 49
      }
    }, __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 53
      }
    }, element.value, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 57
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronDown"],
      style: styles.categories_fontawesome,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 57
      }
    })), __jsx("hr", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'p-0 m-0',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 53
      }
    }), props.sub_categories_list && props.sub_categories_list.map(function (e, i) {
      return e.category_id == element._id ? __jsx("div", {
        key: i,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 61
        }
      }, e.value) : null;
    }));
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "./login",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 41
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUserPlus"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
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
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGlobe"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFileInvoiceDollar"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCartPlus"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
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
        lineNumber: 222,
        columnNumber: 41
      }
    }),
    id: "nav-dropdown",
    alignRight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: dashboard_href,
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 45
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 45
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 233,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 45
    }
  }, "Logout"))) : null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "w-100 d-flex align-items-center",
    style: {
      border: "0.5px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_lg_md',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave,
    show: isCategoryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faListAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 45
    }
  }, "Categories")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
    style: {
      minWidth: category_id == '' ? '207px' : '400px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
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
      lineNumber: 253,
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
      lineNumber: 254,
      columnNumber: 49
    }
  }, props.categories_list && props.categories_list.map(function (element, index) {
    return __jsx("div", {
      key: index,
      onMouseOver: function onMouseOver() {
        return categoryMouseEnter(index);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 57
      }
    }, element.value, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 61
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
      style: styles.categories_fontawesome,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
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
      lineNumber: 264,
      columnNumber: 53
    }
  }, props.sub_categories_list && props.sub_categories_list.map(function (element, index) {
    return element.category_id == category_id ? __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 65
      }
    }, element.value) : null;
  })) : null)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'vertical_bar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 33
    }
  }, "|"), isShops ? __jsx(OverlyPopover, {
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
      return setIsShops(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStoreAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 45
    }
  }, "Shops"), __jsx("div", {
    style: {
      width: '70px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 45
    }
  }))) : __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
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
      lineNumber: 293,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faProductHunt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 45
    }
  }, "Products"), __jsx("div", {
    style: {
      width: '70px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 45
    }
  }))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHandsHelping"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 41
    }
  }, "About Us"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEdit"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 41
    }
  }, "Feedback"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEdit"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 41
    }
  }, "Help"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 33
    }
  }), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 41
    }
  }, "Sell With Muhalik"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'vertical_bar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 33
    }
  }, "|"), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["473816246", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 41
    }
  }, "Get Muhalik's App")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "473816246",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color],
    __self: this
  }, ".nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:13px;padding:0px;margin-top:1px;color:gray;}.nav_link_text.__jsx-style-dynamic-selector:hover,.second_nav_link_text.__jsx-style-dynamic-selector:hover{color:green;}.second_nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;margin-left:2%;font-size:14px;color:gray;}.category_list_item.__jsx-style-dynamic-selector{cursor:pointer;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;padding:2%;color:gray;}.category_list_item.__jsx-style-dynamic-selector:hover{color:#005ce6;background:#e6f0ff;}@media (max-width:992px){.width.__jsx-style-dynamic-selector{max-width:0px;display:none;}}.vertical_bar.__jsx-style-dynamic-selector{color:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, ";}.categories_sm_xs.__jsx-style-dynamic-selector{display:none;}@media (max-width:767px){.vertical_bar.__jsx-style-dynamic-selector{display:none;}.categories_sm_xs.__jsx-style-dynamic-selector{display:block;}.categories_lg_md.__jsx-style-dynamic-selector{display:none;}}@media (max-width:450px){.no_width_sm.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpVmlCLEFBRzRDLEFBUXhCLEFBRXdCLEFBT0osQUFTRCxBQU1JLEFBTXZCLEFBRWtCLEFBSUksQUFHQyxBQUdELEFBTWxCLFlBaERILENBaUNBLEFBSUksQUFNQSxBQUtBLENBNUJMLEFBTUksQUFjQyxDQTlCVyxJQWpCSSxBQVVBLE9BUUssQ0FlcEIsTUFOSixDQTFCZ0IsQUFVRyxDQTBCbkIsV0FuQ21CLEdBV3BCLFdBQUMsQ0FURCxXQUFDLHdEQWV1Qiw2RkFDSixlQUNKLFdBRWhCLFdBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXE5ldyBmb2xkZXJcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGN1c3RvbWVyXFx0b29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIE5hdmJhciwgTmF2LCBGb3JtLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgSW1hZ2UsIEJ1dHRvbixcclxuICAgIE5hdkRyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgQ2FyZCwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwLFxyXG4gICAgUm93LCBDb2wsIE92ZXJsYXlUcmlnZ2VyLCBQb3BvdmVyXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHRcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJ1xyXG5cclxuY29uc3QgY2F0ZWdvcnlBcnJheSA9IFt7IHZhbHVlOiAnQWxsJyB9LCB7IHZhbHVlOiAnTWFjaGluYXknIH0sIHsgdmFsdWU6ICdDbG90aGVzJyB9XVxyXG5mdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcblxyXG4gICAgbGV0IGxvZ2dlZEluID0gZmFsc2VcclxuICAgIGxldCBkYXNoYm9hcmRfaHJlZiA9ICcnXHJcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gJycpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdjdXN0b21lcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2luZGV4J1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAndmVuZG9yJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vdmVuZG9yJ1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9hZG1pbidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVHlwZSwgc2V0U2VhcmNoVHlwZV0gPSBSZWFjdC51c2VTdGF0ZSgnQWxsJylcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTaG9wcywgc2V0SXNTaG9wc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlfaWQsIHNldENhdGVnb3J5X2lkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3BlbighaXNDYXRlZ29yeU9wZW4pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLmNhdGVnb3JpZXNfbGlzdClcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZChjb3B5QXJyYXlbaW5kZXhdLl9pZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdwLTAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsyfSBtZD17M30gc209ezEyfSB4cz17MTJ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGRpc3BsYXk6ICdmbGV4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGwtM1wiIHN0eWxlPXt7IGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19Pk11aGFsaWs8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17N30gbWQ9ezV9IHNtPXsxMn0geHM9ezEyfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGFzPXtCdXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17QnV0dG9ufSB2YXJpYW50PSdvdXRsaW5lLXN1Y2Nlc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJzdXBlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5QXJyYXkubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFR5cGUoZWxlbWVudC52YWx1ZSl9PntlbGVtZW50LnZhbHVlfTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmUtc3VjY2Vzcyc+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX2xnX21kIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0nbXItYXV0byAgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+U2lnbmluL3VwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZX0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkVuZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPk9yZGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXItYXV0bycgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUx1Z2dhZ2VDYXJ0fSBzdHlsZT17c3R5bGVzLm5hdl9jYXJ0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5DYXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMzVweCcsIG1heFdpZHRoOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGlkPVwibmF2LWRyb3Bkb3duXCIgYWxpZ25SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17ZGFzaGJvYXJkX2hyZWZ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9Jy4vdmVuZG9yJyBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17cHJvcHMubG9nb3V0fSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvZ291dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgZXhwYW5kPVwibWRcIiBjbGFzc05hbWU9JyBtLTIgcC0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9J3AtMSBtLTAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX3NtX3hzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG9uTW91c2VPdmVyPXtvbk1vdXNlRW50ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfSBzaG93PXtpc0NhdGVnb3J5T3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJwLTJcIiBzdHlsZT17eyBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgd2lkdGg6ICc2MHZ3JywgbGVmdDogJy0yMHZ3JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIG1heEhlaWdodDogJzUwdmgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIGNsYXNzTmFtZT0ncGwtMiBwci0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLmNhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknIH19IGNsYXNzTmFtZT0ncC0xIG0tMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkRvd259IHN0eWxlPXtzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0ncC0wIG0tMCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2F0ZWdvcnlfaWQgPT0gZWxlbWVudC5faWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScuL2xvZ2luJyBjbGFzc05hbWU9J3AtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J3AtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmV9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+RW5nPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J3AtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9J3AtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FydFBsdXN9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+Q2FydDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBtYXhXaWR0aDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gaWQ9XCJuYXYtZHJvcGRvd25cIiBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17ZGFzaGJvYXJkX2hyZWZ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKX0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17eyBib3JkZXI6IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfbGdfbWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb25Nb3VzZU92ZXI9e29uTW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+Q2F0ZWdvcmllczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyogd2lkdGg6ICc2MHZ3JywgbGVmdDogJy0yMHZ3JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIG1heEhlaWdodDogJzUwdmgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6IGNhdGVnb3J5X2lkID09ICcnID8gJzIwN3B4JyA6ICc0MDBweCcsIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBvbk1vdXNlTGVhdmU9eygpID0+IGNhdGVnb3J5TW91c2VMZWF2ZSgpfSBjbGFzc05hbWU9J3BsLTIgcHItMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsIG1heEhlaWdodDogJzUwdmgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fSBjbGFzc05hbWU9J3AtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLmNhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgb25Nb3VzZU92ZXI9eygpID0+IGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsIG1heEhlaWdodDogJzUwdmgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fSBjbGFzc05hbWU9J21sLTEgcC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2F0ZWdvcnlfaWQgPT0gY2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlcnRpY2FsX2Jhcic+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Nob3BzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleFwiIG9uQ2xpY2s9eygpID0+IHNldElzU2hvcHMoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNob3BzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoJyBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3BzKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlByb2R1Y3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoJyBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGFuZHNIZWxwaW5nfSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkZlZWRiYWNrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkhlbHA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5TZWxsIFdpdGggTXVoYWxpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmVydGljYWxfYmFyJz58PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkdldCBNdWhhbGlrJ3MgQXBwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQgPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmtfdGV4dDpob3ZlciwgLnNlY29uZF9uYXZfbGlua190ZXh0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRfbmF2X2xpbmtfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWNlNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZjBmZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aWR0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudmVydGljYWxfYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3JpZXNfc21feHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX3NtX3hzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX2xnX21kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub193aWR0aF9zbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBPdmVybHlQb3BvdmVyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8T3ZlcmxheVRyaWdnZXIgdHJpZ2dlcj17Wydob3ZlcicsICdmb2N1cyddfSBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXtcclxuICAgICAgICA8UG9wb3ZlciBpZD1cInBvcG92ZXItYmFzaWNcIj5cclxuICAgICAgICAgICAgPFBvcG92ZXIuVGl0bGUgYXM9XCJoNFwiPntwcm9wcy50aXRsZX08L1BvcG92ZXIuVGl0bGU+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudH1cclxuICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgfT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgfSxcclxuICAgIG5hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcyNHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI0cHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCdcclxuICAgIH0sXHJcbiAgICBuYXZfY2FydF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcyOHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI4cHgnLFxyXG4gICAgfSxcclxuICAgIGRyb3BEb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kX25hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIycHgnLFxyXG4gICAgfSxcclxuICAgIGNhdGVnb3JpZXNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgIHdpZHRoOiAnMTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBmYUNoZXZyb25Eb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG4gICAgc21hbGxfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJcclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\toolbar.js */")));
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
        lineNumber: 407,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"].Title, {
      as: "h4",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 13
      }
    }, props.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"].Content, {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 13
      }
    }, props.content)),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci90b29sYmFyLmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5QXJyYXkiLCJ2YWx1ZSIsIlRvb2xiYXIiLCJwcm9wcyIsImxvZ2dlZEluIiwiZGFzaGJvYXJkX2hyZWYiLCJ0b2tlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWFyY2hUeXBlIiwic2V0U2VhcmNoVHlwZSIsImlzQ2F0ZWdvcnlPcGVuIiwic2V0SXNDYXRlZ29yeU9wZW4iLCJpc1Nob3BzIiwic2V0SXNTaG9wcyIsImNhdGVnb3J5X2lkIiwic2V0Q2F0ZWdvcnlfaWQiLCJ0b2dnbGUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJjYXRlZ29yeU1vdXNlRW50ZXIiLCJpbmRleCIsImNvcHlBcnJheSIsIk9iamVjdCIsImFzc2lnbiIsImNhdGVnb3JpZXNfbGlzdCIsIl9pZCIsImNhdGVnb3J5TW91c2VMZWF2ZSIsIkdsb2JhbFN0eWxlU2hlZXQiLCJwcmltcnlfY29sb3IiLCJ3aWR0aCIsImRpc3BsYXkiLCJjb2xvciIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwibWFwIiwiZWxlbWVudCIsInN0eWxlcyIsIm5hdl9saW5rIiwiZmFVc2VyIiwibmF2X2ZvbnRhd2Vzb21lIiwiZmFVc2VyUGx1cyIsImZhR2xvYmUiLCJmYUZpbGVJbnZvaWNlRG9sbGFyIiwiZmFMdWdnYWdlQ2FydCIsIm5hdl9jYXJ0X2ZvbnRhd2Vzb21lIiwibWF4V2lkdGgiLCJkcm9wRG93bl9mb250YXdlc29tZSIsImxvZ291dCIsImZhUG93ZXJPZmYiLCJOYXYiLCJMaW5rIiwiZmFMaXN0QWx0Iiwic21hbGxfZm9udGF3ZXNvbWUiLCJsZWZ0IiwicG9zaXRpb24iLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJib3JkZXIiLCJmYUNoZXZyb25Eb3duIiwiY2F0ZWdvcmllc19mb250YXdlc29tZSIsInN1Yl9jYXRlZ29yaWVzX2xpc3QiLCJlIiwiaSIsImZhQ2FydFBsdXMiLCJyZW1vdmVUb2tlbkZyb21TdG9yYWdlIiwic2Vjb25kX25hdl9mb250YXdlc29tZSIsIm1pbldpZHRoIiwiZmFDaGV2cm9uUmlnaHQiLCJmYVN0b3JlQWx0IiwiZmFQcm9kdWN0SHVudCIsImZhSGFuZHNIZWxwaW5nIiwiZmFFZGl0IiwiT3Zlcmx5UG9wb3ZlciIsInRpdGxlIiwiY29udGVudCIsImNoaWxkcmVuIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93IiwiZm9udFNpemUiLCJoZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImZhQ2hldnJvbkRvd25fZm9udGF3ZXNvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUFDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQUQsRUFBbUI7QUFBRUEsT0FBSyxFQUFFO0FBQVQsQ0FBbkIsRUFBMEM7QUFBRUEsT0FBSyxFQUFFO0FBQVQsQ0FBMUMsQ0FBdEI7O0FBQ0EsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQTs7QUFFcEIsTUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxNQUFJQyxjQUFjLEdBQUcsRUFBckI7O0FBQ0EsTUFBSUYsS0FBSyxDQUFDRyxLQUFOLElBQWUsRUFBbkIsRUFBdUI7QUFDbkJGLFlBQVEsR0FBRyxLQUFYO0FBQ0gsR0FGRCxNQUVPLElBQUlELEtBQUssQ0FBQ0csS0FBTixJQUFlLFVBQW5CLEVBQStCO0FBQ2xDRixZQUFRLEdBQUcsSUFBWDtBQUNBQyxrQkFBYyxHQUFHLFNBQWpCO0FBQ0gsR0FITSxNQUdBLElBQUlGLEtBQUssQ0FBQ0csS0FBTixJQUFlLFFBQW5CLEVBQTZCO0FBQ2hDRixZQUFRLEdBQUcsSUFBWDtBQUNBQyxrQkFBYyxHQUFHLFVBQWpCO0FBQ0gsR0FITSxNQUdB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Qm1ELFVBQU0sRUFBRSxNQUpZO0FBS3BCekIsYUFBUyxFQUFFLE1BTFM7QUFNcEJWLFlBQVEsRUFBRTtBQU5VLEdBdENiO0FBOENYc0MsMkJBQXlCLEVBQUU7QUFDdkJwRCxTQUFLLEVBQUUsTUFEZ0I7QUFFdkJGLFNBQUssRUFBRSxNQUZnQjtBQUd2Qm1ELFVBQU0sRUFBRSxNQUhlO0FBSXZCekIsYUFBUyxFQUFFLE1BSlk7QUFLdkJWLFlBQVEsRUFBRTtBQUxhLEdBOUNoQjtBQXFEWE8sbUJBQWlCLEVBQUU7QUFDZnJCLFNBQUssRUFBRSxNQURRO0FBRWZGLFNBQUssRUFBRSxNQUZRO0FBR2ZtRCxVQUFNLEVBQUUsTUFITztBQUlmekIsYUFBUyxFQUFFLE1BSkk7QUFLZlYsWUFBUSxFQUFFO0FBTEs7QUFyRFIsQ0FBZjtBQThEZTVDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lMmY3N2NjZjA2OWI4ZjVmOWE0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIE5hdmJhciwgTmF2LCBGb3JtLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgSW1hZ2UsIEJ1dHRvbixcclxuICAgIE5hdkRyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgQ2FyZCwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwLFxyXG4gICAgUm93LCBDb2wsIE92ZXJsYXlUcmlnZ2VyLCBQb3BvdmVyXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHRcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJ1xyXG5cclxuY29uc3QgY2F0ZWdvcnlBcnJheSA9IFt7IHZhbHVlOiAnQWxsJyB9LCB7IHZhbHVlOiAnTWFjaGluYXknIH0sIHsgdmFsdWU6ICdDbG90aGVzJyB9XVxyXG5mdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcblxyXG4gICAgbGV0IGxvZ2dlZEluID0gZmFsc2VcclxuICAgIGxldCBkYXNoYm9hcmRfaHJlZiA9ICcnXHJcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gJycpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdjdXN0b21lcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2luZGV4J1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAndmVuZG9yJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vdmVuZG9yJ1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9hZG1pbidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVHlwZSwgc2V0U2VhcmNoVHlwZV0gPSBSZWFjdC51c2VTdGF0ZSgnQWxsJylcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTaG9wcywgc2V0SXNTaG9wc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlfaWQsIHNldENhdGVnb3J5X2lkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3BlbighaXNDYXRlZ29yeU9wZW4pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLmNhdGVnb3JpZXNfbGlzdClcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZChjb3B5QXJyYXlbaW5kZXhdLl9pZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdwLTAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsyfSBtZD17M30gc209ezEyfSB4cz17MTJ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGRpc3BsYXk6ICdmbGV4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGwtM1wiIHN0eWxlPXt7IGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19Pk11aGFsaWs8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17N30gbWQ9ezV9IHNtPXsxMn0geHM9ezEyfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGFzPXtCdXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17QnV0dG9ufSB2YXJpYW50PSdvdXRsaW5lLXN1Y2Nlc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJzdXBlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5QXJyYXkubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFR5cGUoZWxlbWVudC52YWx1ZSl9PntlbGVtZW50LnZhbHVlfTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmUtc3VjY2Vzcyc+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX2xnX21kIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0nbXItYXV0byAgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+U2lnbmluL3VwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZX0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkVuZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPk9yZGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXItYXV0bycgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUx1Z2dhZ2VDYXJ0fSBzdHlsZT17c3R5bGVzLm5hdl9jYXJ0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5DYXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMzVweCcsIG1heFdpZHRoOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGlkPVwibmF2LWRyb3Bkb3duXCIgYWxpZ25SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17ZGFzaGJvYXJkX2hyZWZ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9Jy4vdmVuZG9yJyBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17cHJvcHMubG9nb3V0fSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvZ291dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgZXhwYW5kPVwibWRcIiBjbGFzc05hbWU9JyBtLTIgcC0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9J3AtMSBtLTAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX3NtX3hzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG9uTW91c2VPdmVyPXtvbk1vdXNlRW50ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfSBzaG93PXtpc0NhdGVnb3J5T3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJwLTJcIiBzdHlsZT17eyBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgd2lkdGg6ICc2MHZ3JywgbGVmdDogJy0yMHZ3JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIG1heEhlaWdodDogJzUwdmgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIGNsYXNzTmFtZT0ncGwtMiBwci0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLmNhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknIH19IGNsYXNzTmFtZT0ncC0xIG0tMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkRvd259IHN0eWxlPXtzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0ncC0wIG0tMCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2F0ZWdvcnlfaWQgPT0gZWxlbWVudC5faWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScuL2xvZ2luJyBjbGFzc05hbWU9J3AtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J3AtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmV9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+RW5nPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J3AtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9J3AtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FydFBsdXN9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+Q2FydDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBtYXhXaWR0aDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gaWQ9XCJuYXYtZHJvcGRvd25cIiBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17ZGFzaGJvYXJkX2hyZWZ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKX0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17eyBib3JkZXI6IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfbGdfbWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb25Nb3VzZU92ZXI9e29uTW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+Q2F0ZWdvcmllczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyogd2lkdGg6ICc2MHZ3JywgbGVmdDogJy0yMHZ3JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIG1heEhlaWdodDogJzUwdmgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6IGNhdGVnb3J5X2lkID09ICcnID8gJzIwN3B4JyA6ICc0MDBweCcsIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBvbk1vdXNlTGVhdmU9eygpID0+IGNhdGVnb3J5TW91c2VMZWF2ZSgpfSBjbGFzc05hbWU9J3BsLTIgcHItMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsIG1heEhlaWdodDogJzUwdmgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fSBjbGFzc05hbWU9J3AtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLmNhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgb25Nb3VzZU92ZXI9eygpID0+IGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsIG1heEhlaWdodDogJzUwdmgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fSBjbGFzc05hbWU9J21sLTEgcC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2F0ZWdvcnlfaWQgPT0gY2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlcnRpY2FsX2Jhcic+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Nob3BzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleFwiIG9uQ2xpY2s9eygpID0+IHNldElzU2hvcHMoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNob3BzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoJyBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3BzKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlByb2R1Y3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoJyBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGFuZHNIZWxwaW5nfSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkZlZWRiYWNrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkhlbHA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5TZWxsIFdpdGggTXVoYWxpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmVydGljYWxfYmFyJz58PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkdldCBNdWhhbGlrJ3MgQXBwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQgPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmtfdGV4dDpob3ZlciwgLnNlY29uZF9uYXZfbGlua190ZXh0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRfbmF2X2xpbmtfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWNlNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZjBmZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aWR0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudmVydGljYWxfYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3JpZXNfc21feHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX3NtX3hzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX2xnX21kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub193aWR0aF9zbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBPdmVybHlQb3BvdmVyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8T3ZlcmxheVRyaWdnZXIgdHJpZ2dlcj17Wydob3ZlcicsICdmb2N1cyddfSBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXtcclxuICAgICAgICA8UG9wb3ZlciBpZD1cInBvcG92ZXItYmFzaWNcIj5cclxuICAgICAgICAgICAgPFBvcG92ZXIuVGl0bGUgYXM9XCJoNFwiPntwcm9wcy50aXRsZX08L1BvcG92ZXIuVGl0bGU+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudH1cclxuICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgfT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgfSxcclxuICAgIG5hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcyNHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI0cHgnLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCdcclxuICAgIH0sXHJcbiAgICBuYXZfY2FydF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcyOHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI4cHgnLFxyXG4gICAgfSxcclxuICAgIGRyb3BEb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kX25hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIycHgnLFxyXG4gICAgfSxcclxuICAgIGNhdGVnb3JpZXNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgIHdpZHRoOiAnMTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBmYUNoZXZyb25Eb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG4gICAgc21hbGxfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=