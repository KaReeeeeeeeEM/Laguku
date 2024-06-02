import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800'>
        <div className='container mx-auto py-8 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
                <p className='text-gray-400'>
                    Empowering artists worldwide, our platform provides the tools and resources you need to distribute your music effortlessly. Join a community of passionate musicians and get your tracks heard globally. Transform your music career with our innovative solutions and dedicated support.
                </p>
            </div>
            <div>
                <h3 className='text-white font-bold'>Services</h3>
                <ul className='text-gray-200 font-bold'>
                    <li>Global Music Distribution</li>
                    <li>Streaming & Downloads</li>
                    <li>Royalty Management</li>
                    <li>Artist Promotion</li>
                </ul>
            </div>
                <div>
                    <h3 className='text-white font-bold'>Contact Us</h3>
                    <ul className='text-gray-200 font-bold'>
                        <li>Phone: (255)-676-907776</li>
                        <li>Email:
                            <a href='mailto: '>laguku@gmail.com</a>
                          </li> 
                        <li>Address: Sayansi Kijitonyama, CoICT campus, UDSM</li>
                    </ul>
                    </div>
                <div>
                    <h3 className='text-white font-bold'>Product</h3>
                    <ul className='text-gray-200 font-bold'>
                        <li>Music</li>
                        <li>Video</li>
                        <li>Promo Card</li>
                    </ul>
               </div>
              </div>
                <div className='w-full flex justify-between border-t-2 mt-4 border-t-gray-600'>
                  <div>
                    <h2 className='text-gray-200 text-xs font-extrabold'>Copyright {new Date().getFullYear()} <br /> 
                    Laguku by JoKareem <br />
                    Privacy Policy Terms of Services </h2>
                  </div>
                  <div>
                    <h2 className='text-purple-600 font-bold'>Supported by joka enterprises</h2>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default Footer