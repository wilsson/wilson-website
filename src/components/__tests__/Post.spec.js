import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Post } from '../Post'

describe('Post', () => {
  it('render correctly', () => {
    const props = {
      title: 'Post sample',
      date: '2021-12-06',
      timeToRead: '1',
      description: 'Description sample',
      slug: 'sample'
    }
    const component = render(<Post {...props} />)
    component.getByText(props.title)
    component.getByText(props.date)
    component.getByText(`${props.timeToRead} min read`)
    component.getByText(props.description)
    const link = component.container.querySelector('a')
    expect(link).toHaveAttribute('href', `/${props.slug}`)
  })
})

