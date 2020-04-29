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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\customer\\toolbar\\toolbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








function Toolbar(props) {
  var dashboard = null;
  var login = null;

  if (props.token == 'vendor') {
    dashboard = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
      href: "./vendor",
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, "Vendor dashboard");
    login = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
      onClick: props.logout,
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPowerOff"],
      style: styles.nav_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }), __jsx("div", {
      style: styles.link_text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, "Logout"));
  } else if (props.token == 'admin') {
    dashboard = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
      href: "./admin",
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, " Admin dashboard "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
      href: "./vendor",
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, "Vendor dashboard"));
    login = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
      onClick: props.logout,
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPowerOff"],
      style: styles.nav_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }), __jsx("div", {
      style: styles.link_text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "Logout"));
  } else if (props.token == 'customer') {
    login = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
      onClick: props.logout,
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, " Logout ");
  } else {
    login = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
      href: "./login",
      style: styles.nav_link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
      style: styles.nav_fontawesome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }), __jsx("div", {
      style: styles.link_text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, "Login/Signup")));
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      all = _React$useState2[0],
      setAll = _React$useState2[1];

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "muhalik.jpg",
    roundedCircle: true,
    thumbnail: true,
    fluid: true,
    style: {
      width: '80px',
      position: 'absolute'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }), __jsx("h3", {
    style: {
      marginLeft: '100px'
    },
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Muhalik")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
    id: "responsive-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    style: styles.search_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    style: styles.search_critera,
    as: "select",
    name: "countary",
    value: all,
    onChange: function onChange(e) {
      return setAll(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }, "All"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }, "Cloths"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }, "Mobiles"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, "Laptops"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }, "Electronics"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    style: styles.search_box,
    placeholder: "Search here",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Append, {
    style: styles.append,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSearch"],
    style: styles.search_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      color: 'white',
      margin: '0px 0px 0px 10px',
      padding: '0px',
      fontSize: 'large'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, "Search"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "./login",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGlobe"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }), __jsx("div", {
    style: styles.link_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, "ENG")), login, dashboard, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPen"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }), __jsx("div", {
    style: styles.link_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, "Orders")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "./login",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPen"],
    style: styles.nav_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }), __jsx("div", {
    style: styles.link_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, "Sell On Muhalik")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#",
    style: styles.nav_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLuggageCart"],
    style: styles.nav_cart_fontawesome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }), __jsx("div", {
    style: styles.link_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }), "Cart")))))));
}

Toolbar.getInitialProps = function _callee(ctx) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var styles = {
  background: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color)
  },
  brand: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    fontSize: 'medium'
  },
  form: {
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    width: '60%',
    borderRadius: '25px',
    padding: '0px 5px'
  },
  search_div: {
    margin: '0% 5% 0% 7%' // border: `1px solid ${GlobalStyleSheet.primry_color}`,

  },
  search_critera: {
    // background: `${GlobalStyleSheet.primry_color}`,
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    color: 'black',
    padding: '0px 10px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18x'
  },
  search_box: {
    border: "2px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color)
  },
  append: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    padding: '0px 25px',
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px'
  },
  search_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primary_text_color),
    width: '18px',
    height: '18px',
    maxHeight: '18px',
    maxWidth: '18px'
  },
  nav_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    width: '25px',
    height: '25px',
    maxHeight: '25px',
    maxWidth: '25px',
    marginBottom: '4px'
  },
  nav_cart_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].primry_color),
    width: '30px',
    height: '30px',
    maxHeight: '30px',
    maxWidth: '30px'
  },
  nav_link: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '14px'
  },
  link_text: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ })

})
//# sourceMappingURL=index.js.d6a0a47e2241212aa64a.hot-update.js.map