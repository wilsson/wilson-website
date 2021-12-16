import React from 'react'
import { Link } from 'gatsby'

export const Header = () => {
  return(
    <header className="container m-auto flex mt-4 mb-16">
      <Link to="/" className="text-white text-sm bg-black px-2.5 h-8 flex items-center rounded cursor-pointer mr-4">Home</Link>
      <Link to="/blog" className="text-white text-sm h-8 px-2.5 flex items-center rounded cursor-pointer hover:bg-black mr-4">Blog</Link>
    </header>
  )
}
