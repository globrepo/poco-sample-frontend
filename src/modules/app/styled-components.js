import styled from "styled-components"
import { Link as _Link } from 'react-router-dom';

const Link = styled(_Link)`
    display: block;
    padding: 1rem;
    color: #fff;
    &:visited, &:link {
        color: #fff;
        text-decoration: none;
    }
`

export const ExampleSection = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    max-width: 40rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;
    && > div:first-child {
        margin-bottom: 1rem;
    }
`

export default {Link}
