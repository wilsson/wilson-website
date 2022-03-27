/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'wilsonft83',
    author: 'Wilson Flores Turriate',
    job: 'Software Engineer FullStack at PedidosYa',
    experience: [
      {
        title: 'Software Engineer FullStack',
        company: 'PedidosYa',
        time: 'Febrero 2022 - Actualidad'
      },
      {
        title: 'Software Architect',
        company: 'PagoEfectivo',
        time: 'Noviembre 2019 - Febrero 2022'
      },
      {
        title: 'Frontend Developer',
        company: 'El Grupo el Comercio',
        time: 'Noviembre 2015 - Octubre 2019'
      },
      {
        title: 'Frontend Developer',
        company: ' licks and Bricks',
        time: 'Enero 2015 - Octubre 2015'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-S2YXTXGZJZ',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:700,400`,
          `JetBrains Mono`
        ],
        display: 'swap'
      }
    }
  ],
}
