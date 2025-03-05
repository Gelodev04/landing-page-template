import React from "react";
import { fetchPricingExtra } from "@/utils/api";

export default async function Section() {
  const data = await fetchPricingExtra();

  const fetchSection = data?.data;
  return (
    <div className="flex flex-col justify-center items-center font-inter px-4">
      <div className="shadow-xl px-3 h-[250px]  my-5 flex flex-col justify-center items-center gap-5">
        <h1 className="text-[#1E293B] text-[2rem] font-playfair font-semibold text-center">{fetchSection.FirstText}</h1>
        <button className="bg-[#1D4ED8] text-white py-2 px-5 rounded-sm text-lg">Contact us</button>
      </div>

      <div>
        <h1 className="text-[3.1rem] font-playfair font-semibold text-[#1E293B] text-center py-10">{fetchSection.h1text}</h1>

            <div className="flex flex-col gap-8 w-4/5 mx-auto">
                {fetchSection.workers_wallet.card.map((type: any, index: number) => (
                    <div key={index} className="space-y-3">
                        
                        <h1 className="text-maintext text-3xl font-semibold font-playfair">{type.title}</h1>
                        <p className="text-xl text-secondarytext">{type.description}</p>
                        <p className="text-maintext text-lg">{type.price}</p>
                    </div>
                ))}
            </div>
      </div>
    </div>
  );
}
