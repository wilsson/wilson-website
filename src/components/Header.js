import React from 'react'

export const Header = () => {
  return(
    <header className="container m-auto flex mt-8 mb-12">
      <a className="text-white font-bold text-base bg-black px-3.5 h-8 flex items-center rounded cursor-pointer">Home</a>
      <a className="text-gray text-base h-8 px-3.5 flex items-center rounded cursor-pointer hover:bg-black">Blog</a>
      <a className="text-gray text-base h-8 px-3.5 flex items-center rounded cursor-pointer hover:bg-black">Tags</a>
    </header>
  )
}
