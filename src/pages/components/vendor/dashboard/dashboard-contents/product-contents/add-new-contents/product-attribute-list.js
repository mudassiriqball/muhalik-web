import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ProductAttributeList extends Component {
    state = {}
    render() {
        return (
            <Form.Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                    <Select
                        closeMenuOnSelect={true}
                        onChange={this.handleProductAttributesChange}
                        value={this.props.name}
                        placeholder="Select Attribute"
                        options={props.options}
                    />
                </Col>
                <Form.Group as={Col} lg={6} md={6} sm={12} xs={12}>
                    <Form.Control
                        type="text"
                        placeholder="Enter Product Handling Fee"
                        name="handling_fee"
                        value={props.value}
                    // onChange={handleChange}
                    />
                </Form.Group>

                {/* <Col lg={2} md={2} sm={3} xs={12}>
                    <Button onClick={props.delete}>Delete</Button>
                </Col> */}
            </Form.Row>
        );
    }
}

export default ProductAttributeList;