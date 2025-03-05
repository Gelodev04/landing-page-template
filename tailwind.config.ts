import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondarytext: "#64748B",
        maintext: "#1E293B",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: "var(--font-playfair)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
} satisfies Config;
