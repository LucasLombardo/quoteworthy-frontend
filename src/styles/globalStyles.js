import { createGlobalStyle } from 'styled-components'
import { normalize, typography } from "./lib"

const GlobalStyles = createGlobalStyle`
    ${normalize}
    ${typography}
`

export default GlobalStyles
