import React from 'react'
import { Link } from 'gatsby'

const classNameCommon = {
  className:
    'text-white text-sm px-2.5 h-8 flex items-center rounded cursor-pointer hover:bg-black mr-4',
  activeClassName: 'bg-black',
}

export const Header = () => (
  <header className="w-full lg:w-200 m-auto flex mt-4 mb-16">
    <Link to="/" {...classNameCommon}>
      Home
    </Link>
    <Link to="/blog/" {...classNameCommon}>
      Blog
    </Link>
    <Link to="/about/" {...classNameCommon}>
      About
    </Link>
  </header>
)
