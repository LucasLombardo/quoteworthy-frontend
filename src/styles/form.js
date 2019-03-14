import styled from "styled-components"
import { colors, boxShadow } from "./lib"

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    div {
        margin-top: 2em;
        padding: 2em;
        width: 90%;
        max-width: 400px;

        background-color: ${colors.white};
        ${boxShadow}
    }

    input, textarea {
        display: block;
        margin: 1em 0;
        width: 100%;
        border: 1px solid ${colors.gray};
    }

    textarea {
        height: 120px;
    }

    input[type=submit] {
        background-color: ${colors.lightGray};
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            background-color: ${colors.gray};
        }
    }
`
export default Form
