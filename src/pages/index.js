import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import AllQuotes from "../components/allQuotes"
import { readQuotes } from "../components/api/client"

const IndexPage = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        readQuotes()
            .then((res) => {
                setQuotes(res.data.quotes)
            })
    }, [])

    const unmountQuote = (quoteId) => {
        setQuotes(quotes.filter(quote => quote.id !== quoteId))
    }

    return (
        <Layout>
            <AllQuotes unmountQuote={unmountQuote} quotes={quotes} />
        </Layout>
    )
}

export default IndexPage
