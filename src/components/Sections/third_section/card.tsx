"use client";
import React, { useState } from "react";
import { Icon1 } from "./icons";
import Image from "next/image";

export const Card = ({ feedback, onSelect }: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageKey, setImageKey] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setImageKey((prev) => prev + 1); // Change key to force re-render
  };

  return (
    <ul className="font-inter">
      {feedback.map((card: any, index: number) => (
        <li
          key={index}
          className={`bg-white p-6 rounded-lg space-y-2 mt-5 cursor-pointer border-2 shadow-md overflow-hidden active:bg-blue-200 duration-75 ease-in ${
            selectedIndex === index ? "border-blue-500" : "border-transparent"
          }`}
          onClick={() => handleSelect(index)}
        >
          <div className="flex gap-2">
            <div>
              <Icon1 />
            </div>
            <div
              className={`${
                selectedIndex === index ? "" : "opacity-50 grayscale"
              }`}
            >
              <h2 className="text-[#1E293B] text-xl">{card.title}</h2>
              <p className="text-[#64748B]">{card.description}</p>
            </div>
          </div>
        </li>
      ))}

      <div className={`flex justify-center mt-16`}>
        <Image
          key={imageKey}
          className="rounded-md h-auto w-[400px] fade-in-top"
          src="/images/features2.png"
          alt="image"
          width={500}
          height={500}
        />
      </div>
    </ul>
  );
};
