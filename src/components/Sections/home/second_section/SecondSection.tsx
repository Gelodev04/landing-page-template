import React from "react";
import { fetchSecondSection } from "@/utils/api";
import { Icon1, Icon2, Icon3, Icon4 } from "./icons";
import Image from "next/image";

export default async function SecondSection() {
  const data = await fetchSecondSection();
  const secondSectionData = data?.data;

  const icons = [Icon1, Icon2, Icon3, Icon4];

  return (
    <div className=" bg-gray-100 text-center px-4 py-10 font-inter ">
      <div className=" max-w-[900px] mx-auto">
        <h1 className="text-[#1E293B] text-[38px] font-playfair font-[700]">
          {secondSectionData.h1text}
        </h1>
        <p className="text-[#64748B] text-[1.3rem] font-inter mt-3">
          {secondSectionData.description}
        </p>
        <ul className="grid grid-cols-2 lg:grid-cols-4 mt-10">
          {[...Array(4)].map((_, i) => {
            const IconComponent = icons[i  % icons.length];
            return (
              <li
                key={i}
                className={`text-[#1E293B] flex flex-col justify-center items-center gap-2 mb-7 ${
                  i === 0 ? "opacity-100" : "opacity-50"
                }`}
              >
                <div className="size-fit bg-white rounded-full shadow-md">
                  <IconComponent/>
                </div>
                <span className="font-semibold text-lg">
                  {secondSectionData.choices}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col items-center mt-10">
        <Image
          className="w-full h-auto max-w-screen max-h-[600px] max-w-[900px] shadow-2xl"
          width={500}
          height={500}
          src="/images/features-home-01.jpg"
          alt="image"
        />
      </div>
    </div>
  );
}
