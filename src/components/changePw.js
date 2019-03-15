import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import { changePassword } from "./api/client"
import Form from "../styles/form"
import AppContext from '../context/AppContext'

const ChangePw = () => {
    // create state for controlled inputs
    const [password, setPassword] = useState(``)
    const [newPassword, setNewPassword] = useState(``)

    // get current user to pass token to AJAX api call
    const { user, invokeMessage } = useContext(AppContext)

    const onChangePw = (e) => {
        e.preventDefault()
        changePassword(password, newPassword, user.token)
            // on success, display message and navigate home
            .then(() => {
                navigate(`/`)
                invokeMessage(`password successfully changed`)
            })
            // on failure, display error message and clear forms
            .catch(() => {
                setPassword(``)
                setNewPassword(``)
                invokeMessage(`error changing password, please try again`, `failure`)
            })
    }


    return (
        <Form onSubmit={onChangePw}>
            <div>
                <h1>Change Password</h1>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password"
                    type="password"
                    name="password"
                    required
                />
                <input
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder="new password"
                    type="password"
                    name="newpassword"
                    required
                />
                <input type="submit" value="change pw" />
            </div>
        </Form>
    )
}

export default ChangePw
