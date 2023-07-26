import FormInput from "./components/FormInput";
import TaskList from "./components/TaskList";
import { ReactComponent as Moon } from "./images/icon-moon.svg";

function App() {
  return (
    <div className="relative w-full min-h-screen flex flex-col font-primary">
      <div className="absolute flex flex-col items-center justify-center min-h-screen w-full mobile:px-4 desktop:px-[500px] gap-8">
        <div className="w-full flex justify-between items-center">
          <h1 className="mobile:text-2xl desktop:text-4xl font-[700] text-vlgray tracking-[0.75rem]">
            TODO
          </h1>
          <button>
            <Moon />
          </button>
        </div>
        <FormInput />
        <TaskList />
        <h1 className="text-base text-dgblue">Drag and drop to reorder list</h1>
      </div>
      <div className="w-full mobile:h-[200px] desktop:h-[300px] bg-no-repeat bg-cover mobile:bg-mobileLight desktop:bg-desktopLight  "></div>
      <div className="flex flex-grow bg-vlgray"></div>
    </div>
  );
}

export default App;
