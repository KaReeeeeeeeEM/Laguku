import React from 'react'

//images
import SignImage from '../img/signImage.png'
import top from '../img/top.png'
import squareDots from '../img/squareDots.png'
import bottom from '../img/bottom.png'
import artTop from '../img/artTop.png'
import artBottom from '../img/artBottom.png'

const SignIn = () => {
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
                    <h1 className='text-3xl font-bold'>Manage your music</h1>
                    <h2 className='text-gray-600 py-8'>Login to Continue</h2>
                    <div className='w-full md:w-1/2 flex flex-col'>
                        <span className='text-gray-800'>Email</span>
                        <input type='email' placeholder='Please enter email' className='p-2 my-4 border-2 border-gray-300 outline-none focus:border-purple-600 rounded' autoFocus />

                        <span className='text-gray-800'>Password</span>
                        <input type='password' placeholder='Please enter password' className='p-2 my-4 border-2 border-gray-300 outline-none focus:border-purple-600 rounded' />

                        <a href='#'  className='mt-2 mb-8'>
                            <span>Forgot Password?</span>
                        </a>
                        <button className='bg-purple-600 text-white p-2 rounded'>Sign In</button>

                        <button className='bg-white text-gray-800 p-2 rounded mt-4 border border-gray-600'>
                            <span>
                                <svg className='w-4 h-4 -mb-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path fill="#e01b24" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                                </svg>
                            </span>
                            Login via Google</button>
                    </div>
                    <div className='mx-16 mt-8 text-center'>
                         <span className='text-gray-600 my-4 text-center'>Don't have an account? <a href='/auth/signup' className='text-purple-600 font-bold'>Sign Up</a></span>
                    </div>
                </div>
    </div>

    </div>
  )
}

export default SignIn