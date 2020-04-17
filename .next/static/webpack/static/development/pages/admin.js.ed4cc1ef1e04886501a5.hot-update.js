webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-tags.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-tags.js ***!
  \**************************************************************************************************/
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








var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-contents\\product-contents\\product-tags.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var fieldArray = [];

var ProducFields = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProducFields, _Component);

  var _super = _createSuper(ProducFields);

  function ProducFields(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProducFields);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleFieldRequestChange", function (e, index) {
      var copyArray = [];
      copyArray = Object.assign([], _this.state.fieldRequestList);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      _this.setState({
        fieldRequestList: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleFieldChange", function (e, index) {
      var copyArray = [];
      copyArray = Object.assign([], _this.state.fieldList);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      _this.setState({
        fieldList: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDeleteFieldClick", function (index) {
      var copyArray = [];
      copyArray = Object.assign([], _this.state.fieldList);
      fieldArray.forEach(function (element, i) {
        if (copyArray[index].value == element.value) {
          fieldArray.splice(index, 1);
        }
      });
      copyArray.splice(index, 1);

      _this.setState({
        fieldList: copyArray,
        showModalMessage: 'Product Field Deleted',
        showModal: true
      });
    });

    _this.state = {
      isLoading: false,
      showToast: false,
      fieldValue: '',
      error: '',
      fieldList: [],
      fieldRequestList: [],
      editRequestedField: '',
      showModalMessage: '',
      showModal: false,
      filterStr: ''
    };
    return _this;
  } // Getting Product Fields from DB


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProducFields, [{
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
                fieldList: copyArray
              });
              this.setState({
                fieldRequestList: this.state.fieldList
              });
              fieldArray = copyArray;
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
    key: "addField",
    value: function addField() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addField$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // const url = MuhalikConfig.PATH + '/api/products/add';
              // await axios.post(url, {
              // this.state.fieldValue
              // }, {
              //     headers: { 'authorization': await getUncodededTokenFromStorage() }
              // }).then(function (response) {
              this.setState({
                isLoading: true
              });
              this.setState({
                showModalMessage: 'Product Field Added Successfully'
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
          fieldList: fieldArray
        });
      } else {
        var array = [];
        this.state.fieldList.filter(function (data) {
          // var value = data.value.toLowerCase;
          if (data.value.includes(e.target.value)) {
            array.push(data);
          }
        });
        this.setState({
          fieldList: array
        });
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      if (fieldValue == '') {
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
        this.addField(this);
      }
    } // Field Request 
    // => Field Value 

  }, {
    key: "handleEditFieldRequestClick",
    //  => Edit
    value: function handleEditFieldRequestClick(index) {
      var copyArray, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditFieldRequestClick$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              copyArray = [];
              copyArray = Object.assign([], this.state.fieldRequestList);
              obj = {};
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context3.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                fieldRequestList: copyArray
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
    key: "handleCancelFieldRequestClick",
    value: function handleCancelFieldRequestClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.fieldRequestList);
      copyArray[index].value = copyArray[index].prevVal;
      copyArray[index].label = true;
      copyArray[index].error = '';
      this.setState({
        fieldRequestList: copyArray
      });
    } // Update

  }, {
    key: "handleUpdateFieldRequestClick",
    value: function handleUpdateFieldRequestClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.fieldRequestList);

      if (copyArray[index].value == copyArray[index].prevVal) {
        copyArray[index].error = 'Enter Different Value';
        this.setState({
          fieldRequestList: copyArray
        });
      } else {
        if (copyArray[index].error == '') {
          copyArray[index].label = true;
          this.setState({
            fieldRequestList: copyArray,
            showModalMessage: 'Product Field Updated Successfully',
            showModal: true
          });
        }
      }
    } //  => Add

  }, {
    key: "handleAddFieldRequestClick",
    value: function handleAddFieldRequestClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.fieldRequestList);
      copyArray.splice(index, 1);
      this.setState({
        fieldRequestList: copyArray,
        showModalMessage: 'Product Field Added Successfully',
        showModal: true
      });
    } //  => Delete

  }, {
    key: "handleDeleteFieldRequestClick",
    value: function handleDeleteFieldRequestClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.fieldRequestList);
      copyArray.splice(index, 1);
      this.setState({
        fieldRequestList: copyArray,
        showModalMessage: 'Product Field Deleted',
        showModal: true
      });
    } // All fields
    //  => Chane

  }, {
    key: "handleEditFieldClick",
    //  => Edit
    value: function handleEditFieldClick(index) {
      var copyArray, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditFieldClick$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              copyArray = [];
              copyArray = Object.assign([], this.state.fieldList);
              obj = {};
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context4.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                fieldList: copyArray
              }));

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    } //  => Cancle

  }, {
    key: "handleCancelFieldClick",
    value: function handleCancelFieldClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.fieldList);
      copyArray[index].value = copyArray[index].prevVal;
      copyArray[index].error = '';
      copyArray[index].label = true;
      this.setState({
        fieldList: copyArray
      });
    } //  => Update

  }, {
    key: "handleUpdateFieldClick",
    value: function handleUpdateFieldClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.fieldList);

      if (copyArray[index].value == copyArray[index].prevVal) {
        copyArray[index].error = 'Enter Different Value';
        this.setState({
          fieldRequestList: copyArray
        });
      } else {
        if (copyArray[index].error == '') {
          copyArray[index].label = true;
          fieldArray.forEach(function (element, i) {
            if (copyArray[index].prevVal == element.value) {
              element.value = copyArray[index].value;
            }
          });
          console.log('array:', fieldArray);
          this.setState({
            fieldList: copyArray,
            showModalMessage: 'Product Field Updated Successfully',
            showModal: true
          });
        }
      }
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
          lineNumber: 237,
          columnNumber: 17
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        style: styles.title_row,
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faListAlt"],
        style: styles.title_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "mr-auto",
        style: styles.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }
      }, " Product Fields ")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
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
          lineNumber: 253,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 33
        }
      }, "Add New Field "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
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
          lineNumber: 257,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 37
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        type: "text",
        size: "sm",
        placeholder: "Enter Field Value",
        name: "sku",
        value: this.state.fieldValue,
        onChange: function onChange(e) {
          return _this2.setState({
            fieldValue: e.target.value
          });
        },
        isInvalid: this.state.error,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 45
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
        type: "invalid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 45
        }
      }, this.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
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
          lineNumber: 280,
          columnNumber: 41
        }
      }, this.state.isLoading ? 'Uploading' : 'Add Field', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
        animation: "grow",
        size: "sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 69
        }
      }) : null))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
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
          lineNumber: 295,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 33
        }
      }, "Add Field Requests"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
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
          lineNumber: 299,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 33
        }
      }, this.state.fieldRequestList.map(function (data, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
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
            lineNumber: 307,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Field Value",
          name: "sku",
          value: data.value,
          onChange: function onChange(e) {
            return _this2.handleFieldChange(e, index);
          },
          disabled: data.label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308,
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
            lineNumber: 318,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Field Value",
          name: "sku",
          value: data.value,
          onChange: function onChange(e) {
            return _this2.handleFieldChange(e, index);
          },
          disabled: data.label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 49
          }
        })), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
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
            lineNumber: 330,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Field Value",
          name: "sku",
          value: data.value,
          onChange: function onChange(e) {
            return _this2.handleFieldRequestChange(e, index);
          },
          isInvalid: data.error,
          disabled: data.label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 53
          }
        }, data.error))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347,
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
            lineNumber: 348,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-success",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            return data.label ? _this2.handleEditFieldRequestClick(index) : _this2.handleUpdateFieldRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351,
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
            lineNumber: 354,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-primary",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            data.label ? _this2.handleAddFieldRequestClick(index) : _this2.handleCancelFieldRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 53
          }
        }, data.label ? 'Add' : 'Cancel'))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360,
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
            lineNumber: 361,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-danger",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            return _this2.handleDeleteFieldRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 53
          }
        }, "Discard"))));
      })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        noGutters: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
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
          lineNumber: 382,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: styles.card,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 33
        }
      }, "All Fields"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Toggle, {
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
          lineNumber: 386,
          columnNumber: 33
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        size: "xs",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSlidersH"],
        style: styles.accordin_fontawesome,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 37
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Accordion"].Collapse, {
        eventKey: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        style: styles.card_body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
        style: {
          margin: '0% 5%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 37
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 45
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        type: "text",
        size: "sm",
        placeholder: "Enter Field Value",
        name: "sku",
        value: this.state.filterStr,
        onChange: function onChange(e) {
          return _this2.handleFilterStrChange(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 49
        }
      })))), __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 37
        }
      }), this.state.fieldList.map(function (data, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408,
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
            lineNumber: 409,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 49
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Field Value",
          name: "sku",
          value: data.value,
          onChange: function onChange(e) {
            return _this2.handleFieldChange(e, index);
          },
          disabled: data.label,
          isInvalid: data.error,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 53
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421,
            columnNumber: 53
          }
        }, data.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 1,
          md: 1,
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-success",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: data.label ? function () {
            return _this2.handleEditFieldClick(index);
          } : function () {
            return _this2.handleUpdateFieldClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 53
          }
        }, data.label ? 'Edit' : 'Update'))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432,
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
            lineNumber: 433,
            columnNumber: 45
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: data.label ? "outline-danger" : "outline-primary",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: data.label ? function () {
            return _this2.handleDeleteFieldClick(index);
          } : function () {
            return _this2.handleCancelFieldClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 49
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436,
            columnNumber: 53
          }
        }, data.label ? 'Delete' : 'Cancel'))));
      })))))));
    }
  }]);

  return ProducFields;
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
/* harmony default export */ __webpack_exports__["default"] = (ProducFields);

/***/ })

})
//# sourceMappingURL=admin.js.ed4cc1ef1e04886501a5.hot-update.js.map