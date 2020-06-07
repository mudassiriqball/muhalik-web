import { Row, Col, Image } from 'react-bootstrap'
import GlobalStyleSheet from '../../../styleSheet'


const CategoriesSlider = (props) => {

    return (
        <>
            {/* <Image src="muhalik.jpg" className='display_in_md_lg' roundedCircle fluid style={{ width: '50px', display: 'flex', margin: '0%' }} /> */}
            <div className='category-container'>
                {props.categories_list && props.categories_list.map((element, index) =>
                    <div key={index} className='item'>
                        {element.value}
                    </div>
                )}
                {props.sub_categories_list && props.sub_categories_list.map((element, index) =>
                    <div key={index} className='item'>
                        {element.value}
                    </div>
                )}
            </div>
            <style jsx>{`
                .category-container {
                    display: inline-flex;
                    background: #e3edf7;
                    box-shadow: -1px 0px 10px 1px ${GlobalStyleSheet.primry_color};
                    width: 100%;
                    padding: 0.5%;
                    overflow-y: scroll;
                    border-radius: 90px;
                }
                .category-container::-webkit-scrollbar {
                    display: none;
                }
                .category-container {
                    -ms-overflow-style: none;
                }
                .item{
                    display: flex;
                    background: #e3edf7;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 0.5%;
                    margin: 0.5%;
                    font-size: 14px;
                    min-width: 100px;
                    min-height: 100px;
                    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.30), -6px -6px 10px -1px rgba(255,255,255,0.30);
                    border: 1px solid rgba(0,0,0,0);
                    transition: transform 0.5s;
                }
                .item:hover{
                    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                                -0.5px -0.5px 0px rgba(255,255,255,1),
                                0.5px 0.5px 0px rgba(0,0,0,0.15),
                                0px 12px 10px -10px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.01);
                    cursor: pointer;
                    transition: translateY(2px);
                    color: blue;
                    font-size: 15px;
                }
            `}</style>
        </>
    )
}

export default CategoriesSlider