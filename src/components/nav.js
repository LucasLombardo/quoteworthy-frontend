import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { colors } from "../styles/lib"
import { signOut } from "./api/client"
import UserContext from '../context/UserContext'

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    z-index: 10;

    display: flex;
    width: 100%;
    height: 55px;
    padding: 0 5%;

    box-shadow: 0 6px 22px -4px rgba(0,0,0,0.11);
    background-color: ${colors.white};
    font-family: "Alegreya", serif;
    line-height: 55px;

    a, button {
        margin: 0 1em;
        background: none;
        border: none;
        cursor: pointer;
        transition: 0.3s;

        &:last-of-type {
            margin-right: 0;
        }

        &:hover {
            opacity: 0.7;
        }

    }

    .brand {
        margin: 0 auto 0 0;
        font-size: 1.3em;
        font-weight: bold;
    }
`

const Nav = () => {
    const { setUser, invokeMessage } = useContext(UserContext)
    const user = useContext(UserContext).user || { id: ``, email: ``, token: `` }

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
                <Link to="/change-pw">Change PW</Link>
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
