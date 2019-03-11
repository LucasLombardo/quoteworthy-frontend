import React, { useState, useContext } from "react"
import { changePassword } from "./api/client"
import Form from "../styles/form"
import UserContext from '../context/UserContext'

const SignInUp = () => {
    const [password, setPassword] = useState(``)
    const [newPassword, setNewPassword] = useState(``)

    const { user } = useContext(UserContext)

    const onChangePw = (e) => {
        e.preventDefault()
        console.log(`pass ${password} new ${newPassword} token ${user.token}`)
        changePassword(password, newPassword, user.token)
            .then((res) => {
                console.log(res)
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
