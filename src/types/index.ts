export type BaseTransaction = {
  id: string;
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
};

// id: "4478a7b3-5548-4034-bed4-78fcbf6d0c3c";
// title: "Insurance";
// type: "expenses";
// amount: "2555";
// createdAt: "2023-08-13T17:38:21.218Z";
// updatedAt: "2023-08-13T17:38:21.218Z";
// userId: "0f2b7d2d-cc93-41ba-8cdb-35ee67083bee";

export type AddTransaction = Omit<
  BaseTransaction,
  "id" | "createdAt" | "updatedAt"
>;

export type SelectData = {
  id: string;
  value: string;
  text: string;
};
