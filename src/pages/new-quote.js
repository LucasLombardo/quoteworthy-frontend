import React, { useContext, useState } from "react"
import { navigate } from "gatsby"
import UserContext from '../context/UserContext'
import { createQuote } from "../components/api/client"
import Layout from "../components/layout"
import Form from "../styles/form"

const NewQuotePage = () => {
    const [body, setBody] = useState(``)
    const [attribution, setAttribution] = useState(``)

    const user = useContext(UserContext).user || { id: ``, email: ``, token: `` }
    const { invokeMessage } = useContext(UserContext)

    const onNewQuote = (e) => {
        e.preventDefault()
        createQuote(body, attribution, user.token)
            .then(() => setTimeout(() => {
                navigate(`/`)
                invokeMessage(`Successfully created quote`)
            }, 200))
            .catch(() => {
                navigate(`/`)
                invokeMessage(`Error creating quote, please try again.`, `failure`)
            })
    }

    return (
        <Layout>
            <Form onSubmit={onNewQuote}>
                <div>
                    <h1>Create Quote</h1>
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
                        placeholder="attribution"
                        type="text"
                        name="attribution"
                        required
                    />
                    <input type="submit" value="create quote" />
                </div>
            </Form>
        </Layout>
    )
}

export default NewQuotePage
