import styled from "styled-components"
import { colors } from "./lib"

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    div {
        margin-top: 2em;
        padding: 2em;

        background-color: ${colors.white};
        box-shadow: 0 6px 22px -4px rgba(0,0,0,0.11);
    }
    input {
        display: block;
        margin: 1em 0;
        width: 100%;
    }
`
export default Form
