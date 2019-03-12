import React from "react"
import Layout from "../components/layout"
import EditQuote from "../components/editQuote"

// eslint-disable-next-line
const EditQuotePage = ({ location }) => {
    if (typeof location.quoteId !== `undefined`) {
        const { quoteId, text, attribution } = location.state
        return (
            <Layout>
                <EditQuote quoteId={quoteId} currBody={text} currAttribution={attribution} />
            </Layout>
        )
    } return <div />
}

export default EditQuotePage
