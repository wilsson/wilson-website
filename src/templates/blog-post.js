import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import { FaClock, FaCalendarAlt } from 'react-icons/fa'
import { Pre } from '../components/Pre'

const H1 = props => <h1 className="text-white text-5xl font-bold mb-5" {...props} />
const H2 = props => <h2 className="text-white text-4xl font-bold mb-5" {...props} />
const H3 = props => <h3 className="text-white text-3xl font-bold mb-5" {...props} />
const H4 = props => <h4 className="text-white text-2xl font-bold mb-5" {...props} />
const H5 = props => <h5 className="text-white text-xl font-bold mb-5" {...props} />
const H6 = props => <h6 className="text-white text-lg font-bold mb-5" {...props} />
const Ul = props => <ul className="text-white list-disc list-inside mb-5 leading-7" {...props} />
const Ol = props => <ul className="text-white list-decimal list-inside mb-5 leading-7" {...props} />

const MyParagraph = props => (
  <p className="text-white text-lg mb-4 mt-4" {...props} />
)

const Hr = () => <hr className="mt-2.5 mb-5" style={{ borderColor: '#1F2023' }}/>

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  p: MyParagraph,
  pre: props => <div {...props} />,
  code: Pre,
  ul: Ul,
  ol: Ol,
  inlineCode: (props) => <kbd className="rounded-md border-2 border-b-4 border-gray-600 px-1 text-sm" {...props} />
}

const BlogPostTemplate = ({ data }) => {
  return(
    <>
      <Header />
      <div className="container m-auto mt-12 mb-4">
        <header>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-blue-800 mb-2">{data.mdx.frontmatter.title}</h2>
          <div class="flex mb-10">
            <div class="text-white flex items-center mr-4">
              <FaCalendarAlt />
              <div className="ml-2 text-sm">10 July, 2021</div>
            </div>
            <div class="text-white flex items-center">
              <FaClock />
              <div className="ml-2 text-sm">1 min read</div>
            </div>
          </div>
        </header>

        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      frontmatter {
        title
      }
    }
  }
`
export default BlogPostTemplate
