import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPostTemplate = ({ data }) => {
  console.log('data', data)
  return(
    <>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
  )
}

export const queryPosts = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { slug: { eq: $pathSlug } }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
export default BlogPostTemplate
