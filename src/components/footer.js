import React from "react"
import styled from "styled-components"
import { colors, boxShadow, hoverQuotes } from "../styles/lib"

const FooterBar = styled.footer`
    margin-top: 3em;
    background: ${colors.white};
    height: 32px;
    ${boxShadow};
    border-top: 2px solid ${colors.lightGray};
    p {
        margin: 0;
        text-align: center;
        line-height: 30px;
        font-size: 10px;
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
