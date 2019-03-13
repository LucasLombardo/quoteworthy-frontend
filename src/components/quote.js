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

    .posted-by {
        font-size: 0.8em;
        opacity: 0.6;
    }
`

// eslint-disable-next-line
const Quote = ({ quoteData, unmountQuote }) => {

    // eslint-disable-next-line
    const { id, body, attribution, owner } = quoteData

    const user = useContext(UserContext).user || { id: ``, email: ``, token: `` }

    // check if user has permission to edit/delete quote
    const hasPermission = user.id === owner.owner_id

    const onDelete = () => {
        destroyQuote(id, user.token)
        unmountQuote(id)
    }

    return (
        <QuoteBox>
            <>
                <div>&quot;{body}&quot;</div>
                <div>
                    {hasPermission && <button type="button" onClick={onDelete}>delete</button>}
                </div>
                <div>
                    {hasPermission ? (
                        <Link
                            to="/edit-quote"
                            state={{ id, body, attribution }}
                        >
                            edit
                        </Link>
                    ) : (
                        <p className="posted-by">posted by {owner.owner_account}</p>
                    )}
                </div>
                <div><em>- {attribution}</em></div>
            </>
        </QuoteBox>
    )
}

export default Quote
