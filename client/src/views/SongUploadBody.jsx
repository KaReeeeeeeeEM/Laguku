import React from 'react'
import SongUploadTable from './SongUploadTable'

const SongUploadBody = ({back}) => {
  return (
    <div className='mt-28 px-6 lg:px-12 flex flex-col items-start'>
        <div className='text-gray-400 w-screen z-50 h-12 text-lg bg-white fixed left-6 top-16 lg:top-24 lg:left-12'>
            <a href={back}><span>Dashboard</span></a>/ <span className='text-purple-600'>Songs</span>
        </div>
        <div className='w-full lg:w-screen h-[720px] absolute left-0 mt-12 overflow-auto'>
            <SongUploadTable />
        </div>
    </div>
  )
}

export default SongUploadBody