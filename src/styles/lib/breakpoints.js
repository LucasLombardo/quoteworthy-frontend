// Creates a media queries inline in styled components with the given
// breakpoint. Adapted from Scott Tolinski's styled components course.

import { css } from 'styled-components'

const size = {
    xs: 320,
    sm: 570,
    md: 768,
    lg: 960,
    xl: 1224
}

export const above = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${size[label]}px) {
            ${css(...args)}
        }
    `
    return acc
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${size[label]}px) {
            ${css(...args)}
        }
    `
    return acc
}, {})
