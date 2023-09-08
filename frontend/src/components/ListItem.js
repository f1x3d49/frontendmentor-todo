import React, { useEffect, useState } from "react";

import "./ListItem.css";

// Cross SVG
import { ReactComponent as Cross } from "../images/icon-cross.svg";

// Redux Tools
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todosSlice";

const ListItem = ({ text, id, isChecked, index }) => {
  // React State Logic
  const [checked, setChecked] = useState(false);

  // Redux Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (isChecked === true) setChecked(true);
  }, [checked, setChecked, isChecked]);

  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <div className="flex gap-4">
        {" "}
        <input
          type="checkbox"
          onClick={() => {
            setChecked(!checked);
            dispatch(toggleTodo(index));
          }}
          className={`w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2  focus:ring-0 hover:cursor-pointer ${
            checked ? "" : "text-gradient2"
          }`}
        />
        <p className="dark:text-lightgblue">{text}</p>
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
