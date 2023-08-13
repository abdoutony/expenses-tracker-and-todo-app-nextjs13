import React from "react";
type Props = {
  total: number;
};
export default function TotalBalance({ total }: Props) {
  return (
    <div>
      <h3 className="text-sm font-bold">Total Balance</h3>
      <p className="mt-5 text-4xl font-light">{total}</p>
    </div>
  );
}
