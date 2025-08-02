import React from 'react'

export default function Projects() {
  return (
    <div className='m-11 justify-items-center'>
        <div className='flex justify-center'>
            <h2 className='text-4xl font-semibold font-ubuntu'>My Projects</h2>
        </div>
        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <div 
            className='flex flex-col bg-[#FFFFFF] mt-12 w-75 shadow-lg'
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

          <div 
            className='flex flex-col bg-[#FFFFFF] mt-12 w-75 shadow-lg'
          >
              <div className='m-3 border border-gray-200'>
                <img src='/grantsfinder.png' />
              </div>
              <div className='m-3'>
                <h2 className='text-2xl font-semibold font-ubuntu'>GrantsFinder</h2>
                <p className='font-ubuntu mt-3'>Posted: </p>
                <p className='font-ubuntu mt-7'>Read more</p>
              </div>
          </div>

          <div 
            className='flex flex-col bg-[#FFFFFF] mt-12 w-75 shadow-lg'
          >
              <div className='m-3 border border-gray-200'>
                <img src='/sprint-manager.png' />
              </div>
              <div className='m-3'>
                <h2 className='text-2xl font-semibold font-ubuntu'>Sprint Manager</h2>
                <p className='font-ubuntu mt-3'>Posted: </p>
                <p className='font-ubuntu mt-7'>Read more</p>
              </div>
          </div>
        </div>
    </div>
  )
}