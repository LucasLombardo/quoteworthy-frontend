import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { readQuotes } from "./api/client"
import Quote from "./quote"

const QuotesWrapper = styled.div`
    padding-top: 2em;
    text-align: center;
`

const AllQuotes = () => {
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
        <QuotesWrapper>
            <h1>All Quotes</h1>
            {quotes.map(quote => (
                <Quote
                    key={quote.id}
                    quoteId={quote.id}
                    text={quote.body}
                    attribution={quote.attribution}
                    unmountQuote={unmountQuote}
                />
            ))}
        </QuotesWrapper>
    )
}

export default AllQuotes