import React from 'react'

export default function LimpiezApp() {
  return (
    <div className='justify-items-center overflow-x-hidden'>
        <div className='mt-10'>
            <p className='text-4xl font-semibold font-ubuntu'>LimpiezApp</p>
        </div>
        <div className='m-5 mt-10 max-w-3xl md:mt-12 xl:mt-10'>
            <div>
                <img src='/limpiezapp.jpeg' className='' />
                <div className='mt-5'>
                    <span className='font-semibold font-ubuntu'>Tecnology used:</span>
                    <span className='font-ubuntu'> Angular and .NET</span>
                </div>
                <div className='mt-5 font-ubuntu'>
                    <p>
                        Web application whose objective is to manage service orders for Elior, with different user profiles (administrator, supervisor and specialist) and the flow of 
                        their statuses (not assigned, assigned, in progress, completed and validated).
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}