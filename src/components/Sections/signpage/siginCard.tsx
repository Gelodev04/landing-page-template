import { LogoIcon } from "@/components/Navbar/LogoIcon";
import React from "react";
import { Loginwith } from "./loginwith";
import LoginForm from "./form";
import Divider from "@/components/divider";
import Image from "next/image";
import { Quote } from "@/components/icons/quote";

export default function SignCard() {
  return (
    <main className="flex justify-center items-center h-screen font-inter  mx-auto ">
      <div className=" mx-5 w-[500px]  lg:w-1/2">
        <div className="max-w-[600px] mx-auto">
          <LogoIcon />
          <h1 className="font-playfair text-[2rem] font-semibold text-maintext my-8">
            Sign in to Tidy
          </h1>
          <Loginwith />
          <div className="my-4">
            <Divider />
          </div>
          <LoginForm />
        </div>
      </div>

      <div className="h-full w-1/2 hidden lg:block relative">
        <div className="absolute inset-0 bg-maintext bg-opacity-[0.8] ">
          <div className="flex items-center flex-col  h-full w-full justify-center">
            <div className="mx-5 space-y-2 max-w-[500px]">
              <h1 className="font-playfair font-bold text-[2rem] text-white">
                The Wealth Inc.
              </h1>
              <Quote />
              <p className="text-gray-400 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eligendi ut maiores nisi officia facilis laudantium
                cumque quibusdam molestiae non?{" "}
              </p>

              <div className="flex items-center gap-1">
              <div className="rounded-full size-[40px] overflow-hidden">
                  <Image
                    src="/images/avatar.jpg"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
              </div>
                  <p className="text-white">Micheal Crob</p>
                  <span className="text-gray-400"> · </span>
                  <p className="text-gray-400">CEO, The Wealth Inc.</p>
            </div>
            </div>

            
          </div>
        </div>

        <Image
          className="h-full w-full object-cover"
          src="/images/sign-in-bg.jpg"
          alt="bg"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
