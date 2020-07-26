import { useState } from 'react';
import Router from 'next/router'
import { Carousel, Row, Col, ListGroup, Button, Image } from 'react-bootstrap'
import useDimensions from "react-use-dimensions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faBuromobelexperte } from '@fortawesome/free-brands-svg-icons';

import GlobalStyleSheet from '../../../styleSheet'
import CategoriesSlider from './categories-slider'
import MyButton from '../buttons/my-btn'

import translate from '../../../i18n/translate'

const SliderCarousel = (props) => {
    const [ref, { x, y, width }] = useDimensions();

    const [categoryHover, setCategoryHover] = useState(false)
    const [hoverCategoryId, setHoverCategoryId] = useState('')

    const [categoryMouseOut, setCategoryMouseOut] = useState(false)
    const [subCategoryMouseOut, setSubCategoryMouseOut] = useState(true)

    let cat = false
    let sub = false

    function handleMouseEnter(element) {
        cat = false
        setCategoryHover(true)
        setHoverCategoryId(element._id)
        console.log('cat in:', cat, sub)
    }

    function handleMouseOut() {
        cat = true
        console.log('cat out:', cat, sub)
        if (sub == true) {
            setCategoryHover(false)
        }
    }



    function handleSubMouseEnter() {
        sub = false
        console.log('sub in:', cat, sub)
    }

    function handleSubMouseOut() {
        sub = true
        console.log('sub out:', cat, sub)
        if (cat == true) {
            setCategoryHover(false)
        }
    }



    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='slider_carousel'>
            <Row noGutters className='_row'>
                <Row className='w-100' noGutters >
                    <Col lg={3} md={3} className='category_col'>
                        <ListGroup variant='flush' className='list_group' style={{ maxHeight: width / 2.5 || '25vw' }}>
                            <ListGroup.Item className='list_outer_item' onClick={() => Router.push('/categories')}>
                                <FontAwesomeIcon icon={faBuromobelexperte} className='categories_fontawsome' />
                                <div>{translate('all_categories')}</div>
                                <FontAwesomeIcon icon={faChevronRight} className='fontawesome' />
                            </ListGroup.Item>
                            {props.categories_list && props.categories_list.map((element, index) =>
                                <ListGroup.Item key={element._id} className='list_item'
                                    onMouseEnter={() => handleMouseEnter(element)}
                                    onMouseLeave={handleMouseOut}
                                >
                                    <Image src={element.url} roundedCircle fluid style={{ width: '30px', maxWidth: '30px', minHeight: '30px', maxHeight: '30px', marginRight: '10px' }} />
                                    <div>{element.value}</div>
                                    <FontAwesomeIcon icon={faChevronRight} className='fontawesome' />
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                    <Col className='carosuel_col' ref={ref}
                        onMouseEnter={handleSubMouseEnter}
                        onMouseLeave={handleSubMouseOut}
                    >
                        {categoryHover && <div className='show_sub_categories' style={{ maxHeight: width / 2.5 || '25vw' }}>
                            {props.sub_categories_list && props.sub_categories_list.map((element, index) =>
                                hoverCategoryId == element.category_id ?
                                    <div key={index} className='sub_category_item'>
                                        <div>{element.value}</div>
                                        <FontAwesomeIcon icon={faChevronRight} className='fontawesome' />
                                    </div>
                                    :
                                    null
                            )}
                        </div>
                        }
                        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={3000}>
                            {props.slider_list && props.slider_list.map((element, index) =>
                                <Carousel.Item key={element._id} >
                                    <img
                                        style={{ width: '100vw', maxWidth: '100%', minHeight: width / 2.5 || '25vw', maxHeight: width / 2.5 || '25vw' }}
                                        src={element.url}
                                        alt='Slide {index}'
                                    />
                                    <Carousel.Caption>
                                        <label className='carosuel_label'>{element.sub_category}</label>
                                        <MyButton size='sm' style={{ paddingLeft: '5%', paddingRight: '5%' }} onClick={() => Router.push('/[category]/[sub_category]', `/${element.category}/${element.sub_category}`)}>Shop Now</MyButton>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </Col>
                </Row>
                <CategoriesSlider
                    active_category={props.active_category}
                    categories_list={props.categories_list}
                    sub_categories_list={props.sub_categories_list}
                />
            </Row>

            <style type="text/css">{`
                .slider_carousel{
                    background-image: linear-gradient(180deg, ${GlobalStyleSheet.primry_color} 0%, ${GlobalStyleSheet.body_color} 100%);
                    padding: 0% 3.7% 2% 3.7%;
                }
                .slider_carousel ._row{
                    padding: 1%;
                    border-radius: 3px;
                    background: white;
                }
                .category_col{
                    // max-width: 270px;
                }
                
                .list_group {
                    overflow-y: scroll;
                    padding-left: 1.5%;
                    padding-right: 0%;
                }
                .list_group::-webkit-scrollbar {
                    display: none;
                }
                .list_group {
                    -ms-overflow-style: none;
                }

                .list_outer_item{
                   display: inline-flex;
                    align-items: center;
                    font-size: 15px;
                    font-weight: bold;
                    padding: 2% 8% 2% 4%;
                    cursor: pointer;
                    color: gray;
                    z-index: 1;
                }
                .categories_fontawsome {
                    margin-right: 10px;
                    color: blue;
                    min-width: 25px;
                    max-width: 25px;
                    min-height: 25px;
                    max-height: 25px;
                }

                .list_item {
                    display: inline-flex;
                    align-items: center;
                    font-size: 14px;
                    cursor: pointer;
                    border: none;
                    padding: 2% 8% 2% 4%;
                    color: gray;
                    z-index: 1;
                }
                .list_item:hover{
                    box-shadow: 0px 0px 10px 0.5px lightgray;
                    z-index: 100;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                }
                .slider_carousel .fontawesome{
                    margin-left: auto;
                    color: lightgray;
                    min-width: 12px;
                    max-width: 12px;
                    min-height: 12px;
                    max-height: 12px;
                }



                .carosuel_col {
                    position: relative;
                }
                .slider_img {
                    display: block;
                }
                .carosuel_label {
                    width: 100%;
                    font-size: 16px;
                }
                .show_sub_categories{
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    padding: 3%;
                    background: white;
                    z-index: 1000;
                }
                .sub_category_item {
                    width: 33%;
                    display: inline-flex;
                    align-items: cener;
                }

                @media (max-width: 1199px){
                    .slider_carousel{
                        padding: 0% 2.7% 2% 2.7%;
                    }
                }
                @media (max-width: 991px){
                    .slider_carousel{
                        padding: 0% 2% 2% 2%;
                    }
                    .category_col{
                        display: none;
                    }
                }
                @media (max-width: 767px) {
                    .slider_carousel ._row{
                        padding: 0.5% 0% 0% 0%;
                        background: none;
                    }
                    .slider_carousel{
                        padding: 1%;
                    }
                    .carosuel_label {
                        font-size: 13px;
                    }
                }
            `}</style>
        </div >
    )
}

const styles = {
}
export default SliderCarousel