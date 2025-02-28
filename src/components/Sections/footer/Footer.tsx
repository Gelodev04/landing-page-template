import React from "react";
import { fetchFooter } from "@/utils/api";
import { LogoIcon } from "@/components/Navbar/LogoIcon";
import Contact from "./Contact";

export default async function Footer() {
  const data = await fetchFooter();
  const footerData = data?.data;

  return (
    <section className="bg-gray-100 font-inter px-4 pt-14 mt-12">
      <div className="pb-3">
        <LogoIcon />
      </div>
      <h1 className="text-[1.3rem] text-[#1E293B] font-semibold pb-10">
        {footerData.title}
      </h1>

      <div className="border-b">
        {data?.data?.sources &&
          Object.entries(data.data.sources).map(([category, links]) => (
            <div key={category} className="mb-8 ">
              <h3 className="text-lg text-[#1E293B] font-semibold">
                {category}
              </h3>{" "}
              <ul className="mt-2 space-y-1 ">
                {Object.entries(links as { [key: string]: string }).map(
                  ([name, url]) => (
                    <li key={name}>
                      <span className="text-gray-500 active:text-blue-500 active:bg-blue-200  cursor-pointer">
                        {name}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
      </div>

      <div className="py-7 space-y-3">
        <Contact />
        <p className="text-gray-500">© Cruip.com. All rights reserved.</p>
      </div>
    </section>
  );
}
