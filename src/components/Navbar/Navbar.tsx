"use client";
import Link from "next/link";
import { LogoIcon } from "./LogoIcon";
import { Menu } from "./menu";
import { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [show, setIsShow] = useState(false);

  const menuItems = [
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Wall of Love", path: "/" },
    { name: "Resources", path: "/" },
  ];

  return (
    <nav className="flex justify-between items-center  absolute w-full z-[999999] px-4 py-2 bg-[#1E293B]">
      <Link href="/">
        <LogoIcon />
      </Link>
      <ul className="hidden">
        {menuItems.map((item, index) => (
          <li className="" key={index}>
            {item.name}
          </li>
        ))}
      </ul>

      {/* MOBILE RESPONSIVE */}
      <button onClick={() => setIsShow(!show)} className="md:hidden ">
        <Menu />
      </button>

      {/* Mobile Menu */}
      {show && (
        <div
          className={`absolute top-full left-0 w-full h-screen bg-white shadow-md  flex flex-col md:hidden p-6 fade-in-top-navbar -z-[99999]`}
        >
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <p
                  className={`text-xl text-[#1e293b] font-[500] cursor-pointer py-2 active:bg-opacity-[0.1] active:bg-[#2174ea] active:text-[#2174ea] ${
                    index === 3 ? "border-b " : ""
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-[#64748B] py-3 px-5 space-y-2 border-b pb-6 ">
            <p className="cursor-pointer active:text-[#2174ea]">404</p>
            <p className="cursor-pointer active:text-[#2174ea]">Support</p>
          </div>

          <div className="flex justify-center mt-10">
            <button className="text-white bg-[#2174ea] text- py-2 w-[400px] rounded font-inter">
              <span>Sign in</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
