import React, { useState } from "react"
import { createQuote } from "./api/client"
import Form from "../styles/form"
// import UserContext from '../context/UserContext'

const SignInUp = () => {
    const [body, setBody] = useState(``)
    const [attribution, setAttribution] = useState(``)

    const onNewQuote = (e) => {
        e.preventDefault()
        createQuote(body, attribution, ``)
            .then(console.log(`worked`))
    }

    return (
        <Form onSubmit={onNewQuote}>
            <div>
                <h1>Create Quote</h1>
                <input
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="quote body"
                    type="text"
                    name="body"
                    required
                />
                <input
                    value={attribution}
                    onChange={e => setAttribution(e.target.value)}
                    placeholder="attribution"
                    type="text"
                    name="attribution"
                    required
                />
                <input type="submit" value="create quote" />
            </div>
        </Form>
    )
}

export default SignInUp
