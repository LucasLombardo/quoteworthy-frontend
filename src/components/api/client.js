import axios from "axios"

// BASE URLS
const production = `https://quoteworthy-backend.herokuapp.com`

const development = `http://localhost:4741`

// check for window first to avoid buildtime errors when run in node
let url
if (typeof window !== `undefined`) {
    // eslint-disable-next-line no-undef
    url = (window.location.hostname === `localhost`) ? development : production
}

// AUTHENTICATION
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

// QUOTES CRUD
const createQuote = (text, attribution, token) => axios({
    url: `${url}/quotes`,
    method: `post`,
    data: {
        quote: {
            body: text,
            attribution,
        }
    },
    headers: {
        Authorization: `Token token=${token}`
    }
})

const readQuotes = () => axios.get(`${url}/quotes`)

const readQuote = id => axios.get(`${url}/quotes/${id}`)

const updateQuote = (id, text, attribution, token) => axios({
    url: `${url}/quotes/${id}`,
    method: `patch`,
    data: {
        quote: {
            body: text,
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
