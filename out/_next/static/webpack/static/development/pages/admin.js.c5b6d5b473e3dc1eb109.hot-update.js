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
/* harmony import */ var _confirm_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../confirm-modal */ "./src/pages/components/confirm-modal.js");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../title-row */ "./src/pages/components/title-row.js");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../card_accordion */ "./src/pages/components/card_accordion.js");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../sdk/core/authentication-service */ "./src/sdk/core/authentication-service.js");








var _jsxFileName = "C:\\Users\\MudassirR\\Desktop\\Muhalik\\New folder\\muhalikweb\\src\\pages\\components\\admin\\dashboard\\dashboard-contents\\product-contents\\product-categories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

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
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + '/api/categories/categories';
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
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + '/api/categories/category';
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
      var copyArray, index, currentComponent, _data, url;

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
              _data = [];
              _data = {
                category: {
                  value: copyArray[index].value,
                  label: copyArray[index].value
                }
              };
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + "/api/categories/category/".concat(copyArray[index]._id);
              _context5.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context5.t1 = axios__WEBPACK_IMPORTED_MODULE_15___default.a;
              _context5.t2 = url;
              _context5.t3 = {
                data: _data
              };
              _context5.next = 18;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__["getUncodededTokenFromStorage"])());

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
      var copyArray, currentComponent, _data2, url;

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
              _data2 = [];
              _data2 = {
                category: {
                  value: copyArray[index].value,
                  label: copyArray[index].value
                }
              };
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + "/api/categories/sub-category/".concat(copyArray[index]._id);
              _context7.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context7.t1 = axios__WEBPACK_IMPORTED_MODULE_15___default.a;
              _context7.t2 = url;
              _context7.t3 = {
                data: _data2
              };
              _context7.next = 17;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__["getUncodededTokenFromStorage"])());

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
                  categoriesList: copyArray,
                  showModalMessage: 'Product Sub Category Updated Successfully',
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
              url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_13__["default"].PATH + "/api/categories/sub-category/".concat(copyArray[index]._id);
              _context8.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
              _context8.t1 = axios__WEBPACK_IMPORTED_MODULE_15___default.a;
              _context8.t2 = url;
              _context8.t3 = {
                data: data
              };
              _context8.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_20__["getUncodededTokenFromStorage"])());

            case 12:
              _context8.t4 = _context8.sent;
              _context8.t5 = {
                'authorization': _context8.t4
              };
              _context8.t6 = {
                headers: _context8.t5
              };
              _context8.t7 = _context8.t1.put.call(_context8.t1, _context8.t2, _context8.t3, _context8.t6).then(function (response) {
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

                return false;
              });
              _context8.next = 18;
              return _context8.t0.awrap.call(_context8.t0, _context8.t7);

            case 18:
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
          lineNumber: 408,
          columnNumber: 17
        }
      }), __jsx(_confirm_modal__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
          lineNumber: 416,
          columnNumber: 17
        }
      }), __jsx(_title_row__WEBPACK_IMPORTED_MODULE_18__["default"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faListAlt"],
        title: ' Admin Dashboard / Product Categories',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 17
        }
      }), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
        title: 'Add New Category',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
        lg: 6,
        md: 6,
        sm: 6,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        style: styles.label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 29
        }
      }, "Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
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
          lineNumber: 435,
          columnNumber: 33
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
        type: "invalid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 33
        }
      }, this.state.categoryError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
        lg: 6,
        md: 6,
        sm: 6,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        style: styles.label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 29
        }
      }, "Sub Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
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
          lineNumber: 452,
          columnNumber: 33
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
        type: "invalid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 33
        }
      }, this.state.subCategoryError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 25
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
          lineNumber: 467,
          columnNumber: 29
        }
      }, this.state.isLoading ? 'Uploading' : 'Add Category', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
        animation: "grow",
        size: "sm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 57
        }
      }) : null)))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_19__["default"], {
        title: 'All Categories',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
        style: {
          margin: '0% 5%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"].Prepend, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
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
          lineNumber: 549,
          columnNumber: 37
        }
      }, __jsx("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551,
          columnNumber: 41
        }
      }, "Category"), __jsx("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552,
          columnNumber: 41
        }
      }, "Sub Category"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
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
          lineNumber: 555,
          columnNumber: 33
        }
      })))), __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 21
        }
      }), this.state.categoriesList && this.state.categoriesList.map(function (element, index) {
        return __jsx("div", {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568,
            columnNumber: 25
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 569,
            columnNumber: 29
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: 6,
          md: 6,
          sm: 6,
          xs: 12,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 570,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
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
            lineNumber: 571,
            columnNumber: 37
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
          type: "invalid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 580,
            columnNumber: 37
          }
        }, element.error)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
          lg: "auto",
          md: "auto",
          sm: "auto",
          xs: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 584,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
            lineNumber: 585,
            columnNumber: 37
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 589,
            columnNumber: 41
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
            lineNumber: 592,
            columnNumber: 33
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598,
            columnNumber: 41
          }
        }, element.label ? 'Delete' : 'Cancel')))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 602,
            columnNumber: 29
          }
        }, _this2.state.subCategoriesList.map(function (e, i) {
          return element._id == e.category_id ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
            lg: 6,
            md: 6,
            sm: 6,
            xs: 12,
            key: e._id,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 604,
              columnNumber: 37
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 605,
              columnNumber: 41
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
            lg: "auto",
            md: "auto",
            sm: "auto",
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 606,
              columnNumber: 45
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
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
              lineNumber: 607,
              columnNumber: 49
            }
          }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
            type: "invalid",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 616,
              columnNumber: 49
            }
          }, e.error)), __jsx("div", {
            className: "mr-auto",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 620,
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
              lineNumber: 621,
              columnNumber: 45
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
              lineNumber: 622,
              columnNumber: 49
            }
          }, __jsx("div", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 626,
              columnNumber: 53
            }
          }, e.label ? 'Edit' : 'Update'))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"],
            lg: "auto",
            md: "auto",
            sm: "auto",
            xs: "auto",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 629,
              columnNumber: 45
            }
          }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
              lineNumber: 630,
              columnNumber: 49
            }
          }, __jsx("div", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 642,
              columnNumber: 53
            }
          }, e.label ? 'Delete' : 'Cancel'))))) : null;
        })), __jsx("hr", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 651,
            columnNumber: 29
          }
        }));
      })));
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
//# sourceMappingURL=admin.js.c5b6d5b473e3dc1eb109.hot-update.js.map