import React from "react";
import { fetchPricingExtra } from "@/utils/api";
import { Icon1, Icon2, Icon3 } from "../../home/first_section/icons";
import FadeInSection from "@/components/ui/framermotion";

export default async function Section() {
  const data = await fetchPricingExtra();

  const fetchSection = data?.data;

  const icons = [Icon1, Icon2, Icon3];

  return (
    <div className="flex flex-col justify-center items-center font-inter px-4">
      <FadeInSection>
        <div className="shadow-xl px-10 h-[250px]  my-5 flex flex-col justify-center items-center gap-5 relative">
        
          <h1 className="text-[#1E293B] text-[2rem] font-playfair font-semibold text-center">
            {fetchSection.FirstText}
          </h1>
          <button className="bg-[#1D4ED8] hover:bg-[hsl(224,76%,43%)] duration-75 ease-in text-white py-2 px-5 rounded-sm text-lg">
            Contact us
          </button>
        </div>
        <div>
          <h1 className="text-[3.1rem] font-playfair font-semibold text-[#1E293B] text-center py-10">
            {fetchSection.h1text}
          </h1>
          <div className="flex flex-col gap-8 max-w-[1300px] mx-auto">
            {fetchSection.workers_wallet.card.map((type: any, index: number) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div key={index} className="space-y-3">
                  <IconComponent />
                  <h1 className="text-maintext text-3xl font-semibold font-playfair">
                    {type.title}
                  </h1>
                  <p className="text-xl text-secondarytext">{type.description}</p>
                  <p className="text-maintext text-lg">{type.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
