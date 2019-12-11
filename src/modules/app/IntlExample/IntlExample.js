import React from "react"
import { injectIntl, FormattedMessage } from 'react-intl';
import * as Styled from "../styled-components"
import loc from './locale.yml'; // eslint-disable-line no-unused-vars

function IntlExample ({intl: { formatMessage: fmt }}) {
    return (
        <div>
            <Styled.Back to="/">Back</Styled.Back>
            <h2>Localization</h2>
            <Styled.ExampleSection>
                <div>Using <code>&#60;FormattedMessage /&#62;</code> component</div>
                <i><FormattedMessage id="@loc:basic" /></i>
            </Styled.ExampleSection>
            <Styled.ExampleSection>
                <div>With variables</div>
                <i><FormattedMessage id="@loc:advanced" values={{subject: "multiverse"}} /></i>
            </Styled.ExampleSection>
            <Styled.ExampleSection>
                <div>Using <code>intl.formatMessage</code> function in <code>props</code></div>
                <i>{fmt("@loc:advanced", {subject: "legacy"})}</i>
            </Styled.ExampleSection>
        </div>
    );
}

// injectIntl wrapper is only needed if you'd like to call intl.formatMessage()
export default injectIntl(IntlExample)
