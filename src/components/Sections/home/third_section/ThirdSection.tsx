import React from "react";
import { fetchThirdSection } from "@/utils/api";
import { Icon1 } from "./icons";
import { Card } from "./card";
import Image from "next/image";
import "./style.css";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimation";

export default async function () {
  const data = await fetchThirdSection();
  const thirdSectionData = data?.data;
  const feedback = data?.data?.feedbackCard?.feedback || [];

  return (
    <div className="font-inter  pt-10 px-3">
      <div className="max-w-[800px] lg:max-w-[1300px] mx-auto ">
        <div className=" ">
          <ScrollAnimationWrapper animationClass="animate__fadeIn">
          <h1 className="text-[#1E293B] text-[2.5rem] lg:text-[3rem] font-bold font-playfair text-center">
            {thirdSectionData.h1text}
          </h1>
          </ScrollAnimationWrapper>


          <ScrollAnimationWrapper>
            <div className="">
              <Card feedback={feedback} thirdSectionData={thirdSectionData} />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}
