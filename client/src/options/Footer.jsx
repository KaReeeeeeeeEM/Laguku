import React from 'react'

const Footer = () => {
  return (
    <div className='z-50 bg-white'>
      <div className='fixed flex justify-between items-center bottom-0 w-full'>
        {/* <div>
          <h2 className='text-gray-800 text-xs font-extrabold flex md:hidden'>Copyright {new Date().getFullYear()} <br />
            Laguku by JoKareem 
            </h2>
        </div> */}
        <div className='absolute bottom-0 left-0 pl-4'>
          <h2 className='md:flex text-gray-800 md:justify-start text-sm font-extrabold hidden'>
            Copyright {new Date().getFullYear() + " "} 
            Laguku by JoKareem 
            Privacy Policy Terms of Services 
          </h2>
        </div>
        <div>
          <h2 className='hidden lg:flex text-gray-600 font-bold text-sm mr-8 absolute right-0 bottom-0'>Supported by joka enterprises</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer