webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new.js";


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
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "purchase_note", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "custom_fields", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "category_id", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "sub_category_id", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "dangerous_goods", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_tags", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), _yup$object));

var AddNew = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddNew, _Component);

  var _super = _createSuper(AddNew);

  function AddNew(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddNew);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductCategoryChange", function (value) {
      var array = [];
      var _id = null;

      _this.state.category_options.forEach(function (element) {
        if (value.label == element.label) {
          _id = element._id;
        }
      });

      _this.state.sub_category_list.forEach(function (element) {
        if (element.category_id == _id) {
          array.push(element);
        }
      });

      _this.setState({
        productCategories: value,
        sub_category_options: array,
        subCategoryDisabled: false,
        categoryErrorDiv: 'BorderDiv',
        category_id: _id
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductSubCategoryChange", function (value) {
      var _id = null;

      _this.state.sub_category_options.forEach(function (element) {
        if (value.label == element.label) {
          _id = element._id;
        }
      });

      _this.setState({
        productSubCategories: value,
        subCategoryErrorDiv: 'BorderDiv',
        sub_category_id: _id
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
      category_id: '',
      sub_category_id: '',
      category_options: product_categories_options,
      sub_category_list: product_sub_categories_options,
      sub_category_options: [],
      subCategoryDisabled: true,
      categoryErrorDiv: 'BorderDiv',
      subCategoryErrorDiv: 'BorderDiv',
      productTags: _this.props.productTags,
      warrantyType: _this.props.warrantyType,
      inputValue: '',
      simple_product_image_link: _this.props.simple_product_image_link,
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
      var url, url_1, url_2, token, currentComponent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + '/api/categories/categories';
              url_1 = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + '/api/categories/fields';
              url_2 = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + '/api/categories/tags';
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_25__["getUncodededTokenFromStorage"])());

            case 5:
              token = _context.sent;
              currentComponent = this;
              _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a;
              _context.t1 = axios__WEBPACK_IMPORTED_MODULE_14___default.a;
              _context.t2 = url;
              _context.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_25__["getUncodededTokenFromStorage"])());

            case 12:
              _context.t3 = _context.sent;
              _context.t4 = {
                'authorization': _context.t3
              };
              _context.t5 = {
                headers: _context.t4
              };
              _context.t6 = _context.t1.get.call(_context.t1, _context.t2, _context.t5).then(function (response) {
                currentComponent.setState({
                  category_options: response.data.category.docs,
                  sub_category_list: response.data.sub_category.docs
                });
              })["catch"](function (error) {
                console.log('Caterories_1 Fetchig Error: ', error);
              });
              _context.next = 18;
              return _context.t0.awrap.call(_context.t0, _context.t6);

            case 18:
              _context.next = 20;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(url_1, {
                headers: {
                  'authorization': token
                }
              }).then(function (response) {// console.log('fields:', response.data)
              })["catch"](function (error) {// console.log('fuck:', error)
                // alert('fields Fetchig Error: ', error.response.data.message)
              }));

            case 20:
              _context.next = 22;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(url_2, {
                headers: {
                  'authorization': token
                }
              }).then(function (response) {// console.log('tags:', response.data)
              })["catch"](function (error) {// alert('tags Fetchig Error: ', error)
              }));

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "uploadProduct",
    value: function uploadProduct(values, currentComponent) {
      var formData, url, config, _url;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function uploadProduct$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('values: ', values);
              formData = new FormData();
              formData.append('product_name', values.product_name);
              formData.append('product_description', values.product_description);
              formData.append('product_type', values.product_type);
              formData.append('sku', values.sku);
              formData.append('product_price', values.product_price);
              formData.append('product_in_stock', values.product_in_stock);
              formData.append('product_brand_name', values.product_brand_name);
              formData.append('product_image_link', '');
              values.product_image_link && values.product_image_link.forEach(function (element) {
                formData.append('myImage', element);
              });
              values.product_variations && values.product_variations.forEach(function (element, index) {
                var array = [];
                element.image_link && element.image_link.forEach(function (file) {
                  formData.append('myImage', file);
                  array.push({
                    name: file.name
                  });
                });
                element.image_link = array;
              });
              formData.append('product_warranty', values.product_warranty);
              formData.append('warranty_type', values.warranty_type);
              formData.append('product_discount', values.product_discount);
              formData.append('purchase_note', values.purchase_note);
              formData.append('product_variations', JSON.stringify(values.product_variations));
              formData.append('product_weight', values.product_weight);
              formData.append('dimension_length', values.dimension_length);
              formData.append('dimension_width', values.dimension_width);
              formData.append('dimension_height', values.dimension_height);
              formData.append('shipping_charges', values.shipping_charges);
              formData.append('handling_fee', values.handling_fee);
              formData.append('custom_fields', JSON.stringify(values.custom_fields));
              formData.append('category_id', values.category_id);
              formData.append('sub_category_id', values.sub_category_id);
              formData.append('dangerous_goods', JSON.stringify(values.dangerous_goods));
              formData.append('product_tags', JSON.stringify(values.product_tags));

              if (!(this.state.isUpdateProduct == false)) {
                _context2.next = 38;
                break;
              }

              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + '/api/products/add';
              _context2.next = 32;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_25__["getUncodededTokenFromStorage"])());

            case 32:
              _context2.t0 = _context2.sent;
              _context2.t1 = {
                'content-type': 'multipart/form-data',
                'authorization': _context2.t0
              };
              config = {
                headers: _context2.t1
              };
              axios__WEBPACK_IMPORTED_MODULE_14___default.a.post(url, formData, config).then(function (response) {
                currentComponent.setState({
                  isLoading: false
                });
                currentComponent.setState({
                  showToast: true,
                  toastMessage: 'Product Uploaded Successfully'
                });
                return true;
              })["catch"](function (error) {
                currentComponent.setState({
                  isLoading: false
                });
                alert('Product Upload failed');
                return false;
              });
              _context2.next = 51;
              break;

            case 38:
              _url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_24__["default"].PATH + "/api/products/".concat(this.state._id);
              _context2.t2 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a;
              _context2.t3 = axios__WEBPACK_IMPORTED_MODULE_14___default.a;
              _context2.t4 = _url;
              _context2.t5 = {
                data: data
              };
              _context2.next = 45;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_25__["getUncodededTokenFromStorage"])());

            case 45:
              _context2.t6 = _context2.sent;
              _context2.t7 = {
                'authorization': _context2.t6
              };
              _context2.t8 = {
                headers: _context2.t7
              };
              _context2.t9 = _context2.t3.put.call(_context2.t3, _context2.t4, _context2.t5, _context2.t8).then(function (response) {
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
              _context2.next = 51;
              return _context2.t2.awrap.call(_context2.t2, _context2.t9);

            case 51:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    } // Custom Fields

  }, {
    key: "handleSaveCustomFieldsBtnClick",
    value: function handleSaveCustomFieldsBtnClick() {
      var _this2 = this;

      if (this.state.isVariableProduct == true) {
        var copyArray = Object.assign([], this.state.variationsArray);
        copyArray.forEach(function (element) {
          _this2.state.customFieldsArray.forEach(function (e) {
            element.custom_fields.push({
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
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fileSelectedHandler$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(this.setState({
                files: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.files), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.files))
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
          product_type: 'simple-product',
          product_price: '',
          product_in_stock: '',
          product_name: '',
          product_description: '',
          sku: '',
          product_brand_name: '',
          product_image_link: '',
          product_warranty: '',
          warranty_type: '',
          product_discount: '',
          purchase_note: '',
          product_variations: [],
          product_weight: '',
          dimension_length: '',
          dimension_width: '',
          dimension_height: '',
          shipping_charges: '',
          handling_fee: '',
          custom_fields: [],
          category_id: '',
          sub_category_id: '',
          dangerous_goods: [],
          product_tags: []
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
          } else if (values.product_type != 'variable-prouct' && (values.product_price == '' || values.product_in_stock == '' || _this3.state.files == '')) {
            _this3.setState({
              showSimpleProductPriceImgLinkErrorrAlert: true
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
              values.category_id = _this3.state.category_id;
              values.sub_category_id = _this3.state.sub_category_id;
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
          lineNumber: 377,
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
            lineNumber: 513,
            columnNumber: 25
          }
        }, __jsx(_title_row__WEBPACK_IMPORTED_MODULE_22__["default"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
          title: _this3.props.title,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 514,
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
            lineNumber: 516,
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
            lineNumber: 517,
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
            lineNumber: 518,
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
            lineNumber: 519,
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
            lineNumber: 520,
            columnNumber: 37
          }
        }, " Delete ")) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 525,
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
            lineNumber: 526,
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
            lineNumber: 534,
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
          message: 'Enter Price/Stock/Image(s) in General Tab First',
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faExclamationTriangle"],
          color: "#ff3333",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 542,
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
            lineNumber: 550,
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
            lineNumber: 551,
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
            lineNumber: 553,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 554,
            columnNumber: 45
          }
        }, "Product Name", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 554,
            columnNumber: 90
          }
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 555,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "Enter Product Name",
          name: "product_name",
          value: values.product_name || '',
          onChange: handleChange,
          isInvalid: errors.product_name && touched.product_name,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 556,
            columnNumber: 49
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 564,
            columnNumber: 49
          }
        }, errors.product_name))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Product Discruption',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 572,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          as: "textarea",
          placeholder: "Enter Product Description",
          name: "product_description",
          value: values.product_description || '',
          rows: "7",
          onChange: handleChange,
          isInvalid: errors.product_description && touched.product_description,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 49
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 49
          }
        }, errors.product_description))), __jsx(_add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_27__["default"], {
          isUpdateProduct: _this3.props.isUpdateProduct,
          productTypeHandler: function productTypeHandler(e) {
            if (e.target.value === 'variable-prouct') {
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
            lineNumber: 589,
            columnNumber: 41
          }
        }), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Custom Fields',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 666,
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
          hideCustomFields: _this3.state.variationsArray == '' && _this3.state.isVariableProduct == true,
          saveCustomFieldsHandler: _this3.handleSaveCustomFieldsBtnClick.bind(_this3),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 667,
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
            lineNumber: 678,
            columnNumber: 37
          }
        }, __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Product Categories',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 680,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 681,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 682,
            columnNumber: 49
          }
        }, "Category"), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]) + " " + (_this3.state.categoryErrorDiv || ""),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 683,
            columnNumber: 49
          }
        }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_19__["default"], {
          id: '1',
          instanceId: '1',
          inputId: '1',
          styles: _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].react_select_styles,
          onChange: _this3.handleProductCategoryChange,
          options: _this3.state.category_options,
          value: _this3.state.productCategories,
          isSearchable: true,
          isClearable: true,
          placeholder: "Select Category",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 684,
            columnNumber: 53
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 698,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 699,
            columnNumber: 49
          }
        }, "Sub Category"), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]) + " " + (_this3.state.subCategoryErrorDiv || ""),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 700,
            columnNumber: 49
          }
        }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_19__["default"], {
          id: '1',
          instanceId: '1',
          inputId: '1',
          styles: _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].react_select_styles,
          onChange: _this3.handleProductSubCategoryChange,
          options: _this3.state.sub_category_options,
          value: _this3.state.productSubCategories,
          isSearchable: true,
          isClearable: true,
          placeholder: "Select Sub Category",
          isDisabled: _this3.state.subCategoryDisabled,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 701,
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
            lineNumber: 715,
            columnNumber: 49
          }
        }))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Dangerous Goods',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721,
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
            lineNumber: 722,
            columnNumber: 45
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 733,
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
            lineNumber: 734,
            columnNumber: 45
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 745,
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
            lineNumber: 746,
            columnNumber: 45
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 757,
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
            lineNumber: 758,
            columnNumber: 45
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 769,
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
            lineNumber: 770,
            columnNumber: 45
          }
        })), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_23__["default"], {
          title: 'Product Tags',
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 785,
            columnNumber: 41
          }
        }, __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_18__["default"], {
          id: '1',
          instanceId: '1',
          inputId: '1',
          isMulti: true,
          value: _this3.state.productTags,
          components: {
            DropdownIndicator: null
          },
          styles: _styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].react_select_styles,
          onChange: _this3.handleProductTagChange,
          placeholder: "Type and press enter",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 786,
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
            lineNumber: 797,
            columnNumber: 45
          }
        })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.row,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 804,
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
            lineNumber: 805,
            columnNumber: 37
          }
        }, _this3.state.isLoading ? 'Uploading' : 'Upload', _this3.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
          animation: "grow",
          size: "sm",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 807,
            columnNumber: 65
          }
        }) : __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3499326083", [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color]]]),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 807,
            columnNumber: 106
          }
        })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "3499326083",
          dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color],
          __self: _this3
        }, ".RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:1px;border-radius:2px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_21__["default"].admin_primry_color, ";border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTR5QmlDLEFBR3dFLEFBTWYsQUFJRixBQUc4QixBQU90QixVQVR0QixFQUplLE1BY0EsS0FiZixJQVBnQixFQXFCaEIsVUFwQnNCLENBWWEsaUJBWHBCLFdBQ2YsR0FXc0Msa0NBQ2pCLGlCQUV0QixrQkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE11ZGFzc2lyUlxcRGVza3RvcFxcTXVoYWxpa1xcTmV3IGZvbGRlclxcbXVoYWxpa3dlYlxcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcdmVuZG9yXFxkYXNoYm9hcmRcXGRhc2hib2FyZC1jb250ZW50c1xccHJvZHVjdC1jb250ZW50c1xcYWRkLW5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIEZvcm0sIENvbCwgUm93LCBDYXJkLCBJbnB1dEdyb3VwLCBCdXR0b24sIFRvYXN0LCBBbGVydCwgTmF2LCBUYWJzLCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtcclxuICAgIGZhUGx1cywgZmFBcnJvd0xlZnQsIGZhRXhjbGFtYXRpb25UcmlhbmdsZSxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcblxyXG5pbXBvcnQgQWxlcnRNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9hbGVydC1tb2RhbCc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IFRpdGxlUm93IGZyb20gJy4uLy4uLy4uLy4uL3RpdGxlLXJvdyc7XHJcbmltcG9ydCBDYXJkQWNjb3JkaW9uIGZyb20gJy4uLy4uLy4uLy4uL2NhcmRfYWNjb3JkaW9uJztcclxuXHJcbmltcG9ydCBNdWhhbGlrQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9tdWhhbGlrLmNvbmZpZyc7XHJcbmltcG9ydCB7IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29yZS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IEN1c3RvbUZpZWxkcyBmcm9tICcuL2FkZC1uZXctY29udGVudHMvY3VzdG9tLWZpZWxkcyc7XHJcbmltcG9ydCBQcm9kdWN0RGF0YSBmcm9tICcuL2FkZC1uZXctY29udGVudHMvcHJvZHVjdC1kYXRhJztcclxuaW1wb3J0IHByb2R1Y3Rfc2l6ZV9vcHRpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb25zdHMvcHJvZHVjdC1zaXplLW9wdGlvbnMnXHJcbmltcG9ydCBwcm9kdWN0X2NvbG9yX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LWNvbG9yLW9wdGlvbnMnXHJcbi8vIE9wdGlvbiBMaXN0IGZvciBzZWxlY3QgUHJvZHVjdCBDYXRlZ29yeSAod2hlbiBvZmZsaW5lKVxyXG5sZXQgcHJvZHVjdF9jYXRlZ29yaWVzX29wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiAnU2hvZScsIGxhYmVsOiAnU2hvZScgfSxcclxuICAgIHsgdmFsdWU6ICdDbG90aCcsIGxhYmVsOiAnQ2xvdGgnIH0sXHJcbiAgICB7IHZhbHVlOiAnU2hpcnQnLCBsYWJlbDogJ1NoaXJ0JyB9LFxyXG4gICAgeyB2YWx1ZTogJ1BhbnQnLCBsYWJlbDogJ1BhbnQnIH1cclxuXVxyXG5jb25zdCBwcm9kdWN0X3N1Yl9jYXRlZ29yaWVzX29wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiAnU3ViIFNob2UnLCBsYWJlbDogJ1N1YiBTaG9lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1N1YiBDbG90aCcsIGxhYmVsOiAnU3ViIENsb3RoJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1N1YiBTaGlydCcsIGxhYmVsOiAnU3ViIFNoaXJ0JyB9LFxyXG5dXHJcblxyXG4vLyBGb3IgUmVhY3QtU2VsZWN0XHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxufTtcclxuLy8gTW9kZWwgRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSk7XHJcblxyXG5cclxuXHJcbi8vIFl1cCBTY2hlbWEgZm9yIHZhbGlkYXRpb24gZmllbGRzXHJcbmNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gICAgcHJvZHVjdF9uYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbnRlciBQcm9kdWN0IE5hbWVcIilcclxuICAgICAgICAubWluKDIsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoNDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gNDAgY2hhcmFjdGVyc1wiKSxcclxuXHJcbiAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDUsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoMjAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDIwMCBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgLy8gUHJvZHVjdCBEYXRhXHJcbiAgICBwcm9kdWN0X3R5cGU6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vID0+IEludmVudG9yeVxyXG4gICAgc2t1OiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJylcclxuICAgICAgICAubWF4KDEwMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKSxcclxuICAgIC8vID0+IEdlbmVyYWwoU2ltcGxlLVByb2R1Y3QpXHJcbiAgICBwcm9kdWN0X3ByaWNlOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgJ0VudGVyIEJldHdlZW4gMS0xMDAwMDAwJyksXHJcbiAgICBwcm9kdWN0X2luX3N0b2NrOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDAwMDAwXCIpLFxyXG4gICAgcHJvZHVjdF9icmFuZF9uYW1lOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDIsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoNDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gNDAgY2hhcmFjdGVyc1wiKSxcclxuICAgIHByb2R1Y3RfaW1hZ2VfbGluazogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF93YXJyYW50eTogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMS0xMDAwJylcclxuICAgICAgICAubWF4KDEwMDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwMCcpLFxyXG4gICAgd2FycmFudHlfdHlwZTogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF9kaXNjb3VudDogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG4gICAgLy8gPT4gQXR0cmlidXRlcyAoVmFyaWFibGUgUHJvZHVjdClcclxuICAgIHB1cmNoYXNlX25vdGU6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vID0+IFZhcmlhdGlvbnMgKFZhcmlhYmxlIFByb2R1Y3QpXHJcbiAgICBwcm9kdWN0X3ZhcmlhdGlvbnM6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vID0+IFNoaXBwaW5nXHJcbiAgICBwcm9kdWN0X3dlaWdodDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMC0xMDAwMCcpXHJcbiAgICAgICAgLm1heCgxMDAwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDAwMFwiKSxcclxuICAgIGRpbWVuc2lvbl9sZW5ndGg6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMDBcIiksXHJcbiAgICBkaW1lbnNpb25fd2lkdGg6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMDBcIiksXHJcbiAgICBkaW1lbnNpb25faGVpZ2h0OiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAwLTEwMDAwJylcclxuICAgICAgICAubWF4KDEwMDAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMDAwXCIpLFxyXG4gICAgc2hpcHBpbmdfY2hhcmdlczogeXVwLm51bWJlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAwLTEwMDAwJylcclxuICAgICAgICAubWF4KDEwMDAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMDAwJyksXHJcbiAgICBoYW5kbGluZ19mZWU6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLnBvc2l0aXZlKCdFbnRlciBCZXR3ZWVuIDAtMTAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMFwiKSxcclxuICAgIC8vID0+IEFkdmFudmVcclxuICAgIHB1cmNoYXNlX25vdGU6IHl1cC5zdHJpbmcoKSxcclxuICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgIGN1c3RvbV9maWVsZHM6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBjYXRlZ29yeV9pZDogeXVwLnN0cmluZygpLFxyXG4gICAgc3ViX2NhdGVnb3J5X2lkOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgZGFuZ2Vyb3VzX2dvb2RzOiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X3RhZ3M6IHl1cC5zdHJpbmcoKSxcclxufSk7XHJcblxyXG5cclxuY2xhc3MgQWRkTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzVXBkYXRlUHJvZHVjdDogdGhpcy5wcm9wcy5pc1VwZGF0ZVByb2R1Y3QsXHJcbiAgICAgICAgICAgIF9pZDogdGhpcy5wcm9wcy5faWQsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb2FzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdDogdGhpcy5wcm9wcy5pc1ZhcmlhYmxlUHJvZHVjdCxcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yaWVzOiB0aGlzLnByb3BzLnByb2R1Y3RDYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBwcm9kdWN0U3ViQ2F0ZWdvcmllczogdGhpcy5wcm9wcy5wcm9kdWN0U3ViQ2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6ICcnLFxyXG4gICAgICAgICAgICBzdWJfY2F0ZWdvcnlfaWQ6ICcnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeV9vcHRpb25zOiBwcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9ucyxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2xpc3Q6IHByb2R1Y3Rfc3ViX2NhdGVnb3JpZXNfb3B0aW9ucyxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3J5X29wdGlvbnM6IFtdLFxyXG5cclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlEaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicsXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG5cclxuICAgICAgICAgICAgcHJvZHVjdFRhZ3M6IHRoaXMucHJvcHMucHJvZHVjdFRhZ3MsXHJcblxyXG4gICAgICAgICAgICB3YXJyYW50eVR5cGU6IHRoaXMucHJvcHMud2FycmFudHlUeXBlLFxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogdGhpcy5wcm9wcy5zaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rLFxyXG5cclxuICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5OiB0aGlzLnByb3BzLnZhcmlhdGlvbnNBcnJheSxcclxuICAgICAgICAgICAgaXNWYXJpYXRpb25zU2F2ZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy8gQ3VzdG9tIEZpZWxkc1xyXG4gICAgICAgICAgICBjdXN0b21GaWVsZHNBcnJheTogW10sXHJcblxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIGltYWdlUHJldmlld0FycmF5OiBbXSxcclxuICAgICAgICAgICAgLy8gRGFuZ2Vyb3VzIEdvb2RzXHJcbiAgICAgICAgICAgIGRhbmdlcm91c0dvb2RzQXJyYXk6IHRoaXMucHJvcHMuZGFuZ2Vyb3VzR29vZHNBcnJheSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0dGluZyBQcm9kdWN0IENhdGVnb3JpZXMgZnJvbSBEQlxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvY2F0ZWdvcmllcy9jYXRlZ29yaWVzJztcclxuICAgICAgICBjb25zdCB1cmxfMSA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL2NhdGVnb3JpZXMvZmllbGRzJztcclxuICAgICAgICBjb25zdCB1cmxfMiA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL2NhdGVnb3JpZXMvdGFncyc7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKClcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbXBvbmVudCA9IHRoaXM7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogYXdhaXQgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSgpIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X29wdGlvbnM6IHJlc3BvbnNlLmRhdGEuY2F0ZWdvcnkuZG9jcyxcclxuICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9saXN0OiByZXNwb25zZS5kYXRhLnN1Yl9jYXRlZ29yeS5kb2NzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZXJvcmllc18xIEZldGNoaWcgRXJyb3I6ICcsIGVycm9yKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCh1cmxfMSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogdG9rZW4gfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWVsZHM6JywgcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z1Y2s6JywgZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KCdmaWVsZHMgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KHVybF8yLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiB0b2tlbiB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RhZ3M6JywgcmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoJ3RhZ3MgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGxvYWRQcm9kdWN0KHZhbHVlcywgY3VycmVudENvbXBvbmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZXM6ICcsIHZhbHVlcylcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9uYW1lJywgdmFsdWVzLnByb2R1Y3RfbmFtZSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RfZGVzY3JpcHRpb24nLCB2YWx1ZXMucHJvZHVjdF9kZXNjcmlwdGlvbilcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RfdHlwZScsIHZhbHVlcy5wcm9kdWN0X3R5cGUpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdza3UnLCB2YWx1ZXMuc2t1KVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9wcmljZScsIHZhbHVlcy5wcm9kdWN0X3ByaWNlKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9pbl9zdG9jaycsIHZhbHVlcy5wcm9kdWN0X2luX3N0b2NrKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9icmFuZF9uYW1lJywgdmFsdWVzLnByb2R1Y3RfYnJhbmRfbmFtZSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RfaW1hZ2VfbGluaycsICcnKVxyXG4gICAgICAgIHZhbHVlcy5wcm9kdWN0X2ltYWdlX2xpbmsgJiYgdmFsdWVzLnByb2R1Y3RfaW1hZ2VfbGluay5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ215SW1hZ2UnLCBlbGVtZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmFsdWVzLnByb2R1Y3RfdmFyaWF0aW9ucyAmJiB2YWx1ZXMucHJvZHVjdF92YXJpYXRpb25zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBlbGVtZW50LmltYWdlX2xpbmsgJiYgZWxlbWVudC5pbWFnZV9saW5rLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ215SW1hZ2UnLCBmaWxlKVxyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCh7IG5hbWU6IGZpbGUubmFtZSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBlbGVtZW50LmltYWdlX2xpbmsgPSBhcnJheVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X3dhcnJhbnR5JywgdmFsdWVzLnByb2R1Y3Rfd2FycmFudHkpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd3YXJyYW50eV90eXBlJywgdmFsdWVzLndhcnJhbnR5X3R5cGUpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X2Rpc2NvdW50JywgdmFsdWVzLnByb2R1Y3RfZGlzY291bnQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwdXJjaGFzZV9ub3RlJywgdmFsdWVzLnB1cmNoYXNlX25vdGUpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X3ZhcmlhdGlvbnMnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZXMucHJvZHVjdF92YXJpYXRpb25zKSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3Rfd2VpZ2h0JywgdmFsdWVzLnByb2R1Y3Rfd2VpZ2h0KVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGltZW5zaW9uX2xlbmd0aCcsIHZhbHVlcy5kaW1lbnNpb25fbGVuZ3RoKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGltZW5zaW9uX3dpZHRoJywgdmFsdWVzLmRpbWVuc2lvbl93aWR0aClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RpbWVuc2lvbl9oZWlnaHQnLCB2YWx1ZXMuZGltZW5zaW9uX2hlaWdodClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NoaXBwaW5nX2NoYXJnZXMnLCB2YWx1ZXMuc2hpcHBpbmdfY2hhcmdlcylcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2hhbmRsaW5nX2ZlZScsIHZhbHVlcy5oYW5kbGluZ19mZWUpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjdXN0b21fZmllbGRzJywgSlNPTi5zdHJpbmdpZnkodmFsdWVzLmN1c3RvbV9maWVsZHMpKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnlfaWQnLCB2YWx1ZXMuY2F0ZWdvcnlfaWQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdWJfY2F0ZWdvcnlfaWQnLCB2YWx1ZXMuc3ViX2NhdGVnb3J5X2lkKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGFuZ2Vyb3VzX2dvb2RzJywgSlNPTi5zdHJpbmdpZnkodmFsdWVzLmRhbmdlcm91c19nb29kcykpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X3RhZ3MnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZXMucHJvZHVjdF90YWdzKSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNVcGRhdGVQcm9kdWN0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzL2FkZCdcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QodXJsLCBmb3JtRGF0YSwgY29uZmlnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dUb2FzdDogdHJ1ZSwgdG9hc3RNZXNzYWdlOiAnUHJvZHVjdCBVcGxvYWRlZCBTdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2R1Y3QgVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArIGAvYXBpL3Byb2R1Y3RzLyR7dGhpcy5zdGF0ZS5faWR9YFxyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQodXJsLCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgc2hvd1RvYXN0OiB0cnVlLCB0b2FzdE1lc3NhZ2U6ICdQcm9kdWN0IFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2R1Y3QgVXBkYXRlIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3VzdG9tIEZpZWxkc1xyXG4gICAgaGFuZGxlU2F2ZUN1c3RvbUZpZWxkc0J0bkNsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpXHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY3VzdG9tX2ZpZWxkcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSwgY3VzdG9tRmllbGRzQXJyYXk6IFtdIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBQcm9kdWN0IENhdGVnb3J5XHJcbiAgICBoYW5kbGVQcm9kdWN0Q2F0ZWdvcnlDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgYXJyYXkgPSBbXVxyXG4gICAgICAgIGxldCBfaWQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yeV9vcHRpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sYWJlbCA9PSBlbGVtZW50LmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBfaWQgPSBlbGVtZW50Ll9pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yeV9saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNhdGVnb3J5X2lkID09IF9pZCkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChlbGVtZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJvZHVjdENhdGVnb3JpZXM6IHZhbHVlLCBzdWJfY2F0ZWdvcnlfb3B0aW9uczogYXJyYXksXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5RGlzYWJsZWQ6IGZhbHNlLCBjYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IF9pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUHJvZHVjdFN1YkNhdGVnb3J5Q2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IF9pZCA9IG51bGxcclxuICAgICAgICB0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yeV9vcHRpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sYWJlbCA9PSBlbGVtZW50LmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBfaWQgPSBlbGVtZW50Ll9pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJvZHVjdFN1YkNhdGVnb3JpZXM6IHZhbHVlLFxyXG4gICAgICAgICAgICBzdWJDYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgc3ViX2NhdGVnb3J5X2lkOiBfaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEYW5nZXJvdXMgR29vZHNcclxuICAgIGhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHsgdmFsdWU6IG5hbWUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYW5nZXJvdXNHb29kc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvZHVjdCBUYWdzXHJcbiAgICBoYW5kbGVQcm9kdWN0VGFnQ2hhbmdlID0gKGFycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0VGFnczogYXJyIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgYXN5bmMgZmlsZVNlbGVjdGVkSGFuZGxlcihlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiBbLi4udGhpcy5zdGF0ZS5maWxlcywgLi4uZS50YXJnZXQuZmlsZXNdIH0pXHJcblxyXG4gICAgICAgIGxldCBhcnJheSA9IFtdXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5maWxlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKFVSTC5jcmVhdGVPYmplY3RVUkwoZWxlbWVudCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlUHJldmlld0FycmF5OiBhcnJheSB9KVxyXG4gICAgfVxyXG4gICAgZGVsZXRlSW1hZ2UgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmZpbGVzKVxyXG4gICAgICAgIGNvbnN0IGltZ0NvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuaW1hZ2VQcmV2aWV3QXJyYXkpXHJcbiAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBpbWdDb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogY29weUFycmF5LCBpbWFnZVByZXZpZXdBcnJheTogaW1nQ29weUFycmF5IH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNVcGRhdGVQcm9kdWN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiB0aGlzLnByb3BzLnByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IHRoaXMucHJvcHMucHJvZHVjdF9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZTogdGhpcy5wcm9wcy5wcm9kdWN0X3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3U6IHRoaXMucHJvcHMuc2t1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZTogdGhpcy5wcm9wcy5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9jazogdGhpcy5wcm9wcy5wcm9kdWN0X2luX3N0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lOiB0aGlzLnByb3BzLnByb2R1Y3RfYnJhbmRfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfaW1hZ2VfbGluazp0aGlzLnByb3BzLnByb2R1Y3RfaW1hZ2VfbGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHk6IHRoaXMucHJvcHMucHJvZHVjdF93YXJyYW50eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGU6IHRoaXMucHJvcHMud2FycmFudHlfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnQ6IHRoaXMucHJvcHMucHJvZHVjdF9kaXNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGU6IHRoaXMucHJvcHMucHVyY2hhc2Vfbm90ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfdmFyaWF0aW9uczp0aGlzLnByb3BzLnByb2R1Y3RfdmFyaWF0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0OiB0aGlzLnByb3BzLnByb2R1Y3Rfd2VpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aDogdGhpcy5wcm9wcy5kaW1lbnNpb25fbGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoOiB0aGlzLnByb3BzLmRpbWVuc2lvbl93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHQ6IHRoaXMucHJvcHMuZGltZW5zaW9uX2hlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXM6IHRoaXMucHJvcHMuc2hpcHBpbmdfY2hhcmdlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZTogdGhpcy5wcm9wcy5oYW5kbGluZ19mZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGU6ICdzaW1wbGUtcHJvZHVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW5fc3RvY2s6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2ltYWdlX2xpbms6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ZhcmlhdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21fZmllbGRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jYXRlZ29yeV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNfZ29vZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90YWdzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0Q2F0ZWdvcmllcyA9PSAnJyB8fCB0aGlzLnN0YXRlLnByb2R1Y3RTdWJDYXRlZ29yaWVzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZHVjdFN1YkNhdGVnb3JpZXMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJDYXRlZ29yeUVycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZXMucHJvZHVjdF90eXBlICE9ICd2YXJpYWJsZS1wcm91Y3QnICYmICh2YWx1ZXMucHJvZHVjdF9wcmljZSA9PSAnJyB8fCB2YWx1ZXMucHJvZHVjdF9pbl9zdG9jayA9PSAnJyB8fCB0aGlzLnN0YXRlLmZpbGVzID09ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNWYXJpYXRpb25zU2F2ZWQgPT0gZmFsc2UgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmNhdGVnb3J5X2lkID0gdGhpcy5zdGF0ZS5jYXRlZ29yeV9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5zdWJfY2F0ZWdvcnlfaWQgPSB0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yeV9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3RhZ3MgPSB0aGlzLnN0YXRlLnByb2R1Y3RUYWdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5kYW5nZXJvdXNfZ29vZHMgPSB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfaW1hZ2VfbGluayA9IHRoaXMuc3RhdGUuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmN1c3RvbV9maWVsZHMgPSB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pdGVtLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiBlLm5hbWUsIHZhbHVlOiBlLnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbV8xID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jdXN0b21fZmllbGRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXzEucHVzaCh7IG5hbWU6IGUubmFtZSwgdmFsdWU6IGUudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2goeyBpdGVtOiBpdGVtLCBjdXN0b21fZmllbGRzOiBpdGVtXzEsIHByaWNlOiBlbGVtZW50LnByaWNlLCBzdG9jazogZWxlbWVudC5zdG9jaywgaW1hZ2VfbGluazogZWxlbWVudC5pbWFnZV9saW5rIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF92YXJpYXRpb25zID0gYXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51cGxvYWRQcm9kdWN0KHZhbHVlcywgdGhpcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0OiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yaWVzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFN1YkNhdGVnb3JpZXM6ICcnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcnlEaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViU3ViQ2F0ZWdvcnlEaXNhYmxlZDogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRhZ3M6IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlUeXBlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWF0aW9uc1NhdmVkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk6IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGFuZ2Vyb3VzIEdvb2RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c0dvb2RzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBpc1ZhbGlkLCBlcnJvcnMsIGhhbmRsZUJsdXIsIGlzU3VibWl0dGluZ1xyXG4gICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlUm93IGljb249e2ZhUGx1c30gdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc1VwZGF0ZVByb2R1Y3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBzdHlsZT17eyBtYXJnaW46ICcgMCUgMiUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gY2xhc3NOYW1lPVwibXItYXV0b1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFja30+QmFjazwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0+IHt0aGlzLnByb3BzLnByb2R1Y3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gb25DbGljaz17dGhpcy5wcm9wcy52aWV3fT4gVmlldyA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmRlbGV0ZX0+IERlbGV0ZSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dUb2FzdDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd1RvYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdWNjZXNzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17dGhpcy5zdGF0ZS50b2FzdE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25OYW1lPXtmYVRodW1ic1VwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCIjMDBiMzAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93VmFyaWF0aW9uc0Vycm9yQWxlcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J0Vycm9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17J1BsZWFzZSBBZGQvU2F2ZSBWYXJpYXRpb25zIEZpcnN0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9e2ZhRXhjbGFtYXRpb25UcmlhbmdsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiI2ZmMzMzM1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J0Vycm9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17J0VudGVyIFByaWNlL1N0b2NrL0ltYWdlKHMpIGluIEdlbmVyYWwgVGFiIEZpcnN0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9e2ZhRXhjbGFtYXRpb25UcmlhbmdsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiI2ZmMzMzM1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzElJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17OX0gbWQ9ezl9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IE5hbWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17eyBtYXJnaW46ICcwLjUlIDIlIDIlIDIlJywgcGFkZGluZzogJzAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IE5hbWU8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByb2R1Y3RfbmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2Vycm9ycy5wcm9kdWN0X25hbWUgJiYgdG91Y2hlZC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgTmFtZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBEaXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBEaXNjcnVwdGlvbid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByb2R1Y3RfZGVzY3JpcHRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlcnJvcnMucHJvZHVjdF9kZXNjcmlwdGlvbiAmJiB0b3VjaGVkLnByb2R1Y3RfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgRGF0YSBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VwZGF0ZVByb2R1Y3Q9e3RoaXMucHJvcHMuaXNVcGRhdGVQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlSGFuZGxlcj17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ3ZhcmlhYmxlLXByb3VjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdD17dGhpcy5zdGF0ZS5pc1ZhcmlhYmxlUHJvZHVjdH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfdHlwZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3ByaWNlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2VfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9wcmljZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja192YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2luX3N0b2NrIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW5fc3RvY2tfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9pbl9zdG9ja31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfYnJhbmRfbmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWVfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9icmFuZF9uYW1lfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVNlbGVjdGVkSGFuZGxlcj17dGhpcy5maWxlU2VsZWN0ZWRIYW5kbGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VQcmV2aWV3QXJyYXk9e3RoaXMuc3RhdGUuaW1hZ2VQcmV2aWV3QXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSW1hZ2U9e3RoaXMuZGVsZXRlSW1hZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHlfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF93YXJyYW50eSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3Rfd2FycmFudHl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGVfdmFsdWVzPXt2YWx1ZXMud2FycmFudHlfdHlwZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX2Vycm9ycz17ZXJyb3JzLndhcnJhbnR5X3R5cGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnRfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF9kaXNjb3VudCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfZGlzY291bnR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV92YWx1ZXM9e3ZhbHVlcy5za3UgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X2Vycm9ycz17ZXJyb3JzLnNrdX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHRfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF93ZWlnaHQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHRfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF93ZWlnaHR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9sZW5ndGhfdmFsdWVzPXt2YWx1ZXMuZGltZW5zaW9uX2xlbmd0aCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl9sZW5ndGh9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25fd2lkdGggfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl93aWR0aH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25faGVpZ2h0IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHRfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX2hlaWdodH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlc192YWx1ZXM9e3ZhbHVlcy5zaGlwcGluZ19jaGFyZ2VzIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzPXtlcnJvcnMuc2hpcHBpbmdfY2hhcmdlc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX3ZhbHVlcz17dmFsdWVzLmhhbmRsaW5nX2ZlZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGluZ19mZWVfZXJyb3JzPXtlcnJvcnMuaGFuZGxpbmdfZmVlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX3ZhbHVlcz17dmFsdWVzLnB1cmNoYXNlX25vdGUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZV9lcnJvcnM9e2Vycm9ycy5wdXJjaGFzZV9ub3RlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29sb3JDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RDb2xvckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2l6ZUNoYW5nZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdFNpemVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheT17dGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFyaWF0aW9uc0FycmF5PXsoYXJyKSA9PiB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBhcnIgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFyaWF0aW9uc1NhdmVkPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYXRpb25zU2F2ZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IERhdGEgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEN1c3RvbSBGaWVsZHMgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydDdXN0b20gRmllbGRzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHNBcnJheT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRzQXJyYXlIYW5kbGVyPXsoYXJyKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRzQXJyYXk6IGFyciB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuaXNWYXJpYWJsZVByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVDdXN0b21GaWVsZHM9e3RoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5ID09ICcnICYmIHRoaXMuc3RhdGUuaXNWYXJpYWJsZVByb2R1Y3QgPT0gdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUN1c3RvbUZpZWxkc0hhbmRsZXI9e3RoaXMuaGFuZGxlU2F2ZUN1c3RvbUZpZWxkc0J0bkNsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgQ3VzdG9tIEZpZWxkcyBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17M30gbWQ9ezN9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IENhdGVnb3J5ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydQcm9kdWN0IENhdGVnb3JpZXMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+Q2F0ZWdvcnk8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNhdGVnb3J5RXJyb3JEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e0dsb2JhbFN0eWxlU2hlZXQucmVhY3Rfc2VsZWN0X3N0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0Q2F0ZWdvcnlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jYXRlZ29yeV9vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlN1YiBDYXRlZ29yeTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlFcnJvckRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRJZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17R2xvYmFsU3R5bGVTaGVldC5yZWFjdF9zZWxlY3Rfc3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RTdWJDYXRlZ29yeUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnN1Yl9jYXRlZ29yeV9vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RTdWJDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdWIgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlEaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzE1MHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgYXRlZ29yeSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRGFuZ2Vyb3VzIEdvb2RzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRBY2NvcmRpb24gdGl0bGU9eydEYW5nZXJvdXMgR29vZHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90X3NwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm90IFNwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSAmJiB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICdOb3QtU3BlY2lmaWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ05vdC1TcGVjaWZpZWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjZXJhbWljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDZXJhbWljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5ICYmIHRoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUgPT0gJ0NlcmFtaWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnQ2VyYW1pYycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSAmJiB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICdHbGFzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdHbGFzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZXRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSAmJiB0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICdNZXRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdNZXRhbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYXN0aWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsYXN0aWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhbmdlcm91c0dvb2RzQXJyYXkgJiYgdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSAnUGxhc3RpYycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZURhbmdlcm91c0dvb2RzQ2hhbmdlKGUsICdQbGFzdGljJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2ZEYW5nZXJvdXMgR29vZHMgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgVGFncyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnUHJvZHVjdCBUYWdzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17JzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPXsnMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eycxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0VGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBEcm9wZG93bkluZGljYXRvcjogbnVsbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e0dsb2JhbFN0eWxlU2hlZXQucmVhY3Rfc2VsZWN0X3N0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdFRhZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGFuZCBwcmVzcyBlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzE1MHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBUYWdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZvcm0gU3VibWl0IEJ0biBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30gYmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAnVXBsb2FkaW5nJyA6ICdVcGxvYWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiIHNpemU9XCJzbVwiIC8+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgRm9ybSBTdWJtaXQgQnRuIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWRCb3JkZXJEaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjREMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQm9yZGVyRGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrID5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmNhcmRfaGVhZGVyX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5jYXJkX2hlYWRlcl9iYWNrZ3JvdW5kfWAsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIHZhcmlhdGlvbnNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXc7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new.js */")));
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
//# sourceMappingURL=admin.js.739e7e28f8f3814dbed9.hot-update.js.map