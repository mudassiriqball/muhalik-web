module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JS1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bWZ2");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CardAccordion = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
  as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"],
  defaultActiveKey: "0",
  noGutters: true,
  style: {
    margin: '2%'
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  style: styles.card
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
  style: styles.card_header
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, null, props.title), __jsx("div", {
  className: "mr-auto"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Toggle, {
  eventKey: "0",
  style: {
    background: 'none'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  size: "xs",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSlidersH"],
  style: styles.slider_fontawesome
}))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Collapse, {
  eventKey: "0"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, props.children)))));

const styles = {
  card: {
    width: '100%',
    border: '1px solid lightgray'
  },
  card_header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].card_header_fontsize}`,
    background: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].card_header_background}`
  },
  slider_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].admin_primry_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CardAccordion);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("G7yv");


/***/ }),

/***/ "G7yv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VbX6");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bWZ2");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _alert_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("f6Jz");
/* harmony import */ var _title_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("qTQu");
/* harmony import */ var _card_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/JS1");
/* harmony import */ var _sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("vvUq");
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













let categoryArray = [];

class ProducCategories extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleCategoryChange", (e, index) => {
      let copyArray = [];
      copyArray = Object.assign([], this.state.categoryList);
      copyArray[index].value = e.target.value;

      if (e.target.value != '' && e.target.value.length <= 20 && e.target.value.length >= 3) {
        copyArray[index].error = '';
      } else {
        copyArray[index].error = 'Value must be 3-20 characters';
      }

      this.setState({
        categoryList: copyArray
      });
    });

    _defineProperty(this, "handleDeleteCategoryClick", index => {
      let copyArray = [];
      copyArray = Object.assign([], this.state.categoryList);
      categoryArray.forEach((element, i) => {
        if (copyArray[index].value == element.value) {
          categoryArray.splice(index, 1);
        }
      });
      copyArray.splice(index, 1);
      this.setState({
        categoryList: copyArray,
        showModalMessage: 'Product Category Deleted',
        showModal: true
      });
    });

    this.state = {
      isLoading: false,
      showToast: false,
      categoryValue: '',
      subCategoryValue: '',
      categoryError: '',
      subCategoryError: '',
      categoryList: [],
      categoryRequestList: [],
      editRequestedCategory: '',
      showModalMessage: '',
      showModal: false,
      filterStr: ''
    };
  } // Getting Product Categories from DB


  async componentDidMount() {
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].PATH + '/api/categories/categories';
    const currentComponent = this;
    await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(url, {
      headers: {
        'authorization': await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_11__[/* getUncodededTokenFromStorage */ "c"])()
      }
    }).then(response => {
      let copyArray = [];
      copyArray = response.data.data; // copyArray.forEach(element => {
      //     let item = []
      //     item.push({ label: true })
      //     element.push(item)
      // })
      // console.log('copy array:', copyArray)

      currentComponent.setState({
        categoryList: copyArray
      });
      currentComponent.setState({
        categoryRequestList: currentComponent.state.categoryList
      });
      categoryArray = copyArray;
    }).catch(error => {
      console.log('Caterories_1 Fetchig Error: ', error);
    });
  }

  async addCategory(currentComponent) {
    let data = [];
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
    const url = _sdk_muhalik_config__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].PATH + '/api/categories/category';
    await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(url, {
      data
    }, {
      headers: {
        'authorization': await Object(_sdk_core_authentication_service__WEBPACK_IMPORTED_MODULE_11__[/* getUncodededTokenFromStorage */ "c"])()
      }
    }).then(function (response) {
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
    }).catch(function (error) {
      currentComponent.setState({
        isLoading: false
      });
      alert('Error: ', error.response.data.message);
      return false;
    });
  }

  handleFilterStrChange(e) {
    this.setState({
      filterStr: e.target.value
    });

    if (e.target.value == '') {
      this.setState({
        categoryList: categoryArray
      });
    } else {
      let array = [];
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

  async handleSubmit() {
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
  //  => Chane


  //  => Edit
  async handleEditCategoryClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.categoryList);
    var obj = {};
    obj['value'] = copyArray[index].value;
    obj['label'] = false;
    obj['prevVal'] = copyArray[index].value;
    obj['error'] = '';
    copyArray[index] = obj;
    await this.setState({
      categoryList: copyArray
    });
  } //  => Cancle


  handleCancelCategoryClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.categoryList);
    copyArray[index].value = copyArray[index].prevVal;
    copyArray[index].error = '';
    copyArray[index].label = true;
    this.setState({
      categoryList: copyArray
    });
  } //  => Update


  handleUpdateCategoryClick(index) {
    let copyArray = [];
    copyArray = Object.assign([], this.state.categoryList);

    if (copyArray[index].value == copyArray[index].prevVal) {
      copyArray[index].error = 'Enter Different Value';
      this.setState({
        categoryRequestList: copyArray
      });
    } else {
      if (copyArray[index].error == '') {
        copyArray[index].label = true;
        categoryArray.forEach((element, i) => {
          if (copyArray[index].prevVal == element.value) {
            element.value = copyArray[index].value;
          }
        });
        this.setState({
          categoryList: copyArray,
          showModalMessage: 'Product Category Updated Successfully',
          showModal: true
        });
      }
    }
  } //  => Delete


  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_alert_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onHide: e => this.setState({
        showModal: false
      }),
      show: this.state.showModal,
      header: 'Success',
      message: this.state.showModalMessage,
      iconName: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faThumbsUp"],
      color: "#00b300"
    }), __jsx(_title_row__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"],
      title: ' Admin Dashboard / Product Categories'
    }), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: 'Add New Category'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 4,
      md: 4,
      sm: 4,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
      style: styles.label
    }, "Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: this.state.categoryValue,
      onChange: e => this.setState({
        categoryValue: e.target.value,
        categoryError: ''
      }),
      isInvalid: this.state.categoryError
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
      type: "invalid"
    }, this.state.categoryError))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 4,
      md: 4,
      sm: 4,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
      style: styles.label
    }, "Sub Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: this.state.subCategoryValue,
      onChange: e => this.setState({
        subCategoryValue: e.target.value,
        subCategoryError: ''
      }),
      isInvalid: this.state.subCategoryError
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
      type: "invalid"
    }, this.state.subCategoryError)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      size: "sm",
      onClick: this.handleSubmit.bind(this),
      disabled: this.state.isLoading,
      block: true,
      style: styles.submit_btn
    }, this.state.isLoading ? 'Uploading' : 'Add Category', this.state.isLoading ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Spinner"], {
      animation: "grow",
      size: "sm"
    }) : null))), __jsx(_card_accordion__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: 'All Categories'
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Row, {
      style: {
        margin: '0% 5%'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"]
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: this.state.filterStr,
      onChange: e => this.handleFilterStrChange(e)
    })))), __jsx("hr", null), this.state.categoryList.map((element, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Row, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      name: "sku",
      value: element.entry_date,
      disabled: true
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 3,
      md: 3,
      sm: 3,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: element.category,
      onChange: e => this.handleCategoryChange(e, index),
      disabled: element.label,
      isInvalid: element.error
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
      type: "invalid"
    }, element.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 3,
      md: 3,
      sm: 3,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: element.sub_category,
      onChange: e => this.handleCategoryChange(e, index),
      disabled: element.label,
      isInvalid: element.error
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
      type: "invalid"
    }, element.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: 3,
      md: 3,
      sm: 3,
      xs: 12
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
      type: "text",
      size: "sm",
      placeholder: "Enter Category Value",
      name: "sku",
      value: element.sub_sub_category,
      onChange: e => this.handleCategoryChange(e, index),
      disabled: element.label,
      isInvalid: element.error
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control.Feedback, {
      type: "invalid"
    }, element.error))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      variant: "outline-success",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: element.label ? () => this.handleEditCategoryClick(index) : () => this.handleUpdateCategoryClick(index)
    }, __jsx("div", null, element.label ? 'Edit' : 'Update'))), __jsx("div", {
      className: "mr-auto"
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"],
      lg: "auto",
      md: "auto",
      sm: "auto",
      xs: "auto"
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "submit",
      variant: element.label ? "outline-danger" : "outline-primary",
      size: "sm",
      block: true,
      style: styles.submit_btn,
      onClick: element.label ? () => this.handleDeleteCategoryClick(index) : () => this.handleCancelCategoryClick(index)
    }, __jsx("div", null, element.label ? 'Delete' : 'Cancel')))))));
  }

}

const styles = {
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
    fontSize: `${_styleSheet__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].form_label_fontsize}`
  },
  error: {
    width: '100%',
    textAlign: 'center',
    color: '#DC3545',
    fontSize: '14px'
  },
  accordin_fontawesome: {
    color: `${_styleSheet__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].admin_primry_color}`,
    marginRight: '10%',
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProducCategories);

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "VbX6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const path = 'https://muhalikweb.herokuapp.com'; // const path = 'http://localhost:5000';

const MuhalikConfig = {
  PATH: path
};
/* harmony default export */ __webpack_exports__["a"] = (MuhalikConfig);

/***/ }),

/***/ "bWZ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }
let GlobalStyleSheet = {
  // primry_color: '#563D7C',
  primry_color: '#28A745',
  admin_primry_color: '#373948',
  primary_text_color: 'white',
  // Body color
  body_color: '#F1F1F1',
  // body_color: '#DDE1E3',
  // body_color: '#F0F0F0',
  // Fontsize for all the labels of any form control (input, textbox etc):
  form_label_fontsize: '13px',
  card_header_fontsize: '14px',
  card_header_background: 'lightgray',
  react_select_styles: {
    control: base => _objectSpread({}, base, {
      fontSize: '13px'
    }),
    dropdownIndicator: base => _objectSpread({}, base, {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '13px'
    }),
    clearIndicator: base => _objectSpread({}, base, {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '13px'
    }),
    option: provided => _objectSpread({}, provided, {
      fontSize: '13px',
      display: 'absolute',
      zIndex: '1000'
    })
  }
};
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyleSheet);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "f6Jz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function AlertModal(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], _extends({}, props, {
    size: "md",
    "aria-labelledby": "alert-modal",
    centered: true
  }), __jsx("div", {
    style: {
      border: `1px solid ${props.color}`,
      borderRadius: '5px'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    style: {
      color: `${props.color}`,
      borderBottom: `1px solid ${props.color}`
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: props.iconName,
    style: {
      color: `${props.color}`,
      marginRight: '10px',
      width: '35px',
      height: '35px',
      maxHeight: '35px',
      maxWidth: '35px'
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    id: "alert-modal"
  }, props.header)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: {
      fontSize: '14px',
      padding: '0%',
      margin: '0%'
    }
  }, props.message)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    onClick: props.onHide
  }, "Close"))));
}

/* harmony default export */ __webpack_exports__["default"] = (AlertModal);

/***/ }),

/***/ "qTQu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TitleRow = props => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  style: styles.title_row,
  noGutters: true
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: props.icon,
  style: styles.title_fontawesome
}), __jsx("div", {
  className: "mr-auto",
  style: styles.title
}, " Muhalik / ", props.title, " "));

const styles = {
  title_row: {
    borderBottom: '1px solid lightgray',
    padding: '1% 2.5%',
    display: 'flex',
    alignItems: 'center'
  },
  title_fontawesome: {
    color: 'gray',
    marginRight: '3%',
    width: '22px',
    height: '22px',
    maxHeight: '22px',
    maxWidth: '22px'
  },
  title: {
    color: 'gray',
    fontSize: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TitleRow);

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "tYSR":
/***/ (function(module, exports) {

module.exports = require("reactjs-localstorage");

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vvUq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return saveTokenToStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUncodededTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeTokenFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chectAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tYSR");
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// export default AuthenticationService;
 // import { useRouter } from 'next/router'
// import Router from 'next/router'




const AuthenticationService = () => __jsx("div", null);

async function saveTokenToStorage(token) {
  await reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].set('token', token);
}
function getTokenFromStorage() {
  try {
    const token = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
    const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
    return decodedToken.data;
  } catch (error) {
    return null;
  }
}
function getUncodededTokenFromStorage() {
  return reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
}
function removeTokenFromStorage() {
  try {
    reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].remove('token');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/index');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.reload('/index');
  } catch (error) {
    console.log("error:", error);
  }
}
function chectAuth(rolee) {
  try {
    const token = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].get('token');
    const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);

    if (decodedToken.data.role == 'admin') {
      return decodedToken.data.fullName;
    } else if (decodedToken.data.role !== rolee) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/index');
    } else {
      return decodedToken.data.fullName;
    }
  } catch (error) {
    return null;
  }
}
/* unused harmony default export */ var _unused_webpack_default_export = (AuthenticationService);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });