import React from 'react'

const classNameCommon = 'text-white font-bold mb-5' 

export const H1 = props => (
  <h1 className={`${classNameCommon} text-5xl`} {...props} />
)

export const H2 = props => (
  <h2 className={`${classNameCommon} text-4xl`} {...props} />
)

export const H3 = props => (
  <h3 className={`${classNameCommon} text-3xl`} {...props} />
)

export const H4 = props => (
  <h4 className={`${classNameCommon} text-2xl`} {...props} />
)

export const H5 = props => (
  <h5 className={`${classNameCommon} text-xl`} {...props} />
)

export const H6 = props => (
  <h6 className={`${classNameCommon} text-lg`} {...props} />
)
