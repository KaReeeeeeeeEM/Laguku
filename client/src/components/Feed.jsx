import { MusicalNoteIcon, CloudArrowUpIcon, UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

//images
import image from '../img/image.png';
import spikes from '../img/spikes.png';
import feed1 from '../img/feed1.png';
import feed2 from '../img/feed2.png';
import feed3 from '../img/feed3.png';
import feed4 from '../img/feed4.png';

const features = [
  {
    name: 'Upload Music Easily',
    description:
      'Effortlessly upload your tracks to our platform and reach a global audience. Our user-friendly interface ensures a smooth experience.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'High-Quality Streaming',
    description:
      'Enjoy high-fidelity streaming on any device. Our platform ensures that your music sounds great, no matter where it’s played.',
    icon: MusicalNoteIcon,
  },
  {
    name: 'Connect with Fans',
    description:
      'Build a dedicated fanbase by connecting with listeners directly. Engage with your audience through comments, shares, and more.',
    icon: UsersIcon,
  },
  {
    name: 'Secure and Reliable',
    description:
      'Our platform uses advanced security measures to protect your music and personal information, giving you peace of mind.',
    icon: ShieldCheckIcon,
  },
];

export default function Feed() {
  return (
    <div className='lg:flex items-center justify-center'>
    <div className='w-1/5 relative left-24 mb-10 hidden lg:flex lg:justify-end lg:items-center'>
        <div className='flex flex-col py-8 items-center bg-purple-100 rounded-lg w-full px-8'>
            <div className='w-2/3 h-32 relative right-4 rounded-full mt-2'>
                <img src={feed1} alt='music' className='w-full h-full rounded-full' />
            </div>
            <div className='w-2/3 h-32 relative left-4 rounded-full mt-16'>
                <img src={feed2} alt='music' className='w-full h-full rounded-full' />
            </div>
            <div className='w-2/3 h-32 relative right-4 rounded-full mt-16'>
                <img src={feed3} alt='music' className='w-full h-full rounded-full' />
            </div>
            <div className='w-2/3 h-32 relative left-4 rounded-full mt-16 mb-2'>
                <img src={feed4} alt='music' className='w-full h-full rounded-full' />
            </div>
        </div>
    </div>
    <div className="bg-indigo-50 lg:w-full lg:mr-8 py-16 mb-12 align-start">
        <span>
            <img src={spikes} alt="spikes" className='w-12 md:w-32 md:h-24 h-12 absolute right-12 -mt-20 md:-mt-24' />
        </span>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-extrabold leading-7 uppercase text-purple-600">Why Laguku</h2>
          <p className="mt-2 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Empowering Artists and Fans Alike
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how our platform can help you share your music, connect with listeners, and grow your fanbase. Seamlessly upload, stream, and engage with your audience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl md:max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative md:ml-24 px-16 py-4 transform ease-in-out duration-500 bg-white hover:cursor-pointer hover:scale-105 rounded-lg shadow-md">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 m-4 rounded-full items-center font-extrabold justify-center bg-purple-300">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  );
}
