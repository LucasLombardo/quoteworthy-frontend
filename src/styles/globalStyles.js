import { createGlobalStyle } from 'styled-components'
import { normalize, typography } from "./lib"

const GlobalStyles = createGlobalStyle`
    ${normalize}
    ${typography}
    * {
        box-sizing: border-box;
    }
    body {
        background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://imagizer.imageshack.com/img923/6425/1MzedQ.png");
    }
`

export default GlobalStyles
