import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors, boxShadow, hoverQuotes } from "../styles/lib"
import { destroyQuote } from "./api/client"
import AppContext from '../context/AppContext'

const QuoteBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    margin: 2em auto 0 auto;
    max-width: 600px;

    background: ${colors.white};
    ${boxShadow};

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

    button, a {
        background: none;
        padding: 0.4em;
        border: 2px solid ${colors.lightGray};
        display: block;
        margin: 0 auto;
        width: 90px;
        cursor: pointer;
        ${hoverQuotes}
    }

    .attribution {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:before {
        position: absolute;

        margin-top: -0.47em;
        transform: rotate(45deg);

        content: "|";
        font-size: 3em;
        color: ${colors.black};
        opacity: 0.2;
    }

    &:after {
        position: absolute;
        bottom: 0;
        right: 0;

        margin: 0 -0.2em -0.3em 0;
        transform: rotate(45deg);

        content: "|";
        font-size: 3em;
        color: ${colors.black};
        opacity: 0.2;
    }
`

// eslint-disable-next-line
const Quote = ({ quoteData, unmountQuote }) => {

    // eslint-disable-next-line
    const { rails_id, body, attribution, owner } = quoteData

    const user = useContext(AppContext).user || { id: ``, email: ``, token: `` }
    const { invokeMessage } = useContext(AppContext)

    // check if user has permission to edit/delete quote
    const hasPermission = user.id === owner.owner_id

    const onDelete = () => {
        destroyQuote(rails_id, user.token)
            .then(() => {
                invokeMessage(`Quote successfully deleted.`)
            })
            .catch(() => {
                invokeMessage(`Error deleting quote, please try again.`, `failure`)
            })
        unmountQuote(rails_id)
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
                            state={{ rails_id, body, attribution }}
                        >
                            edit
                        </Link>
                    ) : (
                        <p className="posted-by">posted by {owner.owner_account}</p>
                    )}
                </div>
                <div className="attribution"><em>- {attribution}</em></div>
            </>
        </QuoteBox>
    )
}

export default Quote
