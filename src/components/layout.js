import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../styles/globalStyles"
import Nav from "./nav"
import Message from "./message"
import Footer from "./footer"

const LayoutWrapper = styled.main`
    min-width: 250px;
    overflow: none;
    main {
        padding-top: 55px;
        padding-bottom: 3.5em;
        min-height: calc(100vh - 55px - 20px);
    }
`

const Layout = ({ children }) => (
    <LayoutWrapper>
        <GlobalStyles />
        <header>
            <Nav />
            <Message />
        </header>
        <main style={{ paddingTop: `55px` }}>{children}</main>
        <Footer />
    </LayoutWrapper>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
