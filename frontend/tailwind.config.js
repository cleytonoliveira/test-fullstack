/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        nero: "#1a1a1a",
        "koji-orange": "#F7AE46",
      },
      screens: {
        sm: { min: "375px", max: "897px" },
      },
      textColor: {
        "koji-orange": "#F7AE46",
      },
      borderColor: {
        "koji-orange": "#F7AE46",
      },
    },
  },
  plugins: [],
};
