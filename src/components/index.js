import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from './H'
import { Paragraph } from './Paragraph'
import { InlineCode } from './InlineCode'
import { Ul } from './Ul'
import { Ol } from './Ol'
import { Hr } from './Hr'
import { Pre } from './Pre'

export { Header } from './Header'
export { SEO } from './SEO'

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  p: Paragraph,
  pre: props => <div {...props} />,
  code: Pre,
  ul: Ul,
  ol: Ol,
  inlineCode: InlineCode
}
