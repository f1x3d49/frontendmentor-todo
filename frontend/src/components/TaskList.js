import React, { Fragment } from "react";
import { ReactComponent as Cross } from "../images/icon-cross.svg";
import { Tab } from "@headlessui/react";

const TaskList = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="w-full h-auto  flex flex-col items-center justify-center shadow-xl">
      <Tab.Group
        as="div"
        className="flex flex-col justify-center items-center w-full bg-vlgray dark:bg-vddblue rounded-sm"
      >
        <Tab.Panels className="w-full">
          <Tab.Panel>
            <ul className="flex flex-col items-center justify-center w-full h-auto">
              <li className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p className="dark:text-lightgblue">
                    Complete online Javascript Course
                  </p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
              <li className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p className="dark:text-lightgblue">Jog around the park 3x</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
              <li className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p className="dark:text-lightgblue">10 minutes meditation</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>

              <li className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p className="dark:text-lightgblue">Read for 1 hour</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
              <li className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p className="dark:text-lightgblue">Pick up grocceries</p>
                </div>
                <button className="cross">
                  <Cross />
                </button>
              </li>
              <li className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                  />
                  <p className="dark:text-lightgblue">
                    Complete tod ap on fronted
                  </p>
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
          <p className="text-dgblue dark:text-darkgblue">5 items left</p>
          <Tab.List className="items-center justify-center text-center gap-2 font-[700] mobile:hidden desktop:flex">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`hover:text-vdgblue dark:hover:text-lgblue ${
                    selected
                      ? "text-brightblue"
                      : "text-dgblue dark:text-darkgblue"
                  }`}
                >
                  All
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`hover:text-vdgblue dark:hover:text-lgblue ${
                    selected
                      ? "text-brightblue"
                      : "text-dgblue dark:text-darkgblue"
                  }`}
                >
                  Active
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`hover:text-vdgblue dark:hover:text-lgblue ${
                    selected
                      ? "text-brightblue"
                      : "text-dgblue dark:text-darkgblue"
                  }`}
                >
                  Completed
                </button>
              )}
            </Tab>
          </Tab.List>
          <button className="text-lgblue hover:text-vdgblue dark:text-darkgblue dark:hover:text-lgblue">
            Clear Completed
          </button>
        </div>
      </Tab.Group>
    </div>
  );
};

export default TaskList;
