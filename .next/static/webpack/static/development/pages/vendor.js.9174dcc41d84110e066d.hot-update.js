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
          product_type: 'simple-product'
        },
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting,
              resetForm = _ref.resetForm;

          if (_this2.state.productCategories == '' || _this2.state.simple_product_image_link == '') {
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
              values.product_category = _this2.state.productCategories;
              values.product_tags = _this2.state.productTags;
              values.dangerous_goods = _this2.state.dangerousGoodsArray;

              if (values.product_type == 'simple-product') {
                values.product_image_link = _this2.state.simple_product_image_link;
              } else {
                values.product_variations = _this2.state.variationsArray;
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
          lineNumber: 455,
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
            lineNumber: 527,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.title_row,
          noGutters: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 528,
            columnNumber: 33
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
          style: styles.title_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 529,
            columnNumber: 37
          }
        }), __jsx("div", {
          style: styles.title,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 530,
            columnNumber: 37
          }
        }, " Add New Product")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 532,
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
            lineNumber: 534,
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
            lineNumber: 539,
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
            lineNumber: 544,
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
            lineNumber: 550,
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
            lineNumber: 551,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 553,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 554,
            columnNumber: 49
          }
        }, "Product Name", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 554,
            columnNumber: 94
          }
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 555,
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
            lineNumber: 556,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 564,
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
            lineNumber: 572,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 575,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576,
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
            lineNumber: 577,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 581,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 582,
            columnNumber: 61
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583,
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
            lineNumber: 584,
            columnNumber: 69
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 69
          }
        }, errors.product_description))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 603,
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
            lineNumber: 604,
            columnNumber: 49
          }
        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 707,
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
            lineNumber: 708,
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
            lineNumber: 725,
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
            lineNumber: 727,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 728,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 729,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 730,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 731,
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
            lineNumber: 732,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 733,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 736,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          style: {
            height: '250px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 737,
            columnNumber: 61
          }
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + (_this2.state.categoryErrorDiv || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 738,
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
            lineNumber: 739,
            columnNumber: 69
          }
        })), __jsx("label", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + (_this2.state.categoryError || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 747,
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
            lineNumber: 758,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 759,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 760,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 761,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 762,
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
            lineNumber: 763,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 764,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 767,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 768,
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
            lineNumber: 769,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 775,
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
            lineNumber: 776,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 782,
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
            lineNumber: 783,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 789,
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
            lineNumber: 790,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 796,
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
            lineNumber: 797,
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
            lineNumber: 811,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 812,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 813,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 814,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 815,
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
            lineNumber: 816,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 817,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 820,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          style: {
            height: '250px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 821,
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
            lineNumber: 822,
            columnNumber: 65
          }
        })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 841,
            columnNumber: 37
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 842,
            columnNumber: 41
          }
        }, __jsx("p", {
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 843,
            columnNumber: 45
          }
        }, "Fields with ", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 843,
            columnNumber: 81
          }
        }, " * "), " are mandatory."), __jsx("p", {
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 844,
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
            lineNumber: 845,
            columnNumber: 45
          }
        }, _this2.state.isLoading ? 'Uploading' : 'Upload', _this2.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
          animation: "grow",
          size: "sm",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 847,
            columnNumber: 73
          }
        }) : __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 847,
            columnNumber: 114
          }
        }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "3833814464",
          dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color],
          __self: _this2
        }, ".no_error.__jsx-style-dynamic-selector{display:none;}.error.__jsx-style-dynamic-selector{margin-top:4px;color:#DC3545;font-size:14px;display:block;}.RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:0.5px 0px 0.2px 0.5px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color, ";border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXMxQnFDLEFBRzBELEFBR0UsQUFNWSxBQUtmLEFBSUYsQUFHOEIsQUFPdEIsVUFUdEIsRUFKZSxDQWRmLEVBR2tCLEdBeUJILEtBYmYsSUFOa0MsRUFMZixBQXlCbkIsV0FSbUMsSUFoQmpCLGFBS0gsQ0FKZixVQUtBLEdBV3NDLGtDQUNqQixpQkFFdEIsa0JBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFkZC1uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBGb3JtLCBDb2wsIFJvdywgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uLCBUb2FzdCwgQWxlcnQsIE5hdiwgVGFicywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVBsdXMsIGZhS2V5LCBmYVNsaWRlcnNILCBmYVN0b3JlQWx0LCBmYVRydWNrLCBmYVRvb2xzLCBmYURvbGxhclNpZ24sIGZhRXhjbGFtYXRpb25UcmlhbmdsZSwgZmFMaXN0QWx0XHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCB7IGZhVGh1bWJzVXAsIGZhVGh1bWJzRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuaW1wb3J0IFJlYWN0U2VsZWN0TWF0ZXJpYWxVaSBmcm9tIFwicmVhY3Qtc2VsZWN0LW1hdGVyaWFsLXVpXCI7XHJcbmltcG9ydCBTaG93VG9hc3QgZnJvbSAnLi4vLi4vLi4vLi4vdG9hc3QnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgQ3VzdG9tRmllbGRzIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9jdXN0b20tZmllbGRzJztcclxuaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9wcm9kdWN0LWRhdGEnO1xyXG5pbXBvcnQgcHJvZHVjdF9zaXplX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LXNpemUtb3B0aW9ucydcclxuaW1wb3J0IHByb2R1Y3RfY29sb3Jfb3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL3Byb2R1Y3QtY29sb3Itb3B0aW9ucydcclxuXHJcbmNvbnN0IHByb2R1Y3RfYXR0cmlidXRlc19saXN0ID0gW1xyXG4gICAgeyB2YWx1ZTogJ1NpemUnLCBsYWJlbDogJ1NpemUnIH0sXHJcbiAgICB7IHZhbHVlOiAnQ29sb3InLCBsYWJlbDogJ0NvbG9yJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1ByaWNlJywgbGFiZWw6ICdQcmljZScgfSxcclxuXVxyXG5cclxuLy8gT3B0aW9uIExpc3QgZm9yIHNlbGVjdCBQcm9kdWN0IENhdGVnb3J5ICh3aGVuIG9mZmxpbmUpXHJcbmNvbnN0IHByb2R1Y3RfY2F0ZWdvcmllcyA9IFtcclxuICAgIHsgdmFsdWU6ICdTaG9lJywgbGFiZWw6ICdTaG9lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0Nsb3RoJywgbGFiZWw6ICdDbG90aCcgfSxcclxuICAgIHsgdmFsdWU6ICdTaGlydCcsIGxhYmVsOiAnU2hpcnQnIH0sXHJcbiAgICB7IHZhbHVlOiAnUGFudCcsIGxhYmVsOiAnUGFudCcgfVxyXG5dXHJcblxyXG4vLyBGb3IgUmVhY3QtU2VsZWN0XHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxufTtcclxuLy8gTW9kZWwgRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSk7XHJcblxyXG4vLyBZdXAgU2NoZW1hIGZvciB2YWxpZGF0aW9uIGZpZWxkc1xyXG5jb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KHtcclxuICAgIHByb2R1Y3RfbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgUHJvZHVjdCBOYW1lXCIpXHJcbiAgICAgICAgLm1pbigyLCBcIk11c3QgaGF2ZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDQwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDQwIGNoYXJhY3RlcnNcIiksXHJcbiAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDUsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDUgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoMjAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDIwMCBjaGFyYWN0ZXJzXCIpLFxyXG5cclxuICAgIC8vIFByb2R1Y3QgRGF0YVxyXG4gICAgcHJvZHVjdF90eXBlOiB5dXAuc3RyaW5nKCksXHJcbiAgICAvLyA9PiBJbnZlbnRvcnlcclxuICAgIHNrdTogeXVwLnN0cmluZygpXHJcbiAgICAgICAgLm1pbigwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpXHJcbiAgICAgICAgLm1heCgxMDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJyksXHJcbiAgICAvLyA9PiBHZW5lcmFsKFNpbXBsZS1Qcm9kdWN0KVxyXG4gICAgcHJvZHVjdF9wcmljZTogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAucG9zaXRpdmUoJ0VudGVyIEJldHdlZW4gMS0xMDAwMDAwJylcclxuICAgICAgICAubWF4KDEwMDAwMDAsICdFbnRlciBCZXR3ZWVuIDEtMTAwMDAwMCcpLFxyXG4gICAgcHJvZHVjdF9pbl9zdG9jazogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDEsIFwiTXVzdCBncmF0ZXIgdGhhbiAxIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAwMDAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMDAwMDBcIiksXHJcbiAgICBwcm9kdWN0X2JyYW5kX25hbWU6IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oMiwgXCJNdXN0IGhhdmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCg0MCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiA0MCBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgcHJvZHVjdF9pbWFnZV9saW5rOiB5dXAuc3RyaW5nKCksXHJcbiAgICBwcm9kdWN0X3dhcnJhbnR5OiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0yMDAnKVxyXG4gICAgICAgIC5tYXgoMjAwLCAnRW50ZXIgQmV0d2VlbiAwLTIwMCcpLFxyXG4gICAgd2FycmFudHlfdHlwZTogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF9kaXNjb3VudDogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJylcclxuICAgICAgICAubWF4KDEwMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKSxcclxuICAgIC8vID0+IEF0dHJpYnV0ZXMgKFZhcmlhYmxlIFByb2R1Y3QpXHJcbiAgICBwdXJjaGFzZV9ub3RlOiB5dXAuc3RyaW5nKCksXHJcbiAgICAvLyA9PiBWYXJpYXRpb25zIChWYXJpYWJsZSBQcm9kdWN0KVxyXG4gICAgcHJvZHVjdF92YXJpYXRpb25zOiB5dXAuc3RyaW5nKCksXHJcbiAgICAvLyA9PiBTaGlwcGluZ1xyXG4gICAgcHJvZHVjdF93ZWlnaHQ6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCBcIk11c3QgZ3JhdGVyIHRoYW4gMCBkaWdpdFwiKVxyXG4gICAgICAgIC5tYXgoMTAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMFwiKSxcclxuICAgIGRpbWVuc2lvbl9sZW5ndGg6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCBcIk11c3QgZ3JhdGVyIHRoYW4gMCBkaWdpdFwiKVxyXG4gICAgICAgIC5tYXgoMTAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMFwiKSxcclxuICAgIGRpbWVuc2lvbl93aWR0aDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG4gICAgZGltZW5zaW9uX2hlaWdodDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG4gICAgc2hpcHBpbmdfY2hhcmdlczogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJylcclxuICAgICAgICAubWF4KDEwMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKSxcclxuICAgIGhhbmRsaW5nX2ZlZTogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG4gICAgLy8gPT4gQWR2YW52ZVxyXG4gICAgcHVyY2hhc2Vfbm90ZTogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIC8vIEN1c3RvbSBGaWVsZHNcclxuICAgIGN1c3RvbV9maWVsZHM6IHl1cC5zdHJpbmcoKSxcclxuXHJcblxyXG4gICAgcHJvZHVjdF9jYXRlZ29yeTogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIGRhbmdlcm91c19nb29kczogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIHByb2R1Y3RfdGFnczogeXVwLnN0cmluZygpLFxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbmNsYXNzIEFkZE5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93VG9hc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgcHJvZHVjdF9jYXRlZ29yaWVzX29wdGlvbnM6IHByb2R1Y3RfY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgcHJvZHVjdENhdGVnb3JpZXM6ICcnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUVycm9yOiAnbm9fZXJyb3InLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RUYWdzOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHdhcnJhbnR5VHlwZTogJ1llYXInLFxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogW10sXHJcbiAgICAgICAgICAgIHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms6IFtdLFxyXG5cclxuXHJcbiAgICAgICAgICAgIGltYWdlX2xpbmtFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2R1Y3QgQXR0cmlidXRlc1xyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICcnLFxyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZVNlbGVjdGVkOiAnJyxcclxuXHJcbiAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheTogW10sXHJcbiAgICAgICAgICAgIGlzVmFyaWF0aW9uc1NhdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2FtZVByaWNlSW5wdXQ6ICcnLFxyXG5cclxuICAgICAgICAgICAgLy8gQ3VzdG9tIEZpZWxkc1xyXG4gICAgICAgICAgICBjdXN0b21GaWVsZHNBcnJheTogW10sXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkTmFtZTogJycsXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZEVycm9yOiAnJyxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lU2VsZWN0ZWQ6ICcnLFxyXG5cclxuICAgICAgICAgICAgLy8gRGFuZ2Vyb3VzIEdvb2RzXHJcbiAgICAgICAgICAgIGRhbmdlcm91c0dvb2RzQXJyYXk6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZSA9IHRoaXMuaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZEN1c3RvbUZpZWxkQnRuQ2xpY2tlZCA9IHRoaXMuYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy51cGxvYWRQcm9kdWN0ID0gdGhpcy51cGxvYWRQcm9kdWN0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0dGluZyBQcm9kdWN0IENhdGVnb3JpZXMgZnJvbSBEQlxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvcHJvZHVjdHMtY2F0ZWdvcmllcy9nZXQtYWxsJztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdF9jYXRlZ29yaWVzX29wdGlvbnM6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAgU3VibWl0IGRhdGEgdG8gYXBpXHJcbiAgICBhc3luYyB1cGxvYWRQcm9kdWN0KGRhdGEsIGN1cnJlbnRDb21wb25lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YTogJywgZGF0YSlcclxuICAgICAgICAvLyBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy9hZGQnO1xyXG4gICAgICAgIC8vIGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7XHJcbiAgICAgICAgLy8gICAgIGRhdGFcclxuICAgICAgICAvLyB9LCB7XHJcbiAgICAgICAgLy8gICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgIC8vIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dUb2FzdDogdHJ1ZSB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KCdFcnJvcjogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVByb2R1Y3RUYWdDaGFuZ2UgPSAoYXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RUYWdzOiBhcnIgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBQcm9kdWN0IENhdGVnb3J5XHJcbiAgICBoYW5kbGVQcm9kdWN0Q2F0ZWdvcnlDaGFuZ2UgPSAoYXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RDYXRlZ29yaWVzOiBhcnIsIGNhdGVnb3J5RXJyb3I6ICdub19lcnJvcicsIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpbXBsZSBQcm9kdWN0IEltYWdlIExpbmtcclxuICAgIGhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZUxpbmtDaGFuZ2UgPSAoYXJyLCBhY3Rpb25NZXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms6IGFyciwgaW1hZ2VfbGlua0Vycm9yOiAnbm9fZXJyb3InLCBpbWFnZV9saW5rRXJyb3JEaXY6ICdCb3JkZXJEaXYnIH0pO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZUxpbmtJbnB1dENoYW5nZSA9IChhYSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBhYSB9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVTaW1wbGVQcm9kdWN0SW1hZ2VfbGlua0tleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmsgPSB0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbms7XHJcbiAgICAgICAgaWYgKCFpbnB1dFZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgICAgICBjYXNlICdUYWInOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogWy4uLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmssIGNyZWF0ZU9wdGlvbihpbnB1dFZhbHVlKV0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIGhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gJ3ZhcmlhYmxlLXByb3VjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzVmFyaWFibGVQcm9kdWN0OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzVmFyaWFibGVQcm9kdWN0OiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvZHVjdCBBdHRyaWJ1dGVzXHJcbiAgICBoYW5kbGVQcm9kdWN0QXR0cmlidXRlTmFtZUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiBlLnZhbHVlIH0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVOYW1lU2VsZWN0ZWQ6IGUgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVWYWx1ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUFkZFByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lICE9ICcnICYmIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZVZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICcnIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWVTZWxlY3RlZDogJycgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IGNvcHlBcnJheSB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2F2ZVByb2R1Y3RBdHRyaWJ1dGVzQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgICAgICB2YXIgYWxsQXJyYXlzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmltID0gZWxlbWVudC5wcm9kdWN0QXR0cmlidXRlVmFsdWUuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgdmFyIHNwbGl0QXJyYXkgPSB0cmltLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgIGFsbEFycmF5cy5wdXNoKHNwbGl0QXJyYXkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5hbGxQb3NzaWJsZUNhc2VzKGFsbEFycmF5cylcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gZWxlbWVudC5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgc3BsaXQuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wdXNoKHsgbmFtZTogdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5W2ldLnByb2R1Y3RBdHRyaWJ1dGVOYW1lLCB2YWx1ZTogZSB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKHsgaXRlbXM6IGl0ZW0sIHByaWNlOiAnJywgc3RvY2s6ICcxJywgaW1hZ2VfbGluazogJycsIHByaWNlX2Vycm9yOiAnJywgaW1hZ2VfbGlua19lcnJvcjogJycgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwbGl0IEFycmF5OiBcIiwgZGF0YSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBkYXRhIH0pXHJcbiAgICB9XHJcbiAgICBhbGxQb3NzaWJsZUNhc2VzKGFycikge1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyclswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHZhciBhbGxDYXNlc09mUmVzdCA9IHRoaXMuYWxsUG9zc2libGVDYXNlcyhhcnIuc2xpY2UoMSkpOyAgLy8gcmVjdXIgd2l0aCB0aGUgcmVzdCBvZiBhcnJheVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbENhc2VzT2ZSZXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyclswXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFyclswXVtqXSArIFwiLVwiICsgYWxsQ2FzZXNPZlJlc3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkID0gKGluZGV4LCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6IG5hbWUsIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogdmFsdWUgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZXNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRGVsZXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVEZWxldGVQcm9kdWN0VmFyaWF0aW9uQ2xpY2tlZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBcclxuICAgIGhhbmRsZVNhbWVQcmljZUZvckFsbFZhcmlhdGlvbnNDaGFuZ2VkID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2FtZVByaWNlSW5wdXQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVWYXJpYXRpb25TYW1lUHJpY2VDaGVja2JveENoYW5nZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuXHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcmljZSA9IHRoaXMuc3RhdGUuc2FtZVByaWNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFxyXG4gICAgaGFuZGxlVmFyaWF0aW9uUHJpY2VDaGFuZ2VkID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBvYmplY3QgPSBjb3B5QXJyYXlbaW5kZXhdO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5wcmljZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqZWN0O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVmFyaWF0aW9uUHJvZHVjdEluU3RvY2tDaGFuZ2VkID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBvYmplY3QgPSBjb3B5QXJyYXlbaW5kZXhdO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5zdG9jayA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqZWN0O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVmFyaWF0aW9uSW1hZ2VMaW5rQ2hhbmdlZCA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBsZXQgb2JqZWN0ID0gY29weUFycmF5W2luZGV4XTtcclxuICAgICAgICBvYmplY3QuaW1hZ2VfbGluayA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgc2F2ZVZhcmlhdGlvbnNDbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnByaWNlID09ICcnIHx8IGVsZW1lbnQuaW1hZ2VfbGluayA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpY2UgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlX2Vycm9yID0gJ0VudGVyIHByaWNlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW1hZ2VfbGluayA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2VfbGlua19lcnJvciA9ICdFbnRlciBJbWFnZSBMaW5rJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcmljZV9lcnJvciA9ICcnXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmltYWdlX2xpbmtfZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYXRpb25zU2F2ZWQ6IHRydWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgdmFyaWF0aW9uc0Vycm9yQ2hlY2sgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnByaWNlX2Vycm9yICE9ICcnIHx8IGRhdGEuaW1hZ2VfbGlua19lcnJvciAhPSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJzFweCBzb2xpZCByZWQnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ25vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gQ3VzdG9tIEZpZWxkc1xyXG4gICAgY3VzdG9tRmllbGROYW1lQ2hhbmdlSGFuZGxlcihlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkTmFtZTogZS52YWx1ZSB9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZE5hbWVTZWxlY3RlZDogZSB9KVxyXG4gICAgfVxyXG4gICAgY3VzdG9tRmllbGRWYWx1ZUNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZFZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG4gICAgYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1c3RvbUZpZWxkTmFtZSAhPSAnJyAmJiB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkRXJyb3I6ICcnIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXkpO1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZE5hbWU6IHRoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRWYWx1ZTogdGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRWYWx1ZTogJycgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkTmFtZVNlbGVjdGVkOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRzQXJyYXk6IGNvcHlBcnJheSB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZEVycm9yOiAnRW50ZXIgRmllbGQgTmFtZSBhbmQgVmFsdWUnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUN1c3RvbUZpZWxkc0V2ZW50ID0gKGluZGV4LCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSB7IGN1c3RvbUZpZWxkTmFtZTogbmFtZSwgY3VzdG9tRmllbGRWYWx1ZTogdmFsdWUgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZUN1c3RvbUZpZWxkc0V2ZW50ID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERhbmdlcm91cyBHb29kc1xyXG4gICAgaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UgPSAoZSwgbmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuZGFuZ2Vyb3VzR29vZHNBcnJheSk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY29weUFycmF5LnB1c2gobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYW5nZXJvdXNHb29kc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGU6ICdzaW1wbGUtcHJvZHVjdCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0Q2F0ZWdvcmllcyA9PSAnJyB8fCB0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmsgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lQXJyYXkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUVycm9yOiBcImVycm9yXCIsIGNhdGVnb3J5RXJyb3JEaXY6ICdSZWRCb3JkZXJEaXYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlFcnJvcjogXCJlcnJvclwiLCBjYXRlZ29yeUVycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rID09ICcnICYmIHZhbHVlcy5wcm9kdWN0X3R5cGUgPT0gJ3NpbXBsZS1wcm9kdWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQ6IHRydWUsIGltYWdlX2xpbmtFcnJvcjogXCJlcnJvclwiLCBpbWFnZV9saW5rRXJyb3JEaXY6ICdSZWRCb3JkZXJEaXYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5pc1ZhcmlhdGlvbnNTYXZlZCA9PSBmYWxzZSAmJiB2YWx1ZXMucHJvZHVjdF90eXBlID09ICd2YXJpYWJsZS1wcm91Y3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfdGFncyA9IHRoaXMuc3RhdGUucHJvZHVjdFRhZ3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuZGFuZ2Vyb3VzX2dvb2RzID0gdGhpcy5zdGF0ZS5kYW5nZXJvdXNHb29kc0FycmF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMucHJvZHVjdF90eXBlID09ICdzaW1wbGUtcHJvZHVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF9pbWFnZV9saW5rID0gdGhpcy5zdGF0ZS5zaW1wbGVfcHJvZHVjdF9pbWFnZV9saW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF92YXJpYXRpb25zID0gdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmN1c3RvbV9maWVsZHMgPSB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZXM6ICcsIHZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwbG9hZFByb2R1Y3QodmFsdWVzLCB0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RXJyb3I6ICdub19lcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RXJyb3JEaXY6ICdCb3JkZXJEaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGFnczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5VHlwZTogJ1llYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlX3Byb2R1Y3RfaW1hZ2VfbGluazogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX2xpbmtFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhcmlhdGlvbnNTYXZlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkRXJyb3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBpc1ZhbGlkLCBlcnJvcnMsIGhhbmRsZUJsdXIsIGlzU3VibWl0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c30gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+IEFkZCBOZXcgUHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9hc3QgPyA8U2hvd1RvYXN0IG9uQ2xvc2VIYW5kbGVyPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dUb2FzdDogZmFsc2UgfSl9IHNob3c9e3RoaXMuc3RhdGUuc2hvd1RvYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3VjY2Vzcyd9IG1lc3NhZ2U9eydQcm9kdWN0IFVwbG9hZGVkIFN1Y2Nlc3NmdWxseSd9IGljb25OYW1lPXtmYVRodW1ic1VwfSBjb2xvcj17XCJncmVlblwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93VG9hc3Qgb25DbG9zZUhhbmRsZXI9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiBmYWxzZSB9KX0gc2hvdz17dGhpcy5zdGF0ZS5zaG93VmFyaWF0aW9uc0Vycm9yQWxlcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfSBtZXNzYWdlPXsnUGxlYXNlIEFkZC9TYXZlIFZhcmlhdGlvbnMgRmlyc3QnfSBpY29uTmFtZT17ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfSBjb2xvcj17XCJyZWRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dUb2FzdCBvbkNsb3NlSGFuZGxlcj17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0OiBmYWxzZSB9KX0gc2hvdz17dGhpcy5zdGF0ZS5zaG93U2ltcGxlUHJvZHVjdFByaWNlSW1nTGlua0Vycm9yckFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J0Vycm9yJ30gbWVzc2FnZT17J0VudGVyIFByaWNlL0ltYWdlIExpbmsgaW4gR2VuZXJhbCBUYWIgRmlyc3QnfSBpY29uTmFtZT17ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfSBjb2xvcj17XCJyZWRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzIlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezl9IG1kPXs5fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgTmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgTmFtZTxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJvZHVjdF9uYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLnByb2R1Y3RfbmFtZSAmJiBlcnJvcnMucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBOYW1lICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBEaXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5Qcm9kdWN0IERpc2NydXB0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2R1Y3QgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJvZHVjdF9kZXNjcmlwdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQucHJvZHVjdF9kZXNjcmlwdGlvbiAmJiBlcnJvcnMucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wcm9kdWN0X2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IERhdGEgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3R5cGUgfHwgJyd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3ByaWNlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfcHJpY2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja192YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2luX3N0b2NrIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja190b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfaW5fc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfYnJhbmRfbmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X2JyYW5kX25hbWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaW5rPXt0aGlzLnN0YXRlLnNpbXBsZV9wcm9kdWN0X2ltYWdlX2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSGFuZGxlcj17dGhpcy5oYW5kbGVTaW1wbGVQcm9kdWN0SW1hZ2VMaW5rQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGVQcm9kdWN0SW1hZ2VMaW5rSW5wdXRDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZUxpbmtJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlUHJvZHVjdEltYWdlTGlua2hhbmRsZUtleURvd25IYW5kbGVyPXt0aGlzLmhhbmRsZVNpbXBsZVByb2R1Y3RJbWFnZV9saW5rS2V5RG93bi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlUHJvZHVjdEVycm9yPXt0aGlzLnN0YXRlLnNob3dTaW1wbGVQcm9kdWN0UHJpY2VJbWdMaW5rRXJyb3JyQWxlcnR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3dhcnJhbnR5IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3Rfd2FycmFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3Rfd2FycmFudHl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZV92YWx1ZXM9e3ZhbHVlcy53YXJyYW50eV90eXBlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZV90b3VjaGVkPXt0b3VjaGVkLndhcnJhbnR5X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX2Vycm9ycz17ZXJyb3JzLndhcnJhbnR5X3R5cGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudF92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2Rpc2NvdW50IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudF90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfZGlzY291bnR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X3ZhbHVlcz17dmFsdWVzLnNrdSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV90b3VjaGVkPXt0b3VjaGVkLnNrdX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV9lcnJvcnM9e2Vycm9ycy5za3V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHRfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF93ZWlnaHQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3Rfd2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHRfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF93ZWlnaHR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25fbGVuZ3RoIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl9sZW5ndGh9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl93aWR0aCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl93aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF9lcnJvcnM9e2Vycm9ycy5kaW1lbnNpb25fd2lkdGh9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25faGVpZ2h0IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl9oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl9oZWlnaHR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlc192YWx1ZXM9e3ZhbHVlcy5zaGlwcGluZ19jaGFyZ2VzIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlc190b3VjaGVkPXt0b3VjaGVkLnNoaXBwaW5nX2NoYXJnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX2Vycm9ycz17ZXJyb3JzLnNoaXBwaW5nX2NoYXJnZXN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX3ZhbHVlcz17dmFsdWVzLmhhbmRsaW5nX2ZlZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV90b3VjaGVkPXt0b3VjaGVkLmhhbmRsaW5nX2ZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV9lcnJvcnM9e2Vycm9ycy5oYW5kbGluZ19mZWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZV92YWx1ZXM9e3ZhbHVlcy5wdXJjaGFzZV9ub3RlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZV90b3VjaGVkPXt0b3VjaGVkLnB1cmNoYXNlX25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX2Vycm9ycz17ZXJyb3JzLnB1cmNoYXNlX25vdGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29sb3JDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RDb2xvckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpemU9e3RoaXMuc3RhdGUuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTaXplQ2hhbmdlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0U2l6ZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzQXJyYXk9e3RoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZVNlbGVjdGVkPXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0QXR0cmlidXRlTmFtZUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWVIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQXR0cmlidXRlSGFuZGxlcj17dGhpcy5oYW5kbGVBZGRQcm9kdWN0QXR0cmlidXRlQ2xpY2tlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLmhhbmRsZVVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVBdHRyaWJ1dGVIYW5kbGVyPXt0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVWYXJpYXRpb25IYW5kbGVyPXt0aGlzLmhhbmRsZURlbGV0ZVByb2R1Y3RWYXJpYXRpb25DbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlVmFyaWF0aW9uc0hhbmRsZXI9e3RoaXMuc2F2ZVZhcmlhdGlvbnNDbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zRXJyb3JIYW5kbGVyPXt0aGlzLnZhcmlhdGlvbnNFcnJvckNoZWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlRXJyb3J9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUF0dHJpYnV0ZXNIYW5kbGVyPXt0aGlzLmhhbmRsZVNhdmVQcm9kdWN0QXR0cmlidXRlc0NsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk9e3RoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uUHJpY2VIYW5kbGVyPXt0aGlzLmhhbmRsZVZhcmlhdGlvblByaWNlQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uU3RvY2tIYW5kbGVyPXt0aGlzLmhhbmRsZVZhcmlhdGlvblByb2R1Y3RJblN0b2NrQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uSW1hZ2VMaW5rSGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25JbWFnZUxpbmtDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUNoZWNrYm94SGFuZGxlcj17dGhpcy5oYW5kbGVWYXJpYXRpb25TYW1lUHJpY2VDaGVja2JveENoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVQcmljZT17dGhpcy5zdGF0ZS5zYW1lUHJpY2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVQcmljZUZvckFsbFZhcmlhdGlvbnNIYW5kbGVyPXt0aGlzLmhhbmRsZVNhbWVQcmljZUZvckFsbFZhcmlhdGlvbnNDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IERhdGEgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHNBcnJheT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lU2VsZWN0ZWQ9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWVIYW5kbGVyPXt0aGlzLmN1c3RvbUZpZWxkTmFtZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVIYW5kbGVyPXt0aGlzLmN1c3RvbUZpZWxkVmFsdWVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRGaWVsZEhhbmRsZXI9e3RoaXMuYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlQ3VzdG9tRmllbGRzRXZlbnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5kZWxldGVDdXN0b21GaWVsZHNFdmVudC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGRFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgQ2F0ZWdvcnkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UHJvZHVjdCBDYXRlZ29yaWVzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvckRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDYXRlZ29yeUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5wcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0L0VudGVyIENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNhdGVnb3J5RXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGV0IENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgYXRlZ29yeSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIERhbmdlcm91cyBHb29kcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5EYW5nZXJvdXMgR29vZHM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdF9zcGVjaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm90IFNwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ05vdCBTcGVjaWZpZWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNlcmFtaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VyYW1pY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ0NlcmFtaWMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnR2xhc3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEYW5nZXJvdXNHb29kc0NoYW5nZShlLCAnTWV0YWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYXN0aWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxhc3RpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlRGFuZ2Vyb3VzR29vZHNDaGFuZ2UoZSwgJ1BsYXN0aWMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZkRhbmdlcm91cyBHb29kcyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgVGFncyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5Qcm9kdWN0IFRhZ3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBzdHlsZT17eyBoZWlnaHQ6ICcyNTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RUYWdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvZHVjdF9jb2xvcl9vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0L0VudGVyIFRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgVGFncyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZvcm0gU3VibWl0IEJ0biBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmxhYmVsfT5GaWVsZHMgd2l0aCA8c3Bhbj4gKiA8L3NwYW4+IGFyZSBtYW5kYXRvcnkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMubGFiZWx9PkZvciBhZGRpbmcgbmV3IHNpemUsIGNvbG9yLCBsaW5rOiBFbnRlciB0ZXh0IGFuZCBoaXQgRW50ZXIgb3IgVGFiIGtleTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pc0xvYWRpbmd9IGJsb2NrIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/ICdVcGxvYWRpbmcnIDogJ1VwbG9hZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIiBzaXplPVwic21cIiAvPiA6IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIEZvcm0gU3VibWl0IEJ0biBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vX2Vycm9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVycm9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjREMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWRCb3JkZXJEaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjREMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXB4IDBweCAwLjJweCAwLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5Cb3JkZXJEaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZfbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxLjUlIDQlJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzI2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjZweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknXHJcbiAgICB9LFxyXG5cclxuICAgIG5hdl9saW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICByb3c6IHtcclxuICAgICAgICBtYXJnaW46ICcyJScsXHJcbiAgICAgICAgcGFkZGluZzogJzAlJ1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGNhcmRfaGVhZGVyOiB7XHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgLy8gY29sb3I6ICcjNkE3MDc0JyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdsaWdodGdyYXknXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBzdWJtaXRfYnRuOiB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxJScsXHJcbiAgICB9LFxyXG4gICAgbGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICB9LFxyXG4gICAgdGVybV9jb25kaXRpb25fbGFiZWw6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgICAgICBwYWRkaW5nVG9wOiAnLTEwcHgnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJy0xMHB4JyxcclxuICAgIH0sXHJcbiAgICBmb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0X2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTdweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTdweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTdweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxN3B4JyxcclxuICAgIH0sXHJcbiAgICB2YXJpYXRpb25zX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxNXB4JyxcclxuICAgIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new.js */")));
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
//# sourceMappingURL=vendor.js.9174dcc41d84110e066d.hot-update.js.map