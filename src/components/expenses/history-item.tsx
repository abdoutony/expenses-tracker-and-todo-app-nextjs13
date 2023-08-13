import { BaseTransaction } from "@/types";
import React from "react";
type Props = {
  data: BaseTransaction;
};
const borders: any = {
  expenses: "border-r-red-500",
  income: "border-r-green-500",
};
export default function HistoryItem({ data }: Props) {
  return (
    <div
      className={`
      flex my-5 flex-col bg-white border  p-3 md:p-3 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 border-r-8
      ${borders[data.type]}
    
      `}
    >
      {data.title}
    </div>
  );
}
