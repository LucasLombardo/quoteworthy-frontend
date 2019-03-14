import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { colors, boxShadow, hoverQuotes, below } from "../styles/lib"
import { signOut } from "./api/client"
import AppContext from '../context/AppContext'

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    z-index: 10;

    display: flex;
    width: 100%;
    height: 55px;
    padding: 0 5%;

    background-color: ${colors.white};
    font-family: "Alegreya", serif;
    line-height: 55px;
    ${boxShadow}

    a, button {
        margin: 0 1em;
        background: none;
        border: none;
        cursor: pointer;

        &:last-of-type {
            margin-right: 0;
        }

        ${hoverQuotes}
    }

    .brand {
        margin: 0 auto 0 0;
        font-size: 1.3em;
        font-weight: bold;
    }

    ${below.sm`
        .change-pw {
            display: none;
        }
        .brand {
            font-size: 1.2em;
        }
        a, button {
            margin: 0 0.2em;
        }
    `}
`

const Nav = () => {
    const { setUser, invokeMessage } = useContext(AppContext)
    const user = useContext(AppContext).user || { id: ``, email: ``, token: `` }

    const signOutSuccess = () => {
        setUser({ id: ``, email: ``, token: `` })
        navigate(`/`)
        invokeMessage(`successfully signed out`)
    }

    const onSignOut = (e) => {
        // sign a user out and navigate to home if they click the button
        // even if api call fails, clear user and display success message
        e.target.blur()
        signOut(user.token)
            .then(signOutSuccess)
            .catch(signOutSuccess)
    }

    return (
        <NavBar>
            <Link to="/" className="brand">Quoteworthy</Link>

            {user.email && (
            <>
                <Link to="/new-quote">Create Quote</Link>
                <Link className="change-pw" to="/change-pw">Change Password</Link>
                <button type="button" onClick={onSignOut}>Sign Out</button>
            </>
            )}

            {!user.email && (
            <>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
            </>
            )}
        </NavBar>
    )
}

export default Nav
