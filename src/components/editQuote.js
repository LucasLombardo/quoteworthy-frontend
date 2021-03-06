import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import { updateQuote } from "./api/client"
import Form from "../styles/form"
import AppContext from '../context/AppContext'

// eslint-disable-next-line
const EditQuote = ({ quote }) => {
    const [body, setBody] = useState(quote.body)
    const [attribution, setAttribution] = useState(quote.attribution)

    const user = useContext(AppContext).user || { id: ``, email: ``, token: `` }
    const { invokeMessage } = useContext(AppContext)

    const onEditQuote = (e) => {
        e.preventDefault()
        updateQuote(quote.rails_id, body, attribution, user.token)
            .then(() => setTimeout(() => {
                invokeMessage(`Quote successfully edited`)
                navigate(`/`)
            }, 200))
            .catch(() => {
                invokeMessage(`Error editing quote, please try again.`, `failure`)
                navigate(`/`)
            })
    }

    return (
        <Form onSubmit={onEditQuote}>
            <div>
                <h1>Edit Quote</h1>
                <textarea
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
                    placeholder="author/attribution"
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
