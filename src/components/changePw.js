import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import { changePassword } from "./api/client"
import Form from "../styles/form"
import UserContext from '../context/UserContext'

const SignInUp = () => {
    const [password, setPassword] = useState(``)
    const [newPassword, setNewPassword] = useState(``)

    const { user, invokeMessage } = useContext(UserContext)

    const onChangePw = (e) => {
        e.preventDefault()
        changePassword(password, newPassword, user.token)
            .then(() => {
                navigate(`/`)
                invokeMessage(`password successfully changed`)
            })
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
                    type="text"
                    name="password"
                    required
                />
                <input
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder="new password"
                    type="text"
                    name="New Password"
                    required
                />
                <input type="submit" value="change pw" />
            </div>
        </Form>
    )
}

export default SignInUp
