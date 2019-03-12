import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../styles/lib"
import { destroyQuote } from "./api/client"
import UserContext from '../context/UserContext'

const QuoteBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 2em auto 0 auto;
    max-width: 600px;

    background: ${colors.white};
    box-shadow: 0 6px 22px -4px rgba(0,0,0,0.11);

    div {
        padding: 1em;
        text-align: center;

        &:first-of-type {
            grid-column: 1/4;
            padding: 2em;
        }
    }
`

// eslint-disable-next-line
const Quote = ({ text, attribution, quoteId, unmountQuote }) => {
    const hasPermission = true

    const user = useContext(UserContext).user || { id: ``, email: ``, token: `` }

    const onDelete = () => {
        destroyQuote(quoteId, user.token)
        unmountQuote(quoteId)
    }

    return (
        <QuoteBox>
            <>
                <div>{text}</div>
                <div>
                    {hasPermission && <button type="button" onClick={onDelete}>delete</button>}
                </div>
                <div>
                    {hasPermission && (
                        <Link
                            to="/edit-quote"
                            state={{ quoteId, text, attribution }}
                        >
                            edit
                        </Link>
                    )}
                </div>
                <div>{attribution}</div>
            </>
        </QuoteBox>
    )
}

export default Quote
