/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fontColor: "#4A4A52",
        darkBlue: "#212337",
        green: "#749B3F",
        red: "#EE4536",
        orange: "#FF6A1A",
        customWhite: "#FFEFEB",
      },
      fontFamily: {
        questrial: ["Questrial", "serif"],
        rubik: ["Rubik", "serif"],
      },
      backgroundImage: {
        "custom-bg": "url('../public/countdown.png')", // Add custom background image
      },
    },
  },
  plugins: [],
};
