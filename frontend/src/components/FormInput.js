import React from "react";

const FormInput = () => {
  return (
    <form className="flex items-center justify-start w-full bg-vlgray dark:bg-vddblue shadow-xl gap-4 pl-4 rounded-sm">
      <div>
        <input
          type="checkbox"
          className="w-5 h-5 rounded-full border-vlgblue dark:border-darkgblue bg-transparent hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
        />
      </div>
      <label htmlFor="todo">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="bg-vlgray dark:bg-vddblue focus:ring-0 border-0 text-vdgblue dark:text-darkgblue py-4"
        />
      </label>
    </form>
  );
};

export default FormInput;
