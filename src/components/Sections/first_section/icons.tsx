import React from "react";

export const Icon1 = () => {
  return (
    <svg
      width={70}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#2174EA"
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
          <stop stopColor="#FFF" offset="0%"></stop>
          <stop stopColor="#E2EEFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <rect className="ckuoi c6urr" width="64" height="64" rx="32"></rect>
      <use fill="#000" filter="url(#fb1-a)" xlinkHref="#fb1-b"></use>
      <use fill="url(#fb1-c)" xlinkHref="#fb1-b"></use>
      <use fill="#000" filter="url(#fb1-d)" xlinkHref="#fb1-e"></use>
      <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb1-e"></use>
    </svg>
  );
};

export const Icon2 = () => {
  return (
    <svg
    width={70}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#2174EA"
    >
      <defs>
        <filter
          x="-12.1%"
          y="-13.2%"
          width="124.1%"
          height="136.8%"
          filterUnits="objectBoundingBox"
          id="fb2-a"
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
        <filter
          x="-12.1%"
          y="-13.2%"
          width="124.1%"
          height="136.8%"
          filterUnits="objectBoundingBox"
          id="fb2-c"
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
        <path
          d="M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z"
          id="fb2-b"
        ></path>
        <path
          d="M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z"
          id="fb2-d"
        ></path>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb2-e">
          <stop stopColor="#FFF" offset="0%"></stop>
          <stop stopColor="#E2EEFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="32"></rect>
      <g transform="rotate(25 32.5 32.5)">
        <use fill="#000" filter="url(#fb2-a)" xlinkHref="#fb2-b"></use>
        <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb2-b"></use>
      </g>
      <g>
        <use fill="#000" filter="url(#fb2-c)" xlinkHref="#fb2-d"></use>
        <use fill="url(#fb2-e)" xlinkHref="#fb2-d"></use>
      </g>
      <path
        d="M32.5 36a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
        fillOpacity=".64"
        fill="#5091EE"
      ></path>
    </svg>
  );
};

export const Icon3 = () => {
  return (
    <svg
    width={70}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
       fill="#2174EA"
    >
      <defs>
        <filter
          x="-58.3%"
          y="-17.9%"
          width="216.7%"
          height="150%"
          filterUnits="objectBoundingBox"
          id="fb3-a"
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
        <filter
          x="-19.4%"
          y="-10.9%"
          width="138.9%"
          height="130.4%"
          filterUnits="objectBoundingBox"
          id="fb3-c"
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
        <path
          d="M27 29h-4a1 1 0 00-1 1v12a1 1 0 001 1h5V30a1 1 0 00-1-1z"
          id="fb3-b"
        ></path>
        <path
          d="M43.882 28.133A2.986 2.986 0 0043 28h-6v-3c0-3.824-2.589-4.942-3.958-5A1 1 0 0032 21v4.638l-4 4.8V43h12.23a2.985 2.985 0 002.87-2.118l2.769-9a3 3 0 00-1.987-3.749z"
          id="fb3-d"
        ></path>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb3-e">
          <stop stopColor="#FFF" offset="0%"></stop>
          <stop stopColor="#E2EEFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="32"></rect>
      <use fill="#000" filter="url(#fb3-a)" xlinkHref="#fb3-b"></use>
      <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb3-b"></use>
      <use fill="#000" filter="url(#fb3-c)" xlinkHref="#fb3-d"></use>
      <use fill="url(#fb3-e)" xlinkHref="#fb3-d"></use>
    </svg>
  );
};

export const Icon4 = () => {
  return (
    <svg
    width={70}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
       fill="#2174EA"
    >
      <defs>
        <filter
          x="-29.2%"
          y="-11.5%"
          width="158.3%"
          height="132.2%"
          filterUnits="objectBoundingBox"
          id="fb4-a"
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
          x="-29.2%"
          y="-11.5%"
          width="158.3%"
          height="132.2%"
          filterUnits="objectBoundingBox"
          id="fb4-d"
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
          d="M32 24.691l-10.737-2.656a1.007 1.007 0 00-.87.17c-.247.19-.393.483-.393.795v17a1 1 0 00.737.965L32 43.764V24.691z"
          id="fb4-b"
        ></path>
        <path
          d="M43.607 22.205a1.012 1.012 0 00-.87-.17L32 24.691v19.073l11.263-2.799A1 1 0 0044 40V23c0-.312-.146-.605-.393-.795z"
          id="fb4-e"
        ></path>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb4-c">
          <stop stopColor="#FFF" offset="0%"></stop>
          <stop stopColor="#E2EEFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="32"></rect>
      <use fill="#000" filter="url(#fb4-a)" xlinkHref="#fb4-b"></use>
      <use fill="url(#fb4-c)" xlinkHref="#fb4-b"></use>
      <use fill="#000" filter="url(#fb4-d)" xlinkHref="#fb4-e"></use>
      <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb4-e"></use>
    </svg>
  );
};

export const Icon5 = () => {
  return (
    <svg
    width={70}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
       fill="#2174EA"
    >
      <defs>
        <filter
          x="-29.2%"
          y="-22.7%"
          width="158.3%"
          height="163.6%"
          filterUnits="objectBoundingBox"
          id="fb5-a"
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
        <filter
          x="-15.9%"
          y="-11.4%"
          width="131.8%"
          height="131.8%"
          filterUnits="objectBoundingBox"
          id="fb5-c"
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
        <path id="fb5-b" d="M26 21h12v11H26z"></path>
        <path
          d="M40 21h-4v10l-4-3-4 3V21h-4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V24a3 3 0 00-3-3z"
          id="fb5-d"
        ></path>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb5-e">
          <stop stopColor="#FFF" offset="0%"></stop>
          <stop stopColor="#E2EEFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="32"></rect>
      <use fill="#000" filter="url(#fb5-a)" xlinkHref="#fb5-b"></use>
      <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb5-b"></use>
      <use fill="#000" filter="url(#fb5-c)" xlinkHref="#fb5-d"></use>
      <use fill="url(#fb5-e)" xlinkHref="#fb5-d"></use>
    </svg>
  );
};

export const Icon6 = () => {
  return (
    <svg
    width={70}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
       fill="#2174EA"
    >
      <defs>
        <filter
          x="-14.6%"
          y="-11.4%"
          width="129.2%"
          height="132%"
          filterUnits="objectBoundingBox"
          id="fb6-a"
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
          x="-29.2%"
          y="-20.8%"
          width="158.3%"
          height="158.3%"
          filterUnits="objectBoundingBox"
          id="fb6-d"
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
          d="M41.95 24.051A6.957 6.957 0 0037 22a6.956 6.956 0 00-5 2.102l-.05-.051A6.957 6.957 0 0027 22c-1.87 0-3.627.729-4.95 2.051A6.948 6.948 0 0020 29c0 1.87.728 3.627 2.05 4.949l9.95 9.95 9.95-9.95A6.952 6.952 0 0044 29a6.954 6.954 0 00-2.05-4.949z"
          id="fb6-b"
        ></path>
        <path d="M36 33a6 6 0 100 12 6 6 0 000-12z" id="fb6-e"></path>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb6-c">
          <stop stopColor="#FFF" offset="0%"></stop>
          <stop stopColor="#E2EEFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <rect  width="64" height="64" rx="32"></rect>
      <use fill="#000" filter="url(#fb6-a)" xlinkHref="#fb6-b"></use>
      <use fill="url(#fb6-c)" xlinkHref="#fb6-b"></use>
      <use fill="#000" filter="url(#fb6-d)" xlinkHref="#fb6-e"></use>
      <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb6-e"></use>
    </svg>
  );
};
