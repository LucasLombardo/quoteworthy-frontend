import React, { useState } from "react"
import PropTypes from "prop-types"

const defaultState = {
    id: ``,
    email: ``,
    token: ``
}

const UserContext = React.createContext(defaultState)

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(defaultState)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserContext

export { UserProvider }
