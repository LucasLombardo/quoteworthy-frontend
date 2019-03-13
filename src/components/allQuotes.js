import React from "react"
import styled from "styled-components"
// import { readQuotes } from "./api/client"
import Quote from "./quote"

const QuotesWrapper = styled.div`
    padding-top: 2em;
    text-align: center;
`

// eslint-disable-next-line
const AllQuotes = ({quotes, unmountQuote}) => (
    <QuotesWrapper>
        <h1>All Quotes</h1>
        {quotes.map(quote => (
            <Quote key={quote.id} quoteData={quote} unmountQuote={unmountQuote} />
        ))}
    </QuotesWrapper>
)


export default AllQuotes
