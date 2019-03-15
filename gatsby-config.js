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
                name: `Quoteworthy`,
                short_name: `Quoteworthy`,
                start_url: `/`,
                background_color: `#D3D3D3`,
                theme_color: `#D3D3D3`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-source-custom-api`,
            options: {
                url: {
                    development: `http://localhost:4741/quotes`,
                    production: `https://quoteworthy-backend.herokuapp.com/quotes`,
                },
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-eslint`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-netlify`, // make sure to put last in the array
    ],
}
