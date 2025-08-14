import React from 'react'

export default function Stories() {
  return (
    <div className='justify-items-center overflow-x-hidden'>
        <div className='mt-10'>
            <p className='text-4xl font-semibold font-ubuntu'>Stories</p>
        </div>
        <div className='m-5 mt-10 max-w-3xl md:mt-12 xl:mt-10'>
            <div>
                <img src='/stories.png' className='' />
                <div className='mt-5'>
                    <span className='font-semibold font-ubuntu'>Tecnology used:</span>
                    <span className='font-ubuntu'> Next.js and .NET</span>
                </div>
                <div className='mt-5 font-ubuntu'>
                    <p>
                        Web application that allows users to create and export CVs in PDF format, called “stories”. Users can manage personal information, professional experience and 
                        education.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}