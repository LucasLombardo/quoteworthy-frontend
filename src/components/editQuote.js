import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import { updateQuote } from "./api/client"
import Form from "../styles/form"
import UserContext from '../context/UserContext'

// eslint-disable-next-line
const EditQuote = ({ quote }) => {
    const [body, setBody] = useState(quote.body)
    const [attribution, setAttribution] = useState(quote.attribution)

    const user = useContext(UserContext).user || { id: ``, email: ``, token: `` }

    const onEditQuote = (e) => {
        e.preventDefault()
        updateQuote(quote.id, body, attribution, user.token)
            .then(setTimeout(() => {
                navigate(`/`)
            }, 200))
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

export default EditQuote
