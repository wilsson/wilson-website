import React from 'react'
import { IconTag } from './IconTag'

export const Tags = ({ tags }) => {
  return(
    <>
      <h2 className="text-white text-2xl mb-6">Tags</h2>
      <div className="flex mb-14">
        {tags.map(({ tag, totalCount }) => (
          <div className="flex text-white font-bold text-base bg-black h-8 px-3.5 flex items-center rounded-lg mr-7 cursor-pointer">
            <IconTag /> {tag} ({totalCount})
          </div>
        ))}
      </div>
    </>
  )
}
