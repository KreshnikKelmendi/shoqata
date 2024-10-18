import React from 'react'
import poster from "../img/Asset 3.png"
import Date from "../venue/Date.jsx"

const Banner = () => {
  return (
    <div className='w-full relative'>
        <img className='w-full lg:h-[100%]' alt='' src={poster} />
        <div className='absolute bottom-2 lg:top-2 right-1 lg:left-[30px]'>
          <Date />
        </div>
    </div>
  )
}

export default Banner