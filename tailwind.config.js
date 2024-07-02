import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    fontFamily: {
      inter: ["Inter", ..._fontFamily.serif],
    },
  },
};
export const plugins = [];
