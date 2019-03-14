import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import ReactLoading from 'react-loading'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { readQuotes } from "../components/api/client"
import Quote from "../components/quote"
import UserContext from '../context/UserContext'

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
    // query to get quotes from api at build time
    const data = useStaticQuery(graphql`
        query STATIC_QUOTES_QUERY {
            allQuotes {
                edges {
                    node {
                        body
                        attribution
                        rails_id
                        owner {
                            owner_id
                            owner_account
                        }
                    }
                }
            }
        }
    `)
    const staticQuotes = data.allQuotes.edges.map(q => q.node).reverse()

    // set initial state of quotes to staticQuotes
    const [quotes, setQuotes] = useState(staticQuotes)
    const [loading, setLoading] = useState(false)

    const { invokeMessage } = useContext(UserContext)

    // once page is mounted, run clientside query to update any changes since build query
    useEffect(() => {
        setLoading(true)
        readQuotes()
            .then((res) => {
                setQuotes(res.data.quotes.reverse())
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                invokeMessage(`Error refreshing quotes, check your internet connection`)
            })
    }, [])

    // function to remove quote from dom upon successful db deletion
    const unmountQuote = (quoteId) => {
        setQuotes(quotes.filter(quote => quote.rails_id !== quoteId))
    }

    return (
        <Layout>
            <QuotesWrapper>
                {loading && (
                    <ReactLoading
                        className="loader"
                        delay={500}
                        type="spin"
                        color="#333"
                        height="40px"
                        width="40px"
                    />
                )}
                <h1>All Quotes</h1>
                {quotes.map(quote => (
                    <Quote key={quote.rails_id} quoteData={quote} unmountQuote={unmountQuote} />
                ))}
            </QuotesWrapper>
        </Layout>
    )
}

export default IndexPage
