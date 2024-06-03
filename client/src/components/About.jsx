import React from 'react'

//images
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
import image4 from '../img/image4.png';
import image5 from '../img/image5.png';
import image6 from '../img/image6.png';
import image7 from '../img/image7.png';

const About = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-evenly'>
        <PicCard img={image2} />  
        <PicCard img={image3} />  
        <PicCard img={image4} />  
    </div>
    <div className='flex flex-col md:flex-row items-center justify-evenly'>
        <PicCard img={image5} />  
        <PicCard img={image6} />  
        <PicCard img={image7} />  
    </div>
    <div className='mb-4 flex justify-center items-center'>
        <a href="/auth/signin">
            <button className='px-6 py-2 bg-purple-900 text-white text-lg font-bold rounded-full transition ease-in-out duration-700 hover:opacity-80'>
                Explore Artist 
                <span className='text-3xl ml-2'>&#8594;</span>    
            </button>
        </a>
    </div>
    </>
  )
}

export default About

export const PicCard = ({img, title, text}) => {
  return (
    <div className='w-full md:w-1/3 px-4 my-4 md:py-8 transition ease-in-out duration-500 cursor-pointer hover:transform hover:scale-105'>
        <div className='w-full md:h-96 bg-gray-200'>
            <img src={img} alt='pic' className='w-full h-full object-cover rounded' />
        </div>
    </div>
  )
}