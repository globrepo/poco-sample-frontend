import React from "react"
import {ExampleSection} from "../styled-components"

function TestExample () {
    return (
        <div>
            <h2>Testing</h2>
            <ExampleSection>
                <div>Using snapshots</div>
                <code>expect(shallow(&#60;Component /&#62;)).toMatchSnapshot()</code>
            </ExampleSection>
            <ExampleSection>
                <div>Updating snapshots</div>
                <code>yarn test -u</code>
            </ExampleSection>
        </div>
    );
}

export default TestExample
