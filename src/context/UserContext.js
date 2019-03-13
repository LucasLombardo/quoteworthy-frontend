import React, { useState } from "react"
import PropTypes from "prop-types"

const defaultState = {
    id: ``,
    email: ``,
    token: ``,
}

const UserContext = React.createContext(defaultState)

const UserProvider = ({ children }) => {
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
        <UserContext.Provider value={{
            user, setUser, message, setMessage, invokeMessage, messageType
        }}
        >
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserContext

export { UserProvider }
