import { AddTransaction } from "@/types";
import axios from "axios";
export function addNewTransaction(
  { title, type, amount, userId }: AddTransaction,
  setCount: any,
  setAddError: (error: any) => void
) {
  axios
    .post(`http://localhost:3000/api/transaction`, {
      title,
      type,
      amount,
      userId,
    })
    .then((res) => {
      setCount((prevCount: any) => prevCount + 1);
    })
    .catch((err) => setAddError(err));
}
