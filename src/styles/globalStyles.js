import { createGlobalStyle } from 'styled-components'
import { normalize, typography, colors } from "./lib"

const GlobalStyles = createGlobalStyle`
    ${normalize}
    ${typography}
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${colors.snow};
    }
`

export default GlobalStyles
