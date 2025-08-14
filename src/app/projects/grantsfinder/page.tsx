import Link from 'next/link'
import React from 'react'

export default function GrantsFinder() {
  return (
    <div className='justify-items-center overflow-x-hidden'>
        <div className='mt-10'>
            <p className='text-4xl font-semibold font-ubuntu'>GrantsFinder</p>
        </div>
        <div className='m-5 mt-10 max-w-3xl md:mt-12 xl:mt-10'>
            <div>
                <img src='/grantsfinder.png' className='' />
                <div className='mt-5'>
                    <span className='font-semibold font-ubuntu'>Tecnology used:</span>
                    <span className='font-ubuntu'> Next.js</span>
                </div>
                <div className='mt-5 font-ubuntu'>
                    <p>
                        AI chatbot application specializing in EU grants aiming to match projects with upcoming opportunities, and which allows you to discover opportunities for grants 
                        and competitions of the EU in a simpler way.
                    </p>
                </div>
                <div className='flex mt-5 space-x-4'>
                    <Link href="https://www.grantsfinder.eu/" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                        <p className='font-ubuntu'>Try it here</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
