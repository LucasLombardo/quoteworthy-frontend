import { css } from "styled-components"
import { below } from "./breakpoints"
import { colors } from "./colors"

export const typography = css`
    @import url("https://fonts.googleapis.com/css?family=Alegreya|Open+Sans");
    html {
        /* Font Styles */
        font-family: "Open Sans", sans-serif;
        color: ${colors.black};
        h1, h2, h3, h4, h5, h6, strong {
            font-family: "Alegreya", serif;
        }
        input, select, textarea, button {
            font-family: inherit;
        }
        a {
            color: inherit;
            text-decoration: inherit;
        }
        /* Font Sizing */
        font-size: 18px;
        ${below.xl`
            font-size: 16px;
        `}
        ${below.md`
            font-size: 15px;
        `}
        ${below.sm`
            font-size: 14px;
        `}
        ${below.xs`
            font-size: 13px;
        `}
    }
`
