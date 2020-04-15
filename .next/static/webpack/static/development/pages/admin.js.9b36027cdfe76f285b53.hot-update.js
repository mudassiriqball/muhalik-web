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











var ProducCategories = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProducCategories, _Component);

  var _super = _createSuper(ProducCategories);

  function ProducCategories(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProducCategories);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCategoryRequestChange", function (e, index) {
      var copyArray = Object.assign([], _this.state.categoryRequestList);
      copyArray[index].value = e.target.value;

      _this.setState({
        categoryRequestList: copyArray
      });

      if (e.target.value != '' && e.target.value.length < 15) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Enter Value valid';
      }

      _this.setState({
        categoryRequestList: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCategoryChange", function (e, index) {
      var copyArray = Object.assign([], _this.state.categoryList);
      copyArray[index].value = e.target.value;

      _this.setState({
        categoryList: copyArray
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
      showModal: false
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
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 11]], Promise);
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
    } // Chane

  }, {
    key: "handleEditCategoryRequestClick",
    // Edit
    value: function handleEditCategoryRequestClick(index) {
      var copyArray, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditCategoryRequestClick$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              copyArray = Object.assign([], this.state.categoryRequestList);
              obj = {};
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context3.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                categoryRequestList: copyArray
              }));

            case 9:
              console.log('categoryRequestList:', this.state.categoryRequestList);
              console.log('categorytList:', this.state.categoryList);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    } // Cancle

  }, {
    key: "handleCancelCategoryRequestClick",
    value: function handleCancelCategoryRequestClick(index) {
      var copyArray = Object.assign([], this.state.categoryRequestList);
      copyArray[index].value = copyArray[index].prevVal;
      copyArray[index].label = true;
      this.setState({
        categoryRequestList: copyArray
      });
    } // Update

  }, {
    key: "handleUpdateCategoryRequestClick",
    value: function handleUpdateCategoryRequestClick(index) {
      var copyArray = Object.assign([], this.state.categoryRequestList);

      if (copyArray[index].error == '') {
        copyArray[index].label = true;
        this.setState({
          categoryRequestList: copyArray,
          showModalMessage: 'Product Category Updated Successfully',
          showModal: true
        });
      }
    } // Add

  }, {
    key: "handleAddCategoryRequestClick",
    value: function handleAddCategoryRequestClick(index) {
      var copyArray = Object.assign([], this.state.categoryRequestList);
      copyArray.splice(index, 1);
      this.setState({
        categoryRequestList: copyArray,
        showModalMessage: 'Product Category Added Successfully',
        showModal: true
      });
    } // Delete

  }, {
    key: "handleDeleteCategoryRequestClick",
    value: function handleDeleteCategoryRequestClick(index) {
      var copyArray = Object.assign([], this.state.categoryRequestList);
      copyArray.splice(index, 1);
      this.setState({
        categoryRequestList: copyArray,
        showModalMessage: 'Product Category Deleted',
        showModal: true
      });
    } // Chane

  }, {
    key: "handleEditCategoryClick",
    // Edit
    value: function handleEditCategoryClick(index) {
      var copyArray, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditCategoryClick$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              copyArray = Object.assign([], this.state.categoryList);
              obj = {};
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context4.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                categoryList: copyArray
              }));

            case 9:
              console.log('categoryList:', this.state.categoryList);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    } // Cancle

  }, {
    key: "handleCancelCategoryClick",
    value: function handleCancelCategoryClick(index) {
      var copyArray = Object.assign([], this.state.categoryList);
      copyArray[index].value = copyArray[index].prevVal;
      copyArray[index].label = true;
      this.setState({
        categoryList: copyArray
      });
    } // Update

  }, {
    key: "handleUpdateCategoryClick",
    value: function handleUpdateCategoryClick(index) {
      var copyArray = Object.assign([], this.state.categoryList);
      copyArray[index].label = true;
      this.setState({
        categoryList: copyArray,
        showModalMessage: 'Product Category Updated Successfully',
        showModal: true
      });
    } // Delete

  }, {
    key: "handleDeleteCategoryClick",
    value: function handleDeleteCategoryClick(index) {
      var copyArray = Object.assign([], this.state.categoryList);
      copyArray.splice(index, 1);
      this.setState({
        categoryList: copyArray,
        showModalMessage: 'Product Category Deleted',
        showModal: true
      });
    }
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
          lineNumber: 176,
          columnNumber: 17
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        style: styles.title_row,
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faListAlt"],
        style: styles.title_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "mr-auto",
        style: styles.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }
      }, " Product Categories ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
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
          lineNumber: 189,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
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
          lineNumber: 193,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 33
        }
      }, this.state.categoryRequestList.map(function (data, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
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
            lineNumber: 203,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 53
          }
        }, data.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: 3,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-success",
          size: "sm",
          disabled: _this2.state.isLoading,
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            return data.label ? _this2.handleEditCategoryRequestClick(index) : _this2.handleUpdateCategoryRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 53
          }
        }, data.label ? 'Edit' : 'Update'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: 3,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-primary",
          size: "sm",
          disabled: _this2.state.isLoading,
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            data.label ? _this2.handleAddCategoryRequestClick(index) : _this2.handleCancelCategoryRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 53
          }
        }, data.label ? 'Add' : 'Cancel'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: 3,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: 3,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-danger",
          size: "sm",
          disabled: _this2.state.isLoading,
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            return _this2.handleDeleteCategoryRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 53
          }
        }, "Discard"))));
      })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
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
          lineNumber: 249,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
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
          lineNumber: 253,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 37
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
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
          lineNumber: 261,
          columnNumber: 45
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
        type: "invalid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 45
        }
      }, this.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
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
          lineNumber: 276,
          columnNumber: 41
        }
      }, this.state.isLoading ? 'Uploading' : 'Add Category', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
        animation: "grow",
        size: "sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 69
        }
      }) : null))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
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
          lineNumber: 297,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
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
          lineNumber: 301,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 33
        }
      }, this.state.categoryList.map(function (data, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 41
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310,
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
          isInvalid: _this2.state.error,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 53
          }
        }, _this2.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: 3,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-success",
          size: "sm",
          disabled: _this2.state.isLoading,
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
            lineNumber: 327,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 53
          }
        }, data.label ? 'Edit' : 'Update'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: 3,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 45
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: 3,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: data.label ? "outline-danger" : "outline-primary",
          size: "sm",
          disabled: _this2.state.isLoading,
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            data.laebl ? _this2.handleDeleteCategoryClick(index) : _this2.handleCancelCategoryClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338,
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
//# sourceMappingURL=admin.js.9b36027cdfe76f285b53.hot-update.js.map