import React from "react";

export default function AddTodo() {
  return (
    <div>
      <h3 className="text-3x font-bold">Add new todo</h3>
      <input
        type="text"
        placeholder="todo"
        className="px-3 py-2 border mt-3 mb-3 w-full border-gray-300"
      />
      <button className="btn bg-blue-500 w-full px-3 py-2 text-white font-bold">
        add
      </button>
    </div>
  );
}
