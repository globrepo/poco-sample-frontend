import styled from "styled-components"
import { Link as _Link } from 'react-router-dom';

const Link = styled(_Link)`
    display: block;
    padding: 1rem;
    margin-bottom: 1rem;
    max-width: 40rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #333;
    &:hover {
        border-color: #999;
    }
    &:visited, &:link {
        color: #333;
        text-decoration: none;
    }
`

export const Back = styled(_Link)`
    display: block;
    padding: 1rem 0;
    font-size: 1.2em;
    &:link, &:visited {
        text-decoration: none;
        color: #333;
    }
`

export default {Link}
