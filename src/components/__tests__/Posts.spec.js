import React from 'react'
import { render } from '@testing-library/react'
import { Posts } from '../Posts'

describe('Posts', () => {
  it('render correctly', () => {
    const props = {
      posts: [
        {
          node: {
            timeToRead: '1',
            frontmatter: {
              title: 'Post sample',
              description: 'Post description',
              date: '2021-12-06'
            },
            slug: 'sample'
          }
        },
        {
          node: {
            timeToRead: '1',
            frontmatter: {
              title: 'Post sample two',
              description: 'Post description two',
              date: '2021-12-06'
            },
            slug: 'sample'
          }
        }
      ] 
    }
    render(<Posts {...props} />) 
    const posts = document.querySelectorAll('article')
    expect(posts).toHaveLength(props.posts.length)
  })
})
