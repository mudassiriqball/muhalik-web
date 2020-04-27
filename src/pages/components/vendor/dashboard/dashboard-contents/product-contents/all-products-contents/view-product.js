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
const ViewProduct = (props) => {
    return (
        <></>
    )
}
export default ViewProduct;