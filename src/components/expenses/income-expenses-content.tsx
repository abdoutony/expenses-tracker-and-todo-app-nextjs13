import React from "react";
type Props = {
  title: string;
  content: number;
  colorClass: string;
};
export default function IncomeExpensesContent({
  title,
  content,
  colorClass,
}: Props) {
  return (
    <div className="income-content text-center">
      <h3 className="text-sm w-1/2 font-bold">{title}</h3>
      <p className={`${colorClass} text-xl font-light`}>{content}</p>
    </div>
  );
}
