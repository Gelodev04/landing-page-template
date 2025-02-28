import React from "react";
import { fetchPricingSection } from "@/utils/api";
import { Arrow } from "./icon";

export default async function Pricing() {
  const data = await fetchPricingSection();
  const pricingSectionData = data?.data;

  return (
    <section className="mt-[4rem] font-inter">
      <div
        className="bg-[#1E293B] h-[500px] w-full absolute -z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 86%, 0% 100%)" }}
      ></div>

      <div className="px-4">
        <h2 className="text-[2.2rem] text-[#F1F5F9] font-playfair font-bold text-center  py-10">
          {pricingSectionData.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingSectionData.card.card.map((plan: any, index: number) => (
            <div
              key={index}
              className="p-6 border rounded shadow-md bg-white min-h-[500px] flex flex-col relative"
            >
              {index === 1 && (
                <div className="absolute top-0 left-[20rem] -translate-x-1/2 -translate-y-1/2 bg-[#A7F3D0] text-[#047857] px-4 py-1  rounded-full text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="flex-grow">
                <div className="border-b pb-1">
                  <h3 className="text-xl text-[#1E293B] font-semibold">
                    {plan.title}
                  </h3>
                  <p className="text-4xl  my-2">
                    <span className="text-[#64748B] ">$</span>
                    <span className="text-[#1E293B] font-playfair font-semibold">
                      {plan.price}
                    </span>
                    <span className="text-base text-[#94A3B8]">/mo</span>
                  </p>
                  <p className="text-[#94A3B8] mb-4">{plan.description}</p>
                </div>

                <ul className="text-gray-500 space-y-4">
                  <h4 className="text-[#1E293B] mt-3">{plan.features.title}</h4>
                  {plan.features.list.map((feature: any, i: number) => (
                    <li key={i} className="text-">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-[#1D4ED8] text-white py-2 px-5 rounded w-full mt-5 flex items-center justify-center gap-1">
                <span>Start free trial </span>
                <span>
                  <Arrow />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
