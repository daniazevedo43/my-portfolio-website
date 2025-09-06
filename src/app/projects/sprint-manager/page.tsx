import Link from 'next/link'
import React from 'react'

export default function SprintManager() {
  return (
    <div className='justify-items-center overflow-x-hidden'>
        <div className='mt-10'>
            <p className='text-4xl font-semibold font-ubuntu'>Sprint Manager</p>
        </div>
        <div className='m-5 mt-10 max-w-3xl md:mt-12 xl:mt-10'>
            <div>
                <img src='/sprint-manager.png' className='' />
                <div className='mt-5'>
                    <span className='font-semibold font-ubuntu'>Tecnology used:</span>
                    <span className='font-ubuntu'> .NET</span>
                </div>
                <div className='mt-5 font-ubuntu'>
                    <p>
                        An api focused on organizing and tracking tasks. It provides a solid foundation for managing projects, sprints, work items and team members.
                    </p>
                </div>
                <div className='flex mt-5 space-x-4'>
                    <Link href="https://github.com/daniazevedo43/SprintManager" className='font-ubuntu text-[#1976d2] hover:underline w-auto'>
                        <p className='font-ubuntu'>Try it here</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}