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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
