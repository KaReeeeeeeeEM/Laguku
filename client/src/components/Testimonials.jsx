import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import images
import image from '../img/image.png';
import top from '../img/top.png';
import bottom from '../img/bottom.png';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Testimonials() {
  return (
    <>
      <div>
        <h1 className='text-lg text-center font-bold uppercase text-purple-600 mt-16'>Testimonials</h1>
        <p className='text-center text-4xl font-extrabold text-gray-600'>What our artists say about us</p>
      </div>
      <img src={top} alt="decoration" className='w-12 h-12 lg:w-24 lg:h-24 relative lg:left-60' />
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="bg-purple-100 px-6 lg:p-4 flex flex-col lg:flex-row justify-around items-center w-64 h-56 ml-8 lg:m-none lg:h-full lg:w-full rounded-lg shadow-lg">
            <div className='hidden lg:flex w-1/3 h-36 bg-gray-800 rounded-full'>
              <img src={image} alt="testimonial" className='rounded-full' />
            </div>
            <div className='w-full lg:w-1/2 py-4 text-gray-600'>
              <p className="text-lg">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-8' fill='purple'>
                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                  </svg>
                </span>
                "Using this platform has taken my music distribution to the next level. I can reach audiences I never thought possible."
              </p>
              <p className="text-lg text-purple-600 font-bold">- Alex Beats</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-100 px-6 lg:p-4 flex flex-col lg:flex-row justify-around items-center w-64 h-56 ml-8 lg:m-none lg:h-full lg:w-full rounded-lg shadow-lg">
            <div className='hidden lg:flex w-1/3 h-36 bg-gray-800 rounded-full'>
              <img src={image} alt="testimonial" className='rounded-full' />
            </div>
            <div className='w-full lg:w-1/2 py-4 text-gray-600'>
              <p className="text-lg">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-8' fill='purple'>
                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                  </svg>
                </span>
                "The distribution features are top-notch, and the support team is always ready to help."
              </p>
              <p className="text-lg text-purple-600 font-bold">- Jamie Wave</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-100 px-6 lg:p-4 flex flex-col lg:flex-row justify-around items-center w-64 h-56 ml-8 lg:m-none lg:h-full lg:w-full rounded-lg shadow-lg">
            <div className='hidden lg:flex w-1/3 h-36 bg-gray-800 rounded-full'>
              <img src={image} alt="testimonial" className='rounded-full' />
            </div>
            <div className='w-full lg:w-1/2 py-4 text-gray-600'>
              <p className="text-lg">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-8' fill='purple'>
                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                  </svg>
                </span>
                "This platform makes it easy to get my music on all major streaming services quickly."
              </p>
              <p className="text-lg text-purple-600 font-bold">- Sam Rhythm</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-100 px-6 lg:p-4 flex flex-col lg:flex-row justify-around items-center w-64 h-56 ml-8 lg:m-none lg:h-full lg:w-full rounded-lg shadow-lg">
            <div className='hidden lg:flex w-1/3 h-36 bg-gray-800 rounded-full'>
              <img src={image} alt="testimonial" className='rounded-full' />
            </div>
            <div className='w-full lg:w-1/2 py-4 text-gray-600'>
              <p className="text-lg">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-8' fill='purple'>
                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                  </svg>
                </span>
                "I've seen a significant increase in my fanbase since using this platform. It's a game-changer."
              </p>
              <p className="text-lg text-purple-600 font-bold">- Taylor Melody</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <img src={bottom} alt="decoration" className='w-8 h-8 lg:w-16 lg:h-16 absolute right-0 lg:right-48 mb-12' />
    </>
  );
}
