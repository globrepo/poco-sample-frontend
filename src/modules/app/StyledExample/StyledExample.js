import React from "react"
import { Link } from 'react-router-dom';
import Styled from "./styled-components"
import {PillButton} from "@globality/gi-web-components"

function StyledExample () {
    return (
        <div>
            <Link to="/">Back</Link>
            <Styled.ExampleSection>
                <div>
                    Plain <code>PillButton</code> component from <code>gi-web-components</code>
                </div>
                <PillButton>Click me</PillButton>
            </Styled.ExampleSection>
            <Styled.ExampleSection>
                <div>
                    Styled <code>PillButton</code> component from <code>gi-web-components</code>
                </div>
                <Styled.PillButton>Click me</Styled.PillButton>
            </Styled.ExampleSection>
        </div>
    );
}

export default StyledExample
