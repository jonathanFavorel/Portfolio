/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#7EB942",
        grey: "#767676",
        white: "#F0F0F6",
        white1: "#FFFFFF",
        yellow: "#FFB400",
        yellow1: "#DF9E00",
        black: "#2B2B2B",
        background: "#F0F0F6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "inter-thin": ["Inter Thin", "sans-serif"],
        "inter-extra-light": ["Inter ExtraLight", "sans-serif"],
        "inter-light": ["Inter Light", "sans-serif"],
        "inter-regular": ["Inter Regular", "sans-serif"],
        "inter-medium": ["Inter Medium", "sans-serif"],
        "inter-semibold": ["Inter SemiBold", "sans-serif"],
        "inter-bold": ["Inter Bold", "sans-serif"],
        "inter-extra-bold": ["Inter ExtraBold", "sans-serif"],
        "inter-black": ["Inter Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
