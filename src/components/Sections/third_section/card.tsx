"use client";
import React, { useState } from "react";
import { Icon1 } from "./icons";

export const Card = ({ feedback }: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0); 

  return (
    <ul className="font-inter">
      {feedback.map((card: any, index: number) => (
        <li
          key={index}
          className={`bg-white p-6 rounded-lg space-y-2 mt-5 cursor-pointer border-2 shadow-md ${
            selectedIndex === index ? "border-blue-500" : "border-transparent"
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          <div className="flex gap-2">
            <div>
              <Icon1 />
            </div>
            <div className={`${selectedIndex === index ? "" : "opacity-50 grayscale"}`}>
              <h2 className="text-[#1E293B] text-xl">{card.title}</h2>
              <p className="text-[#64748B]">{card.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
