webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/all-products.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/product-contents/all-products.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _vendor_dashboard_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../vendor/dashboard/dashboard-contents/product-contents/add-new */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js");









var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-contents\\product-contents\\all-products.js",
    _this3 = undefined,
    _styles;


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 // import ViewProduct from './all-products-contents/view-product'












var AllProducts = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AllProducts, _Component);

  var _super = _createSuper(AllProducts);

  function AllProducts(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AllProducts);

    _this = _super.call(this, props);
    _this.state = {
      productsArray: [],
      viewProduct: false,
      data: {}
    };
    return _this;
  } // Getting Product Categories from DB
  // async componentDidMount() {
  //     const url = MuhalikConfig.PATH + '/api/products/';
  //     try {
  //         const response = await axios.get(url);
  //         console.log('data:', response.data.data.docs)
  //         this.setState({ productsArray: response.data.data.docs })
  //     } catch (error) {
  //         console.log('Data Fetching Eror:', error);
  //     }    
  // }


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AllProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url, currentComponent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_19__["default"].PATH + '/api/products/';
              currentComponent = this;
              _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a;
              _context.t1 = axios__WEBPACK_IMPORTED_MODULE_11___default.a;
              _context.t2 = url;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_12__["getUncodededTokenFromStorage"])());

            case 7:
              _context.t3 = _context.sent;
              _context.t4 = {
                'authorization': _context.t3
              };
              _context.t5 = {
                headers: _context.t4
              };
              _context.t6 = _context.t1.get.call(_context.t1, _context.t2, _context.t5).then(function (response) {
                console.log('data:', response.data.data);
                currentComponent.setState({
                  productsArray: response.data.data
                });
              })["catch"](function (error) {
                alert('Data Fetchig Error: ', error);
              });
              _context.next = 13;
              return _context.t0.awrap.call(_context.t0, _context.t6);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "handleEditProduct",
    value: function handleEditProduct(index) {
      console.log('edit called');
      var element = [];

      if (index == -1) {
        element = this.state.data;
      } else {
        element = this.state.productsArray[index];
      }

      if (element.product_type != 'simple-product') {
        var array = [];
        var variations = element.product_variations;
        variations.forEach(function (element, i) {
          array.push({
            item: element.item,
            price: element.price,
            stock: element.stock,
            image_link: element.image_link,
            price_error: '',
            stock_error: '',
            image_link_error: '',
            custom_fields: element.custom_fields
          });
        });
        element.product_variations = array;
      } else {
        element.product_variations = [];
      }

      this.setState({
        data: element,
        viewProduct: 'edit'
      });
    }
  }, {
    key: "handleDeleteProduct",
    value: function handleDeleteProduct(index) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function handleDeleteProduct$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "isVariableProduct",
    value: function isVariableProduct(element) {
      if (element.product_type != "simple-product") {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "renderSwitch",
    value: function renderSwitch(param) {
      var _this2 = this,
          _jsx;

      switch (param) {
        case 'view':
          return __jsx(ViewProduct, {
            data: this.state.data,
            back: function back() {
              return _this2.setState({
                viewProduct: false,
                data: {}
              });
            },
            isVariableProduct: this.state.data.product_type != "simple-product",
            "delete": function _delete() {
              return _this2.handleDeleteProduct(-1);
            },
            edit: function edit() {
              return _this2.handleEditProduct(-1);
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 24
            }
          });
          break;

        case 'edit':
          return __jsx(_vendor_dashboard_dashboard_contents_product_contents_add_new__WEBPACK_IMPORTED_MODULE_22__["default"], (_jsx = {
            title: 'Vendor Dashboard / All Products / Update',
            isUpdateProduct: true,
            _id: this.state.data._id,
            isVariableProduct: this.state.data.product_type != 'simple-product',
            back: function back() {
              return _this2.setState({
                viewProduct: false,
                data: {}
              });
            },
            view: function view() {
              return _this2.setState({
                viewProduct: 'view'
              });
            },
            "delete": function _delete() {
              return _this2.handleDeleteProduct(-1);
            },
            productCategories: this.state.data.product_category,
            productSubCategories: this.state.data.product_sub_category,
            productTags: this.state.data.product_tags,
            warrantyType: this.state.data.warranty_type,
            simple_product_image_link: this.state.data.product_image_link,
            variationsArray: this.state.data.product_variations,
            dangerousGoodsArray: this.state.data.dangerous_goods,
            product_name: this.state.data.product_name,
            product_description: this.state.data.product_description,
            product_type: 'variable-product'
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "product_type", this.state.data.product_type), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "sku", this.state.data.sku), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "product_price", this.state.data.product_price), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "product_in_stock", this.state.data.product_in_stock), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "product_brand_name", this.state.data.product_brand_name), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "product_warranty", this.state.data.product_warranty), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "warranty_type", this.state.data.warranty_type), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "product_discount", this.state.data.product_discount), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "purchase_note", this.state.data.purchase_note), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "product_weight", this.state.data.product_weight), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "dimension_length", this.state.data.dimension_length), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "dimension_width", this.state.data.dimension_width), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "dimension_height", this.state.data.dimension_height), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "shipping_charges", this.state.data.shipping_charges), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "handling_fee", this.state.data.handling_fee), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__source", {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 24
          }), _jsx));
          break;

        default:
          return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_21__["default"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
            title: ' Vendor Dashboard / All Products',
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 21
            }
          }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
            noGutters: true,
            style: {
              margin: '2%',
              background: 'white'
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 21
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
            responsive: true,
            bordered: true,
            hover: true,
            size: "sm",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 25
            }
          }, __jsx("thead", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }
          }, __jsx("tr", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 33
            }
          }, __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 37
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Check, {
            type: "checkbox",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 41
            }
          })), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 37
            }
          }, "Name"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 37
            }
          }, "Product Type"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 37
            }
          }, "SKU"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 37
            }
          }, "Stock"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 37
            }
          }, "Price"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 37
            }
          }, "Categories"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 37
            }
          }, "Tags"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 37
            }
          }, "Date"))), __jsx("tbody", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }
          }, this.state.productsArray && this.state.productsArray.map(function (element, index) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, _this2.isVariableProduct(element) ? __jsx("tr", {
              key: index,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 45
              }
            }, __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 49
              }
            }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Check, {
              type: "checkbox",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 89
              }
            })), __jsx("td", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]) + " " + "td",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 49
              }
            }, element.product_name, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]) + " " + "mr-auto",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 53
              }
            }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.setState({
                  data: element,
                  viewProduct: 'view'
                });
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 53
              }
            }, " View "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.handleEditProduct(index);
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 53
              }
            }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.handleDeleteProduct(index);
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 53
              }
            }, "Delete")), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 49
              }
            }, element.product_type), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 49
              }
            }, element.sku ? element.sku : '-'), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 49
              }
            }, element.product_variations.map(function (e) {
              return e.stock + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 49
              }
            }, element.product_variations.map(function (e) {
              return e.price + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 49
              }
            }, element.product_category.value + ' => ' + element.product_sub_category.value), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 49
              }
            }, element.product_tags && element.product_tags.map(function (e) {
              return e.value + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 49
              }
            }, element.product_entry_date)) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("tr", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 49
              }
            }, __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 53
              }
            }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Check, {
              type: "checkbox",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 57
              }
            })), __jsx("td", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]) + " " + "td",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 53
              }
            }, element.product_name, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]) + " " + "mr-auto",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 57
              }
            }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.setState({
                  data: element,
                  viewProduct: 'view'
                });
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 57
              }
            }, "View"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.handleEditProduct(index);
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 57
              }
            }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.handleDeleteProduct(index);
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 57
              }
            }, "Delete")), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 53
              }
            }, element.product_type), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 53
              }
            }, element.sku ? element.sku : '-'), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 53
              }
            }, element.product_in_stock), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 53
              }
            }, element.product_price), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 53
              }
            }, element.product_category.value + ' => ' + element.product_sub_category.value), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 53
              }
            }, element.product_tags && element.product_tags.map(function (e) {
              return e.value + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3582920204", [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 53
              }
            }, element.product_entry_date))));
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "3582920204",
            dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize],
            __self: this
          }, ".td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFsbC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzUXlCLEFBRzBDLDBFQUNNLHFFQUNBLDZGQUNvQix1Q0FDM0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWxsLXByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBUYWJsZSwgQnV0dG9uLCBOYXYsIENvbCwgSW1hZ2UsIENhcmQsIEZvcm0sIElucHV0R3JvdXAsIEFjY29yZGlvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSdcclxuLy8gaW1wb3J0IFZpZXdQcm9kdWN0IGZyb20gJy4vYWxsLXByb2R1Y3RzLWNvbnRlbnRzL3ZpZXctcHJvZHVjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhVGltZXMsIGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0LCBmYVNsaWRlcnNIIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFBcnJvd0FsdENpcmNsZUxlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBDYXJkQWNjb3JkaW9uIGZyb20gJy4uLy4uLy4uLy4uL2NhcmRfYWNjb3JkaW9uJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgVGl0bGVSb3cgZnJvbSAnLi4vLi4vLi4vLi4vdGl0bGUtcm93JztcclxuaW1wb3J0IEFkZE5ldyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250ZW50cy9wcm9kdWN0LWNvbnRlbnRzL2FkZC1uZXcnXHJcblxyXG5cclxuY2xhc3MgQWxsUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcHJvZHVjdHNBcnJheTogW10sXHJcbiAgICAgICAgICAgIHZpZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR2V0dGluZyBQcm9kdWN0IENhdGVnb3JpZXMgZnJvbSBEQlxyXG4gICAgLy8gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvcHJvZHVjdHMvJztcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonLCByZXNwb25zZS5kYXRhLmRhdGEuZG9jcylcclxuICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzQXJyYXk6IHJlc3BvbnNlLmRhdGEuZGF0YS5kb2NzIH0pXHJcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgRmV0Y2hpbmcgRXJvcjonLCBlcnJvcik7XHJcbiAgICAvLyAgICAgfSAgICBcclxuICAgIC8vIH1cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzLydcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpc1xyXG5cclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIHJlc3BvbnNlLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHByb2R1Y3RzQXJyYXk6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBhbGVydCgnRGF0YSBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZWRpdCBjYWxsZWQnKVxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gW11cclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuc3RhdGUuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXlbaW5kZXhdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LnByb2R1Y3RfdHlwZSAhPSAnc2ltcGxlLXByb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zXHJcbiAgICAgICAgICAgIHZhcmlhdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogZWxlbWVudC5pdGVtLCBwcmljZTogZWxlbWVudC5wcmljZSwgc3RvY2s6IGVsZW1lbnQuc3RvY2ssIGltYWdlX2xpbms6IGVsZW1lbnQuaW1hZ2VfbGluayxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZV9lcnJvcjogJycsIHN0b2NrX2Vycm9yOiAnJywgaW1hZ2VfbGlua19lcnJvcjogJycsIGN1c3RvbV9maWVsZHM6IGVsZW1lbnQuY3VzdG9tX2ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMgPSBhcnJheVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zID0gW11cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCB2aWV3UHJvZHVjdDogJ2VkaXQnIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZURlbGV0ZVByb2R1Y3QoaW5kZXgpIHtcclxuICAgICAgICAvLyBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXkpXHJcbiAgICAgICAgLy8gY29uc3QgYXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXkpXHJcbiAgICAgICAgLy8gbGV0IF9pZCA9ICcnXHJcbiAgICAgICAgLy8gaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgLy8gICAgIF9pZCA9IHRoaXMuc3RhdGUuZGF0YS5faWQ7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgX2lkID0gY29weUFycmF5W2luZGV4XS5faWQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArIGAvYXBpL3Byb2R1Y3RzLyR7X2lkfWA7XHJcbiAgICAgICAgLy8gY29weUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGVsZW1lbnQuX2lkID09IF9pZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0c0FycmF5OiBhcnJheSB9KVxyXG4gICAgICAgIC8vIGF3YWl0IGF4aW9zLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAvLyAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgLy8gfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KCdFcnJvcjogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFyaWFibGVQcm9kdWN0KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5wcm9kdWN0X3R5cGUgIT0gXCJzaW1wbGUtcHJvZHVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN3aXRjaChwYXJhbSkge1xyXG4gICAgICAgIHN3aXRjaCAocGFyYW0pIHtcclxuICAgICAgICAgICAgY2FzZSAndmlldyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFZpZXdQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyB2aWV3UHJvZHVjdDogZmFsc2UsIGRhdGE6IHt9IH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF90eXBlICE9IFwic2ltcGxlLXByb2R1Y3RcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGU9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdCgtMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdD17KCkgPT4gdGhpcy5oYW5kbGVFZGl0UHJvZHVjdCgtMSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBZGROZXdcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1ZlbmRvciBEYXNoYm9hcmQgLyBBbGwgUHJvZHVjdHMgLyBVcGRhdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVXBkYXRlUHJvZHVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBfaWQ9e3RoaXMuc3RhdGUuZGF0YS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3R5cGUgIT0gJ3NpbXBsZS1wcm9kdWN0J31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZXdQcm9kdWN0OiBmYWxzZSwgZGF0YToge30gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZXdQcm9kdWN0OiAndmlldycgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QoLTEpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllcz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFN1YkNhdGVnb3JpZXM9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3N1Yl9jYXRlZ29yeX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRhZ3M9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgd2FycmFudHlUeXBlPXt0aGlzLnN0YXRlLmRhdGEud2FycmFudHlfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdmFyaWF0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNHb29kc0FycmF5PXt0aGlzLnN0YXRlLmRhdGEuZGFuZ2Vyb3VzX2dvb2RzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlPXsndmFyaWFibGUtcHJvZHVjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNrdT17dGhpcy5zdGF0ZS5kYXRhLnNrdX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9pbl9zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2JyYW5kX25hbWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHk9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3dhcnJhbnR5fVxyXG4gICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGU9e3RoaXMuc3RhdGUuZGF0YS53YXJyYW50eV90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnQ9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGU9e3RoaXMuc3RhdGUuZGF0YS5wdXJjaGFzZV9ub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF93ZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aD17dGhpcy5zdGF0ZS5kYXRhLmRpbWVuc2lvbl9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoPXt0aGlzLnN0YXRlLmRhdGEuZGltZW5zaW9uX3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHQ9e3RoaXMuc3RhdGUuZGF0YS5kaW1lbnNpb25faGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXM9e3RoaXMuc3RhdGUuZGF0YS5zaGlwcGluZ19jaGFyZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZT17dGhpcy5zdGF0ZS5kYXRhLmhhbmRsaW5nX2ZlZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVJvdyBpY29uPXtmYVBsdXN9IHRpdGxlPXsnIFZlbmRvciBEYXNoYm9hcmQgLyBBbGwgUHJvZHVjdHMnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IG1hcmdpbjogJzIlJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNpdmUgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Qcm9kdWN0IFR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TS1U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q2F0ZWdvcmllczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlRhZ3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5ICYmIHRoaXMuc3RhdGUucHJvZHVjdHNBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaXNWYXJpYWJsZVByb2R1Y3QoZWxlbWVudCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+PEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCB2aWV3UHJvZHVjdDogJ3ZpZXcnIH0pfT4gVmlldyA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpfT5FZGl0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QoaW5kZXgpfT5EZWxldGU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5wcm9kdWN0X3R5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b2NrICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9ucy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJpY2UgKyAnLCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9jYXRlZ29yeS52YWx1ZSArICcgPT4gJyArIGVsZW1lbnQucHJvZHVjdF9zdWJfY2F0ZWdvcnkudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF90YWdzICYmIGVsZW1lbnQucHJvZHVjdF90YWdzLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2VudHJ5X2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCB2aWV3UHJvZHVjdDogJ3ZpZXcnIH0pfT5WaWV3PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFZGl0UHJvZHVjdChpbmRleCl9PkVkaXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QoaW5kZXgpfT5EZWxldGU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnByb2R1Y3RfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2NhdGVnb3J5LnZhbHVlICsgJyA9PiAnICsgZWxlbWVudC5wcm9kdWN0X3N1Yl9jYXRlZ29yeS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3RhZ3MgJiYgZWxlbWVudC5wcm9kdWN0X3RhZ3MubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN3aXRjaCh0aGlzLnN0YXRlLnZpZXdQcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgVmlld1Byb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbaW1nUHJldmlldywgc2V0SW1nUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2ltZ0RhdGEsIHNldEltZ0RhdGFdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgbGVuID0gcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZJbWFnZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4IC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dEltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IChsZW4gLSAxKSkge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRpdGxlUm93IGljb249e2ZhUGx1c30gdGl0bGU9e2AgVmVuZG9yIERhc2hib2FyZCAvIEFsbCBQcm9kdWN0cyAvICR7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9YH0gLz5cclxuICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXt7IG1hcmdpbjogJyAwJSAyJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gY2xhc3NOYW1lPVwibXItYXV0b1wiIG9uQ2xpY2s9e3Byb3BzLmJhY2t9PkJhY2s8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT4ge3Byb3BzLmRhdGEucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gb25DbGljaz17cHJvcHMuZWRpdH0+IEVkaXQgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZX0+IERlbGV0ZSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0dlbmVyYWwgSW5mbyd9PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IE5hbWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkJyYW5kIE5hbWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X2JyYW5kX25hbWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlNLVTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnNrdX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QcmljZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X3ByaWNlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgSW4gU3RvY2s6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9pbl9zdG9ja30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XYXJyYW50eSAobW9udGgpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF93YXJyYW50eX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+V2FycmFudHkgVHlwZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLndhcnJhbnR5X3R5cGV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRpc2NvdW50ICglKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfZGlzY291bnR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QdXJjaGFzZSBOb3RlKHMpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHVyY2hhc2Vfbm90ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRlc2NyaXB0aW9uOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3c9XCI1XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbn0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAge3Byb3BzLmlzVmFyaWFibGVQcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBWYXJpYXRpb25zJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF92YXJpYXRpb25zICYmIHByb3BzLmRhdGEucHJvZHVjdF92YXJpYXRpb25zLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QcmljZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2VsZW1lbnQucHJpY2V9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlN0b2NrPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZWxlbWVudC5zdG9ja30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuaXRlbSAmJiBlbGVtZW50Lml0ZW0ubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2UubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZS52YWx1ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmN1c3RvbV9maWVsZHMgJiYgZWxlbWVudC5jdXN0b21fZmllbGRzLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlLm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2UudmFsdWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2VsZW1lbnQuaW1hZ2VfbGluayAmJiBlbGVtZW50LmltYWdlX2xpbmsubWFwKChpbWcsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMTAwcHgnLCBtYXhXaWR0aDogJzEwMHB4JyB9fSBzcmM9e2BodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9ICR7aW1nLnZhbHVlfWB9IGFsdD1cIlByb2R1Y3QgSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0SW5kZXgoaSksIHNldEltZ0RhdGEoZS5pbWdfbGluaykgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0N1c3RvbSBGaWVsZHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEuY3VzdG9tX2ZpZWxkcyAmJiBwcm9wcy5kYXRhLmN1c3RvbV9maWVsZHMubWFwKGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXsyfSBzbT17NH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtlbGVtZW50LnZhbHVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgSW1hZ2VzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluayAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyBtaW5XaWR0aDogJzIwMHB4JywgbWF4V2lkdGg6ICcyMDBweCcgfX0gc3JjPXtgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPSR7ZWxlbWVudC52YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgSW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldEluZGV4KGluZGV4KSwgc2V0SW1nRGF0YShwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluaykgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1NoaXBwaW5nIERldGFpbHMnfT5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+TGVuZ3RoIChjbSk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5kaW1lbnNpb25fbGVuZ3RofSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XaWR0aCAoY20pOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuZGltZW5zaW9uX3dpZHRofSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5IZWlnaHQgKGNtKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLmRpbWVuc2lvbl9oZWlnaHR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XZWlnaHQgKGtnKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3Rfd2VpZ2h0fSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5TaGlwcGluZyBDaGFyZ2VzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuc2hpcHBpbmdfY2hhcmdlc30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+SGFuZGxpbmsgRmVlOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuaGFuZGxpbmdfZmVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBDYXRlZ29yaWVzJ30+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17eyBmb250U2llOiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Qcm9kdWN0IENhdGVnb3JpZXM6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfY2F0ZWdvcnkudmFsdWUgKyAnID0+ICcgKyBwcm9wcy5kYXRhLnByb2R1Y3Rfc3ViX2NhdGVnb3J5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwID5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3sgZm9udFNpZTogJzEzcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UHJvZHVjdCBUYWdzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF90YWdzICYmIHByb3BzLmRhdGEucHJvZHVjdF90YWdzLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC52YWx1ZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC8gRm9ybS5Hcm91cCA+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaWU6ICcxM3B4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PkRhbmdlcm91cyBHb29kczo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmRhbmdlcm91c19nb29kcyAmJiBwcm9wcy5kYXRhLmRhbmdlcm91c19nb29kcy5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQudmFsdWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uID5cclxuXHJcbiAgICAgICAgICAgIHsvKiBJbWFnZSBQcmV2aWV3ICovfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWdQcmV2aWV3ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJtci1hdXRvXCIgaWNvbj17ZmFDaGV2cm9uTGVmdH0gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJldkltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbWdQcmV2aWV3KGZhbHNlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nRGF0YVtpbmRleF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzkwdmgnLCBtYXJnaW46ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZS1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyJSdcclxuICAgIH0sXHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsIHBhZGRpbmc6ICcwJSdcclxuICAgIH0sXHJcbiAgICBpbWdfcHJldmlld19mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIGdlbmVyYWxfaW5mb19sYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5J1xyXG4gICAgfSxcclxuICAgIGZpZWxkX2xhYmVsOiB7XHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luOiAnMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogJzJweCA1cHgnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxQcm9kdWN0cztcclxuXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuLy8gY29uc3QgY29sb3VyT3B0aW9ucyA9IFt7IGxhYmVsOiAnMTExJywgdmFsdWU6ICcxMTEnIH1dXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGxQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgICBoYW5kbGVDaGFuZ2UgPSAobmV3VmFsdWUpID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUgQ2hhbmdlZCcsIG5ld1ZhbHVlKTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuLy8gICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuLy8gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbG91ck9wdGlvbnN9XHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products.js */")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 17
        }
      }, this.renderSwitch(this.state.viewProduct)));
    }
  }]);

  return AllProducts;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var ViewProduct = function ViewProduct(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      imgPreview = _React$useState2[0],
      setImgPreview = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      index = _React$useState4[0],
      setIndex = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(''),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      imgData = _React$useState6[0],
      setImgData = _React$useState6[1];

  var len = props.data.product_image_link.length;

  function prevImage() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function nextImage() {
    if (index < len - 1) {
      setIndex(index + 1);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_21__["default"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
    title: " Vendor Dashboard / All Products / ".concat(props.data.product_name),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Row, {
    style: {
      margin: ' 0% 2%',
      display: 'flex',
      alignItems: 'center'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    className: "mr-auto",
    onClick: props.back,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 17
    }
  }, "Back"), __jsx("div", {
    style: {
      fontSize: '14px'
    },
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    onClick: props.edit,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  }, " Edit "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    onClick: props["delete"],
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 17
    }
  }, " Delete ")), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'General Info',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  }, "Product Name:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_name,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 25
    }
  }, "Brand Name:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_brand_name,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  }, "SKU:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.sku,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 29
    }
  }))), props.isVariableProduct ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 33
    }
  }, "Price:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_price,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 37
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 33
    }
  }, "Product In Stock:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_in_stock,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 37
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 25
    }
  }, "Warranty (month):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_warranty,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 25
    }
  }, "Warranty Type:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.warranty_type,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 25
    }
  }, "Discount (%):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_discount,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 25
    }
  }, "Purchase Note(s):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.purchase_note,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 25
    }
  }, "Description:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    as: "textarea",
    row: "5",
    size: "sm",
    value: props.data.product_description,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 29
    }
  }))))), props.isVariableProduct ? __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Product Variations',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }, props.data.product_variations && props.data.product_variations.map(function (element) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
      lg: 2,
      md: 2,
      sm: 4,
      xs: 12,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
      style: styles.label,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 37
      }
    }, "Price"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
      type: "text",
      size: "sm",
      value: element.price,
      disabled: true,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 41
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
      lg: 2,
      md: 2,
      sm: 4,
      xs: 12,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
      style: styles.label,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 37
      }
    }, "Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
      type: "text",
      size: "sm",
      value: element.stock,
      disabled: true,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 41
      }
    }))), element.item && element.item.map(function (e) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
        lg: 2,
        md: 2,
        sm: 4,
        xs: 12,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        style: styles.label,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 45
        }
      }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 45
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        type: "text",
        size: "sm",
        value: e.value,
        disabled: true,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 49
        }
      }))));
    }), element.custom_fields && element.custom_fields.map(function (e) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
        lg: 2,
        md: 2,
        sm: 4,
        xs: 12,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        style: styles.label,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 45
        }
      }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 45
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        type: "text",
        size: "sm",
        value: e.value,
        disabled: true,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 49
        }
      }))));
    })), __jsx("hr", {
      className: "jsx-1902595393",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 29
      }
    }));
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Custom Fields',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 21
    }
  }, props.data.custom_fields && props.data.custom_fields.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
      lg: 2,
      md: 2,
      sm: 4,
      xs: 12,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
      style: styles.label,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 37
      }
    }, element.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
      type: "text",
      size: "sm",
      value: element.value,
      disabled: true,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 41
      }
    }))));
  })), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Product Images',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 21
    }
  }, props.data.product_image_link && props.data.product_image_link.map(function (element, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Image"], {
      thumbnail: true,
      fluid: true,
      style: {
        minWidth: '200px',
        maxWidth: '200px'
      },
      src: "https://drive.google.com/uc?export=view&id=".concat(element.value),
      alt: "Product Image",
      onClick: function onClick() {
        setImgPreview(true), setIndex(index), setImgData(props.data.product_image_link);
      },
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 29
      }
    });
  }))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Shipping Details',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 25
    }
  }, "Length (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_length,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 25
    }
  }, "Width (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_width,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 25
    }
  }, "Height (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_height,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, "Weight (kg):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_weight,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 25
    }
  }, "Shipping Charges:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.shipping_charges,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 25
    }
  }, "Handlink Fee:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.handling_fee,
    disabled: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 29
    }
  }))))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Product Categories',
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 21
    }
  }, "Product Categories:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: styles.label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 25
    }
  }, props.data.product_category.value + ' => ' + props.data.product_sub_category.value))), __jsx("hr", {
    className: "jsx-1902595393",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 21
    }
  }, "Product Tags:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 21
    }
  }, props.data.product_tags && props.data.product_tags.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
      style: styles.label,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 29
      }
    }, element.value);
  }))), __jsx("hr", {
    className: "jsx-1902595393",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 21
    }
  }, "Dangerous Goods:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 21
    }
  }, props.data.dangerous_goods && props.data.dangerous_goods.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
      style: styles.label,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 29
      }
    }, element.value);
  })))), imgPreview ? __jsx("div", {
    className: "jsx-1902595393" + " " + "modal-overlay",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "modal-body",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "close-modal",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faChevronLeft"],
    style: styles.img_preview_fontawesome,
    onClick: function onClick() {
      return prevImage;
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faChevronRight"],
    style: styles.img_preview_fontawesome,
    onClick: nextImage,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faTimes"],
    style: styles.img_preview_fontawesome,
    onClick: function onClick() {
      return setImgPreview(false);
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "jsx-1902595393" + " " + "image-container",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: imgData[index].value,
    style: {
      maxWidth: '100%',
      maxHeight: '90vh',
      margin: 'auto'
    },
    className: "jsx-1902595393",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 33
    }
  })))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "1902595393",
    __self: _this3
  }, ".modal-overlay.jsx-1902595393{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-1902595393{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.jsx-1902595393{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}.image-container.jsx-1902595393{display:grid;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFsbC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2aUJpQixBQUd3QyxBQVdHLEFBUUgsQUFRRixhQUNELEVBM0JOLEFBbUJPLEdBUkYsR0FWSixJQThCWCxHQTdCYSxDQVVHLFFBVEosSUFVUSxJQVRMLFdBQ0EsQ0FTSSxVQVJILEtBU0ksT0FSa0IsU0FTdEMsQ0FJYSxTQUNGLE9BQ0MsS0FkWixHQWVlLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXGFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWxsLXByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBUYWJsZSwgQnV0dG9uLCBOYXYsIENvbCwgSW1hZ2UsIENhcmQsIEZvcm0sIElucHV0R3JvdXAsIEFjY29yZGlvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSdcclxuLy8gaW1wb3J0IFZpZXdQcm9kdWN0IGZyb20gJy4vYWxsLXByb2R1Y3RzLWNvbnRlbnRzL3ZpZXctcHJvZHVjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhVGltZXMsIGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0LCBmYVNsaWRlcnNIIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFBcnJvd0FsdENpcmNsZUxlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBDYXJkQWNjb3JkaW9uIGZyb20gJy4uLy4uLy4uLy4uL2NhcmRfYWNjb3JkaW9uJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgVGl0bGVSb3cgZnJvbSAnLi4vLi4vLi4vLi4vdGl0bGUtcm93JztcclxuaW1wb3J0IEFkZE5ldyBmcm9tICcuLi8uLi8uLi8uLi92ZW5kb3IvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250ZW50cy9wcm9kdWN0LWNvbnRlbnRzL2FkZC1uZXcnXHJcblxyXG5cclxuY2xhc3MgQWxsUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcHJvZHVjdHNBcnJheTogW10sXHJcbiAgICAgICAgICAgIHZpZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR2V0dGluZyBQcm9kdWN0IENhdGVnb3JpZXMgZnJvbSBEQlxyXG4gICAgLy8gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvcHJvZHVjdHMvJztcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonLCByZXNwb25zZS5kYXRhLmRhdGEuZG9jcylcclxuICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzQXJyYXk6IHJlc3BvbnNlLmRhdGEuZGF0YS5kb2NzIH0pXHJcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgRmV0Y2hpbmcgRXJvcjonLCBlcnJvcik7XHJcbiAgICAvLyAgICAgfSAgICBcclxuICAgIC8vIH1cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzLydcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpc1xyXG5cclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIHJlc3BvbnNlLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHByb2R1Y3RzQXJyYXk6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBhbGVydCgnRGF0YSBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZWRpdCBjYWxsZWQnKVxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gW11cclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuc3RhdGUuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXlbaW5kZXhdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LnByb2R1Y3RfdHlwZSAhPSAnc2ltcGxlLXByb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zXHJcbiAgICAgICAgICAgIHZhcmlhdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogZWxlbWVudC5pdGVtLCBwcmljZTogZWxlbWVudC5wcmljZSwgc3RvY2s6IGVsZW1lbnQuc3RvY2ssIGltYWdlX2xpbms6IGVsZW1lbnQuaW1hZ2VfbGluayxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZV9lcnJvcjogJycsIHN0b2NrX2Vycm9yOiAnJywgaW1hZ2VfbGlua19lcnJvcjogJycsIGN1c3RvbV9maWVsZHM6IGVsZW1lbnQuY3VzdG9tX2ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMgPSBhcnJheVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zID0gW11cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCB2aWV3UHJvZHVjdDogJ2VkaXQnIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZURlbGV0ZVByb2R1Y3QoaW5kZXgpIHtcclxuICAgICAgICAvLyBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXkpXHJcbiAgICAgICAgLy8gY29uc3QgYXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXkpXHJcbiAgICAgICAgLy8gbGV0IF9pZCA9ICcnXHJcbiAgICAgICAgLy8gaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgLy8gICAgIF9pZCA9IHRoaXMuc3RhdGUuZGF0YS5faWQ7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgX2lkID0gY29weUFycmF5W2luZGV4XS5faWQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArIGAvYXBpL3Byb2R1Y3RzLyR7X2lkfWA7XHJcbiAgICAgICAgLy8gY29weUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGVsZW1lbnQuX2lkID09IF9pZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0c0FycmF5OiBhcnJheSB9KVxyXG4gICAgICAgIC8vIGF3YWl0IGF4aW9zLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAvLyAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgLy8gfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KCdFcnJvcjogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFyaWFibGVQcm9kdWN0KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5wcm9kdWN0X3R5cGUgIT0gXCJzaW1wbGUtcHJvZHVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN3aXRjaChwYXJhbSkge1xyXG4gICAgICAgIHN3aXRjaCAocGFyYW0pIHtcclxuICAgICAgICAgICAgY2FzZSAndmlldyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFZpZXdQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyB2aWV3UHJvZHVjdDogZmFsc2UsIGRhdGE6IHt9IH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF90eXBlICE9IFwic2ltcGxlLXByb2R1Y3RcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGU9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdCgtMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdD17KCkgPT4gdGhpcy5oYW5kbGVFZGl0UHJvZHVjdCgtMSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBZGROZXdcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1ZlbmRvciBEYXNoYm9hcmQgLyBBbGwgUHJvZHVjdHMgLyBVcGRhdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVXBkYXRlUHJvZHVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBfaWQ9e3RoaXMuc3RhdGUuZGF0YS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3R5cGUgIT0gJ3NpbXBsZS1wcm9kdWN0J31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZXdQcm9kdWN0OiBmYWxzZSwgZGF0YToge30gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZXdQcm9kdWN0OiAndmlldycgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QoLTEpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllcz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFN1YkNhdGVnb3JpZXM9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3N1Yl9jYXRlZ29yeX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRhZ3M9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgd2FycmFudHlUeXBlPXt0aGlzLnN0YXRlLmRhdGEud2FycmFudHlfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdmFyaWF0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNHb29kc0FycmF5PXt0aGlzLnN0YXRlLmRhdGEuZGFuZ2Vyb3VzX2dvb2RzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlPXsndmFyaWFibGUtcHJvZHVjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNrdT17dGhpcy5zdGF0ZS5kYXRhLnNrdX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9pbl9zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2JyYW5kX25hbWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHk9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3dhcnJhbnR5fVxyXG4gICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGU9e3RoaXMuc3RhdGUuZGF0YS53YXJyYW50eV90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnQ9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGU9e3RoaXMuc3RhdGUuZGF0YS5wdXJjaGFzZV9ub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF93ZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aD17dGhpcy5zdGF0ZS5kYXRhLmRpbWVuc2lvbl9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoPXt0aGlzLnN0YXRlLmRhdGEuZGltZW5zaW9uX3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHQ9e3RoaXMuc3RhdGUuZGF0YS5kaW1lbnNpb25faGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXM9e3RoaXMuc3RhdGUuZGF0YS5zaGlwcGluZ19jaGFyZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZT17dGhpcy5zdGF0ZS5kYXRhLmhhbmRsaW5nX2ZlZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVJvdyBpY29uPXtmYVBsdXN9IHRpdGxlPXsnIFZlbmRvciBEYXNoYm9hcmQgLyBBbGwgUHJvZHVjdHMnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IG1hcmdpbjogJzIlJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNpdmUgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Qcm9kdWN0IFR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TS1U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q2F0ZWdvcmllczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlRhZ3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5ICYmIHRoaXMuc3RhdGUucHJvZHVjdHNBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaXNWYXJpYWJsZVByb2R1Y3QoZWxlbWVudCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+PEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCB2aWV3UHJvZHVjdDogJ3ZpZXcnIH0pfT4gVmlldyA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpfT5FZGl0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QoaW5kZXgpfT5EZWxldGU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5wcm9kdWN0X3R5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b2NrICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9ucy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJpY2UgKyAnLCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9jYXRlZ29yeS52YWx1ZSArICcgPT4gJyArIGVsZW1lbnQucHJvZHVjdF9zdWJfY2F0ZWdvcnkudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF90YWdzICYmIGVsZW1lbnQucHJvZHVjdF90YWdzLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2VudHJ5X2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCB2aWV3UHJvZHVjdDogJ3ZpZXcnIH0pfT5WaWV3PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFZGl0UHJvZHVjdChpbmRleCl9PkVkaXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QoaW5kZXgpfT5EZWxldGU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnByb2R1Y3RfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2NhdGVnb3J5LnZhbHVlICsgJyA9PiAnICsgZWxlbWVudC5wcm9kdWN0X3N1Yl9jYXRlZ29yeS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3RhZ3MgJiYgZWxlbWVudC5wcm9kdWN0X3RhZ3MubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN3aXRjaCh0aGlzLnN0YXRlLnZpZXdQcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgVmlld1Byb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbaW1nUHJldmlldywgc2V0SW1nUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2ltZ0RhdGEsIHNldEltZ0RhdGFdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgbGVuID0gcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZJbWFnZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4IC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dEltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IChsZW4gLSAxKSkge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRpdGxlUm93IGljb249e2ZhUGx1c30gdGl0bGU9e2AgVmVuZG9yIERhc2hib2FyZCAvIEFsbCBQcm9kdWN0cyAvICR7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9YH0gLz5cclxuICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXt7IG1hcmdpbjogJyAwJSAyJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gY2xhc3NOYW1lPVwibXItYXV0b1wiIG9uQ2xpY2s9e3Byb3BzLmJhY2t9PkJhY2s8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT4ge3Byb3BzLmRhdGEucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gb25DbGljaz17cHJvcHMuZWRpdH0+IEVkaXQgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZX0+IERlbGV0ZSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0dlbmVyYWwgSW5mbyd9PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IE5hbWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkJyYW5kIE5hbWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X2JyYW5kX25hbWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlNLVTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnNrdX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QcmljZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X3ByaWNlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgSW4gU3RvY2s6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9pbl9zdG9ja30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XYXJyYW50eSAobW9udGgpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF93YXJyYW50eX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+V2FycmFudHkgVHlwZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLndhcnJhbnR5X3R5cGV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRpc2NvdW50ICglKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfZGlzY291bnR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QdXJjaGFzZSBOb3RlKHMpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHVyY2hhc2Vfbm90ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRlc2NyaXB0aW9uOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3c9XCI1XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbn0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAge3Byb3BzLmlzVmFyaWFibGVQcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBWYXJpYXRpb25zJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF92YXJpYXRpb25zICYmIHByb3BzLmRhdGEucHJvZHVjdF92YXJpYXRpb25zLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QcmljZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2VsZW1lbnQucHJpY2V9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlN0b2NrPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZWxlbWVudC5zdG9ja30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuaXRlbSAmJiBlbGVtZW50Lml0ZW0ubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2UubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZS52YWx1ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmN1c3RvbV9maWVsZHMgJiYgZWxlbWVudC5jdXN0b21fZmllbGRzLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlLm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2UudmFsdWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2VsZW1lbnQuaW1hZ2VfbGluayAmJiBlbGVtZW50LmltYWdlX2xpbmsubWFwKChpbWcsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMTAwcHgnLCBtYXhXaWR0aDogJzEwMHB4JyB9fSBzcmM9e2BodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9ICR7aW1nLnZhbHVlfWB9IGFsdD1cIlByb2R1Y3QgSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0SW5kZXgoaSksIHNldEltZ0RhdGEoZS5pbWdfbGluaykgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0N1c3RvbSBGaWVsZHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEuY3VzdG9tX2ZpZWxkcyAmJiBwcm9wcy5kYXRhLmN1c3RvbV9maWVsZHMubWFwKGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXsyfSBzbT17NH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtlbGVtZW50LnZhbHVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgSW1hZ2VzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluayAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyBtaW5XaWR0aDogJzIwMHB4JywgbWF4V2lkdGg6ICcyMDBweCcgfX0gc3JjPXtgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPSR7ZWxlbWVudC52YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgSW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldEluZGV4KGluZGV4KSwgc2V0SW1nRGF0YShwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluaykgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1NoaXBwaW5nIERldGFpbHMnfT5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+TGVuZ3RoIChjbSk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5kaW1lbnNpb25fbGVuZ3RofSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XaWR0aCAoY20pOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuZGltZW5zaW9uX3dpZHRofSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5IZWlnaHQgKGNtKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLmRpbWVuc2lvbl9oZWlnaHR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XZWlnaHQgKGtnKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3Rfd2VpZ2h0fSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5TaGlwcGluZyBDaGFyZ2VzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuc2hpcHBpbmdfY2hhcmdlc30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+SGFuZGxpbmsgRmVlOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuaGFuZGxpbmdfZmVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBDYXRlZ29yaWVzJ30+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17eyBmb250U2llOiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Qcm9kdWN0IENhdGVnb3JpZXM6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfY2F0ZWdvcnkudmFsdWUgKyAnID0+ICcgKyBwcm9wcy5kYXRhLnByb2R1Y3Rfc3ViX2NhdGVnb3J5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwID5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3sgZm9udFNpZTogJzEzcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UHJvZHVjdCBUYWdzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF90YWdzICYmIHByb3BzLmRhdGEucHJvZHVjdF90YWdzLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC52YWx1ZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC8gRm9ybS5Hcm91cCA+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaWU6ICcxM3B4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PkRhbmdlcm91cyBHb29kczo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmRhbmdlcm91c19nb29kcyAmJiBwcm9wcy5kYXRhLmRhbmdlcm91c19nb29kcy5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQudmFsdWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uID5cclxuXHJcbiAgICAgICAgICAgIHsvKiBJbWFnZSBQcmV2aWV3ICovfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWdQcmV2aWV3ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJtci1hdXRvXCIgaWNvbj17ZmFDaGV2cm9uTGVmdH0gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJldkltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbWdQcmV2aWV3KGZhbHNlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nRGF0YVtpbmRleF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzkwdmgnLCBtYXJnaW46ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZS1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyJSdcclxuICAgIH0sXHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsIHBhZGRpbmc6ICcwJSdcclxuICAgIH0sXHJcbiAgICBpbWdfcHJldmlld19mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIGdlbmVyYWxfaW5mb19sYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5J1xyXG4gICAgfSxcclxuICAgIGZpZWxkX2xhYmVsOiB7XHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luOiAnMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogJzJweCA1cHgnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxQcm9kdWN0cztcclxuXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuLy8gY29uc3QgY29sb3VyT3B0aW9ucyA9IFt7IGxhYmVsOiAnMTExJywgdmFsdWU6ICcxMTEnIH1dXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGxQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgICBoYW5kbGVDaGFuZ2UgPSAobmV3VmFsdWUpID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUgQ2hhbmdlZCcsIG5ld1ZhbHVlKTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuLy8gICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuLy8gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbG91ck9wdGlvbnN9XHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products.js */"));
};

var styles = (_styles = {
  label: {
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize)
  },
  nav_link: {
    paddingLeft: '10px',
    paddingRight: '5px'
  }
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles, "label", {
  fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize),
  color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].admin_primry_color),
  marginRight: '2%'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles, "row", {
  margin: '2%',
  padding: '0%'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles, "img_preview_fontawesome", {
  cursor: 'pointer',
  color: 'white',
  fontWeight: 'lighter',
  width: '30px',
  height: '30px',
  maxHeight: '30px',
  maxWidth: '30px'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles, "fontawesome", {
  color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].admin_primry_color),
  marginRight: '10%',
  width: '17px',
  height: '17px',
  maxHeight: '17px',
  maxWidth: '17px'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles, "general_info_label", {
  fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].form_label_fontsize),
  width: '100%',
  borderBottom: '1px solid gray'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles, "field_label", {
  border: "1px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].body_color),
  color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].admin_primry_color),
  margin: '0%',
  width: '100%',
  padding: '2px 5px'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles, "card", {
  width: '100%',
  border: '1px solid lightgray'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles, "card_header", {
  alignItems: 'center',
  fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].card_header_fontsize),
  background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_20__["default"].card_header_background)
}), _styles);
/* harmony default export */ __webpack_exports__["default"] = (AllProducts); // import React, { Component } from 'react';
// import CreatableSelect from 'react-select/creatable';
// const colourOptions = [{ label: '111', value: '111' }]
// export default class AllProducts extends Component {
//     handleChange = (newValue) => {
//         console.log('Value Changed', newValue);
//     };
//     render() {
//         return (
//             <CreatableSelect
//                 isMulti
//                 onChange={this.handleChange}
//                 options={colourOptions}
//             />
//         );
//     }
// }

/***/ })

})
//# sourceMappingURL=admin.js.fe83197efe5434c06d41.hot-update.js.map