import React from "react"
import Layout from "../components/layout"
import EditQuote from "../components/editQuote"

// eslint-disable-next-line
const EditQuotePage = ({ location }) => {
    // eslint-disable-next-line

    return (
        <Layout>
            <EditQuote quote={{ ...location.state }} />
        </Layout>
    )
}

export default EditQuotePage
