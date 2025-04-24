"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <div className='flex justify-center items-center space-x-20 mt-30'>
        <div>
          <Image 
            className='rounded-full'
            src='/home-pic.jpg' 
            alt='Home' 
            width={420} 
            height={420} 
          />
        </div>
        <div>
          <p className='text-7xl font-semibold font-display'>Hello!</p>
          <p className='text-7xl font-semibold font-display'>I'm Daniel</p>
          <p className='text-2xl font-display'>And I'm a web developer</p>
          <div className="mt-10">
              <button onClick={() => window.open('https://github.com/daniazevedo43')} className="bg-black hover:bg-[#3a3a3a] text-white py-2 px-4 rounded-lg cursor-pointer">
                My Github
              </button> 
          </div>
        </div>
      </div>
    </div>
  )
}