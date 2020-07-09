import { Row, Col, Image, Nav } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'
import Link from 'next/link'

const CategoriesSlider = (props) => {
    return (
        <>
            <div className='category_container'>
                {props.categories_list && props.categories_list.map((element, index) =>
                    <Link href='/[name]/[id]' as={`/category/${element.value}`} key={index} >
                        {props.id == element._id ?
                            <a className='item' style={{ color: 'blue' }}>
                                {element.value}
                            </a>
                            :
                            <a className='item'>
                                {element.value}
                            </a>
                        }
                    </Link>
                )}
            </div>
            <style jsx>{`
                .category_container {
                    display: inline-flex;
                    background: ${GlobalStyleSheet.body_color};
                    width: 100%;
                    padding: 0.5%;
                    margin: 1% 0%;
                    border-radius: 70px;
                    overflow-y: scroll;
                }
                .category_container::-webkit-scrollbar {
                    display: none;
                }
                .category_container {
                    -ms-overflow-style: none;
                }
                .category_container .item{
                    display: flex;
                    background: ${GlobalStyleSheet.body_color};
                    color: gray;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                    margin: 0.5%;
                    padding: 0% 1%;
                    width: 100px;
                    min-width: 100px;
                    height: 100px;
                    text-align: center;
                    font-size: 13px;
                    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.30), -6px -6px 10px -1px rgba(255,255,255,0.30);
                    border: 1px solid rgba(0,0,0,0);
                    transition: transform 0.5s;
                }
                .category_container .item:hover{
                    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                                -0.5px -0.5px 0px rgba(255,255,255,1),
                                0.5px 0.5px 0px rgba(0,0,0,0.15),
                                0px 12px 10px -10px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.01);
                    cursor: pointer;
                    margin: 0.2% 0.5% 0.8% 0.5%;
                    color: blue;
                }
                @media (max-width: 767px) {
                    .category_container {
                        border-radius: 5px;
                    }
                    .category_container .item{
                        border-radius: 10%;
                        white-space: nowrap;
                        width: auto;
                        height: auto;
                    }
                }
            `}</style>
            <style jsx>{`
                a{
                    color: gray;
                }
                a:hover{
                    color: blue;
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}

export default CategoriesSlider