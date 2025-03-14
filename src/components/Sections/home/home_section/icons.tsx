export const Icon1 = () => {
  return (
    <svg width={100} viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <circle
        className="hover:opacity-[1] duration-75"
        fill="white"
        opacity={0.7}
        cx="44"
        cy="44"
        r="44"
      ></circle>
      <path
        fill="rgb(33 116 234)"
        d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
      ></path>
    </svg>
  );
};

export const Arrow = ({ width }: { width: number }) => {
  return (
    <svg
    width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className=""
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};
