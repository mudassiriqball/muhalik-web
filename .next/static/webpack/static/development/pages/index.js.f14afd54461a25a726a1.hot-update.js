webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/components/customer/toolbar/toolbar.js":
/*!**********************************************************!*\
  !*** ./src/pages/components/customer/toolbar/toolbar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\FYP\\muhalikweb\\src\\pages\\components\\customer\\toolbar\\toolbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Toolbar = function Toolbar(props) {
  var dashboard = null;
  var login = null;

  if (props.token == 'vendor') {
    dashboard = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "./vendor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Vendor dashboard");
    login = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      onClick: props.logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, " Logout ");
  } else if (props.token == 'admin') {
    dashboard = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "./admin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, " Admin dashboard ");
    login = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      onClick: props.logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, " Logout ");
  } else if (props.token == 'customer') {
    login = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      onClick: props.logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, " Logout ");
  } else {
    login = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "./login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, " Login/Signup "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "./vendor-signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, " Register_as_Shop "));
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: {
      width: '70px',
      display: 'absolute'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("h3", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Muhalik"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    id: "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    style: styles.search_div,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Prepend, {
    style: styles.prepend,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"],
    style: styles.fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    style: styles.search_box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Append, {
    style: styles.append,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"],
    style: styles.search_fontawesome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: {
      color: 'white',
      margin: '0px 0px 0px 10px',
      padding: '0px',
      fontSize: 'large'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Search"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, login, dashboard, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#features",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Cart")))))));
};

var styles = {
  background: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color)
  },
  brand: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color),
    fontSize: 'medium'
  },
  form: {
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color),
    width: '60%',
    borderRadius: '25px',
    padding: '0px 5px'
  },
  search_div: {
    margin: '0% 5%' // border: `1px solid ${GlobalStyleSheet.primry_color}`,

  },
  prepend: {
    // background: `${GlobalStyleSheet.primry_color}`,
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color),
    color: 'black',
    padding: '0px 25px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color),
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18x'
  },
  search_box: {
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color)
  },
  append: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primry_color),
    padding: '0px 25px',
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px'
  },
  search_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].primary_text_color),
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18x'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ })

})
//# sourceMappingURL=index.js.f14afd54461a25a726a1.hot-update.js.map