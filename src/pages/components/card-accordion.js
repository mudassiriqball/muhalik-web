import { Accordion, Card, Button, Badge, Row, Form } from 'react-bootstrap';
import GlobalStyleSheet from '../../styleSheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

const CardAccordion = props => (
    <>
        <Accordion as={Row} defaultActiveKey="0" style={{ margin: '2%' }} noGutters >
            <Card style={styles.card}>
                <Accordion.Toggle as={Card.Header} eventKey="0" className='card_toggle'>
                    {props.notification ?
                        <>
                            <Form.Label className='p-0 m-0'>{props.title}</Form.Label>
                            <Button size='sm' variant="light" className='pl-1 pb-0 pt-0 pr-0 mr-auto mb-0 mt-0 ml-2' style={{ fontSize: '11px' }}>
                                New <Badge variant="light" style={{ fontSize: '11px' }}>{props.badge}</Badge>
                            </Button>
                        </>
                        :
                        <Form.Label className='p-0 mb-0 ml-0 mr-auto'>{props.title}</Form.Label>
                    }
                    <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.slider_fontawesome} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {props.children}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <style type="text/css">{`
            .card_toggle{
                background: #595c73;
                font-size: 13px;
                color: white;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
            }
            .card_toggle:hover{
                background: #4e5065;
            }
        `}</style>
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
        color: 'white',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}
export default CardAccordion;