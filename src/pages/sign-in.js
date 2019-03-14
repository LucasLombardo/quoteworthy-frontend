import React from "react"
import Layout from "../components/layout"
import SignInUp from "../components/signInUp"
import SEO from "../components/seo"

const SignInPage = () => (
    <Layout>
        <SEO title="Sign In" />
        <SignInUp type="sign in" title="Sign In" />
    </Layout>
)

export default SignInPage
