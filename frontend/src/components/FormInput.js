import React, { useState } from "react";

// Redux Tools
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";

const FormInput = () => {
  // Redux dispatch
  const dispatch = useDispatch();

  // Form Input State
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim().length === 0) {
      alert("Enter a task before adding !!");
      setContent("");
      return;
    }
    dispatch(addTodo(content, checked));
    setContent("");
    setChecked(false);
  };

  return (
    <form
      className="flex items-center justify-start w-full bg-vlgray dark:bg-vddblue shadow-xl gap-4 pl-4 rounded-sm"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="checkbox"
          className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
          onClick={() => setChecked(!checked)}
        />
      </div>
      <label htmlFor="todo">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Create a new todo..."
          className="bg-vlgray dark:bg-vddblue focus:ring-0 border-0 text-vdgblue dark:text-darkgblue py-4"
        />
      </label>
    </form>
  );
};

export default FormInput;
