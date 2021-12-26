import React from 'react'

export const Bio = ({
  author,
  job
}) => (
  <div className="mt-16 mb-16 text-center">
    <h2 className="
      text-3xl
      font-bold
      bg-clip-text
      text-transparent
      bg-gradient-to-r
      from-gray-300
      to-blue-800
      "
    >
      {author}
    </h2>
      <div className="text-gray-400 text-base italic">
        {job}
      </div>
  </div>
)

