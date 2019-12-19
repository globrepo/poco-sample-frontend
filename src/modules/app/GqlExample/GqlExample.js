import React from "react"
import { injectIntl, FormattedMessage } from 'react-intl';
import * as Styled from "../styled-components"
import loc from './locale.yml'; // eslint-disable-line no-unused-vars

function GqlExample () {
    return (
        <div>
            <h2>GrpahQL example usage</h2>
        </div>
    );
}

// injectIntl wrapper is only needed if you'd like to call intl.formatMessage()
export default injectIntl(GqlExample)
