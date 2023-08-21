"use client";
import React, {
  useState,
  useEffect,
  experimental_useOptimistic as useOptimistic,
} from "react";

import TotalBalance from "./total-balance";
import IncomeExpenses from "./income-expenses";
import HistoryWrapper from "./history-wrapper";
import AddTransactionWrapper from "./add-transaction-wrapper";
import { useSession } from "next-auth/react";
import MainContext from "@/contexts/main-contenxt";
import useFetch from "@/app/hooks/useFetch2";

export default function ExpensesWrapper() {
  const [count, setCount] = useState<number>(0);
  const session = useSession({
    required: true,
  });
  // @ts-ignore
  const id = session.data?.user?.id;

  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/user/${id}/transaction/latest`,
    session,
    count
  );
  const {
    data: totals,
    isLoading: isLoading2,
    error: error2,
  } = useFetch(
    `http://localhost:3000/api/user/${id}/transaction/stat`,
    session,
    count
  );

  return (
    <MainContext.Provider value={{ setCount }}>
      <div
        className="flex flex-col
  
    bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400"
      >
        {/* {data && data.transactions.map((el: any) => <h1>Gu</h1>)} */}
        {isLoading2 && <h2>Loading ...</h2>}
        {!isLoading2 && totals && (
          <>
            <TotalBalance total={totals.total} />
            <IncomeExpenses expenses={totals.expenses} income={totals.income} />
          </>
        )}

        {isLoading && <h2>Loading ...</h2>}
        {!isLoading && data && (
          <>
            <HistoryWrapper data={data && data.transactions} />
          </>
        )}
        <AddTransactionWrapper />
      </div>
    </MainContext.Provider>
  );
}
