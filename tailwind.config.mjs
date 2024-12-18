/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: false,
      padding: "0",
      screens: {},
    },
    colors: {
      white: "hsl(0 0% 100%)",
      "almost-white": "hsl(0 0% 97%)",
      "grayish-blue": "hsl(229, 8%, 60%)",
      "very-dark-blue": "hsl(229, 31%, 21%)",
      "soft-blue": "hsl(231, 69%, 60%)",
      "soft-red": "hsl(0, 94%, 66%)",
    },
    fontFamily: {
      sans: ['"Rubik"', "sans-serif"],
    },
    fontSize: {
      sm: "0.9375rem",
      base: "1rem",
      "base-l": "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "3rem",
    },
    borderRadius: {
      sm: "0.3125rem",
      md: "0.9375rem",
    },
    extend: {
      boxShadow: {
        md: "0 8px 8px -4px rgba(73, 93, 207, 20.01%)",
        lg: "0 10px 20px -5px rgba(73, 93, 207, 20.01%)",
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.5rem",
        22: "6rem",
        23: "7rem",
        24: "8rem",
        25: "9rem",
        26: "10rem",
      },
    },
  },
  plugins: [],
};
