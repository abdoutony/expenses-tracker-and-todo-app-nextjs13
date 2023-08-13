import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchItem = async (url: string, id: string) => {
  // @ts-ignore
  const response = await axios(url);
  const data = await response.data;
  return data;
};

const fetchLatestTransactions = async (url: string, id: string) => {
  console.log(id && id);
  // @ts-ignore
  const response = await axios(`${url}/${id}/transaction/latest`);
  const data = await response.data;
  return data;
};

const fetchFunctions: any = {
  regular: fetchItem,
  latestTransaction: fetchLatestTransactions,
};

const useFetch = (url: string, fetchType: string, session: any) => {
  var id = "";
  if (session.status === "authenticated") {
    id = session.data.user.id;
  }
  id = "ddd";
  return useQuery({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => fetchFunctions[fetchType](url, id && id),
    suspense: true,
    // staleTime: 5 * 1000,
    enabled: !!session,
  });
};

export default useFetch;
