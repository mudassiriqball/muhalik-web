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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\customer\\toolbar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;










var categoryArray = [{
  value: 'All'
}, {
  value: 'Machinay'
}, {
  value: 'Clothes'
}];

var Toolbar = function Toolbar(props) {
  _s();

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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState('All'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      searchType = _React$useState2[0],
      setSearchType = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState('En'),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      selectedLang = _React$useState4[0],
      setSelectedLang = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      isCategoryOpen = _React$useState6[0],
      setIsCategoryOpen = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      isShopOpen = _React$useState8[0],
      setIsShopOpen = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      isProductOpen = _React$useState10[0],
      setIsProductOpen = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState11, 2),
      hoverCategory = _React$useState12[0],
      setHoverCategory = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState13, 2),
      hoverProducts = _React$useState14[0],
      setHoverProducts = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState15, 2),
      hoverShops = _React$useState16[0],
      setHoverShops = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(''),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState17, 2),
      category_id = _React$useState18[0],
      setCategory_id = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState19, 2),
      isSticky = _React$useState20[0],
      setSticky = _React$useState20[1];

  var ref = react__WEBPACK_IMPORTED_MODULE_11___default.a.useRef(null);

  var handleScroll = function handleScroll() {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_11___default.a.useEffect(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', function () {
        return handleScroll;
      });
    };
  }, []);

  function toggle() {
    setIsCategoryOpen(!isCategoryOpen);
  }

  function categoryMouseEnter(index) {
    var copyArray = Object.assign([], props.categories_list);
    setCategory_id(copyArray[index]._id);
  }

  function categoryMouseLeave() {
    setCategory_id('');
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    className: "p-0 m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("div", {
    ref: ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + "sticky-wrapper".concat(isSticky ? ' sticky' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'navbar w-100 p-0 m-0 sticky-inner',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'row w-100 m-0',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "auto",
    md: "auto",
    sm: "auto",
    xs: "auto",
    className: "d-inline-flex align-items-center m-2 p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    className: "d-inline-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'display_in_md_lg pr-2',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "muhalik.jpg",
    className: "display_in_md_lg",
    roundedCircle: true,
    fluid: true,
    style: {
      width: '50px',
      display: 'flex',
      margin: '0%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 45
    }
  })), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + " text_animation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }, "Mahalk", __jsx("span", {
    style: {
      fontSize: '15px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'display_in_md_lg',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 79
    }
  }, "@2020")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'display_in_md_lg pr-4',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "align-items-center m-2 p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    className: "d-inline-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'display_in_md_lg',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 45
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"],
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 53
    }
  }, searchType), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    className: "super-colors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 53
    }
  }, categoryArray.map(function (element, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
      key: index,
      onClick: function onClick() {
        return setSearchType(element.value);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 61
      }
    }, element.value);
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    placeholder: "Search here",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Append, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"],
    style: styles.search_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 49
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "auto",
    md: 12,
    sm: 0,
    xs: 0,
    className: "m-0 p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'display_in_md_lg align-items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "d-inline-flex align-items-center w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 41
    }
  }, __jsx("div", {
    style: {
      marginLeft: '5vw'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 45
    }
  }), loggedIn ? null : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "./login",
    className: "ml-2 align-items-center",
    style: styles.nav_link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 49
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUser"],
    style: styles.nav_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 53
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUserPlus"],
    style: styles.nav_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 53
    }
  }, "Login/Join")), __jsx("div", {
    href: "#",
    style: {
      zIndex: 1
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'ml-2 d-flex flex-column',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLanguage"],
    style: styles.nav_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 49
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: "p-0 m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link,
    className: "d-inline-flex m-0 p-0 align-items-center",
    style: {
      color: 'gray'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'nav_link_text p-0 m-0',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 57
    }
  }, selectedLang)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    className: "super-colors",
    style: {
      zIndex: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 53
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    onClick: function onClick() {
      return setSelectedLang('En');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 57
    }
  }, "English"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
    onClick: function onClick() {
      return setSelectedLang("Ar");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 57
    }
  }, "العربية")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    className: "ml-2",
    style: styles.nav_link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 45
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faShoppingCart"],
    style: styles.nav_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'nav_link_text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 49
    }
  }, "Cart")), loggedIn ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
    title: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: "muhalik.jpg",
      roundedCircle: true,
      fluid: true,
      style: {
        width: '35px',
        maxWidth: '35px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 69
      }
    }),
    className: "ml-2",
    id: "nav-dropdown",
    alignRight: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 49
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    href: dashboard_href,
    className: "d-inline-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 57
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    href: "./vendor",
    className: "d-inline-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 57
    }
  }, "Dashboard")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    className: "d-inline-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUser"],
    style: styles.dropDown_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 57
    }
  }, "Profile")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Divider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 53
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    onClick: props.logout,
    className: "d-inline-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 53
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPowerOff"],
    style: styles.dropDown_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 57
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 57
    }
  }, "Logout"))) : null)))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'display_in_md_lg',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    expand: "md",
    className: "ml-1 mr-2 mb-2 p-0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "w-100 d-inline-flex",
    style: {
      border: '0.5px solid lightgray',
      padding: '0% 1%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    onMouseOver: function onMouseOver() {
      setIsCategoryOpen(true), setHoverCategory(true);
    },
    onMouseLeave: function onMouseLeave() {
      setIsCategoryOpen(false), setHoverCategory(false);
    },
    show: isCategoryOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    style: {
      border: hoverCategory ? '1px solid lightgray' : null,
      margin: hoverCategory ? '-1px' : '0px',
      color: hoverCategory ? "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color) : 'gray'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faListUl"],
    style: hoverCategory ? styles.categories_fontawesome_hover : styles.categories_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 41
    }
  }), __jsx("div", {
    style: {
      color: hoverCategory ? "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color) : 'gray'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'second_nav_link_text ml-1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 41
    }
  }, " Categories ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    style: {
      minWidth: category_id == '' ? '30vw' : '60vw',
      left: '-1vw'
    },
    className: "m-0 pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true,
    onMouseLeave: function onMouseLeave() {
      return categoryMouseLeave();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 41
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      height: '80vh',
      overflowY: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 45
    }
  }, props.categories_list && props.categories_list.map(function (element, index) {
    return __jsx("div", {
      key: index,
      onMouseOver: function onMouseOver() {
        return categoryMouseEnter(index);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 53
      }
    }, element.value, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'mr-auto',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 57
      }
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faChevronRight"],
      style: styles.categories_fontawesome,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 57
      }
    }));
  })), category_id ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      borderLeft: '1px solid lightgray',
      height: '80vh',
      overflowY: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 49
    }
  }, props.sub_categories_list && props.sub_categories_list.map(function (element, index) {
    return element.category_id == category_id ? __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + "category_list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 61
      }
    }, element.value) : null;
  })) : null))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    onMouseOver: function onMouseOver() {
      setIsShopOpen(true), setHoverShops(true);
    },
    onMouseLeave: function onMouseLeave() {
      setIsShopOpen(false), setHoverShops(false);
    },
    show: isShopOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    style: {
      border: hoverShops ? '1px solid lightgray' : null,
      margin: hoverShops ? '-1px' : '0px',
      color: hoverShops ? "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color) : 'gray'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faStoreAlt"],
    style: hoverShops ? styles.categories_fontawesome_hover : styles.categories_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 41
    }
  }), __jsx("div", {
    style: {
      color: hoverShops ? "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color) : 'gray'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'second_nav_link_text ml-1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 41
    }
  }, " Shops ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    style: {
      minWidth: '80vw',
      minHeight: '80vh'
    },
    className: "m-0 pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 41
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 45
    }
  }, "Shops Will Show Here")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    onMouseOver: function onMouseOver() {
      setIsProductOpen(true), setHoverProducts(true);
    },
    onMouseLeave: function onMouseLeave() {
      setIsProductOpen(false), setHoverProducts(false);
    },
    show: isProductOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link,
    className: "d-inline-flex align-items-center",
    style: {
      border: hoverProducts ? '1px solid lightgray' : null,
      margin: hoverProducts ? '-1px' : '0px',
      color: hoverProducts ? "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color) : 'gray'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faProductHunt"],
    style: hoverProducts ? styles.categories_fontawesome_hover : styles.categories_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 41
    }
  }), __jsx("div", {
    style: {
      color: hoverProducts ? "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color) : 'gray'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'second_nav_link_text ml-1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 41
    }
  }, " Products ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    style: {
      minWidth: '80vw',
      left: '-84%',
      minHeight: '80vh'
    },
    className: "m-0 pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    noGutters: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 41
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 45
    }
  }, "Products Will Show Here")))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 41
    }
  }, "About Us"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 41
    }
  }, "Feedback"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 41
    }
  }, "Help?"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'mr-auto',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 33
    }
  }), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 41
    }
  }, "Sell With Muhalik"))), __jsx(OverlyPopover, {
    title: 'Get Android/IOS App',
    content: 'Shop products using mobile app',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["891148839", [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color]]]) + " " + 'second_nav_link_text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 41
    }
  }, "Get Muhalik's App")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "891148839",
    dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, _styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color],
    __self: _this
  }, ".sticky-wrapper.__jsx-style-dynamic-selector{position:relative;}.sticky.__jsx-style-dynamic-selector .sticky-inner.__jsx-style-dynamic-selector{background:white;position:fixed;top:0;left:0;right:0;z-index:1;}.row.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:0.2% 3%;}.text_animation.__jsx-style-dynamic-selector{-webkit-animation:mymove-__jsx-style-dynamic-selector 5s infinite;animation:mymove-__jsx-style-dynamic-selector 5s infinite;color:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, ";font-family:Verdana,Geneva,sans-serif;margin:0%;}@-webkit-keyframes mymove-__jsx-style-dynamic-selector{50%{text-shadow:10px 10px 10px green;}}@keyframes mymove-__jsx-style-dynamic-selector{50%{text-shadow:10px 10px 10px green;}}.nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:13px;padding:0px;margin:0px;color:gray;}.second_nav_link_text.__jsx-style-dynamic-selector{white-space:nowrap;font-size:14px;color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].admin_primry_color, ";}.nav_link_text.__jsx-style-dynamic-selector:hover,.second_nav_link_text.__jsx-style-dynamic-selector:hover{color:green;}.category_list_item.__jsx-style-dynamic-selector{cursor:pointer;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;padding:1.5% 6%;margin:0.5%;color:gray;box-shadow:5px 5px 5px -1px rgba(0,0,0,0.03);border-radius:5px;border:1px solid rgba(0,0,0,0.03);}.category_list_item.__jsx-style-dynamic-selector:hover{overflow:auto;color:#005ce6;box-shadow:inset 5px 5px 5px -1px rgba(0,0,0,0.08),inset -4px -4px 6px -1px rgba(255,255,255,0.7),-0.5px -0.5px 0px rgba(255,255,255,1),0.5px 0.5px 0px rgba(0,0,0,0.15),0px 12px 10px -10px rgba(0,0,0,0.05);border:1px solid rgba(0,0,0,0.01);}@media (max-width:992px){.width.__jsx-style-dynamic-selector{max-width:0px;display:none;}}.vertical_bar.__jsx-style-dynamic-selector{color:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color, ";}@media (max-width:767px){.vertical_bar.__jsx-style-dynamic-selector{display:none;}.display_in_md_lg.__jsx-style-dynamic-selector{display:none;}.row.__jsx-style-dynamic-selector{padding:0.2% 0%;}}@media (max-width:450px){.no_width_sm.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxjdXN0b21lclxcdG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrVWlCLEFBRzJDLEFBS0QsQUFRRyxBQU1TLEFBT1EsQUFJbEIsQUFPQSxBQU14QixBQUdvQixBQWFELEFBMEJJLEFBTXZCLEFBR3NCLEFBR0EsQUFJbEIsQUFLQSxZQS9ESCxDQW9ESSxBQUdBLEFBUUEsQ0E5Q2MsQUEyQmYsQ0F4Q1ksQ0FzRFgsQ0EvRmUsQ0FKbkIsQ0E2Qm1CLEFBT0EsT0FVSyxDQXVDcEIsQ0ExQmdOLElBdEQxTSxDQW1CZ0MsQ0FNMUIsQUFRakIsQ0FtREMsR0FuRlcsT0FDQyxDQXdCRyxPQXZCRCxJQXlCZixNQXhCQyxLQXdCQSxDQUtBLGlDQTFCd0Isc0JBTWUsSUE2QmhCLCtCQTVCcUIsb0NBTjVCLEVBT0YsU0FMZixDQU1DLGNBMkJtQixDQWpDbkIsWUE2Q3NDLEVBWGxCLGdCQUNKLFlBQ0QsSUFVZixPQVRpRCw2Q0FDM0Isa0JBQ2dCLGtDQUN0QyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcTmV3IGZvbGRlclxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcY3VzdG9tZXJcXHRvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgTmF2YmFyLCBOYXYsIEZvcm0sIElucHV0R3JvdXAsIEZvcm1Db250cm9sLCBJbWFnZSwgQnV0dG9uLFxyXG4gICAgTmF2RHJvcGRvd24sIERyb3Bkb3duQnV0dG9uLCBDYXJkLCBEcm9wZG93biwgQnV0dG9uR3JvdXAsXHJcbiAgICBSb3csIENvbCwgT3ZlcmxheVRyaWdnZXIsIFBvcG92ZXJcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFTZWFyY2gsIGZhVXNlclBsdXMsIGZhTGFuZ3VhZ2UsIGZhUG93ZXJPZmYsIGZhVXNlcixcclxuICAgIGZhQ2FydFBsdXMsIGZhSGFuZHNIZWxwaW5nLCBmYVBlbiwgZmFTaWduT3V0QWx0LCBmYUdsb2JlLFxyXG4gICAgZmFMdWdnYWdlQ2FydCwgZmFGaWxlSW52b2ljZURvbGxhciwgZmFMaXN0QWx0LCBmYUVkaXQsXHJcbiAgICBmYVN0b3JlQWx0LCBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodCwgZmFMaXN0VWwsIGZhU2hvcHBpbmdDYXJ0LCBmYVNpZ25MYW5ndWFnZVxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFQcm9kdWN0SHVudCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgcmVtb3ZlVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBjYXRlZ29yeUFycmF5ID0gW3sgdmFsdWU6ICdBbGwnIH0sIHsgdmFsdWU6ICdNYWNoaW5heScgfSwgeyB2YWx1ZTogJ0Nsb3RoZXMnIH1dXHJcbmNvbnN0IFRvb2xiYXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBsZXQgbG9nZ2VkSW4gPSBmYWxzZVxyXG4gICAgbGV0IGRhc2hib2FyZF9ocmVmID0gJydcclxuICAgIGlmIChwcm9wcy50b2tlbiA9PSAnJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gZmFsc2VcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ2N1c3RvbWVyJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vaW5kZXgnXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICd2ZW5kb3InKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi92ZW5kb3InXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLnRva2VuID09ICdhZG1pbicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL2FkbWluJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hUeXBlLCBzZXRTZWFyY2hUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKCdBbGwnKVxyXG4gICAgY29uc3QgW3NlbGVjdGVkTGFuZywgc2V0U2VsZWN0ZWRMYW5nXSA9IFJlYWN0LnVzZVN0YXRlKCdFbicpXHJcbiAgICBjb25zdCBbaXNDYXRlZ29yeU9wZW4sIHNldElzQ2F0ZWdvcnlPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzU2hvcE9wZW4sIHNldElzU2hvcE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNQcm9kdWN0T3Blbiwgc2V0SXNQcm9kdWN0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbaG92ZXJDYXRlZ29yeSwgc2V0SG92ZXJDYXRlZ29yeV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtob3ZlclByb2R1Y3RzLCBzZXRIb3ZlclByb2R1Y3RzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2hvdmVyU2hvcHMsIHNldEhvdmVyU2hvcHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3J5X2lkLCBzZXRDYXRlZ29yeV9pZF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcblxyXG4gICAgY29uc3QgW2lzU3RpY2t5LCBzZXRTdGlja3ldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRTdGlja3kocmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICBzZXRJc0NhdGVnb3J5T3BlbighaXNDYXRlZ29yeU9wZW4pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2F0ZWdvcnlNb3VzZUVudGVyKGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgcHJvcHMuY2F0ZWdvcmllc19saXN0KVxyXG4gICAgICAgIHNldENhdGVnb3J5X2lkKGNvcHlBcnJheVtpbmRleF0uX2lkKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2F0ZWdvcnlNb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHNldENhdGVnb3J5X2lkKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0ncC0wIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGlja3ktd3JhcHBlciR7aXNTdGlja3kgPyAnIHN0aWNreScgOiAnJ31gfSByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXIgdy0xMDAgcC0wIG0tMCBzdGlja3ktaW5uZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyB3LTEwMCBtLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9J2F1dG8nIG1kPSdhdXRvJyBzbT0nYXV0bycgeHM9J2F1dG8nIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbS0yIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZyBwci0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwibXVoYWxpay5qcGdcIiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fbWRfbGcnIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW46ICcwJScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIiB0ZXh0X2FuaW1hdGlvblwiPk1haGFsazxzcGFuIGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZycgc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgfX0+QDIwMjA8L3NwYW4+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnIHByLTQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIG0tMiBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5QcmVwZW5kID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGFzPXtCdXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtCdXR0b259IHZhcmlhbnQ9J3N1Y2Nlc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJzdXBlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hUeXBlKGVsZW1lbnQudmFsdWUpfT57ZWxlbWVudC52YWx1ZX08L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IHN0eWxlPXtzdHlsZXMuc2VhcmNoX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9J2F1dG8nIG1kPXsxMn0gc209ezB9IHhzPXswfSBjbGFzc05hbWU9J20tMCBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZyBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1dncnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9Jy4vbG9naW4nIGNsYXNzTmFtZT0nbWwtMiBhbGlnbi1pdGVtcy1jZW50ZXInIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5Mb2dpbi9Kb2luPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaHJlZj0nIycgY2xhc3NOYW1lPSdtbC0yIGQtZmxleCBmbGV4LWNvbHVtbicgc3R5bGU9e3sgekluZGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGFuZ3VhZ2V9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPSdwLTAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggbS0wIHAtMCBhbGlnbi1pdGVtcy1jZW50ZXInIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQgcC0wIG0tMCc+e3NlbGVjdGVkTGFuZ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgY2xhc3NOYW1lPVwic3VwZXItY29sb3JzXCIgc3R5bGU9e3sgekluZGV4OiAxMDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRMYW5nKCdFbicpfT5FbmdsaXNoPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTGFuZyhcIkFyXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wi2KfZhNi52LHYqNmK2KlcIn08L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtbC0yJyBzdHlsZT17c3R5bGVzLm5hdl9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQ2FydH0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfbGlua190ZXh0Jz5DYXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW4gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9ezxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIHJvdW5kZWRDaXJjbGUgZmx1aWQgc3R5bGU9e3sgd2lkdGg6ICczNXB4JywgbWF4V2lkdGg6ICczNXB4JyB9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtMicgaWQ9XCJuYXYtZHJvcGRvd25cIiBhbGlnblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17ZGFzaGJvYXJkX2hyZWZ9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RGFzaGJvYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPScuL3ZlbmRvcicgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9e3Byb3BzLmxvZ291dH0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQb3dlck9mZn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvZ291dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT0nbWwtMSBtci0yIG1iLTIgcC0wICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0ndy0xMDAgZC1pbmxpbmUtZmxleCcgc3R5bGU9e3sgYm9yZGVyOiAnMC41cHggc29saWQgbGlnaHRncmF5JywgcGFkZGluZzogJzAlIDElJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHsgc2V0SXNDYXRlZ29yeU9wZW4odHJ1ZSksIHNldEhvdmVyQ2F0ZWdvcnkodHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7IHNldElzQ2F0ZWdvcnlPcGVuKGZhbHNlKSwgc2V0SG92ZXJDYXRlZ29yeShmYWxzZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNDYXRlZ29yeU9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGhvdmVyQ2F0ZWdvcnkgPyAnMXB4IHNvbGlkIGxpZ2h0Z3JheScgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogaG92ZXJDYXRlZ29yeSA/ICctMXB4JyA6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBob3ZlckNhdGVnb3J5ID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3RVbH0gc3R5bGU9e2hvdmVyQ2F0ZWdvcnkgPyBzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZV9ob3ZlciA6IHN0eWxlcy5jYXRlZ29yaWVzX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0IG1sLTEnIHN0eWxlPXt7IGNvbG9yOiBob3ZlckNhdGVnb3J5ID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICdncmF5JyB9fT4gQ2F0ZWdvcmllcyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IHN0eWxlPXt7IG1pbldpZHRoOiBjYXRlZ29yeV9pZCA9PSAnJyA/ICczMHZ3JyA6ICc2MHZ3JywgbGVmdDogJy0xdncnIH19IGNsYXNzTmFtZT0nbS0wIHB0LTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgb25Nb3VzZUxlYXZlPXsoKSA9PiBjYXRlZ29yeU1vdXNlTGVhdmUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBoZWlnaHQ6ICc4MHZoJywgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuY2F0ZWdvcmllc19saXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiIG9uTW91c2VPdmVyPXsoKSA9PiBjYXRlZ29yeU1vdXNlRW50ZXIoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5jYXRlZ29yaWVzX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsIGhlaWdodDogJzgwdmgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJfY2F0ZWdvcmllc19saXN0ICYmIHByb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhdGVnb3J5X2lkID09IGNhdGVnb3J5X2lkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXRlZ29yeV9saXN0X2l0ZW1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8gRHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaG9wcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHsgc2V0SXNTaG9wT3Blbih0cnVlKSwgc2V0SG92ZXJTaG9wcyh0cnVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHsgc2V0SXNTaG9wT3BlbihmYWxzZSksIHNldEhvdmVyU2hvcHMoZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e2lzU2hvcE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGhvdmVyU2hvcHMgPyAnMXB4IHNvbGlkIGxpZ2h0Z3JheScgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogaG92ZXJTaG9wcyA/ICctMXB4JyA6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBob3ZlclNob3BzID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICdncmF5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RvcmVBbHR9IHN0eWxlPXtob3ZlclNob3BzID8gc3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWVfaG92ZXIgOiBzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCBtbC0xJyBzdHlsZT17eyBjb2xvcjogaG92ZXJTaG9wcyA/IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgOiAnZ3JheScgfX0+IFNob3BzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6ICc4MHZ3JywgbWluSGVpZ2h0OiAnODB2aCcgfX0gY2xhc3NOYW1lPSdtLTAgcHQtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+U2hvcHMgV2lsbCBTaG93IEhlcmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7IHNldElzUHJvZHVjdE9wZW4odHJ1ZSksIHNldEhvdmVyUHJvZHVjdHModHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7IHNldElzUHJvZHVjdE9wZW4oZmFsc2UpLCBzZXRIb3ZlclByb2R1Y3RzKGZhbHNlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXtpc1Byb2R1Y3RPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17TmF2Lkxpbmt9IGNsYXNzTmFtZT1cImQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBob3ZlclByb2R1Y3RzID8gJzFweCBzb2xpZCBsaWdodGdyYXknIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGhvdmVyUHJvZHVjdHMgPyAnLTFweCcgOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaG92ZXJQcm9kdWN0cyA/IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgOiAnZ3JheSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVByb2R1Y3RIdW50fSBzdHlsZT17aG92ZXJQcm9kdWN0cyA/IHN0eWxlcy5jYXRlZ29yaWVzX2ZvbnRhd2Vzb21lX2hvdmVyIDogc3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQgbWwtMScgc3R5bGU9e3sgY29sb3I6IGhvdmVyUHJvZHVjdHMgPyBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIDogJ2dyYXknIH19PiBQcm9kdWN0cyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IHN0eWxlPXt7IG1pbldpZHRoOiAnODB2dycsIGxlZnQ6ICctODQlJywgbWluSGVpZ2h0OiAnODB2aCcgfX0gY2xhc3NOYW1lPSdtLTAgcHQtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlByb2R1Y3RzIFdpbGwgU2hvdyBIZXJlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5BYm91dCBVczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+RmVlZGJhY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkhlbHA/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+U2VsbCBXaXRoIE11aGFsaWs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSd2ZXJ0aWNhbF9iYXInPnw8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJseVBvcG92ZXIgdGl0bGU9eydHZXQgQW5kcm9pZC9JT1MgQXBwJ30gY29udGVudD17J1Nob3AgcHJvZHVjdHMgdXNpbmcgbW9iaWxlIGFwcCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkdldCBNdWhhbGlrJ3MgQXBwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZCA+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogM3JlbTsgLyogV2UgbmVlZCB0byBjaGFuZ2UgdGhpcyB2YWx1ZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0aWNreSAuc3RpY2t5LWlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yJSAzJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGV4dF9hbmltYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbXltb3ZlIDVzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwJSB7dGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGdyZWVuO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfbGlua190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kX25hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmtfdGV4dDpob3ZlciwgLnNlY29uZF9uYXZfbGlua190ZXh0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeV9saXN0X2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjUlIDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4wMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjAzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1Y2U2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4wOCksIGluc2V0IC00cHggLTRweCA2cHggLTFweCByZ2JhKDI1NSwyNTUsMjU1LDAuNyksLTAuNXB4IC0wLjVweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwxKSwwLjVweCAwLjVweCAwcHggcmdiYSgwLDAsMCwwLjE1KSwgMHB4IDEycHggMTBweCAtMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAuY2F0ZWdvcnlfbGlzdF9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogMS41JSA2JTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6IGdyYXlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLmNhdGVnb3J5X2xpc3RfaXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiAxLjUlIDIlIDEuNSUgNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjMDA1Y2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjZTZmMGZmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndpZHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC52ZXJ0aWNhbF9iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNwbGF5X2luX21kX2xnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjIlIDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub193aWR0aF9zbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBPdmVybHlQb3BvdmVyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8T3ZlcmxheVRyaWdnZXIgdHJpZ2dlcj17Wydob3ZlcicsICdmb2N1cyddfSBwbGFjZW1lbnQ9XCJib3R0b21cIiBvdmVybGF5PXtcclxuICAgICAgICA8UG9wb3ZlciBpZD1cInBvcG92ZXItYmFzaWNcIj5cclxuICAgICAgICAgICAgPFBvcG92ZXIuVGl0bGUgYXM9XCJoNFwiPntwcm9wcy50aXRsZX08L1BvcG92ZXIuVGl0bGU+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudH1cclxuICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgfT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJ1xyXG4gICAgfSxcclxuICAgIG5hdl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWluV2lkdGg6ICcyNHB4JyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI0cHgnLFxyXG4gICAgfSxcclxuICAgIGRyb3BEb3duX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW46ICcwcHggMjBweCAwcHggMHB4JyxcclxuICAgICAgICB3aWR0aDogJzE4cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE4cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMThweCcsXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcmllc19mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIGNhdGVnb3JpZXNfZm9udGF3ZXNvbWVfaG92ZXI6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyXHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\customer\\\\toolbar.js */")));
};

_s(Toolbar, "puQsjzOnrqArp6HRpPsK90UpacU=");

_c = Toolbar;

var OverlyPopover = function OverlyPopover(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["OverlayTrigger"], {
    trigger: ['hover', 'focus'],
    placement: "bottom",
    overlay: __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      id: "popover-basic",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Popover"].Title, {
      as: "h4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 13
      }
    }, props.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Popover"].Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 13
      }
    }, props.content)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
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
  search_fontawesome: {
    color: 'white',
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px',
    fontWeight: 'normal'
  },
  nav_fontawesome: {
    color: 'gray',
    minWidth: '24px',
    minHeight: '24px',
    maxHeight: '24px',
    maxWidth: '24px'
  },
  dropDown_fontawesome: {
    color: 'gray',
    margin: '0px 20px 0px 0px',
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  categories_fontawesome: {
    color: 'gray',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  categories_fontawesome_hover: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].primry_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9jdXN0b21lci90b29sYmFyLmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5QXJyYXkiLCJ2YWx1ZSIsIlRvb2xiYXIiLCJwcm9wcyIsImxvZ2dlZEluIiwiZGFzaGJvYXJkX2hyZWYiLCJ0b2tlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWFyY2hUeXBlIiwic2V0U2VhcmNoVHlwZSIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsImlzQ2F0ZWdvcnlPcGVuIiwic2V0SXNDYXRlZ29yeU9wZW4iLCJpc1Nob3BPcGVuIiwic2V0SXNTaG9wT3BlbiIsImlzUHJvZHVjdE9wZW4iLCJzZXRJc1Byb2R1Y3RPcGVuIiwiaG92ZXJDYXRlZ29yeSIsInNldEhvdmVyQ2F0ZWdvcnkiLCJob3ZlclByb2R1Y3RzIiwic2V0SG92ZXJQcm9kdWN0cyIsImhvdmVyU2hvcHMiLCJzZXRIb3ZlclNob3BzIiwiY2F0ZWdvcnlfaWQiLCJzZXRDYXRlZ29yeV9pZCIsImlzU3RpY2t5Iiwic2V0U3RpY2t5IiwicmVmIiwidXNlUmVmIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwiY2F0ZWdvcnlNb3VzZUVudGVyIiwiaW5kZXgiLCJjb3B5QXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJjYXRlZ29yaWVzX2xpc3QiLCJfaWQiLCJjYXRlZ29yeU1vdXNlTGVhdmUiLCJHbG9iYWxTdHlsZVNoZWV0IiwicHJpbXJ5X2NvbG9yIiwiYWRtaW5fcHJpbXJ5X2NvbG9yIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luIiwiZm9udFNpemUiLCJCdXR0b25Hcm91cCIsIkJ1dHRvbiIsIm1hcCIsImVsZW1lbnQiLCJmYVNlYXJjaCIsInN0eWxlcyIsInNlYXJjaF9mb250YXdlc29tZSIsIm1hcmdpbkxlZnQiLCJuYXZfbGluayIsImZhVXNlciIsIm5hdl9mb250YXdlc29tZSIsImZhVXNlclBsdXMiLCJ6SW5kZXgiLCJmYUxhbmd1YWdlIiwiTmF2IiwiTGluayIsImNvbG9yIiwiZmFTaG9wcGluZ0NhcnQiLCJtYXhXaWR0aCIsImRyb3BEb3duX2ZvbnRhd2Vzb21lIiwibG9nb3V0IiwiZmFQb3dlck9mZiIsImJvcmRlciIsInBhZGRpbmciLCJmYUxpc3RVbCIsImNhdGVnb3JpZXNfZm9udGF3ZXNvbWVfaG92ZXIiLCJjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lIiwibWluV2lkdGgiLCJsZWZ0IiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiZmFDaGV2cm9uUmlnaHQiLCJib3JkZXJMZWZ0Iiwic3ViX2NhdGVnb3JpZXNfbGlzdCIsImZhU3RvcmVBbHQiLCJtaW5IZWlnaHQiLCJmYVByb2R1Y3RIdW50IiwiT3Zlcmx5UG9wb3ZlciIsInRpdGxlIiwiY29udGVudCIsImNoaWxkcmVuIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93IiwibWF4SGVpZ2h0IiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUFDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQUQsRUFBbUI7QUFBRUEsT0FBSyxFQUFFO0FBQVQsQ0FBbkIsRUFBMEM7QUFBRUEsT0FBSyxFQUFFO0FBQVQsQ0FBMUMsQ0FBdEI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXZCLE1BQUlDLFFBQVEsR0FBRyxLQUFmO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLEVBQXJCOztBQUNBLE1BQUlGLEtBQUssQ0FBQ0csS0FBTixJQUFlLEVBQW5CLEVBQXVC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QixjQUFVLEVBQUU7QUFOSSxHQVBUO0FBZVhuQyxpQkFBZSxFQUFFO0FBQ2JNLFNBQUssRUFBRSxNQURNO0FBRWJXLFlBQVEsRUFBRSxNQUZHO0FBR2JRLGFBQVMsRUFBRSxNQUhFO0FBSWJTLGFBQVMsRUFBRSxNQUpFO0FBS2IxQixZQUFRLEVBQUU7QUFMRyxHQWZOO0FBc0JYQyxzQkFBb0IsRUFBRTtBQUNsQkgsU0FBSyxFQUFFLE1BRFc7QUFFbEJsQixVQUFNLEVBQUUsa0JBRlU7QUFHbEJGLFNBQUssRUFBRSxNQUhXO0FBSWxCaUMsVUFBTSxFQUFFLE1BSlU7QUFLbEJlLGFBQVMsRUFBRSxNQUxPO0FBTWxCMUIsWUFBUSxFQUFFO0FBTlEsR0F0Qlg7QUE4QlhRLHdCQUFzQixFQUFFO0FBQ3BCVixTQUFLLEVBQUUsTUFEYTtBQUVwQnBCLFNBQUssRUFBRSxNQUZhO0FBR3BCaUMsVUFBTSxFQUFFLE1BSFk7QUFJcEJlLGFBQVMsRUFBRSxNQUpTO0FBS3BCMUIsWUFBUSxFQUFFO0FBTFUsR0E5QmI7QUFxQ1hPLDhCQUE0QixFQUFFO0FBQzFCVCxTQUFLLFlBQUt2QixtREFBZ0IsQ0FBQ0MsWUFBdEIsQ0FEcUI7QUFFMUJFLFNBQUssRUFBRSxNQUZtQjtBQUcxQmlDLFVBQU0sRUFBRSxNQUhrQjtBQUkxQmUsYUFBUyxFQUFFLE1BSmU7QUFLMUIxQixZQUFRLEVBQUU7QUFMZ0I7QUFyQ25CLENBQWY7QUE4Q2V2RSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODNjM2MxYTVmMGUxZjBlYjJmMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBOYXZiYXIsIE5hdiwgRm9ybSwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEltYWdlLCBCdXR0b24sXHJcbiAgICBOYXZEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIENhcmQsIERyb3Bkb3duLCBCdXR0b25Hcm91cCxcclxuICAgIFJvdywgQ29sLCBPdmVybGF5VHJpZ2dlciwgUG9wb3ZlclxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVNlYXJjaCwgZmFVc2VyUGx1cywgZmFMYW5ndWFnZSwgZmFQb3dlck9mZiwgZmFVc2VyLFxyXG4gICAgZmFDYXJ0UGx1cywgZmFIYW5kc0hlbHBpbmcsIGZhUGVuLCBmYVNpZ25PdXRBbHQsIGZhR2xvYmUsXHJcbiAgICBmYUx1Z2dhZ2VDYXJ0LCBmYUZpbGVJbnZvaWNlRG9sbGFyLCBmYUxpc3RBbHQsIGZhRWRpdCxcclxuICAgIGZhU3RvcmVBbHQsIGZhQ2hldnJvbkRvd24sIGZhQ2hldnJvblJpZ2h0LCBmYUxpc3RVbCwgZmFTaG9wcGluZ0NhcnQsIGZhU2lnbkxhbmd1YWdlXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYVByb2R1Y3RIdW50IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyByZW1vdmVUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbeyB2YWx1ZTogJ0FsbCcgfSwgeyB2YWx1ZTogJ01hY2hpbmF5JyB9LCB7IHZhbHVlOiAnQ2xvdGhlcycgfV1cclxuY29uc3QgVG9vbGJhciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGxldCBsb2dnZWRJbiA9IGZhbHNlXHJcbiAgICBsZXQgZGFzaGJvYXJkX2hyZWYgPSAnJ1xyXG4gICAgaWYgKHByb3BzLnRva2VuID09ICcnKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSBmYWxzZVxyXG4gICAgfSBlbHNlIGlmIChwcm9wcy50b2tlbiA9PSAnY3VzdG9tZXInKSB7XHJcbiAgICAgICAgbG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgICAgZGFzaGJvYXJkX2hyZWYgPSAnLi9pbmRleCdcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ3ZlbmRvcicpIHtcclxuICAgICAgICBsb2dnZWRJbiA9IHRydWVcclxuICAgICAgICBkYXNoYm9hcmRfaHJlZiA9ICcuL3ZlbmRvcidcclxuICAgIH0gZWxzZSBpZiAocHJvcHMudG9rZW4gPT0gJ2FkbWluJykge1xyXG4gICAgICAgIGxvZ2dlZEluID0gdHJ1ZVxyXG4gICAgICAgIGRhc2hib2FyZF9ocmVmID0gJy4vYWRtaW4nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFR5cGUsIHNldFNlYXJjaFR5cGVdID0gUmVhY3QudXNlU3RhdGUoJ0FsbCcpXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRMYW5nLCBzZXRTZWxlY3RlZExhbmddID0gUmVhY3QudXNlU3RhdGUoJ0VuJylcclxuICAgIGNvbnN0IFtpc0NhdGVnb3J5T3Blbiwgc2V0SXNDYXRlZ29yeU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTaG9wT3Blbiwgc2V0SXNTaG9wT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc1Byb2R1Y3RPcGVuLCBzZXRJc1Byb2R1Y3RPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtob3ZlckNhdGVnb3J5LCBzZXRIb3ZlckNhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2hvdmVyUHJvZHVjdHMsIHNldEhvdmVyUHJvZHVjdHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaG92ZXJTaG9wcywgc2V0SG92ZXJTaG9wc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcnlfaWQsIHNldENhdGVnb3J5X2lkXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgICBjb25zdCBbaXNTdGlja3ksIHNldFN0aWNreV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFN0aWNreShyZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgIHNldElzQ2F0ZWdvcnlPcGVuKCFpc0NhdGVnb3J5T3BlbilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlRW50ZXIoaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBwcm9wcy5jYXRlZ29yaWVzX2xpc3QpXHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoY29weUFycmF5W2luZGV4XS5faWQpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYXRlZ29yeU1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlfaWQoJycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSdwLTAgbS0wJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN0aWNreS13cmFwcGVyJHtpc1N0aWNreSA/ICcgc3RpY2t5JyA6ICcnfWB9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciB3LTEwMCBwLTAgbS0wIHN0aWNreS1pbm5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHctMTAwIG0tMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz0nYXV0bycgbWQ9J2F1dG8nIHNtPSdhdXRvJyB4cz0nYXV0bycgY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtLTIgcC0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnIHByLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJtdWhhbGlrLmpwZ1wiIGNsYXNzTmFtZT0nZGlzcGxheV9pbl9tZF9sZycgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbjogJzAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiIHRleHRfYW5pbWF0aW9uXCI+TWFoYWxrPHNwYW4gY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnJyBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCB9fT5AMjAyMDwvc3Bhbj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fbWRfbGcgcHItNCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgbS0yIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fbWRfbGcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gYXM9e0J1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e0J1dHRvbn0gdmFyaWFudD0nc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGNsYXNzTmFtZT1cInN1cGVyLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeUFycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFR5cGUoZWxlbWVudC52YWx1ZSl9PntlbGVtZW50LnZhbHVlfTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdzdWNjZXNzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gc3R5bGU9e3N0eWxlcy5zZWFyY2hfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz0nYXV0bycgbWQ9ezEyfSBzbT17MH0geHM9ezB9IGNsYXNzTmFtZT0nbS0wIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNwbGF5X2luX21kX2xnIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzV2dycgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj0nLi9sb2dpbicgY2xhc3NOYW1lPSdtbC0yIGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXtzdHlsZXMubmF2X2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkxvZ2luL0pvaW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBocmVmPScjJyBjbGFzc05hbWU9J21sLTIgZC1mbGV4IGZsZXgtY29sdW1uJyBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMYW5ndWFnZX0gc3R5bGU9e3N0eWxlcy5uYXZfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9J3AtMCBtLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBhcz17TmF2Lkxpbmt9IGNsYXNzTmFtZT0nZC1pbmxpbmUtZmxleCBtLTAgcC0wIGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X2xpbmtfdGV4dCBwLTAgbS0wJz57c2VsZWN0ZWRMYW5nfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBjbGFzc05hbWU9XCJzdXBlci1jb2xvcnNcIiBzdHlsZT17eyB6SW5kZXg6IDEwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZExhbmcoJ0VuJyl9PkVuZ2xpc2g8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRMYW5nKFwiQXJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCLYp9mE2LnYsdio2YrYqVwifTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9J21sLTInIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBzdHlsZT17c3R5bGVzLm5hdl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9saW5rX3RleHQnPkNhcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17PEltYWdlIHNyYz1cIm11aGFsaWsuanBnXCIgcm91bmRlZENpcmNsZSBmbHVpZCBzdHlsZT17eyB3aWR0aDogJzM1cHgnLCBtYXhXaWR0aDogJzM1cHgnIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtbC0yJyBpZD1cIm5hdi1kcm9wZG93blwiIGFsaWduUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtkYXNoYm9hcmRfaHJlZn0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EYXNoYm9hcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9Jy4vdmVuZG9yJyBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gc3R5bGU9e3N0eWxlcy5kcm9wRG93bl9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkRhc2hib2FyZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXtzdHlsZXMuZHJvcERvd25fZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17cHJvcHMubG9nb3V0fSBjbGFzc05hbWU9J2QtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBvd2VyT2ZmfSBzdHlsZT17c3R5bGVzLmRyb3BEb3duX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9nb3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc3BsYXlfaW5fbWRfbGcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPSdtbC0xIG1yLTIgbWItMiBwLTAgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSd3LTEwMCBkLWlubGluZS1mbGV4JyBzdHlsZT17eyBib3JkZXI6ICcwLjVweCBzb2xpZCBsaWdodGdyYXknLCBwYWRkaW5nOiAnMCUgMSUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4geyBzZXRJc0NhdGVnb3J5T3Blbih0cnVlKSwgc2V0SG92ZXJDYXRlZ29yeSh0cnVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHsgc2V0SXNDYXRlZ29yeU9wZW4oZmFsc2UpLCBzZXRIb3ZlckNhdGVnb3J5KGZhbHNlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXtpc0NhdGVnb3J5T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogaG92ZXJDYXRlZ29yeSA/ICcxcHggc29saWQgbGlnaHRncmF5JyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBob3ZlckNhdGVnb3J5ID8gJy0xcHgnIDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhvdmVyQ2F0ZWdvcnkgPyBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIDogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdFVsfSBzdHlsZT17aG92ZXJDYXRlZ29yeSA/IHN0eWxlcy5jYXRlZ29yaWVzX2ZvbnRhd2Vzb21lX2hvdmVyIDogc3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQgbWwtMScgc3R5bGU9e3sgY29sb3I6IGhvdmVyQ2F0ZWdvcnkgPyBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIDogJ2dyYXknIH19PiBDYXRlZ29yaWVzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6IGNhdGVnb3J5X2lkID09ICcnID8gJzMwdncnIDogJzYwdncnLCBsZWZ0OiAnLTF2dycgfX0gY2xhc3NOYW1lPSdtLTAgcHQtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBvbk1vdXNlTGVhdmU9eygpID0+IGNhdGVnb3J5TW91c2VMZWF2ZSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGhlaWdodDogJzgwdmgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpZXNfbGlzdCAmJiBwcm9wcy5jYXRlZ29yaWVzX2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2F0ZWdvcnlfbGlzdF9pdGVtXCIgb25Nb3VzZU92ZXI9eygpID0+IGNhdGVnb3J5TW91c2VFbnRlcihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci1hdXRvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IGJvcmRlckxlZnQ6ICcxcHggc29saWQgbGlnaHRncmF5JywgaGVpZ2h0OiAnODB2aCcsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnN1Yl9jYXRlZ29yaWVzX2xpc3QgJiYgcHJvcHMuc3ViX2NhdGVnb3JpZXNfbGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2F0ZWdvcnlfaWQgPT0gY2F0ZWdvcnlfaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhdGVnb3J5X2xpc3RfaXRlbVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8LyBEcm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNob3BzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4geyBzZXRJc1Nob3BPcGVuKHRydWUpLCBzZXRIb3ZlclNob3BzKHRydWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4geyBzZXRJc1Nob3BPcGVuKGZhbHNlKSwgc2V0SG92ZXJTaG9wcyhmYWxzZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNTaG9wT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgYXM9e05hdi5MaW5rfSBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogaG92ZXJTaG9wcyA/ICcxcHggc29saWQgbGlnaHRncmF5JyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBob3ZlclNob3BzID8gJy0xcHgnIDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhvdmVyU2hvcHMgPyBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gIDogJ2dyYXknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdG9yZUFsdH0gc3R5bGU9e2hvdmVyU2hvcHMgPyBzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZV9ob3ZlciA6IHN0eWxlcy5jYXRlZ29yaWVzX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0IG1sLTEnIHN0eWxlPXt7IGNvbG9yOiBob3ZlclNob3BzID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICdncmF5JyB9fT4gU2hvcHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudSBzdHlsZT17eyBtaW5XaWR0aDogJzgwdncnLCBtaW5IZWlnaHQ6ICc4MHZoJyB9fSBjbGFzc05hbWU9J20tMCBwdC0zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5TaG9wcyBXaWxsIFNob3cgSGVyZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0cyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHsgc2V0SXNQcm9kdWN0T3Blbih0cnVlKSwgc2V0SG92ZXJQcm9kdWN0cyh0cnVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHsgc2V0SXNQcm9kdWN0T3BlbihmYWxzZSksIHNldEhvdmVyUHJvZHVjdHMoZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e2lzUHJvZHVjdE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGFzPXtOYXYuTGlua30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGhvdmVyUHJvZHVjdHMgPyAnMXB4IHNvbGlkIGxpZ2h0Z3JheScgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogaG92ZXJQcm9kdWN0cyA/ICctMXB4JyA6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBob3ZlclByb2R1Y3RzID8gYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCA6ICdncmF5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUHJvZHVjdEh1bnR9IHN0eWxlPXtob3ZlclByb2R1Y3RzID8gc3R5bGVzLmNhdGVnb3JpZXNfZm9udGF3ZXNvbWVfaG92ZXIgOiBzdHlsZXMuY2F0ZWdvcmllc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCBtbC0xJyBzdHlsZT17eyBjb2xvcjogaG92ZXJQcm9kdWN0cyA/IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAgOiAnZ3JheScgfX0+IFByb2R1Y3RzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgc3R5bGU9e3sgbWluV2lkdGg6ICc4MHZ3JywgbGVmdDogJy04NCUnLCBtaW5IZWlnaHQ6ICc4MHZoJyB9fSBjbGFzc05hbWU9J20tMCBwdC0zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UHJvZHVjdHMgV2lsbCBTaG93IEhlcmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kX25hdl9saW5rX3RleHQnPkFib3V0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybHlQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5GZWVkYmFjazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+SGVscD88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybHlQb3BvdmVyIHRpdGxlPXsnR2V0IEFuZHJvaWQvSU9TIEFwcCd9IGNvbnRlbnQ9eydTaG9wIHByb2R1Y3RzIHVzaW5nIG1vYmlsZSBhcHAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZF9uYXZfbGlua190ZXh0Jz5TZWxsIFdpdGggTXVoYWxpazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3Zlcmx5UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3ZlcnRpY2FsX2Jhcic+fDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Zlcmx5UG9wb3ZlciB0aXRsZT17J0dldCBBbmRyb2lkL0lPUyBBcHAnfSBjb250ZW50PXsnU2hvcCBwcm9kdWN0cyB1c2luZyBtb2JpbGUgYXBwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWNvbmRfbmF2X2xpbmtfdGV4dCc+R2V0IE11aGFsaWsncyBBcHA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJseVBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkID5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGlja3ktd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAzcmVtOyAvKiBXZSBuZWVkIHRvIGNoYW5nZSB0aGlzIHZhbHVlICovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc3RpY2t5IC5zdGlja3ktaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjIlIDMlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0X2FuaW1hdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBteW1vdmUgNXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbXltb3ZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHt0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggZ3JlZW47fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRfbmF2X2xpbmtfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZfbGlua190ZXh0OmhvdmVyLCAuc2Vjb25kX25hdl9saW5rX3RleHQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2xpc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNSUgNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfbGlzdF9pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDVjZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjA4KSwgaW5zZXQgLTRweCAtNHB4IDZweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSwtMC41cHggLTAuNXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpLDAuNXB4IDAuNXB4IDBweCByZ2JhKDAsMCwwLDAuMTUpLCAwcHggMTJweCAxMHB4IC0xMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5jYXRlZ29yeV9saXN0X2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiAxLjUlIDYlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW46IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAuY2F0ZWdvcnlfbGlzdF9pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDEuNSUgMiUgMS41JSA2JTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6ICMwMDVjZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICNlNmYwZmZcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2lkdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnZlcnRpY2FsX2JhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmVydGljYWxfYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpc3BsYXlfaW5fbWRfbGcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMiUgMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vX3dpZHRoX3Nte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE92ZXJseVBvcG92ZXIgPSAocHJvcHMpID0+IChcclxuICAgIDxPdmVybGF5VHJpZ2dlciB0cmlnZ2VyPXtbJ2hvdmVyJywgJ2ZvY3VzJ119IHBsYWNlbWVudD1cImJvdHRvbVwiIG92ZXJsYXk9e1xyXG4gICAgICAgIDxQb3BvdmVyIGlkPVwicG9wb3Zlci1iYXNpY1wiPlxyXG4gICAgICAgICAgICA8UG9wb3Zlci5UaXRsZSBhcz1cImg0XCI+e3Byb3BzLnRpdGxlfTwvUG9wb3Zlci5UaXRsZT5cclxuICAgICAgICAgICAgPFBvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jb250ZW50fVxyXG4gICAgICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICB9PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbik7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnXHJcbiAgICB9LFxyXG4gICAgbmF2X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtaW5XaWR0aDogJzI0cHgnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjRweCcsXHJcbiAgICB9LFxyXG4gICAgZHJvcERvd25fZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIG1hcmdpbjogJzBweCAyMHB4IDBweCAwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMThweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxOHB4JyxcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yaWVzX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcmllc19mb250YXdlc29tZV9ob3Zlcjoge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=