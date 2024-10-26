import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            "nav-bg": "var(--nav-bg)",
            background: "var(--background)",
            text: "var(--text)",
         },
         boxShadow: {
            custom: "0 0 10px 1px rgba(0, 0, 0, 0.1)",
         },
         transitionProperty: {
            rotate: "rotate",
         },
         transitionDuration: {
            rotate: "300ms",
         },
         transitionTimingFunction: {
            rotate: "linear",
         },
         gridTemplateColumns: {
            "auto-fit": "repeat(auto-fit, minmax(200px, 1fr))",
         },
      },
   },
   plugins: [],
};
export default config;
