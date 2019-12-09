import React from "react"
import { injectIntl, FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Styled from "./styled-components"
import loc from './locale.yml'; // eslint-disable-line no-unused-vars

function IntlExample ({intl: { formatMessage: fmt }}) {
    return (
        <div>
            <Link to="/">Back</Link>
            <Styled.ExampleSection>
                <p>Using <code>FormattedMessage</code> component</p>
                <i><FormattedMessage id="@loc:basic" /></i>
            </Styled.ExampleSection>
            <Styled.ExampleSection>
                <p>With variables</p>
                <i><FormattedMessage id="@loc:advanced" values={{subject: "multiverse"}} /></i>
            </Styled.ExampleSection>
            <Styled.ExampleSection>
                <p>Using <code>intl.formatMessage</code> function in <code>props</code></p>
                <i>{fmt("@loc:advanced", {subject: "legacy"})}</i>
            </Styled.ExampleSection>
        </div>
    );
}

// injectIntl wrapper is only needed if you'd like to call intl.formatMessage()
export default injectIntl(IntlExample)
