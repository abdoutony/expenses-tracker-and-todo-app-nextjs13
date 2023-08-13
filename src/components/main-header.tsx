"use clinet";
import MainContext from "@/contexts/main-contenxt";
import Link from "next/link";
import React, { useContext } from "react";

export default function MainHeader() {
  const { showExpenses, showTodos, setShowExpenses, setShowTodos }: any =
    useContext(MainContext);
  const handleShowExpenses = () => {
    setShowExpenses(true);
    setShowTodos(false);
  };
  const handleShowTodos = () => {
    setShowExpenses(false);
    setShowTodos(true);
  };
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 mt-10 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 ">
      <div className="top-link mb-5">
        <button
          onClick={handleShowExpenses}
          className={`hover:text-blue-200 ${showExpenses && "text-blue-500 "}`}
        >
          Expenses
        </button>
        <span className="mx-2">/</span>
        <button
          className={`hover:text-blue-200 ${showTodos && "text-blue-500 "}`}
          onClick={handleShowTodos}
        >
          Todos
        </button>
      </div>
      <div className="title">
        <h1 className="title-text text-3xl font-bold first-letter:">
          Expenses Tracker
        </h1>
      </div>
    </div>
  );
}
