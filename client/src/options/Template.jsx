import React from 'react'

//components
import Navbar from './Navbar'
import Footer from './Footer'

//images
import artBottom from '../img/artBottom.png'

const Choices = () => {
  return (
    <div>
        <Navbar />


        <img src={artBottom} alt='art' className='w-1/3 -z-10 absolute bottom-0 left-0' />
        <Footer />
    </div>
  )
}

export default Choices