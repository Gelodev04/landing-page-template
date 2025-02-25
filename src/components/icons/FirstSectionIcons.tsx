import React from "react";

export const Icon1 = () => {
  return (
    <svg
    width={70}
    
      className="cc3ji cdiok cn59r"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="blue"
    >
      <defs>
        <filter
          x="-17.5%"
          y="-10.4%"
          width="135%"
          height="129.2%"
          filterUnits="objectBoundingBox"
          id="fb1-a"
        >
          <feOffset
            dy="1"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="1"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <filter
          x="-43.8%"
          y="-31.2%"
          width="187.5%"
          height="187.5%"
          filterUnits="objectBoundingBox"
          id="fb1-d"
        >
          <feOffset
            dy="1"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="1"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <path
          d="M35 20H24a1 1 0 00-1 1v22a1 1 0 001 1h18a1 1 0 001-1V28h-8v-8z"
          id="fb1-b"
        ></path>
        <path id="fb1-e" d="M35 20v8h8z"></path>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb1-c">
          <stop stop-color="#FFF" offset="0%"></stop>
          <stop stop-color="#E2EEFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <rect className="ckuoi c6urr" width="64" height="64" rx="32"></rect>
      <use fill="#000" filter="url(#fb1-a)" xlinkHref="#fb1-b"></use>
      <use fill="url(#fb1-c)" xlinkHref="#fb1-b"></use>
      <use fill="#000" filter="url(#fb1-d)" xlinkHref="#fb1-e"></use>
      <use fill-opacity=".64" fill="#E2EEFF" xlinkHref="#fb1-e"></use>
    </svg>
  );
};
