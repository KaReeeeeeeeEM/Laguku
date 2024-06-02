import React from 'react'

//images
import SignImage from '../img/signImage.png'
import top from '../img/top.png'
import squareDots from '../img/squareDots.png'
import bottom from '../img/bottom.png'
import artTop from '../img/artTop.png'
import artBottom from '../img/artBottom.png'

const SignUp = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-screen w-full'>
                <div className='hidden md:flex flex-col md:w-1/2'>                 
                        <div>
                            <img src={top} alt='top' className='w-24 ml-24 -mb-8' />
                        </div>
                        <div className='w-full'>
                            <img src={SignImage} alt='sign in' className='w-1/2 mx-auto' />
                        </div>
                        <div>
                            <img src={bottom} alt='bottom' className='w-24 absolute left-1/3 bottom-64 -z-10' />
                        </div>
                        <div className='mx-auto w-full'>
                            <h2 className='text-lg font-extrabold w-2/3 ml-28 mt-12 text-start'>
                                "Joining Laguku has been a game-changer for our band. Seamless distribution process and 
                                excellent support have allowed us to focus on creating music while reaching a global audience. Our latest album
                                saw a 50% increase in streams within the first month, thanks to the platform's extensive network. We couldn't 
                                be happier!"
                            </h2>
                            <h3 className='text-lg font-extrabold text-purple-800 ml-28 mt-6'>Noah Band</h3>
                            <p className='text-md text-gray-600 ml-28 mb-8'>Group Music</p>
                        </div>
                        <img src={artBottom} alt='art' className='w-1/3 -z-10 absolute bottom-0 left-0' />
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-start items-start px-6 md:pl-16'>
                    <img src={artTop} alt='art' className='w-full md:w-1/2 -z-10 absolute top-0 right-0' />
                    <h1 className='text-3xl font-bold'>Get Started</h1>
                    <h2 className='text-gray-600 py-8'>Enter your details to continue</h2>
                    <div className='w-full md:w-1/2 flex flex-col'>
                    <span className='text-gray-800'>Username</span>
                        <input type='text' placeholder='Enter your username' className='p-2 my-4 border-2 border-gray-300 outline-none focus:border-purple-600 rounded' autoFocus />

                        <span className='text-gray-800'>Email</span>
                        <input type='email' placeholder='Please enter a valid email' className='p-2 my-4 border-2 border-gray-300 outline-none focus:border-purple-600 rounded'/>

                        <span className='text-gray-800'>Password</span>
                        <input type='password' placeholder='Please enter password' className='p-2 my-4 border-2 border-gray-300 outline-none focus:border-purple-600 rounded' />

                        <span className='text-gray-800'>Confirm Password</span>
                        <input type='password' placeholder='Confirm password' className='p-2 my-4 border-2 border-gray-300 outline-none focus:border-purple-600 rounded' />
                        
                        <a href='/options' className='bg-purple-600 text-white p-2 rounded text-center'>
                            Continue
                        </a>
                    </div>
                    <div className='mx-16 mt-8 text-center'>
                         <span className='text-gray-600 my-4 text-center'>Already have an account? <a href='/auth/signin' className='text-purple-600 font-bold'>Sign In</a></span>
                    </div>
                </div>
    </div>

    </div>
  )
}

export default SignUp