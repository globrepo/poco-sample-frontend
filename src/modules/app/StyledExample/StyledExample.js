import React from "react"
import {Back, ExampleSection} from "../styled-components"
import Styled from "./styled-components"
import {PillButton} from "@globality/gi-web-components"

function StyledExample () {
    return (
        <div>
            <Back to="/">Back</Back>
            <h2>Styling</h2>
            <ExampleSection>
                <div>
                    Plain <code>&#60;PillButton /&#62;</code> component from <code>gi-web-components</code>
                </div>
                <PillButton>Click me</PillButton>
            </ExampleSection>
            <ExampleSection>
                <div>
                    Styled <code>&#60;PillButton /&#62;</code> component from <code>gi-web-components</code>
                </div>
                <Styled.PillButton>Click me</Styled.PillButton>
            </ExampleSection>
        </div>
    );
}

export default StyledExample
