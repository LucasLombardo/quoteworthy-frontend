import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../styles/lib"
import { signOut } from "./api/client"
import UserContext from '../context/UserContext'

const NavBar = styled.nav`
    position: fixed;
    top: 0;

    display: flex;
    width: 100%;
    padding: 1em;

    box-shadow: 0 6px 22px -4px rgba(0,0,0,0.11);
    background-color: ${colors.white};
    font-family: "Alegreya", serif;
    font-size: 1.3em;

    a {
        margin: 0 1em;

        &:first-of-type {
            margin-right: auto;
        }
    }
`

const Nav = () => {
    // eslint-disable-next-line
    const { setUser } = useContext(UserContext)
    const user = useContext(UserContext).user || { id: ``, email: ``, token: `` }

    const onSignOut = () => {
        console.log(user.token)
        signOut(user.token)
            .then(() => {
                console.log(`success`)
                setUser({ id: ``, email: ``, token: `` })
            })
    }

    return (
        <NavBar>
            <Link to="/">Quoteworthy</Link>

            {user.email && (
            <>
                <Link to="/">Create Quote</Link>
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
