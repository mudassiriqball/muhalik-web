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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../sdk/muhalik.config */ "./src/sdk/muhalik.config.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../.././../styleSheet */ "./src/styleSheet.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../alert-modal */ "./src/pages/components/alert-modal.js");
/* harmony import */ var _confirm_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../confirm-modal */ "./src/pages/components/confirm-modal.js");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");








var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-contents\\product-contents\\product-categories.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var categoryArray = [];

var ProducCategories = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProducCategories, _Component);

  var _super = _createSuper(ProducCategories);

  function ProducCategories(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProducCategories);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleCategoryChange", function (e, index) {
      var copyArray = [];
      copyArray = Object.assign([], _this.state.categoriesList);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      _this.setState({
        categoriesList: copyArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleSubCategoryChange", function (e, index) {
      var copyArray = [];
      copyArray = Object.assign([], _this.state.subCategoriesList);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      _this.setState({
        subCategoriesList: copyArray
      });
    });

    _this.state = {
      isLoading: false,
      showToast: false,
      showConfirmDeleteModal: false,
      delete_category_id: '',
      delete_category_name: '',
      index: '',
      categoryValue: '',
      subCategoryValue: '',
      categoryError: '',
      subCategoryError: '',
      categoriesList: [],
      subCategoriesList: [],
      categoryRequestList: [],
      editRequestedCategory: '',
      showModalMessage: '',
      showModal: false,
      searchType: 'Category',
      filterStr: ''
    };
    return _this;
  } // Getting Product Categories from DB


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProducCategories, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url, currentComponent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_14__["default"].PATH + '/api/categories/categories';
              currentComponent = this;
              _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context.t1 = axios__WEBPACK_IMPORTED_MODULE_16___default.a;
              _context.t2 = url;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_21__["getUncodededTokenFromStorage"])());

            case 7:
              _context.t3 = _context.sent;
              _context.t4 = {
                'authorization': _context.t3
              };
              _context.t5 = {
                headers: _context.t4
              };
              _context.t6 = _context.t1.get.call(_context.t1, _context.t2, _context.t5).then(function (response) {
                currentComponent.setState({
                  categoriesList: response.data.category.docs,
                  subCategoriesList: response.data.sub_category.docs
                });
                categoryArray = response.data.category.docs;
              })["catch"](function (error) {
                console.log('Caterories Fetchig Error: ', error);
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
    key: "addCategory",
    value: function addCategory(currentComponent) {
      var data, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addCategory$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = [];
              data = {
                category: {
                  value: this.state.categoryValue,
                  label: this.state.categoryValue
                },
                sub_category: {
                  value: this.state.subCategoryValue,
                  label: this.state.subCategoryValue
                }
              };
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_14__["default"].PATH + '/api/categories/category';
              _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context2.t1 = axios__WEBPACK_IMPORTED_MODULE_16___default.a;
              _context2.t2 = url;
              _context2.t3 = {
                data: data
              };
              _context2.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_21__["getUncodededTokenFromStorage"])());

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
                  showModalMessage: 'Product Category Added Successfully'
                });
                currentComponent.setState({
                  showModal: true
                });
                return true;
              })["catch"](function (error) {
                currentComponent.setState({
                  isLoading: false
                });

                try {
                  alert('Error: ', error.response.data.message);
                } catch (err) {
                  console.log('Request Failed:', error);
                }

                return false;
              });
              _context2.next = 15;
              return _context2.t0.awrap.call(_context2.t0, _context2.t7);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (this.state.categoryValue == '' || this.state.subCategoryValue == '') {
                if (this.state.categoryValue == '') {
                  this.setState({
                    categoryError: 'Enter Value First'
                  });
                }

                if (this.state.subCategoryValue == '') {
                  this.setState({
                    subCategoryError: 'Enter Value First'
                  });
                }
              } else {
                this.setState({
                  isLoading: true
                });
                this.addCategory(this);
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    } // // Category Request 
    // // => Field Value 
    // handleCategoryRequestChange = (e, index) => {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     copyArray[index].value = e.target.value;
    //     if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
    //         copyArray[index].error = ''
    //     } else {
    //         copyArray[index].error = 'Value must be 3-20 characters'
    //     }
    //     this.setState({ categoryRequestList: copyArray })
    // }
    // //  => Edit
    // async handleEditCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     var obj = {};
    //     obj['value'] = copyArray[index].value;
    //     obj['label'] = false;
    //     obj['prevVal'] = copyArray[index].value;
    //     obj['error'] = '';
    //     copyArray[index] = obj
    //     await this.setState({ categoryRequestList: copyArray })
    // }
    // //  => Cancle
    // handleCancelCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     copyArray[index].value = copyArray[index].prevVal;
    //     copyArray[index].label = true;
    //     copyArray[index].error = '';
    //     this.setState({ categoryRequestList: copyArray })
    // }
    // // Update
    // handleUpdateCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     if (copyArray[index].value == copyArray[index].prevVal) {
    //         copyArray[index].error = 'Enter Different Value';
    //         this.setState({ categoryRequestList: copyArray });
    //     } else {
    //         if (copyArray[index].error == '') {
    //             copyArray[index].label = true;
    //             this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Updated Successfully', showModal: true });
    //         }
    //     }
    // }
    // //  => Add
    // handleAddCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     copyArray.splice(index, 1);
    //     this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Added Successfully', showModal: true })
    //     this.addCategory(this)
    // }
    // //  => Delete
    // handleDeleteCategoryRequestClick(index) {
    //     let copyArray = [];
    //     copyArray = Object.assign([], this.state.categoryRequestList);
    //     copyArray.splice(index, 1);
    //     this.setState({ categoryRequestList: copyArray, showModalMessage: 'Product Category Deleted', showModal: true })
    // }
    // All categories

  }, {
    key: "handleFilterStrChange",
    value: function handleFilterStrChange(e) {
      this.setState({
        filterStr: e.target.value
      });
      var array = [];

      if (e.target.value != '') {
        if (this.state.searchType == 'Category') {
          this.state.categoriesList.filter(function (data) {
            var value = data.value.toLowerCase();

            if (value.includes(e.target.value.toLowerCase())) {
              array.push(data);
            }
          });
        } else {
          var currentComponent = this;
          this.state.subCategoriesList.filter(function (element) {
            var value = element.value.toLowerCase();

            if (value.includes(e.target.value.toLowerCase())) {
              currentComponent.state.categoriesList.filter(function (e) {
                if (element.category_id == e._id) {
                  array.push(e);
                }
              });
            }
          });
          var a = [];
          array.map(function (x) {
            if (!a.includes(x)) {
              a.push(x);
            }
          });
          array = a;
        }

        this.setState({
          categoriesList: array
        });
      } else {
        this.setState({
          categoriesList: categoryArray
        });
      }
    } //  => Chane

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
              copyArray = Object.assign([], this.state.categoriesList);
              obj = {};
              obj['_id'] = copyArray[index]._id;
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context4.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                categoriesList: copyArray
              }));

            case 11:
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
      copyArray = Object.assign([], this.state.categoriesList);
      copyArray[index].value = copyArray[index].prevVal;
      copyArray[index].error = '';
      copyArray[index].label = true;
      this.setState({
        categoriesList: copyArray
      });
    } //  => Update

  }, {
    key: "handleUpdateCategoryClick",
    value: function handleUpdateCategoryClick() {
      var copyArray, index, currentComponent, data, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleUpdateCategoryClick$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              copyArray = [];
              index = this.state.index;
              copyArray = Object.assign([], this.state.categoriesList);

              if (!(copyArray[index].value == copyArray[index].prevVal)) {
                _context5.next = 8;
                break;
              }

              copyArray[index].error = 'Enter Different Value';
              this.setState({
                categoryRequestList: copyArray
              });
              _context5.next = 24;
              break;

            case 8:
              currentComponent = this;
              data = [];
              data = {
                category: {
                  value: copyArray[index].value,
                  label: copyArray[index].value
                }
              };
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_14__["default"].PATH + "/api/categories/category/".concat(copyArray[index]._id);
              _context5.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context5.t1 = axios__WEBPACK_IMPORTED_MODULE_16___default.a;
              _context5.t2 = url;
              _context5.t3 = {
                data: data
              };
              _context5.next = 18;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_21__["getUncodededTokenFromStorage"])());

            case 18:
              _context5.t4 = _context5.sent;
              _context5.t5 = {
                'authorization': _context5.t4
              };
              _context5.t6 = {
                headers: _context5.t5
              };
              _context5.t7 = _context5.t1.put.call(_context5.t1, _context5.t2, _context5.t3, _context5.t6).then(function (response) {
                copyArray[index].label = copyArray[index].value;
                copyArray[index].prevVal = copyArray[index].value;
                currentComponent.setState({
                  categoriesList: copyArray,
                  showModalMessage: 'Product Category Updated Successfully',
                  showModal: true
                });
                categoryArray = copyArray;
                return true;
              })["catch"](function (error) {
                try {
                  alert('Error: ', error.response.data.message);
                } catch (err) {
                  console.log('Request Failed:', error);
                }

                return false;
              });
              _context5.next = 24;
              return _context5.t0.awrap.call(_context5.t0, _context5.t7);

            case 24:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, null, Promise);
    } // 
    // Sub Category

  }, {
    key: "handleEditSubCategoryClick",
    //  => Edit
    value: function handleEditSubCategoryClick(index) {
      var copyArray, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditSubCategoryClick$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              copyArray = [];
              copyArray = Object.assign([], this.state.subCategoriesList);
              obj = {};
              obj['_id'] = copyArray[index]._id;
              obj['category_id'] = copyArray[index].category_id;
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context6.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                subCategoriesList: copyArray
              }));

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, null, Promise);
    } //  => Cancle

  }, {
    key: "handleCancelSubCategoryClick",
    value: function handleCancelSubCategoryClick(index) {
      var copyArray = [];
      copyArray = Object.assign([], this.state.subCategoriesList);
      copyArray[index].value = copyArray[index].prevVal;
      copyArray[index].error = '';
      copyArray[index].label = true;
      this.setState({
        subCategoriesList: copyArray
      });
    } //  => Update

  }, {
    key: "handleUpdateSubCategoryClick",
    value: function handleUpdateSubCategoryClick(index) {
      var copyArray, currentComponent, data, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleUpdateSubCategoryClick$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              copyArray = [];
              copyArray = Object.assign([], this.state.subCategoriesList);

              if (!(copyArray[index].value == copyArray[index].prevVal)) {
                _context7.next = 7;
                break;
              }

              copyArray[index].error = 'Enter Different Value';
              this.setState({
                categoryRequestList: copyArray
              });
              _context7.next = 23;
              break;

            case 7:
              currentComponent = this;
              data = [];
              data = {
                value: copyArray[index].value,
                label: copyArray[index].value,
                category_id: copyArray[index].category_id
              };
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_14__["default"].PATH + "/api/categories/sub-category/".concat(copyArray[index]._id);
              _context7.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context7.t1 = axios__WEBPACK_IMPORTED_MODULE_16___default.a;
              _context7.t2 = url;
              _context7.t3 = {
                data: data
              };
              _context7.next = 17;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_21__["getUncodededTokenFromStorage"])());

            case 17:
              _context7.t4 = _context7.sent;
              _context7.t5 = {
                'authorization': _context7.t4
              };
              _context7.t6 = {
                headers: _context7.t5
              };
              _context7.t7 = _context7.t1.put.call(_context7.t1, _context7.t2, _context7.t3, _context7.t6).then(function (response) {
                copyArray[index].label = copyArray[index].value;
                copyArray[index].prevVal = copyArray[index].value;
                currentComponent.setState({
                  subCategoriesList: copyArray,
                  showModalMessage: 'Product Sub Category Updated Successfully',
                  showModal: true
                });
                categoryArray = copyArray;
              })["catch"](function (error) {
                try {
                  alert('Error: ', error.response.data.message);
                } catch (err) {
                  console.log('Request Failed:', error);
                }
              });
              _context7.next = 23;
              return _context7.t0.awrap.call(_context7.t0, _context7.t7);

            case 23:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this, null, Promise);
    } //  => Delete

  }, {
    key: "handleDeleteSubCategoryClick",
    value: function handleDeleteSubCategoryClick() {
      var copyArray, index, currentComponent, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleDeleteSubCategoryClick$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              this.setState({
                showConfirmDeleteModal: false
              });
              copyArray = [];
              index = this.state.index;
              currentComponent = this;
              copyArray = Object.assign([], this.state.subCategoriesList);
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_14__["default"].PATH + "/api/categories/sub-category/".concat(copyArray[index]._id);
              _context8.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context8.t1 = axios__WEBPACK_IMPORTED_MODULE_16___default.a;
              _context8.t2 = url;
              _context8.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_21__["getUncodededTokenFromStorage"])());

            case 11:
              _context8.t3 = _context8.sent;
              _context8.t4 = {
                'authorization': _context8.t3
              };
              _context8.t5 = {
                headers: _context8.t4
              };
              _context8.t6 = _context8.t1["delete"].call(_context8.t1, _context8.t2, _context8.t5).then(function (response) {
                copyArray.splice(index, 1);
                currentComponent.setState({
                  subCategoriesList: copyArray,
                  showModalMessage: 'Product Category Deleted',
                  showModal: true
                });
                categoryArray = copyArray;
              })["catch"](function (error) {
                try {
                  alert('Error: ', error.response.data.message);
                } catch (err) {
                  console.log('Request Failed:', error);
                }
              });
              _context8.next = 17;
              return _context8.t0.awrap.call(_context8.t0, _context8.t6);

            case 17:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_17__["default"], {
        onHide: function onHide(e) {
          return _this2.setState({
            showModal: false
          });
        },
        show: this.state.showModal,
        header: 'Success',
        message: this.state.showModalMessage,
        iconname: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faThumbsUp"],
        color: "#00b300",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 17
        }
      }), __jsx(_confirm_modal__WEBPACK_IMPORTED_MODULE_18__["default"], {
        onHide: function onHide() {
          return _this2.setState({
            showConfirmDeleteModal: false
          });
        },
        show: this.state.showConfirmDeleteModal,
        title: 'Delete Sub Category',
        _id: this.state.delete_category_id,
        name: this.state.delete_category_name,
        confirm: this.handleDeleteSubCategoryClick.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 17
        }
      }), __jsx(_title_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faListAlt"],
        title: ' Admin Dashboard / Product Categories',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 17
        }
      }), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_20__["default"], {
        title: 'Add New Category',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
        lg: 6,
        md: 6,
        sm: 6,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        style: styles.label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 29
        }
      }, "Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        type: "text",
        size: "sm",
        placeholder: "Enter Category Value",
        name: "sku",
        value: this.state.categoryValue,
        onChange: function onChange(e) {
          return _this2.setState({
            categoryValue: e.target.value,
            categoryError: ''
          });
        },
        isInvalid: this.state.categoryError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 33
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
        type: "invalid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 33
        }
      }, this.state.categoryError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
        lg: 6,
        md: 6,
        sm: 6,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        style: styles.label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 29
        }
      }, "Sub Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        type: "text",
        size: "sm",
        placeholder: "Enter Category Value",
        name: "sku",
        value: this.state.subCategoryValue,
        onChange: function onChange(e) {
          return _this2.setState({
            subCategoryValue: e.target.value,
            subCategoryError: ''
          });
        },
        isInvalid: this.state.subCategoryError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 33
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
        type: "invalid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 33
        }
      }, this.state.subCategoryError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        size: "sm",
        onClick: this.handleSubmit.bind(this),
        disabled: this.state.isLoading,
        block: true,
        style: styles.submit_btn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 29
        }
      }, this.state.isLoading ? 'Uploading' : 'Add Category', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {
        animation: "grow",
        size: "sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 57
        }
      }) : null)))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_20__["default"], {
        title: 'All Categories',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
        style: {
          margin: '0% 5%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["InputGroup"].Prepend, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        as: "select",
        variant: "primary",
        size: "sm",
        value: this.state.searchType,
        onChange: function onChange(e) {
          return _this2.setState({
            searchType: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 37
        }
      }, __jsx("option", {
        className: "jsx-2287855846",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 41
        }
      }, "Category"), __jsx("option", {
        className: "jsx-2287855846",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 41
        }
      }, "Sub Category"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        type: "text",
        size: "sm",
        placeholder: "Search Here",
        name: "search",
        value: this.state.filterStr,
        onChange: function onChange(e) {
          return _this2.handleFilterStrChange(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552,
          columnNumber: 33
        }
      })))), __jsx("hr", {
        className: "jsx-2287855846",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 21
        }
      }), this.state.categoriesList && this.state.categoriesList.map(function (element, index) {
        return __jsx("div", {
          key: index,
          className: "jsx-2287855846",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 565,
            columnNumber: 25
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 566,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          lg: 6,
          md: 6,
          sm: 8,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 567,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
          type: "text",
          size: "sm",
          name: "sku",
          value: element.value,
          disabled: element.label,
          onChange: function onChange(e) {
            return _this2.handleCategoryChange(e, index);
          },
          isInvalid: element.error,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568,
            columnNumber: 37
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577,
            columnNumber: 37
          }
        }, element.error)), __jsx("div", {
          className: "jsx-2287855846" + " " + 'sm_xs_show mr-auto',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 581,
            columnNumber: 33
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 582,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          type: "submit",
          variant: element.label ? "outline-primary" : "outline-success",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: element.label ? function () {
            return _this2.handleEditCategoryClick(index);
          } : function () {
            return _this2.handleUpdateCategoryClick(index);
          },
          disabled: element.label ? false : element.error,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: "jsx-2287855846",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 587,
            columnNumber: 41
          }
        }, element.label ? 'Edit' : 'Update'))), __jsx("div", {
          className: "jsx-2287855846" + " " + 'sm_xs_show mr-auto',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 590,
            columnNumber: 33
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 592,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          type: "submit",
          variant: element.label ? "outline-danger" : "outline-primary",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: element.label ? null : function () {
            return _this2.handleCancelCategoryClick(index);
          },
          disabled: element.label ? true : false,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: "jsx-2287855846",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598,
            columnNumber: 41
          }
        }, element.label ? 'Delete' : 'Cancel')))), __jsx("hr", {
          className: "jsx-2287855846" + " " + 'pb-0 pt-0 mt-0',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 602,
            columnNumber: 29
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 603,
            columnNumber: 29
          }
        }, _this2.state.subCategoriesList.map(function (e, i) {
          return element._id == e.category_id ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
            lg: 6,
            md: 6,
            sm: 12,
            xs: 12,
            key: e._id,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 605,
              columnNumber: 37
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Row, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 606,
              columnNumber: 41
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
            lg: "auto",
            md: "auto",
            sm: 8,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 607,
              columnNumber: 45
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
            type: "text",
            size: "sm",
            name: "sku",
            value: e.value,
            disabled: e.label,
            onChange: function onChange(event) {
              return _this2.handleSubCategoryChange(event, i);
            },
            isInvalid: e.error,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 608,
              columnNumber: 49
            }
          }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
            type: "invalid",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 617,
              columnNumber: 49
            }
          }, e.error)), __jsx("div", {
            className: "jsx-2287855846" + " " + 'mr-auto',
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 621,
              columnNumber: 45
            }
          }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
            lg: "auto",
            md: "auto",
            sm: "auto",
            xs: "auto",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 622,
              columnNumber: 45
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            type: "submit",
            variant: e.label ? "outline-primary" : "outline-success",
            size: "sm",
            block: true,
            style: styles.submit_btn,
            onClick: e.label ? function () {
              return _this2.handleEditSubCategoryClick(i);
            } : function () {
              return _this2.handleUpdateSubCategoryClick(i);
            },
            disabled: e.label ? false : e.error,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 623,
              columnNumber: 49
            }
          }, __jsx("div", {
            className: "jsx-2287855846",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 627,
              columnNumber: 53
            }
          }, e.label ? 'Edit' : 'Update'))), __jsx("div", {
            className: "jsx-2287855846" + " " + 'sm_xs_show mr-auto',
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 630,
              columnNumber: 45
            }
          }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"],
            lg: "auto",
            md: "auto",
            sm: "auto",
            xs: "auto",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 631,
              columnNumber: 45
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            type: "submit",
            variant: e.label ? "outline-danger" : "outline-primary",
            size: "sm",
            block: true,
            style: styles.submit_btn,
            onClick: e.label ? function () {
              return _this2.setState({
                showConfirmDeleteModal: true,
                delete_category_id: e._id,
                delete_category_name: e.value,
                index: index
              });
            } : function () {
              return _this2.handleCancelSubCategoryClick(i);
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 632,
              columnNumber: 49
            }
          }, __jsx("div", {
            className: "jsx-2287855846",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 644,
              columnNumber: 53
            }
          }, e.label ? 'Delete' : 'Cancel'))))) : null;
        })), __jsx("hr", {
          className: "jsx-2287855846" + " " + 'mb-0',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 653,
            columnNumber: 29
          }
        }), __jsx("hr", {
          className: "jsx-2287855846" + " " + 'pb-0 pt-0 mt-0',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 654,
            columnNumber: 29
          }
        }));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2287855846",
        __self: this
      }, "@media only screen and (min-width:768px){.sm_xs_show.jsx-2287855846{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXHByb2R1Y3QtY2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrcEJxQixBQUs0QixhQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTXVkYXNzaXJSXFxEZXNrdG9wXFxNdWhhbGlrXFxOZXcgZm9sZGVyXFxtdWhhbGlrd2ViXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxhZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQtY29udGVudHNcXHByb2R1Y3QtY29udGVudHNcXHByb2R1Y3QtY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIFJvdywgQWNjb3JkaW9uLCBDb2wsIENhcmQsIElucHV0R3JvdXAsIEJ1dHRvbiwgU3Bpbm5lciwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhUGx1cywgZmFMaXN0QWx0LCBmYVNsaWRlcnNIIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYVRodW1ic1VwLCBmYVRodW1ic0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE11aGFsaWtDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2RrL211aGFsaWsuY29uZmlnJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVTaGVldCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLy4uL3N0eWxlU2hlZXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBBbGVydE1vZGFsIGZyb20gJy4uLy4uLy4uLy4uL2FsZXJ0LW1vZGFsJztcclxuaW1wb3J0IENvbmZpcm1Nb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9jb25maXJtLW1vZGFsJ1xyXG5pbXBvcnQgVGl0bGVSb3cgZnJvbSAnLi4vLi4vLi4vLi4vdGl0bGUtcm93JztcclxuaW1wb3J0IENhcmRBY2NvcmRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY2FyZF9hY2NvcmRpb24nO1xyXG5cclxuaW1wb3J0IHsgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3Nkay9jb3JlL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnXHJcblxyXG5sZXQgY2F0ZWdvcnlBcnJheSA9IFtdO1xyXG5jbGFzcyBQcm9kdWNDYXRlZ29yaWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb2FzdDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVsZXRlX2NhdGVnb3J5X2lkOiAnJyxcclxuICAgICAgICAgICAgZGVsZXRlX2NhdGVnb3J5X25hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbmRleDogJycsXHJcblxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcnlWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5VmFsdWU6ICcnLFxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcnlFcnJvcjogJycsXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5RXJyb3I6ICcnLFxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllc0xpc3Q6IFtdLFxyXG4gICAgICAgICAgICBzdWJDYXRlZ29yaWVzTGlzdDogW10sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5UmVxdWVzdExpc3Q6IFtdLFxyXG5cclxuICAgICAgICAgICAgZWRpdFJlcXVlc3RlZENhdGVnb3J5OiAnJyxcclxuICAgICAgICAgICAgc2hvd01vZGFsTWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBzZWFyY2hUeXBlOiAnQ2F0ZWdvcnknLFxyXG4gICAgICAgICAgICBmaWx0ZXJTdHI6ICcnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXR0aW5nIFByb2R1Y3QgQ2F0ZWdvcmllcyBmcm9tIERCXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyAnL2FwaS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMnO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzTGlzdDogcmVzcG9uc2UuZGF0YS5jYXRlZ29yeS5kb2NzLFxyXG4gICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcmllc0xpc3Q6IHJlc3BvbnNlLmRhdGEuc3ViX2NhdGVnb3J5LmRvY3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkgPSByZXNwb25zZS5kYXRhLmNhdGVnb3J5LmRvY3NcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhdGVyb3JpZXMgRmV0Y2hpZyBFcnJvcjogJywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGRDYXRlZ29yeShjdXJyZW50Q29tcG9uZW50KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogeyB2YWx1ZTogdGhpcy5zdGF0ZS5jYXRlZ29yeVZhbHVlLCBsYWJlbDogdGhpcy5zdGF0ZS5jYXRlZ29yeVZhbHVlIH0sXHJcbiAgICAgICAgICAgIHN1Yl9jYXRlZ29yeTogeyB2YWx1ZTogdGhpcy5zdGF0ZS5zdWJDYXRlZ29yeVZhbHVlLCBsYWJlbDogdGhpcy5zdGF0ZS5zdWJDYXRlZ29yeVZhbHVlIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgJy9hcGkvY2F0ZWdvcmllcy9jYXRlZ29yeSc7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHtcclxuICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnYXV0aG9yaXphdGlvbic6IGF3YWl0IGdldFVuY29kZWRlZFRva2VuRnJvbVN0b3JhZ2UoKSB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dNb2RhbE1lc3NhZ2U6ICdQcm9kdWN0IENhdGVnb3J5IEFkZGVkIFN1Y2Nlc3NmdWxseScgfSlcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHNob3dNb2RhbDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyb3I6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgRmFpbGVkOicsIGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2F0ZWdvcnlWYWx1ZSA9PSAnJyB8fCB0aGlzLnN0YXRlLnN1YkNhdGVnb3J5VmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2F0ZWdvcnlWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RXJyb3I6ICdFbnRlciBWYWx1ZSBGaXJzdCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1YkNhdGVnb3J5RXJyb3I6ICdFbnRlciBWYWx1ZSBGaXJzdCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2F0ZWdvcnkodGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyAvLyBDYXRlZ29yeSBSZXF1ZXN0IFxyXG4gICAgLy8gLy8gPT4gRmllbGQgVmFsdWUgXHJcbiAgICAvLyBoYW5kbGVDYXRlZ29yeVJlcXVlc3RDaGFuZ2UgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAvLyAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yeVJlcXVlc3RMaXN0KTtcclxuICAgIC8vICAgICBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgLy8gICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPSAnJyAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0gMjAgJiYgZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgIC8vICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICcnXHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICdWYWx1ZSBtdXN0IGJlIDMtMjAgY2hhcmFjdGVycydcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5UmVxdWVzdExpc3Q6IGNvcHlBcnJheSB9KVxyXG4gICAgLy8gfVxyXG4gICAgLy8gLy8gID0+IEVkaXRcclxuICAgIC8vIGFzeW5jIGhhbmRsZUVkaXRDYXRlZ29yeVJlcXVlc3RDbGljayhpbmRleCkge1xyXG4gICAgLy8gICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgIC8vICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmNhdGVnb3J5UmVxdWVzdExpc3QpO1xyXG4gICAgLy8gICAgIHZhciBvYmogPSB7fTtcclxuICAgIC8vICAgICBvYmpbJ3ZhbHVlJ10gPSBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlO1xyXG4gICAgLy8gICAgIG9ialsnbGFiZWwnXSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIG9ialsncHJldlZhbCddID0gY29weUFycmF5W2luZGV4XS52YWx1ZTtcclxuICAgIC8vICAgICBvYmpbJ2Vycm9yJ10gPSAnJztcclxuICAgIC8vICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqXHJcbiAgICAvLyAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5UmVxdWVzdExpc3Q6IGNvcHlBcnJheSB9KVxyXG4gICAgLy8gfVxyXG4gICAgLy8gLy8gID0+IENhbmNsZVxyXG4gICAgLy8gaGFuZGxlQ2FuY2VsQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpIHtcclxuICAgIC8vICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAvLyAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yeVJlcXVlc3RMaXN0KTtcclxuICAgIC8vICAgICBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID0gY29weUFycmF5W2luZGV4XS5wcmV2VmFsO1xyXG4gICAgLy8gICAgIGNvcHlBcnJheVtpbmRleF0ubGFiZWwgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNvcHlBcnJheVtpbmRleF0uZXJyb3IgPSAnJztcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlSZXF1ZXN0TGlzdDogY29weUFycmF5IH0pXHJcbiAgICAvLyB9XHJcbiAgICAvLyAvLyBVcGRhdGVcclxuICAgIC8vIGhhbmRsZVVwZGF0ZUNhdGVnb3J5UmVxdWVzdENsaWNrKGluZGV4KSB7XHJcbiAgICAvLyAgICAgbGV0IGNvcHlBcnJheSA9IFtdO1xyXG4gICAgLy8gICAgIGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuY2F0ZWdvcnlSZXF1ZXN0TGlzdCk7XHJcbiAgICAvLyAgICAgaWYgKGNvcHlBcnJheVtpbmRleF0udmFsdWUgPT0gY29weUFycmF5W2luZGV4XS5wcmV2VmFsKSB7XHJcbiAgICAvLyAgICAgICAgIGNvcHlBcnJheVtpbmRleF0uZXJyb3IgPSAnRW50ZXIgRGlmZmVyZW50IFZhbHVlJztcclxuICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5UmVxdWVzdExpc3Q6IGNvcHlBcnJheSB9KTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBpZiAoY29weUFycmF5W2luZGV4XS5lcnJvciA9PSAnJykge1xyXG4gICAgLy8gICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5sYWJlbCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlSZXF1ZXN0TGlzdDogY29weUFycmF5LCBzaG93TW9kYWxNZXNzYWdlOiAnUHJvZHVjdCBDYXRlZ29yeSBVcGRhdGVkIFN1Y2Nlc3NmdWxseScsIHNob3dNb2RhbDogdHJ1ZSB9KTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIC8vICA9PiBBZGRcclxuICAgIC8vIGhhbmRsZUFkZENhdGVnb3J5UmVxdWVzdENsaWNrKGluZGV4KSB7XHJcbiAgICAvLyAgICAgbGV0IGNvcHlBcnJheSA9IFtdO1xyXG4gICAgLy8gICAgIGNvcHlBcnJheSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuc3RhdGUuY2F0ZWdvcnlSZXF1ZXN0TGlzdCk7XHJcbiAgICAvLyAgICAgY29weUFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5UmVxdWVzdExpc3Q6IGNvcHlBcnJheSwgc2hvd01vZGFsTWVzc2FnZTogJ1Byb2R1Y3QgQ2F0ZWdvcnkgQWRkZWQgU3VjY2Vzc2Z1bGx5Jywgc2hvd01vZGFsOiB0cnVlIH0pXHJcbiAgICAvLyAgICAgdGhpcy5hZGRDYXRlZ29yeSh0aGlzKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gLy8gID0+IERlbGV0ZVxyXG4gICAgLy8gaGFuZGxlRGVsZXRlQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpIHtcclxuICAgIC8vICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAvLyAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yeVJlcXVlc3RMaXN0KTtcclxuICAgIC8vICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlSZXF1ZXN0TGlzdDogY29weUFycmF5LCBzaG93TW9kYWxNZXNzYWdlOiAnUHJvZHVjdCBDYXRlZ29yeSBEZWxldGVkJywgc2hvd01vZGFsOiB0cnVlIH0pXHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBBbGwgY2F0ZWdvcmllc1xyXG5cclxuICAgIGhhbmRsZUZpbHRlclN0ckNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclN0cjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaFR5cGUgPT0gJ0NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbXBvbmVudCA9IHRoaXNcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3ViQ2F0ZWdvcmllc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LnZhbHVlLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zdGF0ZS5jYXRlZ29yaWVzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNhdGVnb3J5X2lkID09IGUuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBsZXQgYSA9IFtdXHJcbiAgICAgICAgICAgICAgICBhcnJheS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhLmluY2x1ZGVzKHgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucHVzaCh4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBhcnJheSA9IGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllc0xpc3Q6IGFycmF5IH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXNMaXN0OiBjYXRlZ29yeUFycmF5IH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gID0+IENoYW5lXHJcbiAgICBoYW5kbGVDYXRlZ29yeUNoYW5nZSA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmNhdGVnb3JpZXNMaXN0KTtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPSAnJyAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0gMjAgJiYgZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICcnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICdWYWx1ZSBtdXN0IGJlIDMtMjAgY2hhcmFjdGVycydcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXNMaXN0OiBjb3B5QXJyYXkgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyAgPT4gRWRpdFxyXG4gICAgYXN5bmMgaGFuZGxlRWRpdENhdGVnb3J5Q2xpY2soaW5kZXgpIHtcclxuICAgICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzTGlzdCk7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIG9ialsnX2lkJ10gPSBjb3B5QXJyYXlbaW5kZXhdLl9pZDtcclxuICAgICAgICBvYmpbJ3ZhbHVlJ10gPSBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIG9ialsnbGFiZWwnXSA9IGZhbHNlO1xyXG4gICAgICAgIG9ialsncHJldlZhbCddID0gY29weUFycmF5W2luZGV4XS52YWx1ZTtcclxuICAgICAgICBvYmpbJ2Vycm9yJ10gPSAnJztcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdID0gb2JqXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXNMaXN0OiBjb3B5QXJyYXkgfSlcclxuICAgIH1cclxuICAgIC8vICA9PiBDYW5jbGVcclxuICAgIGhhbmRsZUNhbmNlbENhdGVnb3J5Q2xpY2soaW5kZXgpIHtcclxuICAgICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzTGlzdCk7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XS52YWx1ZSA9IGNvcHlBcnJheVtpbmRleF0ucHJldlZhbDtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmVycm9yID0gJyc7XHJcbiAgICAgICAgY29weUFycmF5W2luZGV4XS5sYWJlbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXNMaXN0OiBjb3B5QXJyYXkgfSlcclxuICAgIH1cclxuICAgIC8vICA9PiBVcGRhdGVcclxuICAgIGFzeW5jIGhhbmRsZVVwZGF0ZUNhdGVnb3J5Q2xpY2soKSB7XHJcbiAgICAgICAgbGV0IGNvcHlBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUuaW5kZXhcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLmNhdGVnb3JpZXNMaXN0KTtcclxuICAgICAgICBpZiAoY29weUFycmF5W2luZGV4XS52YWx1ZSA9PSBjb3B5QXJyYXlbaW5kZXhdLnByZXZWYWwpIHtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICdFbnRlciBEaWZmZXJlbnQgVmFsdWUnO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlSZXF1ZXN0TGlzdDogY29weUFycmF5IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogeyB2YWx1ZTogY29weUFycmF5W2luZGV4XS52YWx1ZSwgbGFiZWw6IGNvcHlBcnJheVtpbmRleF0udmFsdWUgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyBgL2FwaS9jYXRlZ29yaWVzL2NhdGVnb3J5LyR7Y29weUFycmF5W2luZGV4XS5faWR9YFxyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQodXJsLCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ2F1dGhvcml6YXRpb24nOiBhd2FpdCBnZXRVbmNvZGVkZWRUb2tlbkZyb21TdG9yYWdlKCkgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5sYWJlbCA9IGNvcHlBcnJheVtpbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLnByZXZWYWwgPSBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc0xpc3Q6IGNvcHlBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWxNZXNzYWdlOiAnUHJvZHVjdCBDYXRlZ29yeSBVcGRhdGVkIFN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkgPSBjb3B5QXJyYXlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgRmFpbGVkOicsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFxyXG4gICAgLy8gU3ViIENhdGVnb3J5XHJcbiAgICBoYW5kbGVTdWJDYXRlZ29yeUNoYW5nZSA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnN1YkNhdGVnb3JpZXNMaXN0KTtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPSAnJyAmJiBlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0gMjAgJiYgZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICcnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICdWYWx1ZSBtdXN0IGJlIDMtMjAgY2hhcmFjdGVycydcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1YkNhdGVnb3JpZXNMaXN0OiBjb3B5QXJyYXkgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyAgPT4gRWRpdFxyXG4gICAgYXN5bmMgaGFuZGxlRWRpdFN1YkNhdGVnb3J5Q2xpY2soaW5kZXgpIHtcclxuICAgICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAgICAgY29weUFycmF5ID0gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5zdGF0ZS5zdWJDYXRlZ29yaWVzTGlzdCk7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIG9ialsnX2lkJ10gPSBjb3B5QXJyYXlbaW5kZXhdLl9pZDtcclxuICAgICAgICBvYmpbJ2NhdGVnb3J5X2lkJ10gPSBjb3B5QXJyYXlbaW5kZXhdLmNhdGVnb3J5X2lkO1xyXG4gICAgICAgIG9ialsndmFsdWUnXSA9IGNvcHlBcnJheVtpbmRleF0udmFsdWU7XHJcbiAgICAgICAgb2JqWydsYWJlbCddID0gZmFsc2U7XHJcbiAgICAgICAgb2JqWydwcmV2VmFsJ10gPSBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIG9ialsnZXJyb3InXSA9ICcnO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0gPSBvYmpcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgc3ViQ2F0ZWdvcmllc0xpc3Q6IGNvcHlBcnJheSB9KVxyXG4gICAgfVxyXG4gICAgLy8gID0+IENhbmNsZVxyXG4gICAgaGFuZGxlQ2FuY2VsU3ViQ2F0ZWdvcnlDbGljayhpbmRleCkge1xyXG4gICAgICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnN1YkNhdGVnb3JpZXNMaXN0KTtcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlID0gY29weUFycmF5W2luZGV4XS5wcmV2VmFsO1xyXG4gICAgICAgIGNvcHlBcnJheVtpbmRleF0uZXJyb3IgPSAnJztcclxuICAgICAgICBjb3B5QXJyYXlbaW5kZXhdLmxhYmVsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3ViQ2F0ZWdvcmllc0xpc3Q6IGNvcHlBcnJheSB9KVxyXG4gICAgfVxyXG4gICAgLy8gID0+IFVwZGF0ZVxyXG4gICAgYXN5bmMgaGFuZGxlVXBkYXRlU3ViQ2F0ZWdvcnlDbGljayhpbmRleCkge1xyXG4gICAgICAgIGxldCBjb3B5QXJyYXkgPSBbXTtcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnN1YkNhdGVnb3JpZXNMaXN0KTtcclxuICAgICAgICBpZiAoY29weUFycmF5W2luZGV4XS52YWx1ZSA9PSBjb3B5QXJyYXlbaW5kZXhdLnByZXZWYWwpIHtcclxuICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5lcnJvciA9ICdFbnRlciBEaWZmZXJlbnQgVmFsdWUnO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlSZXF1ZXN0TGlzdDogY29weUFycmF5IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29weUFycmF5W2luZGV4XS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGNvcHlBcnJheVtpbmRleF0uY2F0ZWdvcnlfaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBNdWhhbGlrQ29uZmlnLlBBVEggKyBgL2FwaS9jYXRlZ29yaWVzL3N1Yi1jYXRlZ29yeS8ke2NvcHlBcnJheVtpbmRleF0uX2lkfWBcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KHVybCwge1xyXG4gICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogYXdhaXQgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSgpIH1cclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvcHlBcnJheVtpbmRleF0ubGFiZWwgPSBjb3B5QXJyYXlbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29weUFycmF5W2luZGV4XS5wcmV2VmFsID0gY29weUFycmF5W2luZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YkNhdGVnb3JpZXNMaXN0OiBjb3B5QXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsTWVzc2FnZTogJ1Byb2R1Y3QgU3ViIENhdGVnb3J5IFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheSA9IGNvcHlBcnJheVxyXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgRmFpbGVkOicsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gID0+IERlbGV0ZVxyXG4gICAgYXN5bmMgaGFuZGxlRGVsZXRlU3ViQ2F0ZWdvcnlDbGljaygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogZmFsc2UgfSlcclxuICAgICAgICBsZXQgY29weUFycmF5ID0gW107XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbXBvbmVudCA9IHRoaXNcclxuICAgICAgICBjb3B5QXJyYXkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnN0YXRlLnN1YkNhdGVnb3JpZXNMaXN0KTtcclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gTXVoYWxpa0NvbmZpZy5QQVRIICsgYC9hcGkvY2F0ZWdvcmllcy9zdWItY2F0ZWdvcnkvJHtjb3B5QXJyYXlbaW5kZXhdLl9pZH1gXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdhdXRob3JpemF0aW9uJzogYXdhaXQgZ2V0VW5jb2RlZGVkVG9rZW5Gcm9tU3RvcmFnZSgpIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb3B5QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdWJDYXRlZ29yaWVzTGlzdDogY29weUFycmF5LFxyXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsTWVzc2FnZTogJ1Byb2R1Y3QgQ2F0ZWdvcnkgRGVsZXRlZCcsXHJcbiAgICAgICAgICAgICAgICBzaG93TW9kYWw6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2F0ZWdvcnlBcnJheSA9IGNvcHlBcnJheVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IEZhaWxlZDonLCBlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdWNjZXNzJ31cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXt0aGlzLnN0YXRlLnNob3dNb2RhbE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbm5hbWU9e2ZhVGh1bWJzVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiIzAwYjMwMFwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb25maXJtTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybURlbGV0ZU1vZGFsOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dDb25maXJtRGVsZXRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEZWxldGUgU3ViIENhdGVnb3J5J31cclxuICAgICAgICAgICAgICAgICAgICBfaWQ9e3RoaXMuc3RhdGUuZGVsZXRlX2NhdGVnb3J5X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuZGVsZXRlX2NhdGVnb3J5X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybT17dGhpcy5oYW5kbGVEZWxldGVTdWJDYXRlZ29yeUNsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVJvdyBpY29uPXtmYUxpc3RBbHR9IHRpdGxlPXsnIEFkbWluIERhc2hib2FyZCAvIFByb2R1Y3QgQ2F0ZWdvcmllcyd9IC8+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQWRkIE5ldyBDYXRlZ29yeSAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnQWRkIE5ldyBDYXRlZ29yeSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezZ9IG1kPXs2fSBzbT17Nn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9PkNhdGVnb3J5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2F0ZWdvcnkgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlWYWx1ZTogZS50YXJnZXQudmFsdWUsIGNhdGVnb3J5RXJyb3I6ICcnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2F0ZWdvcnlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Nn0gbWQ9ezZ9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+U3ViIENhdGVnb3J5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2F0ZWdvcnkgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3ViQ2F0ZWdvcnlWYWx1ZTogZS50YXJnZXQudmFsdWUsIHN1YkNhdGVnb3J5RXJyb3I6ICcnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcnlFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30gYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAnVXBsb2FkaW5nJyA6ICdBZGQgQ2F0ZWdvcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIiBzaXplPVwic21cIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBBZGQgQ2F0ZWdvcnkgUmVxdWVzdHMgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPENhcmRBY2NvcmRpb24gdGl0bGU9eydBZGQgQ2F0ZWdvcnkgUmVxdWVzdHMnfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yeVJlcXVlc3RMaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPXsyfSBtZD17Mn0gc209ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2F0ZWdvcnkgVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17Mn0gbWQ9ezJ9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENhdGVnb3J5IFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz17NH0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDYXRlZ29yeSBWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbGVtZW50LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNhdGVnb3J5UmVxdWVzdENoYW5nZShlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2VsZW1lbnQuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZWxlbWVudC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9XCJhdXRvXCIgbWQ9XCJhdXRvXCIgc209XCJhdXRvXCIgeHM9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIHNpemU9XCJzbVwiIGJsb2NrIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWxlbWVudC5sYWJlbCA/IHRoaXMuaGFuZGxlRWRpdENhdGVnb3J5UmVxdWVzdENsaWNrKGluZGV4KSA6IHRoaXMuaGFuZGxlVXBkYXRlQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2VsZW1lbnQubGFiZWwgPyAnRWRpdCcgOiAnVXBkYXRlJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzaXplPVwic21cIiBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgZWxlbWVudC5sYWJlbCA/IHRoaXMuaGFuZGxlQWRkQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpIDogdGhpcy5oYW5kbGVDYW5jZWxDYXRlZ29yeVJlcXVlc3RDbGljayhpbmRleCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2VsZW1lbnQubGFiZWwgPyAnQWRkJyA6ICdDYW5jZWwnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT1cImF1dG9cIiB4cz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBzaXplPVwic21cIiBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlQ2F0ZWdvcnlSZXF1ZXN0Q2xpY2soaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5EaXNjYXJkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY2NvcmRpb24+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBBbGwgQ2F0ZWdvcmllcyAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkQWNjb3JkaW9uIHRpdGxlPXsnQWxsIENhdGVnb3JpZXMnfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3cgc3R5bGU9e3sgbWFyZ2luOiAnMCUgNSUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwic2VsZWN0XCIgdmFyaWFudD1cInByaW1hcnlcIiBzaXplPSdzbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFR5cGV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFR5cGU6IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U3ViIENhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclN0cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUZpbHRlclN0ckNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yaWVzTGlzdCAmJiB0aGlzLnN0YXRlLmNhdGVnb3JpZXNMaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9ezZ9IG1kPXs2fSBzbT17OH0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJza3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW1lbnQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZWxlbWVudC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDYXRlZ29yeUNoYW5nZShlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2VsZW1lbnQuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtX3hzX3Nob3cgbXItYXV0byc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e0NvbH0gbGc9XCJhdXRvXCIgbWQ9XCJhdXRvXCIgc209XCJhdXRvXCIgeHM9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9e2VsZW1lbnQubGFiZWwgPyBcIm91dGxpbmUtcHJpbWFyeVwiIDogXCJvdXRsaW5lLXN1Y2Nlc3NcIn0gc2l6ZT1cInNtXCIgYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZWxlbWVudC5sYWJlbCA/ICgpID0+IHRoaXMuaGFuZGxlRWRpdENhdGVnb3J5Q2xpY2soaW5kZXgpIDogKCkgPT4gdGhpcy5oYW5kbGVVcGRhdGVDYXRlZ29yeUNsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlbGVtZW50LmxhYmVsID8gZmFsc2UgOiBlbGVtZW50LmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntlbGVtZW50LmxhYmVsID8gJ0VkaXQnIDogJ1VwZGF0ZSd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21feHNfc2hvdyBtci1hdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBsZz1cImF1dG9cIiBtZD1cImF1dG9cIiBzbT1cImF1dG9cIiB4cz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD17ZWxlbWVudC5sYWJlbCA/IFwib3V0bGluZS1kYW5nZXJcIiA6IFwib3V0bGluZS1wcmltYXJ5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIiBibG9jayBzdHlsZT17c3R5bGVzLnN1Ym1pdF9idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbGVtZW50LmxhYmVsID8gbnVsbCA6ICgpID0+IHRoaXMuaGFuZGxlQ2FuY2VsQ2F0ZWdvcnlDbGljayhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZWxlbWVudC5sYWJlbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZWxlbWVudC5sYWJlbCA/ICdEZWxldGUnIDogJ0NhbmNlbCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdwYi0wIHB0LTAgbXQtMCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3ViQ2F0ZWdvcmllc0xpc3QubWFwKChlLCBpKSA9PiAoZWxlbWVudC5faWQgPT0gZS5jYXRlZ29yeV9pZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs2fSBtZD17Nn0gc209ezEyfSB4cz17MTJ9IGtleT17ZS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPXs4fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNrdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVTdWJDYXRlZ29yeUNoYW5nZShldmVudCwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2UuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PXtlLmxhYmVsID8gXCJvdXRsaW5lLXByaW1hcnlcIiA6IFwib3V0bGluZS1zdWNjZXNzXCJ9IHNpemU9XCJzbVwiIGJsb2NrIHN0eWxlPXtzdHlsZXMuc3VibWl0X2J0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UubGFiZWwgPyAoKSA9PiB0aGlzLmhhbmRsZUVkaXRTdWJDYXRlZ29yeUNsaWNrKGkpIDogKCkgPT4gdGhpcy5oYW5kbGVVcGRhdGVTdWJDYXRlZ29yeUNsaWNrKGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2UubGFiZWwgPyBmYWxzZSA6IGUuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2UubGFiZWwgPyAnRWRpdCcgOiAnVXBkYXRlJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbV94c19zaG93IG1yLWF1dG8nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGxnPVwiYXV0b1wiIG1kPVwiYXV0b1wiIHNtPVwiYXV0b1wiIHhzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PXtlLmxhYmVsID8gXCJvdXRsaW5lLWRhbmdlclwiIDogXCJvdXRsaW5lLXByaW1hcnlcIn0gc2l6ZT1cInNtXCIgYmxvY2sgc3R5bGU9e3N0eWxlcy5zdWJtaXRfYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5sYWJlbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1EZWxldGVNb2RhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9jYXRlZ29yeV9pZDogZS5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVfY2F0ZWdvcnlfbmFtZTogZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuaGFuZGxlQ2FuY2VsU3ViQ2F0ZWdvcnlDbGljayhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZS5sYWJlbCA/ICdEZWxldGUnIDogJ0NhbmNlbCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9J21iLTAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdwYi0wIHB0LTAgbXQtMCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc21feHNfc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGl0bGVfcm93OiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxLjUlIDQlJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlX2ZvbnRhd2Vzb21lOiB7XHJcbiAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzMlJyxcclxuICAgICAgICB3aWR0aDogJzI2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzI2cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjZweCcsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2dyYXknXHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmQ6IHtcclxuICAgICAgICAvLyB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpbjogJzIlJ1xyXG4gICAgfSxcclxuICAgIGNhcmRfYm9keToge1xyXG4gICAgICAgIC8vIHBhZGRpbmc6ICc1JSdcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmZvcm1fbGFiZWxfZm9udHNpemV9YFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAnI0RDMzU0NScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH0sXHJcbiAgICBhY2NvcmRpbl9mb250YXdlc29tZToge1xyXG4gICAgICAgIGNvbG9yOiBgJHtHbG9iYWxTdHlsZVNoZWV0LmFkbWluX3ByaW1yeV9jb2xvcn1gLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMTAlJyxcclxuICAgICAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzE1cHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTVweCcsXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y0NhdGVnb3JpZXNcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\MudassirR\\\\Desktop\\\\Muhalik\\\\New folder\\\\muhalikweb\\\\src\\\\pages\\\\components\\\\admin\\\\dashboard\\\\dashboard-contents\\\\product-contents\\\\product-categories.js */"));
    }
  }]);

  return ProducCategories;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

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
    fontSize: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].form_label_fontsize)
  },
  error: {
    width: '100%',
    textAlign: 'center',
    color: '#DC3545',
    fontSize: '14px'
  },
  accordin_fontawesome: {
    color: "".concat(_styleSheet__WEBPACK_IMPORTED_MODULE_15__["default"].admin_primry_color),
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProducCategories);

/***/ }),

/***/ "./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-fields.js":
/*!****************************************************************************************************!*\
  !*** ./src/pages/components/admin/dashboard/dashboard-contents/product-contents/product-fields.js ***!
  \****************************************************************************************************/
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
/* harmony import */ var _confirm_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../confirm-modal */ "./src/pages/components/confirm-modal.js");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");








var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-contents\\product-contents\\product-fields.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var fieldsArray = [];

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

    _this.state = {
      isLoading: false,
      showToast: false,
      showConfirmDeleteModal: false,
      isFieldDelete: '',
      delete_field_id: '',
      delete_field_name: '',
      delete_field_index: '',
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
      var url, currentComponent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + '/api/categories/fields';
              currentComponent = this;
              _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context.t1 = axios__WEBPACK_IMPORTED_MODULE_15___default.a;
              _context.t2 = url;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__["getUncodededTokenFromStorage"])());

            case 7:
              _context.t3 = _context.sent;
              _context.t4 = {
                'authorization': _context.t3
              };
              _context.t5 = {
                headers: _context.t4
              };
              _context.t6 = _context.t1.get.call(_context.t1, _context.t2, _context.t5).then(function (response) {
                currentComponent.setState({
                  fieldList: response.data.data.docs
                });
                currentComponent.setState({
                  fieldRequestList: response.data.data.docs
                });
                fieldsArray = response.data.data.docs;
              })["catch"](function (error) {
                alert('F error: ', error);
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
    key: "addField",
    value: function addField(fieldValue, currentComponent) {
      var url, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addField$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + '/api/categories/field';
              data = [];
              data = {
                label: fieldValue,
                value: fieldValue
              };
              _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context2.t1 = axios__WEBPACK_IMPORTED_MODULE_15___default.a;
              _context2.t2 = url;
              _context2.t3 = {
                data: data
              };
              _context2.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__["getUncodededTokenFromStorage"])());

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
                  showModalMessage: 'Product Field Added Successfully'
                });
                currentComponent.setState({
                  showModal: true
                });
              })["catch"](function (error) {
                currentComponent.setState({
                  isLoading: false
                });
                alert('Error: ', error.response.data.message);
              });
              _context2.next = 15;
              return _context2.t0.awrap.call(_context2.t0, _context2.t7);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "handleFilterStrChange",
    value: function handleFilterStrChange(e) {
      this.setState({
        filterStr: e.target.value
      });

      if (e.target.value == '') {
        this.setState({
          fieldList: fieldsArray
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
      if (this.state.fieldValue == '') {
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
        this.addField(this.state.fieldValue, this);
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
      this.addField(copyArray[index].value, this);
    } //  => Delete

  }, {
    key: "handleDeleteFieldRequestClick",
    value: function handleDeleteFieldRequestClick() {
      var index, copyArray, currentComponent, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleDeleteFieldRequestClick$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              index = this.state.delete_field_index;
              this.setState({
                showConfirmDeleteModal: false
              });
              copyArray = [];
              currentComponent = this;
              copyArray = Object.assign([], this.state.fieldRequestList);
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + "/api/categories/field-request/".concat(copyArray[index]._id);
              _context4.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context4.t1 = axios__WEBPACK_IMPORTED_MODULE_15___default.a;
              _context4.t2 = url;
              _context4.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__["getUncodededTokenFromStorage"])());

            case 11:
              _context4.t3 = _context4.sent;
              _context4.t4 = {
                'authorization': _context4.t3
              };
              _context4.t5 = {
                headers: _context4.t4
              };
              _context4.t6 = _context4.t1["delete"].call(_context4.t1, _context4.t2, _context4.t5).then(function (response) {
                copyArray.splice(index, 1);
                currentComponent.setState({
                  fieldRequestList: copyArray,
                  showModalMessage: 'Product Request Field Discarded',
                  showModal: true
                });
                fieldsArray = copyArray;
              })["catch"](function (error) {
                try {
                  alert('Error: ', error.response.data.message);
                } catch (err) {
                  console.log('Request Failed:', error);
                }
              });
              _context4.next = 17;
              return _context4.t0.awrap.call(_context4.t0, _context4.t6);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    } // All fields
    //  => Chane

  }, {
    key: "handleEditFieldClick",
    //  => Edit
    value: function handleEditFieldClick(index) {
      var copyArray, obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditFieldClick$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              copyArray = [];
              copyArray = Object.assign([], this.state.fieldList);
              obj = {};
              obj['value'] = copyArray[index].value;
              obj['label'] = false;
              obj['prevVal'] = copyArray[index].value;
              obj['error'] = '';
              copyArray[index] = obj;
              _context5.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                fieldList: copyArray
              }));

            case 10:
            case "end":
              return _context5.stop();
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
      var copyArray;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleUpdateFieldClick$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              copyArray = [];
              copyArray = Object.assign([], this.state.fieldList);

              if (copyArray[index].value == copyArray[index].prevVal) {
                copyArray[index].error = 'Enter Different Value';
                this.setState({
                  fieldRequestList: copyArray
                });
              } else {
                if (copyArray[index].error == '') {
                  copyArray[index].label = true;
                  fieldsArray.forEach(function (element, i) {
                    if (copyArray[index].prevVal == element.value) {
                      element.value = copyArray[index].value;
                    }
                  });
                  this.setState({
                    fieldList: copyArray,
                    showModalMessage: 'Product Field Updated Successfully',
                    showModal: true
                  });
                }
              }

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, null, Promise);
    } //  => Delete

  }, {
    key: "handleDeleteFieldClick",
    value: function handleDeleteFieldClick() {
      var index, copyArray, currentComponent, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleDeleteFieldClick$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              index = this.state.delete_field_index;
              this.setState({
                showConfirmDeleteModal: false
              });
              copyArray = [];
              currentComponent = this;
              copyArray = Object.assign([], this.state.fieldList);
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + "/api/categories/field/".concat(copyArray[index]._id);
              _context7.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context7.t1 = axios__WEBPACK_IMPORTED_MODULE_15___default.a;
              _context7.t2 = url;
              _context7.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__["getUncodededTokenFromStorage"])());

            case 11:
              _context7.t3 = _context7.sent;
              _context7.t4 = {
                'authorization': _context7.t3
              };
              _context7.t5 = {
                headers: _context7.t4
              };
              _context7.t6 = _context7.t1["delete"].call(_context7.t1, _context7.t2, _context7.t5).then(function (response) {
                copyArray.splice(index, 1);
                currentComponent.setState({
                  fieldList: copyArray,
                  showModalMessage: 'Product Field Deleted',
                  showModal: true
                });
                fieldsArray = copyArray;
              })["catch"](function (error) {
                try {
                  alert('Error: ', error.response.data.message);
                } catch (err) {
                  console.log('Request Failed:', error);
                }
              });
              _context7.next = 17;
              return _context7.t0.awrap.call(_context7.t0, _context7.t6);

            case 17:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this, null, Promise);
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
        iconname: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faThumbsUp"],
        color: "#00b300",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 17
        }
      }), __jsx(_confirm_modal__WEBPACK_IMPORTED_MODULE_17__["default"], {
        onHide: function onHide() {
          return _this2.setState({
            showConfirmDeleteModal: false
          });
        },
        show: this.state.showConfirmDeleteModal,
        title: 'Delete Add Field Request ?',
        _id: this.state.delete_field_id,
        name: this.state.delete_field_name,
        confirm: this.state.isFieldDelete ? this.handleDeleteFieldClick.bind(this) : this.handleDeleteFieldRequestClick.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 17
        }
      }), __jsx(_title_row__WEBPACK_IMPORTED_MODULE_18__["default"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faListAlt"],
        title: ' Admin Dashboard / Product Fields',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 17
        }
      }), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
        title: 'Add New Field',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 25
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
          lineNumber: 305,
          columnNumber: 29
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
        type: "invalid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 29
        }
      }, this.state.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        variant: "outline-primary",
        size: "sm",
        onClick: this.handleSubmit.bind(this),
        disabled: this.state.isLoading,
        block: true,
        style: styles.submit_btn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 25
        }
      }, this.state.isLoading ? 'Uploading' : 'Add Field', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
        animation: "grow",
        size: "sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 53
        }
      }) : null))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
        title: 'Add Field Requests',
        notification: true,
        badge: this.state.fieldRequestList.length,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 17
        }
      }, this.state.fieldRequestList.map(function (element, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 25
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 2,
          md: 2,
          sm: 3,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          name: "sku",
          value: element.entry_date,
          disabled: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 33
          }
        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 2,
          md: 2,
          sm: 3,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          name: "sku",
          value: element.entry_date,
          disabled: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 33
          }
        })), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 29
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
            lineNumber: 350,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Field Value",
          name: "sku",
          value: element.value,
          onChange: function onChange(e) {
            return _this2.handleFieldRequestChange(e, index);
          },
          isInvalid: element.error,
          disabled: element.label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 37
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 37
          }
        }, element.error))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 29
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
            lineNumber: 368,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-success",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            return element.label ? _this2.handleEditFieldRequestClick(index) : _this2.handleUpdateFieldRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 33
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 37
          }
        }, element.label ? 'Edit' : 'Update'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-primary",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            element.label ? _this2.handleAddFieldRequestClick(index) : _this2.handleCancelFieldRequestClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 33
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 37
          }
        }, element.label ? 'Add' : 'Cancel'))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 29
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
            lineNumber: 381,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-danger",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: function onClick() {
            return _this2.setState({
              isFieldDelete: false,
              showConfirmDeleteModal: true,
              delete_field_id: element._id,
              delete_field_name: element.value,
              delete_field_index: index
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 33
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 37
          }
        }, "Discard"))));
      })), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
        title: 'All Fields',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
        style: {
          margin: '0% 5%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 29
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
          lineNumber: 404,
          columnNumber: 33
        }
      })))), __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 21
        }
      }), this.state.fieldList && this.state.fieldList.map(function (element, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 25
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
            lineNumber: 418,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          name: "sku",
          value: element.entry_date,
          disabled: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 33
          }
        })), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 29
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 6,
          md: 6,
          sm: 6,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
          type: "text",
          size: "sm",
          placeholder: "Enter Field Value",
          name: "sku",
          value: element.value,
          onChange: function onChange(e) {
            return _this2.handleFieldChange(e, index);
          },
          disabled: element.label,
          isInvalid: element.error,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 37
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 37
          }
        }, element.error))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 29
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
            lineNumber: 446,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: "outline-success",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: element.label ? function () {
            return _this2.handleEditFieldClick(index);
          } : function () {
            return _this2.handleUpdateFieldClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 33
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 449,
            columnNumber: 37
          }
        }, element.label ? 'Edit' : 'Update'))), __jsx("div", {
          className: "mr-auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 452,
            columnNumber: 29
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
            lineNumber: 453,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          variant: element.label ? "outline-danger" : "outline-primary",
          size: "sm",
          block: true,
          style: styles.submit_btn,
          onClick: element.label ? function () {
            return _this2.setState({
              isFieldDelete: true,
              showConfirmDeleteModal: true,
              delete_field_id: element._id,
              delete_field_name: element.value,
              delete_field_index: index
            });
          } : function () {
            return _this2.handleCancelFieldClick(index);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 33
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464,
            columnNumber: 37
          }
        }, element.label ? 'Delete' : 'Cancel'))));
      })));
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
//# sourceMappingURL=admin.js.9f59f6edc75c3778ba4e.hot-update.js.map