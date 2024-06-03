import React from "react";
import { Chrono } from "react-chrono";

//images
import image from '../img/image.png';

const Timeline = () => {
  const items = [
    {
      title: "Step 1",
      cardTitle: "Sign Up",
      cardSubtitle: "Create your account to get started",
      cardDetailedText: "Join our platform by creating an account. Provide your basic details and set up your profile to start distributing your music.",
    },
    {
      title: "Step 2",
      cardTitle: "Upload Your Music",
      cardSubtitle: "Easily upload your tracks",
      cardDetailedText: "Upload your music tracks to our platform. We support various audio formats and provide a user-friendly interface for seamless uploading.",
    },
    {
      title: "Step 3",
      cardTitle: "Distribute to Platforms",
      cardSubtitle: "Reach your audience",
      cardDetailedText: "Select the platforms where you want to distribute your music. We connect you with popular music streaming services like Spotify, Apple Music, and more.",
    },
    {
      title: "Step 4",
      cardTitle: "Monitor Performance",
      cardSubtitle: "Track your music's success",
      cardDetailedText: "Use our analytics tools to monitor the performance of your music. Get detailed insights on plays, downloads, and earnings.",
    },
  ];

  return (
    <div style={{ width: '100vw', height: 'auto', marginTop: '12rem' }}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" disableToolbar="true" activeItemIndex={1} />  
    </div>
  );
}

export default Timeline;
