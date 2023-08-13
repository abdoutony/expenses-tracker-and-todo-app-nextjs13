import React from "react";
import IncomeExpensesContent from "./income-expenses-content";
type Props = {
  expenses: number;
  income: number;
};
export default function IncomeExpenses({ expenses, income }: Props) {
  return (
    <div className="mt-5 flex flex-col bg-white border  p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
      <div className="flex w-full justify-around">
        <IncomeExpensesContent
          title="Income"
          content={income}
          colorClass="text-blue-500"
        />
        <IncomeExpensesContent
          title="Expenses"
          content={expenses}
          colorClass="text-red-500"
        />
      </div>
    </div>
  );
}
