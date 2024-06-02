import React from 'react'

//components
import Navbar from './Navbar'
import Carousel from './Carousel'
import About from './About'
import Showcase from './Showcase'
import Feed from './Feed'
import VideoIframe from './Video'
import Testimonials from './Testimonials'

//images
import image from '../img/image.png'
import CTA from './CTA'

const Home = () => {
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
        <Testimonials />
        <CTA />
    </div>
  )
}

export default Home