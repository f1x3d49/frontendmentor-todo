import React, { Fragment } from "react";

// Framer Motion Tools
import { Reorder, motion } from "framer-motion";

// Redux Tools
import { useSelector, useDispatch } from "react-redux";
import {
  completedTodoCleared,
  selectFilteredTodos,
  selectRemainingTodos,
  reorderTodos,
} from "../redux/todosSlice";
import { StatusFilters, statusFilterChanged } from "../redux/filtersSlice";

// HeadlessUI Component
import { Tab } from "@headlessui/react";

// Todo Item Component
import ListItem from "./ListItem";

const TaskList = () => {
  // Redux Logic
  const todos = useSelector(selectFilteredTodos);
  const remainigTodos = useSelector(selectRemainingTodos);
  const dispatch = useDispatch();

  // Reorder Handle
  const handleReorder = (e) => {
    dispatch(reorderTodos(e));
  };

  // Framer Variants
  const container = {
    hidden: { opacity: 0, y: 500 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ type: "spring", duration: 1.5 }}
      className="w-full h-auto  flex flex-col items-center justify-center shadow-xl"
    >
      <Tab.Group
        as="div"
        className="flex flex-col justify-center items-center w-full bg-vlgray dark:bg-vddblue rounded-sm"
      >
        <Tab.Panels className="w-full">
          <Tab.Panel>
            <Reorder.Group
              axis="y"
              onReorder={handleReorder}
              values={todos}
              className="flex flex-col items-center justify-center w-full h-auto"
            >
              {todos.map((todo, index) => {
                return (
                  <Reorder.Item
                    key={todo.id}
                    value={todo}
                    className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4"
                  >
                    <ListItem
                      text={todo.text}
                      id={todo.id}
                      isChecked={todo.completed}
                      index={index}
                    />
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
          </Tab.Panel>
          <Tab.Panel>
            <ul className="flex flex-col items-center justify-center w-full h-auto">
              {todos.map((todo, index) => {
                return (
                  <li
                    key={todo.id}
                    className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4"
                  >
                    <ListItem
                      text={todo.text}
                      id={todo.id}
                      isChecked={todo.completed}
                      index={index}
                    />
                  </li>
                );
              })}
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <ul className="flex flex-col items-center justify-center w-full h-auto">
              {todos.map((todo, index) => {
                return (
                  <li
                    key={todo.id}
                    className="border-b-2 border-vlgblue dark:border-darkgblue p-4 w-full flex items-center justify-between gap-4"
                  >
                    <ListItem
                      text={todo.text}
                      id={todo.id}
                      isChecked={todo.completed}
                      index={index}
                    />
                  </li>
                );
              })}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
        <div className="flex items-center justify-between w-full p-4 text-sm">
          <p className="text-dgblue dark:text-darkgblue">
            {remainigTodos.length} items left
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
                  onClick={() =>
                    dispatch(statusFilterChanged(StatusFilters.All))
                  }
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
                  onClick={() =>
                    dispatch(statusFilterChanged(StatusFilters.Active))
                  }
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
                  onClick={() =>
                    dispatch(statusFilterChanged(StatusFilters.Completed))
                  }
                >
                  Completed
                </button>
              )}
            </Tab>
          </Tab.List>
          <button
            className="text-lgblue hover:text-vdgblue dark:text-darkgblue dark:hover:text-lgblue"
            onClick={() => dispatch(completedTodoCleared())}
          >
            Clear Completed
          </button>
        </div>
      </Tab.Group>
    </motion.div>
  );
};

export default TaskList;
