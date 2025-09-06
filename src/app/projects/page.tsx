import Link from 'next/link'
import React from 'react'

export default function Projects() {
  
  const postedDate = (date: Date) => {
    const month = new Intl.DateTimeFormat("en-US", { month: 'long' }).format(date);
    const day = date.getDate(); 
    const year = date.getFullYear(); 

    return `${month}, ${day} ${year}`;
  }

  return (
    <div className='m-10 justify-items-center'>
        <div className='flex justify-center'>
            <p className='text-4xl font-semibold font-ubuntu'>My Projects</p>
        </div>
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center'>
          <div 
            className='flex flex-col bg-[#FFFFFF] mt-12 w-75 shadow-lg'
          >
              <div className='m-3 border border-gray-200'>
                <img 
                  src='/sprint-manager.png' 
                  className='h-32 w-full'
                />
              </div>
              <div className='m-3'>
                <p className='text-2xl font-semibold font-ubuntu dark:text-black'>Sprint Manager</p>
                <p className='font-ubuntu mt-3 dark:text-black'>Posted: {postedDate(new Date(2025, 8, 6))}</p>
                <div className='mt-7'>
                  <Link href="/projects/sprint-manager" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                    Read more
                  </Link>
                </div>
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
                <p className='text-2xl font-semibold font-ubuntu dark:text-black'>Stories</p>
                <p className='font-ubuntu mt-3 dark:text-black'>Posted: {postedDate(new Date(2025, 7, 14))}</p>
                <div className='mt-7'>
                  <Link href="/projects/stories" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                    Read more
                  </Link>
                </div>
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
                <p className='text-2xl font-semibold font-ubuntu dark:text-black'>LimpiezApp</p>
                <p className='font-ubuntu mt-3 dark:text-black'>Posted: {postedDate(new Date(2025, 7, 14))}</p>
                <div className='mt-7'>
                  <Link href="/projects/limpiezapp" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                    Read more
                  </Link>
                </div>
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
                <p className='text-2xl font-semibold font-ubuntu dark:text-black'>Timesheets</p>
                <p className='font-ubuntu mt-3 dark:text-black'>Posted: {postedDate(new Date(2025, 7, 14))}</p>
                <div className='mt-7'>
                  <Link href="/projects/timesheets" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                    Read more
                  </Link>
                </div>
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
                <p className='text-2xl font-semibold font-ubuntu dark:text-black'>GrantsFinder</p>
                <p className='font-ubuntu mt-3 dark:text-black'>Posted: {postedDate(new Date(2025, 7, 14))}</p>
                <div className='mt-7'>
                  <Link href="/projects/grantsfinder" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                    Read more
                  </Link>
                </div>
              </div>
          </div>

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
                <p className='text-2xl font-semibold font-ubuntu dark:text-black'>Tap My Back</p>
                <p className='font-ubuntu mt-3 dark:text-black'>Posted: {postedDate(new Date(2025, 7, 3))}</p>
                <div className='mt-7'>
                  <Link href="/projects/tap-my-back" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                    Read more
                  </Link>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}