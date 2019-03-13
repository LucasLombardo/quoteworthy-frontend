import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../styles/globalStyles"
import Nav from "./nav"
import Message from "./message"

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <header>
            <Nav />
            <Message />
        </header>
        <main style={{ paddingTop: `60px` }}>{children}</main>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
