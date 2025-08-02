import React from 'react'

export default function Projects() {
  return (
    <div>
        <div className='flex justify-center mt-12'>
            <h2 className='text-4xl font-semibold font-ubuntu'>My Projects</h2>
        </div>
        <div className='flex justify-center'>
          <div 
            className='flex flex-col justify-start bg-[#FFFFFF] mt-12 w-80 shadow-lg'
          >
              <div className='m-3 border border-gray-200'>
                <img src='/tap-my-back.png' />
              </div>
              <div className='m-3'>
                <h2 className='text-2xl font-semibold font-ubuntu'>Tap My Back</h2>
                <p className='font-ubuntu mt-3'>Posted: </p>
                <p className='font-ubuntu mt-7'>Read more</p>
              </div>
          </div>
        </div>
    </div>
  )
}