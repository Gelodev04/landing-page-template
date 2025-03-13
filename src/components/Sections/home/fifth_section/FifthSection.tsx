import React from "react";
import { fetchFifthSection } from "@/utils/api";
import Image from "next/image";
import { Icon1 } from "./icons";
import FadeInSection from "@/components/ui/framermotion";

export default async function FifthSection() {
  const data = await fetchFifthSection();
  const fifthSectionData = data?.data;

  const history = data?.data?.card?.card || [];

  const colors = ["#2174EA", "#F59E0B", "#10B981"];
  return (
    <main className="font-inter px-4 pb-20">
      <FadeInSection>
        <section className="w-auto max-w-[700px] lg:max-w-[1300px] mx-auto">
          <div className="text-center lg:w-[800px] mx-auto lg:my-10">
            <h1 className="font-playfair text-[#1E293B] text-[2.2rem] lg:text-[3.2rem] font-bold">
              {fifthSectionData.title}
            </h1>
            <h2 className="text-xl lg:text-2xl text-[#64748B]">
              {fifthSectionData.description}
            </h2>
          </div>
            <div className="lg:flex flex-row-reverse">
              <div className="flex justify-center mt-16 mb-10 h-auto ">
                <Image
                  className="h-full w-full"
                  src="/images/target.png"
                  alt="images"
                  width={500}
                  height={500}
                />
              </div>
              <ul className="flex flex-col gap-7">
                {history.map((card: any, index: number) => (
                  <li key={index}>
                    <div className="flex items-center gap-1">
                      <Icon1 color={colors[index % colors.length]} />
                      <h2 className="text-[#1E293B] font-playfair mb-3">
                        <span className="text-[2.3rem] lg:text-[2.9rem] font-bold">
                          {card.number}
                        </span>
                        <span className="text-[2.4rem] font-semibold">
                          {card.symbol}
                        </span>
                      </h2>
                    </div>
                    <p className="text-[#64748B] text-xl">{card.description}</p>
                  </li>
                ))}
              </ul>
            </div>
        </section>
      </FadeInSection>
    </main>
  );
}
