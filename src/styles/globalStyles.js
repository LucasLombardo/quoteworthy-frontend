import { createGlobalStyle } from 'styled-components'
import { normalize } from "./lib"

const GlobalStyles = createGlobalStyle`
    ${normalize}
`

export default GlobalStyles
