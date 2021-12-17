import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import { FaClock, FaCalendarAlt } from 'react-icons/fa'
import { components, SEO, Header } from '../components'
import '../styles.css'

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, body, timeToRead } = data.mdx
  const { title, description, date } = frontmatter
  return(
    <>
      <SEO title={title} description={description}/>
      <Header />
      <div className="container m-auto mt-12 mb-4 px-5 lg:px-0 xl:px-0 2xl:px-0">
        <header>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-blue-800 mb-2">{title}</h1>
          <div className="flex mb-10">
            <div className="text-white flex items-center mr-4">
              <FaCalendarAlt />
              <div className="ml-2 text-sm">{date}</div>
            </div>
            <div className="text-white flex items-center">
              <FaClock />
              <div className="ml-2 text-sm">{timeToRead} min read</div>
            </div>
          </div>
        </header>

        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </>
  )
}

export const queryPosts = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { slug: { eq: $pathSlug } }) {
      id
      body
      timeToRead
      frontmatter {
        title
        date
        description
      }
    }
  }
`
export default BlogPostTemplate
