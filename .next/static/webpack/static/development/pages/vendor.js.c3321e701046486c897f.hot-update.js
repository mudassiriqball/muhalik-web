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
  product_category: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  product_type: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  product_weight: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_length: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_width: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  dimension_height: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  handling_fee: yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, "Must grater than 0 digit").max(100, "Can't be longer than 100"),
  product_description: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(5, "Must have at least 5 characters").max(200, "Can't be longer than 200 characters"),
  not_specified: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  Plastic: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  Ceramic: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  Metal: yup__WEBPACK_IMPORTED_MODULE_13__["string"](),
  Glass: yup__WEBPACK_IMPORTED_MODULE_13__["string"]()
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "Plastic", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_brand_name", yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(2, "Must have at least 2 characters").max(40, "Can't be longer than 40 characters")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_price", yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").positive('Enter Between 1-1000000').max(1000000, 'Enter Between 1-1000000')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_size", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_colors", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_tags", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "purchase_note", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_in_stock", yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(1, "Must grater than 1 digit").max(1000000, "Can't be longer than 1000000")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_warranty", yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-200').max(200, 'Enter Between 0-200')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "warranty_type", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_discount", yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "sku", yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "shipping_charges", yup__WEBPACK_IMPORTED_MODULE_13__["number"]().integer("Enter Only Numbers").min(0, 'Enter Between 0-100').max(100, 'Enter Between 0-100')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_image_link", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_attributes", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "product_variations", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_yup$object, "custom_fields", yup__WEBPACK_IMPORTED_MODULE_13__["string"]()), _yup$object));

var AddNew = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddNew, _Component);

  var _super = _createSuper(AddNew);

  function AddNew(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddNew);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductSizeChange", function (arr, actionMeta) {
      _this.setState({
        size: arr
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductColorChange", function (arr, actionMeta) {
      _this.setState({
        color: arr
      }); // this.setState({ color: newValue, colorError: 'no_error', colorErrorDiv: 'BorderDiv' });

    });

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleImage_linkChange", function (arr, actionMeta) {
      _this.setState({
        image_link: arr,
        image_linkError: 'no_error',
        image_linkErrorDiv: 'BorderDiv'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleImageLinkInputChange", function (aa) {
      _this.setState({
        inputValue: aa
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleImage_linkKeyDown", function (event) {
      var inputValue = _this.state.inputValue;
      var image_link = _this.state.image_link;
      if (!inputValue) return;

      switch (event.key) {
        case 'Enter':
        case 'Tab':
          _this.setState({
            inputValue: '',
            image_link: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(image_link), [createOption(inputValue)])
          });

          event.preventDefault();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductAttributeNameChange", function (e) {
      _this.setState({
        productAttributeName: e.target.value
      });
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handlePriceCheckboxChanged", function (e) {
      if (e.target.checked) {
        var copyArray = Object.assign([], _this.state.variationsArray);
        copyArray.forEach(function (element) {
          element.price = copyArray[0].items.price;
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductPriceChanged", function (e, index) {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductInStockChanged", function (e, index) {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleProductImageLinkChanged", function (e, index) {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "customFieldNameChangeHandler", function (e) {
      _this.setState({
        customFieldName: e.target.value
      });
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

    _this.state = {
      isLoading: false,
      showToast: false,
      showVariationsErrorAlert: false,
      product_categories_options: product_categories,
      productCategories: '',
      categoryError: 'no_error',
      categoryErrorDiv: 'BorderDiv',
      size: [],
      color: [],
      productTags: [],
      warrantyType: 'Year',
      inputValue: '',
      image_link: [],
      image_linkError: 'no_error',
      image_linkErrorDiv: 'BorderDiv',
      isVariableProduct: false,
      // Product Attributes
      productAttributesArray: [],
      productAttributeName: '',
      productAttributeValue: '',
      productAttributeError: '',
      variationsArray: [],
      isVariationsSaved: false,
      // Custom Fields
      customFieldsArray: [],
      customFieldName: '',
      customFieldValue: '',
      customFieldError: ''
    };
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
    } // Product Size

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
    key: "render",
    value: function render() {
      var _ref,
          _this2 = this;

      return __jsx(formik__WEBPACK_IMPORTED_MODULE_12__["Formik"], {
        validationSchema: schema,
        initialValues: (_ref = {
          product_name: '',
          product_category: '',
          product_type: '',
          product_weight: 0,
          dimension_length: '',
          dimension_width: '',
          dimension_height: '',
          handling_fee: '',
          product_description: '',
          not_specified: '',
          Plastic: '',
          Ceramic: '',
          Metal: '',
          Glass: ''
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "Plastic", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_brand_name", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_price", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_size", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_colors", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_tags", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "purchase_note", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_in_stock", 1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_warranty", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "warranty_type", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_discount", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "sku", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "shipping_charges", 40), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_image_link", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_attributes", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "product_variations", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, "custom_fields", ''), _ref),
        onSubmit: function onSubmit(values, _ref2) {
          var setSubmitting = _ref2.setSubmitting,
              resetForm = _ref2.resetForm;

          if (_this2.state.productCategories == '') {
            // if (this.state.customFieldNameArray == '') {
            //     this.setState({ categoryError: "error", categoryErrorDiv: 'RedBorderDiv' });
            // }
            if (_this2.state.productCategories == '') {
              _this2.setState({
                categoryError: "error",
                categoryErrorDiv: 'RedBorderDiv'
              });
            } // if (this.state.image_link == '') {
            //     this.setState({ image_linkError: "error", image_linkErrorDiv: 'RedBorderDiv' });
            // }


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
              values.product_size = _this2.state.size;
              values.product_colors = _this2.state.color;
              values.product_tags = _this2.state.productTags;
              values.product_image_link = _this2.state.image_link;
              values.product_variations = _this2.state.variationsArray;
              values.custom_fields = _this2.state.customFieldsArray;
              console.log('values: ', values);

              _this2.uploadProduct(values, _this2);

              if (_this2.uploadData(values)) {
                _this2.setState({
                  size: [],
                  color: [],
                  productCategories: [],
                  customFieldNameArray: [],
                  variationsArray: [],
                  productTags: [],
                  image_link: [],
                  inputValue: ''
                });

                resetForm();
              }

              setSubmitting(false);
            }, 500);
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 13
        }
      }, function (_ref3) {
        var handleSubmit = _ref3.handleSubmit,
            handleChange = _ref3.handleChange,
            values = _ref3.values,
            touched = _ref3.touched,
            isValid = _ref3.isValid,
            errors = _ref3.errors,
            handleBlur = _ref3.handleBlur,
            isSubmitting = _ref3.isSubmitting;
        return __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 537,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.title_row,
          noGutters: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 538,
            columnNumber: 33
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
          style: styles.title_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 539,
            columnNumber: 37
          }
        }), __jsx("div", {
          style: styles.title,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 540,
            columnNumber: 37
          }
        }, " Add New ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 542,
            columnNumber: 33
          }
        }, _this2.state.showVariationsErrorAlert ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
            lineNumber: 544,
            columnNumber: 41
          }
        }) : null, _this2.state.showToast ? __jsx(_toast__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
            lineNumber: 548,
            columnNumber: 61
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
          value: values.product_name,
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
          rows: "7",
          placeholder: "Enter description about season, style, material etc",
          id: values.product_description,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 584,
            columnNumber: 69
          }
        }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597,
            columnNumber: 45
          }
        }, __jsx(_add_new_contents_product_data__WEBPACK_IMPORTED_MODULE_26__["default"], {
          productTypeHandler: _this2.handleProductTypeChange,
          isVariableProduct: _this2.state.isVariableProduct,
          product_type_values: values.product_type,
          product_price_values: values.product_price,
          product_price_touched: touched.product_price,
          product_price_errors: errors.product_price,
          product_in_stock_values: values.product_in_stock,
          product_in_stock_touched: touched.product_in_stock,
          product_in_stock_errors: errors.product_in_stock,
          product_brand_name_values: values.product_brand_name,
          product_brand_name_touched: touched.product_brand_name,
          product_brand_name_errors: errors.product_brand_name,
          product_warranty_values: values.product_warranty,
          product_warranty_touched: touched.product_warranty,
          product_warranty_errors: errors.product_warranty,
          warranty_type_values: values.warranty_type,
          warranty_type_touched: touched.warranty_type,
          warranty_type_errors: errors.warranty_type,
          product_discount_values: values.product_discount,
          product_discount_touched: touched.product_discount,
          product_discount_errors: errors.product_discount,
          sku_values: values.sku,
          sku_touched: touched.sku,
          sku_errors: errors.sku,
          product_weight_values: values.product_weight,
          product_weight_touched: touched.product_weight,
          product_weight_errors: errors.product_weight,
          dimension_length_values: values.dimension_length,
          dimension_length_touched: touched.dimension_length,
          dimension_length_errors: errors.dimension_length,
          dimension_width_values: values.dimension_width,
          dimension_width_touched: touched.dimension_width,
          dimension_width_errors: errors.dimension_width,
          dimension_height_values: values.dimension_height,
          dimension_height_touched: touched.dimension_height,
          dimension_height_errors: errors.dimension_height,
          shipping_charges_values: values.shipping_charges,
          shipping_charges_touched: touched.shipping_charges,
          shipping_charges_errors: errors.shipping_charges,
          handling_fee_values: values.handling_fee,
          handling_fee_touched: touched.handling_fee,
          handling_fee_errors: errors.handling_fee,
          purchase_note_values: values.purchase_note,
          purchase_note_touched: touched.purchase_note,
          purchase_note_errors: errors.purchase_note,
          onChange: handleChange,
          touched: touched,
          errors: errors,
          color: _this2.state.color,
          productColorChangeHandler: _this2.handleProductColorChange,
          size: _this2.state.size,
          productSizeChangeHandler: _this2.handleProductSizeChange,
          attributesArray: _this2.state.productAttributesArray,
          name: _this2.state.productAttributeName,
          value: _this2.state.productAttributeValue,
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
          productPriceHandler: _this2.handleProductPriceChanged.bind(_this2),
          productStockHandler: _this2.handleProductInStockChanged.bind(_this2),
          productImageLinkHandler: _this2.handleProductImageLinkChanged.bind(_this2),
          priceCheckboxHandler: _this2.handlePriceCheckboxChanged.bind(_this2),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598,
            columnNumber: 49
          }
        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 693,
            columnNumber: 45
          }
        }, __jsx(_add_new_contents_custom_fields__WEBPACK_IMPORTED_MODULE_25__["default"], {
          customFieldsArray: _this2.state.customFieldsArray,
          name: _this2.state.customFieldName,
          value: _this2.state.customFieldValue,
          fieldNameHandler: _this2.customFieldNameChangeHandler.bind(_this2),
          fieldValueHandler: _this2.customFieldValueChangeHandler.bind(_this2),
          addFieldHandler: _this2.addCustomFieldBtnClicked.bind(_this2),
          update: _this2.updateCustomFieldsEvent.bind(_this2),
          "delete": _this2.deleteCustomFieldsEvent.bind(_this2),
          error: _this2.state.customFieldError,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 694,
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
            lineNumber: 709,
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
            lineNumber: 711,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 712,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 713,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 714,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 715,
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
            lineNumber: 716,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 717,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 720,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          style: {
            height: '250px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721,
            columnNumber: 61
          }
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + (_this2.state.categoryErrorDiv || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 722,
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
            lineNumber: 723,
            columnNumber: 69
          }
        })), __jsx("label", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + (_this2.state.categoryError || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 731,
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
            lineNumber: 742,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 743,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 744,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 745,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 746,
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
            lineNumber: 747,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 748,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 751,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 752,
            columnNumber: 61
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "not_specified",
          label: "Not Specified",
          style: styles.label,
          onChange: handleChange,
          isInvalid: touched.not_specified && errors.not_specified,
          feedback: errors.not_specified,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 753,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 761,
            columnNumber: 65
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "ceramic",
          label: "Ceramic",
          style: styles.label,
          onChange: handleChange,
          isInvalid: touched.Ceramic && errors.Ceramic,
          feedback: errors.Ceramic,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 762,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 770,
            columnNumber: 65
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "glass",
          label: "Glass",
          style: styles.label,
          onChange: handleChange,
          isInvalid: touched.Glass && errors.Glass,
          feedback: errors.Glass,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 771,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 779,
            columnNumber: 65
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "metal",
          label: "Metal",
          style: styles.label,
          onChange: handleChange,
          isInvalid: touched.Metal && errors.Metal,
          feedback: errors.Metal,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 780,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 788,
            columnNumber: 65
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Check, {
          name: "plastic",
          label: "Plastic",
          style: styles.label,
          onChange: handleChange,
          isInvalid: touched.Plastic && errors.Plastic,
          feedback: errors.Plastic,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 789,
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
            lineNumber: 805,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 806,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 807,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 808,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 809,
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
            lineNumber: 810,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 811,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 814,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          style: {
            height: '250px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 815,
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
            lineNumber: 816,
            columnNumber: 65
          }
        })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 835,
            columnNumber: 37
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 836,
            columnNumber: 41
          }
        }, __jsx("p", {
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 837,
            columnNumber: 45
          }
        }, "Fields with ", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 837,
            columnNumber: 81
          }
        }, " * "), " are mandatory."), __jsx("p", {
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 838,
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
            lineNumber: 839,
            columnNumber: 45
          }
        }, _this2.state.isLoading ? 'Uploading' : 'Upload', _this2.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
          animation: "grow",
          size: "sm",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 841,
            columnNumber: 73
          }
        }) : __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 841,
            columnNumber: 114
          }
        }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "3833814464",
          dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color],
          __self: _this2
        }, ".no_error.__jsx-style-dynamic-selector{display:none;}.error.__jsx-style-dynamic-selector{margin-top:4px;color:#DC3545;font-size:14px;display:block;}.RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:0.5px 0px 0.2px 0.5px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color, ";border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWcxQnFDLEFBRzBELEFBR0UsQUFNWSxBQUtmLEFBSUYsQUFHOEIsQUFPdEIsVUFUdEIsRUFKZSxDQWRmLEVBR2tCLEdBeUJILEtBYmYsSUFOa0MsRUFMZixBQXlCbkIsV0FSbUMsSUFoQmpCLGFBS0gsQ0FKZixVQUtBLEdBV3NDLGtDQUNqQixpQkFFdEIsa0JBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFkZC1uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBGb3JtLCBDb2wsIFJvdywgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uLCBUb2FzdCwgQWxlcnQsIE5hdiwgVGFicywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVBsdXMsIGZhS2V5LCBmYVNsaWRlcnNILCBmYVN0b3JlQWx0LCBmYVRydWNrLCBmYVRvb2xzLCBmYURvbGxhclNpZ24sIGZhRXhjbGFtYXRpb25UcmlhbmdsZSwgZmFMaXN0QWx0XHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCB7IGZhVGh1bWJzVXAsIGZhVGh1bWJzRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuaW1wb3J0IFJlYWN0U2VsZWN0TWF0ZXJpYWxVaSBmcm9tIFwicmVhY3Qtc2VsZWN0LW1hdGVyaWFsLXVpXCI7XHJcbmltcG9ydCBTaG93VG9hc3QgZnJvbSAnLi4vLi4vLi4vLi4vdG9hc3QnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgQ3VzdG9tRmllbGRzIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9jdXN0b20tZmllbGRzJztcclxuaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9wcm9kdWN0LWRhdGEnO1xyXG5pbXBvcnQgcHJvZHVjdF9zaXplX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LXNpemUtb3B0aW9ucydcclxuaW1wb3J0IHByb2R1Y3RfY29sb3Jfb3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL3Byb2R1Y3QtY29sb3Itb3B0aW9ucydcclxuXHJcbmNvbnN0IHByb2R1Y3RfYXR0cmlidXRlc19saXN0ID0gW1xyXG4gICAgeyB2YWx1ZTogJ1NpemUnLCBsYWJlbDogJ1NpemUnIH0sXHJcbiAgICB7IHZhbHVlOiAnQ29sb3InLCBsYWJlbDogJ0NvbG9yJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1ByaWNlJywgbGFiZWw6ICdQcmljZScgfSxcclxuXVxyXG5cclxuLy8gT3B0aW9uIExpc3QgZm9yIHNlbGVjdCBQcm9kdWN0IENhdGVnb3J5ICh3aGVuIG9mZmxpbmUpXHJcbmNvbnN0IHByb2R1Y3RfY2F0ZWdvcmllcyA9IFtcclxuICAgIHsgdmFsdWU6ICdTaG9lJywgbGFiZWw6ICdTaG9lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0Nsb3RoJywgbGFiZWw6ICdDbG90aCcgfSxcclxuICAgIHsgdmFsdWU6ICdTaGlydCcsIGxhYmVsOiAnU2hpcnQnIH0sXHJcbiAgICB7IHZhbHVlOiAnUGFudCcsIGxhYmVsOiAnUGFudCcgfVxyXG5dXHJcblxyXG4vLyBGb3IgUmVhY3QtU2VsZWN0XHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxufTtcclxuLy8gTW9kZWwgRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSk7XHJcblxyXG4vLyBZdXAgU2NoZW1hIGZvciB2YWxpZGF0aW9uIGZpZWxkc1xyXG5jb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KHtcclxuICAgIHByb2R1Y3RfbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgUHJvZHVjdCBOYW1lXCIpXHJcbiAgICAgICAgLm1pbigyLCBcIk11c3QgaGF2ZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDQwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDQwIGNoYXJhY3RlcnNcIiksXHJcblxyXG4gICAgcHJvZHVjdF9jYXRlZ29yeTogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIHByb2R1Y3RfdHlwZTogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF93ZWlnaHQ6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCBcIk11c3QgZ3JhdGVyIHRoYW4gMCBkaWdpdFwiKVxyXG4gICAgICAgIC5tYXgoMTAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMFwiKSxcclxuXHJcbiAgICBkaW1lbnNpb25fbGVuZ3RoOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcblxyXG4gICAgZGltZW5zaW9uX3dpZHRoOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcblxyXG4gICAgZGltZW5zaW9uX2hlaWdodDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG5cclxuICAgIGhhbmRsaW5nX2ZlZTogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG5cclxuICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oNSwgXCJNdXN0IGhhdmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgyMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMjAwIGNoYXJhY3RlcnNcIiksXHJcblxyXG4gICAgbm90X3NwZWNpZmllZDogeXVwLnN0cmluZygpLFxyXG4gICAgUGxhc3RpYzogeXVwLnN0cmluZygpLFxyXG4gICAgQ2VyYW1pYzogeXVwLnN0cmluZygpLFxyXG4gICAgTWV0YWw6IHl1cC5zdHJpbmcoKSxcclxuICAgIEdsYXNzOiB5dXAuc3RyaW5nKCksXHJcbiAgICBQbGFzdGljOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF9icmFuZF9uYW1lOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDIsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoNDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gNDAgY2hhcmFjdGVyc1wiKSxcclxuXHJcbiAgICBwcm9kdWN0X3ByaWNlOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgJ0VudGVyIEJldHdlZW4gMS0xMDAwMDAwJyksXHJcblxyXG4gICAgcHJvZHVjdF9zaXplOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF9jb2xvcnM6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBwcm9kdWN0X3RhZ3M6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBwdXJjaGFzZV9ub3RlOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF9pbl9zdG9jazogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDEsIFwiTXVzdCBncmF0ZXIgdGhhbiAxIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAwMDAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMDAwMDBcIiksXHJcblxyXG4gICAgcHJvZHVjdF93YXJyYW50eTogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMjAwJylcclxuICAgICAgICAubWF4KDIwMCwgJ0VudGVyIEJldHdlZW4gMC0yMDAnKSxcclxuXHJcbiAgICB3YXJyYW50eV90eXBlOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF9kaXNjb3VudDogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJylcclxuICAgICAgICAubWF4KDEwMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKSxcclxuXHJcbiAgICBza3U6IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG5cclxuXHJcbiAgICBzaGlwcGluZ19jaGFyZ2VzOiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG5cclxuICAgIHByb2R1Y3RfaW1hZ2VfbGluazogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIHByb2R1Y3RfYXR0cmlidXRlczogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF92YXJpYXRpb25zOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgY3VzdG9tX2ZpZWxkczogeXVwLnN0cmluZygpLFxyXG59KTtcclxuXHJcblxyXG5jbGFzcyBBZGROZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RvYXN0OiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RfY2F0ZWdvcmllc19vcHRpb25zOiBwcm9kdWN0X2NhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yaWVzOiAnJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnlFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicsXHJcblxyXG4gICAgICAgICAgICBzaXplOiBbXSxcclxuICAgICAgICAgICAgY29sb3I6IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0VGFnczogW10sXHJcblxyXG4gICAgICAgICAgICB3YXJyYW50eVR5cGU6ICdZZWFyJyxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGltYWdlX2xpbms6IFtdLFxyXG5cclxuXHJcbiAgICAgICAgICAgIGltYWdlX2xpbmtFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBBdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJycsXHJcblxyXG4gICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBpc1ZhcmlhdGlvbnNTYXZlZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAvLyBDdXN0b20gRmllbGRzXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lOiAnJyxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkRXJyb3I6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZSA9IHRoaXMuaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZEN1c3RvbUZpZWxkQnRuQ2xpY2tlZCA9IHRoaXMuYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy51cGxvYWRQcm9kdWN0ID0gdGhpcy51cGxvYWRQcm9kdWN0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0dGluZyBQcm9kdWN0IENhdGVnb3JpZXMgZnJvbSBEQlxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvcHJvZHVjdHMtY2F0ZWdvcmllcy9nZXQtYWxsJztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdF9jYXRlZ29yaWVzX29wdGlvbnM6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAgU3VibWl0IGRhdGEgdG8gYXBpXHJcbiAgICBhc3luYyB1cGxvYWRQcm9kdWN0KGRhdGEsIGN1cnJlbnRDb21wb25lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YTogJywgZGF0YSlcclxuICAgICAgICAvLyBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy9hZGQnO1xyXG4gICAgICAgIC8vIGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7XHJcbiAgICAgICAgLy8gICAgIGRhdGFcclxuICAgICAgICAvLyB9LCB7XHJcbiAgICAgICAgLy8gICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgIC8vIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dUb2FzdDogdHJ1ZSB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KCdFcnJvcjogJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2R1Y3QgU2l6ZVxyXG4gICAgaGFuZGxlUHJvZHVjdFNpemVDaGFuZ2UgPSAoYXJyLCBhY3Rpb25NZXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpemU6IGFyciB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gUHJvZHVjdCBDb2xvclxyXG4gICAgaGFuZGxlUHJvZHVjdENvbG9yQ2hhbmdlID0gKGFyciwgYWN0aW9uTWV0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogYXJyIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogbmV3VmFsdWUsIGNvbG9yRXJyb3I6ICdub19lcnJvcicsIGNvbG9yRXJyb3JEaXY6ICdCb3JkZXJEaXYnIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVQcm9kdWN0VGFnQ2hhbmdlID0gKGFycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0VGFnczogYXJyIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gUHJvZHVjdCBDYXRlZ29yeVxyXG4gICAgaGFuZGxlUHJvZHVjdENhdGVnb3J5Q2hhbmdlID0gKGFycikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0Q2F0ZWdvcmllczogYXJyLCBjYXRlZ29yeUVycm9yOiAnbm9fZXJyb3InLCBjYXRlZ29yeUVycm9yRGl2OiAnQm9yZGVyRGl2JyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9kdWN0IEltYWdlIExpbmtcclxuICAgIGhhbmRsZUltYWdlX2xpbmtDaGFuZ2UgPSAoYXJyLCBhY3Rpb25NZXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlX2xpbms6IGFyciwgaW1hZ2VfbGlua0Vycm9yOiAnbm9fZXJyb3InLCBpbWFnZV9saW5rRXJyb3JEaXY6ICdCb3JkZXJEaXYnIH0pO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZUltYWdlTGlua0lucHV0Q2hhbmdlID0gKGFhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGFhIH0pO1xyXG4gICAgfTtcclxuICAgIGhhbmRsZUltYWdlX2xpbmtLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcclxuICAgICAgICBjb25zdCBpbWFnZV9saW5rID0gdGhpcy5zdGF0ZS5pbWFnZV9saW5rO1xyXG4gICAgICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICAgICAgY2FzZSAnVGFiJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2xpbms6IFsuLi5pbWFnZV9saW5rLCBjcmVhdGVPcHRpb24oaW5wdXRWYWx1ZSldLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBoYW5kbGVQcm9kdWN0VHlwZUNoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09ICd2YXJpYWJsZS1wcm91Y3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhYmxlUHJvZHVjdDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhYmxlUHJvZHVjdDogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2R1Y3QgQXR0cmlidXRlc1xyXG4gICAgaGFuZGxlUHJvZHVjdEF0dHJpYnV0ZU5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlTmFtZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVWYWx1ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUFkZFByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lICE9ICcnICYmIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZVZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICcnIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVOYW1lOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZXNBcnJheTogY29weUFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJ0VudGVyIEZpZWxkIE5hbWUgYW5kIFZhbHVlJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTYXZlUHJvZHVjdEF0dHJpYnV0ZXNDbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBhbGxBcnJheXMgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdmFyIHRyaW0gPSBlbGVtZW50LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZS5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB2YXIgc3BsaXRBcnJheSA9IHRyaW0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgYWxsQXJyYXlzLnB1c2goc3BsaXRBcnJheSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmFsbFBvc3NpYmxlQ2FzZXMoYWxsQXJyYXlzKVxyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBlbGVtZW50LnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gW107XHJcblxyXG4gICAgICAgICAgICBzcGxpdC5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnB1c2goeyBuYW1lOiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXlbaV0ucHJvZHVjdEF0dHJpYnV0ZU5hbWUsIHZhbHVlOiBlIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhLnB1c2goeyBpdGVtczogaXRlbSwgcHJpY2U6ICcnLCBzdG9jazogJzEnLCBpbWFnZV9saW5rOiAnJywgcHJpY2VfZXJyb3I6ICcnLCBpbWFnZV9saW5rX2Vycm9yOiAnJyB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BsaXQgQXJyYXk6IFwiLCBkYXRhKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGRhdGEgfSlcclxuICAgIH1cclxuICAgIGFsbFBvc3NpYmxlQ2FzZXMoYXJyKSB7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGFsbENhc2VzT2ZSZXN0ID0gdGhpcy5hbGxQb3NzaWJsZUNhc2VzKGFyci5zbGljZSgxKSk7ICAvLyByZWN1ciB3aXRoIHRoZSByZXN0IG9mIGFycmF5XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FzZXNPZlJlc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyWzBdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyWzBdW2pdICsgXCItXCIgKyBhbGxDYXNlc09mUmVzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQgPSAoaW5kZXgsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0geyBwcm9kdWN0QXR0cmlidXRlTmFtZTogbmFtZSwgcHJvZHVjdEF0dHJpYnV0ZVZhbHVlOiB2YWx1ZSB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVEZWxldGVQcm9kdWN0QXR0cmlidXRlQ2xpY2tlZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RWYXJpYXRpb25DbGlja2VkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVByaWNlQ2hlY2tib3hDaGFuZ2VkID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcblxyXG4gICAgICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJpY2UgPSBjb3B5QXJyYXlbMF0uaXRlbXMucHJpY2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlUHJvZHVjdFByaWNlQ2hhbmdlZCA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBsZXQgb2JqZWN0ID0gY29weUFycmF5W2luZGV4XTtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICBvYmplY3QucHJpY2UgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9iamVjdDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZVByb2R1Y3RJblN0b2NrQ2hhbmdlZCA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBsZXQgb2JqZWN0ID0gY29weUFycmF5W2luZGV4XTtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICBvYmplY3Quc3RvY2sgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9iamVjdDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZVByb2R1Y3RJbWFnZUxpbmtDaGFuZ2VkID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBvYmplY3QgPSBjb3B5QXJyYXlbaW5kZXhdO1xyXG4gICAgICAgIG9iamVjdC5pbWFnZV9saW5rID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IG9iamVjdDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBzYXZlVmFyaWF0aW9uc0NsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICBjb3B5QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpY2UgPT0gJycgfHwgZWxlbWVudC5pbWFnZV9saW5rID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcmljZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucHJpY2VfZXJyb3IgPSAnRW50ZXIgcHJpY2UnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbWFnZV9saW5rID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbWFnZV9saW5rX2Vycm9yID0gJ0VudGVyIEltYWdlIExpbmsnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlX2Vycm9yID0gJydcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2VfbGlua19lcnJvciA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1ZhcmlhdGlvbnNTYXZlZDogdHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICB2YXJpYXRpb25zRXJyb3JDaGVjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2VfZXJyb3IgIT0gJycgfHwgZGF0YS5pbWFnZV9saW5rX2Vycm9yICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMXB4IHNvbGlkIHJlZCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBDdXN0b20gRmllbGRzXHJcbiAgICBjdXN0b21GaWVsZE5hbWVDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG4gICAgY3VzdG9tRmllbGRWYWx1ZUNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZFZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG4gICAgYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1c3RvbUZpZWxkTmFtZSAhPSAnJyAmJiB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkRXJyb3I6ICcnIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXkpO1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZE5hbWU6IHRoaXMuc3RhdGUuY3VzdG9tRmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRWYWx1ZTogdGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGROYW1lOiAnJyB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRWYWx1ZTogJycgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkc0FycmF5OiBjb3B5QXJyYXkgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRFcnJvcjogJ0VudGVyIEZpZWxkIE5hbWUgYW5kIFZhbHVlJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDdXN0b21GaWVsZHNFdmVudCA9IChpbmRleCwgbmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0geyBjdXN0b21GaWVsZE5hbWU6IG5hbWUsIGN1c3RvbUZpZWxkVmFsdWU6IHZhbHVlIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDdXN0b21GaWVsZHNFdmVudCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZHNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2NhdGVnb3J5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3R5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9sZW5ndGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub3Rfc3BlY2lmaWVkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBQbGFzdGljOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBDZXJhbWljOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBNZXRhbDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgR2xhc3M6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIFBsYXN0aWM6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9zaXplOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2NvbG9yczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90YWdzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICBza3U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXM6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW1hZ2VfbGluazogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9hdHRyaWJ1dGVzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ZhcmlhdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbV9maWVsZHM6ICcnLFxyXG5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLmN1c3RvbUZpZWxkTmFtZUFycmF5ID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlFcnJvcjogXCJlcnJvclwiLCBjYXRlZ29yeUVycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0Q2F0ZWdvcmllcyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RXJyb3I6IFwiZXJyb3JcIiwgY2F0ZWdvcnlFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuaW1hZ2VfbGluayA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlX2xpbmtFcnJvcjogXCJlcnJvclwiLCBpbWFnZV9saW5rRXJyb3JEaXY6ICdSZWRCb3JkZXJEaXYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5pc1ZhcmlhdGlvbnNTYXZlZCA9PSBmYWxzZSAmJiB2YWx1ZXMucHJvZHVjdF90eXBlID09ICd2YXJpYWJsZS1wcm91Y3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VmFyaWF0aW9uc0Vycm9yQWxlcnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3NpemUgPSB0aGlzLnN0YXRlLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF9jb2xvcnMgPSB0aGlzLnN0YXRlLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfdGFncyA9IHRoaXMuc3RhdGUucHJvZHVjdFRhZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfaW1hZ2VfbGluayA9IHRoaXMuc3RhdGUuaW1hZ2VfbGluaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF92YXJpYXRpb25zID0gdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuY3VzdG9tX2ZpZWxkcyA9IHRoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWVzOiAnLCB2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZFByb2R1Y3QodmFsdWVzLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwbG9hZERhdGEodmFsdWVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBbXSwgY29sb3I6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkTmFtZUFycmF5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRhZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9saW5rOiBbXSwgaW5wdXRWYWx1ZTogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCB0b3VjaGVkLCBpc1ZhbGlkLCBlcnJvcnMsIGhhbmRsZUJsdXIsIGlzU3VibWl0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnRpdGxlX3Jvd30gbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c30gc3R5bGU9e3N0eWxlcy50aXRsZV9mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3N0eWxlcy50aXRsZX0+IEFkZCBOZXcgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93VG9hc3Qgb25DbG9zZUhhbmRsZXI9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiBmYWxzZSB9KX0gc2hvdz17dGhpcy5zdGF0ZS5zaG93VmFyaWF0aW9uc0Vycm9yQWxlcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnRXJyb3InfSBtZXNzYWdlPXsnUGxlYXNlIEFkZC9TYXZlIFZhcmlhdGlvbnMgRmlyc3QnfSBpY29uTmFtZT17ZmFFeGNsYW1hdGlvblRyaWFuZ2xlfSBjb2xvcj17XCJyZWRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUb2FzdCA/IDxTaG93VG9hc3Qgb25DbG9zZUhhbmRsZXI9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX0gc2hvdz17dGhpcy5zdGF0ZS5zaG93VG9hc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdWNjZXNzJ30gbWVzc2FnZT17J1Byb2R1Y3QgVXBsb2FkZWQgU3VjY2Vzc2Z1bGx5J30gaWNvbk5hbWU9e2ZhVGh1bWJzVXB9IGNvbG9yPXtcImdyZWVuXCJ9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnMgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzIlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezl9IG1kPXs5fSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgTmFtZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PlByb2R1Y3QgTmFtZTxzcGFuPio8L3NwYW4+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9kdWN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLnByb2R1Y3RfbmFtZSAmJiBlcnJvcnMucHJvZHVjdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBOYW1lICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBEaXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5Qcm9kdWN0IERpc2NydXB0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVzY3JpcHRpb24gYWJvdXQgc2Vhc29uLCBzdHlsZSwgbWF0ZXJpYWwgZXRjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3ZhbHVlcy5wcm9kdWN0X2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgRGF0YSBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGVIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RUeXBlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q9e3RoaXMuc3RhdGUuaXNWYXJpYWJsZVByb2R1Y3R9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfdHlwZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2VfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9wcmljZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9pbl9zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaW5fc3RvY2tfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9pbl9zdG9ja31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWVfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF9icmFuZF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9icmFuZF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X3ZhbHVlcz17dmFsdWVzLnByb2R1Y3Rfd2FycmFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF93YXJyYW50eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2FycmFudHlfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF93YXJyYW50eX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX3ZhbHVlcz17dmFsdWVzLndhcnJhbnR5X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX3RvdWNoZWQ9e3RvdWNoZWQud2FycmFudHlfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGVfZXJyb3JzPXtlcnJvcnMud2FycmFudHlfdHlwZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF9kaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnRfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF9kaXNjb3VudH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3VfdmFsdWVzPXt2YWx1ZXMuc2t1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X3RvdWNoZWQ9e3RvdWNoZWQuc2t1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X2Vycm9ycz17ZXJyb3JzLnNrdX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3dlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd2VpZ2h0X3RvdWNoZWQ9e3RvdWNoZWQucHJvZHVjdF93ZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X3dlaWdodH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX3RvdWNoZWQ9e3RvdWNoZWQuZGltZW5zaW9uX2xlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9sZW5ndGhfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX2xlbmd0aH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGhfdmFsdWVzPXt2YWx1ZXMuZGltZW5zaW9uX3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX3RvdWNoZWQ9e3RvdWNoZWQuZGltZW5zaW9uX3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl93aWR0aH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl9oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X3RvdWNoZWQ9e3RvdWNoZWQuZGltZW5zaW9uX2hlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHRfZXJyb3JzPXtlcnJvcnMuZGltZW5zaW9uX2hlaWdodH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX3ZhbHVlcz17dmFsdWVzLnNoaXBwaW5nX2NoYXJnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX3RvdWNoZWQ9e3RvdWNoZWQuc2hpcHBpbmdfY2hhcmdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nX2NoYXJnZXNfZXJyb3JzPXtlcnJvcnMuc2hpcHBpbmdfY2hhcmdlc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGluZ19mZWVfdmFsdWVzPXt2YWx1ZXMuaGFuZGxpbmdfZmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX3RvdWNoZWQ9e3RvdWNoZWQuaGFuZGxpbmdfZmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX2Vycm9ycz17ZXJyb3JzLmhhbmRsaW5nX2ZlZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX3ZhbHVlcz17dmFsdWVzLnB1cmNoYXNlX25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX3RvdWNoZWQ9e3RvdWNoZWQucHVyY2hhc2Vfbm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX25vdGVfZXJyb3JzPXtlcnJvcnMucHVyY2hhc2Vfbm90ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXt0aGlzLnN0YXRlLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvbG9yQ2hhbmdlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0Q29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXt0aGlzLnN0YXRlLnNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2l6ZUNoYW5nZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdFNpemVDaGFuZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc0FycmF5PXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdEF0dHJpYnV0ZU5hbWVDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0QXR0cmlidXRlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEF0dHJpYnV0ZUhhbmRsZXI9e3RoaXMuaGFuZGxlQWRkUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy5oYW5kbGVVcGRhdGVQcm9kdWN0QXR0cmlidXRlQ2xpY2tlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQXR0cmlidXRlSGFuZGxlcj17dGhpcy5oYW5kbGVEZWxldGVQcm9kdWN0QXR0cmlidXRlQ2xpY2tlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVmFyaWF0aW9uSGFuZGxlcj17dGhpcy5oYW5kbGVEZWxldGVQcm9kdWN0VmFyaWF0aW9uQ2xpY2tlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVZhcmlhdGlvbnNIYW5kbGVyPXt0aGlzLnNhdmVWYXJpYXRpb25zQ2xpY2tlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0Vycm9ySGFuZGxlcj17dGhpcy52YXJpYXRpb25zRXJyb3JDaGVjay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZUVycm9yfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVBdHRyaWJ1dGVzSGFuZGxlcj17dGhpcy5oYW5kbGVTYXZlUHJvZHVjdEF0dHJpYnV0ZXNDbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uc0FycmF5PXt0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdFByaWNlQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFN0b2NrSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0SW5TdG9ja0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbWFnZUxpbmtIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RJbWFnZUxpbmtDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUNoZWNrYm94SGFuZGxlcj17dGhpcy5oYW5kbGVQcmljZUNoZWNrYm94Q2hhbmdlZC5iaW5kKHRoaXMpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgRGF0YSBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEN1c3RvbSBGaWVsZHMgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzQXJyYXk9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGRzQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLmN1c3RvbUZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1c3RvbUZpZWxkVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWVIYW5kbGVyPXt0aGlzLmN1c3RvbUZpZWxkTmFtZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVIYW5kbGVyPXt0aGlzLmN1c3RvbUZpZWxkVmFsdWVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRGaWVsZEhhbmRsZXI9e3RoaXMuYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlQ3VzdG9tRmllbGRzRXZlbnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5kZWxldGVDdXN0b21GaWVsZHNFdmVudC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuY3VzdG9tRmllbGRFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezN9IG1kPXszfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgQ2F0ZWdvcnkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UHJvZHVjdCBDYXRlZ29yaWVzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvckRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDYXRlZ29yeUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5wcm9kdWN0X2NhdGVnb3JpZXNfb3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0L0VudGVyIENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNhdGVnb3J5RXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGV0IENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgYXRlZ29yeSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIERhbmdlcm91cyBHb29kcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5jYXJkX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5EYW5nZXJvdXMgR29vZHM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHNpemU9XCJzbVwiIGV2ZW50S2V5PVwiMFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhU2xpZGVyc0h9IHN0eWxlPXtzdHlsZXMudmFyaWF0aW9uc19mb250YXdlc29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdF9zcGVjaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm90IFNwZWNpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5ub3Rfc3BlY2lmaWVkICYmIGVycm9ycy5ub3Rfc3BlY2lmaWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrPXtlcnJvcnMubm90X3NwZWNpZmllZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNlcmFtaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VyYW1pY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5DZXJhbWljICYmIGVycm9ycy5DZXJhbWljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrPXtlcnJvcnMuQ2VyYW1pY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLkdsYXNzICYmIGVycm9ycy5HbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFjaz17ZXJyb3JzLkdsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWV0YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWV0YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuTWV0YWwgJiYgZXJyb3JzLk1ldGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrPXtlcnJvcnMuTWV0YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGFzdGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsYXN0aWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuUGxhc3RpYyAmJiBlcnJvcnMuUGxhc3RpY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFjaz17ZXJyb3JzLlBsYXN0aWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2ZEYW5nZXJvdXMgR29vZHMgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IFRhZ3MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UHJvZHVjdCBUYWdzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0YWJsZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0VGFnQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2R1Y3RfY29sb3Jfb3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0VGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdC9FbnRlciBUYWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IFRhZ3MgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBGb3JtIFN1Ym1pdCBCdG4gUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5sYWJlbH0+RmllbGRzIHdpdGggPHNwYW4+ICogPC9zcGFuPiBhcmUgbWFuZGF0b3J5LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Gb3IgYWRkaW5nIG5ldyBzaXplLCBjb2xvciwgbGluazogRW50ZXIgdGV4dCBhbmQgaGl0IEVudGVyIG9yIFRhYiBrZXk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuaXNMb2FkaW5nfSBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAnVXBsb2FkaW5nJyA6ICdVcGxvYWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyA8U3Bpbm5lciBhbmltYXRpb249XCJncm93XCIgc2l6ZT1cInNtXCIgLz4gOiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBGb3JtIFN1Ym1pdCBCdG4gUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub19lcnJvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0RDMzU0NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUmVkQm9yZGVyRGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0RDMzU0NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVweCAwcHggMC4ycHggMC41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQm9yZGVyRGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2X2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzQzNDU1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRpdGxlX3Jvdzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMS41JSA0JSdcclxuICAgIH0sXHJcbiAgICB0aXRsZV9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICczJScsXHJcbiAgICAgICAgd2lkdGg6ICcyNnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzI2cHgnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5J1xyXG4gICAgfSxcclxuXHJcbiAgICBuYXZfbGluazoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgcm93OiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMiUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwJSdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICBjYXJkX2hlYWRlcjoge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIC8vIGNvbG9yOiAnIzZBNzA3NCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbGlnaHRncmF5J1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgc3VibWl0X2J0bjoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbXJ5X2NvbG9yfWAsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMSUnLFxyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgfSxcclxuICAgIHRlcm1fY29uZGl0aW9uX2xhYmVsOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBmb250U2l6ZTogYCR7R2xvYmFsU3R5bGVTaGVldC5mb3JtX2xhYmVsX2ZvbnRzaXplfWAsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogJy0xMHB4JyxcclxuICAgICAgICBtYXJnaW5Ub3A6ICctMTBweCcsXHJcbiAgICB9LFxyXG4gICAgZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgcHJvZHVjdF9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1hcnlfdGV4dF9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMTAlJyxcclxuICAgICAgICB3aWR0aDogJzE3cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE3cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTdweCcsXHJcbiAgICB9LFxyXG4gICAgdmFyaWF0aW9uc19mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMTAlJyxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFkZE5ldzsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new.js */")));
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
    background: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].primry_color),
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
//# sourceMappingURL=vendor.js.c3321e701046486c897f.hot-update.js.map