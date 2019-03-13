import React, { useContext } from "react"
import styled from "styled-components"
import UserContext from "../context/UserContext"
import { colors } from "../styles/lib"

const MessageBox = styled.div`
    position: fixed;
    z-index: 9;
    top: 55px;
    left: 15%;

    width: 70%;
    border-radius: 0 0 5px 5px;

    background: ${colors.red};
    transition: 0.3s;
    transform: translateY(-105%);
    opacity: 0;

    p {
        margin: 0;
        padding: 0.5em;

        text-align: center;
    }
    button {
        position: absolute;
        top: 0;
        right: 0;

        border: 0;
        background: none;
        &:focus {
            outline: 0;
        }
    }

    &.active {
        transform: translateY(0);
        opacity: 1;
    }
    &.success {
        background: ${colors.green};
    }
`

const Message = () => {
    const { message, setMessage, messageType } = useContext(UserContext)

    const closeMessage = () => {
        setMessage(``)
    }

    return (
        <MessageBox className={message ? `active ${messageType}` : ``}>
            <p>{message}</p>
            <button type="button" onClick={closeMessage}>x</button>
        </MessageBox>
    )
}

export default Message
