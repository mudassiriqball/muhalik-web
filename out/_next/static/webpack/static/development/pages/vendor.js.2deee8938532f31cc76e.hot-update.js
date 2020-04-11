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
              }); //     return true;
              // }).catch(function (error) {
              //     currentComponent.setState({ isLoading: false });
              //     alert('Error: ', error.response.data.message);
              //     return false;
              // });

            case 3:
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

              _this2.uploadProduct(values, _this2); // if (this.uploadData(values)) {
              //     this.setState({ size: [], color: [], customFieldNameArray: [], image_link: [], inputValue: '' });
              //     resetForm();
              // }


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
            lineNumber: 530,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.title_row,
          noGutters: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 531,
            columnNumber: 33
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPlus"],
          style: styles.title_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 532,
            columnNumber: 37
          }
        }), __jsx("div", {
          style: styles.title,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 533,
            columnNumber: 37
          }
        }, " Add New ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
          noValidate: true,
          onSubmit: handleSubmit,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 535,
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
            lineNumber: 537,
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
            lineNumber: 541,
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
            lineNumber: 543,
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
            lineNumber: 544,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 546,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          style: styles.label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547,
            columnNumber: 49
          }
        }, "Product Name", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547,
            columnNumber: 94
          }
        }, "*")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548,
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
            lineNumber: 549,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 557,
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
            lineNumber: 565,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 566,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 567,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 569,
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
            lineNumber: 570,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 571,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 575,
            columnNumber: 61
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576,
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
            lineNumber: 577,
            columnNumber: 69
          }
        }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 590,
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
            lineNumber: 591,
            columnNumber: 49
          }
        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 686,
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
            lineNumber: 687,
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
            lineNumber: 702,
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
            lineNumber: 704,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 705,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 706,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 707,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 708,
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
            lineNumber: 709,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 710,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 713,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          style: {
            height: '250px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 714,
            columnNumber: 61
          }
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + (_this2.state.categoryErrorDiv || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 715,
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
            lineNumber: 716,
            columnNumber: 69
          }
        })), __jsx("label", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]) + " " + (_this2.state.categoryError || ""),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 724,
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
            lineNumber: 735,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 736,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 737,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 738,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 739,
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
            lineNumber: 740,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 741,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 744,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 745,
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
            lineNumber: 746,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 754,
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
            lineNumber: 755,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 763,
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
            lineNumber: 764,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 772,
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
            lineNumber: 773,
            columnNumber: 65
          }
        }), __jsx("br", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 781,
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
            lineNumber: 782,
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
            lineNumber: 798,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 799,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          style: styles.card,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 800,
            columnNumber: 53
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Header, {
          style: styles.card_header,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 801,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 802,
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
            lineNumber: 803,
            columnNumber: 61
          }
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
          size: "xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faSlidersH"],
          style: styles.variations_fontawesome,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 804,
            columnNumber: 65
          }
        }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Accordion"].Collapse, {
          eventKey: "0",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 807,
            columnNumber: 57
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Card"].Body, {
          style: {
            height: '250px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 808,
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
            lineNumber: 809,
            columnNumber: 65
          }
        })))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
          style: styles.row,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 828,
            columnNumber: 37
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 829,
            columnNumber: 41
          }
        }, __jsx("p", {
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 830,
            columnNumber: 45
          }
        }, "Fields with ", __jsx("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 830,
            columnNumber: 81
          }
        }, " * "), " are mandatory."), __jsx("p", {
          style: styles.label,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 831,
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
            lineNumber: 832,
            columnNumber: 45
          }
        }, _this2.state.isLoading ? 'Uploading' : 'Upload', _this2.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
          animation: "grow",
          size: "sm",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 834,
            columnNumber: 73
          }
        }) : __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3833814464", [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color]]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 834,
            columnNumber: 114
          }
        }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "3833814464",
          dynamic: [_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color],
          __self: _this2
        }, ".no_error.__jsx-style-dynamic-selector{display:none;}.error.__jsx-style-dynamic-selector{margin-top:4px;color:#DC3545;font-size:14px;display:block;}.RedBorderDiv.__jsx-style-dynamic-selector{border:0.5px solid #DC3545;padding:0.5px 0px 0.2px 0.5px;width:100%;}.BorderDiv.__jsx-style-dynamic-selector{border:none;width:100%;}span.__jsx-style-dynamic-selector{color:red;}.nav_link.__jsx-style-dynamic-selector{background:".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_22__["default"].admin_primry_color, ";border-top:0.5px solid #434556;border-bottom:0.5px solid #434556;margin:1.5px 0px;border-radius:4px;}p.__jsx-style-dynamic-selector{text-align:center;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFx2ZW5kb3JcXGRhc2hib2FyZFxcZGFzaGJvYXJkLWNvbnRlbnRzXFxwcm9kdWN0LWNvbnRlbnRzXFxhZGQtbmV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXkwQnFDLEFBRzBELEFBR0UsQUFNWSxBQUtmLEFBSUYsQUFHOEIsQUFPdEIsVUFUdEIsRUFKZSxDQWRmLEVBR2tCLEdBeUJILEtBYmYsSUFOa0MsRUFMZixBQXlCbkIsV0FSbUMsSUFoQmpCLGFBS0gsQ0FKZixVQUtBLEdBV3NDLGtDQUNqQixpQkFFdEIsa0JBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNdWRhc3NpclJcXERlc2t0b3BcXE11aGFsaWtcXG11aGFsaWt3ZWJcXHNyY1xccGFnZXNcXGNvbXBvbmVudHNcXHZlbmRvclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXGFkZC1uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBGb3JtLCBDb2wsIFJvdywgQ2FyZCwgSW5wdXRHcm91cCwgQnV0dG9uLCBUb2FzdCwgQWxlcnQsIE5hdiwgVGFicywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYVBsdXMsIGZhS2V5LCBmYVNsaWRlcnNILCBmYVN0b3JlQWx0LCBmYVRydWNrLCBmYVRvb2xzLCBmYURvbGxhclNpZ24sIGZhRXhjbGFtYXRpb25UcmlhbmdsZSwgZmFMaXN0QWx0XHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCB7IGZhVGh1bWJzVXAsIGZhVGh1bWJzRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcclxuaW1wb3J0IFJlYWN0U2VsZWN0TWF0ZXJpYWxVaSBmcm9tIFwicmVhY3Qtc2VsZWN0LW1hdGVyaWFsLXVpXCI7XHJcbmltcG9ydCBTaG93VG9hc3QgZnJvbSAnLi4vLi4vLi4vLi4vdG9hc3QnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZVNoZWV0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgQ3VzdG9tRmllbGRzIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9jdXN0b20tZmllbGRzJztcclxuaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gJy4vYWRkLW5ldy1jb250ZW50cy9wcm9kdWN0LWRhdGEnO1xyXG5pbXBvcnQgcHJvZHVjdF9zaXplX29wdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL2NvbnN0cy9wcm9kdWN0LXNpemUtb3B0aW9ucydcclxuaW1wb3J0IHByb2R1Y3RfY29sb3Jfb3B0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zZGsvY29uc3RzL3Byb2R1Y3QtY29sb3Itb3B0aW9ucydcclxuXHJcbmNvbnN0IHByb2R1Y3RfYXR0cmlidXRlc19saXN0ID0gW1xyXG4gICAgeyB2YWx1ZTogJ1NpemUnLCBsYWJlbDogJ1NpemUnIH0sXHJcbiAgICB7IHZhbHVlOiAnQ29sb3InLCBsYWJlbDogJ0NvbG9yJyB9LFxyXG4gICAgeyB2YWx1ZTogJ1ByaWNlJywgbGFiZWw6ICdQcmljZScgfSxcclxuXVxyXG5cclxuLy8gT3B0aW9uIExpc3QgZm9yIHNlbGVjdCBQcm9kdWN0IENhdGVnb3J5ICh3aGVuIG9mZmxpbmUpXHJcbmNvbnN0IHByb2R1Y3RfY2F0ZWdvcmllcyA9IFtcclxuICAgIHsgdmFsdWU6ICdTaG9lJywgbGFiZWw6ICdTaG9lJyB9LFxyXG4gICAgeyB2YWx1ZTogJ0Nsb3RoJywgbGFiZWw6ICdDbG90aCcgfSxcclxuICAgIHsgdmFsdWU6ICdTaGlydCcsIGxhYmVsOiAnU2hpcnQnIH0sXHJcbiAgICB7IHZhbHVlOiAnUGFudCcsIGxhYmVsOiAnUGFudCcgfVxyXG5dXHJcblxyXG4vLyBGb3IgUmVhY3QtU2VsZWN0XHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBEcm9wZG93bkluZGljYXRvcjogbnVsbCxcclxufTtcclxuLy8gTW9kZWwgRm9yIFJlYWN0LVNlbGVjdFxyXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWwpID0+ICh7XHJcbiAgICB2YWx1ZTogbGFiZWwsXHJcbiAgICBsYWJlbCxcclxufSk7XHJcblxyXG4vLyBZdXAgU2NoZW1hIGZvciB2YWxpZGF0aW9uIGZpZWxkc1xyXG5jb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KHtcclxuICAgIHByb2R1Y3RfbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW50ZXIgUHJvZHVjdCBOYW1lXCIpXHJcbiAgICAgICAgLm1pbigyLCBcIk11c3QgaGF2ZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnNcIilcclxuICAgICAgICAubWF4KDQwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDQwIGNoYXJhY3RlcnNcIiksXHJcblxyXG4gICAgcHJvZHVjdF9jYXRlZ29yeTogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIHByb2R1Y3RfdHlwZTogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF93ZWlnaHQ6IHl1cC5udW1iZXIoKVxyXG4gICAgICAgIC5pbnRlZ2VyKFwiRW50ZXIgT25seSBOdW1iZXJzXCIpXHJcbiAgICAgICAgLm1pbigwLCBcIk11c3QgZ3JhdGVyIHRoYW4gMCBkaWdpdFwiKVxyXG4gICAgICAgIC5tYXgoMTAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMFwiKSxcclxuXHJcbiAgICBkaW1lbnNpb25fbGVuZ3RoOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcblxyXG4gICAgZGltZW5zaW9uX3dpZHRoOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgXCJNdXN0IGdyYXRlciB0aGFuIDAgZGlnaXRcIilcclxuICAgICAgICAubWF4KDEwMCwgXCJDYW4ndCBiZSBsb25nZXIgdGhhbiAxMDBcIiksXHJcblxyXG4gICAgZGltZW5zaW9uX2hlaWdodDogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG5cclxuICAgIGhhbmRsaW5nX2ZlZTogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsIFwiTXVzdCBncmF0ZXIgdGhhbiAwIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMTAwXCIpLFxyXG5cclxuICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oNSwgXCJNdXN0IGhhdmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzXCIpXHJcbiAgICAgICAgLm1heCgyMDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gMjAwIGNoYXJhY3RlcnNcIiksXHJcblxyXG4gICAgbm90X3NwZWNpZmllZDogeXVwLnN0cmluZygpLFxyXG4gICAgUGxhc3RpYzogeXVwLnN0cmluZygpLFxyXG4gICAgQ2VyYW1pYzogeXVwLnN0cmluZygpLFxyXG4gICAgTWV0YWw6IHl1cC5zdHJpbmcoKSxcclxuICAgIEdsYXNzOiB5dXAuc3RyaW5nKCksXHJcbiAgICBQbGFzdGljOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF9icmFuZF9uYW1lOiB5dXAuc3RyaW5nKClcclxuICAgICAgICAubWluKDIsIFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgIC5tYXgoNDAsIFwiQ2FuJ3QgYmUgbG9uZ2VyIHRoYW4gNDAgY2hhcmFjdGVyc1wiKSxcclxuXHJcbiAgICBwcm9kdWN0X3ByaWNlOiB5dXAubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5wb3NpdGl2ZSgnRW50ZXIgQmV0d2VlbiAxLTEwMDAwMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwMDAwMCwgJ0VudGVyIEJldHdlZW4gMS0xMDAwMDAwJyksXHJcblxyXG4gICAgcHJvZHVjdF9zaXplOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF9jb2xvcnM6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBwcm9kdWN0X3RhZ3M6IHl1cC5zdHJpbmcoKSxcclxuXHJcbiAgICBwdXJjaGFzZV9ub3RlOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF9pbl9zdG9jazogeXVwLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDEsIFwiTXVzdCBncmF0ZXIgdGhhbiAxIGRpZ2l0XCIpXHJcbiAgICAgICAgLm1heCgxMDAwMDAwLCBcIkNhbid0IGJlIGxvbmdlciB0aGFuIDEwMDAwMDBcIiksXHJcblxyXG4gICAgcHJvZHVjdF93YXJyYW50eTogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMjAwJylcclxuICAgICAgICAubWF4KDIwMCwgJ0VudGVyIEJldHdlZW4gMC0yMDAnKSxcclxuXHJcbiAgICB3YXJyYW50eV90eXBlOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgcHJvZHVjdF9kaXNjb3VudDogeXVwLm51bWJlcigpLmludGVnZXIoXCJFbnRlciBPbmx5IE51bWJlcnNcIilcclxuICAgICAgICAubWluKDAsICdFbnRlciBCZXR3ZWVuIDAtMTAwJylcclxuICAgICAgICAubWF4KDEwMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKSxcclxuXHJcbiAgICBza3U6IHl1cC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG5cclxuXHJcbiAgICBzaGlwcGluZ19jaGFyZ2VzOiB5dXAubnVtYmVyKCkuaW50ZWdlcihcIkVudGVyIE9ubHkgTnVtYmVyc1wiKVxyXG4gICAgICAgIC5taW4oMCwgJ0VudGVyIEJldHdlZW4gMC0xMDAnKVxyXG4gICAgICAgIC5tYXgoMTAwLCAnRW50ZXIgQmV0d2VlbiAwLTEwMCcpLFxyXG5cclxuICAgIHByb2R1Y3RfaW1hZ2VfbGluazogeXVwLnN0cmluZygpLFxyXG5cclxuICAgIHByb2R1Y3RfYXR0cmlidXRlczogeXVwLnN0cmluZygpLFxyXG4gICAgcHJvZHVjdF92YXJpYXRpb25zOiB5dXAuc3RyaW5nKCksXHJcblxyXG4gICAgY3VzdG9tX2ZpZWxkczogeXVwLnN0cmluZygpLFxyXG59KTtcclxuXHJcblxyXG5jbGFzcyBBZGROZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RvYXN0OiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RfY2F0ZWdvcmllc19vcHRpb25zOiBwcm9kdWN0X2NhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yaWVzOiAnJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnlFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicsXHJcblxyXG4gICAgICAgICAgICBzaXplOiBbXSxcclxuICAgICAgICAgICAgY29sb3I6IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0VGFnczogW10sXHJcblxyXG4gICAgICAgICAgICB3YXJyYW50eVR5cGU6ICdZZWFyJyxcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGltYWdlX2xpbms6IFtdLFxyXG5cclxuXHJcbiAgICAgICAgICAgIGltYWdlX2xpbmtFcnJvcjogJ25vX2Vycm9yJyxcclxuICAgICAgICAgICAgaW1hZ2VfbGlua0Vycm9yRGl2OiAnQm9yZGVyRGl2JyxcclxuICAgICAgICAgICAgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy8gUHJvZHVjdCBBdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVFcnJvcjogJycsXHJcblxyXG4gICAgICAgICAgICB2YXJpYXRpb25zQXJyYXk6IFtdLFxyXG4gICAgICAgICAgICBpc1ZhcmlhdGlvbnNTYXZlZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAvLyBDdXN0b20gRmllbGRzXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lOiAnJyxcclxuICAgICAgICAgICAgY3VzdG9tRmllbGRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkRXJyb3I6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZSA9IHRoaXMuaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZEN1c3RvbUZpZWxkQnRuQ2xpY2tlZCA9IHRoaXMuYWRkQ3VzdG9tRmllbGRCdG5DbGlja2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy51cGxvYWRQcm9kdWN0ID0gdGhpcy51cGxvYWRQcm9kdWN0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0dGluZyBQcm9kdWN0IENhdGVnb3JpZXMgZnJvbSBEQlxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvcHJvZHVjdHMtY2F0ZWdvcmllcy9nZXQtYWxsJztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdF9jYXRlZ29yaWVzX29wdGlvbnM6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAgU3VibWl0IGRhdGEgdG8gYXBpXHJcbiAgICBhc3luYyB1cGxvYWRQcm9kdWN0KGRhdGEsIGN1cnJlbnRDb21wb25lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YTogJywgZGF0YSlcclxuICAgICAgICAvLyBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9wcm9kdWN0cy9hZGQnO1xyXG4gICAgICAgIC8vIGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7XHJcbiAgICAgICAgLy8gICAgIGRhdGFcclxuICAgICAgICAvLyB9LCB7XHJcbiAgICAgICAgLy8gICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgIC8vIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dUb2FzdDogdHJ1ZSB9KTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgLy8gICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIC8vICAgICBhbGVydCgnRXJyb3I6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9kdWN0IFNpemVcclxuICAgIGhhbmRsZVByb2R1Y3RTaXplQ2hhbmdlID0gKGFyciwgYWN0aW9uTWV0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaXplOiBhcnIgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFByb2R1Y3QgQ29sb3JcclxuICAgIGhhbmRsZVByb2R1Y3RDb2xvckNoYW5nZSA9IChhcnIsIGFjdGlvbk1ldGEpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sb3I6IGFyciB9KTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY29sb3I6IG5ld1ZhbHVlLCBjb2xvckVycm9yOiAnbm9fZXJyb3InLCBjb2xvckVycm9yRGl2OiAnQm9yZGVyRGl2JyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUHJvZHVjdFRhZ0NoYW5nZSA9IChhcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdFRhZ3M6IGFyciB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIFByb2R1Y3QgQ2F0ZWdvcnlcclxuICAgIGhhbmRsZVByb2R1Y3RDYXRlZ29yeUNoYW5nZSA9IChhcnIpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdENhdGVnb3JpZXM6IGFyciwgY2F0ZWdvcnlFcnJvcjogJ25vX2Vycm9yJywgY2F0ZWdvcnlFcnJvckRpdjogJ0JvcmRlckRpdicgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvZHVjdCBJbWFnZSBMaW5rXHJcbiAgICBoYW5kbGVJbWFnZV9saW5rQ2hhbmdlID0gKGFyciwgYWN0aW9uTWV0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZV9saW5rOiBhcnIsIGltYWdlX2xpbmtFcnJvcjogJ25vX2Vycm9yJywgaW1hZ2VfbGlua0Vycm9yRGl2OiAnQm9yZGVyRGl2JyB9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVJbWFnZUxpbmtJbnB1dENoYW5nZSA9IChhYSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBhYSB9KTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVJbWFnZV9saW5rS2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VfbGluayA9IHRoaXMuc3RhdGUuaW1hZ2VfbGluaztcclxuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1RhYic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV9saW5rOiBbLi4uaW1hZ2VfbGluaywgY3JlYXRlT3B0aW9uKGlucHV0VmFsdWUpXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgaGFuZGxlUHJvZHVjdFR5cGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYWJsZVByb2R1Y3Q6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYWJsZVByb2R1Y3Q6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9kdWN0IEF0dHJpYnV0ZXNcclxuICAgIGhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVOYW1lQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVQcm9kdWN0QXR0cmlidXRlVmFsdWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlVmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVBZGRQcm9kdWN0QXR0cmlidXRlQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlTmFtZSAhPSAnJyAmJiB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZUVycm9yOiAnJyB9KVxyXG4gICAgICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXkpO1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlTmFtZTogdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlTmFtZSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlVmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlTmFtZTogJycgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogJycgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RBdHRyaWJ1dGVzQXJyYXk6IGNvcHlBcnJheSB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlRXJyb3I6ICdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2F2ZVByb2R1Y3RBdHRyaWJ1dGVzQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgICAgICB2YXIgYWxsQXJyYXlzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmltID0gZWxlbWVudC5wcm9kdWN0QXR0cmlidXRlVmFsdWUuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgdmFyIHNwbGl0QXJyYXkgPSB0cmltLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgIGFsbEFycmF5cy5wdXNoKHNwbGl0QXJyYXkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5hbGxQb3NzaWJsZUNhc2VzKGFsbEFycmF5cylcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gZWxlbWVudC5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgc3BsaXQuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wdXNoKHsgbmFtZTogdGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5W2ldLnByb2R1Y3RBdHRyaWJ1dGVOYW1lLCB2YWx1ZTogZSB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKHsgaXRlbXM6IGl0ZW0sIHByaWNlOiAnJywgc3RvY2s6ICcxJywgaW1hZ2VfbGluazogJycsIHByaWNlX2Vycm9yOiAnJywgaW1hZ2VfbGlua19lcnJvcjogJycgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwbGl0IEFycmF5OiBcIiwgZGF0YSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBkYXRhIH0pXHJcbiAgICB9XHJcbiAgICBhbGxQb3NzaWJsZUNhc2VzKGFycikge1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyclswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHZhciBhbGxDYXNlc09mUmVzdCA9IHRoaXMuYWxsUG9zc2libGVDYXNlcyhhcnIuc2xpY2UoMSkpOyAgLy8gcmVjdXIgd2l0aCB0aGUgcmVzdCBvZiBhcnJheVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbENhc2VzT2ZSZXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyclswXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFyclswXVtqXSArIFwiLVwiICsgYWxsQ2FzZXNPZlJlc3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkID0gKGluZGV4LCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUucHJvZHVjdEF0dHJpYnV0ZXNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IHsgcHJvZHVjdEF0dHJpYnV0ZU5hbWU6IG5hbWUsIHByb2R1Y3RBdHRyaWJ1dGVWYWx1ZTogdmFsdWUgfTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdEF0dHJpYnV0ZXNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRGVsZXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVzQXJyYXkpO1xyXG4gICAgICAgIGNvcHlBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0QXR0cmlidXRlc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVEZWxldGVQcm9kdWN0VmFyaWF0aW9uQ2xpY2tlZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFyaWF0aW9uc0FycmF5OiBjb3B5QXJyYXkgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQcmljZUNoZWNrYm94Q2hhbmdlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlID0gY29weUFycmF5WzBdLml0ZW1zLnByaWNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZVByb2R1Y3RQcmljZUNoYW5nZWQgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF07XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnByaWNlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQcm9kdWN0SW5TdG9ja0NoYW5nZWQgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnZhcmlhdGlvbnNBcnJheSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IGNvcHlBcnJheVtpbmRleF07XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnN0b2NrID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YXJpYXRpb25zQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQcm9kdWN0SW1hZ2VMaW5rQ2hhbmdlZCA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBsZXQgb2JqZWN0ID0gY29weUFycmF5W2luZGV4XTtcclxuICAgICAgICBvYmplY3QuaW1hZ2VfbGluayA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgc2F2ZVZhcmlhdGlvbnNDbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5KTtcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgY29weUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnByaWNlID09ICcnIHx8IGVsZW1lbnQuaW1hZ2VfbGluayA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJpY2UgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByaWNlX2Vycm9yID0gJ0VudGVyIHByaWNlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW1hZ2VfbGluayA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2VfbGlua19lcnJvciA9ICdFbnRlciBJbWFnZSBMaW5rJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcmljZV9lcnJvciA9ICcnXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmltYWdlX2xpbmtfZXJyb3IgPSAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWYXJpYXRpb25zU2F2ZWQ6IHRydWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhcmlhdGlvbnNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgdmFyaWF0aW9uc0Vycm9yQ2hlY2sgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnByaWNlX2Vycm9yICE9ICcnIHx8IGRhdGEuaW1hZ2VfbGlua19lcnJvciAhPSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJzFweCBzb2xpZCByZWQnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ25vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gQ3VzdG9tIEZpZWxkc1xyXG4gICAgY3VzdG9tRmllbGROYW1lQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkTmFtZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuICAgIGN1c3RvbUZpZWxkVmFsdWVDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuICAgIGFkZEN1c3RvbUZpZWxkQnRuQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWUgIT0gJycgJiYgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZEVycm9yOiAnJyB9KVxyXG4gICAgICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5KTtcclxuICAgICAgICAgICAgY29weUFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGROYW1lOiB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkVmFsdWU6IHRoaXMuc3RhdGUuY3VzdG9tRmllbGRWYWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkTmFtZTogJycgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZHNBcnJheTogY29weUFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUZpZWxkRXJyb3I6ICdFbnRlciBGaWVsZCBOYW1lIGFuZCBWYWx1ZScgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ3VzdG9tRmllbGRzRXZlbnQgPSAoaW5kZXgsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jdXN0b21GaWVsZHNBcnJheSk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XSA9IHsgY3VzdG9tRmllbGROYW1lOiBuYW1lLCBjdXN0b21GaWVsZFZhbHVlOiB2YWx1ZSB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21GaWVsZHNBcnJheTogY29weUFycmF5IH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ3VzdG9tRmllbGRzRXZlbnQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5KTtcclxuICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRmllbGRzQXJyYXk6IGNvcHlBcnJheSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9jYXRlZ29yeTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF90eXBlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fd2lkdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl9oZWlnaHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90X3NwZWNpZmllZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgUGxhc3RpYzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgQ2VyYW1pYzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgTWV0YWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIEdsYXNzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBQbGFzdGljOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2JyYW5kX25hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfcHJpY2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfc2l6ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9jb2xvcnM6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdGFnczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9jazogMSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5X3R5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGlzY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2t1OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2ltYWdlX2xpbms6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYXR0cmlidXRlczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF92YXJpYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21fZmllbGRzOiAnJyxcclxuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWN0Q2F0ZWdvcmllcyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWVBcnJheSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RXJyb3I6IFwiZXJyb3JcIiwgY2F0ZWdvcnlFcnJvckRpdjogJ1JlZEJvcmRlckRpdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJvZHVjdENhdGVnb3JpZXMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUVycm9yOiBcImVycm9yXCIsIGNhdGVnb3J5RXJyb3JEaXY6ICdSZWRCb3JkZXJEaXYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLmltYWdlX2xpbmsgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZV9saW5rRXJyb3I6IFwiZXJyb3JcIiwgaW1hZ2VfbGlua0Vycm9yRGl2OiAnUmVkQm9yZGVyRGl2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNWYXJpYXRpb25zU2F2ZWQgPT0gZmFsc2UgJiYgdmFsdWVzLnByb2R1Y3RfdHlwZSA9PSAndmFyaWFibGUtcHJvdWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X2NhdGVnb3J5ID0gdGhpcy5zdGF0ZS5wcm9kdWN0Q2F0ZWdvcmllcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHJvZHVjdF9zaXplID0gdGhpcy5zdGF0ZS5zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfY29sb3JzID0gdGhpcy5zdGF0ZS5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X3RhZ3MgPSB0aGlzLnN0YXRlLnByb2R1Y3RUYWdzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wcm9kdWN0X2ltYWdlX2xpbmsgPSB0aGlzLnN0YXRlLmltYWdlX2xpbms7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByb2R1Y3RfdmFyaWF0aW9ucyA9IHRoaXMuc3RhdGUudmFyaWF0aW9uc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmN1c3RvbV9maWVsZHMgPSB0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlczogJywgdmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRQcm9kdWN0KHZhbHVlcywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy51cGxvYWREYXRhKHZhbHVlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc2l6ZTogW10sIGNvbG9yOiBbXSwgY3VzdG9tRmllbGROYW1lQXJyYXk6IFtdLCBpbWFnZV9saW5rOiBbXSwgaW5wdXRWYWx1ZTogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgdG91Y2hlZCwgaXNWYWxpZCwgZXJyb3JzLCBoYW5kbGVCbHVyLCBpc1N1Ym1pdHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy50aXRsZV9yb3d9IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXN9IHN0eWxlPXtzdHlsZXMudGl0bGVfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXtzdHlsZXMudGl0bGV9PiBBZGQgTmV3IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dWYXJpYXRpb25zRXJyb3JBbGVydCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvd1RvYXN0IG9uQ2xvc2VIYW5kbGVyPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dWYXJpYXRpb25zRXJyb3JBbGVydDogZmFsc2UgfSl9IHNob3c9e3RoaXMuc3RhdGUuc2hvd1ZhcmlhdGlvbnNFcnJvckFsZXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J0Vycm9yJ30gbWVzc2FnZT17J1BsZWFzZSBBZGQvU2F2ZSBWYXJpYXRpb25zIEZpcnN0J30gaWNvbk5hbWU9e2ZhRXhjbGFtYXRpb25UcmlhbmdsZX0gY29sb3I9e1wicmVkXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9hc3QgPyA8U2hvd1RvYXN0IG9uQ2xvc2VIYW5kbGVyPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dUb2FzdDogZmFsc2UgfSl9IHNob3c9e3RoaXMuc3RhdGUuc2hvd1RvYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3VjY2Vzcyd9IG1lc3NhZ2U9eydQcm9kdWN0IFVwbG9hZGVkIFN1Y2Nlc3NmdWxseSd9IGljb25OYW1lPXtmYVRodW1ic1VwfSBjb2xvcj17XCJncmVlblwifSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcyJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs5fSBtZD17OX0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IE5hbWUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT5Qcm9kdWN0IE5hbWU8c3Bhbj4qPC9zcGFuPjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvZHVjdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5wcm9kdWN0X25hbWUgJiYgZXJyb3JzLnByb2R1Y3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIFByb2R1Y3QgTmFtZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgRGlzY3JpcHRpb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UHJvZHVjdCBEaXNjcnVwdGlvbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0J1dHRvbn0gc2l6ZT1cInNtXCIgZXZlbnRLZXk9XCIwXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy52YXJpYXRpb25zX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uIGFib3V0IHNlYXNvbiwgc3R5bGUsIG1hdGVyaWFsIGV0Y1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt2YWx1ZXMucHJvZHVjdF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IERhdGEgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0VHlwZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFyaWFibGVQcm9kdWN0PXt0aGlzLnN0YXRlLmlzVmFyaWFibGVQcm9kdWN0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfdHlwZV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3R5cGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ByaWNlX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfcHJpY2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja192YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2luX3N0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pbl9zdG9ja190b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfaW5fc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2luX3N0b2NrX2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfaW5fc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9icmFuZF9uYW1lX3ZhbHVlcz17dmFsdWVzLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfYnJhbmRfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfYnJhbmRfbmFtZV9lcnJvcnM9e2Vycm9ycy5wcm9kdWN0X2JyYW5kX25hbWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eV92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X3dhcnJhbnR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93YXJyYW50eV90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3Rfd2FycmFudHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dhcnJhbnR5X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3Rfd2FycmFudHl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZV92YWx1ZXM9e3ZhbHVlcy53YXJyYW50eV90eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycmFudHlfdHlwZV90b3VjaGVkPXt0b3VjaGVkLndhcnJhbnR5X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJyYW50eV90eXBlX2Vycm9ycz17ZXJyb3JzLndhcnJhbnR5X3R5cGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudF92YWx1ZXM9e3ZhbHVlcy5wcm9kdWN0X2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kaXNjb3VudF90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3RfZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2Rpc2NvdW50X2Vycm9ycz17ZXJyb3JzLnByb2R1Y3RfZGlzY291bnR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1X3ZhbHVlcz17dmFsdWVzLnNrdX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV90b3VjaGVkPXt0b3VjaGVkLnNrdX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdV9lcnJvcnM9e2Vycm9ycy5za3V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHRfdmFsdWVzPXt2YWx1ZXMucHJvZHVjdF93ZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dlaWdodF90b3VjaGVkPXt0b3VjaGVkLnByb2R1Y3Rfd2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93ZWlnaHRfZXJyb3JzPXtlcnJvcnMucHJvZHVjdF93ZWlnaHR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25fbGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2xlbmd0aF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25fbGVuZ3RoX2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl9sZW5ndGh9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX3dpZHRoX3ZhbHVlcz17dmFsdWVzLmRpbWVuc2lvbl93aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl93aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbl93aWR0aF9lcnJvcnM9e2Vycm9ycy5kaW1lbnNpb25fd2lkdGh9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodF92YWx1ZXM9e3ZhbHVlcy5kaW1lbnNpb25faGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uX2hlaWdodF90b3VjaGVkPXt0b3VjaGVkLmRpbWVuc2lvbl9oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25faGVpZ2h0X2Vycm9ycz17ZXJyb3JzLmRpbWVuc2lvbl9oZWlnaHR9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlc192YWx1ZXM9e3ZhbHVlcy5zaGlwcGluZ19jaGFyZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfY2hhcmdlc190b3VjaGVkPXt0b3VjaGVkLnNoaXBwaW5nX2NoYXJnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ19jaGFyZ2VzX2Vycm9ycz17ZXJyb3JzLnNoaXBwaW5nX2NoYXJnZXN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxpbmdfZmVlX3ZhbHVlcz17dmFsdWVzLmhhbmRsaW5nX2ZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV90b3VjaGVkPXt0b3VjaGVkLmhhbmRsaW5nX2ZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsaW5nX2ZlZV9lcnJvcnM9e2Vycm9ycy5oYW5kbGluZ19mZWV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZV92YWx1ZXM9e3ZhbHVlcy5wdXJjaGFzZV9ub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2Vfbm90ZV90b3VjaGVkPXt0b3VjaGVkLnB1cmNoYXNlX25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZV9ub3RlX2Vycm9ycz17ZXJyb3JzLnB1cmNoYXNlX25vdGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17dGhpcy5zdGF0ZS5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2xvckNoYW5nZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdENvbG9yQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17dGhpcy5zdGF0ZS5zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNpemVDaGFuZ2VIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RTaXplQ2hhbmdlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNBcnJheT17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5wcm9kdWN0QXR0cmlidXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWVIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RBdHRyaWJ1dGVOYW1lQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZUhhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRBdHRyaWJ1dGVIYW5kbGVyPXt0aGlzLmhhbmRsZUFkZFByb2R1Y3RBdHRyaWJ1dGVDbGlja2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMuaGFuZGxlVXBkYXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUF0dHJpYnV0ZUhhbmRsZXI9e3RoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdEF0dHJpYnV0ZUNsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVZhcmlhdGlvbkhhbmRsZXI9e3RoaXMuaGFuZGxlRGVsZXRlUHJvZHVjdFZhcmlhdGlvbkNsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVWYXJpYXRpb25zSGFuZGxlcj17dGhpcy5zYXZlVmFyaWF0aW9uc0NsaWNrZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNFcnJvckhhbmRsZXI9e3RoaXMudmFyaWF0aW9uc0Vycm9yQ2hlY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLnByb2R1Y3RBdHRyaWJ1dGVFcnJvcn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQXR0cmlidXRlc0hhbmRsZXI9e3RoaXMuaGFuZGxlU2F2ZVByb2R1Y3RBdHRyaWJ1dGVzQ2xpY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbnNBcnJheT17dGhpcy5zdGF0ZS52YXJpYXRpb25zQXJyYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VIYW5kbGVyPXt0aGlzLmhhbmRsZVByb2R1Y3RQcmljZUNoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTdG9ja0hhbmRsZXI9e3RoaXMuaGFuZGxlUHJvZHVjdEluU3RvY2tDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SW1hZ2VMaW5rSGFuZGxlcj17dGhpcy5oYW5kbGVQcm9kdWN0SW1hZ2VMaW5rQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VDaGVja2JveEhhbmRsZXI9e3RoaXMuaGFuZGxlUHJpY2VDaGVja2JveENoYW5nZWQuYmluZCh0aGlzKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IERhdGEgUm93ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDdXN0b20gRmllbGRzIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkc0FycmF5PXt0aGlzLnN0YXRlLmN1c3RvbUZpZWxkc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXN0b21GaWVsZFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lSGFuZGxlcj17dGhpcy5jdXN0b21GaWVsZE5hbWVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlSGFuZGxlcj17dGhpcy5jdXN0b21GaWVsZFZhbHVlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkRmllbGRIYW5kbGVyPXt0aGlzLmFkZEN1c3RvbUZpZWxkQnRuQ2xpY2tlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZUN1c3RvbUZpZWxkc0V2ZW50LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuZGVsZXRlQ3VzdG9tRmllbGRzRXZlbnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmN1c3RvbUZpZWxkRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgQ3VzdG9tIEZpZWxkcyBSb3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXszfSBtZD17M30gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IENhdGVnb3J5ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPlByb2R1Y3QgQ2F0ZWdvcmllczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0J1dHRvbn0gc2l6ZT1cInNtXCIgZXZlbnRLZXk9XCIwXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy52YXJpYXRpb25zX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IHN0eWxlPXt7IGhlaWdodDogJzI1MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNhdGVnb3J5RXJyb3JEaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0Q2F0ZWdvcnlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucHJvZHVjdF9jYXRlZ29yaWVzX29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdC9FbnRlciBDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jYXRlZ29yeUVycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxldCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBQcm9kdWN0IGF0ZWdvcnkgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEYW5nZXJvdXMgR29vZHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuY2FyZF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+RGFuZ2Vyb3VzIEdvb2RzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSBzaXplPVwic21cIiBldmVudEtleT1cIjBcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgYmFja2dyb3VuZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVNsaWRlcnNIfSBzdHlsZT17c3R5bGVzLnZhcmlhdGlvbnNfZm9udGF3ZXNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub3Rfc3BlY2lmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vdCBTcGVjaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQubm90X3NwZWNpZmllZCAmJiBlcnJvcnMubm90X3NwZWNpZmllZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFjaz17ZXJyb3JzLm5vdF9zcGVjaWZpZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjZXJhbWljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNlcmFtaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuQ2VyYW1pYyAmJiBlcnJvcnMuQ2VyYW1pY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFjaz17ZXJyb3JzLkNlcmFtaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5HbGFzcyAmJiBlcnJvcnMuR2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2s9e2Vycm9ycy5HbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1ldGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLk1ldGFsICYmIGVycm9ycy5NZXRhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFjaz17ZXJyb3JzLk1ldGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhc3RpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGFzdGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLlBsYXN0aWMgJiYgZXJyb3JzLlBsYXN0aWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2s9e2Vycm9ycy5QbGFzdGljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mRGFuZ2Vyb3VzIEdvb2RzICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBUYWdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBzdHlsZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17c3R5bGVzLmNhcmRfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPlByb2R1Y3QgVGFnczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0J1dHRvbn0gc2l6ZT1cInNtXCIgZXZlbnRLZXk9XCIwXCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGJhY2tncm91bmQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFTbGlkZXJzSH0gc3R5bGU9e3N0eWxlcy52YXJpYXRpb25zX2ZvbnRhd2Vzb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IHN0eWxlPXt7IGhlaWdodDogJzI1MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZHVjdFRhZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9kdWN0X2NvbG9yX29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvZHVjdFRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QvRW50ZXIgVGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgUHJvZHVjdCBUYWdzICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRm9ybSBTdWJtaXQgQnRuIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93IHN0eWxlPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMubGFiZWx9PkZpZWxkcyB3aXRoIDxzcGFuPiAqIDwvc3Bhbj4gYXJlIG1hbmRhdG9yeS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5sYWJlbH0+Rm9yIGFkZGluZyBuZXcgc2l6ZSwgY29sb3IsIGxpbms6IEVudGVyIHRleHQgYW5kIGhpdCBFbnRlciBvciBUYWIga2V5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30gYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gJ1VwbG9hZGluZycgOiAnVXBsb2FkJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gPFNwaW5uZXIgYW5pbWF0aW9uPVwiZ3Jvd1wiIHNpemU9XCJzbVwiIC8+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgRm9ybSBTdWJtaXQgQnRuIFJvdyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9fZXJyb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXJyb3J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNEQzM1NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlJlZEJvcmRlckRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNEQzM1NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cHggMHB4IDAuMnB4IDAuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkJvcmRlckRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdl9saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke0dsb2JhbFN0eWxlU2hlZXQuYWRtaW5fcHJpbXJ5X2NvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjNDM0NTU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM0MzQ1NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0aXRsZV9yb3c6IHtcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgcGFkZGluZzogJzEuNSUgNCUnXHJcbiAgICB9LFxyXG4gICAgdGl0bGVfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMyUnLFxyXG4gICAgICAgIHdpZHRoOiAnMjZweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyNnB4JyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGNvbG9yOiAnZ3JheSdcclxuICAgIH0sXHJcblxyXG4gICAgbmF2X2xpbms6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHJvdzoge1xyXG4gICAgICAgIG1hcmdpbjogJzIlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMCUnXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgY2FyZF9oZWFkZXI6IHtcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAvLyBjb2xvcjogJyM2QTcwNzQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpZ2h0Z3JheSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdF9idG46IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgJHtHbG9iYWxTdHlsZVNoZWV0LnByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzElJyxcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YCxcclxuICAgIH0sXHJcbiAgICB0ZXJtX2NvbmRpdGlvbl9sYWJlbDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemU6IGAke0dsb2JhbFN0eWxlU2hlZXQuZm9ybV9sYWJlbF9mb250c2l6ZX1gLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICctMTBweCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTEwcHgnLFxyXG4gICAgfSxcclxuICAgIGZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6IGAke0dsb2JhbFN0eWxlU2hlZXQucHJpbWFyeV90ZXh0X2NvbG9yfWAsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5wcmltYXJ5X3RleHRfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxN3B4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxN3B4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE3cHgnLFxyXG4gICAgfSxcclxuICAgIHZhcmlhdGlvbnNfZm9udGF3ZXNvbWU6IHtcclxuICAgICAgICBjb2xvcjogYCR7R2xvYmFsU3R5bGVTaGVldC5hZG1pbl9wcmltcnlfY29sb3J9YCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzEwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgICBoZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzE1cHgnLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXc7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\vendor\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\add-new.js */")));
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
//# sourceMappingURL=vendor.js.2deee8938532f31cc76e.hot-update.js.map