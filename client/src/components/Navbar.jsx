import React from 'react'

//components
import Logo from '../img/LM_logo 1.png';

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
    <div className='fixed top-0 w-full'>
        {/* On large  and extra large devices only */}
        <div className="mt-6 w-full items-center hidden md:flex">
            <div className="w-1/6 mx-4">
                <img src={Logo} alt='logo' className='w-1/3' />
            </div>
            <div className="w-1/2 flex text-sm text-gray-800 justify-end">
                <a href="#" className="p-2">What we do</a>
                <a href="#" className="p-2">Pricing</a>
                <a href="#" className="p-2">About Us</a>
                <a href="#" className="p-2">Contact Us</a>
            </div>
            <div className="w-1/3 mx-4 flex text-sm justify-end">
                <button className="px-4 border border-gray-400 text-gray-800  mx-6 h-12 rounded-lg">Login</button>
                <button className="px-4  h-12 bg-purple-700 text-white rounded-lg">Sign Up</button>
            </div>
        </div>

        {/* On small and medium devices only */}
        <div className="flex mt-6 w-full justify-between items-center md:hidden">
            <div className="w-1/6 mx-4">
                <img src={Logo} alt='logo' className='w-2/3' />
            </div>
            
            <div className='w-1/2 mx-4'>
                <div onClick={openLinks}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-right cursor-pointer text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className="w-full bg-purple-50 flex-col rounded items-end text-gray-800 text-sm px-4 py-4 mt-6 -mb-80 pt-12 justify-end hidden" id='links'>
                    <a href="#" className="p-2 transition ease-in-out duration-700 hover:text-purple-600">What we do</a>
                    <a href="#" className="p-2 transition ease-in-out duration-700 hover:text-purple-600">Pricing</a>
                    <a href="#" className="p-2 transition ease-in-out duration-700 hover:text-purple-600">About Us</a>
                    <a href="#" className="p-2 transition ease-in-out duration-700 hover:text-purple-600">Contact Us</a>
                    <div className="w-full flex flex-col mt-8 text-xs items-end">
                        <button className="px-8 py-2 w-full border border-gray-400 text-gray-800 rounded-lg transition ease-in-out duration-700 hover:border-purple-700">Login</button>
                        <button className="px-8 py-2 w-full mt-2 h-8 bg-purple-700 text-white rounded-lg transition ease-in-out duration-700 hover:opacity-80">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar