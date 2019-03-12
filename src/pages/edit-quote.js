import React from "react"
import Layout from "../components/layout"
import EditQuote from "../components/editQuote"

// eslint-disable-next-line
const EditQuotePage = ({ location }) => {
    const { quoteId, text, attribution } = location.state
    return (
        <Layout>
            <EditQuote quoteId={quoteId} currBody={text} currAttribution={attribution} />
        </Layout>
    )
}

export default EditQuotePage
