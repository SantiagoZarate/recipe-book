/* eslint-disable @typescript-eslint/no-require-imports */
import { getTailwindConfig } from "@recipe-book/tailwind-config";
import { Config } from "tailwindcss";

const config: Config = {
  ...getTailwindConfig(),
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
};

export default config;
