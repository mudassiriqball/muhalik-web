webpackHotUpdate("static\\development\\pages\\vendor.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _all_products_contents_view_product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-products-contents/view-product */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products-contents/view-product.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");






var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\all-products.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var AllProducts = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AllProducts, _Component);

  var _super = _createSuper(AllProducts);

  function AllProducts(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AllProducts);

    _this = _super.call(this, props);
    _this.state = {
      productsArray: [],
      viewProduct: false,
      data: []
    };
    return _this;
  } // Getting Product Categories from DB


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AllProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_10__["default"].PATH + '/api/products/';
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url));

            case 4:
              response = _context.sent;
              console.log('data:', response.data.data.docs);
              this.setState({
                productsArray: response.data.data.docs
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log('Data Fetching Eror:', _context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 9]], Promise);
    }
  }, {
    key: "handleViewProduct",
    value: function handleViewProduct(index, i) {
      // let dataa;
      // Simple Product
      if (i == -1) {
        this.setState({
          data: this.state.productsArray[index],
          viewProduct: true
        });
      } else {
        // Variable Product
        // dataa = Object.assign([], this.state.productsArray[index])
        // dataa.product_variations = dataa.product_variations[i];
        this.setState({
          data: this.state.productsArray[index],
          viewProduct: true
        });
      } // console.log('datadata:', data)
      // Router.push({
      //     pathname: '/view-product',
      //     query: { data: data },
      // }, '/vendor/view-product?' + data.product_name);

    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, this.state.viewProduct ? __jsx(_all_products_contents_view_product__WEBPACK_IMPORTED_MODULE_12__["default"], {
        data: this.state.data,
        back: function back() {
          return _this2.setState({
            viewProduct: false,
            data: []
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }
      }) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        style: styles.title_row,
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
        style: styles.title_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }
      }), __jsx("div", {
        style: styles.title,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]) + " " + "mr-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 29
        }
      }, " All Products")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        style: {
          margin: '2%',
          background: 'white'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        responsive: true,
        bordered: true,
        hover: true,
        size: "sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }
      }, __jsx("thead", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 33
        }
      }, __jsx("tr", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 37
        }
      }, __jsx("th", {
        style: {
          textAlign: 'center'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Check, {
        type: "checkbox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 45
        }
      })), __jsx("th", {
        style: {
          textAlign: 'center'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 41
        }
      }, "Name"), __jsx("th", {
        style: {
          textAlign: 'center'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 41
        }
      }, "SKU"), __jsx("th", {
        style: {
          textAlign: 'center'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 41
        }
      }, "Stock"), __jsx("th", {
        style: {
          textAlign: 'center'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 41
        }
      }, "Price"), __jsx("th", {
        style: {
          textAlign: 'center'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 41
        }
      }, "Categories"), __jsx("th", {
        style: {
          textAlign: 'center'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 41
        }
      }, "Tags"), __jsx("th", {
        style: {
          textAlign: 'center'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 41
        }
      }, "Date"))), __jsx("tbody", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 33
        }
      }, this.state.productsArray && this.state.productsArray.map(function (element, index) {
        return _.isEqual(element.product_type, "simple-product") ? __jsx("tr", {
          key: index,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 45
          }
        }, __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Check, {
          type: "checkbox",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 89
          }
        })), __jsx("td", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]) + " " + "td",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 49
          }
        }, element.product_name, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]) + " " + "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
          style: styles.nav_link,
          onClick: function onClick() {
            return _this2.handleViewProduct(index, -1);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 53
          }
        }, " View "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
          style: styles.nav_link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 53
          }
        }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
          style: styles.nav_link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 53
          }
        }, "Delete")), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 49
          }
        }, element.sku ? element.sku : '-'), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 49
          }
        }, element.product_in_stock), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 49
          }
        }, element.product_price), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 49
          }
        }, element.product_category && element.product_category.map(function (e) {
          return e.value + ',';
        })), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 49
          }
        }, _.isEmpty(element.product_tags) ? '-' : element.product_tags.map(function (e) {
          return e.value + ',';
        })), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 49
          }
        }, _.isEmpty(element.product_entry_date) ? '-' : element.product_entry_date)) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("tr", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 49
          }
        }, __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Check, {
          type: "checkbox",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 57
          }
        })), __jsx("td", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]) + " " + "td",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 53
          }
        }, element.product_name, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]) + " " + "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 57
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
          style: styles.nav_link,
          onClick: function onClick() {
            return _this2.handleViewProduct(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 57
          }
        }, "View"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
          style: styles.nav_link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 57
          }
        }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"].Link, {
          style: styles.nav_link,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 57
          }
        }, "Delete")), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 53
          }
        }, element.sku ? element.sku : '-'), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 53
          }
        }, element.product_variations.map(function (e) {
          return e.item[e.item.length - 2].value + ',';
        })), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 53
          }
        }, element.product_variations.map(function (e) {
          return e.item[e.item.length - 3].value + ',';
        })), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 53
          }
        }, element.product_category && element.product_category.map(function (e) {
          return e.value + ',';
        })), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 53
          }
        }, _.isEmpty(element.product_tags) ? '-' : element.product_tags.map(function (e) {
          return e.value + ',';
        })), __jsx("td", {
          align: "center",
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 53
          }
        }, _.isEmpty(element.product_entry_date) ? '-' : element.product_entry_date)));
      }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3582920204",
        dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize],
        __self: this
      }, ".td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0pxQixBQUcwQywwRUFDTSxxRUFDQSw2RkFDb0IsdUNBQzNDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIFRhYmxlLCBGb3JtLCBCdXR0b24sIE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBWaWV3UHJvZHVjdCBmcm9tICcuL2FsbC1wcm9kdWN0cy1jb250ZW50cy92aWV3LXByb2R1Y3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcblxyXG5jbGFzcyBBbGxQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0c0FycmF5OiBbXSxcclxuICAgICAgICAgICAgdmlld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHZXR0aW5nIFByb2R1Y3QgQ2F0ZWdvcmllcyBmcm9tIERCXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy8nO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIHJlc3BvbnNlLmRhdGEuZGF0YS5kb2NzKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHNBcnJheTogcmVzcG9uc2UuZGF0YS5kYXRhLmRvY3MgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBGZXRjaGluZyBFcm9yOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVmlld1Byb2R1Y3QoaW5kZXgsIGkpIHtcclxuICAgICAgICAvLyBsZXQgZGF0YWE7XHJcbiAgICAgICAgLy8gU2ltcGxlIFByb2R1Y3RcclxuICAgICAgICBpZiAoaSA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5W2luZGV4XSwgdmlld1Byb2R1Y3Q6IHRydWUgfSlcclxuICAgICAgICB9IGVsc2UgeyAvLyBWYXJpYWJsZSBQcm9kdWN0XHJcbiAgICAgICAgICAgIC8vIGRhdGFhID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5W2luZGV4XSlcclxuICAgICAgICAgICAgLy8gZGF0YWEucHJvZHVjdF92YXJpYXRpb25zID0gZGF0YWEucHJvZHVjdF92YXJpYXRpb25zW2ldO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5W2luZGV4XSwgdmlld1Byb2R1Y3Q6IHRydWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGFkYXRhOicsIGRhdGEpXHJcbiAgICAgICAgLy8gUm91dGVyLnB1c2goe1xyXG4gICAgICAgIC8vICAgICBwYXRobmFtZTogJy92aWV3LXByb2R1Y3QnLFxyXG4gICAgICAgIC8vICAgICBxdWVyeTogeyBkYXRhOiBkYXRhIH0sXHJcbiAgICAgICAgLy8gfSwgJy92ZW5kb3Ivdmlldy1wcm9kdWN0PycgKyBkYXRhLnByb2R1Y3RfbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS52aWV3UHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZXdQcm9kdWN0OiBmYWxzZSwgZGF0YTogW10gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXN9IHN0eWxlPXtzdHlsZXMudGl0bGVfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17c3R5bGVzLnRpdGxlfT4gQWxsIFByb2R1Y3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBtYXJnaW46ICcyJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TS1U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U3RvY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q2F0ZWdvcmllczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5UYWdzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5ICYmIHRoaXMuc3RhdGUucHJvZHVjdHNBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0VxdWFsKGVsZW1lbnQucHJvZHVjdF90eXBlLCBcInNpbXBsZS1wcm9kdWN0XCIpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PjxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVZpZXdQcm9kdWN0KGluZGV4LCAtMSl9PiBWaWV3IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+RWRpdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+RGVsZXRlPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQucHJvZHVjdF9pbl9zdG9ja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5wcm9kdWN0X3ByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9jYXRlZ29yeSAmJiBlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnkubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLmlzRW1wdHkoZWxlbWVudC5wcm9kdWN0X3RhZ3MpID8gJy0nIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByb2R1Y3RfdGFncy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLmlzRW1wdHkoZWxlbWVudC5wcm9kdWN0X2VudHJ5X2RhdGUpID8gJy0nIDogZWxlbWVudC5wcm9kdWN0X2VudHJ5X2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVmlld1Byb2R1Y3QoaW5kZXgpfT5WaWV3PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30+RWRpdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9PkRlbGV0ZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9ucy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLml0ZW1bZS5pdGVtLmxlbmd0aCAtIDJdLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pdGVtW2UuaXRlbS5sZW5ndGggLSAzXS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9jYXRlZ29yeSAmJiBlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnkubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge18uaXNFbXB0eShlbGVtZW50LnByb2R1Y3RfdGFncykgPyAnLScgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByb2R1Y3RfdGFncy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Xy5pc0VtcHR5KGVsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlKSA/ICctJyA6IGVsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwLjclIDQlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5J1xyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFsbFByb2R1Y3RzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products.js */")));
    }
  }]);

  return AllProducts;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var styles = {
  title_row: {
    borderBottom: '1px solid gray',
    padding: '0.7% 4%',
    display: 'flex',
    alignItems: 'center'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '20px',
    height: '20px',
    maxHeight: '20px',
    maxWidth: '20px'
  },
  title: {
    color: 'gray'
  },
  label: {
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_11__["default"].form_label_fontsize)
  },
  nav_link: {
    paddingLeft: '10px',
    paddingRight: '5px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AllProducts);

/***/ })

})
//# sourceMappingURL=vendor.js.d68d120bab13dbe9f183.hot-update.js.map