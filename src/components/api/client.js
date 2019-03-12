import axios from "axios"
/* eslint no-undef: 0 */
// set base urls
const production = `https://quoteworthy-backend.herokuapp.com`

const development = `http://localhost:4741`

let url
if (typeof window !== `undefined`) {
    url = (window.location.hostname === `localhost`) ? development : production
}

// Authentication
const signUp = (username, password) => {
    const credentials = {
        credentials: {
            email: username,
            password_confirmation: password,
            password
        }
    }
    return axios.post(`${url}/sign-up`, credentials)
}

const signIn = (username, password) => {
    const credentials = {
        credentials: {
            email: username,
            password
        }
    }
    return axios.post(`${url}/sign-in`, credentials)
}

const signOut = token => axios({
    url: `${url}/sign-out`,
    method: `delete`,
    headers: {
        Authorization: `Token token=${token}`
    }
})

const changePassword = (pass, newPass, token) => axios({
    url: `${url}/change-password`,
    method: `patch`,
    data: {
        passwords: {
            old: pass,
            new: newPass
        }
    },
    headers: {
        Authorization: `Token token=${token}`
    }
})

// Quotes CRUD
const createQuote = (text, attribution, token) => axios({
    url: `${url}/quotes`,
    method: `post`,
    data: {
        quote: {
            text,
            attribution,
        }
    },
    headers: {
        Authorization: `Token token=${token}`
    }
})

const readQuotes = () => axios.get(`${url}/quotes`)

const readQuote = () => axios.get(`${url}/quotes/${id}`)

const updateQuote = (id, text, attribution, token) => axios({
    url: `${url}/quotes/${id}`,
    method: `patch`,
    data: {
        quote: {
            text,
            attribution,
        }
    },
    headers: {
        Authorization: `Token token=${token}`
    }
})

const destroyQuote = (id, token) => axios({
    url: `${url}/quotes/${id}`,
    method: `delete`,
    headers: {
        Authorization: `Token token=${token}`
    }
})

export {
    signUp, signIn, signOut, changePassword, createQuote,
    readQuote, readQuotes, updateQuote, destroyQuote
}
