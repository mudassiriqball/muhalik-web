webpackHotUpdate("static\\development\\pages\\vendor.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/all-products.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _add_new__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-new */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js");
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../alert-modal */ "./src/pages/components/alert-modal.js");










var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\all-products.js",
    _this4 = undefined,
    _styles;


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 // import ViewProduct from './all-products-contents/view-product'














var AllProducts = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AllProducts, _Component);

  var _super = _createSuper(AllProducts);

  function AllProducts(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AllProducts);

    _this = _super.call(this, props);
    _this.state = {
      showConfirmDeleteModal: false,
      showToast: false,
      productsArray: [],
      showProduct: false,
      data: {}
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AllProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url, currentComponent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_20__["default"].PATH + '/api/products/';
              currentComponent = this;
              _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a;
              _context.t1 = axios__WEBPACK_IMPORTED_MODULE_12___default.a;
              _context.t2 = url;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_13__["getUncodededTokenFromStorage"])());

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
        showProduct: 'edit'
      });
    }
  }, {
    key: "handleDeleteProduct",
    value: function handleDeleteProduct() {
      var _id, url, currentComponent;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function handleDeleteProduct$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id = this.state.data._id;
              console.log('fuck fuck', _id);
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_20__["default"].PATH + "/api/products/".concat(_id);
              this.setState({
                showConfirmDeleteModal: false
              });
              currentComponent = this;
              _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a;
              _context2.t1 = axios__WEBPACK_IMPORTED_MODULE_12___default.a;
              _context2.t2 = url;
              _context2.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_13__["getUncodededTokenFromStorage"])());

            case 10:
              _context2.t3 = _context2.sent;
              _context2.t4 = {
                'authorization': _context2.t3
              };
              _context2.t5 = {
                headers: _context2.t4
              };
              _context2.t6 = _context2.t1["delete"].call(_context2.t1, _context2.t2, _context2.t5).then(function (response) {
                var copyArray = Object.assign([], currentComponent.state.productsArray);
                var array = copyArray;
                copyArray.forEach(function (element, i) {
                  if (element._id == _id) {
                    array.splice(i, 1);
                    return;
                  }
                });
                currentComponent.setState({
                  productsArray: array,
                  showToast: true
                });
              })["catch"](function (error) {
                try {
                  alert('Error Message: ', error.response.data.message);
                } catch (err) {
                  console.log('Error: ', error);
                }
              });
              _context2.next = 16;
              return _context2.t0.awrap.call(_context2.t0, _context2.t6);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
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
                showProduct: false,
                data: {}
              });
            },
            isVariableProduct: this.state.data.product_type != "simple-product",
            "delete": function _delete() {
              return _this2.setState({
                showConfirmDeleteModal: true
              });
            },
            edit: function edit() {
              return _this2.handleEditProduct(-1);
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 24
            }
          });
          break;

        case 'edit':
          return __jsx(_add_new__WEBPACK_IMPORTED_MODULE_23__["default"], (_jsx = {
            title: 'Vendor Dashboard / All Products / Update',
            isUpdateProduct: true,
            _id: this.state.data._id,
            isVariableProduct: this.state.data.product_type != 'simple-product',
            back: function back() {
              return _this2.setState({
                showProduct: false,
                data: {}
              });
            },
            view: function view() {
              return _this2.setState({
                showProduct: 'view'
              });
            },
            "delete": function _delete() {
              return _this2.setState({
                showConfirmDeleteModal: true,
                showProduct: false
              });
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
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "product_type", this.state.data.product_type), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "sku", this.state.data.sku), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "product_price", this.state.data.product_price), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "product_in_stock", this.state.data.product_in_stock), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "product_brand_name", this.state.data.product_brand_name), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "product_warranty", this.state.data.product_warranty), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "warranty_type", this.state.data.warranty_type), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "product_discount", this.state.data.product_discount), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "purchase_note", this.state.data.purchase_note), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "product_weight", this.state.data.product_weight), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "dimension_length", this.state.data.dimension_length), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "dimension_width", this.state.data.dimension_width), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "dimension_height", this.state.data.dimension_height), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "shipping_charges", this.state.data.shipping_charges), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "handling_fee", this.state.data.handling_fee), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "__source", {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 24
          }), _jsx));
          break;

        default:
          return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_22__["default"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faPlus"],
            title: ' Vendor Dashboard / All Products',
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 21
            }
          }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
            noGutters: true,
            style: {
              margin: '2%',
              background: 'white'
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 21
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
            responsive: true,
            bordered: true,
            hover: true,
            size: "sm",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 25
            }
          }, __jsx("thead", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 29
            }
          }, __jsx("tr", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 33
            }
          }, __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 37
            }
          }, "                                        #                                    "), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 37
            }
          }, "Name"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 37
            }
          }, "Product ID"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 37
            }
          }, "Product Type"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 37
            }
          }, "SKU"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 37
            }
          }, "Stock"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 37
            }
          }, "Price"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 37
            }
          }, "Categories"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 37
            }
          }, "Tags"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 37
            }
          }, "Date"))), __jsx("tbody", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }
          }, this.state.productsArray && this.state.productsArray.map(function (element, index) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, _this2.isVariableProduct(element) ? __jsx("tr", {
              key: index,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 45
              }
            }, __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 49
              }
            }, index + 1), __jsx("td", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]) + " " + "td",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 49
              }
            }, element.product_name, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]) + " " + "mr-auto",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 53
              }
            }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.setState({
                  data: element,
                  showProduct: 'view'
                });
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 53
              }
            }, " View "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.handleEditProduct(index);
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 53
              }
            }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.setState({
                  data: element,
                  showConfirmDeleteModal: true,
                  showProduct: false
                });
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 53
              }
            }, "Delete")), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 49
              }
            }, element._id), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 49
              }
            }, element.product_type), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 49
              }
            }, element.sku ? element.sku : '-'), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 49
              }
            }, element.product_variations.map(function (e) {
              return e.stock + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 49
              }
            }, element.product_variations.map(function (e) {
              return e.price + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 49
              }
            }, element.product_category.value + ' => ' + element.product_sub_category.value), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 49
              }
            }, element.product_tags && element.product_tags.map(function (e) {
              return e.value + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 49
              }
            }, element.product_entry_date)) : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("tr", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 49
              }
            }, __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 53
              }
            }, index + 1), __jsx("td", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]) + " " + "td",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 53
              }
            }, element.product_name, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]) + " " + "mr-auto",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 57
              }
            }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.setState({
                  data: element,
                  showProduct: 'view'
                });
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 57
              }
            }, "View"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.handleEditProduct(index);
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 57
              }
            }, "Edit"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
              style: styles.nav_link,
              onClick: function onClick() {
                return _this2.setState({
                  data: element,
                  showConfirmDeleteModal: true,
                  showProduct: false
                });
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 57
              }
            }, "Delete")), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 53
              }
            }, element._id), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 53
              }
            }, element.product_type), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 53
              }
            }, element.sku ? element.sku : '-'), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 53
              }
            }, element.product_in_stock), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 53
              }
            }, element.product_price), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 53
              }
            }, element.product_category.value + ' => ' + element.product_sub_category.value), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 53
              }
            }, element.product_tags && element.product_tags.map(function (e) {
              return e.value + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["79784135", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 53
              }
            }, element.product_entry_date))));
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
            id: "79784135",
            dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize],
            __self: this
          }, ".td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0% 2px;font-size:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1F5QixBQUcwQywwRUFDTSxxRUFDQSw2RkFDSixlQUN3Qix1Q0FDM0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFsbC1wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgTW9kYWwsIFRhYmxlLCBCdXR0b24sIE5hdiwgQ29sLCBJbWFnZSwgQ2FyZCwgRm9ybSwgSW5wdXRHcm91cCwgQWNjb3JkaW9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJ1xyXG4vLyBpbXBvcnQgVmlld1Byb2R1Y3QgZnJvbSAnLi9hbGwtcHJvZHVjdHMtY29udGVudHMvdmlldy1wcm9kdWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFQbHVzLCBmYUFycm93TGVmdCwgZmFUaW1lcywgZmFDaGV2cm9uTGVmdCwgZmFDaGV2cm9uUmlnaHQsIGZhU2xpZGVyc0gsIGZhVHJhc2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQXJyb3dBbHRDaXJjbGVMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgQ2FyZEFjY29yZGlvbiBmcm9tICcuLi8uLi8uLi8uLi9jYXJkX2FjY29yZGlvbic7XHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZydcclxuaW1wb3J0IEdsb2JhbFN0eWxlU2hlZXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVTaGVldCdcclxuaW1wb3J0IFRpdGxlUm93IGZyb20gJy4uLy4uLy4uLy4uL3RpdGxlLXJvdyc7XHJcbmltcG9ydCBBZGROZXcgZnJvbSAnLi9hZGQtbmV3J1xyXG5pbXBvcnQgQWxlcnRNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9hbGVydC1tb2RhbCdcclxuXHJcbmNsYXNzIEFsbFByb2R1Y3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dDb25maXJtRGVsZXRlTW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93VG9hc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9kdWN0c0FycmF5OiBbXSxcclxuICAgICAgICAgICAgc2hvd1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvcHJvZHVjdHMvJ1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzXHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGE6JywgcmVzcG9uc2UuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgcHJvZHVjdHNBcnJheTogcmVzcG9uc2UuZGF0YS5kYXRhIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdEYXRhIEZldGNoaWcgRXJyb3I6ICcsIGVycm9yKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVFZGl0UHJvZHVjdChpbmRleCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlZGl0IGNhbGxlZCcpXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBbXVxyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5zdGF0ZS5kYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuc3RhdGUucHJvZHVjdHNBcnJheVtpbmRleF1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucHJvZHVjdF90eXBlICE9ICdzaW1wbGUtcHJvZHVjdCcpIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb25zID0gZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnNcclxuICAgICAgICAgICAgdmFyaWF0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtOiBlbGVtZW50Lml0ZW0sIHByaWNlOiBlbGVtZW50LnByaWNlLCBzdG9jazogZWxlbWVudC5zdG9jaywgaW1hZ2VfbGluazogZWxlbWVudC5pbWFnZV9saW5rLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlX2Vycm9yOiAnJywgc3RvY2tfZXJyb3I6ICcnLCBpbWFnZV9saW5rX2Vycm9yOiAnJywgY3VzdG9tX2ZpZWxkczogZWxlbWVudC5jdXN0b21fZmllbGRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9ucyA9IGFycmF5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMgPSBbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGVsZW1lbnQsIHNob3dQcm9kdWN0OiAnZWRpdCcgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaGFuZGxlRGVsZXRlUHJvZHVjdCgpIHtcclxuICAgICAgICBjb25zdCBfaWQgPSB0aGlzLnN0YXRlLmRhdGEuX2lkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmdWNrIGZ1Y2snLCBfaWQpXHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgYC9hcGkvcHJvZHVjdHMvJHtfaWR9YDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogZmFsc2UgfSlcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpc1xyXG5cclxuICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIGN1cnJlbnRDb21wb25lbnQuc3RhdGUucHJvZHVjdHNBcnJheSlcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gY29weUFycmF5XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5faWQgPT0gX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBwcm9kdWN0c0FycmF5OiBhcnJheSwgc2hvd1RvYXN0OiB0cnVlIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyb3IgTWVzc2FnZTogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFyaWFibGVQcm9kdWN0KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5wcm9kdWN0X3R5cGUgIT0gXCJzaW1wbGUtcHJvZHVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN3aXRjaChwYXJhbSkge1xyXG4gICAgICAgIHN3aXRjaCAocGFyYW0pIHtcclxuICAgICAgICAgICAgY2FzZSAndmlldyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFZpZXdQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93UHJvZHVjdDogZmFsc2UsIGRhdGE6IHt9IH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF90eXBlICE9IFwic2ltcGxlLXByb2R1Y3RcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ9eygpID0+IHRoaXMuaGFuZGxlRWRpdFByb2R1Y3QoLTEpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdlZGl0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QWRkTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydWZW5kb3IgRGFzaGJvYXJkIC8gQWxsIFByb2R1Y3RzIC8gVXBkYXRlJ31cclxuICAgICAgICAgICAgICAgICAgICBpc1VwZGF0ZVByb2R1Y3Q9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgX2lkPXt0aGlzLnN0YXRlLmRhdGEuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF90eXBlICE9ICdzaW1wbGUtcHJvZHVjdCd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93UHJvZHVjdDogZmFsc2UsIGRhdGE6IHt9IH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXc9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93UHJvZHVjdDogJ3ZpZXcnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtRGVsZXRlTW9kYWw6IHRydWUsIHNob3dQcm9kdWN0OiBmYWxzZSB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENhdGVnb3JpZXM9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTdWJDYXRlZ29yaWVzPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9zdWJfY2F0ZWdvcnl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUYWdzPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF90YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5VHlwZT17dGhpcy5zdGF0ZS5kYXRhLndhcnJhbnR5X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluaz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfaW1hZ2VfbGlua31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3ZhcmlhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzR29vZHNBcnJheT17dGhpcy5zdGF0ZS5kYXRhLmRhbmdlcm91c19nb29kc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZT17J3ZhcmlhYmxlLXByb2R1Y3QnfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBza3U9e3RoaXMuc3RhdGUuZGF0YS5za3V9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9jaz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9icmFuZF9uYW1lfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF93YXJyYW50eX1cclxuICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlPXt0aGlzLnN0YXRlLmRhdGEud2FycmFudHlfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9kaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlPXt0aGlzLnN0YXRlLmRhdGEucHVyY2hhc2Vfbm90ZX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodD17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3Rfd2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9sZW5ndGg9e3RoaXMuc3RhdGUuZGF0YS5kaW1lbnNpb25fbGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aD17dGhpcy5zdGF0ZS5kYXRhLmRpbWVuc2lvbl93aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0PXt0aGlzLnN0YXRlLmRhdGEuZGltZW5zaW9uX2hlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzPXt0aGlzLnN0YXRlLmRhdGEuc2hpcHBpbmdfY2hhcmdlc31cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGluZ19mZWU9e3RoaXMuc3RhdGUuZGF0YS5oYW5kbGluZ19mZWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVSb3cgaWNvbj17ZmFQbHVzfSB0aXRsZT17JyBWZW5kb3IgRGFzaGJvYXJkIC8gQWxsIFByb2R1Y3RzJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycyBzdHlsZT17eyBtYXJnaW46ICcyJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlIGJvcmRlcmVkIGhvdmVyIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+UHJvZHVjdCBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByb2R1Y3QgVHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNLVTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlN0b2NrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5DYXRlZ29yaWVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+VGFnczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXkgJiYgdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5pc1ZhcmlhYmxlUHJvZHVjdChlbGVtZW50KSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+PEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCBzaG93UHJvZHVjdDogJ3ZpZXcnIH0pfT4gVmlldyA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpfT5FZGl0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0YTogZWxlbWVudCwgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogdHJ1ZSwgc2hvd1Byb2R1Y3Q6IGZhbHNlIH0pfT5EZWxldGU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5faWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQucHJvZHVjdF90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnNrdSA/IGVsZW1lbnQuc2t1IDogJy0nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9jayArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByaWNlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnkudmFsdWUgKyAnID0+ICcgKyBlbGVtZW50LnByb2R1Y3Rfc3ViX2NhdGVnb3J5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdGFncyAmJiBlbGVtZW50LnByb2R1Y3RfdGFncy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudmFsdWUgKyAnLCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0YTogZWxlbWVudCwgc2hvd1Byb2R1Y3Q6ICd2aWV3JyB9KX0+VmlldzwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpfT5FZGl0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGVsZW1lbnQsIHNob3dDb25maXJtRGVsZXRlTW9kYWw6IHRydWUsIHNob3dQcm9kdWN0OiBmYWxzZSB9KX0+RGVsZXRlPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdChpbmRleCl9PkRlbGV0ZTwvTmF2Lkxpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50Ll9pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQucHJvZHVjdF90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5za3UgPyBlbGVtZW50LnNrdSA6ICctJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9pbl9zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnkudmFsdWUgKyAnID0+ICcgKyBlbGVtZW50LnByb2R1Y3Rfc3ViX2NhdGVnb3J5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdGFncyAmJiBlbGVtZW50LnByb2R1Y3RfdGFncy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2VudHJ5X2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJSAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDb25maXJtRGVsZXRlTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dDb25maXJtRGVsZXRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgX2lkPXt0aGlzLnN0YXRlLmRhdGEuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtRGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93VG9hc3Q6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd1RvYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J1N1Y2Nlc3MnfVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9eydQcm9kdWN0IERlbGV0ZWQgU3VjY2Vzc2Z1bGx5Lid9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9e2ZhVGh1bWJzVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiIzAwYjMwMFwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3dpdGNoKHRoaXMuc3RhdGUuc2hvd1Byb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBWaWV3UHJvZHVjdCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IFtpbWdQcmV2aWV3LCBzZXRJbWdQcmV2aWV3XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbaW1nRGF0YSwgc2V0SW1nRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBsZW4gPSBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5sZW5ndGg7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJldkltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXggLSAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0SW1hZ2UoKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgKGxlbiAtIDEpKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4ICsgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGl0bGVSb3cgaWNvbj17ZmFQbHVzfSB0aXRsZT17YCBWZW5kb3IgRGFzaGJvYXJkIC8gQWxsIFByb2R1Y3RzIC8gJHtwcm9wcy5kYXRhLnByb2R1Y3RfbmFtZX1gfSAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3cgc3R5bGU9e3sgbWFyZ2luOiAnIDAlIDIlJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fSA+XHJcbiAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBjbGFzc05hbWU9XCJtci1hdXRvXCIgb25DbGljaz17cHJvcHMuYmFja30+QmFjazwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19PiB7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXtwcm9wcy5lZGl0fT4gRWRpdCA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gb25DbGljaz17cHJvcHMuZGVsZXRlfT4gRGVsZXRlIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnR2VuZXJhbCBJbmZvJ30+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgTmFtZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfbmFtZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+QnJhbmQgTmFtZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfYnJhbmRfbmFtZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U0tVOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuc2t1fSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzVmFyaWFibGVQcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByaWNlOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfcHJpY2V9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBJbiBTdG9jazo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X2luX3N0b2NrfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PldhcnJhbnR5IChtb250aCk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X3dhcnJhbnR5fSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XYXJyYW50eSBUeXBlOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEud2FycmFudHlfdHlwZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RGlzY291bnQgKCUpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9kaXNjb3VudH0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlB1cmNoYXNlIE5vdGUocyk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wdXJjaGFzZV9ub3RlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RGVzY3JpcHRpb246PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgYXM9XCJ0ZXh0YXJlYVwiIHJvdz1cIjVcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9ufSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcblxyXG4gICAgICAgICAgICB7cHJvcHMuaXNWYXJpYWJsZVByb2R1Y3QgP1xyXG4gICAgICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydQcm9kdWN0IFZhcmlhdGlvbnMnfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5wcm9kdWN0X3ZhcmlhdGlvbnMgJiYgcHJvcHMuZGF0YS5wcm9kdWN0X3ZhcmlhdGlvbnMubWFwKGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByaWNlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZWxlbWVudC5wcmljZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXsyfSBzbT17NH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U3RvY2s8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtlbGVtZW50LnN0b2NrfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5pdGVtICYmIGVsZW1lbnQuaXRlbS5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXsyfSBzbT17NH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZS5uYW1lfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtlLnZhbHVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuY3VzdG9tX2ZpZWxkcyAmJiBlbGVtZW50LmN1c3RvbV9maWVsZHMubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2UubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZS52YWx1ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7ZWxlbWVudC5pbWFnZV9saW5rICYmIGVsZW1lbnQuaW1hZ2VfbGluay5tYXAoKGltZywgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgbWluV2lkdGg6ICcxMDBweCcsIG1heFdpZHRoOiAnMTAwcHgnIH19IHNyYz17YGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0gJHtpbWcudmFsdWV9YH0gYWx0PVwiUHJvZHVjdCBJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRJbWdQcmV2aWV3KHRydWUpLCBzZXRJbmRleChpKSwgc2V0SW1nRGF0YShlLmltZ19saW5rKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnQ3VzdG9tIEZpZWxkcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5jdXN0b21fZmllbGRzICYmIHByb3BzLmRhdGEuY3VzdG9tX2ZpZWxkcy5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5uYW1lfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2VsZW1lbnQudmFsdWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBJbWFnZXMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rICYmIHByb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMjAwcHgnLCBtYXhXaWR0aDogJzIwMHB4JyB9fSBzcmM9e2BodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9JHtlbGVtZW50LnZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZHVjdCBJbWFnZVwiIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0SW5kZXgoaW5kZXgpLCBzZXRJbWdEYXRhKHByb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnU2hpcHBpbmcgRGV0YWlscyd9PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5MZW5ndGggKGNtKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLmRpbWVuc2lvbl9sZW5ndGh9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PldpZHRoIChjbSk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5kaW1lbnNpb25fd2lkdGh9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkhlaWdodCAoY20pOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuZGltZW5zaW9uX2hlaWdodH0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PldlaWdodCAoa2cpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF93ZWlnaHR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlNoaXBwaW5nIENoYXJnZXM6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5zaGlwcGluZ19jaGFyZ2VzfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5IYW5kbGluayBGZWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5oYW5kbGluZ19mZWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydQcm9kdWN0IENhdGVnb3JpZXMnfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaWU6ICcxM3B4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PlByb2R1Y3QgQ2F0ZWdvcmllczo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF9jYXRlZ29yeS52YWx1ZSArICcgPT4gJyArIHByb3BzLmRhdGEucHJvZHVjdF9zdWJfY2F0ZWdvcnkudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXAgPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17eyBmb250U2llOiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Qcm9kdWN0IFRhZ3M6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5wcm9kdWN0X3RhZ3MgJiYgcHJvcHMuZGF0YS5wcm9kdWN0X3RhZ3MubWFwKGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnZhbHVlfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8LyBGb3JtLkdyb3VwID5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3sgZm9udFNpZTogJzEzcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+RGFuZ2Vyb3VzIEdvb2RzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEuZGFuZ2Vyb3VzX2dvb2RzICYmIHByb3BzLmRhdGEuZGFuZ2Vyb3VzX2dvb2RzLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC52YWx1ZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24gPlxyXG5cclxuICAgICAgICAgICAgey8qIEltYWdlIFByZXZpZXcgKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltZ1ByZXZpZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBpY29uPXtmYUNoZXZyb25MZWZ0fSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcmV2SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJtci1hdXRvXCIgaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHN0eWxlPXtzdHlsZXMuaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IHN0eWxlPXtzdHlsZXMuaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEltZ1ByZXZpZXcoZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWdEYXRhW2luZGV4XS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnOTB2aCcsIG1hcmdpbjogJ2F1dG8nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgIC5tb2RhbC1vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAyMSwgMjEsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlLW1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWBcclxuICAgIH0sXHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnMTBweCcsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNXB4JyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzIlJ1xyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJywgcGFkZGluZzogJzAlJ1xyXG4gICAgfSxcclxuICAgIGltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxyXG4gICAgICAgIHdpZHRoOiAnMzBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMTAlJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgZ2VuZXJhbF9pbmZvX2xhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknXHJcbiAgICB9LFxyXG4gICAgZmllbGRfbGFiZWw6IHtcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtHbG9iYWxTdHlsZVNoZWV0LmJvZHlfY29sb3J9YCxcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW46ICcwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMnB4IDVweCdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5J1xyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuY2FyZF9oZWFkZXJfZm9udHNpemV9YCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2JhY2tncm91bmR9YCxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbFByb2R1Y3RzO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbmZpcm1EZWxldGVNb2RhbChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1tb2RhbFwiXHJcbiAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmMzMzMycsIGJvcmRlclJhZGl1czogJzVweCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uIHN0eWxlPXt7IGNvbG9yOiAnI2ZmMzMzMycsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZmYzMzMzJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2h9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmMzMzMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fSA+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiYWxlcnQtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeydEZWxldGUgUHJvZHVjdCA/J31cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JywgcGFkZGluZzogJzAlJywgbWFyZ2luOiAnMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFByb2R1Y3QgTmFtZTogJHtwcm9wcy5wcm9kdWN0X25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BQcm9kdWN0IElEOiAke3Byb3BzLl9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50PSdvdXRsaW5lLWRhbmdlcicgY2xhc3NOYW1lPSdtci1hdXRvJyBvbkNsaWNrPXtwcm9wcy5jb25maXJtRGVsZXRlfT5Db25maXJtPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50PSdvdXRsaW5lLXByaW1hcnknIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnO1xyXG4vLyBjb25zdCBjb2xvdXJPcHRpb25zID0gW3sgbGFiZWw6ICcxMTEnLCB2YWx1ZTogJzExMScgfV1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsbFByb2R1Y3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICAgIGhhbmRsZUNoYW5nZSA9IChuZXdWYWx1ZSkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdWYWx1ZSBDaGFuZ2VkJywgbmV3VmFsdWUpO1xyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4vLyAgICAgICAgICAgICAgICAgaXNNdWx0aVxyXG4vLyAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y29sb3VyT3B0aW9uc31cclxuLy8gICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products.js */")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(ConfirmDeleteModal, {
        onHide: function onHide() {
          return _this3.setState({
            showConfirmDeleteModal: false
          });
        },
        show: this.state.showConfirmDeleteModal,
        _id: this.state.data._id,
        product_name: this.state.data.product_name,
        confirmDelete: this.handleDeleteProduct.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 17
        }
      }), __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_24__["default"], {
        onHide: function onHide(e) {
          return _this3.setState({
            showToast: false
          });
        },
        show: this.state.showToast,
        header: 'Success',
        message: 'Product Deleted Successfully.',
        iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faThumbsUp"],
        color: "#00b300",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 17
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 17
        }
      }, this.renderSwitch(this.state.showProduct)));
    }
  }]);

  return AllProducts;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var ViewProduct = function ViewProduct(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      imgPreview = _React$useState2[0],
      setImgPreview = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      index = _React$useState4[0],
      setIndex = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(''),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_22__["default"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faPlus"],
    title: " Vendor Dashboard / All Products / ".concat(props.data.product_name),
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
    style: {
      margin: ' 0% 2%',
      display: 'flex',
      alignItems: 'center'
    },
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    className: "mr-auto",
    onClick: props.back,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 17
    }
  }, "Back"), __jsx("div", {
    style: {
      fontSize: '14px'
    },
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 17
    }
  }, " ", props.data.product_name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    onClick: props.edit,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 17
    }
  }, " Edit "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
    style: {
      fontSize: '14px'
    },
    onClick: props["delete"],
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 17
    }
  }, " Delete ")), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'General Info',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 25
    }
  }, "Product Name:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_name,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 25
    }
  }, "Brand Name:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_brand_name,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 25
    }
  }, "SKU:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.sku,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 29
    }
  }))), props.isVariableProduct ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 33
    }
  }, "Price:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_price,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 37
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 33
    }
  }, "Product In Stock:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 33
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_in_stock,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 37
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 25
    }
  }, "Warranty (month):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_warranty,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 25
    }
  }, "Warranty Type:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.warranty_type,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 25
    }
  }, "Discount (%):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_discount,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 25
    }
  }, "Purchase Note(s):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.purchase_note,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 25
    }
  }, "Description:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    as: "textarea",
    row: "5",
    size: "sm",
    value: props.data.product_description,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 29
    }
  }))))), props.isVariableProduct ? __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Product Variations',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 17
    }
  }, props.data.product_variations && props.data.product_variations.map(function (element) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
      lg: 2,
      md: 2,
      sm: 4,
      xs: 12,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 37
      }
    }, "Price"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
      type: "text",
      size: "sm",
      value: element.price,
      disabled: true,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 41
      }
    }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
      lg: 2,
      md: 2,
      sm: 4,
      xs: 12,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 37
      }
    }, "Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
      type: "text",
      size: "sm",
      value: element.stock,
      disabled: true,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 41
      }
    }))), element.item && element.item.map(function (e) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
        lg: 2,
        md: 2,
        sm: 4,
        xs: 12,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        style: styles.label,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 45
        }
      }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 45
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        type: "text",
        size: "sm",
        value: e.value,
        disabled: true,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 49
        }
      }))));
    }), element.custom_fields && element.custom_fields.map(function (e) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
        lg: 2,
        md: 2,
        sm: 4,
        xs: 12,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        style: styles.label,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 45
        }
      }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 45
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        type: "text",
        size: "sm",
        value: e.value,
        disabled: true,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 49
        }
      }))));
    })), __jsx("hr", {
      className: "jsx-1902595393",
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 29
      }
    }));
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Custom Fields',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 21
    }
  }, props.data.custom_fields && props.data.custom_fields.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
      lg: 2,
      md: 2,
      sm: 4,
      xs: 12,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 37
      }
    }, element.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
      type: "text",
      size: "sm",
      value: element.value,
      disabled: true,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 41
      }
    }))));
  })), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Product Images',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 21
    }
  }, props.data.product_image_link && props.data.product_image_link.map(function (element, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Image"], {
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
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 29
      }
    });
  }))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Shipping Details',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 25
    }
  }, "Length (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_length,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 25
    }
  }, "Width (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_width,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 25
    }
  }, "Height (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.dimension_height,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 25
    }
  }, "Weight (kg):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.product_weight,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 25
    }
  }, "Shipping Charges:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.shipping_charges,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 29
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
    lg: 4,
    md: 4,
    sm: 6,
    xs: 12,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 25
    }
  }, "Handlink Fee:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
    type: "text",
    size: "sm",
    value: props.data.handling_fee,
    disabled: true,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 29
    }
  }))))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Product Categories',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    },
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 21
    }
  }, "Product Categories:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 25
    }
  }, props.data.product_category.value + ' => ' + props.data.product_sub_category.value))), __jsx("hr", {
    className: "jsx-1902595393",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    },
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 21
    }
  }, "Product Tags:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 21
    }
  }, props.data.product_tags && props.data.product_tags.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 29
      }
    }, element.value);
  }))), __jsx("hr", {
    className: "jsx-1902595393",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: {
      fontSie: '13px',
      fontWeight: 'bold'
    },
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 21
    }
  }, "Dangerous Goods:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 21
    }
  }, props.data.dangerous_goods && props.data.dangerous_goods.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 29
      }
    }, element.value);
  })))), imgPreview ? __jsx("div", {
    className: "jsx-1902595393" + " " + "modal-overlay",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "modal-body",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "close-modal",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faChevronLeft"],
    style: styles.img_preview_fontawesome,
    onClick: function onClick() {
      return prevImage;
    },
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faChevronRight"],
    style: styles.img_preview_fontawesome,
    onClick: nextImage,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 33
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faTimes"],
    style: styles.img_preview_fontawesome,
    onClick: function onClick() {
      return setImgPreview(false);
    },
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "jsx-1902595393" + " " + "image-container",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
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
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 33
    }
  })))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "1902595393",
    __self: _this4
  }, ".modal-overlay.jsx-1902595393{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-1902595393{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.jsx-1902595393{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}.image-container.jsx-1902595393{display:grid;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMmpCaUIsQUFHd0MsQUFXRyxBQVFILEFBUUYsYUFDRCxFQTNCTixBQW1CTyxHQVJGLEdBVkosSUE4QlgsR0E3QmEsQ0FVRyxRQVRKLElBVVEsSUFUTCxXQUNBLENBU0ksVUFSSCxLQVNJLE9BUmtCLFNBU3RDLENBSWEsU0FDRixPQUNDLEtBZFosR0FlZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIE1vZGFsLCBUYWJsZSwgQnV0dG9uLCBOYXYsIENvbCwgSW1hZ2UsIENhcmQsIEZvcm0sIElucHV0R3JvdXAsIEFjY29yZGlvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSdcclxuLy8gaW1wb3J0IFZpZXdQcm9kdWN0IGZyb20gJy4vYWxsLXByb2R1Y3RzLWNvbnRlbnRzL3ZpZXctcHJvZHVjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhVGltZXMsIGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0LCBmYVNsaWRlcnNILCBmYVRyYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCwgZmFUaHVtYnNEb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IENhcmRBY2NvcmRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY2FyZF9hY2NvcmRpb24nO1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBUaXRsZVJvdyBmcm9tICcuLi8uLi8uLi8uLi90aXRsZS1yb3cnO1xyXG5pbXBvcnQgQWRkTmV3IGZyb20gJy4vYWRkLW5ldydcclxuaW1wb3J0IEFsZXJ0TW9kYWwgZnJvbSAnLi4vLi4vLi4vLi4vYWxlcnQtbW9kYWwnXHJcblxyXG5jbGFzcyBBbGxQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RvYXN0OiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvZHVjdHNBcnJheTogW10sXHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzLydcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpc1xyXG5cclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIHJlc3BvbnNlLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHByb2R1Y3RzQXJyYXk6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBhbGVydCgnRGF0YSBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZWRpdCBjYWxsZWQnKVxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gW11cclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuc3RhdGUuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXlbaW5kZXhdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LnByb2R1Y3RfdHlwZSAhPSAnc2ltcGxlLXByb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zXHJcbiAgICAgICAgICAgIHZhcmlhdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogZWxlbWVudC5pdGVtLCBwcmljZTogZWxlbWVudC5wcmljZSwgc3RvY2s6IGVsZW1lbnQuc3RvY2ssIGltYWdlX2xpbms6IGVsZW1lbnQuaW1hZ2VfbGluayxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZV9lcnJvcjogJycsIHN0b2NrX2Vycm9yOiAnJywgaW1hZ2VfbGlua19lcnJvcjogJycsIGN1c3RvbV9maWVsZHM6IGVsZW1lbnQuY3VzdG9tX2ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMgPSBhcnJheVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zID0gW11cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCBzaG93UHJvZHVjdDogJ2VkaXQnIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZURlbGV0ZVByb2R1Y3QoKSB7XHJcbiAgICAgICAgY29uc3QgX2lkID0gdGhpcy5zdGF0ZS5kYXRhLl9pZDtcclxuICAgICAgICBjb25zb2xlLmxvZygnZnVjayBmdWNrJywgX2lkKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArIGAvYXBpL3Byb2R1Y3RzLyR7X2lkfWA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtRGVsZXRlTW9kYWw6IGZhbHNlIH0pXHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbXBvbmVudCA9IHRoaXNcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogYXdhaXQgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSgpIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBjdXJyZW50Q29tcG9uZW50LnN0YXRlLnByb2R1Y3RzQXJyYXkpXHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IGNvcHlBcnJheVxyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuX2lkID09IF9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgcHJvZHVjdHNBcnJheTogYXJyYXksIHNob3dUb2FzdDogdHJ1ZSB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yIE1lc3NhZ2U6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhcmlhYmxlUHJvZHVjdChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucHJvZHVjdF90eXBlICE9IFwic2ltcGxlLXByb2R1Y3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTd2l0Y2gocGFyYW0pIHtcclxuICAgICAgICBzd2l0Y2ggKHBhcmFtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3ZpZXcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxWaWV3UHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBiYWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1Byb2R1Y3Q6IGZhbHNlLCBkYXRhOiB7fSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdD17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdHlwZSAhPSBcInNpbXBsZS1wcm9kdWN0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBlZGl0PXsoKSA9PiB0aGlzLmhhbmRsZUVkaXRQcm9kdWN0KC0xKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZWRpdCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEFkZE5ld1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnVmVuZG9yIERhc2hib2FyZCAvIEFsbCBQcm9kdWN0cyAvIFVwZGF0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNVcGRhdGVQcm9kdWN0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIF9pZD17dGhpcy5zdGF0ZS5kYXRhLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdD17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdHlwZSAhPSAnc2ltcGxlLXByb2R1Y3QnfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1Byb2R1Y3Q6IGZhbHNlLCBkYXRhOiB7fSB9KX1cclxuICAgICAgICAgICAgICAgICAgICB2aWV3PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1Byb2R1Y3Q6ICd2aWV3JyB9KX1cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiB0cnVlLCBzaG93UHJvZHVjdDogZmFsc2UgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yaWVzPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U3ViQ2F0ZWdvcmllcz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3Rfc3ViX2NhdGVnb3J5fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGFncz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdGFnc31cclxuICAgICAgICAgICAgICAgICAgICB3YXJyYW50eVR5cGU9e3RoaXMuc3RhdGUuZGF0YS53YXJyYW50eV90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF92YXJpYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c0dvb2RzQXJyYXk9e3RoaXMuc3RhdGUuZGF0YS5kYW5nZXJvdXNfZ29vZHN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGU9eyd2YXJpYWJsZS1wcm9kdWN0J31cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2t1PXt0aGlzLnN0YXRlLmRhdGEuc2t1fVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2U9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW5fc3RvY2s9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2luX3N0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3Rfd2FycmFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZT17dGhpcy5zdGF0ZS5kYXRhLndhcnJhbnR5X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudD17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZT17dGhpcy5zdGF0ZS5kYXRhLnB1cmNoYXNlX25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHQ9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3dlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoPXt0aGlzLnN0YXRlLmRhdGEuZGltZW5zaW9uX2xlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGg9e3RoaXMuc3RhdGUuZGF0YS5kaW1lbnNpb25fd2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodD17dGhpcy5zdGF0ZS5kYXRhLmRpbWVuc2lvbl9oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlcz17dGhpcy5zdGF0ZS5kYXRhLnNoaXBwaW5nX2NoYXJnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlPXt0aGlzLnN0YXRlLmRhdGEuaGFuZGxpbmdfZmVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlUm93IGljb249e2ZhUGx1c30gdGl0bGU9eycgVmVuZG9yIERhc2hib2FyZCAvIEFsbCBQcm9kdWN0cyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgbWFyZ2luOiAnMiUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByb2R1Y3QgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Qcm9kdWN0IFR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TS1U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q2F0ZWdvcmllczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlRhZ3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5ICYmIHRoaXMuc3RhdGUucHJvZHVjdHNBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaXNWYXJpYWJsZVByb2R1Y3QoZWxlbWVudCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PjxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0YTogZWxlbWVudCwgc2hvd1Byb2R1Y3Q6ICd2aWV3JyB9KX0+IFZpZXcgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUVkaXRQcm9kdWN0KGluZGV4KX0+RWRpdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGVsZW1lbnQsIHNob3dDb25maXJtRGVsZXRlTW9kYWw6IHRydWUsIHNob3dQcm9kdWN0OiBmYWxzZSB9KX0+RGVsZXRlPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnByb2R1Y3RfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5za3UgPyBlbGVtZW50LnNrdSA6ICctJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9ucy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvY2sgKyAnLCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmljZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2NhdGVnb3J5LnZhbHVlICsgJyA9PiAnICsgZWxlbWVudC5wcm9kdWN0X3N1Yl9jYXRlZ29yeS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3RhZ3MgJiYgZWxlbWVudC5wcm9kdWN0X3RhZ3MubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfZW50cnlfZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGVsZW1lbnQsIHNob3dQcm9kdWN0OiAndmlldycgfSl9PlZpZXc8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUVkaXRQcm9kdWN0KGluZGV4KX0+RWRpdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiB0cnVlLCBzaG93UHJvZHVjdDogZmFsc2UgfSl9PkRlbGV0ZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QoaW5kZXgpfT5EZWxldGU8L05hdi5MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5faWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnByb2R1Y3RfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2NhdGVnb3J5LnZhbHVlICsgJyA9PiAnICsgZWxlbWVudC5wcm9kdWN0X3N1Yl9jYXRlZ29yeS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3RhZ3MgJiYgZWxlbWVudC5wcm9kdWN0X3RhZ3MubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCUgMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q29uZmlybURlbGV0ZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93Q29uZmlybURlbGV0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIF9pZD17dGhpcy5zdGF0ZS5kYXRhLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybURlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGVQcm9kdWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dUb2FzdH1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdWNjZXNzJ31cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXsnUHJvZHVjdCBEZWxldGVkIFN1Y2Nlc3NmdWxseS4nfVxyXG4gICAgICAgICAgICAgICAgICAgIGljb25OYW1lPXtmYVRodW1ic1VwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiMwMGIzMDBcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN3aXRjaCh0aGlzLnN0YXRlLnNob3dQcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgVmlld1Byb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbaW1nUHJldmlldywgc2V0SW1nUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2ltZ0RhdGEsIHNldEltZ0RhdGFdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgbGVuID0gcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZJbWFnZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4IC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dEltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IChsZW4gLSAxKSkge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRpdGxlUm93IGljb249e2ZhUGx1c30gdGl0bGU9e2AgVmVuZG9yIERhc2hib2FyZCAvIEFsbCBQcm9kdWN0cyAvICR7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9YH0gLz5cclxuICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXt7IG1hcmdpbjogJyAwJSAyJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gY2xhc3NOYW1lPVwibXItYXV0b1wiIG9uQ2xpY2s9e3Byb3BzLmJhY2t9PkJhY2s8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT4ge3Byb3BzLmRhdGEucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gb25DbGljaz17cHJvcHMuZWRpdH0+IEVkaXQgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZX0+IERlbGV0ZSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0dlbmVyYWwgSW5mbyd9PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IE5hbWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkJyYW5kIE5hbWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X2JyYW5kX25hbWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlNLVTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnNrdX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QcmljZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X3ByaWNlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgSW4gU3RvY2s6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9pbl9zdG9ja30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XYXJyYW50eSAobW9udGgpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF93YXJyYW50eX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+V2FycmFudHkgVHlwZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLndhcnJhbnR5X3R5cGV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRpc2NvdW50ICglKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfZGlzY291bnR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QdXJjaGFzZSBOb3RlKHMpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHVyY2hhc2Vfbm90ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRlc2NyaXB0aW9uOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3c9XCI1XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbn0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAge3Byb3BzLmlzVmFyaWFibGVQcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBWYXJpYXRpb25zJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF92YXJpYXRpb25zICYmIHByb3BzLmRhdGEucHJvZHVjdF92YXJpYXRpb25zLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QcmljZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2VsZW1lbnQucHJpY2V9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlN0b2NrPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZWxlbWVudC5zdG9ja30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuaXRlbSAmJiBlbGVtZW50Lml0ZW0ubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2UubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZS52YWx1ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmN1c3RvbV9maWVsZHMgJiYgZWxlbWVudC5jdXN0b21fZmllbGRzLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlLm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2UudmFsdWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2VsZW1lbnQuaW1hZ2VfbGluayAmJiBlbGVtZW50LmltYWdlX2xpbmsubWFwKChpbWcsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMTAwcHgnLCBtYXhXaWR0aDogJzEwMHB4JyB9fSBzcmM9e2BodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9ICR7aW1nLnZhbHVlfWB9IGFsdD1cIlByb2R1Y3QgSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0SW5kZXgoaSksIHNldEltZ0RhdGEoZS5pbWdfbGluaykgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0N1c3RvbSBGaWVsZHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEuY3VzdG9tX2ZpZWxkcyAmJiBwcm9wcy5kYXRhLmN1c3RvbV9maWVsZHMubWFwKGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXsyfSBzbT17NH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtlbGVtZW50LnZhbHVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgSW1hZ2VzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluayAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyBtaW5XaWR0aDogJzIwMHB4JywgbWF4V2lkdGg6ICcyMDBweCcgfX0gc3JjPXtgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPSR7ZWxlbWVudC52YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgSW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldEluZGV4KGluZGV4KSwgc2V0SW1nRGF0YShwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluaykgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1NoaXBwaW5nIERldGFpbHMnfT5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+TGVuZ3RoIChjbSk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5kaW1lbnNpb25fbGVuZ3RofSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XaWR0aCAoY20pOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuZGltZW5zaW9uX3dpZHRofSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5IZWlnaHQgKGNtKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLmRpbWVuc2lvbl9oZWlnaHR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XZWlnaHQgKGtnKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3Rfd2VpZ2h0fSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5TaGlwcGluZyBDaGFyZ2VzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuc2hpcHBpbmdfY2hhcmdlc30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+SGFuZGxpbmsgRmVlOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuaGFuZGxpbmdfZmVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBDYXRlZ29yaWVzJ30+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17eyBmb250U2llOiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Qcm9kdWN0IENhdGVnb3JpZXM6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfY2F0ZWdvcnkudmFsdWUgKyAnID0+ICcgKyBwcm9wcy5kYXRhLnByb2R1Y3Rfc3ViX2NhdGVnb3J5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwID5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3sgZm9udFNpZTogJzEzcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UHJvZHVjdCBUYWdzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF90YWdzICYmIHByb3BzLmRhdGEucHJvZHVjdF90YWdzLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC52YWx1ZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC8gRm9ybS5Hcm91cCA+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaWU6ICcxM3B4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PkRhbmdlcm91cyBHb29kczo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmRhbmdlcm91c19nb29kcyAmJiBwcm9wcy5kYXRhLmRhbmdlcm91c19nb29kcy5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQudmFsdWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uID5cclxuXHJcbiAgICAgICAgICAgIHsvKiBJbWFnZSBQcmV2aWV3ICovfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWdQcmV2aWV3ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJtci1hdXRvXCIgaWNvbj17ZmFDaGV2cm9uTGVmdH0gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJldkltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbWdQcmV2aWV3KGZhbHNlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nRGF0YVtpbmRleF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzkwdmgnLCBtYXJnaW46ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZS1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyJSdcclxuICAgIH0sXHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsIHBhZGRpbmc6ICcwJSdcclxuICAgIH0sXHJcbiAgICBpbWdfcHJldmlld19mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIGdlbmVyYWxfaW5mb19sYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5J1xyXG4gICAgfSxcclxuICAgIGZpZWxkX2xhYmVsOiB7XHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luOiAnMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogJzJweCA1cHgnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxQcm9kdWN0cztcclxuXHJcblxyXG5mdW5jdGlvbiBDb25maXJtRGVsZXRlTW9kYWwocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtbW9kYWxcIlxyXG4gICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZjMzMzMnLCBib3JkZXJSYWRpdXM6ICc1cHgnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbiBzdHlsZT17eyBjb2xvcjogJyNmZjMzMzMnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2ZmMzMzMycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNofSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjMzMzMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImFsZXJ0LW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnRGVsZXRlIFByb2R1Y3QgPyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHkgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcsIHBhZGRpbmc6ICcwJScsIG1hcmdpbjogJzAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BQcm9kdWN0IE5hbWU6ICR7cHJvcHMucHJvZHVjdF9uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgUHJvZHVjdCBJRDogJHtwcm9wcy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD0nb3V0bGluZS1kYW5nZXInIGNsYXNzTmFtZT0nbXItYXV0bycgb25DbGljaz17cHJvcHMuY29uZmlybURlbGV0ZX0+Q29uZmlybTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD0nb3V0bGluZS1wcmltYXJ5JyBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNhbmNlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuLy8gY29uc3QgY29sb3VyT3B0aW9ucyA9IFt7IGxhYmVsOiAnMTExJywgdmFsdWU6ICcxMTEnIH1dXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGxQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgICBoYW5kbGVDaGFuZ2UgPSAobmV3VmFsdWUpID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUgQ2hhbmdlZCcsIG5ld1ZhbHVlKTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuLy8gICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuLy8gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbG91ck9wdGlvbnN9XHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products.js */"));
};

var styles = (_styles = {
  label: {
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize)
  },
  nav_link: {
    paddingLeft: '10px',
    paddingRight: '5px'
  }
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles, "label", {
  fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize),
  color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color),
  marginRight: '2%'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles, "row", {
  margin: '2%',
  padding: '0%'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles, "img_preview_fontawesome", {
  cursor: 'pointer',
  color: 'white',
  fontWeight: 'lighter',
  width: '30px',
  height: '30px',
  maxHeight: '30px',
  maxWidth: '30px'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles, "fontawesome", {
  color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color),
  marginRight: '10%',
  width: '17px',
  height: '17px',
  maxHeight: '17px',
  maxWidth: '17px'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles, "general_info_label", {
  fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize),
  width: '100%',
  borderBottom: '1px solid gray'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles, "field_label", {
  border: "1px solid ".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].body_color),
  color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color),
  margin: '0%',
  width: '100%',
  padding: '2px 5px'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles, "card", {
  width: '100%',
  border: '1px solid lightgray'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles, "card_header", {
  alignItems: 'center',
  fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].card_header_fontsize),
  background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].card_header_background)
}), _styles);
/* harmony default export */ __webpack_exports__["default"] = (AllProducts);

function ConfirmDeleteModal(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    size: "md",
    "aria-labelledby": "alert-modal",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      border: '1px solid #ff3333',
      borderRadius: '5px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Header, {
    closeButton: true,
    style: {
      color: '#ff3333',
      borderBottom: '1px solid #ff3333'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faTrash"],
    style: {
      color: '#ff3333',
      marginRight: '10px',
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Title, {
    id: "alert-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 21
    }
  }, 'Delete Product ?')), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: {
      fontSize: '14px',
      padding: '0%',
      margin: '0%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 21
    }
  }, "Product Name: ".concat(props.product_name), "Product ID: ".concat(props._id))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    size: "sm",
    variant: "outline-danger",
    className: "mr-auto",
    onClick: props.confirmDelete,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 21
    }
  }, "Confirm"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    size: "sm",
    variant: "outline-primary",
    onClick: props.onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 21
    }
  }, "Cancel"))));
} // import React, { Component } from 'react';
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
//# sourceMappingURL=vendor.js.7733a246686d04f296a5.hot-update.js.map