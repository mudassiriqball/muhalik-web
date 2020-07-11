import { Carousel, Col, Row, ListGroup, Nav, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import GlobalStyleSheet from '../../../styleSheet'
import CategoriesSlider from './categories-slider'
import useDimensions from "react-use-dimensions";
import Router from 'next/router'

const SliderCarousel = (props) => {
    const [ref, { x, y, width }] = useDimensions();

    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='slider_carousel'>
            <Row className='w-100 bg-white' noGutters className='row' ref={ref}>
                <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval='3000'>
                    {props.slider_list && props.slider_list.map((element, index) =>
                        <Carousel.Item key={element._id} >
                            <img
                                style={{
                                    width: '100vw', maxWidth: '100%',
                                    minHeight: width / 3.3, maxHeight: width / 3.3
                                }}
                                className="d-block bg-cover"
                                src={element.url}
                                alt='Slide {index}'
                            />
                            <Carousel.Caption>
                                <Button variant='success' className='pl-5 pr-5'
                                    onClick={() => Router.push('/[category]/[sub_category]', `/${element.category}/${element.sub_category}`)}>Shop Now</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>

                <CategoriesSlider
                    active_category={props.active_category}
                    categories_list={props.categories_list}
                />

            </Row>
            <style type="text/css">{`
                .slider_carousel .row{
                    padding: 0.5% 5% 0% 5%;
                    background: ${GlobalStyleSheet.primry_color};
                    background: linear-gradient(180deg, ${GlobalStyleSheet.primry_color} 0%, #d4f3d0 100%);
                }
                 @media (max-width: 767px) {
                    .slider_carousel .row{
                        padding: 0%;
                    }
                }
            `}</style>
        </div>
    )
}

const styles = {
}
export default SliderCarousel