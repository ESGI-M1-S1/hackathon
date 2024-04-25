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
    fontFamily: {
      Amethysta: ["Amethysta", "serif"],
    },
    colors: {
      black: "#050505",
      brownText: "#DBBCA4",
      brown: "#AD6F3D",
      white: "#F1ECE9",
      red: "#80002D",
    },
  },
};
export default config;
