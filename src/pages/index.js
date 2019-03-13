import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { readQuotes } from "../components/api/client"
import Quote from "../components/quote"

const QuotesWrapper = styled.div`
    padding-top: 2em;
    text-align: center;
`

const IndexPage = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        readQuotes()
            .then((res) => {
                setQuotes(res.data.quotes.reverse())
            })
    }, [])

    const unmountQuote = (quoteId) => {
        setQuotes(quotes.filter(quote => quote.id !== quoteId))
    }

    return (
        <Layout>
            <QuotesWrapper>
                <h1>All Quotes</h1>
                {quotes.map(quote => (
                    <Quote key={quote.id} quoteData={quote} unmountQuote={unmountQuote} />
                ))}
            </QuotesWrapper>
        </Layout>
    )
}

export default IndexPage
