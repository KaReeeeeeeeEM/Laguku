import React from 'react'
import TabsSection from './AlbumTabs'

const AlbumUploadBody = ({back}) => {
  return (
    <div className='mt-28 px-6 lg:px-12 flex flex-col items-start'>
        <div className='text-gray-400 w-screen px-4 z-10 h-20 flex justify-between items-center text-lg bg-white fixed left-2 top-20 lg:top-16 lg:left-0'>
            <span><a href={back}><span>Dashboard</span></a>/ <span className='text-purple-600'>Albums</span></span>
            <a href='/albums/new' className='mr-8 lg:mr-24 px-2 py-1 text-md lg:px-4 lg:py-2.5 bg-purple-600 rounded-lg text-white font-bold cursor-pointer'>
              Create Album
            </a>
        </div>
        <div className='w-full lg:w-screen h-[720px] lg:h-full absolute left-0 mt-12 transition ease-in-out duration-500 hover:opacity-80 overflow-auto'>
            <TabsSection />
        </div>
    </div>
  )
}

export default AlbumUploadBody