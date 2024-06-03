import React from 'react'

//components
import Navbar from './Navbar'
import Footer from './Footer'
import Timeline from './Timeline'
import DashboardHero from './DashboardHero'

//images
import artBottom from '../img/artBottom.png'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <h1 className='mt-32 font-extrabold text-2xl ml-4 lg:ml-12'>Dashboard</h1>
        <DashboardHero />
            <h1 className='mt-32 font-extrabold text-2xl text-center'>User Guide Tour</h1>
        <Timeline />
            <img src={artBottom} alt='art' className='w-1/3 -z-10 fixed bottom-0 left-0' />
        <Footer />
    </div>
  )
}

export default Dashboard