import { Row } from 'react-bootstrap';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TitleRow = props => (
    <div clasName='_title'>
        <Row className='title_row' noGutters>
            <FontAwesomeIcon icon={props.icon} className='title_fontawesome' />
            <div className="mr-auto" > Muhalik / {props.title} </div>
            <Link href="/index"><a>Home</a></Link>
        </Row>
        <style type="text/css">{`
            .title_row{
                color: gray;
                font-size: 14px;
                border-bottom: 1px solid lightgray;
                padding: 1% 2.5%;
                display: flex;
                align-items: center;
            }

            .title_fontawesome{
                color: gray;
                margin-right: 2%;
                min-width: 22px;
                min-height: 22px;
                max-height: 22px;
                max-width: 22px;
            }
            @media (max-width: 575px){
                .title_row{
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                }

                .title_fontawesome{
                    margin-right: 2%;
                    min-width: 20px;
                    min-height: 20px;
                    max-height: 20px;
                    max-width: 20px;
                }
            }
        `}</style>
    </div>
)
export default TitleRow;