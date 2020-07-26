import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Form } from 'react-bootstrap'

const TranslateOption = (props) =>
    <FormattedMessage id={props.id}>
        {msg =>
            <option> {msg} </option>
        }
    </FormattedMessage>

export default TranslateOption
