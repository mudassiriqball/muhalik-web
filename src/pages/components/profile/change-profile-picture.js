import React from 'react'
import axios from 'axios'
import { Card, Form, Col, Row, Image, Button, InputGroup, Spinner } from 'react-bootstrap'
import { getTokenFromStorage } from '../../../sdk/core/authentication-service'
import GlobalStyleSheet from '../../../styleSheet'
import MyButton from '../buttons/my-btn'
import MuhalikConfig from '../../../sdk/muhalik.config'

import translate from '../../../i18n/translate'


export default function ChangrProfilePicture(props) {
    const [token, setToken] = React.useState(null)
    const [img, setImg] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    function handleImgUpload() {
        setIsLoading(true)
        const formData = new FormData()
        formData.append('myImage', img)

        console.log('token:', props._id)
        const url = MuhalikConfig.PATH + `/api/users/user-avatar/${props._id}`
        axios.put(url, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': props.token,
            }
        }).then((response) => {
            setIsLoading(false)
            setImg('')
            props.showAlert(translate('profile_picture_updated'))
            props.reloadUser()
        }).catch((error) => {
            setIsLoading(false)
            alert('Error')
        });
    }

    return (
        <div className='change_picture'>
            {!props.isMobile && <label className='heading'>{translate('change_profile_picture')}</label>}
            <Card>
                <Card.Body className='card_body'>
                    <Form.Group as={Row} className='profile_img_col'>
                        <Image src={img != '' ? URL.createObjectURL(img) : props.avatar} roundedCircle thumbnail fluid
                            style={{ minWidth: '100px', maxWidth: '100px', minHeight: '100px', maxHeight: '100px' }} />
                    </Form.Group>
                    <hr />
                    <Form.Group as={Col}>
                        <InputGroup className='profile_img_col'>
                            <Form.File
                                size='sm'
                                className="position-relative"
                                style={{ color: 'gray' }}
                                required
                                name="file"
                                onChange={(e) => setImg(e.target.files[0])}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Row} className='profile_img_col btn_row mt-5'>
                        <Button variant='light' size='sm' onClick={handleImgUpload} block={true} disabled={img == '' || isLoading} >
                            {isLoading ? translate('uploading') : translate('upload')}
                            {isLoading ? <Spinner size='md' animation='grow' /> : null}
                        </Button>
                    </Form.Group>
                </Card.Body>
            </Card>
            <style type="text/css">{`
                .change_picture .card {
                    border: none;
                    background: rgb(165,64,162);
                    background: linear-gradient(135deg, ${GlobalStyleSheet.primry_color} 0%, ${GlobalStyleSheet.primry_light_color} 100%);
                    min-height: 200px;
                }
                .change_picture .card-header {
                    display: inline-flex;
                    align-items: center;
                    font-size: 15px;
                    font-weight: bold;
                    color: ${GlobalStyleSheet.primary_text_light_color};
                    border: none;
                    padding-bottom: 0%;
                    background: none;
                }
                .change_picture .profile_pic_div {
                    padding: 5px;
                }
                .change_picture .heading {
                    font-size: 18px;
                    margin-top: 10px;
                    width: 100%;
                }
                .change_picture .profile_img_col {
                    display:flex;
                    align-items: center;
                    justify-content: center;
                }
                 @media (max-width: 767px){
                    .change_picture {
                        padding: 1.5%;
                    }
                    .change_picture .profile_img_col {
                        padding: 0%;
                    }
                    .change_picture .card_body {
                        padding: 5%;
                    }
                    .btn_row {
                        margin: 0%;
                    }
                }
            `}</style>
        </div>
    )
}
