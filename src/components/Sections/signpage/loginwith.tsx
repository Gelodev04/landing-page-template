import { Facebook } from "@/components/icons/facebook";
import { GoogleIcon } from "@/components/icons/google";
import React from "react";

export const Loginwith = () => {
  return (
    <div className="font-inter flex flex-col gap-3">
      <button className="bg-[#E11D48] relative active:bg-[hsl(347,77%,40%)] duration-100 ease-out  text-white w-full py-[10px] flex items-center justify-center hover:bg-[hsl(347,77%,45%)]">
        {/* Black box positioned to the left */}
        <div className="h-full w-[45px] absolute left-0 top-0 bg-[hsl(347,77%,40%)]">
          <div className="flex items-center justify-center h-full">
              <GoogleIcon />
          </div>
        </div>

        <span className=" text-sm">Login with Google</span>
      </button>

      <button className="bg-[#1D4ED8] relative text-white w-full py-[10px] flex items-center justify-center active:bg-[hsl(224,76%,40%)] hover:bg-[hsl(224,76%,45%)] duration-100 ease-out">
        {/* Black box positioned to the left */}
        <div className="h-full w-[45px] absolute left-0 top-0 bg-[hsl(224,76%,40%)]">
          <div className="flex items-center justify-center h-full">
              <Facebook />
          </div>
        </div>

        <span className="text-sm">Login with Facebook</span>
      </button>
    </div>
  );
};
