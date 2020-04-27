import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TitleRow = props => (
    <Row style={styles.title_row} noGutters>
        <FontAwesomeIcon icon={props.icon} style={styles.title_fontawesome} />
        <div className="mr-auto" style={styles.title}> Muhalik / {props.title} </div>
    </Row>
)

const styles = {
    title_row: {
        borderBottom: '1px solid lightgray',
        padding: '1% 2.5%',
        display: 'flex',
        alignItems: 'center',
    },
    title_fontawesome: {
        color: 'gray',
        marginRight: '3%',
        width: '22px',
        height: '22px',
        maxHeight: '22px',
        maxWidth: '22px',
    },
    title: {
        color: 'gray',
        fontSize: '14px'
    },
}
export default TitleRow;