import React from 'react'
import { Post } from './Post'

export const Posts = ({ posts }) => (
  <div className="mb-6">
    {posts.map(({ node }, key) => {
      const { timeToRead, frontmatter, slug } = node
      const { title, description, date } = frontmatter
      const props = {
        title,
        description,
        date,
        timeToRead,
        slug
      }
      return <Post key={key} {...props} />
    })}
  </div>
)
