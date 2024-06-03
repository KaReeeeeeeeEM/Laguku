import React from 'react';

//components
import Logo from '../img/LM_logo 1.png';
import bell from '../img/bell.png';
import avatar from '../img/avatar.png';
import home from '../img/home.png';
import barchart from '../img/barchart.png';
import headphones from '../img/headphones.png';
import micoutline from '../img/micoutline.png';
import musicoutline from '../img/musicoutline.png';
import layersoutline from '../img/layersoutline.png';

const Navbar = () => {

    let openLinks = () =>{
        let links = document.getElementById('links');
        if(links.style.display === 'flex'){
            links.style.display = 'none';
            links.style.transition = 'all 2s ease-in-out';
        }else{
            links.style.display = 'flex';
        }
    }

  return (
    <div className='fixed top-0 w-full z-50 bg-white'>
        {/* On large and extra large devices only */}
        <div className="mt-3 w-full items-center hidden md:flex">
            <div className="w-48 mx-4 my-2 flex items-center">
                <img src={Logo} alt='logo' className='w-12' />
                <h1 className='ml-6 text-lg font-bold'>User Id</h1>
            </div>
            <div className="w-1/2 flex text-md text-gray-800 justify-end">
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                      <img src={home} alt='home' className='pr-2 w-6' />
                  </span>
                  Home
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                    <img src={micoutline} alt='home' className='pr-2 w-6' />
                  </span>
                  Artist
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                    <img src={layersoutline} alt='home' className='pr-2 w-6' />
                  </span>
                  Album
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                    <img src={musicoutline} alt='home' className='pr-2 w-6' />
                  </span>
                  Song
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                     <img src={headphones} alt='home' className='pr-2 w-6' />
                  </span>
                  RBT
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                    <img src={barchart} alt='home' className='pr-2 w-6' />
                  </span>
                  Report
                </a>
            </div>
            <div className="w-1/3 mx-4 flex text-lg items-center justify-end">
                    <button className="px-4 hover:text-purple-300 transition ease-in-out duration-700 text-gray-200 mx-6 h-10 rounded">
                        <img src={bell} alt='#' className='w-6' />
                    </button>
                    <h1 className='text-sm mr-4 font-bold'>Hi, Raymond B!</h1>
                  <a href='#' className='w-8 h-8 bg-gray-800 rounded-full'>
                      <img src={avatar} alt='avatar' className='rounded-full' />
                  </a>
            </div>
        </div>

        {/* On small and medium devices only */}
        <div className="flex mt-2 w-full justify-between items-center md:hidden">
            <div className="w-1/6 mx-4 my-2">
                <img src={Logo} alt='logo' className='w-2/3' />
            </div>
            
            <div className='w-1/2 mx-4'>
                <div onClick={openLinks}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-right cursor-pointer text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className="w-full bg-purple-50 flex-col rounded items-start text-gray-800 text-sm px-4 py-4 mt-6 -mb-96 pt-12 justify-end hidden" id='links'>
                  <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                      <img src={home} alt='home' className='pr-2 w-6' />
                  </span>
                  Home
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                    <img src={micoutline} alt='home' className='pr-2 w-6' />
                  </span>
                  Artist
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                    <img src={layersoutline} alt='home' className='pr-2 w-6' />
                  </span>
                  Album
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                    <img src={musicoutline} alt='home' className='pr-2 w-6' />
                  </span>
                  Song
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                     <img src={headphones} alt='home' className='pr-2 w-6' />
                  </span>
                  RBT
                </a>
                <a href="#" className="p-2 flex transition ease-in-out duration-700 hover:text-purple-500">
                  <span>
                    <img src={barchart} alt='home' className='pr-2 w-6' />
                  </span>
                  Report
                </a>
                <div className="w-full flex items-center mt-8 border-t-2 border-t-gray-300 pt-4 text-xs">
                  <a href='#' className='w-8 h-8 bg-gray-800 rounded-full'>
                      <img src={avatar} alt='avatar' className='rounded-full' />
                  </a>
                  <h1 className='text-sm ml-4 font-bold'>Hi, Raymond B!</h1>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
