import React from 'react'

//components
import Navbar from './Navbar'
import Footer from './Footer'
import Timeline from './Timeline'

//images
import artBottom from '../img/artBottom.png'

const Dashboard = () => {
  return (
    <div>
        <Navbar />

        <Timeline />
        <img src={artBottom} alt='art' className='w-1/3 -z-10 absolute bottom-0 left-0' />
        <Footer />
    </div>
  )
}

export default Dashboard