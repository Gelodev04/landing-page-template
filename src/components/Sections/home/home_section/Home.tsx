import React from "react";
import { fetchHome } from "@/utils/api";
import HomeVideo from "../../../video/HomeVid";
import "./home.css";
import { Arrow } from "./icons";

export const HomeSection = async () => {
  const data = await fetchHome();
  const homeData = data?.data;

  return (
    <div
      className="  flex flex-col justify-center items-center text-center px-5   pb-20 xl:flex-row xl:justify-center xl:items-center xl:h-[100vh] xl:text-left  xl:gap-16 relative bg-[#1E293B]"
     
    >
    

      <div className="xl:w-[600px]">
        <div className="pt-[5rem] max-w-[800px]">
          <h1 className={`text-[3.3rem] xl:text-[4.5rem] text-[#F1F5F9] font-bold font-playfair`}>
            {homeData.H1element}
          </h1>
          <h2 className="text-[1.5rem] text-[#94A3B8] font-inter">
            {homeData.Description}
          </h2>
        </div>
        <div className="flex flex-col xl:justify-start justify-center items-center gap-4   mt-8 md:flex-row">
          <button className="text-white w-[20rem] md:w-64 bg-[#2174ea] hover:bg-[#1D4ED8] duration-100 ease-in text-xl py-4 rounded font-inter flex justify-center items-center gap-1">
            <span>{homeData.Button1}</span>
            <span><Arrow/></span>
          </button>
          <button className="text-white w-[20rem] md:w-64 bg-[#334155] hover:bg-[hsl(217,33%,25%)] duration-100 ease-in  text-xl py-4 rounded font-inter flex justify-center items-center gap-1">
            <span>{homeData.Button2}</span>
            <span><Arrow/></span>
          </button>
        </div>
      </div>

      <div className="mt-[5rem]  max-w-[700px] ">
        <HomeVideo homeData={homeData} />
      </div>
    </div>
  );
};
