import React from 'react'
import axios from 'axios'
import { Card, Form, Col, Row, Image, InputGroup, Spinner } from 'react-bootstrap'
import { getTokenFromStorage } from '../../../sdk/core/authentication-service'
import GlobalStyleSheet from '../../../styleSheet'
import MyButton from '../buttons/my-btn'
import MuhalikConfig from '../../../sdk/muhalik.config'

export default function ChangrProfilePicture(props) {
    const [token, setToken] = React.useState(null)
    const [img, setImg] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        getToken()
        return () => {
            setToken('')
        }
    }, [])
    async function getToken() {
        const _token = getTokenFromStorage()
        if (_token != null) {
            setToken(_token)
        }
    }

    function handleImgUpload() {
        setIsLoading(true)
        const formData = new FormData()
        formData.append('myImage', img)

        const url = MuhalikConfig.PATH + `/api/users/avatar/${props._id}`
        axios.post(url, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': token,
            }
        }).then((response) => {
            setIsLoading(false)
            alert('added')
        }).catch((error) => {
            setIsLoading(false)
            console.log('error:', error)
            alert('not afaghssj')
        });
    }

    return (
        <div className='change_picture'>
            <label className='heading'>Change Profile Picture</label>
            <div className='profile_pic_div'>
                <Card>
                    <Card.Body>
                        <Form.Group as={Row} className='profile_img_col'>
                            <Image src={img != '' ? URL.createObjectURL(img) : props.user.url} roundedCircle thumbnail fluid
                                style={{ minWidth: '120px', maxWidth: '120px', minHeight: '120px', maxHeight: '120px' }} />
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
                        <Form.Group as={Row} className='profile_img_col mt-5'>
                            <MyButton onClick={handleImgUpload} block={true} disabled={img == '' || isLoading} >
                                {isLoading ? 'Uploading' : 'Upload'}
                                {isLoading ? <Spinner size='md' animation='grow' /> : null}
                            </MyButton>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </div>
            <style type="text/css">{`
                .change_picture .profile_pic_div {
                    padding: 5px;
                }
                .change_picture .heading {
                    font-size: 18px;
                    margin: 10px 5px;
                    width: 100%;
                }
                .profile_img_col {
                    display:flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}
