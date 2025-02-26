import React from "react";
import { Icon1 } from "../icons/FirstSectionIcons";
import fetchFirstSection from "@/utils/fetchFirstSection";

export default async function FirstSection() {
  const data = await fetchFirstSection();
  const firstSectionData = data?.data?.FirstSecCard?.card || [];

  console.log(firstSectionData);
  return (
    <div className="py-12 px-6">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {firstSectionData.map((card: any, index: number) => (
          <div key={index} className="bg-white p-6  rounded-lg space-y-2">
             <Icon1 />
            <h2 className="text-[#1e293b] text-3xl font-bold mb-2 font-playfair">{card.title}</h2>
            <p className="text-[#64748B] text-xl font-inter">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
