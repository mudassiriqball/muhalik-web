webpackHotUpdate("static\\development\\pages\\vendor.js",{

/***/ "./pages/components/vendor/dashboard/dashboard-tabs-content/bulk-upload.js":
/*!*********************************************************************************!*\
  !*** ./pages/components/vendor/dashboard/dashboard-tabs-content/bulk-upload.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styleSheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../styleSheet */ "./styleSheet.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var BulkUpload =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BulkUpload, _React$Component);

  function BulkUpload(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BulkUpload);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BulkUpload).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeHandler", function (event) {
      _this.setState({
        selectedFile: event.target.files[0],
        loaded: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "downloadBulkUploadTemplete", function () {
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()('/excel.xlsx').then(function (response) {
        response.blob().then(function (blob) {
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'muhalik bulk-upload templete.xlsx';
          a.click();
        });
      });
    });

    _this.state = {
      file: null
    };
    _this.onFormSubmit = _this.onFormSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.fileUpload = _this.fileUpload.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BulkUpload, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault(); // Stop form submit

      this.fileUpload(this.state.file).then(function (response) {
        console.log(response.data);
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        file: e.target.files[0]
      });
    }
  }, {
    key: "fileUpload",
    value: function fileUpload(file) {
      var url = 'http://example.com/file-upload';
      var formData = new FormData();
      formData.append('file', file);
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      return post(url, formData, config);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        style: styles.row
      }, __jsx("h6", {
        className: "mr-auto"
      }, "Products Bulk Upload"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/index"
      }, __jsx("a", null, "Home"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        style: styles.row
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        style: styles.card
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Header, {
        style: {
          background: 'skyblue'
        }
      }, "Download Templete"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "primary",
        size: "md",
        active: true,
        onClick: this.downloadBulkUploadTemplete
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faDownload"],
        style: styles.fontawesome
      }), "Download")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        style: styles.row
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        style: styles.card
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Header, {
        style: {
          background: 'skyblue'
        }
      }, "Upload File"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, null, __jsx("form", {
        onSubmit: this.onFormSubmit
      }, __jsx("div", {
        style: styles.browseBtnDiv
      }, __jsx("input", {
        type: "file",
        onChange: this.onChange
      })), __jsx("div", {
        style: {
          width: '100%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "primary",
        size: "md",
        active: true,
        type: "submit"
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faUpload"],
        style: styles.fontawesome
      }), "Upload")))))));
    }
  }]);

  return BulkUpload;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var styles = {
  row: {
    margin: '2%',
    padding: '0px'
  },
  card: {
    width: '100%'
  },
  browseBtnDiv: {
    width: '100%',
    padding: '0px 0px 10px 0px'
  },
  fontawesome: {
    color: 'white',
    marginRight: '10px',
    width: '14px',
    height: '14px',
    maxHeight: '14px',
    maxWidth: '14px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BulkUpload);

/***/ })

})
//# sourceMappingURL=vendor.js.ec21479cd1e7744e3ae4.hot-update.js.map