import React from "react"
import PropTypes from "prop-types"
import { AppProvider } from "./src/context/AppContext"


export const wrapRootElement = ({ element }) => (
    <AppProvider>{element}</AppProvider>
)

wrapRootElement.propTypes = {
    element: PropTypes.node.isRequired,
}
