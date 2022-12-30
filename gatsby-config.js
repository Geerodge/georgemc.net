require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `George McEntegart`,
    description: `Digital Marketing and business growth. I love to help people grow their businesses!`,
    author: `geerodge`,
    image: `${__dirname}/src/images/george-mcentegart.jpg`,
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
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `George McEntegart`,
        short_name: `George McEntegart`,
        start_url: `/`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-4DC7YX8X0D", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `3rtiop9p`,
        dataset: `production`,
        apiVersion: `v2021-08-18`, // use a UTC date string
        token: process.env.SANITY_TOKEN,
      },
    },
    // Removed during dev as its slow to build
    // {
    //   resolve: `gatsby-plugin-prettier-build`,
    //   options: {
    //     types: ['html'],
    //     concurrency: 20,
    //     verbose: true,
    //   },
    // },
  ],
}
