import React from 'react'

//images
import option1 from '../img/option1.png'
import option2 from '../img/option2.png'
import option3 from '../img/option3.png'
import artBottom from '../img/artBottom.png'
import { Link } from 'react-router-dom'

const OptionsBody = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:overflow-hidden mt-20 lg:mt-32'>
        <div>
            <h1 className='text-2xl font-extrabold'>Your one stop management</h1>
            <p className='text-center mb-24 lg:mb-16 text-lg'>Please select a group that you belong to</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-evenly mt-16 lg:mt-0 h-96 w-3/4 lg:justify-evenly'>
            <Link to="#" className='lg:w-1/3 mb-8 mx-4'>
                <div className='w-full h-42 lg:h-80  flex flex-col items-center justify-center lg:pt-2 bg-white hover:border-2 transition-ease-in-out duration-300 hover:scale-105 cursor-pointer hover:border-purple-600'>
                    <img src={option1} alt='option' className='w-1/2 lg:w-4/5' />
                    <h1 className='text-lg font-extrabold'>Artist</h1>
                </div>
            </Link>
            <Link to="#" className='lg:w-1/3 mb-8 mx-4'>
                <div className='w-full h-48 lg:h-80 flex flex-col items-center justify-center lg:pt-2 bg-white hover:border-2 transition-ease-in-out duration-300 hover:scale-105 cursor-pointer hover:border-purple-600'>
                    <img src={option2} alt='option' className='w-1/2 lg:w-4/5' />
                    <h1 className='text-lg font-extrabold'>Label</h1>
                </div>
            </Link>
            <Link to="#" className='lg:w-1/3 mb-8 mx-4'>
                <div className='w-full h-48 lg:h-80 flex flex-col items-center justify-center lg:pt-2 bg-white hover:border-2 transition-ease-in-out duration-300 hover:scale-105 cursor-pointer hover:border-purple-600'>
                    <img src={option3} alt='option' className='w-1/2 lg:w-4/5' />
                    <h1 className='text-lg font-extrabold'>Content Creator</h1>
                </div>
            </Link>
            <img src={artBottom} alt='art' className='w-1/3 -z-10 absolute bottom-0 left-0' />
        </div>
    </div>
  )
}

export default OptionsBody