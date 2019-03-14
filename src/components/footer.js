import React from "react"
import styled from "styled-components"
import { colors, boxShadow, hoverQuotes } from "../styles/lib"

const FooterBar = styled.footer`
    /* position: absolute; */
    margin-top: 3em;
    padding: 0.7em 0 0.8em 0;
    background: ${colors.white};
    ${boxShadow};
    border-top: 2px solid ${colors.lightGray};
    p {
        margin: 0;
        text-align: center;
        /* font-style: italic; */
        font-size: 0.65em;
        color: ${colors.gray};
        letter-spacing: 0.05em;
    }
    a {
        text-decoration: underline;
        ${hoverQuotes};
    }
`

const Footer = () => (
    <FooterBar>
        <p>© {new Date().getFullYear()} Lucas Lombardo - Built with<a href="https://www.gatsbyjs.org">GatsbyJS</a></p>
    </FooterBar>
)

export default Footer
