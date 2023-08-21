import React from "react";
import AddTodo from "./add-todo";

export default function TodosWrapper() {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
      <AddTodo />
    </div>
  );
}
