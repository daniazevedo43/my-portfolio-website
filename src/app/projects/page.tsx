import React from 'react'

export default function Projects() {
  return (
    <div style={{border: '1px solid red'}}>
        <div style={{border: '1px solid red'}} className='flex justify-center mt-12'>
            <h2 className='text-4xl font-semibold font-ubuntu'>My Projects</h2>
        </div>
        <div className='flex justify-center'>
          <div 
            className='flex flex-col justify-start mt-12 w-90 bg-[#FFFFFF]'
          >
              <div className='m-4 border border-gray-200'>
                <img src='/tap-my-back.png' />
              </div>
              <div className='m-4'>
                <h2 className='text-2xl font-semibold font-ubuntu'>Tap My Back</h2>
                <p>Posted: </p>
                <p>Read more</p>
              </div>
          </div>
        </div>
    </div>
  )
}