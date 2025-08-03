import Link from 'next/link'
import React from 'react'

export default function TapMyBack() {
  return (
    <div className='justify-items-center overflow-x-hidden'>
        <div className='mt-10'>
            <p className='text-4xl font-semibold font-ubuntu'>Tap My Back</p>
        </div>
        <div className='m-5 mt-10 max-w-3xl md:mt-12 xl:mt-10'>
            <div>
                <img src='/tap-my-back.png' className='' />
                <div className='mt-5'>
                    <span className='font-semibold font-ubuntu'>Tecnology used:</span>
                    <span className='font-ubuntu'> Meteor.js</span>
                </div>
                <div className='mt-5 font-ubuntu'>
                    <p>Platform that promotes employee and collaborator recognition to praise work teams and help them create a culture of continuous feedback.</p>
                </div>
                <div className='flex mt-5 space-x-4'>
                    <Link href="https://www.tapmyback.com/" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                        <p className='font-ubuntu'>Try it here</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
