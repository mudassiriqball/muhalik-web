webpackHotUpdate("static\\development\\pages\\vendor.js",{

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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-select-material-ui */ "./node_modules/react-select-material-ui/lib/index.js");
/* harmony import */ var react_select_material_ui__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_select_material_ui__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../toast */ "./src/pages/components/toast.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");
/* harmony import */ var _add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add-new-contents/custom-fields */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/custom-fields.js");
/* harmony import */ var _add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-new-contents/product-data */ "./src/pages/components/vendor/dashboard/dashboard-contents/product-contents/add-new-contents/product-data.js");
/* harmony import */ var _sdk_consts_product_size_options__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../sdk/consts/product-size-options */ "./src/sdk/consts/product-size-options.js");
/* harmony import */ var _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../sdk/consts/product-color-options */ "./src/sdk/consts/product-color-options.js");










var _yup$object,
    _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\vendor\\dashboard\\dashboard-contents\\product-contents\\add-new.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




















var product_attributes_list = [{
  value: 'Size',
  label: 'Size'
}, {
  value: 'Color',
  label: 'Color'
}, {
  value: 'Price',
  label: 'Price'
}]; // Option List for select Product Category (when offline)

var product_categories = [{
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
  product_in_stock: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(1, "Must grater than 1 digit").max(1000000, "Can't be longer than 1000000"),
  product_brand_name: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters"),
  product_image_link: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  product_warranty: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-200').max(200, 'Enter Between 0-200'),
  warranty_type: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  product_discount: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100'),
  // => Attributes (Variable Product)
  purchase_note: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  // => Variations (Variable Product)
  product_variations: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  // => Shipping
  product_weight: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_length: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_width: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_height: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  shipping_charges: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100'),
  handling_fee: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100")
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "purchase_note", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "custom_fields", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_category", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "dangerous_goods", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_tags", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), _yup$object));

var AddNew = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddNew, _Component);

  var _super = _createSuper(AddNew);

  function AddNew(props) {
    var _this$state;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddNew);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductTagChange", function (arr) {
      _this.setState({
        productTags: arr
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductCategoryChange", function (arr) {
      _this.setState({
        productCategories: arr,
        categoryError: 'no_error',
        categoryErrorDiv: 'BorderDiv'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSimpleProductImageLinkChange", function (arr, actionMeta) {
      _this.setState({
        simple_product_image_link: arr,
        image_linkError: 'no_error',
        image_linkErrorDiv: 'BorderDiv'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSimpleProductImageLinkInputChange", function (aa) {
      _this.setState({
        inputValue: aa
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSimpleProductImage_linkKeyDown", function (event) {
      var inputValue = _this.state.inputValue;
      var simple_product_image_link = _this.state.simple_product_image_link;
      if (!inputValue) return;

      switch (event.key) {
        case 'Enter':
        case 'Tab':
          _this.setState({
            inputValue: '',
            simple_product_image_link: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(simple_product_image_link), [createOption(inputValue)])
          });

          event.preventDefault();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductAttributeValueChange", function (e) {
      _this.setState({
        productAttributeValue: e.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleAddProductAttributeClicked", function () {
      if (_this.state.productAttributeName != '' && _this.state.productAttributeValue != '') {
        _this.setState({
          productAttributeError: ''
        });

        var copyArray = Object.assign([], _this.state.productAttributesArray);
        copyArray.push({
          productAttributeName: _this.state.productAttributeName,
          productAttributeValue: _this.state.productAttributeValue
        });

        _this.setState({
          productAttributeName: ''
        });

        _this.setState({
          productAttributeValue: ''
        });

        _this.setState({
          productAttributeNameSelected: ''
        });

        _this.setState({
          productAttributesArray: copyArray
        });
      } else {
        _this.setState({
          productAttributeError: 'Enter Field Name and Value'
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSaveProductAttributesClicked", function () {
      var allArrays = [];

      _this.state.productAttributesArray.forEach(function (element) {
        var trim = element.productAttributeValue.split(' ').join('');
        var splitArray = trim.split('|');
        allArrays.push(splitArray);
      });

      var array = _this.allPossibleCases(allArrays);

      var data = [];
      array.forEach(function (element) {
        var split = element.split('-');
        var item = [];
        split.forEach(function (e, i) {
          item.push({
            name: _this.state.productAttributesArray[i].productAttributeName,
            value: e
          });
        });
        data.push({
          items: item,
          price: '',
          stock: '1',
          image_link: '',
          price_error: '',
          image_link_error: ''
        });
      }); // console.log("split Array: ", data)

      _this.setState({
        variationsArray: data
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleUpdateProductAttributeClicked", function (index, name, value) {
      var copyArray = Object.assign([], _this.state.productAttributesArray);
      copyArray[index] = {
        productAttributeName: name,
        productAttributeValue: value
      };

      _this.setState({
        productAttributesArray: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDeleteProductAttributeClicked", function (index) {
      var copyArray = Object.assign([], _this.state.productAttributesArray);
      copyArray.splice(index, 1);

      _this.setState({
        productAttributesArray: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDeleteProductVariationClicked", function (index) {
      var copyArray = Object.assign([], _this.state.variationsArray);
      copyArray.splice(index, 1);

      _this.setState({
        variationsArray: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSamePriceForAllVariationsChanged", function (e) {
      _this.setState({
        samePriceInput: e.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleVariationSamePriceCheckboxChanged", function (e) {
      if (e.target.checked) {
        var copyArray = Object.assign([], _this.state.variationsArray);
        copyArray.forEach(function (element) {
          element.price = _this.state.samePrice;
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleVariationPriceChanged", function (e, index) {
      var copyArray = Object.assign([], _this.state.variationsArray);
      var object = copyArray[index];

      if (e.target.value >= 0) {
        object.price = e.target.value;
        copyArray[index] = object;

        _this.setState({
          variationsArray: copyArray
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleVariationProductInStockChanged", function (e, index) {
      var copyArray = Object.assign([], _this.state.variationsArray);
      var object = copyArray[index];

      if (e.target.value >= 0) {
        object.stock = e.target.value;
        copyArray[index] = object;

        _this.setState({
          variationsArray: copyArray
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleVariationImageLinkChanged", function (e, index) {
      var copyArray = Object.assign([], _this.state.variationsArray);
      var object = copyArray[index];
      object.image_link = e.target.value;
      copyArray[index] = object;

      _this.setState({
        variationsArray: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "saveVariationsClicked", function () {
      var copyArray = Object.assign([], _this.state.variationsArray);
      var flag = true;
      copyArray.forEach(function (element) {
        if (element.price == '' || element.image_link == '') {
          flag = false;

          if (element.price == '') {
            element.price_error = 'Enter price';
          }

          if (element.image_link == '') {
            element.image_link_error = 'Enter Image Link';
          }
        } else {
          element.price_error = '';
          element.image_link_error = '';
        }
      });

      if (flag == true) {
        _this.setState({
          isVariationsSaved: true
        });
      }

      _this.setState({
        variationsArray: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "variationsErrorCheck", function (data) {
      if (data.price_error != '' || data.image_link_error != '') {
        return '1px solid red';
      } else {
        return 'none';
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "customFieldValueChangeHandler", function (e) {
      _this.setState({
        customFieldValue: e.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addCustomFieldBtnClicked", function () {
      if (_this.state.customFieldName != '' && _this.state.customFieldValue != '') {
        _this.setState({
          customFieldError: ''
        });

        var copyArray = Object.assign([], _this.state.customFieldsArray);
        copyArray.push({
          customFieldName: _this.state.customFieldName,
          customFieldValue: _this.state.customFieldValue
        });

        _this.setState({
          customFieldName: ''
        });

        _this.setState({
          customFieldValue: ''
        });

        _this.setState({
          customFieldNameSelected: ''
        });

        _this.setState({
          customFieldsArray: copyArray
        });
      } else {
        _this.setState({
          customFieldError: 'Enter Field Name and Value'
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateCustomFieldsEvent", function (index, name, value) {
      var copyArray = Object.assign([], _this.state.customFieldsArray);
      copyArray[index] = {
        customFieldName: name,
        customFieldValue: value
      };

      _this.setState({
        customFieldsArray: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteCustomFieldsEvent", function (index) {
      var copyArray = Object.assign([], _this.state.customFieldsArray);
      copyArray.splice(index, 1);

      _this.setState({
        customFieldsArray: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDangerousGoodsChange", function (e, name) {
      var copyArray = Object.assign([], _this.state.dangerousGoodsArray);

      if (e.target.checked) {
        copyArray.push(name);
      } else {
        copyArray.forEach(function (element, index) {
          if (element == name) {
            copyArray.splice(index, 1);
          }
        });
      }

      _this.setState({
        dangerousGoodsArray: copyArray
      });
    });

    _this.state = (_this$state = {
      isLoading: false,
      showToast: false,
      showVariationsErrorAlert: false,
      showSimpleProductPriceImgLinkErrorrAlert: false,
      isVariableProduct: false,
      product_categories_options: product_categories,
      productCategories: '',
      categoryError: 'no_error',
      categoryErrorDiv: 'BorderDiv',
      productTags: [],
      warrantyType: 'Year',
      inputValue: '',
      simple_product_image_link: []
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "simple_product_image_link", []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "image_linkError", 'no_error'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "image_linkErrorDiv", 'BorderDiv'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "productAttributesArray", []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "productAttributeName", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "productAttributeValue", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "productAttributeError", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "productAttributeNameSelected", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "variationsArray", []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "isVariationsSaved", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "samePriceInput", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "customFieldsArray", []), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "customFieldName", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "customFieldValue", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "customFieldError", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "customFieldNameSelected", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "dangerousGoodsArray", []), _this$state);
    _this.handleProductTypeChange = _this.handleProductTypeChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.addCustomFieldBtnClicked = _this.addCustomFieldBtnClicked.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); // this.uploadProduct = this.uploadProduct.bind(this);

    return _this;
  } // Getting Product Categories from DB


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddNew, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_23__["default"].PATH + '/api/products-categories/get-all';
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(url));

            case 4:
              response = _context.sent;
              this.setState({
                product_categories_options: response.data.data
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 8]], Promise);
    } //  Submit data to api

  }, {
    key: "uploadProduct",
    value: function uploadProduct(data, currentComponent) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function uploadProduct$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('data: ', data); // const url = MuhalikConfig.PATH + '/api/products/add';
              // await axios.post(url, {
              //     data
              // }, {
              //     headers: { 'authorization': await getUncodededTokenFromStorage() }
              // }).then(function (response) {

              currentComponent.setState({
                isLoading: false
              });
              currentComponent.setState({
                showToast: true
              });
              return _context2.abrupt("return", true);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "handleProductTypeChange",
    value: function handleProductTypeChange(e) {
      if (e.target.value == 'variable-prouct') {
        this.setState({
          isVariableProduct: true
        });
      } else {
        this.setState({
          isVariableProduct: false
        });
      }
    } // Product Attributes

  }, {
    key: "handleProductAttributeNameChange",
    value: function handleProductAttributeNameChange(e) {
      this.setState({
        productAttributeName: e.value
      });
      this.setState({
        productAttributeNameSelected: e
      });
    }
  }, {
    key: "allPossibleCases",
    value: function allPossibleCases(arr) {
      if (arr.length == 1) {
        return arr[0];
      } else {
        var result = [];
        var allCasesOfRest = this.allPossibleCases(arr.slice(1)); // recur with the rest of array

        for (var i = 0; i < allCasesOfRest.length; i++) {
          for (var j = 0; j < arr[0].length; j++) {
            result.push(arr[0][j] + "-" + allCasesOfRest[i]);
          }
        }

        return result;
      }
    }
  }, {
    key: "customFieldNameChangeHandler",
    // Custom Fields
    value: function customFieldNameChangeHandler(e) {
      this.setState({
        customFieldName: e.value
      });
      this.setState({
        customFieldNameSelected: e
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(formik__WEBPACK_IMPORTED_MODULE_12__["Formik"], {
        validationSchema: schema,
        initialValues: {
          // product_name: '',
          // product_description: '',
          // // Product Data
          product_type: 'simple-product' // // => Inventory
          // sku: '',
          // // => General(Simple-Product)
          // product_price: '', product_in_stock: '', product_brand_name: '', product_image_link: '',
          // product_warranty: '', warranty_type: '', product_discount: '',
          // // => Attributes (Variable Product)
          // purchase_note: '',
          // // => Variations (Variable Product)
          // product_variations: '',
          // // => Shipping
          // product_weight: '', dimension_length: '', dimension_width: '',
          // dimension_height: '', shipping_charges: '', handling_fee: '',
          // // => Advanve
          // purchase_note: '',
          // // Custom Fields
          // custom_fields: '',
          // product_category: '',
          // dangerous_goods: '',
          // product_tags: '',

        },
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting,
              resetForm = _ref.resetForm;

          if (_this2.state.productCategories == '' || _this2.state.simple_product_image_link == '' && values.product_type == 'simple-product') {
            // if (this.state.customFieldNameArray == '') {
            //     this.setState({ categoryError: "error", categoryErrorDiv: 'RedBorderDiv' });
            // }
            if (_this2.state.productCategories == '') {
              _this2.setState({
                categoryError: "error",
                categoryErrorDiv: 'RedBorderDiv'
              });
            }

            if (_this2.state.simple_product_image_link == '' && values.product_type == 'simple-product') {
              _this2.setState({
                showSimpleProductPriceImgLinkErrorrAlert: true,
                image_linkError: "error",
                image_linkErrorDiv: 'RedBorderDiv'
              });
            }

            setSubmitting(false);
          } else if (_this2.state.isVariationsSaved == false && values.product_type == 'variable-prouct') {
            _this2.setState({
              showVariationsErrorAlert: true
            });
          } else {
            resetForm();
            setSubmitting(true);

            _this2.setState({
              isLoading: true
            });

            setTimeout(function () {
              var array = [];

              _this2.state.productCategories.forEach(function (element) {
                array.push(element.value);
              });

              values.product_category = array;
              array = [];

              _this2.state.productTags.forEach(function (element) {
                array.push(element.value);
              });

              values.product_tags = array;
              values.dangerous_goods = _this2.state.dangerousGoodsArray;

              if (values.product_type == 'simple-product') {
                array = [];

                _this2.state.simple_product_image_link.forEach(function (element) {
                  array.push(element.value);
                });

                values.product_image_link = array;
              } else {
                array = [];

                _this2.state.variationsArray.forEach(function (element) {
                  var item = [];
                  array.push(element.value);
                });

                values.product_variations = array;
                values.custom_fields = _this2.state.customFieldsArray;
              }

              console.log('values: ', values);
              resetForm();

              if (_this2.uploadProduct(values, _this2)) {
                _this2.setState({
                  productCategories: '',
                  categoryError: 'no_error',
                  categoryErrorDiv: 'BorderDiv',
                  productTags: [],
                  warrantyType: 'Year',
                  inputValue: '',
                  simple_product_image_link: [],
                  image_linkError: 'no_error',
                  image_linkErrorDiv: 'BorderDiv',
                  isVariableProduct: false,
                  productAttributesArray: [],
                  productAttributeName: '',
                  productAttributeValue: '',
                  productAttributeError: '',
                  variationsArray: [],
                  isVariationsSaved: false,
                  customFieldsArray: [],
                  customFieldName: '',
                  customFieldValue: '',
                  customFieldError: ''
                });
              }

              setSubmitting(false);
            }, 500);
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.title_row,
          noGutters: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577,
            columnNumber: 33
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
          style: styles.title_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578,
            columnNumber: 37
          }
        }), __jsx("div", {
          style: styles.title,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579,
            columnNumber: 37
          }
        }, " Add New Product")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 581,
            columnNumber: 33
          }
        }, _this2.state.showToast ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_21__["default"], {
          onCloseHandler: function onCloseHandler(e) {
            return _this2.setState({
              showToast: false
            });
          },
          show: _this2.state.showToast,
          header: 'Success',
          message: 'Product Uploaded Successfully',
          iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faThumbsUp"],
          color: "green",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 61
          }
        }) : null, _this2.state.showVariationsErrorAlert ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_21__["default"], {
          onCloseHandler: function onCloseHandler(e) {
            return _this2.setState({
              showVariationsErrorAlert: false
            });
          },
          show: _this2.state.showVariationsErrorAlert,
          header: 'Error',
          message: 'Please Add/Save Variations First',
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faExclamationTriangle"],
          color: "red",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 588,
            columnNumber: 41
          }
        }) : null, _this2.state.showSimpleProductPriceImgLinkErrorrAlert ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_21__["default"], {
          onCloseHandler: function onCloseHandler(e) {
            return _this2.setState({
              showSimpleProductPriceImgLinkErrorrAlert: false
            });
          },
          show: _this2.state.showSimpleProductPriceImgLinkErrorrAlert,
          header: 'Error',
          message: 'Enter Price/Image Link in General Tab First',
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faExclamationTriangle"],
          color: "red",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 41
          }
        }) : null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          noGutters: true,
          style: {
            paddingTop: '2%'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 599,
            columnNumber: 37
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 9,
          md: 9,
          sm: 12,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 600,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 602,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 603,
            columnNumber: 49
          }
        }, "Product Name", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 603,
            columnNumber: 94
          }
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 604,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          type: "text",
          placeholder: "Enter Product Name",
          name: "product_name",
          value: values.product_name || '',
          onChange: handleChange,
          isInvalid: touched.product_name && errors.product_name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 605,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 613,
            columnNumber: 53
          }
        }, errors.product_name))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"], {
          style: {
            width: '100%'
          },
          defaultActiveKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 621,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 622,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 624,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 625,
            columnNumber: 61
          }
        }, "Product Discruption"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Toggle, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"],
          size: "sm",
          eventKey: "0",
          style: {
            "float": 'right',
            background: 'none'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 626,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 627,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 630,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 631,
            columnNumber: 61
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 632,
            columnNumber: 65
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
          as: "textarea",
          placeholder: "Enter Product Description",
          name: "product_description",
          value: values.product_description || '',
          rows: "7",
          onChange: handleChange,
          isInvalid: touched.product_description && errors.product_description,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633,
            columnNumber: 69
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 642,
            columnNumber: 69
          }
        }, errors.product_description))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 652,
            columnNumber: 45
          }
        }, __jsx(_add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_26__["default"], {
          productTypeHandler: _this2.handleProductTypeChange,
          isVariableProduct: _this2.state.isVariableProduct,
          product_type_values: values.product_type || '',
          product_price_values: values.product_price || '',
          product_price_touched: touched.product_price,
          product_price_errors: errors.product_price,
          product_in_stock_values: values.product_in_stock || '',
          product_in_stock_touched: touched.product_in_stock,
          product_in_stock_errors: errors.product_in_stock,
          product_brand_name_values: values.product_brand_name || '',
          product_brand_name_touched: touched.product_brand_name,
          product_brand_name_errors: errors.product_brand_name,
          imageLink: _this2.state.simple_product_image_link,
          simpleProductImageLinkHandler: _this2.handleSimpleProductImageLinkChange.bind(_this2),
          inputValue: _this2.state.inputValue,
          simpleProductImageLinkInputChangeHandler: _this2.handleSimpleProductImageLinkInputChange.bind(_this2),
          simpleProductImageLinkhandleKeyDownHandler: _this2.handleSimpleProductImage_linkKeyDown.bind(_this2),
          simpleProductError: _this2.state.showSimpleProductPriceImgLinkErrorrAlert,
          product_warranty_values: values.product_warranty || '',
          product_warranty_touched: touched.product_warranty,
          product_warranty_errors: errors.product_warranty,
          warranty_type_values: values.warranty_type || '',
          warranty_type_touched: touched.warranty_type,
          warranty_type_errors: errors.warranty_type,
          product_discount_values: values.product_discount || '',
          product_discount_touched: touched.product_discount,
          product_discount_errors: errors.product_discount,
          sku_values: values.sku || '',
          sku_touched: touched.sku,
          sku_errors: errors.sku,
          product_weight_values: values.product_weight || '',
          product_weight_touched: touched.product_weight,
          product_weight_errors: errors.product_weight,
          dimension_length_values: values.dimension_length || '',
          dimension_length_touched: touched.dimension_length,
          dimension_length_errors: errors.dimension_length,
          dimension_width_values: values.dimension_width || '',
          dimension_width_touched: touched.dimension_width,
          dimension_width_errors: errors.dimension_width,
          dimension_height_values: values.dimension_height || '',
          dimension_height_touched: touched.dimension_height,
          dimension_height_errors: errors.dimension_height,
          shipping_charges_values: values.shipping_charges || '',
          shipping_charges_touched: touched.shipping_charges,
          shipping_charges_errors: errors.shipping_charges,
          handling_fee_values: values.handling_fee || '',
          handling_fee_touched: touched.handling_fee,
          handling_fee_errors: errors.handling_fee,
          purchase_note_values: values.purchase_note || '',
          purchase_note_touched: touched.purchase_note,
          purchase_note_errors: errors.purchase_note,
          onChange: handleChange,
          touched: touched,
          errors: errors,
          productColorChangeHandler: _this2.handleProductColorChange // size={this.state.size}
          ,
          productSizeChangeHandler: _this2.handleProductSizeChange,
          attributesArray: _this2.state.productAttributesArray,
          name: _this2.state.productAttributeName,
          value: _this2.state.productAttributeValue,
          productAttributeNameSelected: _this2.state.productAttributeNameSelected,
          attributeNameHandler: _this2.handleProductAttributeNameChange.bind(_this2),
          attributeValueHandler: _this2.handleProductAttributeValueChange.bind(_this2),
          addAttributeHandler: _this2.handleAddProductAttributeClicked.bind(_this2),
          update: _this2.handleUpdateProductAttributeClicked.bind(_this2),
          deleteAttributeHandler: _this2.handleDeleteProductAttributeClicked.bind(_this2),
          deleteVariationHandler: _this2.handleDeleteProductVariationClicked.bind(_this2),
          saveVariationsHandler: _this2.saveVariationsClicked.bind(_this2),
          variationsErrorHandler: _this2.variationsErrorCheck.bind(_this2),
          error: _this2.state.productAttributeError,
          saveAttributesHandler: _this2.handleSaveProductAttributesClicked,
          variationsArray: _this2.state.variationsArray,
          variationPriceHandler: _this2.handleVariationPriceChanged.bind(_this2),
          variationStockHandler: _this2.handleVariationProductInStockChanged.bind(_this2),
          variationImageLinkHandler: _this2.handleVariationImageLinkChanged.bind(_this2),
          priceCheckboxHandler: _this2.handleVariationSamePriceCheckboxChanged.bind(_this2),
          samePrice: _this2.state.samePriceInput,
          samePriceForAllVariationsHandler: _this2.handleSamePriceForAllVariationsChanged.bind(_this2),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 653,
            columnNumber: 49
          }
        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 756,
            columnNumber: 45
          }
        }, __jsx(_add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_25__["default"], {
          customFieldsArray: _this2.state.customFieldsArray,
          isVariableProduct: _this2.state.isVariableProduct,
          name: _this2.state.customFieldName,
          value: _this2.state.customFieldValue,
          customFieldNameSelected: _this2.state.customFieldNameSelected,
          fieldNameHandler: _this2.customFieldNameChangeHandler.bind(_this2),
          fieldValueHandler: _this2.customFieldValueChangeHandler.bind(_this2),
          addFieldHandler: _this2.addCustomFieldBtnClicked.bind(_this2),
          update: _this2.updateCustomFieldsEvent.bind(_this2),
          "delete": _this2.deleteCustomFieldsEvent.bind(_this2),
          error: _this2.state.customFieldError,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 757,
            columnNumber: 49
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 3,
          md: 3,
          sm: 12,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 774,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"], {
          style: {
            width: '100%'
          },
          defaultActiveKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 776,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 777,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 778,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 779,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 780,
            columnNumber: 61
          }
        }, "Product Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Toggle, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"],
          size: "sm",
          eventKey: "0",
          style: {
            "float": 'right',
            background: 'none'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 781,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 782,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 785,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          style: {
            height: '250px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 786,
            columnNumber: 61
          }
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + (_this2.state.categoryErrorDiv || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 787,
            columnNumber: 65
          }
        }, __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_19__["default"], {
          isMulti: true,
          onChange: _this2.handleProductCategoryChange,
          options: _this2.state.product_categories_options,
          value: _this2.state.productCategories,
          placeholder: "Select/Enter Category",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 788,
            columnNumber: 69
          }
        })), __jsx("label", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + (_this2.state.categoryError || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 796,
            columnNumber: 65
          }
        }, "Selet Category")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"], {
          style: {
            width: '100%'
          },
          defaultActiveKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 807,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 808,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 809,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 810,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 811,
            columnNumber: 61
          }
        }, "Dangerous Goods"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Toggle, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"],
          size: "sm",
          eventKey: "0",
          style: {
            "float": 'right',
            background: 'none'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 812,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 813,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 816,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 817,
            columnNumber: 61
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "not_specified",
          label: "Not Specified",
          style: styles.label,
          onChange: function onChange(e) {
            return _this2.handleDangerousGoodsChange(e, 'Not Specified');
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 818,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 824,
            columnNumber: 65
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "ceramic",
          label: "Ceramic",
          style: styles.label,
          onChange: function onChange(e) {
            return _this2.handleDangerousGoodsChange(e, 'Ceramic');
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 825,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 831,
            columnNumber: 65
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "glass",
          label: "Glass",
          style: styles.label,
          onChange: function onChange(e) {
            return _this2.handleDangerousGoodsChange(e, 'Glass');
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 832,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 838,
            columnNumber: 65
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "metal",
          label: "Metal",
          style: styles.label,
          onChange: function onChange(e) {
            return _this2.handleDangerousGoodsChange(e, 'Metal');
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 839,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 845,
            columnNumber: 65
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "plastic",
          label: "Plastic",
          style: styles.label,
          onChange: function onChange(e) {
            return _this2.handleDangerousGoodsChange(e, 'Plastic');
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 846,
            columnNumber: 65
          }
        })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"], {
          style: {
            width: '100%'
          },
          defaultActiveKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 860,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 861,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 862,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 863,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 864,
            columnNumber: 61
          }
        }, "Product Tags"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Toggle, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"],
          size: "sm",
          eventKey: "0",
          style: {
            "float": 'right',
            background: 'none'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 865,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 866,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 869,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          style: {
            height: '250px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 870,
            columnNumber: 61
          }
        }, __jsx(react_select_creatable__WEBPACK_IMPORTED_MODULE_19__["default"], {
          isMulti: true,
          onChange: _this2.handleProductTagChange,
          options: _sdk_consts_product_color_options__WEBPACK_IMPORTED_MODULE_28__["default"],
          value: _this2.state.productTags,
          placeholder: "Select/Enter Tags",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 871,
            columnNumber: 65
          }
        })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 890,
            columnNumber: 37
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 891,
            columnNumber: 41
          }
        }, __jsx("p", {
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 892,
            columnNumber: 45
          }
        }, "Fields with ", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 892,
            columnNumber: 81
          }
        }, " * "), " are mandatory."), __jsx("p", {
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 893,
            columnNumber: 45
          }
        }, "For adding new size, color, link: Enter text and hit Enter or Tab key"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          type: "submit",
          onSubmit: handleSubmit,
          disabled: _this2.state.isLoading,
          block: true,
          style: styles.submit_btn,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 894,
            columnNumber: 45
          }
        }, _this2.state.isLoading ? 'Uploading' : 'Upload', _this2.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
          animation: "grow",
          size: "sm",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 896,
            columnNumber: 73
          }
        }) : __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 896,
            columnNumber: 114
          }
        }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "3833814464",
          dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color],
          __self: _this2
        }, ".no_error.__jsx-style-dynamic-selector{display:none;}.error.__jsx-style-dynamic-selector{margin-top:4px;color:#DC3545;font-size:14px;display:block;}.RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:0.5px 0px 0.2px 0.5px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color, ";border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXU0QnFDLEFBRzBELEFBR0UsQUFNWSxBQUtmLEFBSUYsQUFHOEIsQUFPdEIsVUFUdEIsRUFKZSxDQWRmLEVBR2tCLEdBeUJILEtBYmYsSUFOa0MsRUFMZixBQXlCbkIsV0FSbUMsSUFoQmpCLGFBS0gsQ0FKZixVQUtBLEdBV3NDLGtDQUNqQixpQkFFdEIsa0JBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFkZC1uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBGb3JtLCBDb2wsIFJvdywgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uLCBUb2FzdCwgQWxlcnQsIE5hdiwgVGFicywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVBsdXMsIGZhS2V5LCBmYVNsaWRlcnNILCBmYVN0b3JlQWx0LCBmYVRydWNrLCBmYVRvb2xzLCBmYURvbGxhclNpZ24sIGZhRXhjbGFtYXRpb25UcmlhbmdsZSwgZmFMaXN0QWx0XHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCB7IGZhVGh1bWJzVXAsIGZhVGh1bWJzRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuaW1wb3J0IFJlYWN0U2VsZWN0TWF0ZXJpYWxVaSBmcm9tIFwicmVhY3Qtc2VsZWN0LW1hdGVyaWFsLXVpXCI7XHJcbmltcG9ydCBTaG93VG9hc3QgZnJvbSAnLi4vLi4vLi4vLi4vdG9hc3QnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgQ3VzdG9tRmllbGRzIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9jdXN0b20tZmllbGRzJztcclxuaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9wcm9kdWN0LWRhdGEnO1xyXG5pbXBvcnQgcHJvZHVjdF9zaXplX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LXNpemUtb3B0aW9ucydcclxuaW1wb3J0IHByb2R1Y3RfY29sb3Jfb3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL3Byb2R1Y3QtY29sb3Itb3B0aW9ucydcclxuXHJcbmNvbnN0IHByb2R1Y3RfYXR0cmlidXRlc19saXN0ID0gW1xyXG4gICAgeyB2YWx1ZTogJ1NpemUnLCBsYWJlbDogJ1NpemUnIH0sXHJcbiAgICB7IHZhbHVlOiAnQ29sb3InLCBsYWJlbDogJ0NvbG9yJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1ByaWNlJywgbGFiZWw6ICdQcmljZScgfSxcclxuXVxyXG5cclxuLy8gT3B0aW9uIExpc3QgZm9yIHNlbGVjdCBQcm9kdWN0IENhdGVnb3J5ICh3aGVuIG9mZmxpbmUpXHJcbmNvbnN0IHByb2R1Y3RfY2F0ZWdvcmllcyA9IFtcclxuICAgIHsgdmFsdWU6ICdTaG9lJywgbGFiZWw6ICdTaG9lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0Nsb3RoJywgbGFiZWw6ICdDbG90aCcgfSxcclxuICAgIHsgdmFsdWU6ICdTaGlydCcsIGxhYmVsOiAnU2hpcnQnIH0sXHJcbiAgICB7IHZhbHVlOiAnUGFudCcsIGxhYmVsOiAnUGFudCcgfVxyXG5dXHJcblxyXG4vLyBGb3IgUmVhY3QtU2VsZWN0XHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxufTtcclxuLy8gTW9kZWwgRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSk7XHJcblxyXG4vLyBZdXAgU2NoZW1hIGZvciB2YWxpZGF0aW9uIGZpZWxkc1xyXG5jb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KHtcclxuICAgIHByb2R1Y3RfbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgUHJvZHVjdCBOYW1lXCIpXHJcbiAgICAgICAgLm1pbigyLCBcIk11c3QgaGF2ZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDQwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDQwIGNoYXJhY3RlcnNcIiksXHJcbiAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDUsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoMjAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDIwMCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIC8vIFByb2R1Y3QgRGF0YVxyXG4gICAgcHJvZHVjdF90eXBlOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgLy8gPT4gSW52ZW50b3J5XHJcbiAgICBza3U6IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG5cclxuICAgIC8vID0+IEdlbmVyYWwoU2ltcGxlLVByb2R1Y3QpXHJcbiAgICBwcm9kdWN0X3ByaWNlOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgJ0VudGVyIEJldHdlZW4gMS0xMDAwMDAwJyksXHJcbiAgICBwcm9kdWN0X2luX3N0b2NrOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMSwgXCJNdXN0IGdyYXRlciB0aGFuIDEgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMDAwMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwMDAwMFwiKSxcclxuICAgIHByb2R1Y3RfYnJhbmRfbmFtZTogeXVwLnN0cmluZygpXHJcbiAgICAgICAgLm1pbigyLCBcIk11c3QgaGF2ZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDQwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDQwIGNoYXJhY3RlcnNcIiksXHJcbiAgICBwcm9kdWN0X2ltYWdlX2xpbms6IHl1cC5zdHJpbmcoKSxcclxuICAgIHByb2R1Y3Rfd2FycmFudHk6IHl1cC5udW1iZXIoKS5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCAnRW50ZXIgQmV0d2VlbiAwLTIwMCcpXHJcbiAgICAgICAgLm1heCgyMDAsICdFbnRlciBCZXR3ZWVuIDAtMjAwJyksXHJcbiAgICB3YXJyYW50eV90eXBlOiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X2Rpc2NvdW50OiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG5cclxuICAgIC8vID0+IEF0dHJpYnV0ZXMgKFZhcmlhYmxlIFByb2R1Y3QpXHJcbiAgICBwdXJjaGFzZV9ub3RlOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgLy8gPT4gVmFyaWF0aW9ucyAoVmFyaWFibGUgUHJvZHVjdClcclxuICAgIHByb2R1Y3RfdmFyaWF0aW9uczogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIC8vID0+IFNoaXBwaW5nXHJcbiAgICBwcm9kdWN0X3dlaWdodDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG4gICAgZGltZW5zaW9uX2xlbmd0aDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG4gICAgZGltZW5zaW9uX3dpZHRoOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcbiAgICBkaW1lbnNpb25faGVpZ2h0OiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcbiAgICBzaGlwcGluZ19jaGFyZ2VzOiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG4gICAgaGFuZGxpbmdfZmVlOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcblxyXG4gICAgLy8gPT4gQWR2YW52ZVxyXG4gICAgcHVyY2hhc2Vfbm90ZTogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgIGN1c3RvbV9maWVsZHM6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBwcm9kdWN0X2NhdGVnb3J5OiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgZGFuZ2Vyb3VzX2dvb2RzOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF90YWdzOiB5dXAuc3RyaW5nKCksXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuY2xhc3MgQWRkTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb2FzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBwcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9uczogcHJvZHVjdF9jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllczogJycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5RXJyb3I6ICdub19lcnJvcicsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG5cclxuICAgICAgICAgICAgcHJvZHVjdFRhZ3M6IFtdLFxyXG5cclxuICAgICAgICAgICAgd2FycmFudHlUeXBlOiAnWWVhcicsXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rOiBbXSxcclxuICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogW10sXHJcblxyXG5cclxuICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yOiAnbm9fZXJyb3InLFxyXG4gICAgICAgICAgICBpbWFnZV9saW5rRXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBBdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVOYW1lU2VsZWN0ZWQ6ICcnLFxyXG5cclxuICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgaXNWYXJpYXRpb25zU2F2ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzYW1lUHJpY2VJbnB1dDogJycsXHJcblxyXG4gICAgICAgICAgICAvLyBDdXN0b20gRmllbGRzXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lOiAnJyxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkRXJyb3I6ICcnLFxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZE5hbWVTZWxlY3RlZDogJycsXHJcblxyXG4gICAgICAgICAgICAvLyBEYW5nZXJvdXMgR29vZHNcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzR29vZHNBcnJheTogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkID0gdGhpcy5hZGRDdXN0b21GaWVsZEJ0bkNsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLnVwbG9hZFByb2R1Y3QgPSB0aGlzLnVwbG9hZFByb2R1Y3QuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXR0aW5nIFByb2R1Y3QgQ2F0ZWdvcmllcyBmcm9tIERCXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy1jYXRlZ29yaWVzL2dldC1hbGwnO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9uczogcmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vICBTdWJtaXQgZGF0YSB0byBhcGlcclxuICAgIGFzeW5jIHVwbG9hZFByb2R1Y3QoZGF0YSwgY3VycmVudENvbXBvbmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhOiAnLCBkYXRhKVxyXG4gICAgICAgIC8vIGNvbnN0IHVybCA9IE11aGFsaWtDb25maWcuUEFUSCArICcvYXBpL3Byb2R1Y3RzL2FkZCc7XHJcbiAgICAgICAgLy8gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHtcclxuICAgICAgICAvLyAgICAgZGF0YVxyXG4gICAgICAgIC8vIH0sIHtcclxuICAgICAgICAvLyAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgLy8gfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgc2hvd1RvYXN0OiB0cnVlIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vICAgICBjdXJyZW50Q29tcG9uZW50LnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAvLyAgICAgYWxlcnQoJ0Vycm9yOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvZHVjdFRhZ0NoYW5nZSA9IChhcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdFRhZ3M6IGFyciB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIFByb2R1Y3QgQ2F0ZWdvcnlcclxuICAgIGhhbmRsZVByb2R1Y3RDYXRlZ29yeUNoYW5nZSA9IChhcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdENhdGVnb3JpZXM6IGFyciwgY2F0ZWdvcnlFcnJvcjogJ25vX2Vycm9yJywgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2ltcGxlIFByb2R1Y3QgSW1hZ2UgTGlua1xyXG4gICAgaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlTGlua0NoYW5nZSA9IChhcnIsIGFjdGlvbk1ldGEpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogYXJyLCBpbWFnZV9saW5rRXJyb3I6ICdub19lcnJvcicsIGltYWdlX2xpbmtFcnJvckRpdjogJ0JvcmRlckRpdicgfSk7XHJcbiAgICB9O1xyXG4gICAgaGFuZGxlU2ltcGxlUHJvZHVjdEltYWdlTGlua0lucHV0Q2hhbmdlID0gKGFhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGFhIH0pO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZV9saW5rS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluayA9IHRoaXMuc3RhdGUuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluaztcclxuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1RhYic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rOiBbLi4uc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluaywgY3JlYXRlT3B0aW9uKGlucHV0VmFsdWUpXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYWJsZVByb2R1Y3Q6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9kdWN0IEF0dHJpYnV0ZXNcclxuICAgIGhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVOYW1lQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6IGUudmFsdWUgfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZDogZSB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZU5hbWUgIT0gJycgJiYgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJycgfSlcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5KTtcclxuICAgICAgICAgICAgY29weUFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6IHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlVmFsdWU6IHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZVZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlTmFtZVNlbGVjdGVkOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZXNBcnJheTogY29weUFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJ0VudGVyIEZpZWxkIE5hbWUgYW5kIFZhbHVlJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTYXZlUHJvZHVjdEF0dHJpYnV0ZXNDbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBhbGxBcnJheXMgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdmFyIHRyaW0gPSBlbGVtZW50LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZS5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB2YXIgc3BsaXRBcnJheSA9IHRyaW0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgYWxsQXJyYXlzLnB1c2goc3BsaXRBcnJheSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmFsbFBvc3NpYmxlQ2FzZXMoYWxsQXJyYXlzKVxyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBlbGVtZW50LnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gW107XHJcblxyXG4gICAgICAgICAgICBzcGxpdC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXlbaV0ucHJvZHVjdEF0dHJpYnV0ZU5hbWUsIHZhbHVlOiBlIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhLnB1c2goeyBpdGVtczogaXRlbSwgcHJpY2U6ICcnLCBzdG9jazogJzEnLCBpbWFnZV9saW5rOiAnJywgcHJpY2VfZXJyb3I6ICcnLCBpbWFnZV9saW5rX2Vycm9yOiAnJyB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BsaXQgQXJyYXk6IFwiLCBkYXRhKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGRhdGEgfSlcclxuICAgIH1cclxuICAgIGFsbFBvc3NpYmxlQ2FzZXMoYXJyKSB7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGFsbENhc2VzT2ZSZXN0ID0gdGhpcy5hbGxQb3NzaWJsZUNhc2VzKGFyci5zbGljZSgxKSk7ICAvLyByZWN1ciB3aXRoIHRoZSByZXN0IG9mIGFycmF5XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FzZXNPZlJlc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyWzBdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyWzBdW2pdICsgXCItXCIgKyBhbGxDYXNlc09mUmVzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQgPSAoaW5kZXgsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0geyBwcm9kdWN0QXR0cmlidXRlTmFtZTogbmFtZSwgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiB2YWx1ZSB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVEZWxldGVQcm9kdWN0QXR0cmlidXRlQ2xpY2tlZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RWYXJpYXRpb25DbGlja2VkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIC8vIFxyXG4gICAgaGFuZGxlU2FtZVByaWNlRm9yQWxsVmFyaWF0aW9uc0NoYW5nZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYW1lUHJpY2VJbnB1dDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVZhcmlhdGlvblNhbWVQcmljZUNoZWNrYm94Q2hhbmdlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlID0gdGhpcy5zdGF0ZS5zYW1lUHJpY2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gXHJcbiAgICBoYW5kbGVWYXJpYXRpb25QcmljZUNoYW5nZWQgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF07XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnByaWNlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25Qcm9kdWN0SW5TdG9ja0NoYW5nZWQgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF07XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnN0b2NrID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25JbWFnZUxpbmtDaGFuZ2VkID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBvYmplY3QgPSBjb3B5QXJyYXlbaW5kZXhdO1xyXG4gICAgICAgIG9iamVjdC5pbWFnZV9saW5rID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9iamVjdDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBzYXZlVmFyaWF0aW9uc0NsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpY2UgPT0gJycgfHwgZWxlbWVudC5pbWFnZV9saW5rID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmljZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucHJpY2VfZXJyb3IgPSAnRW50ZXIgcHJpY2UnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbWFnZV9saW5rID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbWFnZV9saW5rX2Vycm9yID0gJ0VudGVyIEltYWdlIExpbmsnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlX2Vycm9yID0gJydcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2VfbGlua19lcnJvciA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhdGlvbnNTYXZlZDogdHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICB2YXJpYXRpb25zRXJyb3JDaGVjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2VfZXJyb3IgIT0gJycgfHwgZGF0YS5pbWFnZV9saW5rX2Vycm9yICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMXB4IHNvbGlkIHJlZCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBDdXN0b20gRmllbGRzXHJcbiAgICBjdXN0b21GaWVsZE5hbWVDaGFuZ2VIYW5kbGVyKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lOiBlLnZhbHVlIH0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkTmFtZVNlbGVjdGVkOiBlIH0pXHJcbiAgICB9XHJcbiAgICBjdXN0b21GaWVsZFZhbHVlQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkVmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcbiAgICBhZGRDdXN0b21GaWVsZEJ0bkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lICE9ICcnICYmIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRWYWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRFcnJvcjogJycgfSlcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheSk7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkTmFtZTogdGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZFZhbHVlOiB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZE5hbWU6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZFZhbHVlOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lU2VsZWN0ZWQ6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZHNBcnJheTogY29weUFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkRXJyb3I6ICdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ3VzdG9tRmllbGRzRXZlbnQgPSAoaW5kZXgsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IHsgY3VzdG9tRmllbGROYW1lOiBuYW1lLCBjdXN0b21GaWVsZFZhbHVlOiB2YWx1ZSB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZHNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ3VzdG9tRmllbGRzRXZlbnQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRGFuZ2Vyb3VzIEdvb2RzXHJcbiAgICBoYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZSA9IChlLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5KTtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkucHVzaChuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhbmdlcm91c0dvb2RzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gUHJvZHVjdCBEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlOiAnc2ltcGxlLXByb2R1Y3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vID0+IEludmVudG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNrdTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gPT4gR2VuZXJhbChTaW1wbGUtUHJvZHVjdClcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9kdWN0X3ByaWNlOiAnJywgcHJvZHVjdF9pbl9zdG9jazogJycsIHByb2R1Y3RfYnJhbmRfbmFtZTogJycsIHByb2R1Y3RfaW1hZ2VfbGluazogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF93YXJyYW50eTogJycsIHdhcnJhbnR5X3R5cGU6ICcnLCBwcm9kdWN0X2Rpc2NvdW50OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyA9PiBBdHRyaWJ1dGVzIChWYXJpYWJsZSBQcm9kdWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHB1cmNoYXNlX25vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vID0+IFZhcmlhdGlvbnMgKFZhcmlhYmxlIFByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF92YXJpYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyA9PiBTaGlwcGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3Rfd2VpZ2h0OiAnJywgZGltZW5zaW9uX2xlbmd0aDogJycsIGRpbWVuc2lvbl93aWR0aDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGltZW5zaW9uX2hlaWdodDogJycsIHNoaXBwaW5nX2NoYXJnZXM6ICcnLCBoYW5kbGluZ19mZWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vID0+IEFkdmFudmVcclxuICAgICAgICAgICAgICAgICAgICAvLyBwdXJjaGFzZV9ub3RlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyBDdXN0b20gRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tX2ZpZWxkczogJycsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RfY2F0ZWdvcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhbmdlcm91c19nb29kczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvZHVjdF90YWdzOiAnJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzID09ICcnIHx8ICh0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmsgPT0gJycgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAnc2ltcGxlLXByb2R1Y3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWVBcnJheSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RXJyb3I6IFwiZXJyb3JcIiwgY2F0ZWdvcnlFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUVycm9yOiBcImVycm9yXCIsIGNhdGVnb3J5RXJyb3JEaXY6ICdSZWRCb3JkZXJEaXYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmsgPT0gJycgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAnc2ltcGxlLXByb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NpbXBsZVByb2R1Y3RQcmljZUltZ0xpbmtFcnJvcnJBbGVydDogdHJ1ZSwgaW1hZ2VfbGlua0Vycm9yOiBcImVycm9yXCIsIGltYWdlX2xpbmtFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmlzVmFyaWF0aW9uc1NhdmVkID09IGZhbHNlICYmIHZhbHVlcy5wcm9kdWN0X3R5cGUgPT0gJ3ZhcmlhYmxlLXByb3VjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGVsZW1lbnQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfY2F0ZWdvcnkgPSBhcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb2R1Y3RUYWdzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChlbGVtZW50LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3RhZ3MgPSBhcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuZGFuZ2Vyb3VzX2dvb2RzID0gdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMucHJvZHVjdF90eXBlID09ICdzaW1wbGUtcHJvZHVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluay5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGVsZW1lbnQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF9pbWFnZV9saW5rID0gYXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChlbGVtZW50LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfdmFyaWF0aW9ucyA9IGFycmF5O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmN1c3RvbV9maWVsZHMgPSB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZXM6ICcsIHZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwbG9hZFByb2R1Y3QodmFsdWVzLCB0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RXJyb3I6ICdub19lcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGFnczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5VHlwZTogJ1llYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2xpbmtFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhdGlvbnNTYXZlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkRXJyb3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBpc1ZhbGlkLCBlcnJvcnMsIGhhbmRsZUJsdXIsIGlzU3VibWl0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c30gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+IEFkZCBOZXcgUHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9hc3QgPyA8U2hvd1RvYXN0IG9uQ2xvc2VIYW5kbGVyPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dUb2FzdDogZmFsc2UgfSl9IHNob3c9e3RoaXMuc3RhdGUuc2hvd1RvYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3VjY2Vzcyd9IG1lc3NhZ2U9eydQcm9kdWN0IFVwbG9hZGVkIFN1Y2Nlc3NmdWxseSd9IGljb25OYW1lPXtmYVRodW1ic1VwfSBjb2xvcj17XCJncmVlblwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93VG9hc3Qgb25DbG9zZUhhbmRsZXI9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiBmYWxzZSB9KX0gc2hvdz17dGhpcy5zdGF0ZS5zaG93VmFyaWF0aW9uc0Vycm9yQWxlcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfSBtZXNzYWdlPXsnUGxlYXNlIEFkZC9TYXZlIFZhcmlhdGlvbnMgRmlyc3QnfSBpY29uTmFtZT17ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfSBjb2xvcj17XCJyZWRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dUb2FzdCBvbkNsb3NlSGFuZGxlcj17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0OiBmYWxzZSB9KX0gc2hvdz17dGhpcy5zdGF0ZS5zaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J0Vycm9yJ30gbWVzc2FnZT17J0VudGVyIFByaWNlL0ltYWdlIExpbmsgaW4gR2VuZXJhbCBUYWIgRmlyc3QnfSBpY29uTmFtZT17ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfSBjb2xvcj17XCJyZWRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzIlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezl9IG1kPXs5fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgTmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgTmFtZTxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJvZHVjdF9uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLnByb2R1Y3RfbmFtZSAmJiBlcnJvcnMucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBOYW1lICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBEaXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5Qcm9kdWN0IERpc2NydXB0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJvZHVjdF9kZXNjcmlwdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQucHJvZHVjdF9kZXNjcmlwdGlvbiAmJiBlcnJvcnMucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wcm9kdWN0X2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IERhdGEgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3R5cGUgfHwgJyd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3ByaWNlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfcHJpY2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja192YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2luX3N0b2NrIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja190b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfaW5fc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfYnJhbmRfbmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X2JyYW5kX25hbWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaW5rPXt0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSGFuZGxlcj17dGhpcy5oYW5kbGVTaW1wbGVQcm9kdWN0SW1hZ2VMaW5rQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSW5wdXRDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZUxpbmtJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlUHJvZHVjdEltYWdlTGlua2hhbmRsZUtleURvd25IYW5kbGVyPXt0aGlzLmhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZV9saW5rS2V5RG93bi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlUHJvZHVjdEVycm9yPXt0aGlzLnN0YXRlLnNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3dhcnJhbnR5IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3Rfd2FycmFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3Rfd2FycmFudHl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZV92YWx1ZXM9e3ZhbHVlcy53YXJyYW50eV90eXBlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZV90b3VjaGVkPXt0b3VjaGVkLndhcnJhbnR5X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX2Vycm9ycz17ZXJyb3JzLndhcnJhbnR5X3R5cGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudF92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2Rpc2NvdW50IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudF90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfZGlzY291bnR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X3ZhbHVlcz17dmFsdWVzLnNrdSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV90b3VjaGVkPXt0b3VjaGVkLnNrdX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV9lcnJvcnM9e2Vycm9ycy5za3V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHRfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF93ZWlnaHQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3Rfd2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHRfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF93ZWlnaHR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25fbGVuZ3RoIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl9sZW5ndGh9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl93aWR0aCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl93aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF9lcnJvcnM9e2Vycm9ycy5kaW1lbnNpb25fd2lkdGh9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25faGVpZ2h0IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl9oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl9oZWlnaHR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlc192YWx1ZXM9e3ZhbHVlcy5zaGlwcGluZ19jaGFyZ2VzIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlc190b3VjaGVkPXt0b3VjaGVkLnNoaXBwaW5nX2NoYXJnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX2Vycm9ycz17ZXJyb3JzLnNoaXBwaW5nX2NoYXJnZXN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX3ZhbHVlcz17dmFsdWVzLmhhbmRsaW5nX2ZlZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV90b3VjaGVkPXt0b3VjaGVkLmhhbmRsaW5nX2ZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV9lcnJvcnM9e2Vycm9ycy5oYW5kbGluZ19mZWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZV92YWx1ZXM9e3ZhbHVlcy5wdXJjaGFzZV9ub3RlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZV90b3VjaGVkPXt0b3VjaGVkLnB1cmNoYXNlX25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX2Vycm9ycz17ZXJyb3JzLnB1cmNoYXNlX25vdGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29sb3JDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RDb2xvckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpemU9e3RoaXMuc3RhdGUuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTaXplQ2hhbmdlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0U2l6ZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzQXJyYXk9e3RoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZVNlbGVjdGVkPXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0QXR0cmlidXRlTmFtZUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWVIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQXR0cmlidXRlSGFuZGxlcj17dGhpcy5oYW5kbGVBZGRQcm9kdWN0QXR0cmlidXRlQ2xpY2tlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLmhhbmRsZVVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVBdHRyaWJ1dGVIYW5kbGVyPXt0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVWYXJpYXRpb25IYW5kbGVyPXt0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3RWYXJpYXRpb25DbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlVmFyaWF0aW9uc0hhbmRsZXI9e3RoaXMuc2F2ZVZhcmlhdGlvbnNDbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zRXJyb3JIYW5kbGVyPXt0aGlzLnZhcmlhdGlvbnNFcnJvckNoZWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlRXJyb3J9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUF0dHJpYnV0ZXNIYW5kbGVyPXt0aGlzLmhhbmRsZVNhdmVQcm9kdWN0QXR0cmlidXRlc0NsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk9e3RoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uUHJpY2VIYW5kbGVyPXt0aGlzLmhhbmRsZVZhcmlhdGlvblByaWNlQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uU3RvY2tIYW5kbGVyPXt0aGlzLmhhbmRsZVZhcmlhdGlvblByb2R1Y3RJblN0b2NrQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uSW1hZ2VMaW5rSGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25JbWFnZUxpbmtDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUNoZWNrYm94SGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25TYW1lUHJpY2VDaGVja2JveENoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVQcmljZT17dGhpcy5zdGF0ZS5zYW1lUHJpY2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVQcmljZUZvckFsbFZhcmlhdGlvbnNIYW5kbGVyPXt0aGlzLmhhbmRsZVNhbWVQcmljZUZvckFsbFZhcmlhdGlvbnNDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IERhdGEgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHNBcnJheT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lU2VsZWN0ZWQ9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWVIYW5kbGVyPXt0aGlzLmN1c3RvbUZpZWxkTmFtZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVIYW5kbGVyPXt0aGlzLmN1c3RvbUZpZWxkVmFsdWVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRGaWVsZEhhbmRsZXI9e3RoaXMuYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlQ3VzdG9tRmllbGRzRXZlbnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5kZWxldGVDdXN0b21GaWVsZHNFdmVudC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGRFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgQ2F0ZWdvcnkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UHJvZHVjdCBDYXRlZ29yaWVzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvckRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDYXRlZ29yeUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5wcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0L0VudGVyIENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNhdGVnb3J5RXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGV0IENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgYXRlZ29yeSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIERhbmdlcm91cyBHb29kcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5EYW5nZXJvdXMgR29vZHM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdF9zcGVjaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm90IFNwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ05vdCBTcGVjaWZpZWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNlcmFtaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VyYW1pY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ0NlcmFtaWMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnR2xhc3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnTWV0YWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYXN0aWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxhc3RpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ1BsYXN0aWMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZkRhbmdlcm91cyBHb29kcyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgVGFncyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5Qcm9kdWN0IFRhZ3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17eyBoZWlnaHQ6ICcyNTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RUYWdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvZHVjdF9jb2xvcl9vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0L0VudGVyIFRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgVGFncyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZvcm0gU3VibWl0IEJ0biBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZHMgd2l0aCA8c3Bhbj4gKiA8L3NwYW4+IGFyZSBtYW5kYXRvcnkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMubGFiZWx9PkZvciBhZGRpbmcgbmV3IHNpemUsIGNvbG9yLCBsaW5rOiBFbnRlciB0ZXh0IGFuZCBoaXQgRW50ZXIgb3IgVGFiIGtleTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pc0xvYWRpbmd9IGJsb2NrIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/ICdVcGxvYWRpbmcnIDogJ1VwbG9hZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIiBzaXplPVwic21cIiAvPiA6IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIEZvcm0gU3VibWl0IEJ0biBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vX2Vycm9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjREMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWRCb3JkZXJEaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjREMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXB4IDBweCAwLjJweCAwLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5Cb3JkZXJEaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZfbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxLjUlIDQlJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzI2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjZweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknXHJcbiAgICB9LFxyXG5cclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgcGFkZGluZzogJzAlJ1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgLy8gY29sb3I6ICcjNkE3MDc0JyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdsaWdodGdyYXknXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBzdWJtaXRfYnRuOiB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxJScsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICB9LFxyXG4gICAgdGVybV9jb25kaXRpb25fbGFiZWw6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICBwYWRkaW5nVG9wOiAnLTEwcHgnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJy0xMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTdweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTdweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTdweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxN3B4JyxcclxuICAgIH0sXHJcbiAgICB2YXJpYXRpb25zX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new.js */")));
      });
    }
  }]);

  return AddNew;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var styles = {
  title_row: {
    borderBottom: '1px solid gray',
    padding: '1.5% 4%'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '26px',
    height: '26px',
    maxHeight: '26px',
    maxWidth: '26px'
  },
  title: {
    color: 'gray'
  },
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
    width: '100%'
  },
  card_header: {
    alignItems: 'center',
    // color: '#6A7074',
    fontSize: '14px',
    background: 'lightgray'
  },
  buttons: {
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].primry_color),
    border: 'none',
    fontSize: '10px'
  },
  submit_btn: {
    // background: `${GlobalStyleSheet.admin_primry_color}`,
    marginTop: '1%'
  },
  label: {
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].form_label_fontsize)
  },
  term_condition_label: {
    width: '100%',
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].form_label_fontsize),
    paddingTop: '-10px',
    marginTop: '-10px'
  },
  fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].primary_text_color),
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  },
  product_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].primary_text_color),
    marginRight: '10%',
    width: '17px',
    height: '17px',
    maxHeight: '17px',
    maxWidth: '17px'
  },
  variations_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color),
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
//# sourceMappingURL=vendor.js.230f6123a8a38fd943cf.hot-update.js.map