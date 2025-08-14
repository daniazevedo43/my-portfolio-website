import React from 'react'

export default function Timesheets() {
  return (
    <div className='justify-items-center overflow-x-hidden'>
        <div className='mt-10'>
            <p className='text-4xl font-semibold font-ubuntu'>Timesheets</p>
        </div>
        <div className='m-5 mt-10 max-w-3xl md:mt-12 xl:mt-10'>
            <div>
                <img src='/timesheets.jpeg' className='' />
                <div className='mt-5'>
                    <span className='font-semibold font-ubuntu'>Tecnology used:</span>
                    <span className='font-ubuntu'> Angular and .NET</span>
                </div>
                <div className='mt-5 font-ubuntu'>
                    <p>
                        Web application where employees can manage they're working hours and holidays in a calendar. It also has a record of the projects each one is working on, the 
                        clients they work for, and also allows employees to export a PDF file with a table that contains the number of working hours they worked on each day in a month.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}