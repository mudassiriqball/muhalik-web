import { Accordion, Card, Button, InputGroup, Row, Col, Form } from 'react-bootstrap';
import GlobalStyleSheet from '../../styleSheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

export default function CardSearchAccordion(props) {
    const [searchType, setSearchType] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [options, setOptions] = useState([])
    function handleSearchEnterPress(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            props.handleSearch(searchType, searchValue)
        }
    }

    function handleSearchBtnClick(e) {
        if (e.target.value != '') {
            setSearchValue(e.target.value)
        } else {
            props.setIsSearch(false)
            setSearchValue(e.target.value)
        }
    }

    useEffect(() => {
        setOptions([])
        setOptions(prevPro => {
            return [...new Set([...prevPro, { value: '_id', name: 'ID' }])]
        })
        if (props.option == 'inventory') {
            setOptions(prevPro => {
                return [...new Set([...prevPro, { value: 'mobile', name: 'Mobile' }])]
            })
            setOptions(prevPro => {
                return [...new Set([...prevPro, { value: 'full_name', name: 'Name' }])]
            })
            setOptions(prevPro => {
                return [...new Set([...prevPro, { value: 'shop_name', name: 'Shop Name' }])]
            })
        } else if (props.option == 'vendor') {
            setOptions(prevPro => {
                return [...new Set([...prevPro, { value: 'product_name', name: 'Name' }])]
            })
            setOptions(prevPro => {
                return [...new Set([...prevPro, { value: 'city', name: 'City' }])]
            })
        } else if (props.option == 'customer') {
            setOptions(prevPro => {
                return [...new Set([...prevPro, { value: 'mobile', name: 'Mobile' }])]
            })
            setOptions(prevPro => {
                return [...new Set([...prevPro, { value: 'full_name', name: 'Name' }])]
            })
            setOptions(prevPro => {
                return [...new Set([...prevPro, { value: 'city', name: 'City' }])]
            })
        }
    }, [props.option])

    return (
        <>
            <Accordion as={Row} defaultActiveKey="0" style={{ margin: '2%' }} noGutters >
                <Card className='p-0 m-0 w-100'>
                    <Card.Header as={Row} className='card_toggle_header'>
                        <Col lg={2} md={2} sm='auto' xs='auto' className='accordian_col'>
                            <Form.Label className='p-0 m-0'>{props.title}</Form.Label>
                        </Col>
                        <Col className='display_in_sm_xs accordian_col'>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className='searc_accordian_card_toggle'>
                                <FontAwesomeIcon size="xs" icon={faSlidersH} className='search_accordian_fontawesome' />
                            </Accordion.Toggle>
                        </Col>
                        <Col lg={7} md={7} sm={12} xs={12} className='accordian_col md_padding'>
                            <Row noGutters>
                                <Col lg='auto' md='auto' sm='auto' xs='auto'>
                                    <Form.Control as="select"
                                        variant="dark"
                                        size='sm'
                                        value={props.searchType}
                                        onChange={(e) => setSearchType(e.target.value)}>
                                        {options.map((element, index) =>
                                            <option value={element.value} key={index}>{element.name}</option>
                                        )}
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <InputGroup>
                                        <Form.Control
                                            size='sm'
                                            type="text"
                                            placeholder="Search Here"
                                            name="search"
                                            onKeyPress={(e) => handleSearchEnterPress(e)}
                                            value={searchValue}
                                            onChange={(e) => handleSearchBtnClick(e)}
                                        />
                                        <InputGroup.Append >
                                            <Button size='sm' variant='light' onClick={() => props.handleSearch(searchType, searchValue)}>
                                                {'Search'}
                                            </Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='display_in_lg_md accordian_col'>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className='searc_accordian_card_toggle'>
                                <FontAwesomeIcon size="xs" icon={faSlidersH} className='search_accordian_fontawesome' />
                            </Accordion.Toggle>
                        </Col>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='w-100'>
                            {props.children}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <style type="text/css">{`
                .accordian_col{
                    padding: 0%;
                    margin: 0%;
                }
                .card_toggle_header{
                    background: #595c73;
                    font-size: 13px;
                    color: white;
                    display: inline-flex;
                    align-items: center;
                    width: 100;
                    padding: 1%;
                    margin: 0%;
                }
                .searc_accordian_card_toggle{
                    color: #d4d5de;
                    padding: 1% 0%;
                    margin: 0%;
                    border: none;
                    align-self: center;
                    background: #595c73;
                    font-size: 13px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    width: 100%
                }
                .searc_accordian_card_toggle:hover{
                    color: white;
                }
                .search_accordian_fontawesome{
                    min-width: 20px;
                    max-width: 20px;
                    min-height: 20px;
                    max-height: 20px;
                    margin-left: auto;
                }

                .display_in_sm_xs{
                    display: none;
                }
                .display_in_lg_md{
                    display: flex;
                    align-items: center;
                }
                @media (max-width: 767px){
                    .display_in_sm_xs{
                        display: flex;
                    }
                    .display_in_lg_md{
                        display: none;
                    }
                    .md_padding{
                        padding-top: 1%;
                    }
                }
                @media (max-width: 575px){
                    .search_accordian_fontawesome{
                        min-width: 15px;
                        max-width: 15px;
                        min-height: 15px;
                        max-height: 15px;
                    }
                    .md_padding{
                        padding-top: 2%;
                    }
                }
           `}</style>
        </>
    )
}