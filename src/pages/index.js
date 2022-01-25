import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { Bio } from '../components/Bio'
import { Posts } from '../components/Posts'
import '../styles.css'

export default function Home({ data }) {
  console.log('data', data)
  const { author, job } = data.site.siteMetadata
  const { edges: posts } = data.allMdx
  return (
    <>
      <Header />
      <div className="w-full lg:w-200 m-auto">
        <Bio author={author} job={job} />
        <Posts posts={posts} />
      </div>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        job
      }
    }
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
