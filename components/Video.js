import React from 'react';

export default function Video({ copy = {} }) {
  return (
    <div className="">
      <video  poster="/images/video-static.png" className='w-full max-w-screen-lg mx-auto' autoPlay muted>
        <source src="" type="video/mp4" />
      Your browser does not support the video tag.
      </video>
    </div>
  );
}

