webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../alert-modal */ "./src/pages/components/alert-modal.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var _add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-new-contents/custom-fields */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js");
/* harmony import */ var _add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./add-new-contents/product-data */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/product-data.js");
/* harmony import */ var _sdk_consts_product_size_options__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../sdk/consts/product-size-options */ "./src/sdk/consts/product-size-options.js");
/* harmony import */ var _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../sdk/consts/product-color-options */ "./src/sdk/consts/product-color-options.js");










var _yup$object,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




















 // Option List for select Product Category (when offline)

var product_categories_options = [{
  value: 'Shoe',
  label: 'Shoe'
}, {
  value: 'Cloth',
  label: 'Cloth'
}, {
  value: 'Shirt',
  label: 'Shirt'
}, {
  value: 'Pant',
  label: 'Pant'
}];
var product_sub_categories_options = [{
  value: 'Sub Shoe',
  label: 'Sub Shoe'
}, {
  value: 'Sub Cloth',
  label: 'Sub Cloth'
}, {
  value: 'Sub Shirt',
  label: 'Sub Shirt'
}]; // For React-Select

var components = {
  DropdownIndicator: null
}; // Model For React-Select

var createOption = function createOption(label) {
  return {
    value: label,
    label: label
  };
}; // Yup Schema for validation fields


var schema = yup__WEBPACK_IMPORTED_MODULE_13__["object"]((_yup$object = {
  product_name: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().required("Enter Product Name").min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_description: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(5, "Must have at least 5 characters").max(200, "Can't be longer than 200 characters"),
  // Product Data
  product_type: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  // => Inventory
  sku: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100'),
  // => General(Simple-Product)
  product_price: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000000').max(1000000, 'Enter Between 1-1000000'),
  product_in_stock: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000000').max(1000000, "Can't be longer than 1000000"),
  product_brand_name: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_image_link: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  product_warranty: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000').max(1000, 'Enter Between 0-1000'),
  warranty_type: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  product_discount: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-100').max(100, 'Enter Between 0-100'),
  // => Attributes (Variable Product)
  purchase_note: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  // => Variations (Variable Product)
  product_variations: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  // => Shipping
  product_weight: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_length: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_width: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  dimension_height: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 10000"),
  shipping_charges: yup__WEBPACK_IMPORTED_MODULE_13__["number"]("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, 'Enter Between 0-10000'),
  handling_fee: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 0-10000').max(10000, "Can't be longer than 1000")
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "purchase_note", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "custom_fields", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_category", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_sub_category", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "dangerous_goods", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_tags", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), _yup$object));

var AddNew = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddNew, _Component);

  var _super = _createSuper(AddNew);

  function AddNew(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddNew);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSimpleProductImage_linkKeyDown", function (event, inputValue) {
      var simple_product_image_link = _this.state.simple_product_image_link;
      if (!inputValue) return;

      switch (event.key) {
        case 'Enter':
        case 'Tab':
          _this.setState({
            simple_product_image_link: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(simple_product_image_link), [createOption(inputValue)])
          });

          event.preventDefault();
          return true;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductCategoryChange", function (value) {
      _this.setState({
        productCategories: value,
        subCategoryDisabled: false,
        categoryErrorDiv: 'BorderDiv'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductSubCategoryChange", function (value) {
      _this.setState({
        productSubCategories: value,
        subSubCategoryDisabled: false,
        subCategoryErrorDiv: 'BorderDiv'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDangerousGoodsChange", function (e, name) {
      var copyArray = Object.assign([], _this.state.dangerousGoodsArray);

      if (e.target.checked) {
        copyArray.push({
          value: name
        });
      } else {
        copyArray.forEach(function (element, index) {
          if (element.value == name) {
            copyArray.splice(index, 1);
          }
        });
      }

      _this.setState({
        dangerousGoodsArray: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductTagChange", function (arr) {
      _this.setState({
        productTags: arr
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteImage", function (index) {
      var copyArray = Object.assign([], _this.state.files);
      var imgCopyArray = Object.assign([], _this.state.imagePreviewArray);
      copyArray.splice(index, 1);
      imgCopyArray.splice(index, 1);

      _this.setState({
        files: copyArray,
        imagePreviewArray: imgCopyArray
      });
    });

    _this.state = {
      isUpdateProduct: _this.props.isUpdateProduct,
      _id: _this.props._id,
      isLoading: false,
      showToast: false,
      toastMessage: '',
      showVariationsErrorAlert: false,
      showSimpleProductPriceImgLinkErrorrAlert: false,
      isVariableProduct: _this.props.isVariableProduct,
      productCategories: _this.props.productCategories,
      productSubCategories: _this.props.productSubCategories,
      subCategoryDisabled: true,
      categoryErrorDiv: 'BorderDiv',
      subCategoryErrorDiv: 'BorderDiv',
      productTags: _this.props.productTags,
      warrantyType: _this.props.warrantyType,
      inputValue: '',
      simple_product_image_link: _this.props.simple_product_image_link,
      image_linkError: 'no_error',
      image_linkErrorDiv: 'BorderDiv',
      variationsArray: _this.props.variationsArray,
      isVariationsSaved: false,
      // Custom Fields
      customFieldsArray: [],
      files: [],
      imagePreviewArray: [],
      // Dangerous Goods
      dangerousGoodsArray: _this.props.dangerousGoodsArray
    }; // this.handleProductTypeChange = this.handleProductTypeChange.bind(this);

    return _this;
  } // Getting Product Categories from DB


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddNew, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url, url_1, url_2, token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + '/api/categories/categories';
              url_1 = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + '/api/categories/fields';
              url_2 = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + '/api/categories/tags';
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_25__["getUncodededTokenFromStorage"])());

            case 5:
              token = _context.sent;
              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(url, {
                headers: {
                  'authorization': token
                }
              }).then(function (response) {// console.log('categories:', response.data)
              })["catch"](function (error) {// alert('categories Fetchig Error: ', error)
              }));

            case 8:
              _context.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(url_1, {
                headers: {
                  'authorization': token
                }
              }).then(function (response) {// console.log('fields:', response.data)
              })["catch"](function (error) {// console.log('fuck:', error)
                // alert('fields Fetchig Error: ', error.response.data.message)
              }));

            case 10:
              _context.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(url_2, {
                headers: {
                  'authorization': token
                }
              }).then(function (response) {// console.log('tags:', response.data)
              })["catch"](function (error) {// alert('tags Fetchig Error: ', error)
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "uploadProduct",
    value: function uploadProduct(data, currentComponent) {
      var url, _url;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function uploadProduct$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('da111222333ta: ', data);

              if (!(this.state.isUpdateProduct == false)) {
                _context2.next = 17;
                break;
              }

              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + '/api/products/add';
              _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context2.t1 = axios__WEBPACK_IMPORTED_MODULE_14___default.a;
              _context2.t2 = url;
              _context2.t3 = {
                data: data
              };
              _context2.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_25__["getUncodededTokenFromStorage"])());

            case 9:
              _context2.t4 = _context2.sent;
              _context2.t5 = {
                'authorization': _context2.t4
              };
              _context2.t6 = {
                headers: _context2.t5
              };
              _context2.t7 = _context2.t1.post.call(_context2.t1, _context2.t2, _context2.t3, _context2.t6).then(function (response) {
                currentComponent.setState({
                  isLoading: false
                });
                currentComponent.setState({
                  showToast: true,
                  toastMessage: 'Product Uploaded Successfully'
                });
                return true;
              })["catch"](function (error) {
                console.log('error rooro:', error);
                console.log('error rooro:', error.response);
                currentComponent.setState({
                  isLoading: false
                });
                alert('Product Upload failed');
                return false;
              });
              _context2.next = 15;
              return _context2.t0.awrap.call(_context2.t0, _context2.t7);

            case 15:
              _context2.next = 30;
              break;

            case 17:
              _url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + "/api/products/".concat(this.state._id);
              _context2.t8 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context2.t9 = axios__WEBPACK_IMPORTED_MODULE_14___default.a;
              _context2.t10 = _url;
              _context2.t11 = {
                data: data
              };
              _context2.next = 24;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_25__["getUncodededTokenFromStorage"])());

            case 24:
              _context2.t12 = _context2.sent;
              _context2.t13 = {
                'authorization': _context2.t12
              };
              _context2.t14 = {
                headers: _context2.t13
              };
              _context2.t15 = _context2.t9.put.call(_context2.t9, _context2.t10, _context2.t11, _context2.t14).then(function (response) {
                currentComponent.setState({
                  isLoading: false
                });
                currentComponent.setState({
                  showToast: true,
                  toastMessage: 'Product Updated Successfully'
                });
                return true;
              })["catch"](function (error) {
                currentComponent.setState({
                  isLoading: false
                });
                alert('Product Update failed');
                return false;
              });
              _context2.next = 30;
              return _context2.t8.awrap.call(_context2.t8, _context2.t15);

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    } //  Submit data to api
    // async uploadProduct(data, ) {
    //     if (await this.props.upload(data) == true) {
    //         currentComponent.setState({ isLoading: false });
    //         currentComponent.setState({ showToast: true });
    //         return true;
    //     } else {
    //         currentComponent.setState({ isLoading: false });
    //         alert('Product Upload failed');
    //         return false;
    //     }
    // }
    // handleProductTypeChange(e) {
    // if (e.target.value == 'variable-prouct') {
    //     this.setState({ isVariableProduct: true, customFieldsArray: [] });
    // }
    //     else {
    //         this.setState({ isVariableProduct: false, variationsArray: [] });
    //     }
    // }
    // Product Data
    // => Simple Product Image Link

  }, {
    key: "simpleProductImgLinkChange",
    value: function simpleProductImgLinkChange(value) {
      this.setState({
        simple_product_image_link: value
      });
    }
  }, {
    key: "handleSaveCustomFieldsBtnClick",
    // => End Of Simple Product Image Link
    // Custom Fields
    value: function handleSaveCustomFieldsBtnClick() {
      var _this2 = this;

      if (this.state.isVariableProduct == true) {
        var copyArray = Object.assign([], this.state.variationsArray);
        copyArray.forEach(function (element) {
          _this2.state.customFieldsArray.forEach(function (e) {
            element.customField.push({
              name: e.name,
              value: e.value
            });
          });
        });
        this.setState({
          variationsArray: copyArray,
          customFieldsArray: []
        });
      }
    } // Product Category

  }, {
    key: "fileSelectedHandler",
    value: function fileSelectedHandler(e) {
      var array;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fileSelectedHandler$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                files: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.state.files), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.files))
              }));

            case 2:
              array = [];
              this.state.files.forEach(function (element) {
                array.push(URL.createObjectURL(element));
              });
              this.setState({
                imagePreviewArray: array
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var showCustomFields = false;

      if (this.state.variationsArray == [] && this.state.isVariableProduct == true) {
        showCustomFields = true;
      } else {
        showCustomFields = false;
      }

      return __jsx(formik__WEBPACK_IMPORTED_MODULE_12__["Formik"], {
        validationSchema: schema,
        initialValues: this.props.isUpdateProduct ? {
          product_name: this.props.product_name,
          product_description: this.props.product_description,
          product_type: this.props.product_type,
          sku: this.props.sku,
          product_price: this.props.product_price,
          product_in_stock: this.props.product_in_stock,
          product_brand_name: this.props.product_brand_name,
          // product_image_link:this.props.product_image_link}
          product_warranty: this.props.product_warranty,
          warranty_type: this.props.warranty_type,
          product_discount: this.props.product_discount,
          purchase_note: this.props.purchase_note,
          // product_variations:this.props.product_variations}
          product_weight: this.props.product_weight,
          dimension_length: this.props.dimension_length,
          dimension_width: this.props.dimension_width,
          dimension_height: this.props.dimension_height,
          shipping_charges: this.props.shipping_charges,
          handling_fee: this.props.handling_fee
        } : {
          product_type: 'simple-product'
        },
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting,
              resetForm = _ref.resetForm;

          if (_this3.state.productCategories == '' || _this3.state.productSubCategories == '') {
            if (_this3.state.productCategories == '') {
              _this3.setState({
                categoryErrorDiv: 'RedBorderDiv'
              });
            }

            if (_this3.state.productSubCategories == '') {
              _this3.setState({
                subCategoryErrorDiv: 'RedBorderDiv'
              });
            }

            setSubmitting(false);
          } else if (_this3.state.files == [] && _this3.state.isVariableProduct == true) {
            _this3.setState({
              showSimpleProductPriceImgLinkErrorrAlert: true,
              image_linkError: "error",
              image_linkErrorDiv: 'RedBorderDiv'
            });
          } else if (_this3.state.isVariationsSaved == false && values.product_type == 'variable-prouct') {
            _this3.setState({
              showVariationsErrorAlert: true
            });
          } else {
            resetForm();
            setSubmitting(true);

            _this3.setState({
              isLoading: true
            });

            setTimeout(function () {
              var array = [];
              values.product_category = _this3.state.productCategories;
              values.product_sub_category = _this3.state.productSubCategories;
              values.product_tags = _this3.state.productTags;
              values.dangerous_goods = _this3.state.dangerousGoodsArray;

              if (!_this3.state.isVariableProduct) {
                values.product_image_link = _this3.state.files;
                values.custom_fields = _this3.state.customFieldsArray;
              } else {
                array = [];

                _this3.state.variationsArray.forEach(function (element, index) {
                  var item = [];
                  element.item.forEach(function (e) {
                    item.push({
                      name: e.name,
                      value: e.value
                    });
                  });
                  var item_1 = [];
                  element.custom_fields.forEach(function (e) {
                    item_1.push({
                      name: e.name,
                      value: e.value
                    });
                  });
                  array.push({
                    item: item,
                    custom_fields: item_1,
                    price: element.price,
                    stock: element.stock,
                    image_link: element.image_link
                  });
                });

                values.product_variations = array;
              }

              resetForm();

              if (_this3.uploadProduct(values, _this3)) {
                _this3.setState({
                  showVariationsErrorAlert: false,
                  showSimpleProductPriceImgLinkErrorrAlert: false,
                  isVariableProduct: false,
                  productCategories: '',
                  productSubCategories: '',
                  subCategoryDisabled: true,
                  subSubCategoryDisabled: true,
                  categoryErrorDiv: 'BorderDiv',
                  subCategoryErrorDiv: 'BorderDiv',
                  productTags: [],
                  warrantyType: '',
                  inputValue: '',
                  files: [],
                  image_linkError: 'no_error',
                  image_linkErrorDiv: 'BorderDiv',
                  variationsArray: [],
                  isVariationsSaved: false,
                  // Custom Fields
                  customFieldsArray: [],
                  // Dangerous Goods
                  dangerousGoodsArray: []
                });
              }

              setSubmitting(false);
            }, 500);
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 13
        }
      }, function (_ref2) {
        var handleSubmit = _ref2.handleSubmit,
            handleChange = _ref2.handleChange,
            values = _ref2.values,
            touched = _ref2.touched,
            isValid = _ref2.isValid,
            errors = _ref2.errors,
            handleBlur = _ref2.handleBlur,
            isSubmitting = _ref2.isSubmitting;
        return __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474,
            columnNumber: 25
          }
        }, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_22__["default"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
          title: _this3.props.title,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 29
          }
        }), _this3.props.isUpdateProduct ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          style: {
            margin: ' 0% 2%',
            display: 'flex',
            alignItems: 'center'
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
          style: {
            fontSize: '14px'
          },
          className: "mr-auto",
          onClick: _this3.props.back,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478,
            columnNumber: 37
          }
        }, "Back"), __jsx("div", {
          style: {
            fontSize: '14px'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]) + " " + "mr-auto",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 479,
            columnNumber: 37
          }
        }, " ", _this3.props.product_name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
          style: {
            fontSize: '14px'
          },
          onClick: _this3.props.view,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 37
          }
        }, " View "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
          style: {
            fontSize: '14px'
          },
          onClick: _this3.props["delete"],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 37
          }
        }, " Delete ")) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486,
            columnNumber: 29
          }
        }, __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_20__["default"], {
          onHide: function onHide(e) {
            return _this3.setState({
              showToast: false
            });
          },
          show: _this3.state.showToast,
          header: 'Success',
          message: _this3.state.toastMessage,
          iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faThumbsUp"],
          color: "#00b300",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 33
          }
        }), __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_20__["default"], {
          onHide: function onHide(e) {
            return _this3.setState({
              showVariationsErrorAlert: false
            });
          },
          show: _this3.state.showVariationsErrorAlert,
          header: 'Error',
          message: 'Please Add/Save Variations First',
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faExclamationTriangle"],
          color: "#ff3333",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 33
          }
        }), __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_20__["default"], {
          onHide: function onHide(e) {
            return _this3.setState({
              showSimpleProductPriceImgLinkErrorrAlert: false
            });
          },
          show: _this3.state.showSimpleProductPriceImgLinkErrorrAlert,
          header: 'Error',
          message: 'Enter Price/Image Link in General Tab First',
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faExclamationTriangle"],
          color: "#ff3333",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 503,
            columnNumber: 33
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          noGutters: true,
          style: {
            paddingTop: '1%'
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 511,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 9,
          md: 9,
          sm: 12,
          xs: 12,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 512,
            columnNumber: 37
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: {
            margin: '0.5% 2% 2% 2%',
            padding: '0%'
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 514,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 515,
            columnNumber: 45
          }
        }, "Product Name", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 515,
            columnNumber: 90
          }
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 516,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "Enter Product Name",
          name: "product_name",
          value: values.product_name || '',
          onChange: handleChange,
          isInvalid: errors.product_name,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517,
            columnNumber: 49
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 525,
            columnNumber: 49
          }
        }, errors.product_name))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Product Discruption',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 533,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 534,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          as: "textarea",
          placeholder: "Enter Product Description",
          name: "product_description",
          value: values.product_description || '',
          rows: "7",
          onChange: handleChange,
          isInvalid: errors.product_description,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 535,
            columnNumber: 49
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 544,
            columnNumber: 49
          }
        }, errors.product_description))), __jsx(_add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_27__["default"], {
          isUpdateProduct: _this3.props.isUpdateProduct,
          productTypeHandler: function productTypeHandler(e) {
            if (e.target.value == 'variable-prouct') {
              _this3.setState({
                isVariableProduct: true
              });
            } else {
              _this3.setState({
                isVariableProduct: false
              });
            }
          },
          isVariableProduct: _this3.state.isVariableProduct,
          product_type_values: values.product_type,
          product_price_values: values.product_price || '',
          product_price_errors: errors.product_price,
          product_price_touched: touched.product_price,
          product_in_stock_values: values.product_in_stock || '',
          product_in_stock_errors: errors.product_in_stock,
          product_brand_name_values: values.product_brand_name || '',
          product_brand_name_errors: errors.product_brand_name,
          fileSelectedHandler: _this3.fileSelectedHandler.bind(_this3),
          imagePreviewArray: _this3.state.imagePreviewArray,
          deleteImage: _this3.deleteImage,
          imageLink: _this3.state.simple_product_image_link,
          simpleProductImgLinkChange: _this3.simpleProductImgLinkChange.bind(_this3),
          simpleProductImgLinkKeyDownHandler: _this3.handleSimpleProductImage_linkKeyDown.bind(_this3),
          simpleProductError: _this3.state.showSimpleProductPriceImgLinkErrorrAlert,
          product_warranty_values: values.product_warranty || '',
          product_warranty_errors: errors.product_warranty,
          warranty_type_values: values.warranty_type || '',
          warranty_type_errors: errors.warranty_type,
          product_discount_values: values.product_discount || '',
          product_discount_errors: errors.product_discount,
          sku_values: values.sku || '',
          sku_errors: errors.sku,
          product_weight_values: values.product_weight || '',
          product_weight_errors: errors.product_weight,
          dimension_length_values: values.dimension_length || '',
          dimension_length_errors: errors.dimension_length,
          dimension_width_values: values.dimension_width || '',
          dimension_width_errors: errors.dimension_width,
          dimension_height_values: values.dimension_height || '',
          dimension_height_errors: errors.dimension_height,
          shipping_charges_values: values.shipping_charges || '',
          shipping_charges_errors: errors.shipping_charges,
          handling_fee_values: values.handling_fee || '',
          handling_fee_errors: errors.handling_fee,
          purchase_note_values: values.purchase_note || '',
          purchase_note_errors: errors.purchase_note,
          onChange: handleChange,
          errors: errors,
          productColorChangeHandler: _this3.handleProductColorChange,
          productSizeChangeHandler: _this3.handleProductSizeChange,
          variationsArray: _this3.state.variationsArray,
          setVariationsArray: function setVariationsArray(arr) {
            return _this3.setState({
              variationsArray: arr
            });
          },
          setVariationsSaved: function setVariationsSaved() {
            return _this3.setState({
              isVariationsSaved: true
            });
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 550,
            columnNumber: 41
          }
        }), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Custom Fields',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 632,
            columnNumber: 41
          }
        }, __jsx(_add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_26__["default"], {
          customFieldsArray: _this3.state.customFieldsArray,
          setFieldsArrayHandler: function setFieldsArrayHandler(arr) {
            return _this3.setState({
              customFieldsArray: arr
            });
          },
          isVariableProduct: _this3.state.isVariableProduct,
          showCustomFields: showCustomFields,
          saveCustomFieldsHandler: _this3.handleSaveCustomFieldsBtnClick.bind(_this3),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633,
            columnNumber: 45
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 3,
          md: 3,
          sm: 12,
          xs: 12,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 644,
            columnNumber: 37
          }
        }, __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Product Categories',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 646,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 647,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 648,
            columnNumber: 49
          }
        }, "Category"), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]) + " " + (_this3.state.categoryErrorDiv || ""),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 649,
            columnNumber: 49
          }
        }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_19__["default"], {
          styles: _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].react_select_styles,
          onChange: _this3.handleProductCategoryChange,
          options: product_categories_options,
          value: _this3.state.productCategories,
          isSearchable: true,
          isClearable: true,
          placeholder: "Select Category",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 650,
            columnNumber: 53
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 661,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 662,
            columnNumber: 49
          }
        }, "Sub Category"), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]) + " " + (_this3.state.subCategoryErrorDiv || ""),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 49
          }
        }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_19__["default"], {
          styles: _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].react_select_styles,
          onChange: _this3.handleProductSubCategoryChange,
          options: product_sub_categories_options,
          value: _this3.state.productSubCategories,
          isSearchable: true,
          isClearable: true,
          placeholder: "Select Sub Category",
          isDisabled: _this3.state.subCategoryDisabled,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 664,
            columnNumber: 53
          }
        })), __jsx("div", {
          style: {
            minHeight: '150px'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 675,
            columnNumber: 49
          }
        }))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Dangerous Goods',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 681,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "not_specified",
          label: "Not Specified",
          style: styles.label,
          checked: _this3.state.dangerousGoodsArray && _this3.state.dangerousGoodsArray.forEach(function (element) {
            if (element.value == 'Not-Specified') {
              return true;
            }
          }),
          onChange: function onChange(e) {
            return _this3.handleDangerousGoodsChange(e, 'Not-Specified');
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 682,
            columnNumber: 45
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 693,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "ceramic",
          label: "Ceramic",
          style: styles.label,
          checked: _this3.state.dangerousGoodsArray && _this3.state.dangerousGoodsArray.forEach(function (element) {
            if (element.value == 'Ceramic') {
              return true;
            }
          }),
          onChange: function onChange(e) {
            return _this3.handleDangerousGoodsChange(e, 'Ceramic');
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 694,
            columnNumber: 45
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 705,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "glass",
          label: "Glass",
          style: styles.label,
          checked: _this3.state.dangerousGoodsArray && _this3.state.dangerousGoodsArray.forEach(function (element) {
            if (element.value == 'Glass') {
              return true;
            }
          }),
          onChange: function onChange(e) {
            return _this3.handleDangerousGoodsChange(e, 'Glass');
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 706,
            columnNumber: 45
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 717,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "metal",
          label: "Metal",
          style: styles.label,
          checked: _this3.state.dangerousGoodsArray && _this3.state.dangerousGoodsArray.forEach(function (element) {
            if (element.value == 'Metal') {
              return true;
            }
          }),
          onChange: function onChange(e) {
            return _this3.handleDangerousGoodsChange(e, 'Metal');
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 718,
            columnNumber: 45
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 729,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "plastic",
          label: "Plastic",
          style: styles.label,
          checked: _this3.state.dangerousGoodsArray && _this3.state.dangerousGoodsArray.forEach(function (element) {
            if (element.value == 'Plastic') {
              return true;
            }
          }),
          onChange: function onChange(e) {
            return _this3.handleDangerousGoodsChange(e, 'Plastic');
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 730,
            columnNumber: 45
          }
        })), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Product Tags',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 745,
            columnNumber: 41
          }
        }, __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_18__["default"], {
          isMulti: true,
          styles: _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].react_select_styles,
          onChange: _this3.handleProductTagChange,
          options: _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_29__["default"],
          value: _this3.state.productTags,
          placeholder: "Select/Enter Tags",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 746,
            columnNumber: 45
          }
        }), __jsx("div", {
          style: {
            minHeight: '150px'
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 754,
            columnNumber: 45
          }
        })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.row,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 761,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          type: "submit",
          onSubmit: handleSubmit,
          disabled: _this3.state.isLoading,
          block: true,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 762,
            columnNumber: 37
          }
        }, _this3.state.isLoading ? 'Uploading' : 'Upload', _this3.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
          animation: "grow",
          size: "sm",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 764,
            columnNumber: 65
          }
        }) : __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 764,
            columnNumber: 106
          }
        })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "3499326083",
          dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color],
          __self: _this3
        }, ".RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:1px;border-radius:2px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color, ";border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWl3QmlDLEFBR3dFLEFBTWYsQUFJRixBQUc4QixBQU90QixVQVR0QixFQUplLE1BY0EsS0FiZixJQVBnQixFQXFCaEIsVUFwQnNCLENBWWEsaUJBWHBCLFdBQ2YsR0FXc0Msa0NBQ2pCLGlCQUV0QixrQkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWRkLW5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIEZvcm0sIENvbCwgUm93LCBDYXJkLCBJbnB1dEdyb3VwLCBCdXR0b24sIFRvYXN0LCBBbGVydCwgTmF2LCBUYWJzLCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcblxyXG5pbXBvcnQgQWxlcnRNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9hbGVydC1tb2RhbCc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IFRpdGxlUm93IGZyb20gJy4uLy4uLy4uLy4uL3RpdGxlLXJvdyc7XHJcbmltcG9ydCBDYXJkQWNjb3JkaW9uIGZyb20gJy4uLy4uLy4uLy4uL2NhcmRfYWNjb3JkaW9uJztcclxuXHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZyc7XHJcbmltcG9ydCB7IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IEN1c3RvbUZpZWxkcyBmcm9tICcuL2FkZC1uZXctY29udGVudHMvY3VzdG9tLWZpZWxkcyc7XHJcbmltcG9ydCBQcm9kdWN0RGF0YSBmcm9tICcuL2FkZC1uZXctY29udGVudHMvcHJvZHVjdC1kYXRhJztcclxuaW1wb3J0IHByb2R1Y3Rfc2l6ZV9vcHRpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb25zdHMvcHJvZHVjdC1zaXplLW9wdGlvbnMnXHJcbmltcG9ydCBwcm9kdWN0X2NvbG9yX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LWNvbG9yLW9wdGlvbnMnXHJcbi8vIE9wdGlvbiBMaXN0IGZvciBzZWxlY3QgUHJvZHVjdCBDYXRlZ29yeSAod2hlbiBvZmZsaW5lKVxyXG5sZXQgcHJvZHVjdF9jYXRlZ29yaWVzX29wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiAnU2hvZScsIGxhYmVsOiAnU2hvZScgfSxcclxuICAgIHsgdmFsdWU6ICdDbG90aCcsIGxhYmVsOiAnQ2xvdGgnIH0sXHJcbiAgICB7IHZhbHVlOiAnU2hpcnQnLCBsYWJlbDogJ1NoaXJ0JyB9LFxyXG4gICAgeyB2YWx1ZTogJ1BhbnQnLCBsYWJlbDogJ1BhbnQnIH1cclxuXVxyXG5jb25zdCBwcm9kdWN0X3N1Yl9jYXRlZ29yaWVzX29wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiAnU3ViIFNob2UnLCBsYWJlbDogJ1N1YiBTaG9lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1N1YiBDbG90aCcsIGxhYmVsOiAnU3ViIENsb3RoJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1N1YiBTaGlydCcsIGxhYmVsOiAnU3ViIFNoaXJ0JyB9LFxyXG5dXHJcblxyXG4vLyBGb3IgUmVhY3QtU2VsZWN0XHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxufTtcclxuLy8gTW9kZWwgRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSk7XHJcblxyXG5cclxuXHJcbi8vIFl1cCBTY2hlbWEgZm9yIHZhbGlkYXRpb24gZmllbGRzXHJcbmNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgcHJvZHVjdF9uYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBQcm9kdWN0IE5hbWVcIilcclxuICAgICAgICAubWluKDIsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoNDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gNDAgY2hhcmFjdGVyc1wiKSxcclxuXHJcbiAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDUsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoMjAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDIwMCBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgLy8gUHJvZHVjdCBEYXRhXHJcbiAgICBwcm9kdWN0X3R5cGU6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vID0+IEludmVudG9yeVxyXG4gICAgc2t1OiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJylcclxuICAgICAgICAubWF4KDEwMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKSxcclxuICAgIC8vID0+IEdlbmVyYWwoU2ltcGxlLVByb2R1Y3QpXHJcbiAgICBwcm9kdWN0X3ByaWNlOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgJ0VudGVyIEJldHdlZW4gMS0xMDAwMDAwJyksXHJcbiAgICBwcm9kdWN0X2luX3N0b2NrOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDAwMDAwXCIpLFxyXG4gICAgcHJvZHVjdF9icmFuZF9uYW1lOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDIsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoNDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gNDAgY2hhcmFjdGVyc1wiKSxcclxuICAgIHByb2R1Y3RfaW1hZ2VfbGluazogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF93YXJyYW50eTogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMS0xMDAwJylcclxuICAgICAgICAubWF4KDEwMDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwMCcpLFxyXG4gICAgd2FycmFudHlfdHlwZTogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF9kaXNjb3VudDogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG4gICAgLy8gPT4gQXR0cmlidXRlcyAoVmFyaWFibGUgUHJvZHVjdClcclxuICAgIHB1cmNoYXNlX25vdGU6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vID0+IFZhcmlhdGlvbnMgKFZhcmlhYmxlIFByb2R1Y3QpXHJcbiAgICBwcm9kdWN0X3ZhcmlhdGlvbnM6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vID0+IFNoaXBwaW5nXHJcbiAgICBwcm9kdWN0X3dlaWdodDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMC0xMDAwMCcpXHJcbiAgICAgICAgLm1heCgxMDAwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDAwMFwiKSxcclxuICAgIGRpbWVuc2lvbl9sZW5ndGg6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMDBcIiksXHJcbiAgICBkaW1lbnNpb25fd2lkdGg6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMDBcIiksXHJcbiAgICBkaW1lbnNpb25faGVpZ2h0OiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAwLTEwMDAwJylcclxuICAgICAgICAubWF4KDEwMDAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMDAwXCIpLFxyXG4gICAgc2hpcHBpbmdfY2hhcmdlczogeXVwLm51bWJlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAwLTEwMDAwJylcclxuICAgICAgICAubWF4KDEwMDAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMDAwJyksXHJcbiAgICBoYW5kbGluZ19mZWU6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMFwiKSxcclxuICAgIC8vID0+IEFkdmFudmVcclxuICAgIHB1cmNoYXNlX25vdGU6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgIGN1c3RvbV9maWVsZHM6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBwcm9kdWN0X2NhdGVnb3J5OiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X3N1Yl9jYXRlZ29yeTogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIGRhbmdlcm91c19nb29kczogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF90YWdzOiB5dXAuc3RyaW5nKCksXHJcbn0pO1xyXG5cclxuXHJcbmNsYXNzIEFkZE5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1VwZGF0ZVByb2R1Y3Q6IHRoaXMucHJvcHMuaXNVcGRhdGVQcm9kdWN0LFxyXG4gICAgICAgICAgICBfaWQ6IHRoaXMucHJvcHMuX2lkLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93VG9hc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICBzaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IHRoaXMucHJvcHMuaXNWYXJpYWJsZVByb2R1Y3QsXHJcblxyXG4gICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllczogdGhpcy5wcm9wcy5wcm9kdWN0Q2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgcHJvZHVjdFN1YkNhdGVnb3JpZXM6IHRoaXMucHJvcHMucHJvZHVjdFN1YkNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5RGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICBzdWJDYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RUYWdzOiB0aGlzLnByb3BzLnByb2R1Y3RUYWdzLFxyXG5cclxuICAgICAgICAgICAgd2FycmFudHlUeXBlOiB0aGlzLnByb3BzLndhcnJhbnR5VHlwZSxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms6IHRoaXMucHJvcHMuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluayxcclxuXHJcbiAgICAgICAgICAgIGltYWdlX2xpbmtFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuXHJcbiAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheTogdGhpcy5wcm9wcy52YXJpYXRpb25zQXJyYXksXHJcbiAgICAgICAgICAgIGlzVmFyaWF0aW9uc1NhdmVkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk6IFtdLFxyXG5cclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZVByZXZpZXdBcnJheTogW10sXHJcbiAgICAgICAgICAgIC8vIERhbmdlcm91cyBHb29kc1xyXG4gICAgICAgICAgICBkYW5nZXJvdXNHb29kc0FycmF5OiB0aGlzLnByb3BzLmRhbmdlcm91c0dvb2RzQXJyYXksXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldHRpbmcgUHJvZHVjdCBDYXRlZ29yaWVzIGZyb20gREJcclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL2NhdGVnb3JpZXMvY2F0ZWdvcmllcyc7XHJcbiAgICAgICAgY29uc3QgdXJsXzEgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL2ZpZWxkcyc7XHJcbiAgICAgICAgY29uc3QgdXJsXzIgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL3RhZ3MnO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSgpXHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IHRva2VuIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2F0ZWdvcmllczonLCByZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBhbGVydCgnY2F0ZWdvcmllcyBGZXRjaGlnIEVycm9yOiAnLCBlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCh1cmxfMSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogdG9rZW4gfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWVsZHM6JywgcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z1Y2s6JywgZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KCdmaWVsZHMgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KHVybF8yLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiB0b2tlbiB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RhZ3M6JywgcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoJ3RhZ3MgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyAgdXBsb2FkUHJvZHVjdChkYXRhLCBjdXJyZW50Q29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhMTExMjIyMzMzdGE6ICcsIGRhdGEpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNVcGRhdGVQcm9kdWN0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzL2FkZCdcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdhdXRob3JpemF0aW9uJzogYXdhaXQgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSgpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgc2hvd1RvYXN0OiB0cnVlLCB0b2FzdE1lc3NhZ2U6ICdQcm9kdWN0IFVwbG9hZGVkIFN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Igcm9vcm86JywgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Igcm9vcm86JywgZXJyb3IucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdQcm9kdWN0IFVwbG9hZCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgYC9hcGkvcHJvZHVjdHMvJHt0aGlzLnN0YXRlLl9pZH1gXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBzaG93VG9hc3Q6IHRydWUsIHRvYXN0TWVzc2FnZTogJ1Byb2R1Y3QgVXBkYXRlZCBTdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnUHJvZHVjdCBVcGRhdGUgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAgU3VibWl0IGRhdGEgdG8gYXBpXHJcbiAgICAvLyBhc3luYyB1cGxvYWRQcm9kdWN0KGRhdGEsICkge1xyXG4gICAgLy8gICAgIGlmIChhd2FpdCB0aGlzLnByb3BzLnVwbG9hZChkYXRhKSA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgc2hvd1RvYXN0OiB0cnVlIH0pO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIC8vICAgICAgICAgYWxlcnQoJ1Byb2R1Y3QgVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlKGUpIHtcclxuICAgIC8vIGlmIChlLnRhcmdldC52YWx1ZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhYmxlUHJvZHVjdDogdHJ1ZSwgY3VzdG9tRmllbGRzQXJyYXk6IFtdIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlLCB2YXJpYXRpb25zQXJyYXk6IFtdIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBQcm9kdWN0IERhdGFcclxuICAgIC8vID0+IFNpbXBsZSBQcm9kdWN0IEltYWdlIExpbmtcclxuICAgIHNpbXBsZVByb2R1Y3RJbWdMaW5rQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlX2xpbmtLZXlEb3duID0gKGV2ZW50LCBpbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluayA9IHRoaXMuc3RhdGUuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluaztcclxuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1RhYic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rOiBbLi4uc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluaywgY3JlYXRlT3B0aW9uKGlucHV0VmFsdWUpXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyA9PiBFbmQgT2YgU2ltcGxlIFByb2R1Y3QgSW1hZ2UgTGlua1xyXG5cclxuICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgIGhhbmRsZVNhdmVDdXN0b21GaWVsZHNCdG5DbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1ZhcmlhYmxlUHJvZHVjdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KVxyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXkuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmN1c3RvbUZpZWxkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5LCBjdXN0b21GaWVsZHNBcnJheTogW10gfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFByb2R1Y3QgQ2F0ZWdvcnlcclxuICAgIGhhbmRsZVByb2R1Y3RDYXRlZ29yeUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0Q2F0ZWdvcmllczogdmFsdWUsIHN1YkNhdGVnb3J5RGlzYWJsZWQ6IGZhbHNlLCBjYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVByb2R1Y3RTdWJDYXRlZ29yeUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJvZHVjdFN1YkNhdGVnb3JpZXM6IHZhbHVlLCBzdWJTdWJDYXRlZ29yeURpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEYW5nZXJvdXMgR29vZHNcclxuICAgIGhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHsgdmFsdWU6IG5hbWUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYW5nZXJvdXNHb29kc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvZHVjdCBUYWdzXHJcbiAgICBoYW5kbGVQcm9kdWN0VGFnQ2hhbmdlID0gKGFycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0VGFnczogYXJyIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgYXN5bmMgZmlsZVNlbGVjdGVkSGFuZGxlcihlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiBbLi4udGhpcy5zdGF0ZS5maWxlcywgLi4uZS50YXJnZXQuZmlsZXNdIH0pXHJcblxyXG4gICAgICAgIGxldCBhcnJheSA9IFtdXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5maWxlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKFVSTC5jcmVhdGVPYmplY3RVUkwoZWxlbWVudCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlUHJldmlld0FycmF5OiBhcnJheSB9KVxyXG4gICAgfVxyXG4gICAgZGVsZXRlSW1hZ2UgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmZpbGVzKVxyXG4gICAgICAgIGNvbnN0IGltZ0NvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuaW1hZ2VQcmV2aWV3QXJyYXkpXHJcbiAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBpbWdDb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogY29weUFycmF5LCBpbWFnZVByZXZpZXdBcnJheTogaW1nQ29weUFycmF5IH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzaG93Q3VzdG9tRmllbGRzID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5ID09IFtdICYmIHRoaXMuc3RhdGUuaXNWYXJpYWJsZVByb2R1Y3QgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzaG93Q3VzdG9tRmllbGRzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dDdXN0b21GaWVsZHMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNVcGRhdGVQcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiB0aGlzLnByb3BzLnByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IHRoaXMucHJvcHMucHJvZHVjdF9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZTogdGhpcy5wcm9wcy5wcm9kdWN0X3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3U6IHRoaXMucHJvcHMuc2t1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZTogdGhpcy5wcm9wcy5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9jazogdGhpcy5wcm9wcy5wcm9kdWN0X2luX3N0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lOiB0aGlzLnByb3BzLnByb2R1Y3RfYnJhbmRfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfaW1hZ2VfbGluazp0aGlzLnByb3BzLnByb2R1Y3RfaW1hZ2VfbGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHk6IHRoaXMucHJvcHMucHJvZHVjdF93YXJyYW50eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGU6IHRoaXMucHJvcHMud2FycmFudHlfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnQ6IHRoaXMucHJvcHMucHJvZHVjdF9kaXNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGU6IHRoaXMucHJvcHMucHVyY2hhc2Vfbm90ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfdmFyaWF0aW9uczp0aGlzLnByb3BzLnByb2R1Y3RfdmFyaWF0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0OiB0aGlzLnByb3BzLnByb2R1Y3Rfd2VpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aDogdGhpcy5wcm9wcy5kaW1lbnNpb25fbGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoOiB0aGlzLnByb3BzLmRpbWVuc2lvbl93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHQ6IHRoaXMucHJvcHMuZGltZW5zaW9uX2hlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXM6IHRoaXMucHJvcHMuc2hpcHBpbmdfY2hhcmdlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZTogdGhpcy5wcm9wcy5oYW5kbGluZ19mZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb2R1Y3RfdHlwZTogJ3NpbXBsZS1wcm9kdWN0JyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzID09ICcnIHx8IHRoaXMuc3RhdGUucHJvZHVjdFN1YkNhdGVnb3JpZXMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUVycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0U3ViQ2F0ZWdvcmllcyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1YkNhdGVnb3J5RXJyb3JEaXY6ICdSZWRCb3JkZXJEaXYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZmlsZXMgPT0gW10gJiYgdGhpcy5zdGF0ZS5pc1ZhcmlhYmxlUHJvZHVjdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0OiB0cnVlLCBpbWFnZV9saW5rRXJyb3I6IFwiZXJyb3JcIiwgaW1hZ2VfbGlua0Vycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNWYXJpYXRpb25zU2F2ZWQgPT0gZmFsc2UgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3Rfc3ViX2NhdGVnb3J5ID0gdGhpcy5zdGF0ZS5wcm9kdWN0U3ViQ2F0ZWdvcmllcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3RhZ3MgPSB0aGlzLnN0YXRlLnByb2R1Y3RUYWdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5kYW5nZXJvdXNfZ29vZHMgPSB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfaW1hZ2VfbGluayA9IHRoaXMuc3RhdGUuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmN1c3RvbV9maWVsZHMgPSB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pdGVtLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiBlLm5hbWUsIHZhbHVlOiBlLnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbV8xID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jdXN0b21fZmllbGRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXzEucHVzaCh7IG5hbWU6IGUubmFtZSwgdmFsdWU6IGUudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2goeyBpdGVtOiBpdGVtLCBjdXN0b21fZmllbGRzOiBpdGVtXzEsIHByaWNlOiBlbGVtZW50LnByaWNlLCBzdG9jazogZWxlbWVudC5zdG9jaywgaW1hZ2VfbGluazogZWxlbWVudC5pbWFnZV9saW5rIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF92YXJpYXRpb25zID0gYXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwbG9hZFByb2R1Y3QodmFsdWVzLCB0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENhdGVnb3JpZXM6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U3ViQ2F0ZWdvcmllczogJycsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeURpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJTdWJDYXRlZ29yeURpc2FibGVkOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YkNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGFnczogW10sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eVR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yOiAnbm9fZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9saW5rRXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYXRpb25zU2F2ZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VzdG9tIEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHNBcnJheTogW10sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYW5nZXJvdXMgR29vZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzR29vZHNBcnJheTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIHRvdWNoZWQsIGlzVmFsaWQsIGVycm9ycywgaGFuZGxlQmx1ciwgaXNTdWJtaXR0aW5nXHJcbiAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVSb3cgaWNvbj17ZmFQbHVzfSB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzVXBkYXRlUHJvZHVjdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXt7IG1hcmdpbjogJyAwJSAyJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBjbGFzc05hbWU9XCJtci1hdXRvXCIgb25DbGljaz17dGhpcy5wcm9wcy5iYWNrfT5CYWNrPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT4ge3RoaXMucHJvcHMucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLnZpZXd9PiBWaWV3IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9e3RoaXMucHJvcHMuZGVsZXRlfT4gRGVsZXRlIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93VG9hc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J1N1Y2Nlc3MnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXt0aGlzLnN0YXRlLnRvYXN0TWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9e2ZhVGh1bWJzVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiMwMGIzMDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQ6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dWYXJpYXRpb25zRXJyb3JBbGVydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXsnUGxlYXNlIEFkZC9TYXZlIFZhcmlhdGlvbnMgRmlyc3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uTmFtZT17ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCIjZmYzMzMzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXsnRW50ZXIgUHJpY2UvSW1hZ2UgTGluayBpbiBHZW5lcmFsIFRhYiBGaXJzdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25OYW1lPXtmYUV4Y2xhbWF0aW9uVHJpYW5nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiNmZjMzMzNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcxJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezl9IG1kPXs5fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBOYW1lICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3sgbWFyZ2luOiAnMC41JSAyJSAyJSAyJScsIHBhZGRpbmc6ICcwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+UHJvZHVjdCBOYW1lPHNwYW4+Kjwvc3Bhbj48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcm9kdWN0X25hbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlcnJvcnMucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IE5hbWUgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgRGlzY3JpcHRpb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgRGlzY3J1cHRpb24nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wcm9kdWN0X2Rlc2NyaXB0aW9uIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZXJyb3JzLnByb2R1Y3RfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgRGF0YSBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VwZGF0ZVByb2R1Y3Q9e3RoaXMucHJvcHMuaXNVcGRhdGVQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlSGFuZGxlcj17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGVfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF90eXBlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfcHJpY2UgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2VfdG91Y2hlZD17dG91Y2hlZC5wcm9kdWN0X3ByaWNlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfaW5fc3RvY2sgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja19lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X2luX3N0b2NrfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWVfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF9icmFuZF9uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X2JyYW5kX25hbWV9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlU2VsZWN0ZWRIYW5kbGVyPXt0aGlzLmZpbGVTZWxlY3RlZEhhbmRsZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVByZXZpZXdBcnJheT17dGhpcy5zdGF0ZS5pbWFnZVByZXZpZXdBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJbWFnZT17dGhpcy5kZWxldGVJbWFnZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaW5rPXt0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlUHJvZHVjdEltZ0xpbmtDaGFuZ2U9e3RoaXMuc2ltcGxlUHJvZHVjdEltZ0xpbmtDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0SW1nTGlua0tleURvd25IYW5kbGVyPXt0aGlzLmhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZV9saW5rS2V5RG93bi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXBsZVByb2R1Y3RFcnJvcj17dGhpcy5zdGF0ZS5zaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X3ZhbHVlcz17dmFsdWVzLnByb2R1Y3Rfd2FycmFudHkgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eV9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X3dhcnJhbnR5fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX3ZhbHVlcz17dmFsdWVzLndhcnJhbnR5X3R5cGUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZV9lcnJvcnM9e2Vycm9ycy53YXJyYW50eV90eXBlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfZGlzY291bnQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudF9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X2Rpc2NvdW50fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3VfdmFsdWVzPXt2YWx1ZXMuc2t1IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV9lcnJvcnM9e2Vycm9ycy5za3V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0X3ZhbHVlcz17dmFsdWVzLnByb2R1Y3Rfd2VpZ2h0IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3Rfd2VpZ2h0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl9sZW5ndGggfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aF9lcnJvcnM9e2Vycm9ycy5kaW1lbnNpb25fbGVuZ3RofVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGhfdmFsdWVzPXt2YWx1ZXMuZGltZW5zaW9uX3dpZHRoIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF9lcnJvcnM9e2Vycm9ycy5kaW1lbnNpb25fd2lkdGh9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHRfdmFsdWVzPXt2YWx1ZXMuZGltZW5zaW9uX2hlaWdodCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl9oZWlnaHR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXNfdmFsdWVzPXt2YWx1ZXMuc2hpcHBpbmdfY2hhcmdlcyB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX2Vycm9ycz17ZXJyb3JzLnNoaXBwaW5nX2NoYXJnZXN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV92YWx1ZXM9e3ZhbHVlcy5oYW5kbGluZ19mZWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX2Vycm9ycz17ZXJyb3JzLmhhbmRsaW5nX2ZlZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZV92YWx1ZXM9e3ZhbHVlcy5wdXJjaGFzZV9ub3RlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGVfZXJyb3JzPXtlcnJvcnMucHVyY2hhc2Vfbm90ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvbG9yQ2hhbmdlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0Q29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNpemVDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RTaXplQ2hhbmdlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk9e3RoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhcmlhdGlvbnNBcnJheT17KGFycikgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogYXJyIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhcmlhdGlvbnNTYXZlZD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzVmFyaWF0aW9uc1NhdmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBEYXRhIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnQ3VzdG9tIEZpZWxkcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkc0FycmF5SGFuZGxlcj17KGFycikgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkc0FycmF5OiBhcnIgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q3VzdG9tRmllbGRzPXtzaG93Q3VzdG9tRmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ3VzdG9tRmllbGRzSGFuZGxlcj17dGhpcy5oYW5kbGVTYXZlQ3VzdG9tRmllbGRzQnRuQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgQ2F0ZWdvcnkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgQ2F0ZWdvcmllcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5DYXRlZ29yeTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvckRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtHbG9iYWxTdHlsZVNoZWV0LnJlYWN0X3NlbGVjdF9zdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdENhdGVnb3J5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2R1Y3RfY2F0ZWdvcmllc19vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlN1YiBDYXRlZ29yeTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlFcnJvckRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtHbG9iYWxTdHlsZVNoZWV0LnJlYWN0X3NlbGVjdF9zdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdFN1YkNhdGVnb3J5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2R1Y3Rfc3ViX2NhdGVnb3JpZXNfb3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0U3ViQ2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU3ViIENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLnN0YXRlLnN1YkNhdGVnb3J5RGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtaW5IZWlnaHQ6ICcxNTBweCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IGF0ZWdvcnkgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIERhbmdlcm91cyBHb29kcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnRGFuZ2Vyb3VzIEdvb2RzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdF9zcGVjaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vdCBTcGVjaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkgJiYgdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSAnTm90LVNwZWNpZmllZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdOb3QtU3BlY2lmaWVkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2VyYW1pY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VyYW1pY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSAmJiB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICdDZXJhbWljJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ0NlcmFtaWMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkgJiYgdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSAnR2xhc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnR2xhc3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWV0YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkgJiYgdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSAnTWV0YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnTWV0YWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGFzdGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGFzdGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5ICYmIHRoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUgPT0gJ1BsYXN0aWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnUGxhc3RpYycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mRGFuZ2Vyb3VzIEdvb2RzICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IFRhZ3MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjY29yZGlvbiB0aXRsZT17J1Byb2R1Y3QgVGFncyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e0dsb2JhbFN0eWxlU2hlZXQucmVhY3Rfc2VsZWN0X3N0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdFRhZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvZHVjdF9jb2xvcl9vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0VGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QvRW50ZXIgVGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzE1MHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBUYWdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZvcm0gU3VibWl0IEJ0biBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30gYmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAnVXBsb2FkaW5nJyA6ICdVcGxvYWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiIHNpemU9XCJzbVwiIC8+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgRm9ybSBTdWJtaXQgQnRuIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWRCb3JkZXJEaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjREMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQm9yZGVyRGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrID5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIHZhcmlhdGlvbnNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXc7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new.js */")));
      });
    }
  }]);

  return AddNew;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var styles = {
  nav_link: {
    color: 'white',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    height: '45px'
  },
  row: {
    margin: '2%',
    padding: '0%'
  },
  card: {
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    alignItems: 'center',
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].card_header_fontsize),
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].card_header_background)
  },
  buttons: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].primry_color),
    border: 'none',
    fontSize: '10px'
  },
  label: {
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize)
  },
  term_condition_label: {
    width: '100%',
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].form_label_fontsize),
    paddingTop: '-10px',
    marginTop: '-10px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].primary_text_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  product_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].primary_text_color),
    marginRight: '10%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  variations_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color),
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AddNew);

/***/ })

})
//# sourceMappingURL=admin.js.9b604939ff08f0bd9177.hot-update.js.map