import React, { useEffect, useState } from "react";
import FormInput from "./components/FormInput";
import TaskList from "./components/TaskList";

// SVG for Dark/Light Theme
import { ReactComponent as Moon } from "./images/icon-moon.svg";
import { ReactComponent as Sun } from "./images/icon-sun.svg";

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
          <h1 className="mobile:text-2xl desktop:text-4xl font-[700] text-vlgray tracking-[0.75rem]">
            TODO
          </h1>
          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? <Sun /> : <Moon />}
          </button>
        </div>
        <FormInput />
        <TaskList darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <h1 className="text-sm text-dgblue dark:text-darkgblue">
          Drag and drop to reorder list
        </h1>
      </div>
      <div className="w-full mobile:h-[200px] desktop:h-[300px] bg-no-repeat bg-cover mobile:bg-mobileLight mobile:dark:bg-mobileDark desktop:bg-desktopLight desktop:dark:bg-desktopDark"></div>
      <div className="flex flex-grow bg-vlgray dark:bg-vdblue"></div>
    </div>
  );
}

export default App;
