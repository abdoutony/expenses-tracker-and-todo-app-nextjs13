"use client";
import React, { useState } from "react";
import MainHeader from "./main-header";
import ExpensesWrapper from "./expenses/wrapper";
import TodosWrapper from "./todos/wrapper";
import MainContext from "@/contexts/main-contenxt";
import MainFooter from "./main-footer";
export default function MainWrapper() {
  const [showTodos, setShowTodos] = useState<Boolean>(false);
  const [showExpenses, setShowExpenses] = useState<Boolean>(true);

  return (
    <MainContext.Provider
      value={{ showExpenses, showTodos, setShowExpenses, setShowTodos }}
    >
      <div className="w-full flex justify-center mb-10 ">
        <div className="w-1/2">
          <MainHeader />
          <div
            className={
              showExpenses ? "mt-5 content-expenses-wrapper block" : "hidden"
            }
          >
            <ExpensesWrapper />
          </div>
          <div
            className={
              showTodos ? "mt-5 content-todos-wrapper block" : "hidden"
            }
          >
            <TodosWrapper />
          </div>
          <div className="mt-5">
            <MainFooter />
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}
