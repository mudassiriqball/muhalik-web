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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "text-center pl-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, "Muhalik")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_lg_md align-items-center',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'nav_link_text',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_sm_xs',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'd-inline-flex align-items-center',
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
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      border: '1px solid lightgray'
    },
    className: "p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 45
    }
  }, props.categories_list && props.categories_list.map(function (element, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "p-0 m-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 57
      }
    }), __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 57
      }
    }, element.value, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 61
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
      style: styles.categories_fontawesome,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 61
      }
    })), __jsx("hr", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "p-0 m-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 57
      }
    }), props.sub_categories_list && props.sub_categories_list.map(function (e, i) {
      return e.category_id == element._id ? __jsx("div", {
        key: index,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 65
        }
      }, element.value) : null;
    }));
  }))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 33
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "./login",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 41
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUserPlus"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGlobe"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFileInvoiceDollar"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCartPlus"],
    style: styles.small_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'no_width_sm mr-2 ml-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
        lineNumber: 226,
        columnNumber: 41
      }
    }),
    id: "nav-dropdown",
    alignRight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    href: dashboard_href,
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 45
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Item, {
    className: "d-inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 45
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"].Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
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
      lineNumber: 237,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 45
    }
  }, "Logout"))) : null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
      lineNumber: 248,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'categories_lg_md',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave,
    show: isCategoryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faListAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 45
    }
  }, "Categories")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
    style: {
      minWidth: category_id == '' ? '207px' : '400px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
      lineNumber: 256,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      border: '1px solid lightgray'
    },
    className: "p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 49
    }
  }, props.categories_list && props.categories_list.map(function (element, index) {
    return __jsx("div", {
      key: index,
      onMouseOver: function onMouseOver() {
        return categoryMouseEnter(index);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 57
      }
    }, element.value, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 61
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"],
      style: styles.categories_fontawesome,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 61
      }
    }));
  })), category_id ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    style: {
      border: '1px solid lightgray'
    },
    className: "ml-1 p-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 53
    }
  }, props.sub_categories_list && props.sub_categories_list.map(function (element, index) {
    return element.category_id == category_id ? __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 65
      }
    }, element.value) : null;
  })) : null)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'vertical_bar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 33
    }
  }, "|"), isShops ? __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
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
      lineNumber: 288,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStoreAlt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 45
    }
  }, "Shops"), __jsx("div", {
    style: {
      width: '70px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 45
    }
  }))) : __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
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
      lineNumber: 296,
      columnNumber: 41
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faProductHunt"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 45
    }
  }, "Products"), __jsx("div", {
    style: {
      width: '70px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'width',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 45
    }
  }))), __jsx(OverlyPopover, {
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
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHandsHelping"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 41
    }
  }, "About Us"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEdit"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 41
    }
  }, "Feedback"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    className: "d-inline-flex p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEdit"],
    style: styles.second_nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 41
    }
  }, "Help"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 33
    }
  }), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 41
    }
  }, "Sell With Muhalik"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'vertical_bar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 33
    }
  }, "|"), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["868636535", [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 41
    }
  }, "Get Muhalik's App")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "868636535",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color],
    __self: this
  }, ".nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:13px;padding:0px;margin-top:1px;color:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, ";}.nav_link_text.__jsx-style-dynamic-selector:hover,.second_nav_link_text.__jsx-style-dynamic-selector:hover{color:black;}.second_nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:14px;color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, ";}.category_list_item.__jsx-style-dynamic-selector{cursor:pointer;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;padding:2%;color:gray;}.category_list_item.__jsx-style-dynamic-selector:hover{color:#005ce6;background:#e6f0ff;}@media (max-width:992px){.width.__jsx-style-dynamic-selector{max-width:0px;display:none;}}.vertical_bar.__jsx-style-dynamic-selector{color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color, ";}.categories_sm_xs.__jsx-style-dynamic-selector{display:none;}@media (max-width:767px){.vertical_bar.__jsx-style-dynamic-selector{display:none;}.categories_sm_xs.__jsx-style-dynamic-selector{display:block;}.categories_lg_md.__jsx-style-dynamic-selector{display:none;}}@media (max-width:450px){.no_width_sm.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvVmlCLEFBRzRDLEFBUXhCLEFBRXdCLEFBTUosQUFTRCxBQU1JLEFBTXZCLEFBRWtCLEFBSUksQUFHQyxBQUdELEFBTWxCLFlBL0NILENBZ0NBLEFBSUksQUFNQSxBQUtBLENBNUJMLEFBTUksQUFjQyxDQTlCVyxJQWhCSSxBQVVBLE9BT0ssQ0FlcEIsTUFOSixDQXpCZ0IsQUFXakIsQ0F3QkMsV0FsQ21CLGVBRXBCLFFBUUMsMkJBUkEsZ0NBY3VCLDZGQUNKLGVBQ0osV0FFaEIsV0FBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcTmV3IGZvbGRlclxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcY3VzdG9tZXJcXHRvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgTmF2YmFyLCBOYXYsIEZvcm0sIElucHV0R3JvdXAsIEZvcm1Db250cm9sLCBJbWFnZSwgQnV0dG9uLFxyXG4gICAgTmF2RHJvcGRvd24sIERyb3Bkb3duQnV0dG9uLCBDYXJkLCBEcm9wZG93biwgQnV0dG9uR3JvdXAsXHJcbiAgICBSb3csIENvbCwgT3ZlcmxheVRyaWdnZXIsIFBvcG92ZXJcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFTZWFyY2gsIGZhVXNlclBsdXMsIGZhTGFuZ3VhZ2UsIGZhUG93ZXJPZmYsIGZhVXNlcixcclxuICAgIGZhQ2FydFBsdXMsIGZhSGFuZHNIZWxwaW5nLCBmYVBlbiwgZmFTaWduT3V0QWx0LCBmYUdsb2JlLFxyXG4gICAgZmFMdWdnYWdlQ2FydCwgZmFGaWxlSW52b2ljZURvbGxhciwgZmFMaXN0QWx0LCBmYUVkaXQsXHJcbiAgICBmYVN0b3JlQWx0LCBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnXHJcblxyXG5jb25zdCBjYXRlZ29yeUFycmF5ID0gW3sgdmFsdWU6ICdBbGwnIH0sIHsgdmFsdWU6ICdNYWNoaW5heScgfSwgeyB2YWx1ZTogJ0Nsb3RoZXMnIH1dXHJcbmZ1bmN0aW9uIFRvb2xiYXIocHJvcHMpIHtcclxuXHJcbiAgICBsZXQgbG9nZ2VkSW4gPSBmYWxzZVxyXG4gICAgbGV0IGRhc2hib2FyZF9ocmVmID0gJydcclxuICAgIGlmIChwcm9wcy50b2tlbiA9PSAnJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gZmFsc2VcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ2N1c3RvbWVyJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vaW5kZXgnXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICd2ZW5kb3InKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi92ZW5kb3InXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdhZG1pbicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2FkbWluJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hUeXBlLCBzZXRTZWFyY2hUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKCdBbGwnKVxyXG4gICAgY29uc3QgW2lzQ2F0ZWdvcnlPcGVuLCBzZXRJc0NhdGVnb3J5T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc1Nob3BzLCBzZXRJc1Nob3BzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yeV9pZCwgc2V0Q2F0ZWdvcnlfaWRdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKCFpc0NhdGVnb3J5T3BlbilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgc2V0SXNDYXRlZ29yeU9wZW4oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2F0ZWdvcnlNb3VzZUVudGVyKGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMuY2F0ZWdvcmllc19saXN0KVxyXG4gICAgICAgIHNldENhdGVnb3J5X2lkKGNvcHlBcnJheVtpbmRleF0uX2lkKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2F0ZWdvcnlNb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHNldENhdGVnb3J5X2lkKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmQgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9J3AtMCBtLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSd3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAnIG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezJ9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgZGlzcGxheTogJ2ZsZXgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwbC0zXCI+TXVoYWxpazwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs3fSBtZD17NX0gc209ezEyfSB4cz17MTJ9IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gYXM9e0J1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtCdXR0b259IHZhcmlhbnQ9J291dGxpbmUtc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGNsYXNzTmFtZT1cInN1cGVyLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0U2VhcmNoVHlwZShlbGVtZW50LnZhbHVlKX0+e2VsZW1lbnQudmFsdWV9PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZS1zdWNjZXNzJz5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfbGdfbWQgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nLi9sb2dpbicgY2xhc3NOYW1lPSdtci1hdXRvICBhbGlnbi1pdGVtcy1jZW50ZXInIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5TaWduaW4vdXA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0nbXItYXV0bycgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+RW5nPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9JyMnIGNsYXNzTmFtZT0nbXItYXV0bycgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbGVJbnZvaWNlRG9sbGFyfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+T3JkZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtci1hdXRvJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTHVnZ2FnZUNhcnR9IHN0eWxlPXtzdHlsZXMubmF2X2NhcnRfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkNhcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICczNXB4JywgbWF4V2lkdGg6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gaWQ9XCJuYXYtZHJvcGRvd25cIiBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtkYXNoYm9hcmRfaHJlZn0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj0nLi92ZW5kb3InIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlByb2ZpbGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBvbkNsaWNrPXtwcm9wcy5sb2dvdXR9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT0nIG0tMiBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT0ncC0xIG0tMCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfc21feHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb25Nb3VzZU92ZXI9e29uTW91c2VFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17TmF2Lkxpbmt9IGNsYXNzTmFtZT1cInAtMlwiIHN0eWxlPXt7IGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIGNsYXNzTmFtZT0ncGwtMiBwci0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknIH19IGNsYXNzTmFtZT0ncC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInAtMCBtLTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwicC0wIG0tMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdC5tYXAoKGUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2F0ZWdvcnlfaWQgPT0gZWxlbWVudC5faWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScuL2xvZ2luJyBjbGFzc05hbWU9J3AtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyUGx1c30gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J3AtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmV9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+RW5nPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vX3dpZHRoX3NtIG1yLTIgbWwtMic+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J3AtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5zbWFsbF9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9J3AtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FydFBsdXN9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+Q2FydDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBtYXhXaWR0aDogJzMwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gaWQ9XCJuYXYtZHJvcGRvd25cIiBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17ZGFzaGJvYXJkX2hyZWZ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UoKX0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2dvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17eyBib3JkZXI6IGAwLjVweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3JpZXNfbGdfbWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb25Nb3VzZU92ZXI9e29uTW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9IHNob3c9e2lzQ2F0ZWdvcnlPcGVufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdEFsdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+Q2F0ZWdvcmllczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBzdHlsZT17eyBtaW5XaWR0aDogY2F0ZWdvcnlfaWQgPT0gJycgPyAnMjA3cHgnIDogJzQwMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgb25Nb3VzZUxlYXZlPXsoKSA9PiBjYXRlZ29yeU1vdXNlTGVhdmUoKX0gY2xhc3NOYW1lPSdwbC0yIHByLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknIH19IGNsYXNzTmFtZT0ncC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiBvbk1vdXNlT3Zlcj17KCkgPT4gY2F0ZWdvcnlNb3VzZUVudGVyKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyB9fSBjbGFzc05hbWU9J21sLTEgcC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2F0ZWdvcnlfaWQgPT0gY2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlcnRpY2FsX2Jhcic+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Nob3BzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleFwiIG9uQ2xpY2s9eygpID0+IHNldElzU2hvcHMoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlNob3BzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoJyBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3BzKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPlByb2R1Y3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZHRoJyBzdHlsZT17eyB3aWR0aDogJzcwcHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGFuZHNIZWxwaW5nfSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkZlZWRiYWNrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkhlbHA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5TZWxsIFdpdGggTXVoYWxpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmVydGljYWxfYmFyJz58PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkdldCBNdWhhbGlrJ3MgQXBwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQgPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQ6aG92ZXIsIC5zZWNvbmRfbmF2X2xpbmtfdGV4dDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFja1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kX25hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNWNlNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZjBmZlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aWR0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudmVydGljYWxfYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3JpZXNfc21feHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX3NtX3hzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX2xnX21kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub193aWR0aF9zbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBPdmVybHlQb3BvdmVyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8T3ZlcmxheVRyaWdnZXIgdHJpZ2dlcj17Wydob3ZlcicsICdmb2N1cyddfSBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXtcclxuICAgICAgICA8UG9wb3ZlciBpZD1cInBvcG92ZXItYmFzaWNcIj5cclxuICAgICAgICAgICAgPFBvcG92ZXIuVGl0bGUgYXM9XCJoNFwiPntwcm9wcy50aXRsZX08L1BvcG92ZXIuVGl0bGU+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudH1cclxuICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgfT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHgnLFxyXG4gICAgfSxcclxuICAgIG5hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMjRweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjRweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjRweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyNHB4JyxcclxuICAgICAgICBtYXJnaW46ICcwcHgnXHJcbiAgICB9LFxyXG4gICAgbmF2X2NhcnRfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzI4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjhweCcsXHJcbiAgICB9LFxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kX25hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjJweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjJweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjJweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMnB4JyxcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICB3aWR0aDogJzEwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgZmFDaGV2cm9uRG93bl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTJweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMnB4JyxcclxuICAgIH0sXHJcbiAgICBzbWFsbF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJcclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\toolbar.js */")));
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
        lineNumber: 409,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"].Title, {
      as: "h4",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 13
      }
    }, props.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"].Content, {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 13
      }
    }, props.content)),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
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
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18x'
  },
  nav_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    width: '24px',
    height: '24px',
    maxHeight: '24px',
    maxWidth: '24px',
    margin: '0px'
  },
  nav_cart_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    width: '28px',
    height: '28px',
    maxHeight: '28px',
    maxWidth: '28px'
  },
  dropDown_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    margin: '0px 20px 0px 0px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  second_nav_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
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
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    width: '12px',
    height: '12px',
    maxHeight: '12px',
    maxWidth: '12px'
  },
  small_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci90b29sYmFyLmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5QXJyYXkiLCJ2YWx1ZSIsIlRvb2xiYXIiLCJwcm9wcyIsImxvZ2dlZEluIiwiZGFzaGJvYXJkX2hyZWYiLCJ0b2tlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWFyY2hUeXBlIiwic2V0U2VhcmNoVHlwZSIsImlzQ2F0ZWdvcnlPcGVuIiwic2V0SXNDYXRlZ29yeU9wZW4iLCJpc1Nob3BzIiwic2V0SXNTaG9wcyIsImNhdGVnb3J5X2lkIiwic2V0Q2F0ZWdvcnlfaWQiLCJ0b2dnbGUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJjYXRlZ29yeU1vdXNlRW50ZXIiLCJpbmRleCIsImNvcHlBcnJheSIsIk9iamVjdCIsImFzc2lnbiIsImNhdGVnb3JpZXNfbGlzdCIsIl9pZCIsImNhdGVnb3J5TW91c2VMZWF2ZSIsIkdsb2JhbFN0eWxlU2hlZXQiLCJwcmltcnlfY29sb3IiLCJ3aWR0aCIsImRpc3BsYXkiLCJCdXR0b25Hcm91cCIsIkJ1dHRvbiIsIm1hcCIsImVsZW1lbnQiLCJzdHlsZXMiLCJuYXZfbGluayIsImZhVXNlciIsIm5hdl9mb250YXdlc29tZSIsImZhVXNlclBsdXMiLCJmYUdsb2JlIiwiZmFGaWxlSW52b2ljZURvbGxhciIsImZhTHVnZ2FnZUNhcnQiLCJuYXZfY2FydF9mb250YXdlc29tZSIsIm1heFdpZHRoIiwiZHJvcERvd25fZm9udGF3ZXNvbWUiLCJsb2dvdXQiLCJmYVBvd2VyT2ZmIiwiTmF2IiwiTGluayIsImNvbG9yIiwiZmFMaXN0QWx0Iiwic21hbGxfZm9udGF3ZXNvbWUiLCJib3JkZXIiLCJmYUNoZXZyb25SaWdodCIsImNhdGVnb3JpZXNfZm9udGF3ZXNvbWUiLCJzdWJfY2F0ZWdvcmllc19saXN0IiwiZSIsImkiLCJmYUNhcnRQbHVzIiwicmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSIsInNlY29uZF9uYXZfZm9udGF3ZXNvbWUiLCJtaW5XaWR0aCIsImZhU3RvcmVBbHQiLCJmYVByb2R1Y3RIdW50IiwiZmFIYW5kc0hlbHBpbmciLCJmYUVkaXQiLCJPdmVybHlQb3BvdmVyIiwidGl0bGUiLCJjb250ZW50IiwiY2hpbGRyZW4iLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJmb250U2l6ZSIsImZvbnRhd2Vzb21lIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJmYUNoZXZyb25Eb3duX2ZvbnRhd2Vzb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUFELEVBQW1CO0FBQUVBLE9BQUssRUFBRTtBQUFULENBQW5CLEVBQTBDO0FBQUVBLE9BQUssRUFBRTtBQUFULENBQTFDLENBQXRCOztBQUNBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQUE7O0FBQUE7O0FBRXBCLE1BQUlDLFFBQVEsR0FBRyxLQUFmO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLEVBQXJCOztBQUNBLE1BQUlGLEtBQUssQ0FBQ0csS0FBTixJQUFlLEVBQW5CLEVBQXVCO0FBQ25CRixZQUFRLEdBQUcsS0FBWDtBQUNILEdBRkQsTUFFTyxJQUFJRCxLQUFLLENBQUNHLEtBQU4sSUFBZSxVQUFuQixFQUErQjtBQUNsQ0YsWUFBUSxHQUFHLElBQVg7QUFDQUMsa0JBQWMsR0FBRyxTQUFqQjtBQUNILEdBSE0sTUFHQSxJQUFJRixLQUFLLENBQUNHLEtBQU4sSUFBZSxRQUFuQixFQUE2QjtBQUNoQ0YsWUFBUSxHQUFHLElBQVg7QUFDQUMsa0JBQWMsR0FBRyxVQUFqQjtBQUNILEdBSE0sTUFHQSxJQUFJRixLQUFLLENBQUNHLEtBQU4sSUFBZSxPQUFu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LEVBQUUsTUFMUztBQU1wQmpDLFlBQVEsRUFBRTtBQU5VLEdBdENiO0FBOENYVyx3QkFBc0IsRUFBRTtBQUNwQkwsU0FBSyxFQUFFLE1BRGE7QUFFcEIsYUFBTyxPQUZhO0FBR3BCckIsU0FBSyxFQUFFLE1BSGE7QUFJcEIrQyxVQUFNLEVBQUUsTUFKWTtBQUtwQkMsYUFBUyxFQUFFLE1BTFM7QUFNcEJqQyxZQUFRLEVBQUU7QUFOVSxHQTlDYjtBQXNEWG9DLDJCQUF5QixFQUFFO0FBQ3ZCOUIsU0FBSyxZQUFLdkIsbURBQWdCLENBQUNDLFlBQXRCLENBRGtCO0FBRXZCQyxTQUFLLEVBQUUsTUFGZ0I7QUFHdkIrQyxVQUFNLEVBQUUsTUFIZTtBQUl2QkMsYUFBUyxFQUFFLE1BSlk7QUFLdkJqQyxZQUFRLEVBQUU7QUFMYSxHQXREaEI7QUE2RFhRLG1CQUFpQixFQUFFO0FBQ2ZGLFNBQUssWUFBS3ZCLG1EQUFnQixDQUFDQyxZQUF0QixDQURVO0FBRWZDLFNBQUssRUFBRSxNQUZRO0FBR2YrQyxVQUFNLEVBQUUsTUFITztBQUlmQyxhQUFTLEVBQUUsTUFKSTtBQUtmakMsWUFBUSxFQUFFO0FBTEs7QUE3RFIsQ0FBZjtBQXNFZTNDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iNGMyMTZjM2U0OGE0NTk2NjkxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIE5hdmJhciwgTmF2LCBGb3JtLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgSW1hZ2UsIEJ1dHRvbixcclxuICAgIE5hdkRyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgQ2FyZCwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwLFxyXG4gICAgUm93LCBDb2wsIE92ZXJsYXlUcmlnZ2VyLCBQb3BvdmVyXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhU2VhcmNoLCBmYVVzZXJQbHVzLCBmYUxhbmd1YWdlLCBmYVBvd2VyT2ZmLCBmYVVzZXIsXHJcbiAgICBmYUNhcnRQbHVzLCBmYUhhbmRzSGVscGluZywgZmFQZW4sIGZhU2lnbk91dEFsdCwgZmFHbG9iZSxcclxuICAgIGZhTHVnZ2FnZUNhcnQsIGZhRmlsZUludm9pY2VEb2xsYXIsIGZhTGlzdEFsdCwgZmFFZGl0LFxyXG4gICAgZmFTdG9yZUFsdCwgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHRcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUHJvZHVjdEh1bnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHJlbW92ZVRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJ1xyXG5cclxuY29uc3QgY2F0ZWdvcnlBcnJheSA9IFt7IHZhbHVlOiAnQWxsJyB9LCB7IHZhbHVlOiAnTWFjaGluYXknIH0sIHsgdmFsdWU6ICdDbG90aGVzJyB9XVxyXG5mdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XHJcblxyXG4gICAgbGV0IGxvZ2dlZEluID0gZmFsc2VcclxuICAgIGxldCBkYXNoYm9hcmRfaHJlZiA9ICcnXHJcbiAgICBpZiAocHJvcHMudG9rZW4gPT0gJycpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdjdXN0b21lcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2luZGV4J1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAndmVuZG9yJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vdmVuZG9yJ1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9hZG1pbidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVHlwZSwgc2V0U2VhcmNoVHlwZV0gPSBSZWFjdC51c2VTdGF0ZSgnQWxsJylcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTaG9wcywgc2V0SXNTaG9wc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlfaWQsIHNldENhdGVnb3J5X2lkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3BlbighaXNDYXRlZ29yeU9wZW4pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHByb3BzLmNhdGVnb3JpZXNfbGlzdClcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZChjb3B5QXJyYXlbaW5kZXhdLl9pZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhdGVnb3J5TW91c2VMZWF2ZSgpIHtcclxuICAgICAgICBzZXRDYXRlZ29yeV9pZCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdwLTAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsyfSBtZD17M30gc209ezEyfSB4cz17MTJ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGRpc3BsYXk6ICdmbGV4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGwtM1wiPk11aGFsaWs8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17N30gbWQ9ezV9IHNtPXsxMn0geHM9ezEyfSBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGFzPXtCdXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17QnV0dG9ufSB2YXJpYW50PSdvdXRsaW5lLXN1Y2Nlc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJzdXBlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5QXJyYXkubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFR5cGUoZWxlbWVudC52YWx1ZSl9PntlbGVtZW50LnZhbHVlfTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmUtc3VjY2Vzcyc+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17NH0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX2xnX21kIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0nbXItYXV0byAgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCc+U2lnbmluL3VwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHbG9iZX0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkVuZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPScjJyBjbGFzc05hbWU9J21yLWF1dG8nIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxlSW52b2ljZURvbGxhcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPk9yZGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXItYXV0bycgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUx1Z2dhZ2VDYXJ0fSBzdHlsZT17c3R5bGVzLm5hdl9jYXJ0X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5DYXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiByb3VuZGVkQ2lyY2xlIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiAnMzVweCcsIG1heFdpZHRoOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGlkPVwibmF2LWRyb3Bkb3duXCIgYWxpZ25SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17ZGFzaGJvYXJkX2hyZWZ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9Jy4vdmVuZG9yJyBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17cHJvcHMubG9nb3V0fSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUG93ZXJPZmZ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvZ291dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgZXhwYW5kPVwibWRcIiBjbGFzc05hbWU9JyBtLTIgcC0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9J3AtMSBtLTAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX3NtX3hzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG9uTW91c2VPdmVyPXtvbk1vdXNlRW50ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfSBzaG93PXtpc0NhdGVnb3J5T3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJwLTJcIiBzdHlsZT17eyBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaXN0QWx0fSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBjbGFzc05hbWU9J3BsLTIgcHItMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyB9fSBjbGFzc05hbWU9J3AtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJwLTAgbS0wXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInAtMCBtLTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNhdGVnb3J5X2lkID09IGVsZW1lbnQuX2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nLi9sb2dpbicgY2xhc3NOYW1lPSdwLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nIycgY2xhc3NOYW1lPSdwLTInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkVuZzwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub193aWR0aF9zbSBtci0yIG1sLTInPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nIycgY2xhc3NOYW1lPSdwLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmlsZUludm9pY2VEb2xsYXJ9IHN0eWxlPXtzdHlsZXMuc21hbGxfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdwLTInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhcnRQbHVzfSBzdHlsZT17c3R5bGVzLnNtYWxsX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkNhcnQ8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm9fd2lkdGhfc20gbXItMiBtbC0yJz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgbWF4V2lkdGg6ICczMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGlkPVwibmF2LWRyb3Bkb3duXCIgYWxpZ25SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9e2Rhc2hib2FyZF9ocmVmfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXgnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlByb2ZpbGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiByZW1vdmVUb2tlbkZyb21TdG9yYWdlKCl9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBvd2VyT2ZmfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3sgYm9yZGVyOiBgMC41cHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWVzX2xnX21kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG9uTW91c2VPdmVyPXtvbk1vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfSBzaG93PXtpc0NhdGVnb3J5T3Blbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17TmF2Lkxpbmt9IGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RBbHR9IHN0eWxlPXtzdHlsZXMuc2Vjb25kX25hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkNhdGVnb3JpZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6IGNhdGVnb3J5X2lkID09ICcnID8gJzIwN3B4JyA6ICc0MDBweCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIG9uTW91c2VMZWF2ZT17KCkgPT4gY2F0ZWdvcnlNb3VzZUxlYXZlKCl9IGNsYXNzTmFtZT0ncGwtMiBwci0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyB9fSBjbGFzc05hbWU9J3AtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLmNhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgb25Nb3VzZU92ZXI9eygpID0+IGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScgfX0gY2xhc3NOYW1lPSdtbC0xIHAtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhdGVnb3J5X2lkID09IGNhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJ0aWNhbF9iYXInPnw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTaG9wcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXhcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3BzKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0b3JlQWx0fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5TaG9wczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWR0aCcgc3R5bGU9e3sgd2lkdGg6ICc3MHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4XCIgb25DbGljaz17KCkgPT4gc2V0SXNTaG9wcyh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17c3R5bGVzLnNlY29uZF9uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5Qcm9kdWN0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWR0aCcgc3R5bGU9e3sgd2lkdGg6ICc3MHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhhbmRzSGVscGluZ30gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5BYm91dCBVczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5GZWVkYmFjazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gc3R5bGU9e3N0eWxlcy5zZWNvbmRfbmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5IZWxwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+U2VsbCBXaXRoIE11aGFsaWs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlcnRpY2FsX2Jhcic+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5HZXQgTXVoYWxpaydzIEFwcDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG5cclxuICAgICAgICAgICAgPC9DYXJkID5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfbGlua190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfbGlua190ZXh0OmhvdmVyLCAuc2Vjb25kX25hdl9saW5rX3RleHQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2tcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZF9uYXZfbGlua190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDVjZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmYwZmZcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2lkdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yaWVzX3NtX3hzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52ZXJ0aWNhbF9iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcmllc19zbV94cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcmllc19sZ19tZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubm9fd2lkdGhfc217XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgT3Zlcmx5UG9wb3ZlciA9IChwcm9wcykgPT4gKFxyXG4gICAgPE92ZXJsYXlUcmlnZ2VyIHRyaWdnZXI9e1snaG92ZXInLCAnZm9jdXMnXX0gcGxhY2VtZW50PVwiYm90dG9tXCIgb3ZlcmxheT17XHJcbiAgICAgICAgPFBvcG92ZXIgaWQ9XCJwb3BvdmVyLWJhc2ljXCI+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLlRpdGxlIGFzPVwiaDRcIj57cHJvcHMudGl0bGV9PC9Qb3BvdmVyLlRpdGxlPlxyXG4gICAgICAgICAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgIDwvUG9wb3Zlcj5cclxuICAgIH0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgIH0sXHJcblxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTh4JyxcclxuICAgIH0sXHJcbiAgICBuYXZfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzI0cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjRweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4J1xyXG4gICAgfSxcclxuICAgIG5hdl9jYXJ0X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcyOHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI4cHgnLFxyXG4gICAgfSxcclxuICAgIGRyb3BEb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luOiAnMHB4IDIwcHggMHB4IDBweCcsXHJcbiAgICAgICAgd2lkdGg6ICcxOHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxOHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxOHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE4cHgnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZF9uYXZfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzIycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzIycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzIycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjJweCcsXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcmllc19mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZhQ2hldnJvbkRvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzEycHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzEycHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTJweCcsXHJcbiAgICB9LFxyXG4gICAgc21hbGxfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjBweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9