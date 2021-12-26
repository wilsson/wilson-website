import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Bio } from '../Bio'

describe('Bio', () => {
  it('render correctly', () => {
    const props = {
      author: 'author sample',
      job: 'job sample'
    }
    const component = render(<Bio {...props} />)
    expect(component.container).toHaveTextContent(props.author)
    expect(component.container).toHaveTextContent(props.job)
  })
})
