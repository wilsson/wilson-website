import React from 'react'
import { Link } from 'gatsby'
import { FaClock, FaCalendarAlt } from 'react-icons/fa'

export const Posts = ({ posts }) => {
  return(
    <>
      <div className="mb-6">
        {posts.map(({ node }, key) => {
          const { timeToRead, frontmatter, slug } = node
          const { title, description, date } = frontmatter
          return(
            <Link key={key} to={slug} className="flex py-4 px-5 border-2 border-transparent border-dashed hover:border-gray-400 mb-7 rounded-md justify-between">
              <div class="flex flex-col">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p class="text-white text-sm text-gray-400 max-w-sm">{description}</p>
              </div>  
              <div class="flex">
                <div class="text-white flex items-center mr-4">
                  <FaCalendarAlt />
                  <div className="ml-2 text-sm">{date}</div>
                </div>
                <div class="text-white flex items-center">
                  <FaClock />
                  <div className="ml-2 text-sm">{timeToRead} min read</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
