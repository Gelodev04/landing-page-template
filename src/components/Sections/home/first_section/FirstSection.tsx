import React from "react";
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "./icons";
import { fetchFirstSection } from "@/utils/api";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimation";

export default async function FirstSection() {
  const data = await fetchFirstSection();
  const firstSectionData = data?.data?.FirstSecCard?.card || [];

  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];

  return (
    <div className="py-12 lg:py-32  w-full">
      <div className="grid grid-cols-1 lg:px-6 mx-auto lg:grid-cols-2 xl:grid-cols-3 gap-16 px-4 max-w-[1300px]">
        {firstSectionData.map((card: any, index: number) => {
          const IconComponent = icons[index % icons.length];

          return (
            <ScrollAnimationWrapper
              key={index}
              animationClass="animate__fadeInUp"
              delay={index * 50}
            >
              <div className="bg-white max-w-[500px]  mx-auto  rounded-lg space-y-4 ">
                <IconComponent />
                <h2 className="text-[#1e293b] text-3xl font-bold mb-2 font-playfair">
                  {card.title}
                </h2>
                <p className="text-[#cad0d9] text-xl font-inter">
                  {card.description}
                </p>
              </div>
            </ScrollAnimationWrapper>
          );
        })}
      </div>
    </div>
  );
}
