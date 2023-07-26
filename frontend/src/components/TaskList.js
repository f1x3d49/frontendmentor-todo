import React from "react";

const TaskList = () => {
  return (
    <div className="w-full h-auto bg-vlgray flex flex-col items-center justify-center shadow-xl">
      <ul className="flex flex-col items-center justify-center w-full h-auto">
        <li className="border-b-2 border-vlgblue py-4 w-full">
          Complete online Js course
        </li>
        <li className="border-b-2 border-vlgblue py-4 w-full">
          Jog around the park 3x
        </li>
        <li className="border-b-2 border-vlgblue py-4 w-full">
          10 minutes meditation
        </li>
        <li className="border-b-2 border-vlgblue py-4 w-full">
          Read for 1 hour
        </li>
        <li className="border-b-2 border-vlgblue py-4 w-full">
          Pick up grocceries
        </li>
        <li className="border-b-2 border-vlgblue py-4 w-full">
          Complete tod ap on fronted
        </li>
      </ul>
      <div className="flex items-center justify-between w-full">
        <p>5 items left</p>
        <div className="flex items-start justify-center gap-2">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p>Clear Completed</p>
      </div>
    </div>
  );
};

export default TaskList;
