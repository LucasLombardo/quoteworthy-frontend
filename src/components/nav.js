import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../styles/lib"
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
    const { user } = useContext(UserContext)

    return (
        <NavBar>
            <Link to="/">Quoteworthy</Link>

            {user.email && (
            <>
                <Link to="/">Create Quote</Link>
                <Link to="/">Change PW</Link>
                <Link to="/">Sign Out</Link>
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
