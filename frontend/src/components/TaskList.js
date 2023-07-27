import React, { Fragment } from "react";
import { ReactComponent as Check } from "../images/icon-check.svg";
import { Tab } from "@headlessui/react";

const TaskList = () => {
  return (
    <div className="w-full h-auto bg-vlgray flex flex-col items-center justify-center shadow-xl">
      <Tab.Group
        as="div"
        className="flex flex-col justify-center items-center w-full"
      >
        <Tab.Panels className="w-full">
          <Tab.Panel>
            <ul className="flex flex-col items-center justify-center w-full h-auto">
              <li className="border-b-2 border-vlgblue p-4 w-full flex items-center gap-4">
                <div className="active:bg-gradient-to-r from-gradient1 to-graident2 rounded-full ring-[1px]">
                  <button className="flex items-center justify-center rounded-full w-5 h-5">
                    <Check />
                  </button>
                </div>
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
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
        <div className="flex items-center justify-between w-full p-4 text-sm">
          <p className="text-dgblue">5 items left</p>
          <Tab.List className="flex items-center justify-center gap-2 font-[700]">
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
