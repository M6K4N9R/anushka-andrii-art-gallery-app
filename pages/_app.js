import Layout from "@/components/Layout";
import GlobalStyle from "../styles";

import { useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";

// const fetcher = async (...args) => {
//   const response = await fetch(...args);
//   if (!response.ok) {
//     throw new Error(`Request with ${JSON.stringify(args)} failed.`);
//   }
//   return await response.json();
// };

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  console.log("data:", data);

  const [_, setPiecesInfo] = useLocalStorageState("artPieces", {
    defaultValue: [],
  });

  useEffect(() => {
    setPiecesInfo(data);
  }, [data, setPiecesInfo]);

  return (
    <>
      <GlobalStyle />
      <Layout />

      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} pieces={isLoading || error ? [] : data} />
      </SWRConfig>
    </>
  );
}

// On to userstory 5
// Test commit 1
