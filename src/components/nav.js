import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../styles/lib"

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

const Nav = ({ user }) => (
    <NavBar>
        <Link to="/">Quoteworthy</Link>

        {user.username && (
            <>
                <Link to="/">Create Quote</Link>
                <Link to="/">Change PW</Link>
                <Link to="/">Sign Out</Link>
            </>
        )}

        {!user.username && (
            <>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/">Sign Up</Link>
            </>
        )}
    </NavBar>
)

Nav.propTypes = {
    user: PropTypes.shape({ username: PropTypes.string.isRequired })
}
Nav.defaultProps = {
    user: { username: `` }
}

export default Nav
