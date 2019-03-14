import React, { useState } from "react"
import PropTypes from "prop-types"

const defaultState = {
    id: ``,
    email: ``,
    token: ``,
}

const AppContext = React.createContext(defaultState)

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(defaultState)
    const [message, setMessage] = useState(``)
    const [messageType, setMessageType] = useState(``)

    const invokeMessage = (msg, type = `success`) => {
        setMessage(msg)
        setMessageType(type)
        setTimeout(() => {
            setMessage(``)
        }, 4500)
    }

    return (
        <AppContext.Provider value={{
            user, setUser, message, setMessage, invokeMessage, messageType
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppContext

export { AppProvider }
