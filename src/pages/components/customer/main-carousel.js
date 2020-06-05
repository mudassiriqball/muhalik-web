import { Carousel, Col, Row, ListGroup } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch, faUserPlus, faLanguage, faPowerOff, faUser,
    faCartPlus, faHandsHelping, faPen, faSignOutAlt, faGlobe,
    faLuggageCart, faFileInvoiceDollar, faListAlt, faEdit,
    faStoreAlt, faChevronDown, faChevronRight, faListUl, faShoppingCart, faSignLanguage
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const images = [
    { img: 'carousel_img1.jpg' },
    { img: 'carousel_img2.jpg' },
    { img: 'carousel_img3.jpg' },
    { img: 'carousel_img4.jpg' },
    { img: 'hassan.jpg' }
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
                        style={{ maxHeight: '400px' }}
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
    const [hoverCategory, setHoverCategory] = React.useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = React.useState(false)
    const [category_id, setCategory_id] = React.useState('')

    function categoryMouseEnter(index) {
        const copyArray = Object.assign([], props.categories_list)
        setCategory_id(copyArray[index]._id)
    }
    function categoryMouseLeave() {
        setCategory_id('')
    }
    return (
        <>
            <div className='div'>
                <Row className='w-100' noGutters>
                    <div className='col-lg-3 col-md-3 block_sm' onMouseLeave={() => categoryMouseLeave()} style={{ boxShadow: '-1px 0px 10px 1px rgba(0,0,0,0.12) inset' }}>
                        {props.categories_list && props.categories_list.map((element, index) =>
                            <div key={index} className="category_list_item" onMouseOver={() => categoryMouseEnter(index)}>
                                {element.value}
                                <div className='mr-auto'></div>
                                <FontAwesomeIcon icon={faChevronRight} style={styles.faChevronRight} />
                            </div>
                        )}
                    </div>
                    {category_id ?
                        <Col style={{ overflowY: 'auto', zIndex: 100 }}>
                            {props.sub_categories_list && props.sub_categories_list.map((element, index) =>
                                element.category_id == category_id ?
                                    <div key={index} className="category_list_item" >
                                        {element.value}
                                    </div>
                                    :
                                    null
                            )}
                        </Col>
                        :
                        null
                    }
                    <Col lg={9} md={9} sm={12} xs={12} style={{ zIndex: 1 }}>
                        <OnlyCarousel style={{ maxHeight: '30vh' }} />
                    </Col>
                </Row>
            </div>
            <style jsx>{`
                .div{
                    margin: 1% 3%;
                    padding: 1% 2%;
                    background: white;
                }
                .category_list_item {
                    cursor: pointer;
                    width: 98%;
                    display: inline-flex;
                    align-items: center;
                    font-size: 14px;
                    padding: 4% 5%;                        
                    color: gray;
                }
                .category_list_item:hover{
                    z-index: 100;
                    color: #005ce6;
                    border-radius: 2px;                        
                    box-shadow: -1px 0px 10px 1px rgba(0,0,0,0.12);
                }
                .block_sm{
                    display: block;
                }
                @media (max-width: 767px) {
                    .block_sm{
                        display: none;
                    }
                    .div{
                        padding: 0%;
                        margin: 0%;
                    }
                }
            `}</style>
        </>
    )
}

const styles = {
    categories_fontawesome: {
        color: 'gray',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
    faChevronRight: {
        color: 'gray',
        width: '12px',
        height: '12px',
        maxHeight: '12px',
        maxWidth: '12px',
    },
}
export default CarouselDiv