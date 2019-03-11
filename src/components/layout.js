import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../styles/globalStyles"
import Nav from "./nav"

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <header><Nav /></header>
        <main>{children}</main>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
