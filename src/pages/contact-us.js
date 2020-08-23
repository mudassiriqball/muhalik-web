import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap'

import axios from 'axios'
import MuhalikConfig from '../sdk/muhalik.config'
import GlobalStyleSheet from '../styleSheet'
import { checkTokenExpAuth } from '../sdk/core/authentication-service';

import Layout from './components/customer/layout'
import translate from '../i18n/translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import MyButton from './components/buttons/my-btn';


export async function getServerSideProps(context) {
    let categories_list = []
    let sub_categories_list = []
    const url_1 = MuhalikConfig.PATH + '/api/categories/categories';
    await axios.get(url_1).then((response) => {
        categories_list = response.data.category.docs,
            sub_categories_list = response.data.sub_category.docs
    }).catch((error) => {
    })

    return {
        props: {
            categories_list,
            sub_categories_list
        },
    }
}

export default function ContactUs(props) {
    const [cart_count, setCart_count] = useState(0)
    const [user, setUser] = useState({
        _id: null, role: '', mobile: '', full_name: '', gender: '', countary: '', city: '', address: '',
        email: '', shop_name: '', shop_category: '', shop_address: '', avatar: '', status: ''
    })

    useLayoutEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        async function getData() {
            const _decodedToken = await checkTokenExpAuth()
            if (_decodedToken != null) {
                await setUser(_decodedToken)
                const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${_decodedToken._id}`;
                await axios.get(user_url, { cancelToken: source.token }).then((res) => {
                    if (unmounted) {
                        setUser(res.data.data[0])
                        setCart_count(res.data.data[0].cart.length)
                    }
                }).catch((err) => {
                    if (axios.isCancel(err)) return
                })
            }
        }

        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, []);


    return (
        <div className='help'>
            <Layout
                role={user.role}
                full_name={user.full_name}
                cart_count={cart_count}
                categories_list={props.categories_list}
                sub_categories_list={props.sub_categories_list}
                {...props}
            >
                <Row noGutters className='help_row'>
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                        <Card>
                            <Card.Body className='card_body'>
                                <Form.Group as={Row}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <MyButton size='md' disabled={true}>
                                                <FontAwesomeIcon icon={faMobileAlt} className='fontaweome' />
                                            </MyButton>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            size='md'
                                            type="text"
                                            value={'+966 59 091 1771'}
                                            disabled
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <MyButton size='md' disabled={true}>
                                                <FontAwesomeIcon icon={faEnvelope} className='fontaweome' />
                                            </MyButton>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            size='md'
                                            type="text"
                                            value={'mahalk2020@gmail.com'}
                                            disabled
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Layout>
            <style type='text/css'>{`
                .help {
                    min-height: 100vh;
                    background: ${GlobalStyleSheet.body_color};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .help_row {
                    height: 70vh;
                    width: 100%;
                }
                .help .fontaweome {
                    min-width: 25px;
                    max-width: 25px;
                    min-height: 25px;
                    max-height: 25px;
                    margin-right: 5%;
                }
                .help .card_body {
                    padding: 10% 20% 8% 20%;
                }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: Roboto, Helvetica Neue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
                }
            `}</style>
        </div>
    )
}
