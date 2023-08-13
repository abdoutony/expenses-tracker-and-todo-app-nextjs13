import React from "react";
import HistoryItem from "./history-item";
import { BaseTransaction } from "@/types";
type Props = {
  data: BaseTransaction[];
};
export default function HistoryWrapper({ data }: Props) {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold">History (last 2 transactions)</h3>
        <button className="text-gray-400 dark:text-gray-200">view all</button>
      </div>
      <div className="history-content mt-5">
        {data &&
          data.map((el: BaseTransaction) => (
            <HistoryItem key={el.id} data={el} />
          ))}
        {/* <HistoryItem /> */}
      </div>
    </div>
  );
}
