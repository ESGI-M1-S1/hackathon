import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [flowbite.plugin()],
  theme: {
    colors: {
      black: "#050505",
      brown: "#AF9B8B",
      white: "#F1ECE9",
    },
  },
};
export default config;
