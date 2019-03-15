import { css } from "styled-components"

export const boxShadow = css`
    box-shadow: 0 6px 22px -4px rgba(0,0,0,0.2);
`

export const hoverQuotes = css`
    &::before, &::after {
        content: '"';
        opacity: 0;
        transition: 0.2s;
    }
    &:hover {
        &::before, &::after {
            opacity: 1;
        }
    }

`
