import React, { useEffect, useState } from "react";

// React Custom Components
import FormInput from "./components/FormInput";
import TaskList from "./components/TaskList";

// SVG for Dark/Light Theme
import { ReactComponent as Moon } from "./images/icon-moon.svg";
import { ReactComponent as Sun } from "./images/icon-sun.svg";

// Framer Motion
import { motion } from "framer-motion";

// h1 container variant
const h1var = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    switch (darkTheme) {
      case true:
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case false:
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [element, darkTheme]);

  return (
    <div className="relative w-full min-h-screen flex flex-col font-primary">
      <div className="absolute flex flex-col items-center justify-center min-h-screen w-full mobile:px-4 desktop:px-[500px] gap-8">
        <div className="w-full flex justify-between items-center">
          <motion.h1
            variants={h1var}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="mobile:text-2xl desktop:text-4xl font-[700] text-vlgray tracking-[0.75rem]"
          >
            TODO
          </motion.h1>
          <motion.button
            variants={h1var}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            onClick={() => setDarkTheme(!darkTheme)}
          >
            {darkTheme ? <Sun /> : <Moon />}
          </motion.button>
        </div>
        <FormInput />
        <TaskList darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <motion.h1
          variants={h1var}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="text-sm text-dgblue dark:text-darkgblue"
        >
          Drag and drop to reorder list
        </motion.h1>
      </div>
      <div className="w-full mobile:h-[200px] desktop:h-[300px] bg-no-repeat bg-cover mobile:bg-mobileLight mobile:dark:bg-mobileDark desktop:bg-desktopLight desktop:dark:bg-desktopDark"></div>
      <div className="flex flex-grow bg-vlgray dark:bg-vdblue"></div>
    </div>
  );
}

export default App;
