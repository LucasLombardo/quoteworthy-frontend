import React from "react"
import PropTypes from "prop-types"
import Form from "../styles/form"

const AuthForm = ({ type, title }) => (
    <Form>
        <div>
            <h1>{title}</h1>
            <input type="email" />
            <input type="password" />
            <input type="submit" value={type} />
        </div>
    </Form>
)

AuthForm.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default AuthForm
