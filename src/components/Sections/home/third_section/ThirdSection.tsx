import React from "react";
import { fetchThirdSection } from "@/utils/api";
import { Icon1 } from "./icons";
import { Card } from "./card";
import Image from "next/image";
import "./style.css"

export default async function () {
  const data = await fetchThirdSection();
  const thirdSectionData = data?.data;
  const feedback = data?.data?.feedbackCard?.feedback || [];

  return (
    <div className="font-inter  pt-10 px-3">
      <div className="text-center">
        <h1 className="text-[#1E293B] text-[2.5rem] font-bold font-playfair">
          {thirdSectionData.h1text}
        </h1>
        <h2 className="text-[#1E293B] text-[2rem] font-semibold mt-10 font-playfair">
          {thirdSectionData.h2text}
        </h2>
        <p className="text-[#64748B] text-lg mt-5">
          {thirdSectionData.description}
        </p>
      </div>

     <Card feedback={feedback} />

    
    </div>
  );
}
