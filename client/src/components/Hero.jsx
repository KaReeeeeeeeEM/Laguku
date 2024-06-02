import React from 'react'

//components
import Navbar from './Navbar'
import Carousel from './Carousel'
import About from './About'

const Hero = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <About />
    </div>
  )
}

export default Hero