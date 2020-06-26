import { Accordion, Card, Button, Badge, Row, Form } from 'react-bootstrap';
import GlobalStyleSheet from '../../styleSheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

const CardAccordion = props => (
    <>
        <Accordion as={Row} defaultActiveKey="0" style={{ margin: '2%' }} noGutters >
            <Card style={styles.card}>
                <Card.Header style={styles.card_header}>
                    <Form.Label className='p-0 ml-0 mt-0 mb-0 mr-2'>{props.title}</Form.Label>
                    {props.notification ?
                        <Button size='sm' variant="primary" style={{ fontSize: '12px' }}>
                            New <Badge variant="light" style={{ fontSize: '12px' }}>{props.badge}</Badge>
                        </Button>
                        :
                        null
                    }
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