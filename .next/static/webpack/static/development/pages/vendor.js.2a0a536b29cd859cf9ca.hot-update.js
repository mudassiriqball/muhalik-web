webpackHotUpdate("static\\development\\pages\\vendor.js",{

/***/ "./pages/components/vendor/dashboard/dashboard-tabs-content/discounts.js":
/*!*******************************************************************************!*\
  !*** ./pages/components/vendor/dashboard/dashboard-tabs-content/discounts.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Discounts; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_image_upload_client_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./react-image-upload-client-spinner */ "./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-spinner.js");
/* harmony import */ var _react_image_upload_client_images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./react-image-upload-client-images */ "./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-images.js");
/* harmony import */ var _react_image_upload_client_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./react-image-upload-client-buttons */ "./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-buttons.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;
// const Discounts = () => {
//     return (
//         <div>
//                 <p>This is Discount page</p>
//         </div>
//     );
// }
// export default Discounts;





var Discounts = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Discounts, _Component);

  function Discounts() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Discounts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Discounts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      uploading: false,
      images: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChange", function (e) {
      var files = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(e.target.files);

      _this.setState({
        uploading: true
      });

      var formData = new FormData();
      files.forEach(function (file, i) {
        formData.append(i, file);
      }); // fetch(`${API_URL}/image-upload`, {
      //     method: 'POST',
      //     body: formData
      // }).then(res => res.json()).then(images => {
      //     this.setState({
      //         uploading: false,
      //         images
      //     })
      // })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "removeImage", function (id) {
      _this.setState({
        images: _this.state.images.filter(function (image) {
          return image.public_id !== id;
        })
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Discounts, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          uploading = _this$state.uploading,
          images = _this$state.images;

      var content = function content() {
        switch (true) {
          case uploading:
            return __jsx(_react_image_upload_client_spinner__WEBPACK_IMPORTED_MODULE_9__["default"], null);

          case images.length > 0:
            return __jsx(_react_image_upload_client_images__WEBPACK_IMPORTED_MODULE_10__["default"], {
              images: images,
              removeImage: _this2.removeImage
            });

          default:
            return __jsx(_react_image_upload_client_buttons__WEBPACK_IMPORTED_MODULE_11__["default"], {
              onChange: _this2.onChange
            });
        }
      };

      return __jsx("div", null, __jsx("div", {
        className: "buttons"
      }, content()));
    }
  }]);

  return Discounts;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-buttons.js":
/*!*******************************************************************************************************!*\
  !*** ./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-buttons.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx("div", {
    className: "buttons fadein"
  }, __jsx("div", {
    className: "button"
  }, __jsx("label", {
    htmlFor: "single"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faImage"],
    color: "#3B5998",
    size: "10x"
  })), __jsx("input", {
    type: "file",
    id: "single",
    onChange: props.onChange
  })), __jsx("div", {
    className: "button"
  }, __jsx("label", {
    htmlFor: "multi"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faImages"],
    color: "#6d84b4",
    size: "10x"
  })), __jsx("input", {
    type: "file",
    id: "multi",
    onChange: props.onChange,
    multiple: true
  })));
});

/***/ }),

/***/ "./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-images.js":
/*!******************************************************************************************************!*\
  !*** ./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-images.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return props.images.map(function (image, i) {
    return __jsx("div", {
      key: i,
      className: "fadein"
    }, __jsx("div", {
      onClick: function onClick() {
        return props.removeImage(image.public_id);
      },
      className: "delete"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimesCircle"],
      size: "2x"
    })), __jsx("img", {
      src: image.secure_url,
      alt: ""
    }));
  });
});

/***/ }),

/***/ "./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-spinner.js":
/*!*******************************************************************************************************!*\
  !*** ./pages/components/vendor/dashboard/dashboard-tabs-content/react-image-upload-client-spinner.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "spinner fadein"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBowlingBall"],
    size: "5x",
    color: "#3B5998"
  }));
});

/***/ })

})
//# sourceMappingURL=vendor.js.2a0a536b29cd859cf9ca.hot-update.js.map