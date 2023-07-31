import React from "react";

const FormInput = () => {
  return (
    <form className="flex items-center justify-start w-full bg-vlgray shadow-xl gap-4 pl-4">
      <div>
        <input
          type="checkbox"
          className="w-5 h-5 rounded-full border-vlgblue hover:border-gradient2 text-gradient2 focus:ring-0 hover:cursor-pointer"
        />
      </div>
      <label htmlFor="todo">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="bg-vlgray focus:ring-0 border-0 text-vdgblue"
        />
      </label>
    </form>
  );
};

export default FormInput;
