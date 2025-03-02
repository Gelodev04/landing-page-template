"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon1 } from "../Sections/home/home_section/icons";

interface HomeVideoProps {
  homeData: {
    videoUrl: string;
  };
}

const HomeVideo: React.FC<HomeVideoProps> = ({ homeData }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-4xl     mx-auto">
      {!isPlaying ? (
        <div className="relative">
          <Image
            src="/images/hero-image-01.jpg" // Static preview image
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
            <Icon1 />
          </button>
        </div>
      ) : (
        <video
          className="w-full rounded-lg shadow-lg"
          controls
          autoPlay
          playsInline
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default HomeVideo;
