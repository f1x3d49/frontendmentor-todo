/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      brightblue: "hsl(220, 98%, 61%)",
      gradient1: "hsl(192, 100%, 67%)",
      graident2: "hsl(280, 87%, 65%)",
    },
    extend: {
      fontFamily: ["Josefin Sans", "sans-serif"],
    },
    fontSize: {
      standard: "18px",
    },
  },
  plugins: [],
};
