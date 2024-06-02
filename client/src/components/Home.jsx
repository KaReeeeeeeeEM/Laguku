import React from 'react'

//components
import Navbar from './Navbar'
import Carousel from './Carousel'
import About from './About'
import Showcase from './Showcase'
import Feed from './Feed'
import VideoIframe from './Video'

//images
import image from '../img/image.png'

const Hero = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <About />
        <Showcase />
        <Feed />
        <VideoIframe 
          iframeSrc={image}
          thumbnailSrc={image}
          iframeTitle="My Video"
        />
    </div>
  )
}

export default Hero