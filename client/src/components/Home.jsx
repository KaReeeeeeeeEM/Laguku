import React from 'react'

//components
import Navbar from './Navbar'
import Carousel from './Carousel'
import About from './About'
import Showcase from './Showcase'
import Feed from './Feed'
import VideoIframe from './Video'
import Testimonials from './Testimonials'
import CTA from './CTA'
import Footer from './Footer'

//images
import image from '../img/image.png'

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
        <Footer />
    </div>
  )
}

export default Home