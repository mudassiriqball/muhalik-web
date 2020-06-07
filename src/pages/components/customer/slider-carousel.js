import { Carousel, Col, Row, ListGroup } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import GlobalStyleSheet from '../../../styleSheet'

const images = [
    { img: 'carousel_img1.jpg' },
    { img: 'carousel_img2.jpg' },
    { img: 'carousel_img3.jpg' },
    { img: 'carousel_img4.jpg' },
    { img: 'hassan.jpg' }
]

const SliderCarousel = (props) => {
    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Row className='w-100 bg-white' noGutters >
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval='1500'>
                {images && images.map((element, i) =>
                    <Carousel.Item key={i}>
                        <img
                            style={{ maxHeight: '400px', width: '100vw', maxWidth: '100%' }}
                            className="d-block bg-cover"
                            src={element.img}
                            alt='Slide {i}'
                        />
                        <Carousel.Caption>
                            <h3>Slide {index + 1} label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </Row>
    )
}

const styles = {
}
export default SliderCarousel