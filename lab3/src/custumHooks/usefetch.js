import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, SetData] = useState(null);
  const [isPending, SetIsPending] = useState(true);
  const [error, SetError] = useState(false);

  useEffect(() => {
    const abortReq = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortReq.signal })
        .then((res) => {
          if (!res.ok) throw Error("error.. cant fetch data for that url");
          return res.json();
        })
        .then((data) => {
          console.log(data);
          SetData(data);
          SetIsPending(false);
          SetError(false);
        })
        .catch((err) => {
          if (err.name === "AbortErrort") {
          } else {
            SetIsPending(false);
            SetData(null);
            SetError(err.message);
          }
        });
    }, 1000);
    return () => {
      abortReq.abort();
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
