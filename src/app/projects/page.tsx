import React from 'react'

export default function Projects() {
  return (
    <div className='m-11 justify-items-center'>
        <div className='flex justify-center'>
            <h2 className='text-4xl font-semibold font-ubuntu'>My Projects</h2>
        </div>
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center'>
          <div 
            className='flex flex-col bg-[#FFFFFF] mt-12 w-75 shadow-lg'
          >
              <div className='m-3 border border-gray-200'>
                <img
                  src='/tap-my-back.png'
                  className='h-32 w-full'
              />
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
                <img 
                  src='/grantsfinder.png' 
                  className='h-32 w-full'
                />
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
                <img 
                  src='/timesheets.jpeg' 
                  className='h-32 w-full'
                />
              </div>
              <div className='m-3'>
                <h2 className='text-2xl font-semibold font-ubuntu'>Timesheets</h2>
                <p className='font-ubuntu mt-3'>Posted: </p>
                <p className='font-ubuntu mt-7'>Read more</p>
              </div>
          </div>

          <div 
            className='flex flex-col bg-[#FFFFFF] mt-12 w-75 shadow-lg'
          >
              <div className='m-3 border border-gray-200'>
                <img 
                  src='/limpiezapp.jpeg' 
                  className='h-32 w-full'
                />
              </div>
              <div className='m-3'>
                <h2 className='text-2xl font-semibold font-ubuntu'>LimpiezApp</h2>
                <p className='font-ubuntu mt-3'>Posted: </p>
                <p className='font-ubuntu mt-7'>Read more</p>
              </div>
          </div>

          <div 
            className='flex flex-col bg-[#FFFFFF] mt-12 w-75 shadow-lg'
          >
              <div className='m-3 border border-gray-200'>
                <img 
                  src='/stories.png' 
                  className='h-32 w-full'
                />
              </div>
              <div className='m-3'>
                <h2 className='text-2xl font-semibold font-ubuntu'>Stories</h2>
                <p className='font-ubuntu mt-3'>Posted: </p>
                <p className='font-ubuntu mt-7'>Read more</p>
              </div>
          </div>
        </div>
    </div>
  )
}