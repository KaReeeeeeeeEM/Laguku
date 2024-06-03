import React from 'react'

const SongUploadBody = ({back}) => {
  return (
    <div className='mt-28 px-6 lg:px-12 flex flex-col items-start'>
        <div className='text-gray-400 text-lg bg-white fixed left-6 lg:left-12'>
            <a href={back}><span>Dashboard</span></a>/ <span className='text-purple-600'>Songs</span>
        </div>
    </div>
  )
}

export default SongUploadBody