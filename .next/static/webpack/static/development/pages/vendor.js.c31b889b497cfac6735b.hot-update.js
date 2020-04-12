webpackHotUpdate("static\\development\\pages\\vendor.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../sdk/consts/fields-data */ "./src/sdk/consts/fields-data.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new-contents\\custom-fields.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var groupStyles = {
  border: '2px dotted green',
  borderRadius: '5px',
  background: '#f2fcff'
};

var Group = function Group(props) {
  return __jsx("div", {
    style: groupStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_6__["components"].Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })));
};

var CustomFields = function CustomFields(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    style: {
      width: '100%'
    },
    defaultActiveKey: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: styles.card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    style: styles.card_header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "Custome Fields"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"],
    size: "sm",
    eventKey: "0",
    style: {
      "float": 'right',
      background: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    size: "xs",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
    style: styles.variations_fontawesome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
    eventKey: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "style=", {
    zIndex: 'inherit',
    overflow: 'visible'
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      background: 'lightGray',
      margin: '0.5% 1%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, props.customFieldsArray && props.customFieldsArray.map(function (data, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
      style: {
        padding: '1% 2%'
      },
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
      lg: 5,
      md: 5,
      sm: 12,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
      as: "select",
      size: "sm",
      value: data.customFieldName,
      onChange: function onChange() {
        return data.customFieldName;
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 41
      }
    }, __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 45
      }
    }, data.customFieldName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
      lg: 7,
      md: 7,
      sm: 12,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 41
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Value",
      name: "sku",
      value: data.customFieldValue,
      onChange: function onChange() {
        return data.fieldValue;
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 45
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "outline-primary",
      size: "sm",
      style: {
        marginLeft: '1%'
      },
      onClick: function onClick() {
        return props["delete"](index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 45
      }
    }, " delete"))));
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Row, {
    style: {
      margin: '0.5% 1%',
      padding: '1% 2%',
      background: 'lightGray'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 5,
    md: 5,
    sm: 12,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, "Field Name"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], {
    options: _sdk_consts_fields_data__WEBPACK_IMPORTED_MODULE_7__["groupedOptions"],
    components: {
      Group: Group
    },
    value: props.customFieldNameSelected,
    onChange: props.fieldNameHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
    lg: 7,
    md: 7,
    sm: 12,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, "Field Value "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    style: {
      zIndex: 'inherit',
      overflow: 'visible'
    },
    type: "text",
    placeholder: "Enter Value",
    name: "sku",
    value: props.value,
    onChange: props.fieldValueHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    style: styles.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, props.isVariableProduct ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, "For Variable Products each Custom Field will be added to all variations") : null, __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, props.error)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    size: "sm",
    block: true,
    style: {
      margin: '2% 0px'
    },
    onClick: props.addFieldHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, "Add Field"))))));
};

var styles = {
  row: {
    margin: '2%',
    padding: '0%'
  },
  card: {
    width: '100%'
  },
  card_header: {
    width: '100%',
    alignItems: 'center',
    // color: '#6A7074',
    fontSize: '15px',
    background: 'lightgray'
  },
  label: {
    fontSize: '13px'
  },
  variations_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_5__["default"].admin_primry_color),
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CustomFields);

/***/ })

})
//# sourceMappingURL=vendor.js.c31b889b497cfac6735b.hot-update.js.map