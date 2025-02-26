import React from "react";
import fetchHome from "@/utils/fetchHome";
import HomeVideo from "../../video/HomeVid";
import "./home.css"

export const HomeSection = async () => {
  const data = await fetchHome();
  const homeData = data?.data;

  return (
    <div className="h-screen bg-[#1E293B] flex flex-col justify-center items-center text-center px-5 ">
      <div className="mt-20">
        <h1 className={`text-[3.1rem] text-[#F1F5F9] font-bold font-playfair`}>
          {homeData.H1element}
        </h1>
        <h2 className="text-[1.5rem] text-[#94A3B8] font-inter">
          {homeData.Description}
        </h2>
      </div>

      <div className="flex flex-col gap-4 w-96  mt-2">
        <button className="text-white bg-[#2174ea] text-xl py-3 rounded font-inter">
          {homeData.Button1}
        </button>
        <button className="text-white bg-[#334155] text-xl py-3 rounded font-inter">
          {homeData.Button2}
        </button>
      </div>

      <div className="mt-[5rem] w-full">
        <HomeVideo homeData={homeData} />
      </div>

      
    </div>
  );
};
