import React from 'react'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  console.log('>>>', data)
  const { edges: posts, group: tags } = data.allMdx

  return(
    <>
      <h2>Wilson Flores Turriate</h2>
      <h2>Tags</h2>
      {tags.map(({ tag, totalCount }) => {
        return(
          <div>{tag} - {totalCount}</div>
        )
      })}
      <h2>Blog</h2>
      {posts.map(({ node }, key) => {
        const { timeToRead, frontmatter } = node
        const { title, date } = frontmatter
        return(
          <div key={key} className="flex justify-between mb-2">
            <div>{title}</div>
            <div>{date} - {timeToRead} min read</div>
          </div>
        )
      })}
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
        }
      }
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
