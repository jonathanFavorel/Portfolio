/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      DEFAULT: "0.9375rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "8px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      large1: "40px",
    },
    extend: {
      colors: {
        green: "#7EB942",
        grey: "#767676",
        white: "#F0F0F6",
        white1: "#FFFFFF",
        yellow: "#FFB400",
        yellow1: "#DF9E00",
        black: "#2B2B2B",
        blackdark: "#1c1c1c",
        blackbg: "#131313",
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
  variants: {
    extend: {
      // Activer les animations pour les variantes "hover", "focus", etc.
      animation: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
};
