import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
    <>
        <header>Quoteworthy</header>
        <main>{children}</main>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
