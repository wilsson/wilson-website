import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { Posts } from '../components/Posts'
import '../styles.css'

export default function Blog({ data }) {
  const { edges: posts } = data.allMdx

  return(
    <>
      <Header />
      <div className="container m-auto">
        <Posts posts={posts} />
      </div>
    </>
  )
}

export const query = graphql`
  query  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "MMMM D, YYYY")
            tags
          }
          timeToRead
          slug
        }
      }
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
