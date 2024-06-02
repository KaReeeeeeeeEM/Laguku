import React from 'react';

//images
import image from '../img/image.png';

const Showcase = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between px-4 my-24 items-center'>
        <div className='md:w-1/2'>
          <img src={image} alt="pic" className='w-full md:px-8 md:h-96 object-cover rounded' />
        </div>
        <div className='md:w-1/2 py-4'>
          <h1 className='text-3xl font-bold text-gray-800 md:pl-8'>
            Discover, Stream, and Support Your Favorite Music
          </h1>
          <p className='text-lg text-gray-700 md:pl-8 mt-4'>
            Our platform connects music lovers with a vast collection of tracks from both emerging and established artists. Discover new favorites, stream music seamlessly, and support the artists you love.
          </p>
          <p className='text-lg text-purple-600 md:pl-8 mt-4'>
            Join Us and Experience the Future of Music
          </p>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
