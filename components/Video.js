import React from "react";

export default function Video({
  copy = {},
  url,
  poster,
  breakpoints,
  autoPlay,
  isMuted,
}) {
  return (
    <div className="mt-8">
      <video
        poster={poster}
        className="w-full max-w-screen-lg mx-auto"
        autoplay="autoplay"
        muted={isMuted || false}
        loop
      >
        <source src={url} type="video/mp4" />
        {copy.unsupported}
      </video>
    </div>
  );
}
