import React from "react"
import {ExampleSection} from "../styled-components"
import Styled from "./styled-components"
import {
    PillButton,
    CallToActionButton,
    Chip,
    SpeechBubbleButton,
    CircleProgress,
} from "@globality/gi-web-components"

function StyledExample () {
    const label = "Click me"
    return (
        <div>
            <h2>Components & Styling</h2>
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
            <ExampleSection>
                <div>
                    Plain <code>&#60;CallToActionButton /&#62;</code> component from <code>gi-web-components</code>
                </div>
                <CallToActionButton label={label}/>
            </ExampleSection>
            <ExampleSection>
                <div>
                    Plain <code>&#60;SpeechBubbleButton /&#62;</code> component from <code>gi-web-components</code>
                </div>
                <SpeechBubbleButton label={label}/>
            </ExampleSection>
            <ExampleSection>
                <div>
                    Plain <code>&#60;Chip /&#62;</code> component from <code>gi-web-components</code>
                </div>
                <Chip label={label}/>
            </ExampleSection>
            <ExampleSection>
                <div>
                    Plain <code>&#60;CircleProgress /&#62;</code> component from <code>gi-web-components</code>
                </div>
                <CircleProgress value={4} label={label}/>
            </ExampleSection>
        </div>
    );
}

export default StyledExample
