import React, { useState } from 'react';

const VideoIframe = ({ iframeSrc, thumbnailSrc, iframeTitle }) => {
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  const handleThumbnailClick = () => {
    setIsIframeVisible(true);
  };

  return (
    <div className="relative flex items-center justify-center w-6/7 mx-auto mb-48 h-60 md:h-96 pb-9/16"> {/* 16:9 Aspect Ratio */}
      {!isIframeVisible ? (
        <div
          className="absolute inset-0 w-full h-full mx-auto mt-10 flex justify-center items-center cursor-pointer"
          onClick={handleThumbnailClick}
          style={{ backgroundImage: `url(${thumbnailSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="bg-black bg-opacity-50 border-4 border-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-20 w-10 md:w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 8v8l6-4z" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          src={iframeSrc}
          title={iframeTitle}
          className="absolute inset-0 w-full h-96 mb-24"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoIframe;
