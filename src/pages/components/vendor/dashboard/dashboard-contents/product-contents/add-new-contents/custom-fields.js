
import { Accordion, Form, InputGroup, Col, Button, Row, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import GlobalStyleSheet from '../../../../../../../styleSheet';


const CustomFields = props => {
    return (
        <Accordion style={{ width: '100%' }} defaultActiveKey="0">
            <Card style={styles.card}>
                <Card.Header style={styles.card_header}>
                    <Form.Label >Custome Fields</Form.Label>
                    <Accordion.Toggle as={Button} size="sm" eventKey="0" style={{ float: 'right', background: 'none' }}>
                        <FontAwesomeIcon size="xs" icon={faSlidersH} style={styles.variations_fontawesome} />
                    </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                    <Card.Body >
                        <div style={{ background: 'lightGray', margin: '0.5% 1%' }}>
                            {props.customFieldsArray && props.customFieldsArray.map((data, index) =>
                                <Form.Row style={{ padding: '1% 2%' }} key={index}>
                                    <Form.Group as={Col} lg={5} md={5} sm={12} xs={12}>
                                        <Form.Control
                                            as="select"
                                            size="sm"
                                            value={data.fieldName}
                                            onChange={() => data.customFieldName}
                                        >
                                            <option>Aaaa</option>
                                            <option>Bbb</option>
                                            <option>Ccc</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={7} md={7} sm={12} xs={12}>
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                size="sm"
                                                placeholder="Enter Value"
                                                name="sku"
                                                value={data.customFieldValue}
                                                onChange={() => data.fieldValue}
                                            />
                                            <Button variant="outline-primary" size="sm" style={{ marginLeft: '1%' }}
                                                onClick={() => props.delete(index)}> delete</Button>
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                            )}
                        </div>
                        <Form.Row style={{ margin: '0.5% 1%', padding: '1% 2%', background: 'lightGray' }}>
                            <Form.Group as={Col} lg={5} md={5} sm={12} xs={12}>
                                <Form.Label style={styles.label}>Field Name</Form.Label>
                                <Form.Control
                                    as="select"
                                    size="sm"
                                    value={props.name}
                                    onChange={props.fieldNameHandler}
                                >
                                    <option>Select</option>
                                    <option>Aaaa</option>
                                    <option>Bbb</option>
                                    <option>Ccc</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} lg={7} md={7} sm={12} xs={12}>
                                <Form.Label style={styles.label}>Field Value </Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        placeholder="Enter Value"
                                        name="sku"
                                        value={props.value}
                                        onChange={props.fieldValueHandler}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Label style={styles.label}>
                                <span>For Multiple Values add | between values</span>
                                <span style={{ color: 'red' }}>
                                    {props.error}</span>
                            </Form.Label>
                            <Button variant="outline-primary" size="sm" block style={{ margin: '2% 0px' }}
                                onClick={props.addFieldHandler}>Add Field</Button>
                        </Form.Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

const styles = {
    row: {
        margin: '2%',
        padding: '0%'
    },
    card: {
        width: '100%'
    },
    card_header: {
        width: '100%',
        alignItems: 'center',
        // color: '#6A7074',
        fontSize: '15px',
        background: 'lightgray'
    },
    label: {
        fontSize: '13px',
    },
    variations_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        marginRight: '10%',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}
export default CustomFields;