import React from 'react'
import { Link } from 'gatsby'
import { IconCalendar } from './IconCalendar'
import { IconClock } from './IconClock'

export const Posts = ({ posts }) => {
  return(
    <>
      <h2 className="text-white text-2xl mb-6">Blog</h2>
      <div className="mb-6">
        {[...posts, ...posts].map(({ node }, key) => {
          const { timeToRead, frontmatter, slug } = node
          const { title, date } = frontmatter
          return(
            <div key={key} className="h-24 flex flex-col justify-center border-b border-black">
              <Link className="text-white text-2xl font-bold title" to={slug}>{title}</Link>
              <div class="flex text-base text-gray footer">
                <div class="flex mr-14 font-bold calendar">
                  <IconCalendar />
                  <div>{date}</div>
                </div>
                <div class="flex font-bold clock">
                  <IconClock />
                  <div>{timeToRead} min read</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
