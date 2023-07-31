/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brightblue: "hsl(220, 98%, 61%)",
        gradient1: "hsl(192, 100%, 67%)",
        gradient2: "hsl(280, 87%, 65%)",
        vlgray: "hsl(0,0%, 98%)",
        vlgblue: "hsl(236, 33%, 92%)",
        lgblue: "hsl(233, 11%, 84%)",
        dgblue: "hsl(236, 9%, 61%)",
        vdgblue: "hsl(235, 19%, 35%)",
      },
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        standard: "18px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        desktopDark: "url('./images/bg-desktop-dark.jpg')",
        desktopLight: "url('./images/bg-desktop-light.jpg')",
        mobileDark: "url('./images/bg-mobile-dark.jpg')",
        mobileLight: "url('./images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
