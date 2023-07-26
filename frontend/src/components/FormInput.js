import React from "react";

const FormInput = () => {
  return (
    <form className="flex items-center justify-center w-full bg-vlgray shadow-xl">
      <div>
        <input
          type="checkbox"
          name="circle"
          value="checked"
          className="h-4 w-4 rounded-full border-2 block border-vlgray"
        />
      </div>
      <label htmlFor="todo">
        <input type="text" placeholder="Create a new todo..." />
      </label>
    </form>
  );
};

export default FormInput;
