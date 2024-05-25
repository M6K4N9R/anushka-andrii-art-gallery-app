import GlobalStyle from "../styles";

import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};

export default function App({ Component, pageProps }) {
  console.log({ Component, pageProps });
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  console.log("data:", data);
  const [artPieces, setArtPieces] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  useEffect(() => {
    setArtPieces(data);
  }, [data]);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : data}
        artPiecesInfo={artPieces}
      />
    </>
  );
}