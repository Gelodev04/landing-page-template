import React from "react";
import { fetchFourthSection } from "@/utils/api";
import Image from "next/image";
import { Icon1 } from "./icons";
export const FourthSection = async () => {
  const data = await fetchFourthSection();
  const fourthSectionData = data?.data;
  const features = data?.data?.features?.card || [];

  return (
    <div className="font-inter mt-16 ">
      <div className="bg-[#1E293B] h-[500px] w-full absolute -z-10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 86%, 0% 100%)" }}></div>

      <h1 className=" font-playfair text-[#F1F5F9] text-[2.2rem] font-bold text-center px-5 py-14">
        {fourthSectionData.h1text}
      </h1>

      <ul className="px-5">
        {features.map((feature: any, index: number) => (
          <li key={index} className="mb-20 relative">
            <div className="relative inline-block" >
              <Image
                className="h-auto relative z-10"
                src={feature.img}
                alt="image"
                width={500}
                height={500}
              />
              <div className="absolute bottom-4 left-3 w-full h-full border-2 border-[#1E293B] border-opacity-[0.2] z-0 " ></div>
            </div>

            <div className="absolute -top-[40px] left-[25px] z-10">
              <div className="size-[75px] rounded-full bg-[#2174EA]   text-white  font-playfair font-semibold text-[1.7rem] text-center flex justify-center items-center">
                {index + 1}
              </div>
            </div>
            <h2 className="font-playfair font-semibold text-[#1E293B] text-[1.8rem] py-2">
              {feature.title}
            </h2>
            <p className="text-[#64748B] text-lg">{feature.description}</p>
          </li>
        ))}
      </ul>

      
    </div>
  );
};
