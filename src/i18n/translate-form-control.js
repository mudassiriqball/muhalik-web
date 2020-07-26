import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Form } from 'react-bootstrap'

const TranslateFormControl = (props) =>
    <FormattedMessage id={props.id}>
        {msg =>
            <Form.Control
                style={props.style}
                as={props.as}
                size={props.size}
                type={props.type}
                placeholder={msg}
                name={props.name}
                value={props.value}
                onKeyPress={props.onKeyPress}
                onChange={props.onChange}
                isInvalid={props.isInvalid}
                disabled={props.disabled}
            />
        }
    </FormattedMessage>

export default TranslateFormControl
