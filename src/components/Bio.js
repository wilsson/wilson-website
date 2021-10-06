import React from 'react'

const avatarUrl = "https://media-exp1.licdn.com/dms/image/C4E03AQFQxtRuqyvqjg/profile-displayphoto-shrink_800_800/0/1629001401165?e=1639008000&v=beta&t=HbZx1J6mlFC8s73bOaCnSpYDaqM352vV_17iVdSBgt0"

export const Bio = () => {
  return(
    <>
      <h1 className="text-4xl font-bold text-primary mb-8">LIMITLESS</h1>
      <div class="flex">
        <img className="rounded-full mr-4" width="60" src={avatarUrl} />
        <div class="description">
          <h2 className="text-white text-2xl">Wilson Flores Turriate</h2>
          <div className="text-gray text-lg font-bold">Software Architect at PagoEfectivo</div>
        </div>
      </div>
    </>
  )
}
