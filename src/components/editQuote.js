import React, { useState } from "react"
import { updateQuote } from "./api/client"
import Form from "../styles/form"
// import UserContext from '../context/UserContext'

// eslint-disable-next-line
const SignInUp = ({ quoteId, currBody, currAttribution }) => {
    const [body, setBody] = useState(currBody)
    const [attribution, setAttribution] = useState(currAttribution)

    const onEditQuote = (e) => {
        e.preventDefault()
        updateQuote(quoteId, body, attribution, ``)
            .then(console.log(`worked`))
    }

    return (
        <Form onSubmit={onEditQuote}>
            <div>
                <h1>Edit Quote</h1>
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
                <input type="submit" value="edit quote" />
            </div>
        </Form>
    )
}

export default SignInUp
