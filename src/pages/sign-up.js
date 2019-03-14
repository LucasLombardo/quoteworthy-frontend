import React from "react"
import Layout from "../components/layout"
import SignInUp from "../components/signInUp"
import SEO from "../components/seo"

const SignUpPage = () => (
    <Layout>
        <SEO title="Sign Up" />
        <SignInUp type="sign up" title="Sign Up" />
    </Layout>
)

export default SignUpPage
