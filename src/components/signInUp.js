import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { signUp, signIn } from "./api/client"
import Form from "../styles/form"
import UserContext from '../context/UserContext'

const SignInUp = ({ type, title }) => {
    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)

    const { setUser, invokeMessage } = useContext(UserContext)

    const onSignUp = (e) => {
        e.preventDefault()
        signUp(username, password)
            .then(() => {
                navigate(`/sign-in`)
                invokeMessage(`successfully signed up. please sign in to continue`)
            })
            .catch(() => {
                setUsername(``)
                setPassword(``)
                invokeMessage(`error signing up, please try again`, `failure`)
            })
    }

    const onSignIn = (e) => {
        e.preventDefault()
        signIn(username, password)
            .then((res) => {
                setUser(res.data.user)
                navigate(`/`)
                invokeMessage(`successfully signed in`)
            })
            .catch(() => {
                setUsername(``)
                setPassword(``)
                invokeMessage(`error signing in, please try again`, `failure`)
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

SignInUp.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default SignInUp
