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
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 29
            }
          }, __jsx("tr", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
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
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 37
            }
          }, "#"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 37
            }
          }, "Name"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 37
            }
          }, "Product ID"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 37
            }
          }, "Product Type"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 37
            }
          }, "SKU"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 37
            }
          }, "Stock"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 37
            }
          }, "Price"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 37
            }
          }, "Categories"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 37
            }
          }, "Tags"), __jsx("th", {
            style: {
              textAlign: 'center'
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 37
            }
          }, "Date"))), __jsx("tbody", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }
          }, this.state.productsArray && this.state.productsArray.map(function (element, index) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, _this2.isVariableProduct(element) ? __jsx("tr", {
              key: index,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 45
              }
            }, __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 49
              }
            }, index + 1), __jsx("td", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]) + " " + "td",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 49
              }
            }, element.product_name, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]) + " " + "mr-auto",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190,
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
                lineNumber: 191,
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
                lineNumber: 192,
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
                lineNumber: 193,
                columnNumber: 53
              }
            }, "Delete")), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 49
              }
            }, element._id), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 49
              }
            }, element.product_type), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 49
              }
            }, element.sku ? element.sku : '-'), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 49
              }
            }, element.product_variations.map(function (e) {
              return e.stock + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 49
              }
            }, element.product_variations.map(function (e) {
              return e.price + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 49
              }
            }, element.product_category.value + ' => ' + element.product_sub_category.value), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 49
              }
            }, element.product_tags && element.product_tags.map(function (e) {
              return e.value + ',';
            })), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 49
              }
            }, element.product_entry_date)) : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("tr", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 49
              }
            }, __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 53
              }
            }, index + 1), __jsx("td", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]) + " " + "td",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 53
              }
            }, element.product_name, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]) + " " + "mr-auto",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 228,
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
                lineNumber: 229,
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
                lineNumber: 230,
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
                lineNumber: 231,
                columnNumber: 57
              }
            }, "Delete")), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 53
              }
            }, element._id), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 53
              }
            }, element.product_type), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 53
              }
            }, element.sku ? element.sku : '-'), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 53
              }
            }, element.product_in_stock), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 53
              }
            }, element.product_price), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 53
              }
            }, element.product_category.value + ' => ' + element.product_sub_category.value), __jsx("td", {
              align: "center",
              style: styles.label,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
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
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["2620728974", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize]]]),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 53
              }
            }, element.product_entry_date))));
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
            id: "2620728974",
            dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize],
            __self: this
          }, ".td.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, ";}td.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:").concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1F5QixBQUcwQyxBQU1NLDBFQUxBLG1CQU1vQix1Q0FDM0MsV0FOdUIsNkZBQ29CLHVDQUMzQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWxsLXByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBNb2RhbCwgVGFibGUsIEJ1dHRvbiwgTmF2LCBDb2wsIEltYWdlLCBDYXJkLCBGb3JtLCBJbnB1dEdyb3VwLCBBY2NvcmRpb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnXHJcbi8vIGltcG9ydCBWaWV3UHJvZHVjdCBmcm9tICcuL2FsbC1wcm9kdWN0cy1jb250ZW50cy92aWV3LXByb2R1Y3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVBsdXMsIGZhQXJyb3dMZWZ0LCBmYVRpbWVzLCBmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCwgZmFTbGlkZXJzSCwgZmFUcmFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhVGh1bWJzVXAsIGZhVGh1bWJzRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFBcnJvd0FsdENpcmNsZUxlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBDYXJkQWNjb3JkaW9uIGZyb20gJy4uLy4uLy4uLy4uL2NhcmRfYWNjb3JkaW9uJztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0J1xyXG5pbXBvcnQgVGl0bGVSb3cgZnJvbSAnLi4vLi4vLi4vLi4vdGl0bGUtcm93JztcclxuaW1wb3J0IEFkZE5ldyBmcm9tICcuL2FkZC1uZXcnXHJcbmltcG9ydCBBbGVydE1vZGFsIGZyb20gJy4uLy4uLy4uLy4uL2FsZXJ0LW1vZGFsJ1xyXG5cclxuY2xhc3MgQWxsUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb2FzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBzaG93UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy8nXHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbXBvbmVudCA9IHRoaXNcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogYXdhaXQgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSgpIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YTonLCByZXNwb25zZS5kYXRhLmRhdGEpXHJcbiAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBwcm9kdWN0c0FycmF5OiByZXNwb25zZS5kYXRhLmRhdGEgfSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoJ0RhdGEgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUVkaXRQcm9kdWN0KGluZGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VkaXQgY2FsbGVkJylcclxuICAgICAgICBsZXQgZWxlbWVudCA9IFtdXHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLnN0YXRlLmRhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5W2luZGV4XVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5wcm9kdWN0X3R5cGUgIT0gJ3NpbXBsZS1wcm9kdWN0Jykge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHZhcmlhdGlvbnMgPSBlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9uc1xyXG4gICAgICAgICAgICB2YXJpYXRpb25zLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IGVsZW1lbnQuaXRlbSwgcHJpY2U6IGVsZW1lbnQucHJpY2UsIHN0b2NrOiBlbGVtZW50LnN0b2NrLCBpbWFnZV9saW5rOiBlbGVtZW50LmltYWdlX2xpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VfZXJyb3I6ICcnLCBzdG9ja19lcnJvcjogJycsIGltYWdlX2xpbmtfZXJyb3I6ICcnLCBjdXN0b21fZmllbGRzOiBlbGVtZW50LmN1c3RvbV9maWVsZHNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zID0gYXJyYXlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9ucyA9IFtdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZWxlbWVudCwgc2hvd1Byb2R1Y3Q6ICdlZGl0JyB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVEZWxldGVQcm9kdWN0KCkge1xyXG4gICAgICAgIGNvbnN0IF9pZCA9IHRoaXMuc3RhdGUuZGF0YS5faWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Z1Y2sgZnVjaycsIF9pZClcclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyBgL2FwaS9wcm9kdWN0cy8ke19pZH1gO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiBmYWxzZSB9KVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzXHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZSh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgY3VycmVudENvbXBvbmVudC5zdGF0ZS5wcm9kdWN0c0FycmF5KVxyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBjb3B5QXJyYXlcclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ll9pZCA9PSBfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHByb2R1Y3RzQXJyYXk6IGFycmF5LCBzaG93VG9hc3Q6IHRydWUgfSlcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvciBNZXNzYWdlOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYXJpYWJsZVByb2R1Y3QoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnByb2R1Y3RfdHlwZSAhPSBcInNpbXBsZS1wcm9kdWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3dpdGNoKHBhcmFtKSB7XHJcbiAgICAgICAgc3dpdGNoIChwYXJhbSkge1xyXG4gICAgICAgICAgICBjYXNlICd2aWV3JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Vmlld1Byb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dQcm9kdWN0OiBmYWxzZSwgZGF0YToge30gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3R5cGUgIT0gXCJzaW1wbGUtcHJvZHVjdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtRGVsZXRlTW9kYWw6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdD17KCkgPT4gdGhpcy5oYW5kbGVFZGl0UHJvZHVjdCgtMSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBZGROZXdcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1ZlbmRvciBEYXNoYm9hcmQgLyBBbGwgUHJvZHVjdHMgLyBVcGRhdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVXBkYXRlUHJvZHVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBfaWQ9e3RoaXMuc3RhdGUuZGF0YS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3R5cGUgIT0gJ3NpbXBsZS1wcm9kdWN0J31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dQcm9kdWN0OiBmYWxzZSwgZGF0YToge30gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dQcm9kdWN0OiAndmlldycgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogdHJ1ZSwgc2hvd1Byb2R1Y3Q6IGZhbHNlIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllcz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFN1YkNhdGVnb3JpZXM9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3N1Yl9jYXRlZ29yeX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRhZ3M9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgd2FycmFudHlUeXBlPXt0aGlzLnN0YXRlLmRhdGEud2FycmFudHlfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdmFyaWF0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNHb29kc0FycmF5PXt0aGlzLnN0YXRlLmRhdGEuZGFuZ2Vyb3VzX2dvb2RzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlPXsndmFyaWFibGUtcHJvZHVjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNrdT17dGhpcy5zdGF0ZS5kYXRhLnNrdX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9pbl9zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2JyYW5kX25hbWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHk9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3dhcnJhbnR5fVxyXG4gICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGU9e3RoaXMuc3RhdGUuZGF0YS53YXJyYW50eV90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnQ9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGU9e3RoaXMuc3RhdGUuZGF0YS5wdXJjaGFzZV9ub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF93ZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aD17dGhpcy5zdGF0ZS5kYXRhLmRpbWVuc2lvbl9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoPXt0aGlzLnN0YXRlLmRhdGEuZGltZW5zaW9uX3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHQ9e3RoaXMuc3RhdGUuZGF0YS5kaW1lbnNpb25faGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXM9e3RoaXMuc3RhdGUuZGF0YS5zaGlwcGluZ19jaGFyZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZT17dGhpcy5zdGF0ZS5kYXRhLmhhbmRsaW5nX2ZlZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVJvdyBpY29uPXtmYVBsdXN9IHRpdGxlPXsnIFZlbmRvciBEYXNoYm9hcmQgLyBBbGwgUHJvZHVjdHMnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IG1hcmdpbjogJzIlJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNpdmUgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByb2R1Y3QgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Qcm9kdWN0IFR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TS1U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q2F0ZWdvcmllczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlRhZ3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5ICYmIHRoaXMuc3RhdGUucHJvZHVjdHNBcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaXNWYXJpYWJsZVByb2R1Y3QoZWxlbWVudCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PjxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0YTogZWxlbWVudCwgc2hvd1Byb2R1Y3Q6ICd2aWV3JyB9KX0+IFZpZXcgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUVkaXRQcm9kdWN0KGluZGV4KX0+RWRpdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGVsZW1lbnQsIHNob3dDb25maXJtRGVsZXRlTW9kYWw6IHRydWUsIHNob3dQcm9kdWN0OiBmYWxzZSB9KX0+RGVsZXRlPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnByb2R1Y3RfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5za3UgPyBlbGVtZW50LnNrdSA6ICctJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdmFyaWF0aW9ucy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvY2sgKyAnLCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmljZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2NhdGVnb3J5LnZhbHVlICsgJyA9PiAnICsgZWxlbWVudC5wcm9kdWN0X3N1Yl9jYXRlZ29yeS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3RhZ3MgJiYgZWxlbWVudC5wcm9kdWN0X3RhZ3MubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfZW50cnlfZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGVsZW1lbnQsIHNob3dQcm9kdWN0OiAndmlldycgfSl9PlZpZXc8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUVkaXRQcm9kdWN0KGluZGV4KX0+RWRpdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiB0cnVlLCBzaG93UHJvZHVjdDogZmFsc2UgfSl9PkRlbGV0ZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3QoaW5kZXgpfT5EZWxldGU8L05hdi5MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5faWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnByb2R1Y3RfdHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQuc2t1ID8gZWxlbWVudC5za3UgOiAnLSd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2NhdGVnb3J5LnZhbHVlICsgJyA9PiAnICsgZWxlbWVudC5wcm9kdWN0X3N1Yl9jYXRlZ29yeS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3RhZ3MgJiYgZWxlbWVudC5wcm9kdWN0X3RhZ3MubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENvbmZpcm1EZWxldGVNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtRGVsZXRlTW9kYWw6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd0NvbmZpcm1EZWxldGVNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBfaWQ9e3RoaXMuc3RhdGUuZGF0YS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1EZWxldGU9e3RoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dUb2FzdDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93VG9hc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3VjY2Vzcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17J1Byb2R1Y3QgRGVsZXRlZCBTdWNjZXNzZnVsbHkuJ31cclxuICAgICAgICAgICAgICAgICAgICBpY29uTmFtZT17ZmFUaHVtYnNVcH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCIjMDBiMzAwXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTd2l0Y2godGhpcy5zdGF0ZS5zaG93UHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IFZpZXdQcm9kdWN0ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgW2ltZ1ByZXZpZXcsIHNldEltZ1ByZXZpZXddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtpbWdEYXRhLCBzZXRJbWdEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IGxlbiA9IHByb3BzLmRhdGEucHJvZHVjdF9pbWFnZV9saW5rLmxlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBwcmV2SW1hZ2UoKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCAtIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5leHRJbWFnZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAobGVuIC0gMSkpIHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXggKyAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUaXRsZVJvdyBpY29uPXtmYVBsdXN9IHRpdGxlPXtgIFZlbmRvciBEYXNoYm9hcmQgLyBBbGwgUHJvZHVjdHMgLyAke3Byb3BzLmRhdGEucHJvZHVjdF9uYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDxGb3JtLlJvdyBzdHlsZT17eyBtYXJnaW46ICcgMCUgMiUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19ID5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBvbkNsaWNrPXtwcm9wcy5iYWNrfT5CYWNrPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0+IHtwcm9wcy5kYXRhLnByb2R1Y3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9e3Byb3BzLmVkaXR9PiBFZGl0IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXtwcm9wcy5kZWxldGV9PiBEZWxldGUgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydHZW5lcmFsIEluZm8nfT5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBOYW1lOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9uYW1lfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5CcmFuZCBOYW1lOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9icmFuZF9uYW1lfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5TS1U6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5za3V9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNWYXJpYWJsZVByb2R1Y3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJpY2U6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9wcmljZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IEluIFN0b2NrOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfaW5fc3RvY2t9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+V2FycmFudHkgKG1vbnRoKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3Rfd2FycmFudHl9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PldhcnJhbnR5IFR5cGU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS53YXJyYW50eV90eXBlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5EaXNjb3VudCAoJSk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X2Rpc2NvdW50fSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHVyY2hhc2UgTm90ZShzKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnB1cmNoYXNlX25vdGV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5EZXNjcmlwdGlvbjo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInRleHRhcmVhXCIgcm93PVwiNVwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfZGVzY3JpcHRpb259IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuXHJcbiAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgVmFyaWF0aW9ucyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfdmFyaWF0aW9ucyAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfdmFyaWF0aW9ucy5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXsyfSBzbT17NH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJpY2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtlbGVtZW50LnByaWNlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5TdG9jazwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2VsZW1lbnQuc3RvY2t9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lml0ZW0gJiYgZWxlbWVudC5pdGVtLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlLm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2UudmFsdWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5jdXN0b21fZmllbGRzICYmIGVsZW1lbnQuY3VzdG9tX2ZpZWxkcy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXsyfSBzbT17NH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZS5uYW1lfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtlLnZhbHVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtlbGVtZW50LmltYWdlX2xpbmsgJiYgZWxlbWVudC5pbWFnZV9saW5rLm1hcCgoaW1nLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyBtaW5XaWR0aDogJzEwMHB4JywgbWF4V2lkdGg6ICcxMDBweCcgfX0gc3JjPXtgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPSAke2ltZy52YWx1ZX1gfSBhbHQ9XCJQcm9kdWN0IEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldEluZGV4KGkpLCBzZXRJbWdEYXRhKGUuaW1nX2xpbmspIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydDdXN0b20gRmllbGRzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmN1c3RvbV9maWVsZHMgJiYgcHJvcHMuZGF0YS5jdXN0b21fZmllbGRzLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50Lm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZWxlbWVudC52YWx1ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydQcm9kdWN0IEltYWdlcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsgJiYgcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubWFwKChlbGVtZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSB0aHVtYm5haWwgZmx1aWQgc3R5bGU9e3sgbWluV2lkdGg6ICcyMDBweCcsIG1heFdpZHRoOiAnMjAwcHgnIH19IHNyYz17YGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0ke2VsZW1lbnQudmFsdWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9kdWN0IEltYWdlXCIgb25DbGljaz17KCkgPT4geyBzZXRJbWdQcmV2aWV3KHRydWUpLCBzZXRJbmRleChpbmRleCksIHNldEltZ0RhdGEocHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmspIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydTaGlwcGluZyBEZXRhaWxzJ30+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9Pkxlbmd0aCAoY20pOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuZGltZW5zaW9uX2xlbmd0aH0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+V2lkdGggKGNtKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLmRpbWVuc2lvbl93aWR0aH0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+SGVpZ2h0IChjbSk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5kaW1lbnNpb25faGVpZ2h0fSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+V2VpZ2h0IChrZyk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X3dlaWdodH0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U2hpcHBpbmcgQ2hhcmdlczo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnNoaXBwaW5nX2NoYXJnZXN9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkhhbmRsaW5rIEZlZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLmhhbmRsaW5nX2ZlZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgQ2F0ZWdvcmllcyd9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3sgZm9udFNpZTogJzEzcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UHJvZHVjdCBDYXRlZ29yaWVzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5wcm9kdWN0X2NhdGVnb3J5LnZhbHVlICsgJyA9PiAnICsgcHJvcHMuZGF0YS5wcm9kdWN0X3N1Yl9jYXRlZ29yeS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cCA+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaWU6ICcxM3B4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PlByb2R1Y3QgVGFnczo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfdGFncyAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfdGFncy5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQudmFsdWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgIDwvIEZvcm0uR3JvdXAgPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17eyBmb250U2llOiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5EYW5nZXJvdXMgR29vZHM6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5kYW5nZXJvdXNfZ29vZHMgJiYgcHJvcHMuZGF0YS5kYW5nZXJvdXNfZ29vZHMubWFwKGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnZhbHVlfTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbiA+XHJcblxyXG4gICAgICAgICAgICB7LyogSW1hZ2UgUHJldmlldyAqL31cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1nUHJldmlldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvbkxlZnR9IHN0eWxlPXtzdHlsZXMuaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByZXZJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBpY29uPXtmYUNoZXZyb25SaWdodH0gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bmV4dEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW1nUHJldmlldyhmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ0RhdGFbaW5kZXhdLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICc5MHZoJywgbWFyZ2luOiAnYXV0bycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgLm1vZGFsLW92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjEsIDIxLCAyMSwgMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMi41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2UtbW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YFxyXG4gICAgfSxcclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc1cHgnLFxyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMiUnXHJcbiAgICB9LFxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLCBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgaW1nX3ByZXZpZXdfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXHJcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTdweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTdweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTdweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxN3B4JyxcclxuICAgIH0sXHJcbiAgICBnZW5lcmFsX2luZm9fbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheSdcclxuICAgIH0sXHJcbiAgICBmaWVsZF9sYWJlbDoge1xyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0dsb2JhbFN0eWxlU2hlZXQuYm9keV9jb2xvcn1gLFxyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpbjogJzAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcycHggNXB4J1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknXHJcbiAgICB9LFxyXG4gICAgY2FyZF9oZWFkZXI6IHtcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9mb250c2l6ZX1gLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQuY2FyZF9oZWFkZXJfYmFja2dyb3VuZH1gLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsUHJvZHVjdHM7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29uZmlybURlbGV0ZU1vZGFsKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFsZXJ0LW1vZGFsXCJcclxuICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmYzMzMzJywgYm9yZGVyUmFkaXVzOiAnNXB4J1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24gc3R5bGU9e3sgY29sb3I6ICcjZmYzMzMzJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNmZjMzMzMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaH0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmYzMzMzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19ID48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJhbGVydC1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7J0RlbGV0ZSBQcm9kdWN0ID8nfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5ID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnLCBwYWRkaW5nOiAnMCUnLCBtYXJnaW46ICcwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgUHJvZHVjdCBOYW1lOiAke3Byb3BzLnByb2R1Y3RfbmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFByb2R1Y3QgSUQ6ICR7cHJvcHMuX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9J291dGxpbmUtZGFuZ2VyJyBjbGFzc05hbWU9J21yLWF1dG8nIG9uQ2xpY2s9e3Byb3BzLmNvbmZpcm1EZWxldGV9PkNvbmZpcm08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9J291dGxpbmUtcHJpbWFyeScgb25DbGljaz17cHJvcHMub25IaWRlfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGltcG9ydCBDcmVhdGFibGVTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2NyZWF0YWJsZSc7XHJcbi8vIGNvbnN0IGNvbG91ck9wdGlvbnMgPSBbeyBsYWJlbDogJzExMScsIHZhbHVlOiAnMTExJyB9XVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxsUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgICAgaGFuZGxlQ2hhbmdlID0gKG5ld1ZhbHVlKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1ZhbHVlIENoYW5nZWQnLCBuZXdWYWx1ZSk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XHJcbi8vICAgICAgICAgICAgICAgICBpc011bHRpXHJcbi8vICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2xvdXJPcHRpb25zfVxyXG4vLyAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products.js */")));
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
          lineNumber: 283,
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
          lineNumber: 290,
          columnNumber: 17
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
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
      lineNumber: 328,
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
      lineNumber: 329,
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
      lineNumber: 330,
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
      lineNumber: 331,
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
      lineNumber: 332,
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
      lineNumber: 333,
      columnNumber: 17
    }
  }, " Delete ")), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'General Info',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
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
      lineNumber: 337,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 25
    }
  }, "Product Name:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
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
      lineNumber: 340,
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
      lineNumber: 343,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 25
    }
  }, "Brand Name:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
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
      lineNumber: 346,
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
      lineNumber: 349,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 25
    }
  }, "SKU:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
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
      lineNumber: 352,
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
      lineNumber: 359,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 33
    }
  }, "Price:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
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
      lineNumber: 362,
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
      lineNumber: 365,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 33
    }
  }, "Product In Stock:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
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
      lineNumber: 368,
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
      lineNumber: 375,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 25
    }
  }, "Warranty (month):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
      lineNumber: 378,
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
      lineNumber: 381,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 25
    }
  }, "Warranty Type:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
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
      lineNumber: 384,
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
      lineNumber: 387,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 25
    }
  }, "Discount (%):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
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
      lineNumber: 390,
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
      lineNumber: 394,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 25
    }
  }, "Purchase Note(s):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
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
      lineNumber: 397,
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
      lineNumber: 401,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 25
    }
  }, "Description:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
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
      lineNumber: 404,
      columnNumber: 29
    }
  }))))), props.isVariableProduct ? __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Product Variations',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 17
    }
  }, props.data.product_variations && props.data.product_variations.map(function (element) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
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
        lineNumber: 415,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 37
      }
    }, "Price"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
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
        lineNumber: 418,
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
        lineNumber: 421,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 37
      }
    }, "Stock"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
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
        lineNumber: 424,
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
          lineNumber: 429,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        style: styles.label,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 45
        }
      }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
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
          lineNumber: 432,
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
          lineNumber: 439,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        style: styles.label,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 45
        }
      }, e.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
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
          lineNumber: 442,
          columnNumber: 49
        }
      }))));
    })), __jsx("hr", {
      className: "jsx-1902595393",
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 29
      }
    }));
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Custom Fields',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 21
    }
  }, props.data.custom_fields && props.data.custom_fields.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
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
        lineNumber: 463,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 37
      }
    }, element.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
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
        lineNumber: 466,
        columnNumber: 41
      }
    }))));
  })), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Product Images',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
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
        lineNumber: 474,
        columnNumber: 29
      }
    });
  }))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Shipping Details',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
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
      lineNumber: 482,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, "Length (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
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
      lineNumber: 485,
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
      lineNumber: 488,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 25
    }
  }, "Width (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
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
      lineNumber: 491,
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
      lineNumber: 494,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 25
    }
  }, "Height (cm):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
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
      lineNumber: 497,
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
      lineNumber: 501,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 25
    }
  }, "Weight (kg):"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
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
      lineNumber: 504,
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
      lineNumber: 507,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 25
    }
  }, "Shipping Charges:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
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
      lineNumber: 510,
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
      lineNumber: 513,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 25
    }
  }, "Handlink Fee:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
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
      lineNumber: 516,
      columnNumber: 29
    }
  }))))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: 'Product Categories',
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
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
      lineNumber: 523,
      columnNumber: 21
    }
  }, "Product Categories:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
    style: styles.label,
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 25
    }
  }, props.data.product_category.value + ' => ' + props.data.product_sub_category.value))), __jsx("hr", {
    className: "jsx-1902595393",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
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
      lineNumber: 532,
      columnNumber: 21
    }
  }, "Product Tags:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 21
    }
  }, props.data.product_tags && props.data.product_tags.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 29
      }
    }, element.value);
  }))), __jsx("hr", {
    className: "jsx-1902595393",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
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
      lineNumber: 541,
      columnNumber: 21
    }
  }, "Dangerous Goods:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 21
    }
  }, props.data.dangerous_goods && props.data.dangerous_goods.map(function (element) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
      style: styles.label,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 29
      }
    }, element.value);
  })))), imgPreview ? __jsx("div", {
    className: "jsx-1902595393" + " " + "modal-overlay",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "modal-body",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "close-modal",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
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
    className: "mr-auto",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faChevronLeft"],
    style: styles.img_preview_fontawesome,
    onClick: function onClick() {
      return prevImage;
    },
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
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
      lineNumber: 560,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-1902595393" + " " + "mr-auto",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
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
      lineNumber: 563,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "jsx-1902595393" + " " + "image-container",
    __self: _this4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
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
      lineNumber: 567,
      columnNumber: 33
    }
  })))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "1902595393",
    __self: _this4
  }, ".modal-overlay.jsx-1902595393{position:fixed;top:0;left:0;bottom:0;right:0;z-index:10;width:100%;height:100%;background:rgba(21,21,21,0.75);}.modal-body.jsx-1902595393{position:relative;z-index:11;margin:2.5%;overflow:hidden;max-width:100%;max-height:100%;}.close-modal.jsx-1902595393{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:10px;left:0;right:0;width:100%;}.image-container.jsx-1902595393{display:grid;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ2tCaUIsQUFHd0MsQUFXRyxBQVFILEFBUUYsYUFDRCxFQTNCTixBQW1CTyxHQVJGLEdBVkosSUE4QlgsR0E3QmEsQ0FVRyxRQVRKLElBVVEsSUFUTCxXQUNBLENBU0ksVUFSSCxLQVNJLE9BUmtCLFNBU3RDLENBSWEsU0FDRixPQUNDLEtBZFosR0FlZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhbGwtcHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIE1vZGFsLCBUYWJsZSwgQnV0dG9uLCBOYXYsIENvbCwgSW1hZ2UsIENhcmQsIEZvcm0sIElucHV0R3JvdXAsIEFjY29yZGlvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvcmUvYXV0aGVudGljYXRpb24tc2VydmljZSdcclxuLy8gaW1wb3J0IFZpZXdQcm9kdWN0IGZyb20gJy4vYWxsLXByb2R1Y3RzLWNvbnRlbnRzL3ZpZXctcHJvZHVjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhVGltZXMsIGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0LCBmYVNsaWRlcnNILCBmYVRyYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFUaHVtYnNVcCwgZmFUaHVtYnNEb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IENhcmRBY2NvcmRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY2FyZF9hY2NvcmRpb24nO1xyXG5pbXBvcnQgTXVoYWxpa0NvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvbXVoYWxpay5jb25maWcnXHJcbmltcG9ydCBHbG9iYWxTdHlsZVNoZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBUaXRsZVJvdyBmcm9tICcuLi8uLi8uLi8uLi90aXRsZS1yb3cnO1xyXG5pbXBvcnQgQWRkTmV3IGZyb20gJy4vYWRkLW5ldydcclxuaW1wb3J0IEFsZXJ0TW9kYWwgZnJvbSAnLi4vLi4vLi4vLi4vYWxlcnQtbW9kYWwnXHJcblxyXG5jbGFzcyBBbGxQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RvYXN0OiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvZHVjdHNBcnJheTogW10sXHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzLydcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gdGhpc1xyXG5cclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIHJlc3BvbnNlLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHByb2R1Y3RzQXJyYXk6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBhbGVydCgnRGF0YSBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZWRpdCBjYWxsZWQnKVxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gW11cclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuc3RhdGUuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXlbaW5kZXhdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LnByb2R1Y3RfdHlwZSAhPSAnc2ltcGxlLXByb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgdmFyaWF0aW9ucyA9IGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zXHJcbiAgICAgICAgICAgIHZhcmlhdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogZWxlbWVudC5pdGVtLCBwcmljZTogZWxlbWVudC5wcmljZSwgc3RvY2s6IGVsZW1lbnQuc3RvY2ssIGltYWdlX2xpbms6IGVsZW1lbnQuaW1hZ2VfbGluayxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZV9lcnJvcjogJycsIHN0b2NrX2Vycm9yOiAnJywgaW1hZ2VfbGlua19lcnJvcjogJycsIGN1c3RvbV9maWVsZHM6IGVsZW1lbnQuY3VzdG9tX2ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMgPSBhcnJheVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zID0gW11cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCBzaG93UHJvZHVjdDogJ2VkaXQnIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZURlbGV0ZVByb2R1Y3QoKSB7XHJcbiAgICAgICAgY29uc3QgX2lkID0gdGhpcy5zdGF0ZS5kYXRhLl9pZDtcclxuICAgICAgICBjb25zb2xlLmxvZygnZnVjayBmdWNrJywgX2lkKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArIGAvYXBpL3Byb2R1Y3RzLyR7X2lkfWA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtRGVsZXRlTW9kYWw6IGZhbHNlIH0pXHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbXBvbmVudCA9IHRoaXNcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogYXdhaXQgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSgpIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCBjdXJyZW50Q29tcG9uZW50LnN0YXRlLnByb2R1Y3RzQXJyYXkpXHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IGNvcHlBcnJheVxyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuX2lkID09IF9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgcHJvZHVjdHNBcnJheTogYXJyYXksIHNob3dUb2FzdDogdHJ1ZSB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yIE1lc3NhZ2U6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhcmlhYmxlUHJvZHVjdChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucHJvZHVjdF90eXBlICE9IFwic2ltcGxlLXByb2R1Y3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTd2l0Y2gocGFyYW0pIHtcclxuICAgICAgICBzd2l0Y2ggKHBhcmFtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3ZpZXcnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxWaWV3UHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBiYWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1Byb2R1Y3Q6IGZhbHNlLCBkYXRhOiB7fSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdD17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdHlwZSAhPSBcInNpbXBsZS1wcm9kdWN0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBlZGl0PXsoKSA9PiB0aGlzLmhhbmRsZUVkaXRQcm9kdWN0KC0xKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZWRpdCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEFkZE5ld1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnVmVuZG9yIERhc2hib2FyZCAvIEFsbCBQcm9kdWN0cyAvIFVwZGF0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNVcGRhdGVQcm9kdWN0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIF9pZD17dGhpcy5zdGF0ZS5kYXRhLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdD17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdHlwZSAhPSAnc2ltcGxlLXByb2R1Y3QnfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1Byb2R1Y3Q6IGZhbHNlLCBkYXRhOiB7fSB9KX1cclxuICAgICAgICAgICAgICAgICAgICB2aWV3PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1Byb2R1Y3Q6ICd2aWV3JyB9KX1cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiB0cnVlLCBzaG93UHJvZHVjdDogZmFsc2UgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yaWVzPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U3ViQ2F0ZWdvcmllcz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3Rfc3ViX2NhdGVnb3J5fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGFncz17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfdGFnc31cclxuICAgICAgICAgICAgICAgICAgICB3YXJyYW50eVR5cGU9e3RoaXMuc3RhdGUuZGF0YS53YXJyYW50eV90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5PXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF92YXJpYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c0dvb2RzQXJyYXk9e3RoaXMuc3RhdGUuZGF0YS5kYW5nZXJvdXNfZ29vZHN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGU9eyd2YXJpYWJsZS1wcm9kdWN0J31cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2t1PXt0aGlzLnN0YXRlLmRhdGEuc2t1fVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2U9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW5fc3RvY2s9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X2luX3N0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eT17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3Rfd2FycmFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZT17dGhpcy5zdGF0ZS5kYXRhLndhcnJhbnR5X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudD17dGhpcy5zdGF0ZS5kYXRhLnByb2R1Y3RfZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZT17dGhpcy5zdGF0ZS5kYXRhLnB1cmNoYXNlX25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHQ9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X3dlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoPXt0aGlzLnN0YXRlLmRhdGEuZGltZW5zaW9uX2xlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGg9e3RoaXMuc3RhdGUuZGF0YS5kaW1lbnNpb25fd2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodD17dGhpcy5zdGF0ZS5kYXRhLmRpbWVuc2lvbl9oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlcz17dGhpcy5zdGF0ZS5kYXRhLnNoaXBwaW5nX2NoYXJnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlPXt0aGlzLnN0YXRlLmRhdGEuaGFuZGxpbmdfZmVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlUm93IGljb249e2ZhUGx1c30gdGl0bGU9eycgVmVuZG9yIERhc2hib2FyZCAvIEFsbCBQcm9kdWN0cyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgbWFyZ2luOiAnMiUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+UHJvZHVjdCBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlByb2R1Y3QgVHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNLVTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlN0b2NrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5DYXRlZ29yaWVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+VGFnczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2R1Y3RzQXJyYXkgJiYgdGhpcy5zdGF0ZS5wcm9kdWN0c0FycmF5Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5pc1ZhcmlhYmxlUHJvZHVjdChlbGVtZW50KSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+PEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBlbGVtZW50LCBzaG93UHJvZHVjdDogJ3ZpZXcnIH0pfT4gVmlldyA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpfT5FZGl0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0YTogZWxlbWVudCwgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogdHJ1ZSwgc2hvd1Byb2R1Y3Q6IGZhbHNlIH0pfT5EZWxldGU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5faWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQucHJvZHVjdF90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50LnNrdSA/IGVsZW1lbnQuc2t1IDogJy0nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF92YXJpYXRpb25zLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9jayArICcsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3ZhcmlhdGlvbnMubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByaWNlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnkudmFsdWUgKyAnID0+ICcgKyBlbGVtZW50LnByb2R1Y3Rfc3ViX2NhdGVnb3J5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdGFncyAmJiBlbGVtZW50LnByb2R1Y3RfdGFncy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudmFsdWUgKyAnLCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9lbnRyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGF0YTogZWxlbWVudCwgc2hvd1Byb2R1Y3Q6ICd2aWV3JyB9KX0+VmlldzwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRWRpdFByb2R1Y3QoaW5kZXgpfT5FZGl0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3N0eWxlcy5uYXZfbGlua30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGVsZW1lbnQsIHNob3dDb25maXJtRGVsZXRlTW9kYWw6IHRydWUsIHNob3dQcm9kdWN0OiBmYWxzZSB9KX0+RGVsZXRlPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdi5MaW5rIHN0eWxlPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdChpbmRleCl9PkRlbGV0ZTwvTmF2Lkxpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlbGVtZW50Ll9pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQucHJvZHVjdF90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC5za3UgPyBlbGVtZW50LnNrdSA6ICctJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucHJvZHVjdF9pbl9zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnkudmFsdWUgKyAnID0+ICcgKyBlbGVtZW50LnByb2R1Y3Rfc3ViX2NhdGVnb3J5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnByb2R1Y3RfdGFncyAmJiBlbGVtZW50LnByb2R1Y3RfdGFncy5tYXAoZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnZhbHVlICsgJywnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5wcm9kdWN0X2VudHJ5X2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q29uZmlybURlbGV0ZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93Q29uZmlybURlbGV0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIF9pZD17dGhpcy5zdGF0ZS5kYXRhLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU9e3RoaXMuc3RhdGUuZGF0YS5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybURlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGVQcm9kdWN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dUb2FzdH1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdWNjZXNzJ31cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXsnUHJvZHVjdCBEZWxldGVkIFN1Y2Nlc3NmdWxseS4nfVxyXG4gICAgICAgICAgICAgICAgICAgIGljb25OYW1lPXtmYVRodW1ic1VwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiMwMGIzMDBcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN3aXRjaCh0aGlzLnN0YXRlLnNob3dQcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgVmlld1Byb2R1Y3QgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBbaW1nUHJldmlldywgc2V0SW1nUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2ltZ0RhdGEsIHNldEltZ0RhdGFdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgbGVuID0gcHJvcHMuZGF0YS5wcm9kdWN0X2ltYWdlX2xpbmsubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZJbWFnZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEluZGV4KGluZGV4IC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dEltYWdlKCkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IChsZW4gLSAxKSkge1xyXG4gICAgICAgICAgICBzZXRJbmRleChpbmRleCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRpdGxlUm93IGljb249e2ZhUGx1c30gdGl0bGU9e2AgVmVuZG9yIERhc2hib2FyZCAvIEFsbCBQcm9kdWN0cyAvICR7cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9YH0gLz5cclxuICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXt7IG1hcmdpbjogJyAwJSAyJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gY2xhc3NOYW1lPVwibXItYXV0b1wiIG9uQ2xpY2s9e3Byb3BzLmJhY2t9PkJhY2s8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT4ge3Byb3BzLmRhdGEucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gb25DbGljaz17cHJvcHMuZWRpdH0+IEVkaXQgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZX0+IERlbGV0ZSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0dlbmVyYWwgSW5mbyd9PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IE5hbWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X25hbWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkJyYW5kIE5hbWU6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X2JyYW5kX25hbWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlNLVTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnNrdX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QcmljZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5wcm9kdWN0X3ByaWNlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgSW4gU3RvY2s6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9pbl9zdG9ja30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XYXJyYW50eSAobW9udGgpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF93YXJyYW50eX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+V2FycmFudHkgVHlwZTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLndhcnJhbnR5X3R5cGV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXs0fSBtZD17NH0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRpc2NvdW50ICglKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3RfZGlzY291bnR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QdXJjaGFzZSBOb3RlKHMpOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHVyY2hhc2Vfbm90ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkRlc2NyaXB0aW9uOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3c9XCI1XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbn0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAge3Byb3BzLmlzVmFyaWFibGVQcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBWYXJpYXRpb25zJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF92YXJpYXRpb25zICYmIHByb3BzLmRhdGEucHJvZHVjdF92YXJpYXRpb25zLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5QcmljZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2VsZW1lbnQucHJpY2V9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlN0b2NrPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZWxlbWVudC5zdG9ja30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuaXRlbSAmJiBlbGVtZW50Lml0ZW0ubWFwKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezR9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2UubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17ZS52YWx1ZX0gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmN1c3RvbV9maWVsZHMgJiYgZWxlbWVudC5jdXN0b21fZmllbGRzLm1hcChlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PntlLm5hbWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e2UudmFsdWV9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2VsZW1lbnQuaW1hZ2VfbGluayAmJiBlbGVtZW50LmltYWdlX2xpbmsubWFwKChpbWcsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdGh1bWJuYWlsIGZsdWlkIHN0eWxlPXt7IG1pbldpZHRoOiAnMTAwcHgnLCBtYXhXaWR0aDogJzEwMHB4JyB9fSBzcmM9e2BodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9ICR7aW1nLnZhbHVlfWB9IGFsdD1cIlByb2R1Y3QgSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0SW1nUHJldmlldyh0cnVlKSwgc2V0SW5kZXgoaSksIHNldEltZ0RhdGEoZS5pbWdfbGluaykgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J0N1c3RvbSBGaWVsZHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEuY3VzdG9tX2ZpZWxkcyAmJiBwcm9wcy5kYXRhLmN1c3RvbV9maWVsZHMubWFwKGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezJ9IG1kPXsyfSBzbT17NH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQubmFtZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtlbGVtZW50LnZhbHVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgSW1hZ2VzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluayAmJiBwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluay5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHRodW1ibmFpbCBmbHVpZCBzdHlsZT17eyBtaW5XaWR0aDogJzIwMHB4JywgbWF4V2lkdGg6ICcyMDBweCcgfX0gc3JjPXtgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPSR7ZWxlbWVudC52YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2R1Y3QgSW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiB7IHNldEltZ1ByZXZpZXcodHJ1ZSksIHNldEluZGV4KGluZGV4KSwgc2V0SW1nRGF0YShwcm9wcy5kYXRhLnByb2R1Y3RfaW1hZ2VfbGluaykgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1NoaXBwaW5nIERldGFpbHMnfT5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+TGVuZ3RoIChjbSk6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBzaXplPVwic21cIiB2YWx1ZT17cHJvcHMuZGF0YS5kaW1lbnNpb25fbGVuZ3RofSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XaWR0aCAoY20pOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuZGltZW5zaW9uX3dpZHRofSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5IZWlnaHQgKGNtKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLmRpbWVuc2lvbl9oZWlnaHR9IGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5XZWlnaHQgKGtnKTo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHNpemU9XCJzbVwiIHZhbHVlPXtwcm9wcy5kYXRhLnByb2R1Y3Rfd2VpZ2h0fSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5TaGlwcGluZyBDaGFyZ2VzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuc2hpcHBpbmdfY2hhcmdlc30gZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezR9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+SGFuZGxpbmsgRmVlOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cInNtXCIgdmFsdWU9e3Byb3BzLmRhdGEuaGFuZGxpbmdfZmVlfSBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBDYXRlZ29yaWVzJ30+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17eyBmb250U2llOiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Qcm9kdWN0IENhdGVnb3JpZXM6PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnByb2R1Y3RfY2F0ZWdvcnkudmFsdWUgKyAnID0+ICcgKyBwcm9wcy5kYXRhLnByb2R1Y3Rfc3ViX2NhdGVnb3J5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwID5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3sgZm9udFNpZTogJzEzcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UHJvZHVjdCBUYWdzOjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEucHJvZHVjdF90YWdzICYmIHByb3BzLmRhdGEucHJvZHVjdF90YWdzLm1hcChlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT57ZWxlbWVudC52YWx1ZX08L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC8gRm9ybS5Hcm91cCA+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaWU6ICcxM3B4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PkRhbmdlcm91cyBHb29kczo8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmRhbmdlcm91c19nb29kcyAmJiBwcm9wcy5kYXRhLmRhbmdlcm91c19nb29kcy5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2VsZW1lbnQudmFsdWV9PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uID5cclxuXHJcbiAgICAgICAgICAgIHsvKiBJbWFnZSBQcmV2aWV3ICovfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWdQcmV2aWV3ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJtci1hdXRvXCIgaWNvbj17ZmFDaGV2cm9uTGVmdH0gc3R5bGU9e3N0eWxlcy5pbWdfcHJldmlld19mb250YXdlc29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJldkltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItYXV0b1wiIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0SW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBzdHlsZT17c3R5bGVzLmltZ19wcmV2aWV3X2ZvbnRhd2Vzb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbWdQcmV2aWV3KGZhbHNlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nRGF0YVtpbmRleF0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzkwdmgnLCBtYXJnaW46ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjEsIDIxLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZS1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gXHJcbiAgICB9LFxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyJSdcclxuICAgIH0sXHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsIHBhZGRpbmc6ICcwJSdcclxuICAgIH0sXHJcbiAgICBpbWdfcHJldmlld19mb250YXdlc29tZToge1xyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIGdlbmVyYWxfaW5mb19sYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5J1xyXG4gICAgfSxcclxuICAgIGZpZWxkX2xhYmVsOiB7XHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7R2xvYmFsU3R5bGVTaGVldC5ib2R5X2NvbG9yfWAsXHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luOiAnMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogJzJweCA1cHgnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxQcm9kdWN0cztcclxuXHJcblxyXG5mdW5jdGlvbiBDb25maXJtRGVsZXRlTW9kYWwocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtbW9kYWxcIlxyXG4gICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZjMzMzMnLCBib3JkZXJSYWRpdXM6ICc1cHgnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbiBzdHlsZT17eyBjb2xvcjogJyNmZjMzMzMnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2ZmMzMzMycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNofSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjMzMzMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImFsZXJ0LW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnRGVsZXRlIFByb2R1Y3QgPyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHkgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcsIHBhZGRpbmc6ICcwJScsIG1hcmdpbjogJzAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BQcm9kdWN0IE5hbWU6ICR7cHJvcHMucHJvZHVjdF9uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgUHJvZHVjdCBJRDogJHtwcm9wcy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD0nb3V0bGluZS1kYW5nZXInIGNsYXNzTmFtZT0nbXItYXV0bycgb25DbGljaz17cHJvcHMuY29uZmlybURlbGV0ZX0+Q29uZmlybTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD0nb3V0bGluZS1wcmltYXJ5JyBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNhbmNlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuLy8gY29uc3QgY29sb3VyT3B0aW9ucyA9IFt7IGxhYmVsOiAnMTExJywgdmFsdWU6ICcxMTEnIH1dXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGxQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgICBoYW5kbGVDaGFuZ2UgPSAobmV3VmFsdWUpID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUgQ2hhbmdlZCcsIG5ld1ZhbHVlKTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuLy8gICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuLy8gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbG91ck9wdGlvbnN9XHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\all-products.js */"));
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
      lineNumber: 679,
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
      lineNumber: 685,
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
      lineNumber: 688,
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
      lineNumber: 689,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Title, {
    id: "alert-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 21
    }
  }, 'Delete Product ?')), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
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
      lineNumber: 702,
      columnNumber: 21
    }
  }, "Product Name: ".concat(props.product_name), "Product ID: ".concat(props._id))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
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
      lineNumber: 708,
      columnNumber: 21
    }
  }, "Confirm"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    size: "sm",
    variant: "outline-primary",
    onClick: props.onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
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
//# sourceMappingURL=vendor.js.865d8a6eac21e7456cce.hot-update.js.map