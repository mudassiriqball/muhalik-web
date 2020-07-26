import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Form } from 'react-bootstrap'

const TranslateAlert = (id) =>
    <FormattedMessage id={id}>
        {msg => {
            alert(msg)
        }
        }
    </FormattedMessage>

export default TranslateAlert
