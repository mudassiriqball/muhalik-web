module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9ujq");


/***/ }),

/***/ "9ujq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import { Row, Col, Image, Card, Button, Form, InputGroup, Accordion } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faArrowLeft, faTimes, faChevronLeft, faChevronRight, faSlidersH } from '@fortawesome/free-solid-svg-icons';
// import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
// import GlobalStyleSheet from '../../../../../../../styleSheet';
// import React, { Component } from 'react';
// // https://drive.google.com/uc?export=view&id=1NXjE17yYJj2Pt7be9_J0DXdsnNzO4Yd4
// // https://drive.google.com/uc?export=view&id=1F7ylPEh_UmvimCgPAOM7rf6gJ_yG8TK9
// const ViewProduct = (props) => {
//     const [imgPreview, setImgPreview] = React.useState(false);
//     const [isVariableProduct, setIsVariableProduct] = React.useState(false);
//     const [index, setIndex] = React.useState('')
//     console.log('1111111:', props.data)
//     if (props.data.product_type != "simple-product") {
//         setIsVariableProduct(false);
//     } else {
//         setIsVariableProduct(true);
//     }
//     const len = props.data.product_image_link.length;
//     function prevImage() {
//         if (index > 0) {
//             setIndex(index - 1)
//         }
//     }
//     function nextImage() {
//         if (index < (len - 1)) {
//             setIndex(index + 1)
//         }
//     }
//     return (
//         <>
//             <Row style={styles.title_row} noGutters>
//                 <FontAwesomeIcon className="fontawesome" icon={faArrowLeft} style={styles.fontawesome} onClick={props.back} className="mr-auto" />
//                 <div className="mr-auto" style={styles.title}> {props.data.product_name}</div>
//                 <div style={styles.title}> Prev </div>
//                 <div style={styles.title}> Next </div>
//             </Row>
//             {isVariableProduct ?
//                 <Row style={styles.row} noGutters>
//                     {props.data.product_image_link && props.data.product_image_link.map((element, index) =>
//                         <div style={{ margin: '0%' }}>
//                             <Image thumbnail fluid style={{ minWidth: '200px', maxWidth: '200px' }}
//                                 src={element.value} alt="Flowers in Chania" onClick={() => { setImgPreview(true), setIndex(index) }} />
//                         </div>
//                     )}
//                 </Row>
//                 :
//                 <>
//                     <Accordion as={Row} style={styles.row} defaultActiveKey="0">
//                         <Card style={styles.card}>
//                             <Card.Header style={styles.card_header}>
//                                 <Form.Label >General Info</Form.Label>
//                                 <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
//                                     <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.fontawesome} />
//                                 </Accordion.Toggle>
//                             </Card.Header>
//                             <Accordion.Collapse eventKey="0">
//                                 <Card.Body >
//                                     <Row>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Product Name:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Brand Name:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>SKU:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Warranty:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Warranty Type:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Discount:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Purchase Note(s):</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control as="textarea" row="5" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={6} md={6} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Discruption:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control as="textarea" row="5" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                     </Row>
//                                 </Card.Body>
//                             </Accordion.Collapse>
//                         </Card>
//                     </Accordion>
//                     <Accordion as={Row} style={styles.row} defaultActiveKey="0">
//                         <Card style={styles.card}>
//                             <Card.Header style={styles.card_header}>
//                                 <Form.Label >Shipping Details</Form.Label>
//                                 <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
//                                     <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.fontawesome} />
//                                 </Accordion.Toggle>
//                             </Card.Header>
//                             <Accordion.Collapse eventKey="0">
//                                 <Card.Body >
//                                     <Row>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Length (cm):</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Width (cm):</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Height (cm):</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Weight (kg):</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Shipping Charges:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                         <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
//                                             <Form.Label style={styles.label}>Handlink Fee:</Form.Label>
//                                             <InputGroup>
//                                                 <Form.Control type="text" size="sm" value={props.data.product_name} disabled={true} />
//                                             </InputGroup>
//                                         </Form.Group>
//                                     </Row>
//                                 </Card.Body>
//                             </Accordion.Collapse>
//                         </Card>
//                     </Accordion>
//                     <Accordion as={Row} style={styles.row} defaultActiveKey="0">
//                         <Card style={styles.card}>
//                             <Card.Header style={styles.card_header}>
//                                 <Form.Label >Product Variations</Form.Label>
//                                 <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
//                                     <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.fontawesome} />
//                                 </Accordion.Toggle>
//                             </Card.Header>
//                             <Accordion.Collapse eventKey="0">
//                                 <Card.Body >
//                                     {props.data.product_variations && props.data.product_variations.map(element =>
//                                         <>
//                                             <Row >
//                                                 {element.item.map(e =>
//                                                     <Form.Group as={Col} lg={3} md={3} sm={4} xs={12}>
//                                                         <Form.Label style={styles.label}>{e.name}</Form.Label>
//                                                         <InputGroup>
//                                                             <Form.Control type="text" size="sm" value={e.value} disabled={true} />
//                                                         </InputGroup>
//                                                     </Form.Group>
//                                                 )}
//                                             </Row>
//                                             <hr />
//                                         </>
//                                     )}
//                                 </Card.Body>
//                             </Accordion.Collapse>
//                         </Card>
//                     </Accordion>
//                     <Accordion as={Row} style={styles.row} defaultActiveKey="0">
//                         <Card style={styles.card}>
//                             <Card.Header style={styles.card_header}>
//                                 <Form.Label size="sm">Product Categories</Form.Label>
//                                 <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
//                                     <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.fontawesome} />
//                                 </Accordion.Toggle>
//                             </Card.Header>
//                             <Accordion.Collapse eventKey="0">
//                                 <Card.Body>
//                                     <Form.Group>
//                                         <Form.Label size="sm">Product Categories</Form.Label>
//                                         <InputGroup>
//                                             {props.data.product_category && props.data.product_category.map(element =>
//                                                 <Form.Label style={styles.label}>{element.value}</Form.Label>
//                                             )}
//                                         </InputGroup>
//                                     </Form.Group>
//                                     <hr />
//                                     <Form.Group>
//                                         <Form.Label size="sm">Product Tags</Form.Label>
//                                         <InputGroup>
//                                             {props.data.product_tags && props.data.product_tags.map(element =>
//                                                 <Form.Label style={styles.label}>{element.value}</Form.Label>
//                                             )}
//                                         </InputGroup>
//                                     </Form.Group>
//                                     <hr />
//                                     <Form.Group>
//                                         <Form.Label>Dangerous Goods</Form.Label>
//                                         <InputGroup>
//                                             {props.data.dangerous_goods && props.data.dangerous_goods.map(element =>
//                                                 <Form.Label style={styles.label}>{element}</Form.Label>
//                                             )}
//                                         </InputGroup>
//                                     </Form.Group>
//                                 </Card.Body>
//                             </Accordion.Collapse>
//                         </Card>
//                     </Accordion>
//                 </>
//             }
//             {/* Image Preview */}
//             {
//                 imgPreview ?
//                     <div className="modal-overlay">
//                         <div className="modal-body">
//                             <div className="close-modal">
//                                 <div className="mr-auto"></div>
//                                 <div className="mr-auto"></div>
//                                 <FontAwesomeIcon className="mr-auto" icon={faChevronLeft} style={styles.img_preview_fontawesome}
//                                     onClick={() => prevImage} />
//                                 <FontAwesomeIcon className="mr-auto" icon={faChevronRight} style={styles.img_preview_fontawesome}
//                                     onClick={nextImage} />
//                                 <div className="mr-auto"></div>
//                                 <FontAwesomeIcon icon={faTimes} style={styles.img_preview_fontawesome}
//                                     onClick={() => setImgPreview(false)} />
//                             </div>
//                             <div className="image-container">
//                                 <img
//                                     src={props.data.product_image_link[index].value}
//                                     style={{ maxWidth: '100%', maxHeight: '90vh', margin: 'auto' }}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     : null
//             }
//             <style jsx>
//                 {`
//                    .modal-overlay {
//                         position: fixed;
//                         top: 0;
//                         left: 0;
//                         bottom: 0;
//                         right: 0;
//                         z-index: 10;
//                         width: 100%;
//                         height: 100%;
//                         background: rgba(21, 21, 21, 0.75);
//                     }
//                      .modal-body {
//                         position: relative;
//                         z-index: 11;
//                         margin: 2.5%;
//                         overflow: hidden;
//                         max-width: 100%;
//                         max-height: 100%;
//                     }
//                     .close-modal {
//                         position: fixed;
//                         display: flex;
//                         top: 10px;
//                         left: 0;
//                         right: 0;
//                         width: 100%;
//                     }
//                     .image-container {
//                         display: grid;
//                         height: 100%;
//                         // display: flex;
//                         // justify-content: center;
//                         // align-items: center;
//                     }
//                 `}
//             </style>
//         </>
//     )
// }
// const styles = {
//     title_row: {
//         borderBottom: '1px solid gray',
//         padding: '0.7% 4%',
//         display: 'flex',
//         alignItems: 'center'
//     },
//     title: {
//         color: 'gray',
//     },
//     label: {
//         fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
//         color: `${GlobalStyleSheet.admin_primry_color}`,
//         marginRight: '2%'
//     },
//     row: {
//         margin: '2%', padding: '0%'
//     },
//     img_preview_fontawesome: {
//         cursor: 'pointer',
//         color: 'white',
//         fontWeight: 'lighter',
//         width: '30px',
//         height: '30px',
//         maxHeight: '30px',
//         maxWidth: '30px',
//     },
//     fontawesome: {
//         color: `${GlobalStyleSheet.admin_primry_color}`,
//         marginRight: '10%',
//         width: '17px',
//         height: '17px',
//         maxHeight: '17px',
//         maxWidth: '17px',
//     },
//     general_info_label: {
//         fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
//         width: '100%',
//         borderBottom: '1px solid gray'
//     },
//     field_label: {
//         border: `1px solid ${GlobalStyleSheet.body_color}`,
//         color: `${GlobalStyleSheet.admin_primry_color}`,
//         margin: '0%',
//         width: '100%',
//         padding: '2px 5px'
//     },
//     card: {
//         width: '100%',
//     },
//     card_header: {
//         alignItems: 'center',
//         // color: '#6A7074',
//         fontSize: '14px',
//         fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
// background: `${GlobalStyleSheet.card_header_background}`,
//     },
// }
const ViewProduct = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};

/* harmony default export */ __webpack_exports__["default"] = (ViewProduct);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });