import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { Bio } from '../components/Bio'
import { Posts } from '../components/Posts'
import '../styles.css'

export default function Home({ data }) {
  const { edges: posts, group: tags } = data.allMdx

  return(
    <>
      <Header />
      <div className="container m-auto">
        <Bio />
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
