import React from 'react'
import Helmet from 'react-helmet'

export const SEO = ({ title, description }) => (
  <Helmet 
    meta={[
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      }
    ]}
  />
)

