import { Accordion, Card, Button, Row, Form } from 'react-bootstrap';
import GlobalStyleSheet from '../../styleSheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';


const CardAccordion = props => (
    <>
        <Accordion as={Row} defaultActiveKey="0" noGutters style={{ margin: '2%' }}>
            <Card style={styles.card}>
                <Card.Header style={styles.card_header}>
                    <Form.Label >{props.title}</Form.Label>
                    <div className='mr-auto'></div>
                    <Accordion.Toggle eventKey="0" style={{ background: 'none' }}>
                        <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.slider_fontawesome} />
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {props.children}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </>
)

const styles = {
    card: {
        width: '100%',
        border: '1px solid lightgray'
    },
    card_header: {
        display: 'flex',
        alignItems: 'center',
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        background: `${GlobalStyleSheet.card_header_background}`,
    },
    slider_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}
export default CardAccordion;