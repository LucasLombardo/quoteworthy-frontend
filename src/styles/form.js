import styled from "styled-components"
import { colors, boxShadow } from "./lib"

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding: 2em 0 5em 0;

    div {
        margin-top: 2em;
        padding: 2em;
        width: 90%;
        max-width: 400px;

        background-color: ${colors.white};
        ${boxShadow}
    }

    input, textarea {
        padding: 0.5em;
        display: block;
        margin: 1em 0;
        width: 100%;
        border: 2px solid ${colors.lightGray};
    }

    textarea {
        height: 120px;
    }

    input[type=submit] {
        background-color: ${colors.lightGray};
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            border: 2px solid ${colors.gray};
        }
    }
`
export default Form
