import { Carousel, Col, Row, ListGroup } from 'react-bootstrap'

const images = [
    { img: 'carousel_img1.jpg' },
    { img: 'carousel_img2.jpg' },
    { img: 'carousel_img3.jpg' },
    { img: 'carousel_img4.jpg' },
]

function OnlyCarousel(props) {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval='1500'>
            {images && images.map((element, i) =>
                <Carousel.Item key={i}>
                    <img
                        className="d-block w-100"
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
    );
}

const CarouselDiv = (props) => {

    return (
        <>
            <Row className='w-100 p-2 m-0 justify-content-center'>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <OnlyCarousel />
                </Col>
            </Row>
        </>
    )
}

export default CarouselDiv