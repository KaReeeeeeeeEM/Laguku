import React from 'react'

const CTA = () => {
  return (
    <div className='mt-24'>
        <div className='bg-purple-100 flex flex-col lg:flex-row items-center justify-around lg:h-96 py-8 lg:py-0'>
            <div className='text-center lg:text-start lg:w-1/3 mb-8 lg:mb-0 p-0 lg:pl-16'>
                <h2 className='text-lg text-purple-600 uppercase font-extrabold'>Ready to get started?</h2>
                <h3 className='text-4xl font-extrabold'>Sign up now <br /> and get 30 days free!</h3>
            </div>
            <div className='w-full lg:w-2/3 px-8 text-start'>
            <p className='text-gray-500'>
                Discover the future of music distribution with our cutting-edge platform. Seamlessly share your tracks with a global audience and watch your fanbase grow. Join thousands of artists who have already revolutionized their careers.
                <br/><br/>
                Our platform offers unparalleled reach, easy-to-use tools, and top-notch support to ensure your music reaches every corner of the world. Whether you're an indie artist or an established name, we have the resources you need to succeed.
                <br/><br/>
                Don't miss out on the opportunity to take your music career to the next level. Sign up today and start distributing your music like never before. Experience the difference and let your sound be heard everywhere.
                <br/><br/>
                Ready to get started? Join us now and become a part of the new era in music distribution. Your fans are waiting. Sign up today and get 30 days free!
            </p>
            </div>
        </div>
    </div>
  )
}

export default CTA