webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-categories.js":
/*!********************************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-categories.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../.././../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../alert-modal */ "./src/pages/components/alert-modal.js");








var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-contents\\product-contents\\product-categories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var categoryArray = [];

var ProducCategories = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProducCategories, _Component);

  var _super = _createSuper(ProducCategories);

  function ProducCategories(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProducCategories);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCategoryRequestChange", function (e, index) {
      var copyArray = [];
      copyArray = Object.assign([], _this.state.categoryRequestList);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      _this.setState({
        categoryRequestList: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCategoryChange", function (e, index) {
      var copyArray = [];
      copyArray = Object.assign([], _this.state.categoryList);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      _this.setState({
        categoryList: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDeleteCategoryClick", function (index) {
      var copyArray = [];
      copyArray = Object.assign([], _this.state.categoryList);
      copyArray.splice(index, 1);
      categoryArray.forEach(function (element, i) {
        if (copyArray[index].prevVal == element.value) {
          categoryArray.splice(index, 1);
        }
      });

      _this.setState({
        categoryList: copyArray,
        showModalMessage: 'Product Category Deleted',
        showModal: true
      });
    });

    _this.state = {
      isLoading: false,
      showToast: false,
      categoryValue: '',
      error: '',
      categoryList: [],
      categoryRequestList: [],
      editRequestedCategory: '',
      showModalMessage: '',
      showModal: false,
      filterStr: ''
    };
    return _this;
  } // Getting Product Categories from DB


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProducCategories, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url, response, copyArray;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + '/api/products-categories/get-all';
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(url));

            case 4:
              response = _context.sent;
              copyArray = [];
              copyArray = response.data.data;
              copyArray.forEach(function (data, index) {
                data.label = true;
              });
              this.setState({
                categoryList: copyArray
              });
              this.setState({
                categoryRequestList: this.state.categoryList
              });
              categoryArray = copyArray;
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              console.log('feror:', _context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 13]], Promise);
    }
  }, {
    key: "addCategory",
    value: function addCategory() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addCategory$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // const url = MuhalikConfig.PATH + '/api/products/add';
              // await axios.post(url, {
              // this.state.categoryValue
              // }, {
              //     headers: { 'authorization': await getUncodededTokenFromStorage() }
              // }).then(function (response) {
              this.setState({
                isLoading: true
              });
              this.setState({
                showModalMessage: 'Product Category Added Successfully'
              });
              this.setState({
                showModal: true
              });
              return _context2.abrupt("return", true);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "handleFilterStrChange",
    value: function handleFilterStrChange(e) {
      this.setState({
        filterStr: e.target.value
      });

      if (e.target.value == '') {
        this.setState({
          categoryList: categoryArray
        });
      } else {
        var array = [];
        this.state.categoryList.filter(function (data) {
          // var value = data.value.toLowerCase;
          if (data.value.includes(e.target.value)) {
            array.push(data);
          }
        });
        this.setState({
          categoryList: array
        });
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      if (categoryValue == '') {
        this.setState({
          error: 'Enter Value First'
        });
      } else {
        this.setState({
          isLoading: true
        });
        this.setState({
          error: ''
        });
        this.addCategory(this);
      }
    } // Category Request 
    // => Field Value 

  }, {
    key: "handleEditCategoryRequestClick",
    //  => Edit
    value: function handleEditCategoryRequestClick(index) {
      var copyArray, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditCategoryRequestClick$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              copyArray = [];
              copyArray = Object.assign([], this.state.categoryRequestList);
              obj = {};
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context3.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                categoryRequestList: copyArray
              }));

            case 10:
              console.log(copyArray);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    } //  => Cancle

  }, {
    key: "handleCancelCategoryRequestClick",
    value: function handleCancelCategoryRequestClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.categoryRequestList);
      copyArray[index].value = copyArray[index].prevVal;
      copyArray[index].label = true;
      this.setState({
        categoryRequestList: copyArray
      });
    } // Update

  }, {
    key: "handleUpdateCategoryRequestClick",
    value: function handleUpdateCategoryRequestClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.categoryRequestList);

      if (copyArray[index].error == '') {
        copyArray[index].label = true;
        this.setState({
          categoryRequestList: copyArray,
          showModalMessage: 'Product Category Updated Successfully',
          showModal: true
        });
      }
    } //  => Add

  }, {
    key: "handleAddCategoryRequestClick",
    value: function handleAddCategoryRequestClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.categoryRequestList);
      copyArray.splice(index, 1);
      this.setState({
        categoryRequestList: copyArray,
        showModalMessage: 'Product Category Added Successfully',
        showModal: true
      });
    } //  => Delete

  }, {
    key: "handleDeleteCategoryRequestClick",
    value: function handleDeleteCategoryRequestClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.categoryRequestList);
      copyArray.splice(index, 1);
      this.setState({
        categoryRequestList: copyArray,
        showModalMessage: 'Product Category Deleted',
        showModal: true
      });
    } // All categories
    //  => Chane

  }, {
    key: "handleEditCategoryClick",
    //  => Edit
    value: function handleEditCategoryClick(index) {
      var copyArray, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditCategoryClick$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              copyArray = [];
              copyArray = Object.assign([], this.state.categoryList);
              obj = {};
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context4.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                categoryList: copyArray
              }));

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    } //  => Cancle

  }, {
    key: "handleCancelCategoryClick",
    value: function handleCancelCategoryClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.categoryList);
      copyArray[index].value = copyArray[index].prevVal;
      copyArray[index].label = true;
      this.setState({
        categoryList: copyArray
      });
    } //  => Update

  }, {
    key: "handleUpdateCategoryClick",
    value: function handleUpdateCategoryClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.categoryList);
      copyArray[index].label = true;
      categoryArray.forEach(function (element, i) {
        if (copyArray[index].prevVal == element.value) {
          element.value = copyArray[index].value;
        }
      });
      console.log('array:', categoryArray);
      this.setState({
        categoryList: copyArray,
        showModalMessage: 'Product Category Updated Successfully',
        showModal: true
      });
    } //  => Delete

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onHide: function onHide(e) {
          return _this2.setState({
            showModal: false
          });
        },
        show: this.state.showModal,
        header: 'Success',
        message: this.state.showModalMessage,
        iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faThumbsUp"],
        color: "#00b300",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 17
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        style: styles.title_row,
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faListAlt"],
        style: styles.title_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "mr-auto",
        style: styles.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }
      }, " Product Categories ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"], {
        style: {
          width: '100%'
        },
        defaultActiveKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 33
        }
      }, "Add New Category "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        size: "sm",
        eventKey: "0",
        style: {
          "float": 'right',
          background: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 37
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        type: "text",
        size: "sm",
        placeholder: "Enter Category Value",
        name: "sku",
        value: this.state.categoryValue,
        onChange: function onChange(e) {
          return _this2.setState({
            categoryValue: e.target.value
          });
        },
        isInvalid: this.state.error,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 45
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
        type: "invalid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 45
        }
      }, this.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 37
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        size: "sm",
        onClick: this.handleSubmit.bind(this),
        disabled: this.state.isLoading,
        block: true,
        style: styles.submit_btn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 41
        }
      }, this.state.isLoading ? 'Uploading' : 'Add Category', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
        animation: "grow",
        size: "sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 69
        }
      }) : null))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"], {
        style: {
          width: '100%'
        },
        defaultActiveKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 33
        }
      }, "Add Category Requests"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        size: "sm",
        eventKey: "0",
        style: {
          "float": 'right',
          background: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 33
        }
      }, this.state.categoryRequestList.map(function (data, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 2,
          md: 2,
          sm: 6,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Category Value",
          name: "sku",
          value: data.value,
          onChange: function onChange(e) {
            return _this2.handleCategoryChange(e, index);
          },
          disabled: data.label,
          isInvalid: data.error,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 49
          }
        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 2,
          md: 2,
          sm: 6,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Category Value",
          name: "sku",
          value: data.value,
          onChange: function onChange(e) {
            return _this2.handleCategoryChange(e, index);
          },
          disabled: data.label,
          isInvalid: data.error,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 49
          }
        })), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 4,
          md: 4,
          sm: 6,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Category Value",
          name: "sku",
          value: data.value,
          onChange: function onChange(e) {
            return _this2.handleCategoryRequestChange(e, index);
          },
          isInvalid: data.error,
          disabled: data.label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 53
          }
        }, data.error))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-success",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            return data.label ? _this2.handleEditCategoryRequestClick(index) : _this2.handleUpdateCategoryRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 53
          }
        }, data.label ? 'Edit' : 'Update'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-primary",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            data.label ? _this2.handleAddCategoryRequestClick(index) : _this2.handleCancelCategoryRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 53
          }
        }, data.label ? 'Add' : 'Cancel'))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-danger",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            return _this2.handleDeleteCategoryRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 53
          }
        }, "Discard"))));
      })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"], {
        style: {
          width: '100%'
        },
        defaultActiveKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 33
        }
      }, "All Categories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"],
        size: "sm",
        eventKey: "0",
        style: {
          "float": 'right',
          background: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
        style: {
          margin: '0% 5%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 37
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 45
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        type: "text",
        size: "sm",
        placeholder: "Enter Category Value",
        name: "sku",
        value: this.state.filterStr,
        onChange: function onChange(e) {
          return _this2.handleFilterStrChange(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 49
        }
      })))), __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 37
        }
      }), this.state.categoryList.map(function (data, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 8,
          md: 8,
          sm: 12,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Category Value",
          name: "sku",
          value: data.value,
          onChange: function onChange(e) {
            return _this2.handleCategoryChange(e, index);
          },
          disabled: data.label,
          isInvalid: data.error,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 53
          }
        }, _this2.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 1,
          md: 1,
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-success",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: data.label ? function () {
            return _this2.handleEditCategoryClick(index);
          } : function () {
            return _this2.handleUpdateCategoryClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 53
          }
        }, data.label ? 'Edit' : 'Update'))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 2,
          md: 2,
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: data.label ? "outline-danger" : "outline-primary",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: data.label ? function () {
            return _this2.handleDeleteCategoryClick(index);
          } : function () {
            return _this2.handleCancelCategoryClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 422,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 53
          }
        }, data.label ? 'Delete' : 'Cancel'))));
      })))))));
    }
  }]);

  return ProducCategories;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

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
  card: {
    // width: '100%',
    margin: '2%'
  },
  card_body: {// padding: '5%'
  },
  label: {
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].form_label_fontsize)
  },
  error: {
    width: '100%',
    textAlign: 'center',
    color: '#DC3545',
    fontSize: '14px'
  },
  accordin_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_14__["default"].admin_primry_color),
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProducCategories);

/***/ })

})
//# sourceMappingURL=admin.js.24336923609ea2b15fbb.hot-update.js.map