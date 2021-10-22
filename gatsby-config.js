/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts/`,
      },
    },
    /*
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    */
    'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          //`Inter\:400,700`,
          `Inter\:700,400`,
          `JetBrains Mono`
        ],
        display: 'swap'
      }
    }
  ],
}
