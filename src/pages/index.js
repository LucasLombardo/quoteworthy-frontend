import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ReactLoading from 'react-loading'
import Layout from "../components/layout"
import { readQuotes } from "../components/api/client"
import Quote from "../components/quote"

const QuotesWrapper = styled.div`
    padding-top: 2em;
    text-align: center;
    .loader {
        position: fixed;
        left: calc(50% - 20px);
        top: 10%;
        width: 40px;
    }
`

const IndexPage = () => {
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        readQuotes()
            .then((res) => {
                setQuotes(res.data.quotes.reverse())
                setLoading(false)
            })
    }, [])

    const unmountQuote = (quoteId) => {
        setQuotes(quotes.filter(quote => quote.id !== quoteId))
    }

    return (
        <Layout>
            <QuotesWrapper>
                {loading && <ReactLoading className="loader" delay="500" type="spin" color="#333" height="40px" width="40px" />}
                <h1>All Quotes</h1>
                {quotes.map(quote => (
                    <Quote key={quote.id} quoteData={quote} unmountQuote={unmountQuote} />
                ))}
            </QuotesWrapper>
        </Layout>
    )
}

export default IndexPage
