import { Row, Col, Image, Modal, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowLeft, faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import GlobalStyleSheet from '../../../../../../../styleSheet';
import React, { Component } from 'react';
// https://drive.google.com/uc?export=view&id=1NXjE17yYJj2Pt7be9_J0DXdsnNzO4Yd4
// https://drive.google.com/uc?export=view&id=1F7ylPEh_UmvimCgPAOM7rf6gJ_yG8TK9


const ViewProduct = (props) => {
    const [imgPreview, setImgPreview] = React.useState(false);
    const [isSimpleProduct, setIsSimpleProduct] = React.useState(false);
    const [index, setIndex] = React.useState('')
    console.log('1111111:', props.data)

    // if (props.data.product_type == 'simple-product') {
    //     setIsSimpleProduct(true);
    // } else {
    //     setIsSimpleProduct(false);
    // }
    // // const len = props.data.product_image_link.length;

    // function prevImage() {
    //     if (index > 0) {
    //         setIndex(index - 1)
    //     }
    // }

    // function nextImage() {
    //     if (index < (len - 1)) {
    //         setIndex(index + 1)
    //     }
    // }

    return (
        <>
            <Row style={styles.title_row} noGutters>
                <FontAwesomeIcon className="fontawesome" icon={faArrowLeft} style={styles.title_fontawesome} onClick={props.back} className="mr-auto" />
                {/* <div className="mr-auto" style={styles.title}> {props.data.product_name}</div>
                <div style={styles.title}> Prev </div>
                <div style={styles.title}> Next </div> */}
            </Row>
            {/* {isSimpleProduct ?
                <Row style={styles.img_row} noGutters>
                    {props.data.product_image_link && props.data.product_image_link.map((element, index) =>
                        <div style={{ margin: '0%' }}>
                            <Image thumbnail fluid style={{ minWidth: '200px', maxWidth: '200px' }}
                                src={element.value} alt="Flowers in Chania" onClick={() => { setImgPreview(true), setIndex(index) }} />
                        </div>
                    )}
                </Row>
                :
                <>
                    <Row style={styles.img_row} noGutters>
                        <label><span>General Info</span></label>
                        <Row noGutters style={{ background: 'white' }}>
                            <Form.Group as={Col}>
                                <Form.Label style={styles.label}>
                                    Product Name:
                                </Form.Label>
                                <Form.Label style={styles.label}>
                                    {props.data.product_name}
                                </Form.Label>
                            </Form.Group>
                        </Row>
                    </Row>
                </>
            } */}
            {/* Image Preview */}
            {/* <div> */}
            {/* {imgPreview ?
                    <div className="modal-overlay">
                        <div className="modal-body">
                            <div className="close-modal">
                                <div className="mr-auto"></div>
                                <div className="mr-auto"></div>
                                <FontAwesomeIcon className="mr-auto" icon={faChevronLeft} style={styles.img_preview_fontawesome}
                                    onClick={() => prevImage} />
                                <FontAwesomeIcon className="mr-auto" icon={faChevronRight} style={styles.img_preview_fontawesome}
                                    onClick={nextImage} />
                                <div className="mr-auto"></div>
                                <FontAwesomeIcon icon={faTimes} style={styles.img_preview_fontawesome}
                                    onClick={() => setImgPreview(false)} />
                            </div>
                            <div className="image-container">
                                <img
                                    src={props.data.product_image_link[index].value}
                                    style={{ maxWidth: '100%', maxHeight: '90vh', margin: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                    : null
                } */}
            {/* </div> */}
            <style jsx>
                {`
                    label {
                        width: 100%; 
                        text-align: center; 
                        border-bottom: 1px solid gray; 
                        line-height: 0.1em;
                        font-size: ${GlobalStyleSheet.form_label_fontsize};
                        margin: 10px 0%; 
                    } 
                    label span { 
                            background: ${GlobalStyleSheet.admin_primry_color};
                            color: white;
                            padding: 5px 10px;
                    }
                   .modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        z-index: 10;
                        width: 100%;
                        height: 100%;
                        background: rgba(21, 21, 21, 0.75);
                    }
                     .modal-body {
                        position: relative;
                        z-index: 11;
                        margin: 2.5%;
                        overflow: hidden;
                        max-width: 100%;
                        max-height: 100%;
                    }
                    .close-modal {
                        position: fixed;
                        display: flex;
                        top: 10px;
                        left: 0;
                        right: 0;
                        width: 100%;
                    }
                    .image-container {
                        display: grid;
                        height: 100%;
                        // display: flex;
                        // justify-content: center;
                        // align-items: center;
                    }
                `}
            </style>
        </>
    )
}

const styles = {
    title_row: {
        borderBottom: '1px solid gray',
        padding: '0.7% 4%',
        display: 'flex',
        alignItems: 'center'
    },
    title_fontawesome: {
        cursor: 'pointer',
        marginRight: '3%',
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
    },
    title: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
    },
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
    },
    img_row: {
        margin: '2%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '999'
    },
    img_preview_fontawesome: {
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'lighter',
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
    },
    general_info_label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`,
        width: '100%',
        borderBottom: '1px solid gray'
    },
}
export default ViewProduct;