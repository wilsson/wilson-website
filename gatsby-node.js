const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    const { slug } = node.frontmatter
    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        pathSlug: slug
      }
    })
  })
}
