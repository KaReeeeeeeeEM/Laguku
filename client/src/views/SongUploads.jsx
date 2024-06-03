import React from 'react'

//components
import Navbar from './Navbar'
import Footer from './Footer'

//images
import artBottom from '../img/artBottom.png'
import SongUploadBody from './SongUploadBody'

const SongUploads = () => {
  return (
    <div className='h-screen lg:h-full w-full overflow-hidden lg:overflow-auto'>
        <Navbar />
        <SongUploadBody back='/dashboard' />
        <img src={artBottom} alt='art' className='w-1/3 -z-10 fixed bottom-0 left-0' />
        <Footer />
    </div>
  )
}

export default SongUploads