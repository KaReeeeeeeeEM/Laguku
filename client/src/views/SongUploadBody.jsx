import React from 'react'
import TabsSection from './Tabs'

const SongUploadBody = ({back}) => {
  return (
    <div className='mt-28 px-6 lg:px-12 flex flex-col items-start'>
        <div className='text-gray-400 w-screen px-4 z-10 h-20 flex justify-between items-center text-lg bg-white fixed left-2 top-20 lg:top-16 lg:left-0'>
            <span className='md:pl-12 text-sm lg:text-lg'><a href={back}><span>Dashboard</span></a>/ <span className='text-purple-600'>Songs</span></span>
            <a href='/songs/new' className='lg:mt-12 lg:mr-24 px-2 py-1 text-sm lg:text-lg lg:px-4 lg:py-2.5 bg-purple-600 rounded text-white font-semibold cursor-pointer'>
              Create Song
            </a>
        </div>
        <div className='w-full lg:w-screen h-[720px] lg:h-full absolute left-0 mt-8 lg:mt-12 transition ease-in-out duration-500 hover:opacity-80 overflow-auto'>
            <TabsSection />
        </div>
    </div>
  )
}

export default SongUploadBody