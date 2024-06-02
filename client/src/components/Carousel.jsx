import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

//import images
import image from '../img/image.png';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Custom CSS for animations
const textAnimation = {
  animation: 'slideFromBottom 1s ease-in-out',
};

const subtitleAnimation = {
  animation: 'slideFromBottom 1s ease-out',
};

export default function Corousel() {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${image})`,
            filter: 'blur(4px) brightness(0.5)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title md:text-5xl md:mt-16" data-swiper-parallax="-300" style={textAnimation}>
            Discover <span className='text-pink-500'>New</span> Music
          </div>
          <div className="text-sm md:text-lg md:w-4/5" data-swiper-parallax="-100" style={textAnimation}>
            <p>
              Welcome to our platform, where discovering new music is just a click away. We provide a vast collection of tracks from emerging and established artists worldwide.
            </p>
          </div>
          <div className="subtitle mb-2" data-swiper-parallax="-200" style={subtitleAnimation}>
            Your Next Favorite Song Awaits
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title md:text-5xl md:mt-16" data-swiper-parallax="-300" style={textAnimation}>
            Stream <span className='text-pink-300'>Anywhere</span>
          </div>
          <div className="text-sm md:text-lg md:w-4/5" data-swiper-parallax="-100" style={textAnimation}>
            <p>
              Our service allows you to stream music on any device, anytime, anywhere. Enjoy seamless listening experiences with our high-quality streaming service.
            </p>
          </div>
          <div className="subtitle" data-swiper-parallax="-200" style={subtitleAnimation}>
            Music On The Go
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title md:text-5xl md:mt-16" data-swiper-parallax="-300" style={textAnimation}>
            Artist <span className='text-purple-500'>Support</span> 
          </div>
          <div className="text-sm md:text-lg md:w-4/5" data-swiper-parallax="-100" style={textAnimation}>
            <p>
              We believe in supporting artists. Our platform offers tools for artists to distribute their music, reach new audiences, and earn revenue from their art.
            </p>
          </div>
          <div className="subtitle" data-swiper-parallax="-200" style={subtitleAnimation}>
            Empowering Musicians
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title md:text-5xl md:mt-16" data-swiper-parallax="-300" style={textAnimation}>
          <span className='text-blue-500'>Join</span>  Our Community
          </div>
          <div className="text-sm md:text-lg md:w-4/5" data-swiper-parallax="-100" style={textAnimation}>
            <p>
              Be a part of a vibrant community of music lovers and creators. Connect, share, and discover together on our platform.
            </p>
          </div>
          <div className="subtitle" data-swiper-parallax="-200" style={subtitleAnimation}>
            Music Brings Us Together
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
