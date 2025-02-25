"use client";
import React, { useState } from "react";
import Image from "next/image";

interface HomeVideoProps {
  homeData: {
    videoUrl: string;
  };
}

const HomeVideo: React.FC<HomeVideoProps> = ({homeData}) => {
  const [isPlaying, setIsPlaying] = useState(false);

 
  return (
    <div className="relative w-full max-w-4xl     mx-auto">
      {!isPlaying ? (
        <div className="relative">
          <Image
            src="/videos/preview.jpg" // Static preview image
            alt="Video Preview"
            width={1280}
            height={720}
            className="w-full rounded-lg shadow-lg cursor-pointer"
            onClick={() => setIsPlaying(true)}
          />
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => setIsPlaying(true)}
          >
            <span className="rounded-full size-[80px] bg-white flex items-center justify-center bg-opacity-[0.8]">
              ▶ 
            </span>
          </button>
        </div>
      ) : (
        <video
          className="w-full rounded-lg shadow-lg"
          controls
          autoPlay
          playsInline
        >
          <source src="http://localhost:1337/uploads/project3_fffe38882d.mp4" type="video/mp4" />
          <source src="/videos/landing-video.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
};

export default HomeVideo;
