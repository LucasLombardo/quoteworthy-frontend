import axios from "axios"

// set base urls
const production = `https://quoteworthy-backend.herokuapp.com`
const development = `http://localhost:4741`
// eslint-disable-next-line
const url = (window.location.hostname === `localhost`) ? development : production

// auth
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

export { signUp, signIn }
