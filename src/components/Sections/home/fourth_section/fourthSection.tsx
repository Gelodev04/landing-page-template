import React from "react";
import { fetchFourthSection } from "@/utils/api";
import Image from "next/image";
import { Icon1 } from "./icons";
import FadeInSection from "@/components/ui/framermotion";
export const FourthSection = async () => {
  const data = await fetchFourthSection();
  const fourthSectionData = data?.data;
  const features = data?.data?.features?.card || [];

  return (
    <div className="font-inter mt-16 ">
      <FadeInSection>
        <div
          className="bg-[#1E293B] h-[500px] w-full absolute -z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 86%, 0% 100%)" }}
        ></div>
          <h1 className=" font-playfair text-[#F1F5F9] text-[2.2rem] font-bold text-center px-5 py-14 lg:py-[6rem] lg:text-[3rem]">
            {fourthSectionData.h1text}
          </h1>


            <ul className="px-5 flex flex-col items-center  lg:grid  lg:grid-cols-3 gap-10  lg:w-auto lg:max-w-[1400px] ">
              {features.map((feature: any, index: number) => (
                  <li key={index} className="mb-20 relative  max-w-[500px] ">
                    <div className="relative inline-block group left-1/2 -translate-x-1/2">
                      <div className="overflow-hidden  ">
                        <Image
                          className="h-auto relative z-10 group-hover:scale-110 duration-200 ease "
                          src={feature.img}
                          alt="image"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="absolute bottom-4 left-3 w-full h-full border-[3px] border-[#1E293B] border-opacity-[0.2] z-0 group-hover:bottom-0 group-hover:left-0 duration-200 ease"></div>
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
   
      </FadeInSection>
    </div>
  );
};
