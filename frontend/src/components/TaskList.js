import React, { Fragment } from "react";
import { ReactComponent as Cross } from "../images/icon-cross.svg";
import { Tab } from "@headlessui/react";

const TaskList = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="w-full h-auto  flex flex-col items-center justify-center shadow-xl gap-48">
      <Tab.Group
        as="div"
        className="flex flex-col justify-center items-center w-full bg-vlgray"
      >
        <Tab.Panels className="w-full">
          <Tab.Panel>
            <ul className="flex flex-col items-center justify-center w-full h-auto">
              <li className="border-b-2 border-vlgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p>Complete online Javascript Course</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
              <li className="border-b-2 border-vlgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p>Jog around the park 3x</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
              <li className="border-b-2 border-vlgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p>10 minutes meditation</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>

              <li className="border-b-2 border-vlgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p>Read for 1 hour</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
              <li className="border-b-2 border-vlgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p>Pick up grocceries</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
              <li className="border-b-2 border-vlgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p>Complete tod ap on fronted</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
        <div className="flex items-center justify-between w-full p-4 text-sm">
          <p className="text-dgblue">5 items left</p>
          <Tab.List className="items-center justify-center text-center gap-2 font-[700] mobile:hidden desktop:flex">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`hover:text-vdgblue ${
                    selected ? "text-brightblue" : "text-dgblue"
                  }`}
                >
                  All
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`hover:text-vdgblue ${
                    selected ? "text-brightblue" : "text-dgblue"
                  }`}
                >
                  Active
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`hover:text-vdgblue ${
                    selected ? "text-brightblue" : "text-dgblue"
                  }`}
                >
                  Completed
                </button>
              )}
            </Tab>
          </Tab.List>
          <button className="text-lgblue hover:text-vdgblue">
            Clear Completed
          </button>
        </div>
      </Tab.Group>
    </div>
  );
};

export default TaskList;
