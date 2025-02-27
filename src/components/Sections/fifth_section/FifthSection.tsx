import React from "react";
import { fetchFifthSection } from "@/utils/api";

export default async function FifthSection() {
  const data = await fetchFifthSection();
  const fifthSectionData = data?.data;

  const history = data?.data?.card?.card || [];
  return (
    <div className="font-inter px-4">
      <div className="text-center">
          <h1 className="font-playfair text-[#1E293B] text-[2.2rem] font-bold">{fifthSectionData.title}</h1>
          <h2 className="text-xl text-[#64748B]">{fifthSectionData.description}</h2>
      </div>

      <ul>
        {history.map((card: any, index: number) => (
          <li key={index}>
            <h2>
              <span>{card.number}</span>
              <span>{card.symbol}</span>
            </h2>
            <p>{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
