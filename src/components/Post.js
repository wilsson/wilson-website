import React from 'react'
import { Link } from 'gatsby'
import { FaClock, FaCalendarAlt } from 'react-icons/fa'

export const Post = ({ title, description, date, timeToRead, slug }) => (
  <article className="px-5 lg:px-0">
    <Link
      to={`/${slug}`}
      className="
        flex
        flex-col
        justify-between
        py-4
        px-5
        border-2
        border-transparent
        border-dashed
        hover:border-gray-400
        mb-7
        rounded-md
        md:flex-row
      "
    >
      <div className="flex flex-col mb-4 lg:mb-0">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm text-gray-400 max-w-sm">
          {description}
        </p>
      </div>
      <div className="flex">
        <div className="text-white flex items-center mr-4">
          <FaCalendarAlt />
          <div className="ml-2 text-sm">{date}</div>
        </div>
        <div className="text-white flex items-center">
          <FaClock />
          <div className="ml-2 text-sm">{timeToRead} min read</div>
        </div>
      </div>
    </Link>
  </article>
)
