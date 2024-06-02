import React from 'react'

//components
import Navbar from './Navbar'
import Carousel from './Carousel'
import About from './About'
import Showcase from './Showcase'
import Feed from './Feed'

const Hero = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <About />
        <Showcase />
        <Feed />
    </div>
  )
}

export default Hero