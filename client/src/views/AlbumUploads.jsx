import React from 'react'

//components
import Navbar from './Navbar'
import Footer from './Footer'

//images
import artBottom from '../img/artBottom.png'
import AlbumUploadBody from './AlbumUploadBody'

const AlbumUploads = () => {
  return (
    <div className='h-screen lg:h-full w-full overflow-hidden lg:overflow-auto'>
        <Navbar />
        <AlbumUploadBody back='/dashboard' />
        <img src={artBottom} alt='art' className='w-1/3 -z-10 fixed bottom-0 left-0' />
        <Footer />
    </div>
  )
}

export default AlbumUploads