module.exports = {
    siteMetadata: {
        title: `Quoteworthy`,
        description: `Collect and share your favorite quotes.`,
        author: `Lucas Lombardo`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#D3D3D3`,
                theme_color: `#D3D3D3`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-eslint`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-netlify`, // make sure to put last in the array
    ],
}
