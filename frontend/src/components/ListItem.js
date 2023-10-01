import React from "react";

import "./ListItem.css";

// Cross SVG
import { ReactComponent as Cross } from "../images/icon-cross.svg";

// Check IMG
import check from "../images/icon-check.svg";

// Redux Tools
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todosSlice";

const ListItem = ({ text, id, isChecked, index }) => {
  // Redux Dispatch
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <div className="flex gap-4">
        <button
          type="button"
          aria-label="complete"
          onClick={() => {
            dispatch(toggleTodo(index));
          }}
          className={`flex items-center justify-center w-5 h-5 aspect-square rounded-full border-vlgblue border-[1px] dark:border-darkgblue  hover:border-gradient2 hover:cursor-pointer ${
            isChecked ? "bg-gradient2" : ""
          }`}
        >
          {isChecked && (
            <img
              src={check}
              alt="check"
              aria-hidden
              className="h-2 text-black z-10"
            />
          )}
        </button>
        <p
          className={`dark:text-lightgblue ${isChecked ? "line-through" : ""}`}
        >
          {text}
        </p>
      </div>
      <button
        className="cross"
        onClick={() => {
          dispatch(removeTodo(index));
          console.log(id);
        }}
      >
        <Cross />
      </button>
    </div>
  );
};

export default ListItem;
