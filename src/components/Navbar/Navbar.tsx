import React from "react";
import Link from "next/link";
import { LogoIcon } from "./LogoIcon";
import { Menu } from "./menu";

export default function Navbar() {
  const menuItems = [
    { name: "Pricing", path: "/" },
    { name: "About", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Wall of Love", path: "/" },
    { name: "resources", path: "/" },
  ];

  return (
    <nav className="flex justify-between items-center absolute p-3 px-7 w-full z-10">
      <LogoIcon />
      <ul className="hidden">
        {menuItems.map((item, index) => (
          <li className="" key={index}>
            {item.name}
          </li>
        ))}
      </ul>

      {/* MOBILE RESPONSIVE */}
      <button>
        <Menu />
      </button>
    </nav>
  );
}
