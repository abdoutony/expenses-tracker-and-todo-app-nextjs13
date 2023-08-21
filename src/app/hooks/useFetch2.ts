import { useEffect, useState } from "react";
export default function useFetch(url: string, session: any, count: number) {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>({});
  useEffect(() => {
    if (session.status === "authenticated") {
      setIsLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setData(data);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [session, count]);
  return { data, isLoading, error };
}
