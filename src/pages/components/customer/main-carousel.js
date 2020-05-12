import { Carousel, Col, Row, ListGroup } from 'react-bootstrap'
import { ColorExtractor } from 'react-color-extractor'

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
        props.activeIndex(index)
    };
    function getColors(colors) {
        props.setColors(colors)
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval='1500'>
            {images && images.map((element, i) =>
                <Carousel.Item>
                    <ColorExtractor getColors={getColors}>
                        <img
                            className="d-block w-100"
                            src={element.img}
                            alt='Slide {i}'
                        />
                    </ColorExtractor>
                    <Carousel.Caption>
                        <h3>Slide {i + 1} label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}

        </Carousel>
    );
}

const CarouselDiv = (props) => {
    const [colors, setColors] = React.useState('');
    const [activeIndex, setActiveIndex] = React.useState('');

    function getColors(colors) {
        setColors(colors)
        console.log('color:', colors)
    };

    return (
        <>
            <Row style={{ margin: '0%', padding: '2% 1%', width: '100%', }} noGutters>
                <Row style={{ width: '100%', padding: '1%', background: 'white' }} noGutters>
                    <Col lg={3} md={3} sm={3} xs={12} style={{ background: 'gray' }}>
                        <ListGroup className="d-flex align-items-start flex-column" style={{ height: '100%' }}>
                            <ListGroup.Item>Top Shops</ListGroup.Item>
                            <ListGroup.Item variant="primary" className="mb-auto p-2">Primary</ListGroup.Item>
                            <ListGroup.Item variant="secondary" className="mb-auto p-2">Secondary</ListGroup.Item>
                            <ListGroup.Item variant="success" className="mb-auto p-2">Success</ListGroup.Item>
                            <ListGroup.Item variant="danger" className="mb-auto p-2">Danger</ListGroup.Item>
                            <ListGroup.Item variant="warning" className="mb-auto p-2">Warning</ListGroup.Item>
                            <ListGroup.Item variant="info" className="mb-auto p-2">Info</ListGroup.Item>
                            <ListGroup.Item variant="light" className="mb-auto p-2">Light</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12} style={{ padding: '0% 1%' }}>
                        <OnlyCarousel setColors={getColors} activeIndex={(e) => setActiveIndex(e)} />
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={12}>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default CarouselDiv