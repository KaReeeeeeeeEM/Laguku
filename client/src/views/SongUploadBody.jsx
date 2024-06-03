import React from 'react'
import SongUploadTable from './SongUploadTable'

const SongUploadBody = ({back}) => {
  return (
    <div className='mt-28 px-6 lg:px-12 flex flex-col items-start'>
        <div className='text-gray-400 w-screen z-10 h-12 flex justify-between items-center text-lg bg-white fixed left-2 top-20 lg:top-24 lg:left-12'>
            <span><a href={back}><span>Dashboard</span></a>/ <span className='text-purple-600'>Songs</span></span>
            <a className='mr-8 lg:mr-24 px-3 py-1 text-md lg:px-4 lg:py-2 bg-purple-600 rounded-lg text-white font-bold cursor-pointer'>
              Create Song
            </a>
        </div>
        <div className='w-full lg:w-screen h-[720px] absolute left-0 mt-12 transition ease-in-out duration-500 hover:opacity-80 overflow-auto'>
            <SongUploadTable />
        </div>
    </div>
  )
}

export default SongUploadBody