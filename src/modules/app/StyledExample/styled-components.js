import styled from "styled-components"
import {PillButton as _PillButton} from "@globality/gi-web-components"

const ExampleSection = styled.div`
    padding: 2rem;
    font-size: 1.2rem;
    && > div:first-child {
        margin-bottom: 1rem;
    }
`

const PillButton = styled(_PillButton)`
    &&& {
        font-weight: bold;
        font-style: italic;
        color: magenta;
    }
`

export default {
    ExampleSection,
    PillButton
}
