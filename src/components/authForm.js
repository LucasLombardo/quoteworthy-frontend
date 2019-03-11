import React, { useState } from "react"
import PropTypes from "prop-types"
import { signUp, signIn } from "./api/client"
import Form from "../styles/form"

const AuthForm = ({ type, title }) => {
    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)

    const onSignUp = (e) => {
        e.preventDefault()
        signUp(username, password)
            .then(res => console.log(res))
    }

    const onSignIn = (e) => {
        e.preventDefault()
        signIn(username, password)
            .then((res) => {
                // eslint-disable-next-line
                window.localStorage.setItem(`userToken`, res.data.user.token)
                // access with window.localStorage.getItem('userToken');
            })
    }

    return (
        <Form onSubmit={type === `sign in` ? onSignIn : onSignUp}>
            <div>
                <h1>{title}</h1>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="username"
                    type="text"
                    name="username"
                    required
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password"
                    type="text"
                    name="password"
                    required
                />
                <input type="submit" value={type} />
            </div>
        </Form>
    )
}

AuthForm.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default AuthForm
