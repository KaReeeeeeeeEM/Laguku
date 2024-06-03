import React from "react";

//images
import { MicrophoneIcon, MusicalNoteIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const cardDetails = [
  {
    key: 1,
    to:'/uploads/songs',
    title: 'Upload Your Tracks',
    description: "Easily upload your music to our platform. We support various formats and provide a seamless experience for artists.",
    icon: <MicrophoneIcon className='w-1/2 text-gray-500' />
  },
  {
    key: 2,
    to:'#',
    title: 'Distribute to Platforms',
    description: "Reach a global audience by distributing your music to popular streaming platforms like Spotify, Apple Music, and more.",
    icon: <CloudArrowUpIcon className='w-1/2 text-gray-500' />
  },
  {
    key: 3,
    to:'#',
    title: 'Track Your Success',
    description: "Monitor your music's performance with our advanced analytics tools. Gain insights on plays, downloads, and earnings.",
    icon: <MusicalNoteIcon className='w-1/2 text-gray-500' />
  },
]

const DashboardHero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly px-4 mt-4">
      {cardDetails.map(details => <Card key={details.key} title={details.title} description={details.description} icon={details.icon} to={details.to} />)}
    </div>
  )
}

export default DashboardHero;

const Card = ({title, description, icon, to}) =>{
  return (
    <Link to={to} className="lg:w-1/3 mt-4 lg:mt-0 lg:ml-4" >
      <div className="w-full bg-purple-200 h-48 p-4 flex flex-col items-left rounded-lg justify-center transition ease-in-out duration-500 hover:scale-105 cursor-pointer">
        <h1 className="font-bold text-2xl text-gray-600">{title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-700 w-2/3">{description}</p>
          <span className="w-1/3 h-full flex items-center justify-center">{icon}</span>
        </div>
      </div>
    </Link>
  )
}
