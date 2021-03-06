import React from "react"
import Layout from "../components/layout"
import EditQuote from "../components/editQuote"
import SEO from "../components/seo"

// eslint-disable-next-line
const EditQuotePage = ({ location }) => {
    // pass location state down, quote data of quote being edited will
    // be passed through the router into location state
    return (
        <Layout>
            <SEO title="Edit Quote" />
            <EditQuote quote={{ ...location.state }} />
        </Layout>
    )
}

export default EditQuotePage
