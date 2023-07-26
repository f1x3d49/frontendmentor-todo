import React from "react";
import { ReactComponent as Check } from "../images/icon-check.svg";

const TaskList = () => {
  return (
    <div className="w-full h-auto bg-vlgray flex flex-col items-center justify-center shadow-xl">
      <ul className="flex flex-col items-center justify-center w-full h-auto">
        <li className="border-b-2 border-vlgblue p-4 w-full flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full border-[1px] border-vlgblue w-5 h-5">
            <Check />
          </button>
          <p>Complete online Javascript Course</p>
        </li>
        <li className="border-b-2 border-vlgblue p-4 w-full flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full border-[1px] border-vlgblue w-5 h-5">
            <Check />
          </button>
          <p>Jog around the park 3x</p>
        </li>
        <li className="border-b-2 border-vlgblue p-4 w-full flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full border-[1px] border-vlgblue w-5 h-5">
            <Check />
          </button>
          <p>10 minutes meditation</p>
        </li>
        <li className="border-b-2 border-vlgblue p-4 w-full flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full border-[1px] border-vlgblue w-5 h-5">
            <Check />
          </button>
          <p>Read for 1 hour</p>
        </li>
        <li className="border-b-2 border-vlgblue p-4 w-full flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full border-[1px] border-vlgblue w-5 h-5">
            <Check />
          </button>
          <p>Pick up grocceries</p>
        </li>
        <li className="border-b-2 border-vlgblue p-4 w-full flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full border-[1px] border-vlgblue w-5 h-5">
            <Check />
          </button>
          <p>Complete tod ap on fronted</p>
        </li>
      </ul>
      <div className="flex items-center justify-between w-full p-4 text-sm">
        <p className="text-dgblue">5 items left</p>
        <div className="flex items-start justify-center gap-2 text-dgblue font-[700]">
          <button className="hover:text-vdgblue">All</button>
          <button className="hover:text-vdgblue">Active</button>
          <button className="hover:text-vdgblue">Completed</button>
        </div>
        <button className="text-lgblue hover:text-vdgblue">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskList;
