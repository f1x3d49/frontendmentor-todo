import React, { Fragment, useState } from "react";
import { ReactComponent as Cross } from "../images/icon-cross.svg";
import { useSelector, useDispatch } from "react-redux";
import { Tab } from "@headlessui/react";
import { eliminateTask, toggleTask } from "../redux/tasksSlice";
import ListItem from "./ListItem";

import { selectFilteredTodoId } from "../redux/todosSlice";

const TaskList = () => {
  // Redux Logic
  const all = useSelector((state) => state.tasks.all);
  const completed = useSelector((state) => state.tasks.completed);
  const active = useSelector((state) => state.tasks.active);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Checked State
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="w-full h-auto  flex flex-col items-center justify-center shadow-xl">
      <Tab.Group
        as="div"
        className="flex flex-col justify-center items-center w-full bg-vlgray dark:bg-vddblue rounded-sm"
      >
        <Tab.Panels className="w-full">
          <Tab.Panel>
            <ul className="flex flex-col items-center justify-center w-full h-auto">
              {todos.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4"
                  >
                    <ListItem
                      text={todo.text}
                      id={todo.id}
                      isChecked={todo.checked}
                    />
                  </li>
                );
              })}
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <ul className="flex flex-col items-center justify-center w-full h-auto">
              {active.map((task) => {
                return (
                  <li
                    key={task.id}
                    className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
                      />
                      <p className="dark:text-lightgblue">{task.title}</p>
                    </div>
                    <button
                      className="cross"
                      onClick={() => dispatch(eliminateTask({ id: task.id }))}
                    >
                      <Cross />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <ul className="flex flex-col items-center justify-center w-full h-auto">
              {completed.map((task) => {
                return (
                  <li
                    key={task.id}
                    className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className={`w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer ${
                          isChecked ? "text-gradient2" : ""
                        }`}
                      />
                      <p className="dark:text-lightgblue">{task.title}</p>
                    </div>
                    <button
                      className="cross"
                      onClick={() => dispatch(eliminateTask({ id: task.id }))}
                    >
                      <Cross />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
        <div className="flex items-center justify-between w-full p-4 text-sm">
          <p className="text-dgblue dark:text-darkgblue">
            {all.length} items left
          </p>
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
